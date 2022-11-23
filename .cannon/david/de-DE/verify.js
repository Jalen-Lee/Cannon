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
  "verify.error.expired": "Tut mir leid, dieser Code ist abgelaufen.",
  "verify.error.error": "Sorry, dieser Code ist falsch.",
  "verify.error.invaild": "Bitte geben Sie den 6-stelligen Code ein.",
  "verify.error.emailIsUsed": "Diese E-Mail ist bereits vergeben.",
  "verify.error.emailNoFound": "Kein Konto mit dieser E-Mail gefunden."
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
