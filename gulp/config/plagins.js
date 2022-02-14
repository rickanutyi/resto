import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщения(подсказки)
import browserSync from "browser-sync";
import newer from "gulp-newer"; //проверка обновления
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
