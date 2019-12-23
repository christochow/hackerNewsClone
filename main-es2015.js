(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <table class=\"container-table\" align=\"center\">\n    <tbody style=\"display: table-row-group;vertical-align: middle;\">\n    <tr align=\"left\" style=\"background-color: rgb(255, 102, 0);\">\n      <table class=\"header\">\n        <tbody>\n        <tr style=\"height: 30px\">\n          <td style=\"vertical-align: bottom;\"><a routerLink=\"\" routerLinkActive=\"active\"><img alt=\"\" style=\"padding-left: 5px;\" src=\"assets/favicon.ico\"></a></td>\n          <td style=\"vertical-align: center;\">\n            <a style=\"padding-left: 5px;\" class=\"title\" routerLink=\"\" routerLinkActive=\"active\">Hacker News Clone</a>\n          </td>\n          <td style=\"vertical-align: center;\">\n              <a style=\"padding-left: 5px;padding-right: 5px\" routerLink=\"newest\" [ngClass]=\"isNewest?'active-link':''\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">new</a>\n          </td>\n          <td style=\"vertical-align: center;\">|</td>\n          <td style=\"vertical-align: center;\">\n              <a style=\"padding-left: 5px;padding-right: 5px\" routerLink=\"ask\" [ngClass]=\"isAsk?'active-link':''\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">ask</a>\n          </td>\n          <td style=\"vertical-align: center;\">|</td>\n          <td style=\"vertical-align: center;\">\n              <a style=\"padding-left: 5px;padding-right: 5px\" routerLink=\"show\" [ngClass]=\"isShow?'active-link':''\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">show</a>\n          </td>\n          <td style=\"vertical-align: center;\">|</td>\n          <td style=\"vertical-align: center;\">\n            <a style=\"padding-left: 5px;padding-right: 5px\" routerLink=\"jobs\" [ngClass]=\"isJobs?'active-link':''\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">jobs</a>\n          </td>\n          <td *ngIf=\"hasUser\" style=\"vertical-align: center;\">|</td>\n          <td *ngIf=\"hasUser\">\n            <div style=\"padding-left: 5px;padding-right: 5px;color: white\">\n              {{id+\"'s submissions\"}}\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </tr>\n    <tr class=\"separator-row\"><td></td></tr>\n    <router-outlet></router-outlet>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comment/comment.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comment/comment.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tr *ngIf=\"!item.deleted\">\n  <td [width]=\"depth*50 + 'px'\"></td>\n  <td>\n    <table class=\"main-row\">\n      <tr class=\"table-row text\" align=\"left\"><a class=\"user\" [routerLink]=\"['../../user/'+item.by]\"\n                                                 routerLinkActive=\"active\">{{item.by}}</a></tr>\n      <tr class=\"text\" [innerHTML]=\"item.text\" align=\"left\"></tr>\n    </table>\n  </td>\n</tr>\n<table>\n  <tr app-comment *ngFor=\"let i of item.kids\" [depth]=\"depth+1\" [id]=\"i\"></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments/comments.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments/comments.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table *ngIf=\"ready\">\n  <tbody>\n  <app-row *ngIf=\"item.id\" [isCommentPage]=\"true\" [isJobs]=\"false\" [id]=\"item.id\"></app-row>\n  <tr class=\"main-row\" align=\"left\">\n    <td style=\"padding-left: 11px;padding-top: 10px\" [innerHTML]=\"item.text\"\n        *ngIf=\"item.text !== undefined\"></td>\n  </tr>\n  <app-poll *ngIf=\"item.id && isPoll\" [item]=\"item\"></app-poll>\n  <tr>\n    <td style=\"border-bottom: 0.5pt solid grey;\"></td>\n  </tr>\n  <tr class=\"separator\"></tr>\n  <tr app-comment *ngFor=\"let i of item.kids.slice(30*(page-1), 30*page)\" [depth]=\"0\" [id]=\"i\"\n      (onDisable)=\"item.kids = onDisable($event, item.kids)\"></tr>\n  <tr *ngIf=\"ready && item.kids.slice(30*(page)).length > 0\" style=\"height: 10px;\" align=\"left\">\n    <td>\n      <a [routerLink]=\"['../'+item.id]\" [queryParams]=\"{p:page+1}\" routerLinkActive=\"active\">...more</a>\n    </td>\n  </tr>\n  <tr style=\"height: 10px;\">\n    <td></td>\n  </tr>\n  <tr style=\"height: 2px;\">\n    <td style=\"background-color: rgb(255, 102, 0);\"></td>\n  </tr>\n  <tr style=\"height: 50px;\">\n    <td></td>\n  </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/poll/poll.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/poll/poll.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n  <tbody>\n  <tr app-pollopt *ngFor=\"let x of item.parts\" [id]=\"x\"></tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/pollopt/pollopt.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/pollopt/pollopt.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: left;padding-left: 35px\">\n  <div style=\"font-size: 13px\">{{item.text}}</div>\n  <div style=\"font-size: 10px;color:grey\">{{item.score + ' points'}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-page/main-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-page/main-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" *ngIf=\"ready\">\n  <tbody>\n  <app-row *ngFor=\"let s of stories.slice(30*(page-1), 30*page) let i = index\"\n           [id]=\"s\" [index]=\"30*(page-1)+i+1\" [isJobs]=\"isJobs\" [isCommentPage]=\"false\"\n           (disable)=\"stories = onDisable($event, stories)\" (listFull)=\"listFull = true;\">\n  </app-row>\n  <tr *ngIf=\"ready && listFull && stories.slice(30*(page)).length > 0\" style=\"height: 10px;\" align=\"left\">\n    <td>\n      <a [routerLink]=\"[]\" [queryParams]=\"{p:page+1}\" routerLinkActive=\"active\">...more</a>\n    </td>\n  </tr>\n  <tr style=\"height: 10px;\">\n    <td></td>\n  </tr>\n  <tr style=\"height: 2px;\">\n    <td style=\"background-color: rgb(255, 102, 0);\"></td>\n  </tr>\n  <tr style=\"height: 50px;\">\n    <td></td>\n  </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/row/row.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/row/row.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"isCommentPage?['comment-row']:['main-row']\">\n  <tr align=\"left\">\n    <td *ngIf=\"isCommentPage\" width=\"2.5px\"></td>\n    <td *ngIf=\"!isCommentPage && new.url === undefined\" style=\"font-size: 15px\"\n        [style.padding-left]=\"index < 10? '8px' : '0'\">\n      {{index}}. <a [routerLink]=\"['../'+(isPoll?'poll/':'comments/')+new.id]\"\n                    routerLinkActive=\"active\">{{new.title}}</a>\n    </td>\n    <td *ngIf=\"!isCommentPage && new.url !== undefined\" style=\"font-size: 15px\"\n        [style.padding-left]=\"index < 10? '8px' : '0'\">\n      {{index}}. <a [href]=\"new.url\" target=\"_blank\">{{new.title}}</a>\n    </td>\n    <td *ngIf=\"isCommentPage && new.url === undefined\" style=\"font-size: 16px;\">\n      <a [routerLink]=\"[]\"\n         [queryParams]=\"{}\"\n         routerLinkActive=\"active\"\n         >{{new.title}}\n      </a>\n    </td>\n    <td *ngIf=\"isCommentPage && new.url !== undefined\" style=\"font-size: 16px;\">\n      <a [href]=\"new.url\" target=\"_blank\">{{new.title}}\n      </a>\n    </td>\n  </tr>\n  <tr *ngIf=\"isJobs\"><td class=\"job-row\"></td></tr>\n  <tr align=\"left\" class=\"info-row\" *ngIf=\"!isJobs\">\n    <td *ngIf=\"isCommentPage\" width=\"2.5px\"></td>\n    <td>\n      <span *ngIf=\"!isCommentPage\" class=\"normal-link\">\n        {{new.score}} points by <a class=\"info-row\"\n                                   [routerLink]=\"['../user/'+new.by]\"\n                                   routerLinkActive=\"active\">{{new.by}}</a>\n      </span>\n      <span *ngIf=\"isCommentPage\">\n        {{new.score}} points by <a class=\"info-row\" [routerLink]=\"['../../user/'+new.by]\"\n                                                             routerLinkActive=\"active\">\n        {{new.by}}</a>\n      </span>\n      <span *ngIf=\"new.url !== undefined\">|</span>\n      <span *ngIf=\"new.url !== undefined\" class=\"web-link\"><a class=\"info-row\" [href]=\"'https://www.google.com/search?q='+new.title\"\n                                               target=\"_blank\">web</a></span>\n      <span>|</span>\n      <span><a class=\"info-row\" [routerLink]=\"isCommentPage?[]:['../'+(isPoll?'poll/':'comments/')+new.id]\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{ exact: true }\">{{discuss}}</a></span>\n    </td>\n  </tr>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/submission/submission.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/submission/submission.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <tr align=\"left\" style=\"margin: 0\">\n    <td style=\"font-size: 15px\" *ngIf=\"submission.url === undefined\"  [style.padding-left]=\"index < 10? '8px' : '0'\">\n      {{index}}. <a [routerLink]=\"['../../../'+(isPoll?'poll/':'comments/')+submission.id]\" routerLinkActive=\"active\">{{submission.title}}</a>\n    </td>\n    <td style=\"font-size: 15px\" *ngIf=\"submission.url !== undefined\"   [style.padding-left]=\"index < 10? '8px' : '0'\">{{index}}. <a [href]=\"submission.url\" target=\"_blank\">{{submission.title}}</a></td>\n  </tr>\n  <tr align=\"left\" style=\"margin: 0;color: grey\">\n    <td>\n      <span style=\"padding-left: 25px;\">{{submission.score}} points by <a class=\"info-link\" [routerLink]=\"['../']\">{{submission.by}}</a></span>\n      <span>|</span>\n      <span style=\"margin: 2px\"><a class=\"info-link\" [href]=\"'https://www.google.com/search?q='+submission.title\" target=\"_blank\">web</a></span>\n      <span>|</span>\n      <span><a class=\"info-link\" [routerLink]=\"['../../../'+(isPoll?'poll/':'comments/')+submission.id]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">{{discuss}}</a></span>\n    </td>\n  </tr>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/submissions/submissions.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/submissions/submissions.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" *ngIf=\"ready\">\n  <tbody>\n  <app-submission *ngFor=\"let s of user.submitted.slice(30*(page-1),30*page) let i = index\" [id]=\"s\" [index] = \"30*(page-1)+i+1\"\n    (disable)=\"user.submitted = onDisable($event, user.submitted);\" (listFull)=\"listFull = true\"></app-submission>\n  <tr *ngIf=\"ready && listFull && user.submitted.slice(30*page).length > 0\" style=\"height: 10px;\" align=\"left\"><td>\n    <a [routerLink]=\"[]\" [queryParams]=\"{p:page+1}\" routerLinkActive=\"active\">...more</a>\n  </td></tr>\n  <tr style=\"height: 10px;\"><td></td></tr>\n  <tr style=\"height: 2px;\"><td style=\"background-color: rgb(255, 102, 0);\"></td></tr>\n  <tr style=\"height: 50px;\"><td></td></tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" *ngIf=\"ready\">\n  <tbody align=\"left\">\n  <tr><td width=\"10px;\">user: </td>  <td class=\"header\">{{user.id}}</td></tr>\n  <tr><td width=\"10px;\">karma:</td> <td class=\"header\">{{user.karma}}</td></tr>\n  <tr><td width=\"10px;\" valign=\"top\">about:</td> <td class=\"header\" [innerHTML]=\"user.about\"></td></tr>\n  <tr><td width=\"10px;\"></td> <td class=\"header\"><a [routerLink]=\"'submissions'\">submissions</a></td></tr>\n  <tr style=\"height: 10px;\"><td></td></tr>\n  <tr style=\"height: 2px;\"><td style=\"background-color: rgb(255, 102, 0);\"></td><td style=\"background-color: rgb(255, 102, 0);width: 100%\"></td></tr>\n  <tr style=\"height: 50px;\"><td></td></tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/main-page/main-page.component */ "./src/app/shared/main-page/main-page.component.ts");
/* harmony import */ var _comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments/comments/comments.component */ "./src/app/comments/comments/comments.component.ts");
/* harmony import */ var _user_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-info/user-info.component */ "./src/app/user/user-info/user-info.component.ts");
/* harmony import */ var _user_submissions_submissions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/submissions/submissions.component */ "./src/app/user/submissions/submissions.component.ts");







const routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'comments/:id', component: _comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"] },
    { path: 'poll/:id', component: _comments_comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"] },
    { path: 'user/:id', component: _user_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"] },
    { path: 'user/:id/submissions', component: _user_submissions_submissions_component__WEBPACK_IMPORTED_MODULE_6__["SubmissionsComponent"] },
    { path: 'newest', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'ask', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'show', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'news', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'jobs', component: _shared_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: '**', redirectTo: 'news', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: black;\n}\n\n.container {\n  text-align: center;\n}\n\n.container-table {\n  min-width: 85%;\n  max-width: 85%;\n  display: table;\n  background-color: rgb(246, 246, 239);\n}\n\n.title {\n  font-weight: bold\n}\n\n.header {\n  line-height: 24px;\n}\n\n.active-link {\n  color: white;\n}\n\n.separator-row {\n  height: 2px;\n  padding: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItdGFibGUge1xuICBtaW4td2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDIzOSk7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkXG59XG5cbi5oZWFkZXIge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VwYXJhdG9yLXJvdyB7XG4gIGhlaWdodDogMnB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.isNewest = false;
        this.isAsk = false;
        this.isShow = false;
        this.isJobs = false;
    }
    ngOnInit() {
        this.sub = this.router.events.subscribe(value => {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.hasUser = value.url.includes('submissions');
                if (this.hasUser === true) {
                    this.id = value.url.split('/')[2];
                }
                this.isNewest = value.url.includes('newest');
                this.isAsk = value.url.includes('ask');
                this.isShow = value.url.includes('show');
                this.isJobs = value.url.includes('jobs');
            }
        });
    }
    ngOnDestroy() {
        this.sub.subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/main-page/main-page.module */ "./src/app/shared/main-page/main-page.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.module */ "./src/app/comments/comments.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_5__["MainPageModule"],
            _comments_comments_module__WEBPACK_IMPORTED_MODULE_7__["CommentsModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/comments/comment/comment.component.css":
/*!********************************************************!*\
  !*** ./src/app/comments/comment/comment.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: black;\n}\n\ntd {\n  word-wrap:break-word;\n  white-space: normal;\n}\n\n.table-row {\n  color: grey;\n  height: 16px;\n}\n\n.text {\n  font-size: 13px;\n  line-height: 17px;\n}\n\n.main-row {\n  border-bottom: 0.5pt solid grey;\n  margin: 0;\n}\n\n.user {\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50ZCB7XG4gIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udGFibGUtcm93IHtcbiAgY29sb3I6IGdyZXk7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuXG4ubWFpbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAwLjVwdCBzb2xpZCBncmV5O1xuICBtYXJnaW46IDA7XG59XG5cbi51c2VyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/comments/comment/comment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comments/comment/comment.component.ts ***!
  \*******************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");



let CommentComponent = class CommentComponent {
    constructor(api) {
        this.api = api;
        this.onDisable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.item = {};
    }
    ngOnInit() {
        this.style = {
            width: 10 * this.depth + 'px'
        };
        this.api.getItem(this.id).subscribe(data => {
            this.item = data;
            if (this.item === null || this.item.dead === true || this.item.deleted === true) {
                this.onDisable.emit({ id: this.id });
            }
        });
    }
};
CommentComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "depth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentComponent.prototype, "onDisable", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-comment]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comment/comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment.component.css */ "./src/app/comments/comment/comment.component.css")).default]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comments/comment/comment.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments/comments.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _poll_poll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poll/poll.component */ "./src/app/comments/poll/poll.component.ts");
/* harmony import */ var _pollopt_pollopt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pollopt/pollopt.component */ "./src/app/comments/pollopt/pollopt.component.ts");









