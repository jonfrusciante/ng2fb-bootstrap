webpackJsonp([1,9],{849:function(e,t,n){"use strict";var o=n(0),a=n(271),r=n(865),c=n(864),i=n(898),d=n(900),s=n(866),l=n(897);n.d(t,"AdminModule",function(){return p});var f=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(){}return e=f([n.i(o.P)({imports:[l.a,a.a,i.a,d.a],declarations:[r.a,c.a],providers:[s.a]}),u("design:paramtypes",[])],e)}()},864:function(e,t,n){"use strict";var o=n(0),a=n(117);n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(e){this.af=e}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e=r([n.i(o.F)({selector:"app-admin-home",template:n(931),styles:[n(919)]}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.d&&a.d)&&t||Object])],e);var t}()},865:function(e,t,n){"use strict";var o=n(0),a=n(866);n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(e){this.adminService=e}return e=r([n.i(o.F)({selector:"appc-admin",styles:[n(920)],template:n(932)}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object])],e);var t}()},866:function(e,t,n){"use strict";var o=n(0),a=n(474);n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(e){this.dataService=e,this.adminApiUrl="api/admin/doadminoperation/"}return e.prototype.do=function(){return this.dataService.get(this.adminApiUrl)},e=r([n.i(o.d)(),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object])],e);var t}()},867:function(e,t,n){"use strict";var o=n(0),a=n(117),r=n(473);n.d(t,"a",function(){return d});var c=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.af=e,this.modalService=t}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e.prototype.delete=function(e){this.categories.remove(e).catch(function(e){console.log(e.message)})},e.prototype.save=function(e){e.dateAdded=firebase.database.ServerValue.TIMESTAMP,e.$key?this.categories.update(e.$key,{name:e.name,description:e.description}):this.categories.push(e)},e.prototype.open=function(e,t){var n=this;this.currentCategory=t?Object.assign({},t):{name:"",description:""},this.modalService.open(e).result.then(function(e){n.save(e),console.log("Closed with: "+e)},function(e){console.log("Dismissed "+n.getDismissReason(e))})},e.prototype.getDismissReason=function(e){return e===r.b.ESC?"by pressing ESC":e===r.b.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e},e=c([n.i(o.F)({selector:"appc-category",template:n(933),styles:[n(921)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.d&&a.d)&&t||Object,"function"==typeof(d="undefined"!=typeof r.c&&r.c)&&d||Object])],e);var t,d}()},868:function(e,t,n){"use strict";var o=n(0),a=n(117),r=n(473);n.d(t,"a",function(){return d});var c=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.af=e,this.modalService=t,this.selectedCategoryId=""}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e.prototype.delete=function(e){this.products.remove(e)},e.prototype.save=function(e){console.log(e.dateAdded),e.$key?this.products.update(e.$key,{name:e.name,description:e.description,quantity:e.quantity,price:e.price,dateAdded:new Date(e.dateAdded.year,e.dateAdded.month,e.dateAdded.day)}):(e.dateAdded=firebase.database.ServerValue.TIMESTAMP,this.products.push(e))},e.prototype.open=function(e,t){var n=this;this.currentProduct=t?Object.assign({},t):{name:"",description:"",price:"",quantity:"",dateAdded:""},this.modalService.open(e).result.then(function(e){n.save(e),console.log("Closed with: "+e)},function(e){console.log("Dismissed "+n.getDismissReason(e))})},e.prototype.onChange=function(){this.products=this.af.database.list("/products/"+this.selectedCategoryId)},e.prototype.getDismissReason=function(e){return e===r.b.ESC?"by pressing ESC":e===r.b.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e},e=c([n.i(o.F)({selector:"appc-product",template:n(934),styles:[n(922)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.d&&a.d)&&t||Object,"function"==typeof(d="undefined"!=typeof r.c&&r.c)&&d||Object])],e);var t,d}()},897:function(e,t,n){"use strict";var o=n(87),a=n(865),r=n(864),c=n(867),i=n(868);n.d(t,"a",function(){return s});var d=[{path:"",component:a.a,children:[{path:"home",component:r.a},{path:"category",component:c.a},{path:"product",component:i.a}]}],s=o.a.forChild(d)},898:function(e,t,n){"use strict";var o=n(0),a=n(271),r=n(867),c=n(899);n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e=i([n.i(o.P)({imports:[a.a],exports:[r.a],declarations:[r.a],providers:[c.a]}),d("design:paramtypes",[])],e)}()},899:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return e=a([n.i(o.d)(),r("design:paramtypes",[])],e)}()},900:function(e,t,n){"use strict";var o=n(0),a=n(271),r=n(868),c=n(901);n.d(t,"a",function(){return s});var i=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e=i([n.i(o.P)({imports:[a.a],exports:[r.a],declarations:[r.a],providers:[c.a]}),d("design:paramtypes",[])],e)}()},901:function(e,t,n){"use strict";var o=n(0),a=n(474);n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(e){this.dataService=e,this.adminApiUrl="api/admin/product/"}return e=r([n.i(o.d)(),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object])],e);var t}()},919:function(e,t){e.exports=""},920:function(e,t){e.exports="a.active {\n  font-weight: bold; }\n"},921:function(e,t){e.exports=""},922:function(e,t){e.exports=""},931:function(e,t){e.exports='<p>Admin home</p>\n\n<div class="row">\n    <a routerLink="../category">\n        <div class="col-md-6 card card-inverse card-info text-xs-center">\n            <div class="card-block">\n                <blockquote class="card-blockquote">\n                    <p>{{(categories | async)?.length}}</p>\n                    <footer>Total categories</footer>\n                </blockquote>\n            </div>\n        </div>\n    </a>\n</div>'},932:function(e,t){e.exports='<ol class="breadcrumb">\n    <li class="breadcrumb-item">\n        <a routerLinkActive="active"  routerLink="home">Admin Home</a>\n    </li>\n    <li class="breadcrumb-item">\n        <a routerLinkActive="active" routerLink="category">Category</a>\n    </li>\n    <li class="breadcrumb-item">\n        <a routerLinkActive="active" routerLink="product">Product</a>\n    </li>\n</ol>\n\n<router-outlet></router-outlet>'},933:function(e,t){e.exports='<table class="table">\n  <thead class="thead-default">\n    <tr>\n      <th>Id</th>\n      <th>Category name</th>\n      <th>Date Added</th>\n      <th>Description</th>\n      <th>\n        <button class="btn btn-success" (click)="open(template, null)">New <i class="fa fa-plus"></i> </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor="let category of categories | async">\n      <th scope="row"> {{category.$key}}</th>\n      <td>{{category.name}}</td>\n      <td>{{category.dateAdded | date: \'dd/MM/yyyy hh:mm a\'}}</td>\n      <td>{{category.description}}</td>\n      <td>\n        <div class="btn-group" role="group" aria-label="Categories editing buttons">\n          <button type="button" class="btn btn-sm btn-warning" (click)="open(template, category)">\n              <i class="fa fa-pencil"></i>\n          </button>\n          <button type="button" class="btn btn-sm btn-danger" (click)="delete(category)">\n              <i class="fa fa-trash-o"></i>\n          </button>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n<!--Modal template-->\n<template #template let-c="close" let-d="dismiss">\n  <div class="modal-header">\n    <button type="button" class="close" aria-label="Close" (click)="d(\'Cross click\')">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title">Upsert category</h4>\n  </div>\n  <div class="modal-body">\n\n    <form #hf="ngForm" novalidate role="form">\n      <div class="form-group">\n        <label>Name</label>\n        <input type="text" [class.error]="!name.valid" class="form-control" placeholder="Name" [(ngModel)]="currentCategory.name"\n          name="name" ngControl="name" required #name="ngModel" />\n        <div *ngIf="!name.valid && name.touched" class="form-control-feedback">\n          Name is required\n        </div>\n      </div>\n      <div class="form-group">\n        <label>Description</label>\n        <textarea [class.error]="!description.valid" class="form-control" placeholder="description" [(ngModel)]="currentCategory.description"\n          name="description" ngControl="description" required #description="ngModel"></textarea>\n        <label *ngIf="!description.valid && description.touched" class="form-control-feedback">\n            Description is required\n         </label>\n      </div>\n    </form>\n  </div>\n  <div class="modal-footer">\n    <button type="submit" class="btn btn-secondary" [disabled]="!hf.form.valid" (click)="c(currentCategory)">Upsert</button>\n    <button type="button" class="btn btn-warning" (click)="d(\'Close click\')">Close</button>\n  </div>\n</template>\n\n<template ngbModalContainer></template>'},934:function(e,t){e.exports='<div class="row col-md-6" *ngIf="categories">\n  <div class="form-group">\n    <label for="categoriesSelect">Categories <span *ngIf="selectedCategory">({{selectedCategoryId}})</span></label>\n    <select class="form-control" id="categoriesSelect" name="category" [(ngModel)]="selectedCategoryId" required (ngModelChange)="onChange(selectedCategoryId)">\n      <option selected="true" value="0">Please select...</option>\n      <option *ngFor="let category of categories | async" [value]="category.$key">{{category.name}}</option>\n    </select>\n  </div>\n</div>\n\n<div class="row" *ngIf="products">\n  <table class="table table-striped">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Price</th>\n        <th>Quantity</th>\n        <th>Date Added</th>\n        <th>\n          <button class="btn btn-success" (click)="open(template, null)">New <i class="fa fa-plus"></i> </button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let product of products | async">\n        <td>{{product.$key}}</td>\n        <td>{{product.name}} <i ngbTooltip="{{product.description}}" class="fa fa-info-circle hover"></i> </td>\n        <td>{{product.price}}</td>\n        <td>{{product.quantity}}</td>\n        <td>{{product.dateAdded | date: \'dd/MM/yyyy\'}}</td>\n        <td>\n          <div class="btn-group" role="group" aria-label="Categories editing buttons">\n            <button type="button" class="btn btn-sm btn-warning" (click)="open(template, product)">\n              <i class="fa fa-pencil"></i>\n          </button>\n            <button type="button" class="btn btn-sm btn-danger" (click)="delete(product)">\n              <i class="fa fa-trash-o"></i>\n          </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<!--Modal template-->\n<template #template let-c="close" let-d="dismiss">\n  <div class="modal-header">\n    <button type="button" class="close" aria-label="Close" (click)="d(\'Cross click\')">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title">Upsert product</h4>\n  </div>\n  <div class="modal-body">\n\n    <form #hf="ngForm" novalidate role="form">\n      <div class="form-group">\n        <label>Name</label>\n        <input type="text" [class.error]="!name.valid" class="form-control" placeholder="Name" [(ngModel)]="currentProduct.name"\n          name="name" ngControl="name" required #name="ngModel" />\n        <div *ngIf="!name.valid && name.touched" class="form-control-feedback">\n          Name is required\n        </div>\n      </div>\n      <div class="form-group">\n        <label>Price</label>\n        <input type="text" [class.error]="!price.valid" class="form-control" placeholder="Price" [(ngModel)]="currentProduct.price"\n          name="price" ngControl="price" required #price="ngModel" />\n        <label *ngIf="!price.valid && price.touched" class="form-control-feedback">\n            Price is required\n         </label>\n      </div>\n      <div class="form-group">\n        <label>Quantity</label>\n        <input type="text" [class.error]="!quantity.valid" class="form-control" placeholder="Quantity" [(ngModel)]="currentProduct.quantity"\n          name="quantity" ngControl="quantity" required #quantity="ngModel" />\n        <label *ngIf="!quantity.valid && quantity.touched" class="form-control-feedback">\n            Quantity is required\n         </label>\n      </div>\n      <div class="form-group">\n        <label>Date added</label>\n\n        <div class="input-group">\n          <input class="form-control" placeholder="yyyy-mm-dd" name="dateAdded" [(ngModel)]="currentProduct.dateAdded" ngbDatepicker #dateAdded="ngbDatepicker">\n          <div class="input-group-addon" (click)="dateAdded.toggle()">\n            <i class="fa fa-calendar"></i>\n          </div>\n        </div>\n\n        <!--<ngb-datepicker name="dateAdded" #dateAdded [(ngModel)]="currentProduct.dateAdded"></ngb-datepicker>-->\n\n        <!--<input type="text" [class.error]="!dateAdded.valid" class="form-control" placeholder="Date" [(ngModel)]="currentProduct.dateAdded"\n          name="dateAdded" ngControl="dateAdded" required #dateAdded="ngModel" />-->\n        <label *ngIf="!dateAdded.valid && dateAdded.touched" class="form-control-feedback">\n            Date added is required\n         </label>\n      </div>\n      <div class="form-group">\n        <label>Description</label>\n        <textarea [class.error]="!description.valid" class="form-control" placeholder="Description" [(ngModel)]="currentProduct.description"\n          name="description" ngControl="description" required #description="ngModel"></textarea>\n        <label *ngIf="!description.valid && description.touched" class="form-control-feedback">\n            Description is required\n         </label>\n      </div>\n    </form>\n  </div>\n  <div class="modal-footer">\n    <button type="submit" class="btn btn-secondary" [disabled]="!hf.form.valid" (click)="c(currentProduct)">Upsert</button>\n    <button type="button" class="btn btn-warning" (click)="d(\'Close click\')">Close</button>\n  </div>\n</template>\n\n<template ngbModalContainer></template>'}});