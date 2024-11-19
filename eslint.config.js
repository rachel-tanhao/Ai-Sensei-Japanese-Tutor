// eslint.config.js
const jsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env")
          ]
        }
      }
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      "no-unused-vars": "warn",
      "import/extensions": "off",
      "linebreak-style": "off",
      "import/prefer-default-export": "off",
      "max-len": ["error", 250],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1
        }
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"]
        }
      ],
      "object-curly-newline": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to", "hrefLeft", "hrefRight"],
          aspects: ["noHref", "invalidHref", "preferButton"]
        }
      ]
    }
  },
  {
    // Global rules for all files
    rules: {
      "no-underscore-dangle": "off",
      "quotes": "off",
      "no-unused-vars": "off",
      "max-len": "off",
      "no-undef": "off",
    }
  }
];