// @ts-check
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['eslint.config.mjs']
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest
			},
			sourceType: 'commonjs',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
					bracketSpacing: true,
					printWidth: 120,
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					trailingComma: "none",
					arrowParens: "avoid",
				}
			],
			semi: ['error', 'always'],
			'@/quotes': ['error', 'single'],
			'no-trailing-spaces': 'error',
			'no-tabs': 'off',
			/* '@/indent': [
				'error',
				'tab',
				{
					SwitchCase: 1,
					ignoredNodes: ['PropertyDefinition[decorators]']
				}
			], */
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/no-unsafe-return': 'off'
		}
	}
)
