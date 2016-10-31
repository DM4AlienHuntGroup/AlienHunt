module.exports = {
	"rules": {
		// catching likely errors/future problems
		"comma-dangle": [ 1, "never" ]
		, "no-cond-assign": 1
		, "no-constant-condition": 1
		, "no-debugger": 1
		, "no-dupe-args": 1
		, "no-dupe-keys": 1
		, "no-duplicate-case": 1
		, "no-empty": 1
		, "no-extra-boolean-cast": 1
		, "no-extra-semi": 1
		, "no-func-assign": 1
		, "no-inner-declarations": 1
		, "no-invalid-regexp": 1
		, "no-irregular-whitespace": 1
		, "no-negated-in-lhs": 1
		, "no-unexpected-multiline": 1
		, "no-unreachable": 1
		, "use-isnan": 1
		, "valid-typeof": 1
		, "array-callback-return": 1
		, "block-scoped-var": 1
		, "no-empty-pattern": 1
		// code safety
		, "curly": 1
		, "eqeqeq": 1
		, "no-case-declarations": 1
		, "no-floating-decimal": 1
		, "no-loop-func": 1
		, "no-redeclare": 1
		, "no-delete-var": 1
		, "no-use-before-define": 1
		, "eol-last": 1
		// consistency
		, "dot-location": [ 1, "property" ]
		, "dot-notation": 1
		, "vars-on-top": 1
		, "no-mixed-requires": 1
		, "sort-vars": 1
		, "sort-keys": 1
		// should never be in prod
		, "no-console": [ 1, { "allow": [ "error", "warn" ] } ]
		, "no-alert": 1
		// cleaning up unnecessary code
		, "no-else-return": 1
		, "no-extra-bind": 1
		, "no-self-assign": 1
		, "no-self-compare": 1
		, "no-unused-vars": 1
		, "no-unused-expressions": 1
		, "no-lonely-if": 1
		// pure style/readability
		, "array-bracket-spacing": [ 1, "always" ]
		, "block-spacing": [ 1, "always" ]
		, "brace-style": [ 1, "1tbs" ]
		, "comma-spacing": 1
		, "comma-style": [ 1, "first" ]
		, "computed-property-spacing": [ 1, "always" ]
		, "indent": [ 1, "tab", { "SwitchCase": 1 } ]
		, "key-spacing": 1
		, "keyword-spacing": 1
		, "max-statements-per-line": [ 1, { "max": 1 } ]
		, "new-parens": 1
		, "no-mixed-spaces-and-tabs": [ 1, "smart-tabs" ]
		, "no-multiple-empty-lines": [ 1, { "max": 2, "maxEOF": 1 } ]
		, "no-negated-condition": 1
		, "no-nested-ternary": 1
		, "no-spaced-func": 1
		, "no-trailing-spaces": 1
		, "no-unneeded-ternary": 1
		, "no-whitespace-before-property": 1
		, "object-curly-spacing": [ 1, "always" ]
		, "operator-assignment": 1
		, "quotes": [ 1, "double" ]
		, "semi": [ 1, "always" ]
		, "space-before-blocks": 1
		, "space-before-function-paren": [ 1, "never" ]
		, "space-in-parens": [ 1, "always" ]
		, "space-infix-ops": 1
		, "space-unary-ops": [ 1, { "words": true, "nonwords": false } ]
	}
};
