(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2356:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  padding: 18px 30px 18px 30px;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2360:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  .btn-group button {\n    line-height: 28px;\n  }\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2366:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),i=a(n(2)),o=n(7),l=n(13),u=n(9),d=n(10),s=function(e){var t=e.headerId,n=e.isOpen,a=e.onClosed,i=e.onSubmit,s=e.onToggle,f=e.renderForm,c=e.subHeaderContent,p=e.type;return r.default.createElement(o.Modal,{isOpen:n,onClosed:a,onToggle:s},r.default.createElement(o.HeaderModal,null,r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,{style:{textTransform:"none"}},r.default.createElement(d.AttributeIcon,{type:"timestamp"===p?"date":["decimal","float","integer","biginter"].includes(p)?"number":p,style:{margin:"auto 20px auto 0"}}),r.default.createElement(l.FormattedMessage,{id:t}))),r.default.createElement("section",null,r.default.createElement(o.HeaderModalTitle,null,r.default.createElement("span",null,(0,u.upperFirst)(c)),r.default.createElement("hr",null)))),r.default.createElement("form",{onSubmit:i},r.default.createElement(o.ModalForm,null,r.default.createElement(o.ModalBody,null,f())),r.default.createElement(o.ModalFooter,null,r.default.createElement("section",null,r.default.createElement(d.Button,{onClick:s,color:"cancel"},r.default.createElement(l.FormattedMessage,{id:"app.components.Button.cancel"})),r.default.createElement(d.Button,{type:"submit",color:"success"},r.default.createElement(l.FormattedMessage,{id:"form.button.done"}))))))};s.defaultProps={isOpen:!1,onClosed:function(){},onSubmit:function(){},onToggle:function(){},renderForm:function(){},subHeaderContent:"",type:""},s.propTypes={headerId:i.default.string.isRequired,isOpen:i.default.bool,onClosed:i.default.func,onSubmit:i.default.func,onToggle:i.default.func,renderForm:i.default.func,subHeaderContent:i.default.string,type:i.default.string};var f=s;t.default=f},2367:function(e,t,n){"use strict";var a=n(5),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(29)),o=r(n(30)),l=r(n(6)),u=r(n(23)),d=r(n(15)),s=a(n(1)),f=r(n(2)),c=n(9),p=n(24),m=n(13),g=n(38),b=n(7),v=r(n(105)),E=r(n(2368)),y=r(n(2356)),x=r(n(2370)),h=r(n(2372)),D=function(e){var t=e.children,n=e.history.goBack,a=e.displayedFields,r=e.inputs,f=e.initialData,p=e.isEditSettings,D=e.isLoading,S=e.modifiedData,I=e.onChange,_=e.onConfirmReset,C=e.onConfirmSubmit,M=e.name,T=(0,b.useGlobalContext)(),w=T.emitEvent,F=T.formatMessage,O=(0,s.useState)(!1),k=(0,d.default)(O,2),B=k[0],L=k[1],R=(0,s.useState)(!1),P=(0,d.default)(R,2),A=P[0],j=P[1],N=(0,s.useMemo)((function(){return(0,c.get)(S,["schema","attributes"],{})}),[S]),q=function(){return L((function(e){return!e}))},U=function(){return j((function(e){return!e}))},H={actions:[{color:"cancel",onClick:q,label:F({id:"app.components.Button.reset"}),type:"button",disabled:(0,c.isEqual)(S,f),style:{fontWeight:600,paddingLeft:15,paddingRight:15}},{color:"success",label:F({id:"".concat(v.default,".containers.Edit.submit")}),type:"submit",disabled:(0,c.isEqual)(S,f),style:{minWidth:150,fontWeight:600}}],title:{label:F({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.title")},{name:(0,c.upperFirst)(M)})},content:F({id:"".concat(v.default,".components.SettingsViewWrapper.pluginHeader.description.").concat(p?"edit":"list","-settings")})},W=function(e){return"settings.defaultSortBy"===e.name?["id"].concat((0,u.default)(a.filter((function(e){return"media"!==(0,c.get)(N,[e,"type"],"")&&"id"!==e&&"richtext"!==(0,c.get)(N,[e,"type"],"")})))):"settings.mainField"===e.name?Object.keys(N).filter((function(e){var t=(0,c.get)(N,[e,"type"],"");return!["json","text","relation","component","boolean","date","media","richtext"].includes(t)&&!!t})):e.options};return D?s.default.createElement(b.LoadingIndicatorPage,null):s.default.createElement(s.default.Fragment,null,s.default.createElement(b.BackHeader,{onClick:n}),s.default.createElement(y.default,{className:"container-fluid"},s.default.createElement("form",{onSubmit:function(e){e.preventDefault(),U(),w("willSaveContentTypeLayout")}},s.default.createElement(g.Header,H),s.default.createElement("div",{className:"row",style:{paddingTop:"3px"}},s.default.createElement(E.default,{style:{marginBottom:"13px",paddingBottom:"30px",paddingTop:"24px"}},s.default.createElement(x.default,{isSettings:!0}),s.default.createElement("div",{className:"row"},r.map((function(e){return s.default.createElement(m.FormattedMessage,{key:e.name,id:e.label.id},(function(t){return s.default.createElement("div",{className:e.customBootstrapClass},s.default.createElement(m.FormattedMessage,{id:(0,c.get)(e,"description.id","app.utils.defaultMessage")},(function(n){return s.default.createElement(g.Inputs,(0,l.default)({},e,{description:n,label:" "===t?null:t,onChange:I,options:W(e),value:(0,c.get)(S,e.name,"")}))})))}))})),s.default.createElement("div",{className:"col-12"},s.default.createElement(h.default,{style:{marginBottom:20}}))),s.default.createElement(x.default,null),t)),s.default.createElement(b.PopUpWarning,{isOpen:B,toggleModal:q,content:{message:"".concat(v.default,".popUpWarning.warning.cancelAllSettings")},popUpWarningType:"danger",onConfirm:function(){_(),q()}}),s.default.createElement(b.PopUpWarning,{isOpen:A,toggleModal:U,content:{message:"".concat(v.default,".popUpWarning.warning.updateAllSettings")},popUpWarningType:"danger",onConfirm:(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:U();case 3:case"end":return e.stop()}}),e)})))}))))};D.defaultProps={displayedFields:[],inputs:[],initialData:{},isEditSettings:!1,modifiedData:{},name:"",onConfirmReset:function(){},onConfirmSubmit:function(){var e=(0,o.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onSubmit:function(){},pluginHeaderProps:{actions:[],description:{id:"app.utils.defaultMessage"},title:{id:"app.utils.defaultMessage",values:{}}}},D.propTypes={children:f.default.node.isRequired,displayedFields:f.default.array,history:f.default.shape({goBack:f.default.func.isRequired}).isRequired,initialData:f.default.object,inputs:f.default.array,isEditSettings:f.default.bool,isLoading:f.default.bool.isRequired,modifiedData:f.default.object,name:f.default.string,onChange:f.default.func.isRequired,onConfirmReset:f.default.func,onConfirmSubmit:f.default.func,onSubmit:f.default.func,pluginHeaderProps:f.default.shape({actions:f.default.array,description:f.default.shape({id:f.default.string}),title:f.default.shape({id:f.default.string,values:f.default.object})})};var S=(0,p.withRouter)(D);t.default=S},2368:function(e,t,n){"use strict";var a=n(0),r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1)),o=a(n(2)),l=n(13),u=n(2369),d=function(e){return i.default.createElement("p",null,e)},s=function(e){var t=e.children,n=e.description,a=e.style,r=e.title;return i.default.createElement("div",{className:"col-md-12"},i.default.createElement(u.Wrapper,{style:a},i.default.createElement(u.Sub,null,!!r&&i.default.createElement("p",null,i.default.createElement(l.FormattedMessage,{id:r})),!!n&&i.default.createElement(l.FormattedMessage,{id:n},d)),t))};s.defaultProps={children:null,description:null,style:{},title:null},s.propTypes={children:o.default.any,description:o.default.string,style:o.default.object,title:o.default.string};var f=(0,i.memo)(s);t.default=f},2369:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Sub=t.Wrapper=void 0;var r=a(n(4)),i=a(n(3));function o(){var e=(0,r.default)(["\n  padding-top: 0px;\n  line-height: 18px;\n  > p:first-child {\n    margin-bottom: 1px;\n    font-weight: 700;\n    color: #333740;\n    font-size: 1.8rem;\n  }\n  > p {\n    color: #787e8f;\n    font-size: 13px;\n  }\n"]);return o=function(){return e},e}function l(){var e=(0,r.default)(["\n  margin-bottom: 35px;\n  background: #ffffff;\n  padding: 22px 28px 18px;\n  padding-bottom: 13px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  -webkit-font-smoothing: antialiased;\n"]);return l=function(){return e},e}var u=i.default.div(l());t.Wrapper=u;var d=i.default.div(o());t.Sub=d},2370:function(e,t,n){"use strict";var a=n(0),r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1)),o=a(n(2)),l=n(13),u=a(n(105)),d=a(n(2371)),s=function(e){var t=e.isSettings?"settings":"view",n="".concat(u.default,".containers.SettingPage.").concat(t);return i.default.createElement("div",{style:{marginBottom:"18px"}},i.default.createElement(l.FormattedMessage,{id:n},(function(e){return i.default.createElement(d.default,null,e)})))};s.propTypes={isSettings:o.default.bool},s.defaultProps={isSettings:!1};var f=(0,i.memo)(s);t.default=f},2371:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  color: #787e8f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.77px;\n  text-transform: uppercase;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2372:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  margin-top: 17px;\n  margin-bottom: 24px;\n  border-top: 1px solid #f6f6f6;\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2574:function(e,t,n){"use strict";var a=n(5),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(29)),o=r(n(30)),l=r(n(15)),u=a(n(1)),d=r(n(2)),s=n(9),f=n(7),c=n(13),p=n(117),m=n(39),g=n(38),b=r(n(105)),v=n(748),E=r(n(2366)),y=r(n(2367)),x=r(n(2360)),h=r(n(751)),D=r(n(2575)),S=r(n(2576)),I=r(n(2577)),_=r(n(2578)),C=r(n(2579)),M=a(n(2580)),T=r(n(2581)),w=function(e){var t=e.deleteLayout,n=e.slug,a=(0,u.useReducer)(M.default,M.initialState),r=(0,l.default)(a,2),d=r[0],w=r[1],F=(0,u.useState)(!1),O=(0,l.default)(F,2),k=O[0],B=O[1],L=(0,u.useState)(!1),R=(0,l.default)(L,2),P=R[0],A=R[1],j=(0,u.useState)(!1),N=(0,l.default)(j,2),q=N[0],U=N[1],H=(0,f.useGlobalContext)().emitEvent,W=function(){return A((function(e){return!e}))},G=d.toJS(),J=G.labelForm,z=G.labelToEdit,V=G.initialData,K=G.modifiedData,Q=G.isLoading,X=new AbortController,Y=X.signal,Z=(0,u.useMemo)((function(){return(0,s.get)(K,["schema","attributes"],{})}),[K]);(0,u.useEffect)((function(){return function(){var e=(0,o.default)(i.default.mark((function e(){var t,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.request)((0,v.getRequestUrl)("content-types/".concat(n)),{method:"GET",signal:Y});case 3:t=e.sent,a=t.data,w({type:"GET_DATA_SUCCEEDED",data:a.contentType}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),20!==e.t0.code&&strapi.notification.toggle({type:"warning",message:{id:"notification.error"}});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){X.abort()}}),[n]);var $=(0,u.useMemo)((function(){return(0,s.get)(K,["schema","info","name"],"")}),[K]),ee=(0,u.useMemo)((function(){return(0,s.get)(K,["layouts","list"],[])}),[K]),te=(0,u.useMemo)((function(){var e=(0,s.get)(K,["metadatas"],{});return Object.keys(e).filter((function(e){var t=(0,s.get)(Z,[e,"type"],"");return!["json","component","richtext","relation"].includes(t)&&!!t})).filter((function(e){return!ee.includes(e)}))}),[ee,Z,K]),ne=function(e){w({type:"SET_LABEL_TO_EDIT",labelToEdit:e}),W()},ae=function(e){var t=e.target,n=t.name,a=t.value;w({type:"ON_CHANGE_LABEL_METAS",name:n,value:a})},re=function(){var e=(0,o.default)(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,delete(a=(0,s.cloneDeep)(K)).apiID,delete a.schema,delete a.uid,e.next=7,(0,f.request)((0,v.getRequestUrl)("content-types/".concat(n)),{method:"PUT",body:a,signal:Y});case 7:w({type:"SUBMIT_SUCCEEDED"}),t(n),H("didEditListSettings"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),strapi.notification.toggle({type:"warning",message:{id:"notification.error"}});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),ie=function(e,t){w({type:"MOVE_FIELD",originalIndex:e,atIndex:t})},oe=(0,p.useDrop)({accept:v.ItemTypes.FIELD}),le=(0,l.default)(oe,2)[1];return u.default.createElement(h.default,{isDraggingSibling:q,setIsDraggingSibling:U},u.default.createElement(y.default,{displayedFields:ee,inputs:T.default,isLoading:Q,initialData:V,modifiedData:K,onChange:function(e){var t=e.target,n=t.name,a=t.value;w({type:"ON_CHANGE",keys:n,value:"settings.pageSize"===n?parseInt(a,10):a})},onConfirmReset:function(){w({type:"ON_RESET"})},onConfirmSubmit:re,name:$},u.default.createElement(_.default,null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-12"},u.default.createElement(x.default,{ref:le,style:{display:"flex",width:"100%"}},ee.map((function(e,t){var n=(0,s.get)(K,["metadatas",e,"list","label"],"");return u.default.createElement(D.default,{count:ee.length,key:e,index:t,isDraggingSibling:q,label:n,move:ie,name:e,onClick:ne,onRemove:function(e){e.stopPropagation(),1===ee.length?strapi.notification.toggle({type:"info",message:{id:"".concat(b.default,".notification.info.minimumFields")}}):w({type:"REMOVE_FIELD",index:t})},selectedItem:z,setIsDraggingSibling:U})}))))),u.default.createElement(I.default,{isOpen:k,toggle:function(){te.length>0&&B((function(e){return!e}))},direction:"down",style:{position:"absolute",top:11,right:10}},u.default.createElement(C.default,{disabled:0===te.length}),u.default.createElement(S.default,null,te.map((function(e){return u.default.createElement(m.DropdownItem,{key:e,onClick:function(){w({type:"ADD_FIELD",item:e})}},e)})))))),u.default.createElement(E.default,{headerId:"".concat(b.default,".containers.ListSettingsView.modal-form.edit-label"),isOpen:P,onClosed:function(){w({type:"UNSET_LABEL_TO_EDIT"})},onSubmit:function(e){e.preventDefault(),W(),w({type:"SUBMIT_LABEL_FORM"})},onToggle:W,renderForm:function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label")},(function(e){return u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.label.inputDescription")},(function(t){return u.default.createElement(g.Inputs,{description:t,label:e,type:"text",name:"label",onBlur:function(){},value:(0,s.get)(J,"label",""),onChange:ae})}))}))),"media"!==(0,s.get)(Z,[z,"type"],"text")&&u.default.createElement("div",{className:"col-6",style:{marginBottom:4}},u.default.createElement(c.FormattedMessage,{id:"".concat(b.default,".form.Input.sort.field")},(function(e){return u.default.createElement(g.Inputs,{label:e,type:"bool",name:"sortable",value:(0,s.get)(J,"sortable",!1),onChange:ae})}))))},subHeaderContent:z,type:(0,s.get)(Z,[z,"type"],"text")}))};w.propTypes={deleteLayout:d.default.func.isRequired,location:d.default.shape({search:d.default.string.isRequired}).isRequired,slug:d.default.string.isRequired};var F=w;t.default=F},2575:function(e,t,n){"use strict";var a=n(5),r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(15)),o=a(n(1)),l=r(n(2)),u=n(117),d=n(268),s=r(n(385)),f=r(n(754)),c=r(n(750)),p=function(e){var t=e.count,n=e.index,a=e.label,r=e.move,l=e.name,p=e.onClick,m=e.onRemove,g=e.selectedItem,b=(0,o.useRef)(null),v=(0,c.default)().setIsDraggingSibling,E=(0,u.useDrop)({accept:s.default.FIELD,hover:function(e){if(b.current){var t=e.index,a=n;t!==a&&(r(t,a),e.index=a)}}}),y=(0,i.default)(E,2)[1],x=(0,u.useDrag)({begin:function(){v(!0)},end:function(){v(!1)},item:{type:s.default.FIELD,id:l,name:l,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),h=(0,i.default)(x,3),D=h[0].isDragging,S=h[1],I=h[2];return(0,o.useEffect)((function(){I((0,d.getEmptyImage)(),{captureDraggingState:!1})}),[I]),S(y(b)),o.default.createElement(f.default,{count:t,ref:b,isDragging:D,label:a,name:l,onClick:p,onRemove:m,selectedItem:g})};p.defaultProps={index:0,label:"",selectedItem:""},p.propTypes={count:l.default.number.isRequired,index:l.default.number,label:l.default.string,move:l.default.func.isRequired,name:l.default.string.isRequired,onClick:l.default.func.isRequired,onRemove:l.default.func.isRequired,selectedItem:l.default.string};var m=p;t.default=m},2576:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(39);function l(){var e=(0,r.default)(["\n  max-height: 180px;\n  min-width: 230px;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-color: #e3e9f3 !important;\n  border-top-color: #aed4fb !important;\n  box-shadow: 0 2px 3px rgba(227, 233, 245, 0.5);\n  transform: translate3d(-199px, 30px, 0px) !important;\n\n  overflow: scroll;\n\n  button {\n    height: 30px;\n    padding-left: 10px !important;\n    line-height: 26px;\n    cursor: pointer;\n    font-size: 13px !important;\n    &:focus,\n    &:active,\n    &:hover,\n    &:hover {\n      background-color: #fafafb !important;\n      color: #333740;\n      outline: 0;\n    }\n    div {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"]);return l=function(){return e},e}var u=(0,i.default)(o.DropdownMenu)(l());t.default=u},2577:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(39);function l(){var e=(0,r.default)(["\n  display: table-cell;\n"]);return l=function(){return e},e}var u=(0,i.default)(o.ButtonDropdown)(l());t.default=u},2578:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4));function i(){var e=(0,r.default)(["\n  position: relative;\n  padding: 11px 40px 11px 11px;\n  margin-top: 19px;\n  margin-bottom: 10px;\n  border: 1px dashed #e3e9f3;\n  border-radius: 2px;\n  > div,\n  > div > div {\n    margin: 0;\n    padding: 0;\n  }\n  > div > div {\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n"]);return i=function(){return e},e}var o=a(n(3)).default.div(i());t.default=o},2579:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(4)),i=a(n(3)),o=n(39);function l(){var e=(0,r.default)(["\n  width: 30px;\n  height: 30px;\n  background: #fafafb;\n  border: 1px solid #e3e9f3;\n  border-radius: 2px;\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n  color: #b3b5b9;\n\n  &:disabled {\n    cursor: not-allowed !important;\n\n    background: #fafafb;\n    border: 1px solid #e3e9f3;\n    border-radius: 2px;\n    color: #b3b5b9;\n  }\n\n  &:before {\n    ","\n  }\n\n  &:hover,\n  :active,\n  :focus {\n    ","\n\n    &:before {\n      ","\n    }\n  }\n"]);return l=function(){return e},e}var u="\n  content: '\f067';\n  font-family: FontAwesome;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n",d=(0,i.default)(o.DropdownToggle)(l(),u,"\n  background-color: #e6f0fb !important;\n  border: 1px solid #aed4fb !important;\n  color: #007eff !important;\n",u);t.default=d},2580:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var r=a(n(23)),i=n(50),o=(0,i.fromJS)({labelForm:{},labelToEdit:"",initialData:{},isLoading:!0,modifiedData:{}});t.initialState=o;var l=function(e,t){switch(t.type){case"ADD_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.push(t.item)}));case"GET_DATA_SUCCEEDED":return e.update("initialData",(function(){return(0,i.fromJS)(t.data)})).update("isLoading",(function(){return!1})).update("modifiedData",(function(){return(0,i.fromJS)(t.data)}));case"MOVE_FIELD":return e.updateIn(["modifiedData","layouts","list"],(function(e){return e.delete(t.originalIndex).insert(t.atIndex,e.get(t.originalIndex))}));case"ON_CHANGE":return e.updateIn(["modifiedData"].concat((0,r.default)(t.keys.split("."))),(function(){return t.value}));case"ON_CHANGE_LABEL_METAS":return e.updateIn(["labelForm",t.name],(function(){return t.value}));case"ON_RESET":return e.update("modifiedData",(function(){return e.get("initialData")}));case"REMOVE_FIELD":var n=["modifiedData","settings","defaultSortBy"],a=e.getIn(n),o=["modifiedData","layouts","list",t.index],l=e.getIn(o),u=e.getIn(["modifiedData","layouts","list",1]),d=e.getIn(["modifiedData","schema","attributes",u,"type"]),s="media"!==d&&"richtext"!==d?u:"id";return e.removeIn(["modifiedData","layouts","list",t.index]).updateIn(n,(function(){return l===a?s:a}));case"SET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return t.labelToEdit})).updateIn(["labelForm","label"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","label"])})).updateIn(["labelForm","sortable"],(function(){return e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","sortable"])}));case"UNSET_LABEL_TO_EDIT":return e.update("labelToEdit",(function(){return""})).update("labelForm",(function(){return(0,i.fromJS)({})}));case"SUBMIT_LABEL_FORM":var f=["modifiedData","metadatas",e.get("labelToEdit"),"list"];return e.updateIn([].concat(f,["label"]),(function(){return e.getIn(["labelForm","label"])})).updateIn([].concat(f,["sortable"]),(function(){return e.getIn(["labelForm","sortable"])}));case"SUBMIT_SUCCEEDED":return e.update("initialData",(function(){return e.get("modifiedData")}));default:return e}};t.default=l},2581:function(e){e.exports=JSON.parse('[{"label":{"id":"content-manager.form.Input.search"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.searchable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.filters"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.filterable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.bulkActions"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.bulkable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.pageEntries"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"description":{"id":"content-manager.form.Input.pageEntries.inputDescription"},"name":"settings.pageSize","options":[10,20,50,100],"type":"select","validations":{}},{"label":{"id":"content-manager.form.Input.defaultSort"},"customBootstrapClass":"col-md-4 ml-md-auto","didCheckErrors":false,"errors":[],"style":{"marginRight":"-20px"},"name":"settings.defaultSortBy","options":["id"],"type":"select","validations":{}},{"label":{"id":"app.utils.defaultMessage"},"customBootstrapClass":"col-md-2","didCheckErrors":false,"errors":[],"name":"settings.defaultSortOrder","options":["ASC","DESC"],"type":"select","validations":{}}]')}}]);