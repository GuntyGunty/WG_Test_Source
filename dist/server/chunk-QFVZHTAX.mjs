import './polyfills.server.mjs';
import{D,F as y,G as z,H as T,I as C,J as A,K as R,N,T as j,a as b,b as v,c,d as M,e as O,f as P,g as a,h as x,i as d,j as o,k as i,l as p,m as S,n as w,o as F,p as I,q as u,r as E,s,t as g,u as L,v as m,w as _}from"./chunk-ZOZDBEBX.mjs";var U=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-skill-property"]],inputs:{skill:"skill"},standalone:!0,features:[m],decls:20,vars:0,consts:[[1,"skill-property"],[1,"skill-property_name"],[1,"skill-property_fullness"],[1,"skill-property_wrap"],[1,"skill-property_description"],[1,"skill-property_divider"],[1,"skill-property_percentage"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"span",1),p(2,"span",2),s(3," Mystery 1/4"),i(),o(4,"div",3)(5,"span",4),s(6,"Engine repair time"),i(),p(7,"span",5),o(8,"span",6),s(9,"-2.5%"),i()()(),o(10,"div",0)(11,"span",1),p(12,"span",2),s(13," Upgrade on legendary rank 2"),i(),o(14,"div",3)(15,"span",4),s(16,"Engine repair time"),i(),p(17,"span",5),o(18,"span",6),s(19,"-5%"),i()()())},styles:['.skill-property[_ngcontent-%COMP%]{padding:10px;transition:.3s;background-color:#f000;opacity:1;cursor:pointer}.skill-property[_ngcontent-%COMP%]:hover{background-color:#080b14;opacity:.8}.skill-property_name[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px}.skill-property_fullness[_ngcontent-%COMP%]{position:relative;width:16px;height:16px;background-image:linear-gradient(0deg,#080b14 50%,#f000 50%),linear-gradient(90deg,#080b14 50%,#dedede 50%);border-radius:100%;margin-right:10px}.skill-property_fullness[_ngcontent-%COMP%]:before{content:"";top:50%;left:50%;transform:translate(-50%,-50%);width:22px;height:22px;position:absolute;border-radius:100%;border:1px solid #dedede}.skill-property_wrap[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}.skill-property_percentage[_ngcontent-%COMP%]{color:#3fc5a0;margin-left:5px}.skill-property_description[_ngcontent-%COMP%]{position:relative;text-wrap:nowrap;margin-right:5px}.skill-property_divider[_ngcontent-%COMP%]{display:flex;flex-grow:1;max-width:calc(100% - 12px);height:1px;background-color:#dedede;opacity:.2}.skill-property[_ngcontent-%COMP%]:nth-child(2)   .skill-property_fullness[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#080b14 50%,#f000 50%),linear-gradient(90deg,#080b14 50%,#dedede 50%)}']});let t=e;return t})();var Q=t=>({unselected:t}),V=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-skill-modal"]],inputs:{skill:"skill"},standalone:!0,features:[m],decls:15,vars:10,consts:[[1,"skill-modal"],[1,"skill-modal_name"],["alt","Skill emblem for Unstoppable skill",1,"skill-modal_icon",3,"src"],[1,"skill-modal_features"],[1,"skill-modal_selection",3,"ngClass"],[1,"skill-modal_description"],[3,"skill"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),o(3,"p",3)(4,"span"),s(5),i(),o(6,"span"),s(7),i(),o(8,"span"),s(9),i()()(),o(10,"span",4),s(11),i(),o(12,"p",5),s(13),i(),p(14,"app-skill-property",6),i()),n&2&&(a(2),E("src",r.skill.img,P),a(3),g(r.skill.name),a(2),g(r.skill.category),a(2),g(r.skill.grade),a(),d("ngClass",_(8,Q,!r.skill.selection)),a(),g(r.skill.selection?"Selected":"Unselected"),a(2),g(r.skill.description),a(),d("skill",r.skill))},dependencies:[C,y,U],styles:['.skill-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:560px;min-height:512px;background-color:#080b14;background-image:url(/../../assets/img/img_bg.png);padding:12px 10px}.skill-modal_name[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.skill-modal_icon[_ngcontent-%COMP%]{max-width:60px;margin-right:15px}.skill-modal_features[_ngcontent-%COMP%]{display:flex;flex-direction:column;letter-spacing:.6px;font-weight:500;font-size:16px}.skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3), .skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){color:#3fc5a0;text-transform:uppercase;font-size:14px}.skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){color:#fecb66;opacity:.6}.skill-modal_selection[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:#fecb66;background-color:#202430;text-transform:uppercase;padding:10px}.skill-modal_selection[_ngcontent-%COMP%]:before{content:"";width:16px;height:16px;display:block;background-image:url(/../../assets/img/check.png);background-size:contain;background-repeat:no-repeat;margin-right:5px}.skill-modal_selection.unselected[_ngcontent-%COMP%]{filter:grayscale(90%)}.skill-modal_selection.unselected[_ngcontent-%COMP%]:before{visibility:hidden;width:0}.skill-modal_description[_ngcontent-%COMP%]{padding:10px}']});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-skill-nav"]],inputs:{skill:"skill"},standalone:!0,features:[m],decls:2,vars:1,template:function(n,r){n&1&&(o(0,"span"),s(1),i()),n&2&&(a(),g(r.skill.name))}});let t=e;return t})();var h=(()=>{let e=class e{constructor(){this.skillsList=[{id:1,img:"/../../assets/img/img_1.png",name:"Unstoppable",category:"Survivability",grade:"Legendary Skill",selection:!0,description:"Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."},{id:2,img:"/../../assets/img/img_2.png",name:"Fearless",category:"Survivability",grade:"Legendary Skill",selection:!1,description:"Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."},{id:3,img:"/../../assets/img/img_2.png",name:"Prudent",category:"Survivability",grade:"Legendary Skill",selection:!0,description:"Reduce engine repair time. At last mastery level gain reduced mibility with disabled engine."}]}getAllSkills(){return this.skillsList}getSkillById(l){return this.skillsList.find(n=>n.id===l)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var W=t=>({selected:t});function X(t,e){if(t&1){let f=F();o(0,"li",2),I("click",function(){let n=M(f).index,r=u();return O(r.activeIndex=n)}),p(1,"app-skill-nav",3),i()}if(t&2){let f=e.$implicit,l=e.index,n=u();d("ngClass",_(2,W,l===n.activeIndex)),a(),d("skill",f)}}function Y(t,e){if(t&1&&p(0,"app-skill-modal",3),t&2){let f=u().$implicit;d("skill",f)}}function Z(t,e){if(t&1&&(S(0),x(1,Y,1,1,"app-skill-modal",4),w()),t&2){let f=e.index,l=u();a(),d("ngIf",f===l.activeIndex)}}var B=(()=>{let e=class e{constructor(){this.activeIndex=0,this.skillList=[],this.SkillService=v(h),this.filteredSkillList=[],this.skillList=this.SkillService.getAllSkills(),this.filteredSkillList=this.skillList}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-skills"]],standalone:!0,features:[L([h]),m],decls:4,vars:2,consts:[[3,"ngClass","click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"click","ngClass"],[3,"skill"],[3,"skill",4,"ngIf"]],template:function(n,r){n&1&&(o(0,"section")(1,"ul"),x(2,X,2,4,"li",0),i(),x(3,Z,2,1,"ng-container",1),i()),n&2&&(a(2),d("ngForOf",r.filteredSkillList),a(),d("ngForOf",r.filteredSkillList))},dependencies:[C,y,z,T,V,$],styles:["ul[_ngcontent-%COMP%]{display:flex;margin-bottom:15px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:15px;padding:5px 10px;background-color:#080b14;border-radius:8px;opacity:1;transition:.3s;cursor:pointer}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:.8}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{opacity:.5}"],changeDetection:0});let t=e;return t})();var H=(()=>{let e=class e{constructor(){this.title="wg-test"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:2,vars:0,consts:[[1,"main"]],template:function(n,r){n&1&&(o(0,"main",0),p(1,"app-skills"),i())},dependencies:[B],styles:['.skill-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:560px;min-height:512px;background-color:#080b14;background-image:url(/../../assets/img/img_bg.png);padding:12px 10px}.skill-modal_name[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.skill-modal_icon[_ngcontent-%COMP%]{max-width:60px;margin-right:15px}.skill-modal_features[_ngcontent-%COMP%]{display:flex;flex-direction:column;letter-spacing:.6px;font-weight:500;font-size:16px}.skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3), .skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){color:#3fc5a0;text-transform:uppercase;font-size:14px}.skill-modal_features[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){color:#fecb66;opacity:.6}.skill-modal_selection[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:#fecb66;background-color:#202430;text-transform:uppercase;padding:10px}.skill-modal_selection[_ngcontent-%COMP%]:before{content:"";width:16px;height:16px;display:block;background-image:url(/../../assets/img/check.png);background-size:contain;background-repeat:no-repeat;margin-right:5px}.skill-modal_selection.unselected[_ngcontent-%COMP%]{filter:grayscale(90%)}.skill-modal_selection.unselected[_ngcontent-%COMP%]:before{visibility:hidden;width:0}.skill-modal_description[_ngcontent-%COMP%]{padding:10px}.skill-property[_ngcontent-%COMP%]{padding:10px;transition:.3s;background-color:#f000;opacity:1;cursor:pointer}.skill-property[_ngcontent-%COMP%]:hover{background-color:#080b14;opacity:.8}.skill-property_name[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px}.skill-property_fullness[_ngcontent-%COMP%]{position:relative;width:16px;height:16px;background-image:linear-gradient(0deg,#080b14 50%,#f000 50%),linear-gradient(90deg,#080b14 50%,#dedede 50%);border-radius:100%;margin-right:10px}.skill-property_fullness[_ngcontent-%COMP%]:before{content:"";top:50%;left:50%;transform:translate(-50%,-50%);width:22px;height:22px;position:absolute;border-radius:100%;border:1px solid #dedede}.skill-property_wrap[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}.skill-property_percentage[_ngcontent-%COMP%]{color:#3fc5a0;margin-left:5px}.skill-property_description[_ngcontent-%COMP%]{position:relative;text-wrap:nowrap;margin-right:5px}.skill-property_divider[_ngcontent-%COMP%]{display:flex;flex-grow:1;max-width:calc(100% - 12px);height:1px;background-color:#dedede;opacity:.2}.skill-property[_ngcontent-%COMP%]:nth-child(2)   .skill-property_fullness[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#080b14 50%,#f000 50%),linear-gradient(90deg,#080b14 50%,#dedede 50%)}ul[_ngcontent-%COMP%]{display:flex;margin-bottom:15px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:15px;padding:5px 10px;background-color:#080b14;border-radius:8px;opacity:1;transition:.3s;cursor:pointer}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:.8}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{opacity:.5}body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;font-style:normal;line-height:1.5;color:#dedede;min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}ul[_ngcontent-%COMP%]{list-style:none;display:flex;padding:0}p[_ngcontent-%COMP%]{margin:0;padding:0}']});let t=e;return t})();var q=[];var G={providers:[j(q),R()]};var ee={providers:[N()]},J=D(G,ee);var te=()=>A(H,J),De=te;export{De as a};
