import reportTimestamps from './reports.json';
export { default as reportTimestamps } from './reports.json';

const reportTimestampsSet = new Set(reportTimestamps);

export const latestReportTimestamp = reportTimestamps[0];

export function reportURL(timestamp: number): string | undefined {
  if (reportTimestampsSet.has(timestamp)) {
    return `${import.meta.env.BASE_URL}reports/${timestamp}.txt`;
  }
  return undefined;
}

const reportCache = new Map<number, string>();

export async function fetchReport(timestamp: number): Promise<string> {
  const cached = reportCache.get(timestamp);
  if (cached !== undefined) {
    return cached;
  }
  const url = reportURL(timestamp);
  if (url === undefined) {
    throw new Error(`report ${timestamp} does not exist`);
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (response.status !== 200) {
      throw new Error(`HTTP ${response.status}`);
    }
    const report = await response.text();
    reportCache.set(timestamp, report);
    return report;
  } catch (e) {
    console.error(e);
    let msg = e.toString();
    if (e.name === 'AbortError') {
      msg = 'timeout after 5s';
    }
    throw new Error(`failed to fetch report: ${url}: ${msg}`);
  }
}
