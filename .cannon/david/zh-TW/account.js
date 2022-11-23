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
  "account.state": "地方",
  "account.serverManagement": "服務器管理",
  "account.deviceSettingLock": "裝置設定鎖",
  "account.pswdManagement": "密碼管理",
  "account.admin": "人事行政經理",
  "account.powerState": "權力國家",
  "account.connectNum": "數位連接設備",
  "account.resetPswd": "重置密碼",
  "account.schoolName": "機構名稱",
  "account.resetPswdTip2": "注意：如果您使用了其他用戶中心產品，密碼將同步更新。",
  "account.password": "暗語",
  "account.remoteLockDesc": "在設定中鎖定遙控器。 輸入密碼以將其解鎖。",
  "account.school": "學校",
  "account.schoolCode": "組織機構代碼",
  "account.deleteServer": "删除服務器",
  "account.username": "用戶名",
  "account.screenLock": "荧幕鎖定",
  "account.email": "電子郵件",
  "account.personalInfo": "個人資訊",
  "account.deviceSettingLockDesc": "鎖定設備中的設定。 輸入密碼以將其解鎖。",
  "account.resetPswdTip1": "重置密碼後，此帳戶將自動註銷。",
  "account.operation": "活動",
  "account.delServerTip": "是否要從{unitName}中删除 {serverName}?",
  "account.remoteLock": "遙控鎖",
  "account.screenLockDesc": "鎖定設備荧幕一段時間。 輸入密碼以將其解鎖。",
  "account.serverName": "服務器名",
  "account.delete": "删去",
  "account.delServerSuc": "已從{unitName}中删除服務器{serverName}。",
  "account.serverOff": "關閉",
  "account.serverOn": "上",
  "account.account": "賬戶"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
