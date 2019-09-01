const isProduction = process.env.BUILD;

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 9,
    },
	"parser": "babel-eslint",
    "extends": "eslint:recommended",
	//"extends": "netflix",
    "rules": {
        "no-console": isProduction ? ["error", { allow: ["info", "warn", "error"] }] : ["off"],
        "no-debugger": isProduction ? ["error"] : ["off"],
		'indent': ["error", "tab"],
		"no-prototype-builtins": ["off"]
    }
};
