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
  "search.school.code": "組織コードを検索する",
  "search.school.name": "組織名を検索",
  "search.license.type": "ライセンスタイプを選択",
  "table.head.code": "組織コード",
  "table.head.email": "Eメール",
  "table.head.userName": "ユーザー名",
  "table.head.schoolName": "組織名",
  "table.head.schoolLocation": "組織の場所",
  "table.head.licenseType": "免許の種類",
  "table.head.maxPanels": "最大パネル",
  "table.head.credits": "クレジット",
  "table.head.remainingCredits": "残りのクレジット",
  "table.header.enrolledDevices": "登録済みのデバイス",
  "table.head.activeTime": "起動時間",
  "table.head.operation": "操作",
  "table.button.edit": "編集",
  "pagination.total": "合計 {items} アイテム",
  "pagination.page": "ページ",
  "edit.school.title": "組織情報の編集",
  "edit.school.secondtitle": 'ために "{schoolName}"',
  "edit.school.name": "組織名",
  "edit.school.location": "組織の場所」",
  "edit.school.holder": "組織の場所",
  "edit.school.maxpanels": "最大パネル",
  "edit.school.maxpanels.tooltip": "同時に接続する最大パネル",
  "edit.school.schoolcode": "組織コード",
  "edit.school.adminemail": "組織管理者の電子メール",
  "edit.button.cancel": "キャンセル",
  "edit.button.save": "変更を保存する",
  "delete.school.title": "学校を削除する",
  "delete.school.content": '組織 "{schoolName}" 組織リストから削除されます.',
  "delete.button.cancel": "キャンセル",
  "delete.button.delete": "削除",
  "school.delete.success": "組織が削除されました.",
  "table.bottom.empty": "空の",
  "table.bottom.search": "結果がありません",
  "search.school.email": "メールを検索"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
