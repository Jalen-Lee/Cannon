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
  "login.error.emailEmpty": "Введите адрес электронной почты.",
  "login.error.emailInvalid": "Извините, это письмо неверно.",
  "login.error.emailLetterInvalid": "Извините, можно использовать только буквы (А - З), цифры (0 - 9) и символы (@.  u0).",
  "login.error.emailNotFound": "Не удаётся найти этот почтовый ящик.",
  "login.error.createWidthAccount": "создать эту учётную запись",
  "login.error.pwdEmpty": "Введите пароль.",
  "login.error.pwdInvalid": "Извините, этот Пароль неверный.",
  "login.error.pwdEqualMail": "Извините, пароль не совпадает с адресом электронной почты",
  "login.error.pwdLength": "пароль должен содержать 8 - 16 символов.",
  "login.error.pwdFormat": "пароль должен иметь следующие две категории:  n цифры / буквы / специальные символы",
  "login.error.specialSymbol": "Простите, только буквы А - З, цифры (0 - 9) и специальные символы (~ ~ @          =, / /, 124dhl? допустимый",
  "login.error.pwdNotEqual": "эти пароли не совпадают",
  "login.error.notLogin": "Вы не зарегистрированы, пожалуйста.",
  "login.error.verify": "Пожалуйста, проверьте",
  "login.label.forgotPwd": "Забыл пароль?",
  "login.label.email": "электронная почта",
  "login.label.notAccount": "Никаких счетов?",
  "login.label.createAccount": "Создать",
  "login.label.pwd": "арготизм",
  "login.title.account": "счёт",
  "login.btn.login": "вход",
  "login.title.tips": "подсказка",
  "login.btn.confirm": "подтверждать",
  "login.btn.ok": "OK",
  "login.placeHolder.email": "Введите адрес электронной почты",
  "login.placeHolder.pwd": "Введите ваш пароль",
  "login.title.login": "вход"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