let CommentsModule = class CommentsModule {
};
CommentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"], _pollopt_pollopt_component__WEBPACK_IMPORTED_MODULE_8__["PolloptComponent"], _poll_poll_component__WEBPACK_IMPORTED_MODULE_7__["PollComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        exports: [_comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"]]
    })
], CommentsModule);



/***/ }),

/***/ "./src/app/comments/comments/comments.component.css":
/*!**********************************************************!*\
  !*** ./src/app/comments/comments/comments.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-row {\n  font-size: 15px;\n  color: grey;\n}\n\n.separator {\n  height: 30px;\n}\n\na {\n  text-decoration: none;\n  color: gray;\n  font-size: 14px;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcm93IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnNlcGFyYXRvciB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/comments/comments/comments.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/comments/comments/comments.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let CommentsComponent = class CommentsComponent {
    constructor(api, route, titleService, router) {
        this.api = api;
        this.route = route;
        this.titleService = titleService;
        this.router = router;
        this.item = { kids: [] };
        this.ready = false;
        this.page = 1;
        this.onDisable = ($event, array) => array.filter(e => e !== $event.id);
        this.getData = (page) => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(page)) {
                const temp = parseInt(page, 10);
                if (!(isNaN(temp) || temp < 1)) {
                    if (temp >= this.page) {
                        window.scroll(0, 0);
                        if (temp === this.page) {
                            this.ready = false;
                        }
                    }
                    this.page = temp;
                }
            }
            else {
                if (this.page === 1 && this.ready === true) {
                    this.ready = false;
                }
                else {
                    this.page = 1;
                }
            }
            return this.ready ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.item) : this.api.getItem(this.route.snapshot.paramMap.get('id'));
        };
        this.subscribe = () => this.getData(this.route.snapshot.queryParamMap.get('p'))
            .subscribe(data => {
            this.item = data;
            this.isPoll = this.item.type === 'poll';
            if (this.item.kids === undefined) {
                this.item.kids = [];
            }
            this.titleService.setTitle(this.item.title + ' | HNC');
            this.ready = true;
        }, err => {
            console.log(err);
            this.ready = true;
        });
        this.refresh = () => {
            this.subscription.unsubscribe();
            this.subscription = this.subscribe();
        };
    }
    ngOnInit() {
        this.subscription = this.subscribe();
        this.pageSub = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])).subscribe(() => {
            this.refresh();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.pageSub.unsubscribe();
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments/comments.component.css")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/comments/poll/poll.component.css":
/*!**************************************************!*\
  !*** ./src/app/comments/poll/poll.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL3BvbGwvcG9sbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comments/poll/poll.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comments/poll/poll.component.ts ***!
  \*************************************************/
