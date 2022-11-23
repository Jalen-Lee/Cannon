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
  "header.bytello": "Bytello DMS",
  "header.command": "Command",
  "menu.school.manage": "Organization manage",
  "bread.school.manage": "Organization manage",
  "search.school.code": "Search organization code",
  "search.school.name": "Search organization name",
  "search.license.type": "Select license type",
  "table.head.code": "Organization code",
  "table.head.email": "Email",
  "table.head.userName": "User name",
  "table.head.schoolName": "Organization name",
  "table.head.schoolLocation": "Organization location",
  "table.head.licenseType": "License type",
  "table.head.maxPanels": "Max panels",
  "table.head.credits": "Credits",
  "table.head.remainingCredits": "Remaining Credits",
  "table.header.enrolledDevices": "Enrolled devices",
  "table.head.activeTime": "Activate time",
  "table.head.operation": "Operation",
  "table.button.edit": "Edit",
  "pagination.total": "Total {items} items",
  "pagination.page": "page",
  "edit.school.title": "Edit organization information",
  "edit.school.secondtitle": 'for "{schoolName}"',
  "edit.school.name": "Organization Name",
  "edit.school.location": "Organization Location",
  "edit.school.holder": "organization location",
  "edit.school.maxpanels": "Maxinum Panels",
  "edit.school.maxpanels.tooltip": "Maximum panels to be connected simutaneously",
  "edit.school.schoolcode": "Organization Code",
  "edit.school.adminemail": "Organization Admin Email",
  "edit.button.cancel": "Cancel",
  "edit.button.save": "Save change",
  "delete.school.title": "Delete School",
  "delete.school.content": 'Organization "{schoolName}" will be delete from your organization list.',
  "delete.button.cancel": "Cancel",
  "delete.button.delete": "Delete",
  "school.delete.success": "Organization deleted.",
  "table.bottom.empty": "Empty",
  "table.bottom.search": "No results",
  "search.school.email": "Search email"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
