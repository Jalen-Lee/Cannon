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
  "account.personalInfo": "Personal information",
  "account.account": "Account",
  "account.username": "Username",
  "account.resetPswd": "Reset password",
  "account.resetPswdTip1": "After reset the password,this account will be automatically logged out. ",
  "account.resetPswdTip2": "Caution:If you have use other Usercenter products,the password will be update synchronously.",
  "account.pswdManagement": "Password management",
  "account.password": "Password",
  "account.remoteLock": "Remote lock",
  "account.remoteLockDesc": "Lock Remote in Settings. Enter the password to unlock it.",
  "account.deviceSettingLock": "Device setting lock",
  "account.deviceSettingLockDesc": "Lock Settings in the device. Enter the password to unlock it.",
  "account.screenLock": "Screen lock",
  "account.screenLockDesc": "Lock device screen for a period. Enter the password to unlock it.",
  "account.school": "School",
  "account.schoolName": "Organization name",
  "account.state": "Location",
  "account.admin": "Admin manager",
  "account.email": "Email",
  "account.schoolCode": "Organization code",
  "account.serverManagement": "Server management",
  "account.serverName": "Server name",
  "account.powerState": "Power state",
  "account.connectNum": "Number connect device",
  "account.operation": "Operation",
  "account.delete": "Delete",
  "account.deleteServer": "Delete Server",
  "account.delServerTip": "Do you want to delete {serverName} from {unitName}?",
  "account.delServerSuc": "Server {serverName} deleted from {unitName}.",
  "account.serverOff": "OFF",
  "account.serverOn": "ON"
};
