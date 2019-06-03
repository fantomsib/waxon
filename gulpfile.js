const {
    src,
    dest,
    task,
    series,
    watch
} = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
sass.compiler = require('node-sass');

task('clean', function () {
    return src('dist/**/*', {
        read: false
    }).pipe(rm());
});


//task('copy', function () {
 //   return src('src/scss/**/*.scss').pipe(dest('dist'));
//});

task('copy:html', function () {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({
        stream: true
    }));
});





const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/scss/main.scss'
];

task('styles', function () {
    return src(styles)
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist'));
});



task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
       // open: false
    });
});


watch('./src/scss/**/*.scss', series('styles'));
watch('./src/*.html', series('copy:html'));
watch('./dist/main.css');


task('default', series('clean', 'copy:html', 'styles', 'server'));