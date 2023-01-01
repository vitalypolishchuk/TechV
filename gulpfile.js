const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const autoprefixer = require("gulp-autoprefixer");

function buildStyles() {
  return src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("src/css"));
}

function watchTask() {
  watch(["src/sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
