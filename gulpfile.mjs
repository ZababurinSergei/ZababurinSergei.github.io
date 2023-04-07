import gulp from 'gulp' 
import postcss from 'gulp-postcss' 
import pxtoviewport from 'postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'
import * as dotenv from 'dotenv'
dotenv.config()

//1846
//375
const dir = 'services/welcomebook/src'
const rootWidthDesktop = 1920
const rootWidthMobile = 375
gulp.task('px2vw', function () {
 
    var processors = [
        pxtoviewport({
            unitToConvert: 'px',
            propList: ['*'],
            unitPrecision: 5,          
            viewportWidth: rootWidthDesktop,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 0.1,
            mediaQuery: true,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: rootWidthMobile
        })
    ];


    return gulp.src([`./${dir}/**/*.css`])
        .pipe(postcss(processors))
        .pipe(postcss([ autoprefixer()]))
        .pipe(gulp.dest(`./${dir}`));
});


gulp.task('vw2px', function () {
    var processors = [
        pxtoviewport({
            unitToConvert: 'vw',
            propList: ['*'],
            unitPrecision: 0,          
            viewportWidth: 10000/rootWidthDesktop,
            viewportUnit: 'px',
            fontViewportUnit: 'px',
            selectorBlackList: [],
            minPixelValue: 0.001,
            mediaQuery: true,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'px',
            landscapeWidth: rootWidthMobile
        })
    ];
 
    return gulp.src([`./${dir}/**/*.css`], { sourcemaps: true })
        .pipe(postcss(processors))
        .pipe(postcss([ autoprefixer()]))
        .pipe(gulp.dest(`./${dir}`), { sourcemaps: true });
});