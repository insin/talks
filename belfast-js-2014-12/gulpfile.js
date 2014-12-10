var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('hovercraft', shell.task('hovercraft -t template talk.rst _build', {cwd: '.'}))

gulp.task('watch', function() {
  gulp.watch(['talk.*', 'template/**/*'], ['hovercraft'])
})

gulp.task('default', ['hovercraft', 'watch'])