var gulp = require('gulp');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src('./css/animals.css')
        .pipe(uncss({
            html: ['*.html']
        }))
          .pipe(rename("final.css"))
         .pipe(gulp.dest('./css'));
});
