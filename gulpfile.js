var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var livereload = require("gulp-livereload");
var sourcemaps = require("gulp-sourcemaps");
var minifyCss = require("gulp-clean-css");
var path = require("path");


gulp.task("sass", function () {
    return gulp.src("./frontend/scss/style.min.scss")
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.identityMap())
        .pipe(sass())
        .pipe(minifyCss({compatibility: "ie11"}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(path.join(__dirname, "/frontend/css/")))
        .pipe(livereload());
});

gulp.task("minify", function () {
    return gulp.src("./frontend/scss/style.min.scss")
        .pipe(sass())
        .pipe(gulp.dest(path.join(__dirname, "/frontend/css/")))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task("watch", function () {
    livereload.listen();
    gulp.watch('./frontend/scss/**', gulp.series('sass'));
});