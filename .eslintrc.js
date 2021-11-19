module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@env', 'react-native-dotenv']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
