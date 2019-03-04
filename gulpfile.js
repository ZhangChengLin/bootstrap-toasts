const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

const toasts_path = "./src/bootstrap-toasts.js";

gulp.task("min", min);

function min(done) {
    gulp.src([toasts_path])
        .pipe(terser())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./dist/"));
    done();
}
