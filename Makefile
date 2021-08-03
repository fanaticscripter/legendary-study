.PHONY: all init build clean

all: clean
	$(MAKE) build

init:
	yarn

build: src/reports.json
	yarn build

src/reports.json:
	ls public/reports | sed 's/.txt//' | sort -rn | jq --slurp . > src/reports.json

clean:
	@$(RM) -r dist src/reports.json
