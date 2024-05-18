import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Adiciona as variáveis globais do Node.js
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-extra-boolean-cast': 'error', // Proíbe conversões booleanas desnecessárias
      'eqeqeq': ['error', 'always'], // Requer o uso de === e !==
      'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }], // Proíbe variáveis não utilizadas
      'quotes': ['error', 'single'], // Requer aspas simples para strings
    },
  },
];
