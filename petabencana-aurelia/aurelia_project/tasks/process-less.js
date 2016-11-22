import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import less from 'gulp-less';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processLESS() {
  return gulp.src(project.lessProcessor.source)
  .pipe(changedInPlace({firstPass: true}))
  .pipe(less())
  .pipe(gulp.dest(project.lessProcessor.output));
}
