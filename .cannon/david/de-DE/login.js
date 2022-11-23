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
  "login.btn.confirm": "Bestätigen",
  "login.error.pwdFormat": "Passwort muss zwei Kategorien von unten haben:\n Zahlen/Buchstaben/Sonderzeichen",
  "login.error.specialSymbol": "Sorry, nur Buchstaben(a-z), Zahl(0-9) und Sonderzeichen(~!@#$%^&*())+-=,/;➤<>?) sind erlaubt",
  "login.label.email": "E-Mail",
  "login.label.pwd": "Passwort",
  "login.error.pwdEmpty": "Bitte geben Sie ein Passwort ein.",
  "login.error.pwdLength": "Passwörter müssen 8-16 Zeichen haben.",
  "login.label.forgotPwd": "Passwort vergessen?",
  "login.btn.login": "Einloggen",
  "login.error.verify": "Bitte überprüfen Sie",
  "login.placeHolder.email": "Geben Sie Ihre E-Mail-Adresse ein",
  "login.error.emailEmpty": "Bitte geben Sie Ihre E-Mail-Adresse ein.",
  "login.error.emailNotFound": "Kein Konto mit dieser E-Mail gefunden.",
  "login.error.pwdNotEqual": "Die Passwörter stimmten nicht überein.",
  "login.error.notLogin": "Sie sind nicht eingeloggt, bitte loggen Sie sich ein.",
  "login.error.emailLetterInvalid": "Leider sind nur Buchstaben(a-z), Zahlen(0-9) und Symbole(@._) erlaubt.",
  "login.label.createAccount": "Erstelle eine",
  "login.title.account": "Konto",
  "login.error.createWidthAccount": "Mit diesem Konto erstellen?",
  "login.title.login": "Einloggen",
  "login.error.pwdInvalid": "Sorry, dieses Passwort ist falsch.",
  "login.error.pwdEqualMail": "Leider können Passwörter nicht mit Ihrer E-Mail-Adresse übereinstimmen",
  "login.btn.ok": "OK",
  "login.placeHolder.pwd": "Geben Sie Ihr Passwort ein",
  "login.error.emailInvalid": "Sorry, diese E-Mail ist ungültig.",
  "login.label.notAccount": "Kein Konto?",
  "login.title.tips": "Tipps"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
