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
  "login.error.createWidthAccount": "Δημιουργία με αυτόν τον λογαριασμό;",
  "login.error.pwdLength": "Οι κωδικοί πρόσβασης πρέπει να έχουν χαρακτήρες 8-16.",
  "login.error.verify": "Παρακαλώ επαληθεύστε",
  "login.label.pwd": "Κωδικός πρόσβασης",
  "login.title.tips": "Συμβουλές",
  "login.label.createAccount": "Δημιουργία ενός",
  "login.title.login": "Σύνδεση",
  "login.error.emailEmpty": "Παρακαλώ εισάγετε τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας.",
  "login.error.pwdInvalid": "Λυπάμαι, αυτός ο κωδικός πρόσβασης είναι λανθασμένος.",
  "login.error.pwdNotEqual": "Αυτοί οι κωδικοί πρόσβασης δεν ταιριάζουν.",
  "login.error.notLogin": "Δεν είστε συνδεδεμένοι, παρακαλώ συνδεθείτε.",
  "login.label.email": "Ηλεκτρονικό ταχυδρομείο",
  "login.title.account": "Λογαριασμός",
  "login.btn.ok": "Εντάξει.",
  "login.btn.confirm": "Επιβεβαίωση",
  "login.error.emailLetterInvalid": "Λυπούμαστε, επιτρέπονται μόνο τα γράμματα(a-z), οι αριθμοί(0-9), και τα σύμβολα(@._).",
  "login.error.pwdEqualMail": "Λυπούμαστε, οι κωδικοί πρόσβασης δεν ταιριάζουν με τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας",
  "login.label.forgotPwd": "Ξέχασες τον κωδικό;",
  "login.btn.login": "Σύνδεση",
  "login.placeHolder.email": "Εισάγετε τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας",
  "login.placeHolder.pwd": "Εισάγετε τον κωδικό πρόσβασής σας",
  "login.error.emailInvalid": "Λυπάμαι, αυτό το μήνυμα ηλεκτρονικού ταχυδρομείου είναι άκυρο.",
  "login.error.emailNotFound": "Δεν βρέθηκε λογαριασμός με αυτό το email.",
  "login.error.pwdFormat": "Ο κωδικός πρόσβασης πρέπει να έχει δύο κατηγορίες από κάτω:\n αριθμοί/γράμματα/ειδικό χαρακτήρα",
  "login.label.notAccount": "Χωρίς λογαριασμό;",
  "login.error.pwdEmpty": "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης.",
  "login.error.specialSymbol": "Συγγνώμη, μόνο γράμματα(a-z), αριθμός(0-9), και ειδικός χαρακτήρας(~!@#$%^&*())+-=,/;➤<>;) επιτρέπονται"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
