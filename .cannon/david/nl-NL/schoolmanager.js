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
  "menu.school.manage": "Organisatie beheren",
  "bread.school.manage": "Organisatie beheren",
  "search.school.code": "Zoeken op Organisatiecode",
  "search.school.name": "Zoeken op Organisatienaam",
  "search.license.type": "Selecteer licentietype",
  "table.head.code": "Organisatiecode",
  "table.head.email": "E-mail",
  "table.head.userName": "Naam gebruiker",
  "table.head.schoolName": "Organisatienaam",
  "table.head.schoolLocation": "Organisatielocatie",
  "table.head.licenseType": "Licentietype",
  "table.head.maxPanels": "Max. panelen",
  "table.head.credits": "Credits",
  "table.head.remainingCredits": "Resterende tegoeden",
  "table.header.enrolledDevices": "Ingeschreven apparaten",
  "table.head.activeTime": "Tijd activeren",
  "table.head.operation": "Bewerking",
  "table.button.edit": "Bewerken",
  "pagination.total": "Totaal {items} items",
  "pagination.page": "pagina",
  "edit.school.title": "Organisatie-informatie bewerken",
  "edit.school.secondtitle": 'voor "{schoolName}"',
  "edit.school.name": "Organisatienaam",
  "edit.school.location": "Organisatielocatie",
  "edit.school.holder": "Organisatielocatie",
  "edit.school.maxpanels": "Max. panelen",
  "edit.school.maxpanels.tooltip": "Maximum aantal panelen dat gelijktijdig kan worden aangesloten",
  "edit.school.schoolcode": "Organisatiecode",
  "edit.school.adminemail": "Organisatie Admin e-mail",
  "edit.button.cancel": "Annuleren",
  "edit.button.save": "Wijziging opslaan",
  "delete.school.title": "Organisatie verwijderen",
  "delete.school.content": 'Organisatie "{schoolName}" zal verwijderd worden uit uw Organisatielijst.',
  "delete.button.cancel": "Annuleren",
  "delete.button.delete": "Verwijderen",
  "school.delete.success": "Organisatie verwijderd.",
  "table.bottom.empty": "Leeg",
  "table.bottom.search": "Geen resultaten",
  "search.school.email": "Zoek email"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
