import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';

export default [
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin,
    },
    processor: 'astro/astro',
    languageOptions: {
      globals: {
        // Astro globals
        Astro: 'readonly',
        Fragment: 'readonly',
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        URL: 'readonly',
        Response: 'readonly',
      },
    },
    rules: {
      // Disable rules that don't work well with Astro
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      // Common rules for Astri projects
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'max-len': ['warn', { code: 100, ignoreUrls: true }],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-require-imports': 'warn', // Downgrade to warning
    },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '**/*.min.js',
      '**/*.min.css',
      'public/assets/**',
      '.output/**',
      'public/scripts/vendor/**',
      '*.log',
      '.DS_Store',
    ],
  },
];