/*! exports provided: PollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollComponent", function() { return PollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PollComponent = class PollComponent {
    constructor() {
        this.item = {};
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PollComponent.prototype, "item", void 0);
PollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-poll',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./poll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/poll/poll.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./poll.component.css */ "./src/app/comments/poll/poll.component.css")).default]
    })
], PollComponent);



/***/ }),

/***/ "./src/app/comments/pollopt/pollopt.component.css":
/*!********************************************************!*\
  !*** ./src/app/comments/pollopt/pollopt.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL3BvbGxvcHQvcG9sbG9wdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comments/pollopt/pollopt.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comments/pollopt/pollopt.component.ts ***!
  \*******************************************************/
/*! exports provided: PolloptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolloptComponent", function() { return PolloptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");



let PolloptComponent = class PolloptComponent {
    constructor(api) {
        this.api = api;
        this.item = {};
    }
    ngOnInit() {
        this.sub = this.api.getItem(this.id).subscribe(data => {
            this.item = data;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
PolloptComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PolloptComponent.prototype, "id", void 0);
PolloptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-pollopt]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pollopt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/pollopt/pollopt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pollopt.component.css */ "./src/app/comments/pollopt/pollopt.component.css")).default]
    })
], PolloptComponent);



/***/ }),

