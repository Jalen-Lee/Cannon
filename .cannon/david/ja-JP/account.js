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
  "account.remoteLock": "リモートロック",
  "account.remoteLockDesc": "設定のリモートロック。それを解除するパスワードを入力します。",
  "account.state": "ロケーション",
  "account.delete": "削除",
  "account.username": "ユーザー名",
  "account.school": "学校",
  "account.powerState": "電源状態",
  "account.deleteServer": "サーバー削除",
  "account.pswdManagement": "パスワード管理",
  "account.deviceSettingLock": "デバイス設定ロック",
  "account.deviceSettingLockDesc": "デバイスのロック設定。それを解除するパスワードを入力します。",
  "account.admin": "管理マネージャ",
  "account.serverManagement": "サーバ管理",
  "account.serverName": "サーバ名",
  "account.account": "アカウント",
  "account.resetPswdTip1": "パスワードをリセットした後、このアカウントは自動的にログアウトされます。",
  "account.password": "パスワード",
  "account.schoolName": "組織名",
  "account.resetPswd": "リセットパスワード",
  "account.screenLock": "スクリーンロック",
  "account.screenLockDesc": "期間のロックデバイス画面。それを解除するパスワードを入力します。",
  "account.serverOn": "ON",
  "account.resetPswdTip2": "注意：他のユーザーセンター製品を使用している場合は、パスワードが同期的に更新されます。",
  "account.email": "電子メール",
  "account.operation": "操作",
  "account.schoolCode": "組織コード",
  "account.serverOff": "オフ",
  "account.personalInfo": "個人情報",
  "account.connectNum": "数値接続装置",
  "account.delServerTip": "{ untname }から{ servername }を削除しますか？",
  "account.delServerSuc": "{ unitname }から削除されたサーバ{ servername }。"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
