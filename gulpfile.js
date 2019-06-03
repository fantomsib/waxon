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

task('copy:html', function () {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({
        stream: true
    }));
});

task('copy:fonts', function () {
    return src('src/fonts/*').pipe(dest('dist/fonts'));
});


task('copy:img', function () {
    return src('src/img/*').pipe(dest('dist/img'));
});

task('copy:sprite', function () {
    return src('src/sprite/*').pipe(dest('dist/sprite'));
});


task('js', function () {
    return src('src/script/*.js').pipe(dest('dist/script'));
});



const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/scss/_misk/_font.scss',
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
watch('./src/fonts/**/*', series('copy:fonts'));
watch('./src/img/*', series('copy:img'));
watch('./src/scripts/*.js', series('js'));
watch('./src/sprite/*.svg', series('copy:sprite'));
task('default', series('clean', 'copy:html', 'copy:fonts', 'copy:img', 'js', 'copy:sprite', 'styles', 'server'));


task('sass:watch', function(){
    watch('.src/scss/**/*.scss', ['styles']);
  });