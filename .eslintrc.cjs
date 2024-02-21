module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
    'eslint-config-codely/typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier', 'hexagonal-architecture'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ["./tsconfig.json"],
			},
			rules: {
				"@typescript-eslint/no-floating-promises": "warn",
			},
		},
		{
			files: ["**/tests/e2e/**/*.spec.ts"],
			rules: {
				"testing-library/await-async-query": 0,
				"@typescript-eslint/no-unsafe-member-access": 0,
				"@typescript-eslint/no-unsafe-call": 0,
				"testing-library/prefer-screen-queries": 0,
			},
		},
		{
			files: ["**/modules/**/*.ts"],
			rules: {
				"hexagonal-architecture/enforce": ["error"],
			},
		},
	],
}
