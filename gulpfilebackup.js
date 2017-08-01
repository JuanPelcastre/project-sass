const gulp = require('gulp'),
      browserSync = require('browser-sync').create();
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'),
      autoprefixer = require('gulp-autoprefixer');

const supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];      

gulp.task('sass', ()=>
  gulp.src('./scss-workit/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano({
      autoprefixer: {browsers: supported, add: true}
    }))
    .pipe(gulp.dest('./dist/css/nano'))
);
gulp.task('bs4', ()=>
  gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano({
      autoprefixer: {browsers: supported, add: true}
    }))
    .pipe(gulp.dest('./dist/css/nano'))
);

// gulp.task('browsersync', () => {
//   browserSync.init({
//     server: './'
//   });
//   gulp.watch('./*.html').on('change', browserSync.reload)
//   gulp.watch('./*.css').on('change', browserSync.reload)
//   gulp.watch('./*.js').on('change', browserSync.reload)
// })

gulp.task('default', ()=> {
  gulp.watch('./scss-workit/**/*.scss', [sass]);
});