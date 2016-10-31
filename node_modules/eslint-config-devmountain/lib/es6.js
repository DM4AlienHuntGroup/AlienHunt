module.exports = {
	"extends": "./es5.js"
	, "rules": {
		// safety
		"no-class-assign": 1
		, "no-confusing-arrow": 1
		, "no-const-assign": 1
		, "no-dupe-class-members": 1
		, "no-new-symbol": 1
		, "no-this-before-super": 1
		, "no-var": 1
		, "prefer-const": 1
		, "prefer-rest-params": 1
		, "quotes": [ 1, "double" ]
		// unused code
		, "no-duplicate-imports": 1
		, "no-useless-constructor": 1
		, "object-shorthand": 1
		// style
		, "arrow-spacing": 1
		, "prefer-arrow-callback": 1
		, "prefer-spread": 1
		, "prefer-template": 1
		, "template-curly-spacing": [ 1, "always" ]
	}
	, "env": {
		"es6": true
	}
	, "parserOptions": {
		"ecmaVersion": "6"
		, "sourceType": "module"
	}
};
