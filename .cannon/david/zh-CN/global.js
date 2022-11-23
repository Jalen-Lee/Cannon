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
  "menu.home": "首页",
  "header.home": "头部",
  "global.error.network": "网络错误",
  "global.network.timeout": "超时",
  "global.network.error": "网络错误",
  "upload.getUploadPolicyError": "上传失败，请重试！",
  "upload.networkError": "上传失败，请重试！",
  "upload.cancelled": "取消上传！",
  "upload.formatError": "文件格式错误",
  "upload.fileNameError": "文件名过长",
  "breadcrumb.debugger": "BreadCrumbDebugger",
  "breadcrumb.item": "Breadcrumbitem",
  "global.btn.ok": "好啊"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
