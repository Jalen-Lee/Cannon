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
  "menu.home": "жилище",
  "header.home": "платок",
  "breadcrumb.item": "хлебные крошки",
  "breadcrumb.debugger": "очиститель хлебных крошек",
  "global.error.network": "Ошибка сети",
  "global.network.timeout": "время до",
  "global.network.error": "ошибка Internet",
  "global.btn.ok": "OK",
  "upload.networkError": "Ошибка загрузки",
  "upload.cancelled": "отменить загрузку задания!",
  "upload.formatError": "ошибка формата файла",
  "upload.fileNameError": "слишком длинное имя файла",
  "upload.getUploadPolicyError": "Ошибка загрузки"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
