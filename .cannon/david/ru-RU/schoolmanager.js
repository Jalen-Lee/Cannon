var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var stdin_default = {
  "header.bytello": "Bytello DMS",
  "header.command": "команда",
  "bread.school.manage": "организационное управление",
  "search.school.code": "код поисковой организации",
  "search.school.name": "Имя поисковой организации",
  "search.license.type": "Выбор типа лицензии",
  "table.head.code": "код организации",
  "table.head.email": "электронная почта",
  "table.head.userName": "Имя пользователя",
  "table.head.schoolName": "название организации",
  "table.head.schoolLocation": "место организации",
  "table.head.licenseType": "тип лицензии",
  "table.head.maxPanels": "максимальное число панелей",
  "table.head.credits": "доверие",
  "table.head.remainingCredits": "остаток",
  "table.header.enrolledDevices": "зарегистрировать устройство",
  "table.head.activeTime": "Время активации",
  "table.head.operation": "деятельность",
  "table.button.edit": "редактор",
  "pagination.total": "всего {items}",
  "pagination.page": "страница",
  "edit.school.title": "Изменить сведения об организации",
  "edit.school.secondtitle": 'для "{schoolName}"',
  "edit.school.name": "название организации",
  "edit.school.location": "место организации",
  "edit.school.holder": "место организации",
  "edit.school.maxpanels": "панель Maxinum",
  "edit.school.maxpanels.tooltip": "Максимальное количество параллельных панелей",
  "edit.school.schoolcode": "код организации",
  "edit.school.adminemail": "почта администратора Организации",
  "delete.button.cancel": "отмена",
  "edit.button.save": "Сохранить изменения",
  "delete.school.title": "Удалить школу",
  "delete.school.content": 'Организация "{schoolName}" будет исключена из списка организаций.',
  "delete.button.cancel": "отмена",
  "delete.button.delete": "Исключить",
  "school.delete.success": "ткань удалена.",
  "table.bottom.empty": "пустой",
  "table.bottom.search": "безрезультатно",
  "search.school.email": "поиск электронной почты",
  "edit.button.cancel": "отмена",
  "menu.school.manage": "организационное управление"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
