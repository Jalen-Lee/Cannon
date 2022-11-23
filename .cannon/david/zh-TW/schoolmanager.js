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
  "menu.school.manage": "組織管理",
  "bread.school.manage": "組織管理",
  "search.school.code": "搜索組織代碼",
  "search.school.name": "搜索組織名稱",
  "search.license.type": "選擇許可證類型",
  "table.head.code": "組織代碼",
  "table.head.email": "電子郵件",
  "table.head.userName": "用戶名",
  "table.head.schoolName": "組織名稱",
  "table.head.schoolLocation": "組織位置",
  "table.head.licenseType": "許可類型",
  "table.head.maxPanels": "最大面板",
  "table.head.credits": "學分",
  "table.head.remainingCredits": "剩餘學分",
  "table.header.enrolledDevices": "已註冊的設備",
  "table.head.activeTime": "激活時間",
  "table.head.operation": "操作",
  "table.button.edit": "編輯",
  "pagination.total": "共 {items} 個項目",
  "pagination.page": "頁",
  "edit.school.title": "編輯組織信息",
  "edit.school.secondtitle": '为 "{schoolName}"',
  "edit.school.name": "組織名稱",
  "edit.school.location": "組織位置",
  "edit.school.holder": "組織位置",
  "edit.school.maxpanels": "最大面板數",
  "edit.school.maxpanels.tooltip": "同時連接的最大面板數",
  "edit.school.schoolcode": "組織代碼",
  "edit.school.adminemail": "組織管理員電子郵件",
  "edit.button.cancel": "取消",
  "edit.button.save": "保存更改",
  "delete.school.title": "刪除學校",
  "delete.school.content": '組織 "{schoolName}" 將從您的組織列表中刪除.',
  "delete.button.cancel": "取消",
  "delete.button.delete": "刪除",
  "school.delete.success": "組織已刪除.",
  "table.bottom.empty": "空的",
  "table.bottom.search": "沒結果",
  "search.school.email": "搜尋電子郵件"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
