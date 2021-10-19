module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    env: 'readonly'
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier', '@vue/prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
}
