module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts", "**/*.e2e-spec.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
};