/***/ "./src/app/hacker-news-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/hacker-news-api.service.ts ***!
  \********************************************/
/*! exports provided: HackerNewsAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerNewsAPIService", function() { return HackerNewsAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HackerNewsAPIService = class HackerNewsAPIService {
    constructor(http) {
        this.http = http;
    }
    getTop() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    }
    getNews() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json');
    }
    getItem(id) {
        return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    }
    getAsk() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/askstories.json');
    }
    getShow() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/showstories.json');
    }
    getUser(id) {
        return this.http.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
    }
    getJobs() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
    }
};
HackerNewsAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HackerNewsAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HackerNewsAPIService);



/***/ }),

/***/ "./src/app/shared/main-page/main-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/main-page/main-page.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: gray;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/main-page/main-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/main-page/main-page.component.ts ***!
  \*********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let MainPageComponent = class MainPageComponent {
    constructor(api, titleService, router, route) {
        this.api = api;
        this.titleService = titleService;
        this.router = router;
        this.route = route;
        this.stories = [];
        this.ready = false;
        this.listFull = false;
        this.page = 1;
        this.onDisable = ($event, array) => array.filter(e => e !== $event.id);
        this.getData = (page) => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(page)) {
                const temp = parseInt(page, 10);
                if (!(isNaN(temp) || temp < 1)) {
                    if (temp >= this.page) {
                        window.scroll(0, 0);
                        if (temp === this.page) {
                            this.ready = false;
                        }
                    }
                    this.page = temp;
                }
            }
            else {
                if (this.page === 1 && this.ready === true) {
                    this.ready = false;
                }
                else {
                    this.page = 1;
                }
            }
            let apiResponse;
            if (this.ready === false) {
                if (this.isTop === true) {
                    apiResponse = this.api.getTop();
                }
                else if (this.isAsk === true) {
                    apiResponse = this.api.getAsk();
                }
                else if (this.isShow === true) {
                    apiResponse = this.api.getShow();
                }
                else if (this.isJobs === true) {
                    apiResponse = this.api.getJobs();
                }
                else {
                    apiResponse = this.api.getNews();
                }
            }
            return this.ready ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.stories) : apiResponse;
        };
        this.subscribe = () => this.getData(this.route.snapshot.queryParamMap.get('p'))
            .subscribe(data => {
            this.listFull = false;
            this.stories = data;
            this.ready = true;
        }, err => {
            console.log(err);
            this.ready = true;
        });
        this.refresh = () => {
            this.subscription.unsubscribe();
            this.subscription = this.subscribe();
        };
    }
    ngOnInit() {
        this.isTop = this.router.url === '/news';
        this.isShow = this.router.url === '/show';
        this.isAsk = this.router.url === '/ask';
        this.isJobs = this.router.url === '/jobs';
        let title = 'Hacker News Clone';
        if (this.isTop === true) {
            title = 'New stories | HNC';
        }
        else if (this.isAsk === true) {
            title = 'Ask stories | HNC';
        }
        else if (this.isShow === true) {
            title = 'Show stories | HNC';
        }
        this.titleService.setTitle(title);
        this.subscription = this.subscribe();
        this.pageSub = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])).subscribe(() => {
            this.refresh();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.pageSub.unsubscribe();
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/shared/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/shared/main-page/main-page.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/main-page/main-page.module.ts ***!
  \******************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/shared/main-page/main-page.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        exports: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]],
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/shared/row/row.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/row/row.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: black;\n}\n\nspan {\n  font-size: 11px;\n  padding: 1px;\n}\n\ntr {\n  margin: 0;\n}\n\n.web-link {\n  font-size: 12px;\n  margin: 2px;\n}\n\n.normal-link {\n  padding-left: 25px;\n}\n\n.main-row:hover {\n  background-color: gainsboro;\n}\n\n.comment-row {\n  line-height: 17px;\n}\n\n.info-row {\n  color: gray;\n}\n\n.job-row {\n  height: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Jvdy9yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yb3cvcm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxudHIge1xuICBtYXJnaW46IDA7XG59XG5cbi53ZWItbGluayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5ub3JtYWwtbGluayB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLm1haW4tcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4uY29tbWVudC1yb3cge1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmluZm8tcm93IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5qb2Itcm93IHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/row/row.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/row/row.component.ts ***!
  \*********************************************/
/*! exports provided: RowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowComponent", function() { return RowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);






let RowComponent = class RowComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.disable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listFull = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.new = {};
    }
    ngOnInit() {
        this.api.getItem(this.id).subscribe(r => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(r)) {
                this.disable.emit({ id: this.id });
                return;
            }
            this.new = r;
            this.isPoll = this.new.type === 'poll';
            const hasKids = Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__["isNotNullOrUndefined"])(this.new.descendants);
            this.discuss = (!hasKids || this.new.descendants === 0) ?
                'discuss' : this.new.descendants + ' comment' + (this.new.descendants === 1 ? '' : 's');
            const show = (this.new.deleted !== true) && (this.new.dead !== true) && (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__["isNotNullOrUndefined"])(this.new.title));
            if (show === false) {
                this.disable.emit({ id: this.id });
            }
            else if (this.index % 30 === 0) {
                this.listFull.emit();
            }
        });
    }
};
RowComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowComponent.prototype, "isCommentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowComponent.prototype, "isJobs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RowComponent.prototype, "disable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RowComponent.prototype, "listFull", void 0);
RowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-row',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/row/row.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./row.component.css */ "./src/app/shared/row/row.component.css")).default]
    })
], RowComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _row_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row/row.component */ "./src/app/shared/row/row.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_row_row_component__WEBPACK_IMPORTED_MODULE_3__["RowComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _row_row_component__WEBPACK_IMPORTED_MODULE_3__["RowComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/user/submission/submission.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/submission/submission.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: black;\n}\n\na.info-link {\n  color: grey;\n}\n\nspan {\n  font-size: 11px;\n  padding: 1px;\n}\n\ndiv:hover {\n  background-color: gainsboro;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYS5pbmZvLWxpbmsge1xuICBjb2xvcjogZ3JleTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5kaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/user/submission/submission.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/submission/submission.component.ts ***!
  \*********************************************************/
/*! exports provided: SubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return SubmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





let SubmissionComponent = class SubmissionComponent {
    constructor(api) {
        this.api = api;
        this.disable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listFull = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submission = {};
    }
    ngOnInit() {
        this.api.getItem(this.id).subscribe(r => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(r)) {
                this.disable.emit({ id: this.id });
                return;
            }
            this.submission = r;
            this.isPoll = this.submission.type === 'poll';
            const hasKids = Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(this.submission.descendants);
            this.discuss = (!hasKids || this.submission.descendants === 0) ?
                'discuss' : this.submission.descendants + ' comment' + (this.submission.descendants === 1 ? '' : 's');
            const show = (this.submission.deleted !== true) && (this.submission.dead !== true) && (this.submission.type !== 'comment')
                && (this.submission.type !== 'pollopt') && Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(this.submission.title);
            if (show === false) {
                this.disable.emit({ id: this.id });
            }
            else if (this.index % 30 === 0) {
                this.listFull.emit();
            }
        });
    }
};
SubmissionComponent.ctorParameters = () => [
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_2__["HackerNewsAPIService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SubmissionComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SubmissionComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SubmissionComponent.prototype, "disable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SubmissionComponent.prototype, "listFull", void 0);
SubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/submission/submission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submission.component.css */ "./src/app/user/submission/submission.component.css")).default]
    })
], SubmissionComponent);



