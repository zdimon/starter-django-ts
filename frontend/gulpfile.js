var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require("tsify");

function compileTS() {
    return browserify({
        basedir: './src',
        debug: true,
        entries: ['start.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("../backend/static/dist"));
}

function watch() {
    gulp.watch('src', gulp.series(compileTS));
}

// gulp.task('default', (done) => {
    

// })

exports.default = gulp.series(
    compileTS,
    gulp.parallel(watch)
);
