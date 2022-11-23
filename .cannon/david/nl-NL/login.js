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
  "login.error.pwdFormat": "Wachtwoord moet twee categorieën van hieronder hebben:\n cijfers/letters/speciaal teken",
  "login.error.verify": "Gelieve te verifiëren",
  "login.btn.confirm": "Bevestigen",
  "login.btn.ok": "OK",
  "login.placeHolder.email": "Voer uw e-mailadres in",
  "login.error.pwdLength": "Wachtwoorden moeten 8-16 tekens hebben.",
  "login.error.notLogin": "U bent niet ingelogd, gelieve in te loggen.",
  "login.label.forgotPwd": "Wachtwoord vergeten?",
  "login.label.createAccount": "Maak er een aan",
  "login.title.account": "Rekening",
  "login.title.tips": "Tips",
  "login.error.pwdNotEqual": "Die wachtwoorden kwamen niet overeen.",
  "login.label.notAccount": "Geen rekening?",
  "login.placeHolder.pwd": "Voer uw wachtwoord in",
  "login.label.pwd": "Wachtwoord",
  "login.error.pwdEmpty": "Voer een wachtwoord in.",
  "login.error.pwdEqualMail": "Sorry, wachtwoorden kunnen niet overeenkomen met uw e-mailadres",
  "login.label.email": "E-mail",
  "login.title.login": "Inloggen",
  "login.error.emailInvalid": "Sorry, deze e-mail is ongeldig.",
  "login.error.emailLetterInvalid": "Sorry, alleen letters(a-z), cijfers(0-9) en symbolen(@._) zijn toegestaan.",
  "login.error.specialSymbol": "Sorry, alleen letters(a-z), getal(0-9), en speciaal teken(~!@#$%^&*())+-=,/;➤<>?) zijn toegestaan",
  "login.btn.login": "Inloggen",
  "login.error.emailEmpty": "Vul uw e-mailadres in.",
  "login.error.emailNotFound": "Geen account gevonden met deze e-mail.",
  "login.error.createWidthAccount": "Maken met dit account?",
  "login.error.pwdInvalid": "Sorry, dit wachtwoord is onjuist."
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