/***/ }),

/***/ "./src/app/user/submissions/submissions.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/submissions/submissions.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: gray;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/submissions/submissions.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/submissions/submissions.component.ts ***!
  \***********************************************************/
/*! exports provided: SubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionsComponent", function() { return SubmissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let SubmissionsComponent = class SubmissionsComponent {
    constructor(router, route, api, title) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.title = title;
        this.page = 1;
        this.ready = false;
        this.listFull = false;
        this.onDisable = ($event, array) => array.filter(e => e !== $event.id);
        this.getDataAndSetPage = (page, id) => {
            if (page !== undefined && page !== null) {
                const temp = parseInt(page, 10);
                if (!(isNaN(temp) || temp < 1)) {
                    if (temp >= this.page) {
                        window.scroll(0, 0);
                        if (temp === this.page) {
                            this.ready = false;
                        }
                    }
                    this.page = temp;
                }
            }
            else {
                this.page = 1;
            }
            return this.ready ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.user) : this.api.getUser(id);
        };
        this.subscribe = () => this.getDataAndSetPage(this.route.snapshot.queryParamMap.get('p'), this.id)
            .subscribe(data => {
            this.user = data;
            this.ready = true;
            this.listFull = false;
        }, err => {
            console.log(err);
            this.ready = true;
        });
        this.refresh = () => {
            this.subscription.unsubscribe();
            this.subscription = this.subscribe();
        };
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.title.setTitle(`${this.id}'s submissions | HNC`);
        this.subscription = this.subscribe();
        this.pageSub = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
            this.refresh();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.pageSub.unsubscribe();
    }
};
SubmissionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_3__["HackerNewsAPIService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SubmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submissions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./submissions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/submissions/submissions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./submissions.component.css */ "./src/app/user/submissions/submissions.component.css")).default]
    })
], SubmissionsComponent);



