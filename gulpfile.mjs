import gulp from 'gulp' 
import postcss from 'gulp-postcss' 
import pxtoviewport from 'postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'
import * as dotenv from 'dotenv'
dotenv.config()

//1846
//375
let dir = './docs'
const rootWidthDesktop = 2080
const rootWidthMobile = 375

let src, i = process.argv.indexOf("--src");

if(i>-1) {
    dir = process.argv[i+1];
}

console.log('path: ', dir)
gulp.task('px2vw', function () {
    // console.time("⚡ [gulp] Done");

    let processors = [
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
            exclude: [/(\/|\\)node_modules(\/|\\)/],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: rootWidthMobile
        })
    ];


    let result = gulp.src([`${dir}/**/*.css`])
        .pipe(postcss(processors))
        .pipe(postcss([ autoprefixer()]))
        .pipe(gulp.dest(`${dir}`));

    // console.timeEnd("⚡ [gulp] Done");

    return result
});


gulp.task('vw2px', function () {
    // console.time("⚡ [gulp] Done");

    let processors = [
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
            exclude: [/(\/|\\)node_modules(\/|\\)/],
            landscape: false,
            landscapeUnit: 'px',
            landscapeWidth: rootWidthMobile
        })
    ];
 
    let out = gulp.src([`${dir}/**/*.css`], { sourcemaps: true })
        .pipe(postcss(processors))
        .pipe(postcss([ autoprefixer()]))
        .pipe(gulp.dest(`${dir}`), { sourcemaps: true });

    // console.timeEnd("⚡ [gulp] Done");

    return out
});