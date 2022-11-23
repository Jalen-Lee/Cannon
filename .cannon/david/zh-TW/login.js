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
  "login.error.emailLetterInvalid": "對不起，只允許字母（a-z）、數位（0-9）和符號（@._）。",
  "login.error.pwdEqualMail": "抱歉，密碼與您的電子郵寄地址不匹配",
  "login.error.pwdNotEqual": "那些密碼不匹配",
  "login.btn.ok": "好啊",
  "login.error.pwdLength": "密碼必須包含8-16個字元。",
  "login.title.account": "賬戶",
  "login.placeHolder.email": "輸入您的電子郵寄地址",
  "login.error.emailEmpty": "請輸入您的電子郵寄地址。",
  "login.error.emailInvalid": "抱歉，此電子郵件無效。",
  "login.error.pwdEmpty": "請輸入密碼。",
  "login.error.verify": "請核實",
  "login.title.tips": "提示",
  "login.error.pwdFormat": "密碼必須有以下兩個類別：\n數位/字母/特殊字元",
  "login.label.email": "電子郵件",
  "login.label.notAccount": "沒有帳戶？",
  "login.title.login": "登入",
  "login.btn.login": "登入",
  "login.error.emailNotFound": "未找到此電子郵件的帳戶。",
  "login.error.specialSymbol": "對不起，只有字母（a-z）、數位（0-9）和特殊字元（~！@35；$%^&*（）+-=，./；|<>？） 允許",
  "login.error.notLogin": "您尚未登入，請登入。",
  "login.label.createAccount": "創建一個",
  "login.label.pwd": "暗語",
  "login.btn.confirm": "證實",
  "login.placeHolder.pwd": "輸入您的密碼",
  "login.error.pwdInvalid": "對不起，此密碼不正確。",
  "login.error.createWidthAccount": "使用此帳戶創建",
  "login.label.forgotPwd": "忘記密碼了？"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
