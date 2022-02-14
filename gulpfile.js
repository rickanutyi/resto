//moduls
import gulp from "gulp";
// paths
import { path } from "./gulp/config/path.js";
//tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import { ottToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
//plagins
import { plugins } from "./gulp/config/plagins.js";
//global
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// const fonts = gulp.series(ottToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.parallel(copy, html, scss, js, images);

// сценарий выполнения задач

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };
// выполнение по умолчанию
gulp.task("default", dev);
