install: # запуск
	npm ci

start: # запустить приложение
	node bin/brain-even.js
	node bin/brain-calc.js

publish: # выполнить
	npm publish --dry-run

lint:
	npx eslint .
