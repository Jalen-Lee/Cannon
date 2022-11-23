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
  "account.personalInfo": "Личные сведения",
  "account.account": "счёт",
  "account.username": "Имя пользователя",
  "account.resetPswd": "сбросить пароль",
  "account.resetPswdTip1": "после сброса пароля Эта учётная запись будет автоматически аннулирована.",
  "account.resetPswdTip2": "Примечание: если вы используете другие продукты центра пользователя, пароль будет обновлен синхронно.",
  "account.pswdManagement": "Управление паролями",
  "account.password": "арготизм",
  "account.remoteLock": "удаленный блокировка",
  "account.remoteLockDesc": "Заблокировать параметры удалённого ввода. Введите пароль для разблокирования.",
  "account.deviceSettingLock": "блокировка устройства",
  "account.deviceSettingLockDesc": "Заблокировать устройство. Введите пароль для разблокирования.",
  "account.screenLock": "блокировка экрана",
  "account.screenLockDesc": "Заблокировать экран устройства на некоторое время. Введите пароль для разблокирования.",
  "account.school": "школа",
  "account.schoolName": "название организации",
  "account.state": "место",
  "account.admin": "управление кадрами",
  "account.email": "электронная почта",
  "account.schoolCode": "код организации",
  "account.serverManagement": "управление сервером",
  "account.serverName": "Имя сервера",
  "account.powerState": "Состояние питания",
  "account.connectNum": "устройство цифрового соединения",
  "account.operation": "деятельность",
  "account.delete": "Исключить",
  "account.deleteServer": "Удалить сервер",
  "account.delServerTip": "Удалить {serverName} из {unitName}?",
  "account.delServerSuc": "Сервер {serverName} был удален из {unitName}",
  "account.serverOff": "закрыть",
  "account.serverOn": "вверх"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
