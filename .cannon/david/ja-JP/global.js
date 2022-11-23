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
  "global.network.error": "インターネットエラー",
  "global.btn.ok": "OK",
  "upload.networkError": "アップロード失敗",
  "upload.fileNameError": "ファイル名が長すぎます",
  "menu.home": "ホーム",
  "breadcrumb.debugger": "パンデバッガ",
  "global.error.network": "ネットワークエラー",
  "global.network.timeout": "タイムアウト",
  "upload.formatError": "ファイルfomatエラー",
  "header.home": "ヘッドホーム",
  "breadcrumb.item": "ブレッドクラム",
  "upload.getUploadPolicyError": "アップロード失敗",
  "upload.cancelled": "タスクのアップロードをキャンセル！"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
