const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

//path
const jquery_path = './node_modules/jquery/dist/jquery.min.js';
const bootstrap_css_path = './node_modules/bootstrap/dist/css/bootstrap.min.css';
const bootstrap_js_path = './node_modules/bootstrap/dist/js/bootstrap.min.js';
const popper_js_path = './node_modules/popper.js/dist/umd/popper.min.js';
const toasts_path = "./src/bootstrap-toasts.js";

gulp.task("min", min);
gulp.task("copy_static", copy_static);

function min(done) {
    gulp.src([toasts_path])
        .pipe(terser({
            output: {
                comments: true,
            }
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./dist/"));
    done();
}

function copy_static(done) {
    gulp.src([jquery_path, bootstrap_js_path, bootstrap_css_path, popper_js_path]).pipe(gulp.dest('./demoFiles/'));
    done();
}
