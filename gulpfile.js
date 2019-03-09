const gulp = require('gulp');
const rename = require('gulp-rename');
const less = require('gulp-less');
const scss = require('gulp-sass');
const babel = require('gulp-babel');
const compileVue = require('./scripts/compile-vue');

gulp.task('less', () =>
  gulp
    .src('src/styles/index.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('es')),
);

gulp.task('scss', () =>
  gulp
    .src('src/styles/index.scss')
    .pipe(scss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('es')),
);

gulp.task('lib', () =>
  gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: 'cjs' }],
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('lib')),
);

gulp.task('es', () =>
  gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('es')),
);

gulp.task('vue:lib', () =>
  gulp
    .src('src/**/*.vue')
    .pipe(compileVue())
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: 'cjs' }],
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('lib')),
);

gulp.task('vue:es', () =>
  gulp
    .src('src/**/*.vue')
    .pipe(compileVue())
    .pipe(
      babel({
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-transform-runtime',
        ],
      }),
    )
    .pipe(gulp.dest('es')),
);
