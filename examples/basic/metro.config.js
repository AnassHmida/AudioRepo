module.exports = {
  dependencies: {
    'react-native-video': {
      platforms: {
        android: null,
      },
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};