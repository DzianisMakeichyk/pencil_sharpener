/**
 * @license Copyright (c) 2016-present, Absolvent.pl
 * For licensing, see LICENSE
 */

'use strict';


// Require gulp and plugins
const autoprefixer = require('autoprefixer');
const eslint = require('space-preconfigured-eslint');
const gg = require('gore-gulp');
const gulp = require('gulp');
const gulpPostCss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');
const postcssDiscardEmpty = require('postcss-discard-empty');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssRoundSubpixels = require('postcss-round-subpixels');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sourceMaps = require('gulp-sourcemaps');

// Configuration
const supportedBrowsers = 'last 3 versions';

// Define file sources
const scssMain = ['src/scss/main.scss'];
const scssSources = ['src/scss/**/*.scss'];
const reactFiles = ['src/**/*js'];

// Production Styles w/o lint, source maps & with compression to optimize speed
gulp.task('scss-prod', function () {
    return gulp.src(scssMain)
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed',
        }))
        .pipe(gulpPostCss([
            autoprefixer({
                browsers: supportedBrowsers,
            }),
            postcssDiscardDuplicates,
            postcssDiscardEmpty,
            postcssRoundSubpixels,
            postcssFlexbugsFixes,
        ]))
        .pipe(plumber.stop())
        .pipe(gulp.dest('public/css'));
});

// Development styles with lint & sourcemaps
gulp.task('scss-dev', function () {
    return gulp.src(scssSources)
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sassLint({
            config: '.sass-lint.yml',
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact',
        }))
        .pipe(gulpPostCss([
            autoprefixer({
                browsers: supportedBrowsers,
            }),
            postcssRoundSubpixels,
            postcssFlexbugsFixes,
        ]))
        .pipe(sourceMaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest('public/css'));
});

// Watch SCSS files and compile using 'scss-dev' task
gulp.task('watch-scss', function () {
    gulp.watch(scssMain, ['scss-dev']);
    gulp.watch(scssSources, ['scss-dev']);
});

// Watch React files compile using 'webpack.development' task
gulp.task('watch-jsx', function () {
    gulp.watch(reactFiles, ['webpack.development']);
});

gg(__dirname).setup(gulp);

gulp.task('lint', function () {
    return eslint([
        __filename,
        'src/**/*.{js,js}',
    ]);
});

// Build React & SCSS using 'scss-prod' task
gulp.task('build', ['webpack', 'scss-prod']);
gulp.task('build.production', ['webpack.production', 'scss-prod']);
