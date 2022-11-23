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
  "global.error.network": "網絡錯誤",
  "global.network.error": "互聯網錯誤",
  "upload.networkError": "上傳失敗",
  "upload.formatError": "檔案格式錯誤",
  "upload.fileNameError": "檔名太長",
  "breadcrumb.item": "麵包屑",
  "header.home": "頭巾",
  "breadcrumb.debugger": "麵包屑蟲",
  "global.network.timeout": "時間到",
  "global.btn.ok": "好啊",
  "upload.getUploadPolicyError": "上傳失敗",
  "upload.cancelled": "取消任務上傳！",
  "menu.home": "家"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
