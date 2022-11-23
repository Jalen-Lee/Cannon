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
  "login.error.emailEmpty": "Please enter your email address.",
  "login.error.emailInvalid": "Sorry,this email is invalid.",
  "login.error.emailLetterInvalid": "Sorry, Only letters(a-z),numbers(0-9),and symbols(@._) are allowed.",
  "login.error.emailNotFound": "No account found with this email.",
  "login.error.createWidthAccount": "Create with this account？",
  "login.error.pwdEmpty": "Please enter a password.",
  "login.error.pwdInvalid": "Sorry,this password is incorrect.",
  "login.error.pwdEqualMail": "Sorry, passwords can't match your email address",
  "login.error.pwdLength": "Passwords must have 8-16 characters.",
  "login.error.pwdFormat": "Password must have two categories from below:\n  numbers/letters/special character",
  "login.error.specialSymbol": "Sorry, Only letters(a-z),number(0-9),and special character(~!@#$%^&*()+-=,./;|<>?) are allowed",
  "login.error.pwdNotEqual": "Those passwords didn't match",
  "login.error.notLogin": "You are not logged in, please log in.",
  "login.error.verify": "Please verify",
  "login.label.forgotPwd": "Forgot password?",
  "login.label.email": "Email",
  "login.label.notAccount": "No account?",
  "login.label.createAccount": "Create one",
  "login.label.pwd": "Password",
  "login.title.account": "Account",
  "login.title.login": "Log in",
  "login.title.tips": "Tips",
  "login.btn.login": "Log in",
  "login.btn.confirm": "Confirm",
  "login.btn.ok": "OK",
  "login.placeHolder.email": "Enter your email address",
  "login.placeHolder.pwd": "Enter your password"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
