module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
      },
      'extends': 'prettier',
      'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
      },
    'rules': {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'no-multi-spaces': ['error']
    }
  };