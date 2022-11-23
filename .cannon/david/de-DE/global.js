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
  "upload.formatError": "Dateifomat-Fehler",
  "upload.fileNameError": "Dateiname ist zu lang",
  "menu.home": "home",
  "header.home": "HeaderHome",
  "breadcrumb.item": "BrotkrumenItem",
  "global.btn.ok": "OK",
  "upload.getUploadPolicyError": "Hochladen fehlgeschlagen",
  "upload.networkError": "Hochladen fehlgeschlagen",
  "upload.cancelled": "Aufgabe-Upload abbrechen!",
  "breadcrumb.debugger": "BreadcrumbDebugger",
  "global.error.network": "Netzwerkfehler",
  "global.network.timeout": "time out",
  "global.network.error": "Internetfehler"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});