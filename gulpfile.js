const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("src/sass/**/*.scss").pipe(sass()).pipe(dest("src/css"));
}

function watchTask() {
  watch(["src/sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
