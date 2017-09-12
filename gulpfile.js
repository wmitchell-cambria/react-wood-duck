var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");

gulp.task("styles", function() {
  gulp
    .src(['public/application.scss'])
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("site.css"))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('default', ['styles']);