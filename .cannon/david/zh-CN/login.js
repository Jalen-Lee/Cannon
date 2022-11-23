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
  "login.error.pwdFormat": "密码必须有以下两个类别：\n数字/字母/特殊字符",
  "login.label.forgotPwd": "忘记密码了？",
  "login.title.login": "登录",
  "login.error.pwdEqualMail": "抱歉，密码与您的电子邮件地址不匹配",
  "login.label.notAccount": "没有帐户？",
  "login.placeHolder.email": "输入您的电子邮件地址",
  "login.error.createWidthAccount": "使用此帐户创建",
  "login.error.pwdInvalid": "对不起，此密码不正确。",
  "login.error.emailInvalid": "抱歉，此电子邮件无效。",
  "login.title.tips": "提示",
  "login.label.pwd": "暗语",
  "login.error.emailLetterInvalid": "对不起，只允许字母（a-z）、数字（0-9）和符号（@._）。",
  "login.error.pwdNotEqual": "那些密码不匹配",
  "login.btn.confirm": "证实",
  "login.btn.ok": "好啊",
  "login.error.emailEmpty": "请输入您的电子邮件地址。",
  "login.error.pwdLength": "密码必须包含8-16个字符。",
  "login.error.specialSymbol": "对不起，只有字母（a-z）、数字（0-9）和特殊字符（~！@35;$%^&*（）+-=，./；|<>？）允许",
  "login.label.email": "电子邮件",
  "login.label.createAccount": "创建一个",
  "login.placeHolder.pwd": "输入您的密码",
  "login.error.emailNotFound": "未找到此电子邮件的帐户。",
  "login.error.pwdEmpty": "请输入密码。",
  "login.btn.login": "登录",
  "login.title.account": "账户",
  "login.error.notLogin": "您尚未登录，请登录。",
  "login.error.verify": "请核实"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
