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
  "login.error.pwdNotEqual": "それらのパスワードは一致しなかった",
  "login.error.notLogin": "ログインしないでログインしてください。",
  "login.error.verify": "確認してください",
  "login.label.notAccount": "いいえアカウント？",
  "login.error.emailInvalid": "申し訳ありませんが、このメールは無効です。",
  "login.error.emailNotFound": "このメールは見つかりませんでした。",
  "login.error.createWidthAccount": "このアカウントを作成する?",
  "login.placeHolder.pwd": "パスワード入力",
  "login.error.pwdEqualMail": "申し訳ありませんが、パスワードはあなたのメールアドレスと一致できません",
  "login.error.specialSymbol": "ごめんなさい、手紙（A - Z）、ナンバー（0 - 9）と特別なキャラクタ（~@ @ yahoo . $^^*（（-）+-、-?））だけ許可",
  "login.label.email": "電子メール",
  "login.label.createAccount": "クリエイトワン",
  "login.label.pwd": "パスワード",
  "login.placeHolder.email": "メールアドレス",
  "login.error.emailLetterInvalid": "ごめんなさい、手紙（A - Z）、数字（0 - 9）とシンボル（@ .",
  "login.error.pwdInvalid": "申し訳ありませんが、このパスワードは間違っています。",
  "login.error.emailEmpty": "メールアドレスを入力してください。",
  "login.error.pwdEmpty": "パスワードを入力してください。",
  "login.error.pwdLength": "パスワードは8 - 16文字でなければなりません。",
  "login.label.forgotPwd": "忘れられたパスワード?",
  "login.title.login": "ログイン",
  "login.title.tips": "ヒント",
  "login.title.account": "アカウント",
  "login.btn.login": "ログイン",
  "login.error.pwdFormat": "パスワードは以下から2つのカテゴリーを持つ必要があります",
  "login.btn.confirm": "確認",
  "login.btn.ok": "OK"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
