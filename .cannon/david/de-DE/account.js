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
  "account.screenLockDesc": "Gerätebildschirm für einen Zeitraum sperren. Geben Sie das Passwort ein, um es zu entsperren.",
  "account.schoolName": "Name der Organisation",
  "account.schoolCode": "Organisationscode",
  "account.password": "Passwort",
  "account.remoteLockDesc": "Remote in Einstellungen sperren. Geben Sie das Passwort ein, um es zu entsperren.",
  "account.delServerTip": "Möchten Sie {serverName} von {unitName} löschen?",
  "account.serverOff": "AUS",
  "account.deviceSettingLock": "Gerätesperre",
  "account.deviceSettingLockDesc": "Einstellungen im Gerät sperren. Geben Sie das Passwort ein, um es zu entsperren.",
  "account.resetPswdTip1": "Nach dem Zurücksetzen des Passworts wird dieses Konto automatisch abgemeldet.",
  "account.delServerSuc": "Server {serverName} aus {unitName} gelöscht.",
  "account.operation": "Betrieb",
  "account.state": "Standort",
  "account.serverManagement": "Serververwaltung",
  "account.screenLock": "Bildschirmsperre",
  "account.admin": "Admin-Manager",
  "account.connectNum": "Nummer Verbindungsgerät",
  "account.delete": "Löschen",
  "account.account": "Konto",
  "account.resetPswdTip2": "Achtung: Wenn Sie andere Usercenter-Produkte verwendet haben, wird das Passwort synchron aktualisiert.",
  "account.resetPswd": "Passwort zurücksetzen",
  "account.pswdManagement": "Passwortverwaltung",
  "account.personalInfo": "Persönliche Informationen",
  "account.username": "Benutzername",
  "account.deleteServer": "Server löschen",
  "account.remoteLock": "Fernsperre",
  "account.powerState": "Leistungszustand",
  "account.serverName": "Servername",
  "account.serverOn": "ON",
  "account.school": "Schule",
  "account.email": "E-Mail"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
