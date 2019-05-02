(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return BaseEntity});var _tool_kit_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(103),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),BaseEntity=function(){function BaseEntity(id){this.id=id||Object(_tool_kit_service__WEBPACK_IMPORTED_MODULE_0__.a)(),this.locked$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.a(!1)}return BaseEntity.prototype.getID=function(){return this.id},BaseEntity.prototype.isLocked=function(){return this.locked$},BaseEntity.prototype.setLocked=function(locked){void 0===locked&&(locked=!0),this.locked$.next(locked)},BaseEntity}()},103:function(module,__webpack_exports__,__webpack_require__){"use strict";function UID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=16*Math.random()|0;return("x"===c?r:3&r|8).toString(16)})}__webpack_require__.d(__webpack_exports__,"a",function(){return UID})},104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return BaseModel});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_base_entity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),BaseModel=function(_super){function BaseModel(type,id){var _this=_super.call(this,id)||this;return _this.type=type,_this.selected$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a(!1),_this.painted$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a(!1),_this}return tslib__WEBPACK_IMPORTED_MODULE_0__.c(BaseModel,_super),BaseModel.prototype.getParent=function(){return this.parent$},BaseModel.prototype.setParent=function(parent){this.parent$.next(parent)},BaseModel.prototype.getSelectedEntities=function(){return this.selected$?[this]:[]},BaseModel.prototype.isPainted=function(){return this.painted$},BaseModel.prototype.setPainted=function(painted){void 0===painted&&(painted=!0),this.painted$.next(painted)},BaseModel.prototype.getType=function(){return this.type},BaseModel.prototype.getID=function(){return this.id},BaseModel.prototype.isSelected=function(){return this.selected$},BaseModel.prototype.setSelected=function(selected){void 0===selected&&(selected=!0),this.selected$.next(selected)},BaseModel.prototype.remove=function(){},BaseModel}(_base_entity__WEBPACK_IMPORTED_MODULE_1__.a)},190:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=190},192:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return AppComponent});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),ngx_diagrams__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69),projects_ngx_diagrams_src_lib_models_node_model__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59),AppComponent=function(){function AppComponent(diagramEngine){this.diagramEngine=diagramEngine,this.title="playground"}var _a;return AppComponent.prototype.ngOnInit=function(){this.diagramEngine.registerDefaultFactories(),this.diagramModel=this.diagramEngine.createDiagram();var node1=new projects_ngx_diagrams_src_lib_models_node_model__WEBPACK_IMPORTED_MODULE_3__.a;node1.setPosition(500,300),node1.extras$.next({height:100,width:200}),this.diagramModel.addNode(node1),node1.setLocked(),setTimeout(function(){node1.extras$.next({height:150,width:150})},3e3)},AppComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-root",template:__webpack_require__(384),styles:[__webpack_require__(385)]}),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:paramtypes",["function"==typeof(_a=void 0!==ngx_diagrams__WEBPACK_IMPORTED_MODULE_2__.a&&ngx_diagrams__WEBPACK_IMPORTED_MODULE_2__.a)?_a:Object])],AppComponent)}()},193:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MarkdownWrapperComponent});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),MarkdownWrapperComponent=function(){function MarkdownWrapperComponent(){}return tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:type",String)],MarkdownWrapperComponent.prototype,"rawMarkdown",void 0),MarkdownWrapperComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-markdown-wrapper",template:__webpack_require__(386),styles:[__webpack_require__(387)]}),tslib__WEBPACK_IMPORTED_MODULE_0__.d("design:paramtypes",[])],MarkdownWrapperComponent)}()},194:function(module,exports){module.exports="# ngx-diagrams (WIP)\n___\n\n[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)\n[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)\n[![Build Status](https://travis-ci.com/DanielNetzer/ngx-diagrams.svg?branch=master)](https://travis-ci.com/DanielNetzer/ngx-diagrams)\n\n***Light weight, modular, typed diagram engine for angular.***\n\nCheck out our [stories](https://danielnetzer.github.io/ngx-diagrams)\n\n# Getting Started\n___\n\n### Installation\n\n```bash\nnpm i ngx-diagrams\n```\n\n### Setup\n- Import the library module.\n  \n`app.module.ts`\n\n```javascript\nimport { NgxDiagramsModule } from 'ngx-diagrams';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxDiagramsModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n```\n\n- instantiate new DiagramModel in the component you want to add the diagram canvas (e.g. app.component.ts), and start adding nodes, links, ports and work with the diagram.\n  \n    `app.component.ts`\n\n```javascript\n diagramModel = new DiagramModel();\n\n  constructor() { }\n\n  ngOnInit() {\n    const newNode = this.diagramModel.addNode('test', 200, 300);\n    newNode.addPort('test', 'out');\n  }\n```"},197:function(module,exports,__webpack_require__){__webpack_require__(198),__webpack_require__(284),__webpack_require__(285),module.exports=__webpack_require__(388)},285:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{panelPosition:"right"}}),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(377)},module)}.call(this,__webpack_require__(158)(module))},377:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),projects_playground_src_app_app_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(192),projects_playground_src_app_components_markdown_wrapper_markdown_wrapper_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(193),ngx_diagrams__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),_README_md__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(194),_README_md__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_4__),ngx_markdown_esm5_src_markdown_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(195);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Docs",module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ngx_markdown_esm5_src_markdown_module__WEBPACK_IMPORTED_MODULE_5__.a.forRoot()]})).add("welcome",function(){return{component:projects_playground_src_app_components_markdown_wrapper_markdown_wrapper_component__WEBPACK_IMPORTED_MODULE_2__.a,props:{rawMarkdown:_README_md__WEBPACK_IMPORTED_MODULE_4___default.a}}}),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Examples",module).addDecorator(Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ngx_diagrams__WEBPACK_IMPORTED_MODULE_3__.b]})).add("base",function(){return{component:projects_playground_src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.a}})}.call(this,__webpack_require__(158)(module))},378:function(module,exports){module.exports="<div\n  class=\"ngdx-diagram\"\n  (mousedown)=\"onMouseDown($event)\"\n  (wheel)=\"onMouseWheel($event)\"\n>\n  \x3c!-- Nodes Layer --\x3e\n  <div\n    class=\"ngdx-nodes-layer\"\n    [ngStyle]=\"{\n      transform:\n        'translate(' +\n        (offsetX$ | async) +\n        'px, ' +\n        (offsetY$ | async) +\n        'px) scale(' +\n        (zoomLevel$ | async) / 100.0 +\n        ')'\n    }\"\n  >\n    <ng-template #nodesLayer></ng-template>\n    \x3c!-- <ngdx-default-node\n      *ngFor=\"let node of nodes$ | async | keyvalue\"\n      class=\"ngdx-node\"\n      [node]=\"node.value\"\n      [key]=\"node.key\"\n      [ngStyle]=\"{\n        'height.px': node.value.height,\n        'width.px': node.value.width,\n        'top.px': node.value.y,\n        'right.px': node.value.x\n      }\"\n    ></ngdx-default-node> --\x3e\n  </div>\n\n  \x3c!-- Links Layer --\x3e\n  <div\n    class=\"ngdx-links-layer\"\n    [ngStyle]=\"{\n      transform:\n        'translate(' +\n        (offsetX$ | async) +\n        'px, ' +\n        (offsetY$ | async) +\n        'px) scale(' +\n        (zoomLevel$ | async) / 100.0 +\n        ')'\n    }\"\n  >\n    <ng-template #linksLayer></ng-template>\n  </div>\n</div>\n"},379:function(module,exports){module.exports=".ngdx-diagram {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  cursor: move;\n  overflow: hidden; }\n  .ngdx-diagram.selector {\n    position: absolute;\n    background-color: rgba(0, 192, 255, 0.2);\n    border: solid 2px #00c0ff; }\n  .ngdx-diagram .ngdx-nodes-layer {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    overflow: visible !important;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  .ngdx-diagram .ngdx-links-layer {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    overflow: visible !important;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n"},380:function(module,exports){module.exports='<div\n  class="default-node"\n  [ngStyle]="{\n    \'height.px\': (extras$ | async).height,\n    \'width.px\': (extras$ | async).width,\n    \'top.px\': y$ | async,\n    \'right.px\': x$ | async\n  }"\n>\n  <div class="ports">\n    <ngdx-default-port\n      *ngFor="let port of ports$ | async | keyvalue"\n      [port]="port.value"\n      [key]="port.key"\n    >\n    </ngdx-default-port>\n  </div>\n</div>\n'},381:function(module,exports){module.exports=".default-node {\n  width: 100%;\n  background-color: white;\n  border-radius: 10px;\n  border: 1px solid blue;\n  position: absolute;\n  display: flex;\n  transition: all 0.3s ease-in-out;\n  cursor: auto; }\n  .default-node .title {\n    padding: 10px;\n    text-align: center;\n    border-bottom: 1px solid blue; }\n"},382:function(module,exports){module.exports='<div class="default-port"></div>\n'},383:function(module,exports){module.exports=".default-port {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 60px;\n  border: 1px solid violet;\n  background-color: lightgray;\n  margin: 10px 0; }\n  .default-port:hover {\n    background-color: mediumseagreen; }\n  .default-port.out {\n    right: -5px; }\n  .default-port.in {\n    left: -5px; }\n"},384:function(module,exports){module.exports='<ngdx-diagram class="demo-diagram" [model]="diagramModel"></ngdx-diagram>\n'},385:function(module,exports){module.exports=".demo-diagram {\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background-color: #3c3c3c !important;\n  background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent);\n  background-size: 50px 50px; }\n"},386:function(module,exports){module.exports='<markdown ngPreserveWhitespaces [innerHTML]="rawMarkdown" class="markdown">\n</markdown>\n'},387:function(module,exports){module.exports=".markdown {\n  padding: 0 50px;\n  display: block; }\n"},388:function(module,exports,__webpack_require__){var content=__webpack_require__(389);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(390)(content,options);content.locals&&(module.exports=content.locals)},389:function(module,exports){module.exports=[[module.i,"/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0; }\n","",""]]},59:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return NodeModel});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_tool_kit_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),_port_model__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60),NodeModel=function(_super){function NodeModel(nodeType,extras,x,y,id){void 0===nodeType&&(nodeType="default"),void 0===extras&&(extras={}),void 0===x&&(x=0),void 0===y&&(y=0);var _this=_super.call(this,nodeType,id)||this;return _this.x$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a(x),_this.y$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a(y),_this.extras$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a(extras),_this.ports$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a({}),_this}return tslib__WEBPACK_IMPORTED_MODULE_0__.c(NodeModel,_super),NodeModel.prototype.setPosition=function(x,y){this.x$.next(x),this.y$.next(y)},NodeModel.prototype.addPort=function(name,type,id){var _a;void 0===id&&(id=_tool_kit_service__WEBPACK_IMPORTED_MODULE_1__.a());var newPort=new _port_model__WEBPACK_IMPORTED_MODULE_3__.a(name,type,id);return this.ports$.next(tslib__WEBPACK_IMPORTED_MODULE_0__.a({},this.ports$.getValue(),((_a={})[newPort.id]=newPort,_a))),newPort.id},NodeModel}(__webpack_require__(104).a)},60:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PortModel});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_base_model__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),PortModel=function(_super){function PortModel(name,type,id,maximumLinks){var _this=_super.call(this,type,id)||this;return _this.name=name,_this.links$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.a({}),_this.maximumLinks=maximumLinks,_this}return tslib__WEBPACK_IMPORTED_MODULE_0__.c(PortModel,_super),PortModel.prototype.getNode=function(){return this.getParent()},PortModel.prototype.getName=function(){return this.name},PortModel.prototype.getMaximumLinks=function(){return this.maximumLinks},PortModel.prototype.setMaximumLinks=function(maximumLinks){this.maximumLinks=maximumLinks},PortModel.prototype.removeLink=function(link){var links=this.links$.getValue();delete links[link.getID()],this.links$.next(tslib__WEBPACK_IMPORTED_MODULE_0__.a({},links))},PortModel.prototype.addLink=function(link){var _a;this.links$.next(tslib__WEBPACK_IMPORTED_MODULE_0__.a({},this.links$.getValue(),((_a={})[link.getID()]=link,_a)))},PortModel.prototype.getLinks=function(){return this.links$},PortModel.prototype.updateCoords=function(_a){var x=_a.x,y=_a.y,width=_a.width,height=_a.height;this.x=x,this.y=y,this.width=width,this.height=height},PortModel.prototype.canLinkToPort=function(port){return!0},PortModel.prototype.isLocked=function(){return _super.prototype.isLocked.call(this)||this.getParent().getValue().isLocked()},PortModel}(_base_model__WEBPACK_IMPORTED_MODULE_1__.a)},69:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(0),core=__webpack_require__(1),BehaviorSubject=__webpack_require__(37),diagram_model_DiagramModel=function(_super){function DiagramModel(diagramEngine){var _this=_super.call(this)||this;return _this.diagramEngine=diagramEngine,_this.model={nodes$:new BehaviorSubject.a({}),links$:new BehaviorSubject.a({}),zoom$:new BehaviorSubject.a(100),offsetX$:new BehaviorSubject.a(0),offsetY$:new BehaviorSubject.a(0),gridSize$:new BehaviorSubject.a(0),diagramEngine:_this.diagramEngine},_this}return tslib_es6.c(DiagramModel,_super),DiagramModel.prototype.addNode=function(node){var _a;return this.model.nodes$.next(tslib_es6.a({},this.model.nodes$.getValue(),((_a={})[node.getID()]=node,_a))),node},DiagramModel.prototype.deleteNode=function(nodeOrId){var nodeId="string"==typeof nodeOrId?nodeOrId:nodeOrId.getID(),updNodes=tslib_es6.a({},this.model.nodes$.getValue());delete updNodes[nodeId],this.model.nodes$.next(updNodes)},DiagramModel.prototype.selectNodes=function(){return this.model.nodes$},DiagramModel.prototype.addLink=function(link){var _a;return this.model.links$.next(tslib_es6.a({},this.model.links$.getValue(),((_a={})[link.getID()]=link,_a))),link},DiagramModel.prototype.deleteLink=function(linkOrId){var linkId="string"==typeof linkOrId?linkOrId:linkOrId.getID(),updLinks=tslib_es6.a({},this.model.links$.getValue());delete updLinks[linkId],this.model.links$.next(updLinks)},DiagramModel.prototype.selectLinks=function(){return this.model.links$},DiagramModel.prototype.serialize=function(){return JSON.stringify(this.model)},DiagramModel.prototype.deserialize=function(serializedModel){this.model=JSON.parse(serializedModel)},DiagramModel.prototype.setOffset=function(x,y){this.model.offsetX$.next(x),this.model.offsetY$.next(y)},DiagramModel.prototype.setOffsetX=function(x){this.model.offsetX$.next(x)},DiagramModel.prototype.getOffsetX=function(){return this.model.offsetX$},DiagramModel.prototype.setOffsetY=function(y){this.model.offsetY$.next(y)},DiagramModel.prototype.getOffsetY=function(){return this.model.offsetY$},DiagramModel.prototype.setZoomLevel=function(z){this.model.zoom$.next(z)},DiagramModel.prototype.getZoomLevel=function(){return this.model.zoom$},DiagramModel.prototype.getDiagramEngine=function(){return this.model.diagramEngine},DiagramModel}(__webpack_require__(102).a),share=__webpack_require__(394),BaseAction=function(){return function BaseAction(mouseX,mouseY){this.mouseX=mouseX,this.mouseY=mouseY,this.ms=(new Date).getTime()}}(),move_canvas_action_MoveCanvasAction=function(_super){function MoveCanvasAction(mouseX,mouseY,diagramModel){var _this=_super.call(this,mouseX,mouseY)||this;return _this.initialOffsetX=diagramModel.getOffsetX().getValue(),_this.initialOffsetY=diagramModel.getOffsetY().getValue(),_this}return tslib_es6.c(MoveCanvasAction,_super),MoveCanvasAction}(BaseAction),diagram_component_NgxDiagramComponent=(function(_super){function SelectingAction(mouseX,mouseY){var _this=_super.call(this,mouseX,mouseY)||this;return _this.mouseX2=mouseX,_this.mouseY2=mouseY,_this}tslib_es6.c(SelectingAction,_super),SelectingAction.prototype.getBoxDimensions=function(){return{left:this.mouseX2>this.mouseX?this.mouseX:this.mouseX2,top:this.mouseY2>this.mouseY?this.mouseY:this.mouseY2,width:Math.abs(this.mouseX2-this.mouseX),height:Math.abs(this.mouseY2-this.mouseY),right:this.mouseX2<this.mouseX?this.mouseX:this.mouseX2,bottom:this.mouseY2<this.mouseY?this.mouseY:this.mouseY2}},SelectingAction.prototype.containsElement=function(x,y,diagramModel){var z=diagramModel.getZoomLevel().getValue()/100,dimensions=this.getBoxDimensions();return x*z+diagramModel.getOffsetX().getValue()>dimensions.left&&x*z+diagramModel.getOffsetX().getValue()<dimensions.right&&y*z+diagramModel.getOffsetY().getValue()>dimensions.top&&y*z+diagramModel.getOffsetY().getValue()<dimensions.bottom}}(BaseAction),function(){function NgxDiagramComponent(renderer){var _this=this;this.renderer=renderer,this.allowCanvasZoon=!0,this.allowCanvasTranslation=!0,this.inverseZoom=!0,this.actionStartedFiring=new core.EventEmitter,this.actionStillFiring=new core.EventEmitter,this.actionStoppedFiring=new core.EventEmitter,this.action$=new BehaviorSubject.a(null),this.mouseUpListener=function(){},this.mouseMoveListener=function(){},this.onMouseUp=function(event){_this.mouseUpListener(),_this.mouseMoveListener()},this.onMouseMove=function(event){var action=_this.action$.getValue();action instanceof move_canvas_action_MoveCanvasAction&&_this.allowCanvasTranslation&&(_this.model.setOffset(action.initialOffsetX+(event.clientX-action.mouseX),action.initialOffsetY+(event.clientY-action.mouseY)),_this.fireAction())}}var _a,_b,_c,_d,_e,_f,_g;return NgxDiagramComponent.prototype.ngOnInit=function(){var _this=this;this.model&&(this.nodes$=this.model.selectNodes(),this.links$=this.model.selectLinks(),this.offsetX$=this.model.getOffsetX().pipe(Object(share.a)()),this.offsetY$=this.model.getOffsetY().pipe(Object(share.a)()),this.zoomLevel$=this.model.getZoomLevel().pipe(Object(share.a)()),this.nodes$.subscribe(function(nodes){Object.entries(nodes).forEach(function(_a){_a[0];var value=_a[1];value.isPainted().getValue()||(_this.model.getDiagramEngine().generateWidgetForNode(value,_this.nodesLayer),value.setPainted(!0))})}))},NgxDiagramComponent.prototype.fireAction=function(){this.action$.getValue()&&this.actionStillFiring.emit(this.action$.getValue())},NgxDiagramComponent.prototype.stopFiringAction=function(shouldSkipEvent){shouldSkipEvent||this.actionStoppedFiring.emit(this.action$.getValue()),this.action$.next(null)},NgxDiagramComponent.prototype.startFiringAction=function(action){this.action$.next(action),this.actionStartedFiring.emit(action)},NgxDiagramComponent.prototype.getMouseElement=function(event){return null},NgxDiagramComponent.prototype.onMouseDown=function(event){3!==event.button&&(null===this.getMouseElement(event)&&(event.shiftKey||this.startFiringAction(new move_canvas_action_MoveCanvasAction(event.clientX,event.clientY,this.model))),this.mouseMoveListener=this.renderer.listen(document,"mousemove",this.onMouseMove),this.mouseUpListener=this.renderer.listen(document,"mouseup",this.onMouseUp))},NgxDiagramComponent.prototype.onMouseWheel=function(event){if(this.allowCanvasZoon){event.preventDefault(),event.stopPropagation();var currentZoomLevel=this.model.getZoomLevel().getValue(),oldZoomFactor=currentZoomLevel/100,scrollDelta=this.inverseZoom?-event.deltaY:event.deltaY;event.ctrlKey&&scrollDelta%1!=0?scrollDelta/=3:scrollDelta/=60,currentZoomLevel+scrollDelta>10&&this.model.setZoomLevel(currentZoomLevel+scrollDelta);var zoomFactor=this.model.getZoomLevel().getValue()/100,boundingRect=event.currentTarget.getBoundingClientRect(),clientWidth=boundingRect.width,clientHeight=boundingRect.height,widthDiff=clientWidth*zoomFactor-clientWidth*oldZoomFactor,heightDiff=clientHeight*zoomFactor-clientHeight*oldZoomFactor,clientX=event.clientX-boundingRect.left,clientY=event.clientY-boundingRect.top,xFactor=(clientX-this.model.getOffsetX().getValue())/oldZoomFactor/clientWidth,yFactor=(clientY-this.model.getOffsetY().getValue())/oldZoomFactor/clientHeight;this.model.setOffset(this.model.getOffsetX().getValue()-widthDiff*xFactor,this.model.getOffsetY().getValue()-heightDiff*yFactor)}},tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type","function"==typeof(_a=void 0!==diagram_model_DiagramModel&&diagram_model_DiagramModel)?_a:Object)],NgxDiagramComponent.prototype,"model",void 0),tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type",Object)],NgxDiagramComponent.prototype,"allowCanvasZoon",void 0),tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type",Object)],NgxDiagramComponent.prototype,"allowCanvasTranslation",void 0),tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type",Object)],NgxDiagramComponent.prototype,"inverseZoom",void 0),tslib_es6.b([Object(core.Output)(),tslib_es6.d("design:type","function"==typeof(_b=void 0!==core.EventEmitter&&core.EventEmitter)?_b:Object)],NgxDiagramComponent.prototype,"actionStartedFiring",void 0),tslib_es6.b([Object(core.Output)(),tslib_es6.d("design:type","function"==typeof(_c=void 0!==core.EventEmitter&&core.EventEmitter)?_c:Object)],NgxDiagramComponent.prototype,"actionStillFiring",void 0),tslib_es6.b([Object(core.Output)(),tslib_es6.d("design:type","function"==typeof(_d=void 0!==core.EventEmitter&&core.EventEmitter)?_d:Object)],NgxDiagramComponent.prototype,"actionStoppedFiring",void 0),tslib_es6.b([Object(core.ViewChild)("nodesLayer",{read:core.ViewContainerRef}),tslib_es6.d("design:type","function"==typeof(_e=void 0!==core.ViewContainerRef&&core.ViewContainerRef)?_e:Object)],NgxDiagramComponent.prototype,"nodesLayer",void 0),tslib_es6.b([Object(core.ViewChild)("linksLayer",{read:core.ViewContainerRef}),tslib_es6.d("design:type","function"==typeof(_f=void 0!==core.ViewContainerRef&&core.ViewContainerRef)?_f:Object)],NgxDiagramComponent.prototype,"linksLayer",void 0),NgxDiagramComponent=tslib_es6.b([Object(core.Component)({selector:"ngdx-diagram",template:__webpack_require__(378),styles:[__webpack_require__(379)]}),tslib_es6.d("design:paramtypes",["function"==typeof(_g=void 0!==core.Renderer2&&core.Renderer2)?_g:Object])],NgxDiagramComponent)}()),node_model=__webpack_require__(59),node_component_DefaultNodeComponent=function(_super){function DefaultNodeComponent(){return _super.call(this,"default")||this}var _a;return tslib_es6.c(DefaultNodeComponent,_super),DefaultNodeComponent.prototype.ngOnInit=function(){},tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type","function"==typeof(_a=void 0!==node_model.a&&node_model.a)?_a:Object)],DefaultNodeComponent.prototype,"node",void 0),DefaultNodeComponent=tslib_es6.b([Object(core.Component)({selector:"ngdx-default-node",template:__webpack_require__(380),styles:[__webpack_require__(381)]}),tslib_es6.d("design:paramtypes",[])],DefaultNodeComponent)}(node_model.a),default_node_factory_DefaultNodeFactory=function(_super){function DefaultNodeFactory(resolver){var _this=_super.call(this,"default")||this;return _this.resolver=resolver,_this}return tslib_es6.c(DefaultNodeFactory,_super),DefaultNodeFactory.prototype.generateWidget=function(diagramEngine,node,nodesHost){var componentRef=nodesHost.createComponent(this.getRecipe());return Object.entries(node).forEach(function(_a){var key=_a[0],value=_a[1];componentRef.instance[key]=value}),componentRef.instance.diagramEngine=diagramEngine,componentRef},DefaultNodeFactory.prototype.getRecipe=function(){return this.resolver.resolveComponentFactory(node_component_DefaultNodeComponent)},DefaultNodeFactory}(function(_super){function AbstractNodeFactory(){return null!==_super&&_super.apply(this,arguments)||this}return tslib_es6.c(AbstractNodeFactory,_super),AbstractNodeFactory}(function(){function AbstractFactory(name){this.type=name}return AbstractFactory.prototype.getType=function(){return this.type},AbstractFactory}())),engine_service_DiagramEngine=function(){function DiagramEngine(resolver){this.resolver=resolver,this.nodeFactories={},this.linkFactories={},this.portFactories={},this.labelFactories={}}var _a;return DiagramEngine.prototype.createDiagram=function(){return this.diagramModel=new diagram_model_DiagramModel(this),this.diagramModel},DiagramEngine.prototype.registerDefaultFactories=function(){this.registerNodeFactory(new default_node_factory_DefaultNodeFactory(this.resolver))},DiagramEngine.prototype.registerNodeFactory=function(nodeFactory){this.nodeFactories[nodeFactory.getType()]=nodeFactory},DiagramEngine.prototype.getNodeFactories=function(){return this.nodeFactories},DiagramEngine.prototype.getNodeFactory=function(type){if(this.nodeFactories[type])return this.nodeFactories[type];throw new Error("cannot find factory for node of type: ["+type+"]")},DiagramEngine.prototype.getFactoryForNode=function(node){return this.getNodeFactory(node.getType())},DiagramEngine.prototype.generateWidgetForNode=function(node,nodesHost){var nodeFactory=this.getFactoryForNode(node);if(!nodeFactory)throw new Error("Cannot find widget factory for node: "+node.getType());return nodeFactory.generateWidget(this,node,nodesHost)},DiagramEngine=tslib_es6.b([Object(core.Injectable)({providedIn:"root"}),tslib_es6.d("design:paramtypes",["function"==typeof(_a=void 0!==core.ComponentFactoryResolver&&core.ComponentFactoryResolver)?_a:Object])],DiagramEngine)}(),common=__webpack_require__(9),port_model=__webpack_require__(60),port_component_PortComponent=function(_super){function PortComponent(){return _super.call(this,"port","default")||this}var _a;return tslib_es6.c(PortComponent,_super),PortComponent.prototype.ngOnInit=function(){},tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type","function"==typeof(_a=void 0!==port_model.a&&port_model.a)?_a:Object)],PortComponent.prototype,"port",void 0),tslib_es6.b([Object(core.Input)(),tslib_es6.d("design:type",String)],PortComponent.prototype,"key",void 0),PortComponent=tslib_es6.b([Object(core.Component)({selector:"ngdx-default-port",template:__webpack_require__(382),styles:[__webpack_require__(383)]}),tslib_es6.d("design:paramtypes",[])],PortComponent)}(port_model.a),ngx_diagrams_module_NgxDiagramsModule=function(){function NgxDiagramsModule(){}return NgxDiagramsModule=tslib_es6.b([Object(core.NgModule)({declarations:[diagram_component_NgxDiagramComponent,node_component_DefaultNodeComponent,port_component_PortComponent],imports:[common.a],providers:[],exports:[diagram_component_NgxDiagramComponent]})],NgxDiagramsModule)}();__webpack_require__.d(__webpack_exports__,"a",function(){return engine_service_DiagramEngine}),__webpack_require__.d(__webpack_exports__,"b",function(){return ngx_diagrams_module_NgxDiagramsModule})}},[[197,1,2]]]);
//# sourceMappingURL=main.261efea8de569158c0a9.bundle.js.map