/***/ }),

/***/ "./src/app/user/user-info/user-info.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  color: black;\n}\n\n.header {\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.ts ***!
  \*******************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hacker-news-api.service */ "./src/app/hacker-news-api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let UserInfoComponent = class UserInfoComponent {
    constructor(router, route, api, title) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.title = title;
        this.user = {};
        this.ready = false;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.title.setTitle(`Profile: ${id} | HNC`);
        this.api.getUser(id).subscribe(data => {
            this.user = data;
            this.ready = true;
        }, err => {
            console.log(err);
            this.ready = true;
        });
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _hacker_news_api_service__WEBPACK_IMPORTED_MODULE_3__["HackerNewsAPIService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.css */ "./src/app/user/user-info/user-info.component.css")).default]
    })
], UserInfoComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user/user-info/user-info.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _submissions_submissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submissions/submissions.component */ "./src/app/user/submissions/submissions.component.ts");
/* harmony import */ var _submission_submission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission/submission.component */ "./src/app/user/submission/submission.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"], _submissions_submissions_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionsComponent"], _submission_submission_component__WEBPACK_IMPORTED_MODULE_6__["SubmissionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
        ],
        exports: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"], _submissions_submissions_component__WEBPACK_IMPORTED_MODULE_5__["SubmissionsComponent"]]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/3nine/Desktop/Angular/hackerNewsClone/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);