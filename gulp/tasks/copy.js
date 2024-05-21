import gulp from "gulp";
import { path } from "../config/path.js";
// Function for copy files from "srcFolder" to "buildFolder"
export function copy() {
  gulp.src(path.src.php).pipe(gulp.dest(path.build.php));
  return gulp.src(path.src.files).pipe(gulp.dest(path.build.files));
}
