module.exports = {
  globDirectory: "build",
  globPatterns: ["**/*.{ico,json,js,css,html,png}"],
  globIgnores: [
    // ignore CRA service-worker files
    "**/precache-manifest*.js",
    "**/service-worker.js",
  ],
  swSrc: "src/sw-template.js", // this is your sw template file
  swDest: "build/sw.js", // this will be created in the build step
};
