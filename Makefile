install: # запуск
	npm ci

start: # запустить приложение
	node bin/brain-games.js

publish: # выполнить
	npm publish --dry-run
