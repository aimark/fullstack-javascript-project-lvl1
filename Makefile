install: # запуск
	npm ci

start: # запустить приложение
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js

publish: # выполнить
	npm publish --dry-run

lint:
	npx eslint .
