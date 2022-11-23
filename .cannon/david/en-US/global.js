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
  "menu.home": "home",
  "header.home": "headerHome",
  "breadcrumb.item": "breadcrumbItem",
  "breadcrumb.debugger": "breadcrumbDebugger",
  "global.error.network": "network error",
  "global.network.timeout": "time out",
  "global.network.error": "Internet error",
  "global.btn.ok": "OK",
  "upload.getUploadPolicyError": "Upload failed",
  "upload.networkError": "Upload failed",
  "upload.cancelled": "Cancel task upload!",
  "upload.formatError": "file fomat error",
  "upload.fileNameError": "file name is too long"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
