setup:
	npm install
install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npm run lint-fix
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js