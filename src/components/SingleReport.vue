<template>
  <pre v-if="error" class="text-xs text-red-500 whitespace-pre-wrap">{{ error.toString() }}</pre>
  <template v-else>
    <pre class="text-xs bg-gray-50 p-4 rounded shadow overflow-x-scroll">{{ report }}</pre>
    <div class="text-sm my-1">
      <a :href="txtURL" target="_blank" class="text-blue-500 hover:text-blue-600 underline">txt</a>
    </div>
  </template>
</template>

<script lang="ts">
import { fetchReport, reportURL } from '@/reports';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    timestamp: {
      type: Number,
      required: true,
    },
  },
  /* eslint-disable vue/no-setup-props-destructure */
  async setup({ timestamp }) {
    let report = '';
    let error: Error | undefined;
    try {
      report = await fetchReport(timestamp);
    } catch (e) {
      console.error(e);
      error = e;
    }
    const txtURL = reportURL(timestamp);
    return {
      report,
      txtURL,
      error,
    };
  },
});
</script>
