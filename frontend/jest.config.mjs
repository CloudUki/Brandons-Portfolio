export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|scss|jpg|png|svg)$": "identity-obj-proxy"
  },
  extensionsToTreatAsEsm: [".jsx"],
};
