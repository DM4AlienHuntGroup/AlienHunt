module.exports = {
	"extends": "./es6.js"
	, "parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	}
	, "rules": {
		"react/display-name": 1
		, "react/no-deprecated": 1
		, "react/no-did-mount-set-state": 1
		, "react/no-did-update-set-state": 1
		, "react/no-direct-mutation-state": 1
		, "react/no-is-mounted": 1
		, "react/require-render-return": 1
		, "react/jsx-wrap-multilines": 1
		, "react/jsx-uses-react": 1
		, "react/jsx-uses-vars": 1
		, "react/no-danger": 1
		, "react/no-unknown-property": 1
		, "react/react-in-jsx-scope": 1
		, "react/jsx-key": 1
		, "react/jsx-no-duplicate-props": 1
		, "react/jsx-no-undef": 1
		, "react/no-multi-comp": 1
		, "react/prefer-es6-class": 1
		, "react/prefer-stateless-function": 1
		, "react/self-closing-comp": 1
		, "react/sort-prop-types": 1
		, "react/sort-comp": [ 1, {
			"order": [
				  "static-methods"
				, "lifecycle"
				, "/^on.+$/"
				, "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/"
				, "everything-else"
				, "/^render.+$/"
				, "render"
				, "/getStyles/"
			]
		} ]
		, "react/jsx-boolean-value": 1
		, "react/jsx-sort-props": 1
		, "react/jsx-closing-bracket-location": 1
		, "react/jsx-curly-spacing": [ 1, "always" ]
		, "react/jsx-equals-spacing": 1
		, "react/jsx-first-prop-new-line": [ 1, "multiline" ]
		, "react/jsx-indent": [ 1, "tab" ]
		, "react/jsx-indent-props": [ 1, "tab" ]
		, "react/jsx-max-props-per-line": [ 1, { "maximum": 2 } ]
		, "react/jsx-pascal-case": 1
		, "react/jsx-space-before-closing": [ 1, "always" ]
	}
	, "plugins": [ "react" ]
};
