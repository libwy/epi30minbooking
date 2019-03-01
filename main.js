(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-detail/room-detail.component */ "./src/app/room-detail/room-detail.component.ts");





var routes = [
    { path: 'room/:id', component: _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_4__["RoomDetailComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: calc(100% - 70px);\n  height: calc(100% - 70px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxieWFuZy93b3Jrc3BhY2Uvd29yay9hbmdtYXRwd2EvQW5ndWxhclB3YVBvc3RPbmUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.title = 'EPICENTER 30min BOOKING';
        this.nav = [
            {
                title: 'Rooms',
                path: '/'
            },
            {
                title: 'My Bookings',
                path: '/auth'
            }
        ];
        this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this.mobileQueryListener);
    }
    AppComponent.prototype.toggleMobileNav = function (nav) {
        if (this.mobileQuery.matches) {
            nav.toggle();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "toggleSideNav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _timeslot_dialog_timeslot_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeslot-dialog/timeslot-dialog.component */ "./src/app/timeslot-dialog/timeslot-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room-detail/room-detail.component */ "./src/app/room-detail/room-detail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _timeslot_dialog_timeslot_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TimeslotDialogComponent"],
                _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoomDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            entryComponents: [
                _timeslot_dialog_timeslot_dialog_component__WEBPACK_IMPORTED_MODULE_9__["TimeslotDialogComponent"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card *ngFor=\"let room of rooms\">\n  <h3>\n    <a routerLink=\"/room/{{room.id}}\">\n    {{room.title | uppercase}}\n\n    </a>\n  </h3>\n  <!--<button mat-raised-button (click)=\"openDialog(room)\">Book</button>-->\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(roomService) {
        this.roomService = roomService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    HomeComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (rooms) { return _this.rooms = rooms; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/room-detail/room-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<section class=\"container\" *ngIf=\"room\">\n  <div class=\"row\" style=\"margin-bottom: 20px;\">\n    <div class=\"col-md-4\">\n      <div style=\"font-size: xx-large\">{{time | date:'h:mm'}}</div>\n      <div style=\"font-size: large\">{{time | date:'MMMM dd'}}</div>\n    </div> <!-- we use mat-card instead of div -->\n    <div class=\"col-md-8\">\n      <div>Room:</div>\n      <h2><div>{{room.title}}</div></h2>\n      <button mat-raised-button (click)=\"openDialog(room)\"> + ADD BOOKING</button>\n\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div style=\"background-color: chocolate; padding:12px; margin: 4px; width: auto;\" *ngFor=\"let booking of room.bookings\">\n      <div style=\"color: white;padding: 12px;\">{{booking.company}}</div>\n      <div style=\"color: aliceblue;padding: 12px;\">{{booking.time | uppercase}}</div>\n      <!--<button mat-raised-button>Extend Booking</button>-->\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/room-detail/room-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: calc(100% - 70px);\n  height: calc(100% - 70px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxieWFuZy93b3Jrc3BhY2Uvd29yay9hbmdtYXRwd2EvQW5ndWxhclB3YVBvc3RPbmUvc3JjL2FwcC9yb29tLWRldGFpbC9yb29tLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jvb20tZGV0YWlsL3Jvb20tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/room-detail/room-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.ts ***!
  \******************************************************/
/*! exports provided: RoomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function() { return RoomDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/clock.service */ "./src/app/services/clock.service.ts");
/* harmony import */ var _timeslot_dialog_timeslot_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timeslot-dialog/timeslot-dialog.component */ "./src/app/timeslot-dialog/timeslot-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(route, roomService, clockService, dialog) {
        this.route = route;
        this.roomService = roomService;
        this.clockService = clockService;
        this.dialog = dialog;
    }
    RoomDetailComponent.prototype.getRoom = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.roomService.getRoom(id)
            .subscribe(function (room) {
            console.log(room);
            _this.room = room;
        });
    };
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRoom();
        this.clockService.time.subscribe(function (now) {
            _this.time = now;
        });
    };
    RoomDetailComponent.prototype.openDialog = function (room) {
        var _this = this;
        this.roomService.getThirtyMinBookings(room).subscribe(function (result) {
            _this.dialog.open(_timeslot_dialog_timeslot_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TimeslotDialogComponent"], {
                width: '550px',
                height: '550px',
                data: { room: room, bookings: result }
            });
        });
    };
    RoomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-detail',
            template: __webpack_require__(/*! ./room-detail.component.html */ "./src/app/room-detail/room-detail.component.html"),
            styles: [__webpack_require__(/*! ./room-detail.component.scss */ "./src/app/room-detail/room-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"],
            _services_clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/clock.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/clock.service.ts ***!
  \*******************************************/
/*! exports provided: ClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockService", function() { return ClockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ClockService = /** @class */ (function () {
    function ClockService() {
        this.time$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tick) { return new Date(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    Object.defineProperty(ClockService.prototype, "time", {
        get: function () {
            return this.time$;
        },
        enumerable: true,
        configurable: true
    });
    ClockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockService);
    return ClockService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var base64 = window.btoa('marpea:PassEpi4321');
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        Authorization: "Basic " + base64
    })
};
var baseUrl = 'https://epicenterstockholm.com';
// const baseUrl = 'http://epicenter.local';
var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
    }
    RoomService.prototype.getRooms = function () {
        var _this = this;
        return this.http.get(baseUrl + "/api/v1/room_for_30_min?_format=json", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched rooms'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('', [])));
    };
    RoomService.prototype.getThirtyMinBookings = function (room) {
        var _this = this;
        return this.http.get(baseUrl + "/api/v1/room_30_min_booking/" + room.id + "?_format=json", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched bookings for room of " + room.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('', [])));
    };
    RoomService.prototype.bookRoom = function (room, timeSlotId) {
        var _this = this;
        var bookSlot = {
            field_timeslots: timeSlotId,
            field_room_30_min: room.id
        };
        return this.http.post(baseUrl + "/api/v1/room_for_30_min?_format=json", bookSlot, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('booking room '); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('post api/v1/room_for_30_min', 'operation failed')));
    };
    RoomService.prototype.log = function (s) {
        console.log(s);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    RoomService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RoomService.prototype.getRoom = function (id) {
        var _this = this;
        return this.http.get(baseUrl + "/api/v1/room_for_30_min?_format=json&roomid=" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched room detail for room of " + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('', null)));
    };
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/timeslot-dialog/timeslot-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/timeslot-dialog/timeslot-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>For ROOM {{data.room.title}}</h1>\n<div mat-dialog-content>\n  <p>Please choose the time slot to book</p>\n  <mat-form-field>\n    <mat-select placeholder=\"Select\" [(value)]=\"selectedSlot\">\n      <mat-option *ngFor=\"let booking of data.bookings\" disabled=\"{{!booking.open}}\" value=\"{{booking.slotId}}\">\n        {{booking.startTime}} - {{booking.endTime}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-chip-list>\n    <mat-chip *ngFor=\"let booking of data.room.bookings\">{{booking.time}}</mat-chip>\n  </mat-chip-list>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\">Cancel</button>\n  <button mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>OK</button>\n</div>\n"

/***/ }),

/***/ "./src/app/timeslot-dialog/timeslot-dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/timeslot-dialog/timeslot-dialog.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzbG90LWRpYWxvZy90aW1lc2xvdC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/timeslot-dialog/timeslot-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/timeslot-dialog/timeslot-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogData, TimeslotDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeslotDialogComponent", function() { return TimeslotDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");




var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());

var TimeslotDialogComponent = /** @class */ (function () {
    function TimeslotDialogComponent(dialogRef, data, roomService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.roomService = roomService;
    }
    TimeslotDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    TimeslotDialogComponent.prototype.onConfirmClick = function () {
        var _this = this;
        console.log(this.selectedSlot);
        console.log(this.data.room);
        this.roomService.bookRoom(this.data.room, this.selectedSlot).subscribe(function (result) {
            if (result.errors) {
                console.log(result.errors);
            }
            else {
                location.reload();
            }
            _this.dialogRef.close();
        });
    };
    TimeslotDialogComponent.prototype.ngOnInit = function () {
    };
    TimeslotDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeslot-dialog',
            template: __webpack_require__(/*! ./timeslot-dialog.component.html */ "./src/app/timeslot-dialog/timeslot-dialog.component.html"),
            styles: [__webpack_require__(/*! ./timeslot-dialog.component.scss */ "./src/app/timeslot-dialog/timeslot-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            DialogData,
            _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]])
    ], TimeslotDialogComponent);
    return TimeslotDialogComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wilbyang/workspace/work/angmatpwa/AngularPwaPostOne/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map