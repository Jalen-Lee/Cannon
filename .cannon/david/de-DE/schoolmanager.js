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
  "header.title": "Bytello DMS",
  "header.bytello": "Bytello DMS",
  "header.command": "Command",
  "menu.school.manage": "Organisation verwalten",
  "bread.school.manage": "Organisation verwalten",
  "search.school.code": "Organisationscode suchen",
  "search.school.name": "Organisationsnamen suchen",
  "search.license.type": "Lizenztyp auswählen",
  "table.head.code": "Organisationscode",
  "table.head.email": "E-Mail",
  "table.head.userName": "Benutzername",
  "table.head.schoolName": "Organisationsname",
  "table.head.schoolLocation": "Organisations-Standort",
  "table.head.licenseType": "Lizenztyp",
  "table.head.maxPanels": "Max. Felder",
  "table.head.credits": "Credits",
  "table.head.remainingCredits": "Verbleibendes Restguthaben",
  "table.header.enrolledDevices": "Ingeschreven apparaten",
  "table.head.activeTime": "Zeit aktivieren",
  "table.head.operation": "Aktion",
  "table.button.edit": "Bearbeiten",
  "pagination.total": "Total {items} Objekte",
  "pagination.page": "Seite",
  "edit.school.title": "Organisations-Daten bearbeiten",
  "edit.school.secondtitle": 'für "{schoolName}"',
  "edit.school.name": "Organisationsname",
  "edit.school.location": "Organisations-Standort",
  "edit.school.holder": "Organisations-Standort",
  "edit.school.maxpanels": "Max. Felder",
  "edit.school.maxpanels.tooltip": "Max. Felder, die gleichzeitig verbunden werden können",
  "edit.school.schoolcode": "Organisationscode",
  "edit.school.adminemail": "Organisation Admin-E-Mail",
  "edit.button.cancel": "Abbrechen",
  "edit.button.save": "Änderung speichern",
  "delete.school.title": "Organisation löschen",
  "delete.school.content": 'Organisation "{schoolName}" von ihrer Organisationsliste gelöscht.',
  "delete.button.cancel": "Abbrechen",
  "delete.button.delete": "Löschen",
  "school.delete.success": "Organisation gelöscht.",
  "table.bottom.empty": "Leer",
  "table.bottom.search": "Keine Ergebnisse",
  "search.school.email": "Suche Email"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
