System.register("chunks:///_virtual/AudioManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sound.ts"],(function(i){"use strict";var e,t,r,n,u,o,l,a,c,s,S,f,p;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){u=i.cclegacy,o=i._decorator,l=i.System,a=i.Sprite,c=i.SpriteFrame,s=i.AudioSource,S=i.Slider,f=i.Component},function(i){p=i.default}],execute:function(){var d,m,h,b,M,x,g,y,F,v,z,w,O,A,N,P,_,D,J,L,j,B,R,V,k,C,E,G;u._RF.push({},"27e100/EBpO3adJjJrZJy+G","AudioManager",void 0);var H=o.ccclass,I=o.property;l.Priority;i("AudioManager",(d=H("AudioManager"),m=I(a),h=I(a),b=I(c),M=I(c),x=I(c),g=I(c),y=I(s),F=I(s),v=I(S),z=I(S),w=I(p),O=I(p),d(((G=function(i){function e(){for(var e,t=arguments.length,u=new Array(t),o=0;o<t;o++)u[o]=arguments[o];return e=i.call.apply(i,[this].concat(u))||this,r(e,"MusicSprite",P,n(e)),r(e,"SfxSprite",_,n(e)),r(e,"MusicOnSpriteFrame",D,n(e)),r(e,"MusicOffSpriteFrame",J,n(e)),r(e,"SfxOnSpriteFrame",L,n(e)),r(e,"SfxOffSpriteFrame",j,n(e)),r(e,"MusicSource",B,n(e)),r(e,"SfxSource",R,n(e)),r(e,"MusicSlider",V,n(e)),r(e,"SfxSlider",k,n(e)),r(e,"MusicSound",C,n(e)),r(e,"SfxSound",E,n(e)),e.state1=!0,e.state2=!0,e}t(e,i);var u=e.prototype;return u.start=function(){},u.onLoad=function(){e.instance=this},u.update=function(i){},u.PlayMusic=function(i){var e,t=null==(e=this.MusicSound)?void 0:e.find((function(e){return e.name==i}));t?(this.MusicSource.clip=t.clip,this.MusicSource.play()):console.log("Music Sound Not Found")},u.StopMusic=function(i){var e=this.MusicSound.find((function(e){return e.name==i}));null==e?console.log("Music Sound Not Found"):(this.MusicSource.clip=e.clip,this.MusicSource.stop())},u.PlaySfx=function(i){if(null==this.SfxSound)console.log("Sfx Sound Not Found");else{var e=this.SfxSound.find((function(e){return e.name==i}));null==e?console.log("Sfx Sound Not Found"):(this.SfxSource.clip=e.clip,this.SfxSource.play())}},u.StopSfx=function(i){var e=this.SfxSound.find((function(e){return e.name==i}));null==e?console.log("Sfx Sound Not Found"):(this.SfxSource.clip=e.clip,this.SfxSource.stop())},u.MusicVolume=function(){this.MusicSource.volume=this.MusicSlider.progress,0==this.MusicSource.volume?(this.MusicSprite.spriteFrame=this.MusicOffSpriteFrame,this.state1=!1):(this.MusicSprite.spriteFrame=this.MusicOnSpriteFrame,this.state1=!0)},u.SFXVolume=function(){this.SfxSource.volume=this.SfxSlider.progress,0==this.SfxSource.volume?(this.SfxSprite.spriteFrame=this.SfxOffSpriteFrame,this.state2=!1):(this.SfxSprite.spriteFrame=this.SfxOnSpriteFrame,this.state2=!0)},e}(f)).instance=void 0,P=e((N=G).prototype,"MusicSprite",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(N.prototype,"SfxSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(N.prototype,"MusicOnSpriteFrame",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=e(N.prototype,"MusicOffSpriteFrame",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=e(N.prototype,"SfxOnSpriteFrame",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=e(N.prototype,"SfxOffSpriteFrame",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(N.prototype,"MusicSource",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(N.prototype,"SfxSource",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(N.prototype,"MusicSlider",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=e(N.prototype,"SfxSlider",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=e(N.prototype,"MusicSound",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=e(N.prototype,"SfxSound",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=N))||A));u._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,c=t.instantiate,p=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=c(s);l.parent=this.node,l.name="Buttons";var r=c(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=c(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(p);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=a.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?c(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=x;var E=c(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=c(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=c(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?c(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts"],(function(t){"use strict";var i,e,n,o,s,r,a,h,l,u,c,C,g,p,m,b;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.AnimationComponent,h=t.Label,l=t.Sprite,u=t.SpriteFrame,c=t.Button,C=t.Node,g=t.director,p=t.game,m=t.Component},function(t){b=t.AudioManager}],execute:function(){var f,T,k,S,y,B,x,d,w,L,F,R,z,v,P,I,G,N,M,A,H,E,K,O,D,_,j,q,J,W,Q,U,V,X,Y,Z,$,tt,it,et,nt,ot,st,rt,at,ht,lt,ut,ct,Ct,gt,pt,mt,bt,ft,Tt,kt,St,yt,Bt,xt,dt,wt,Lt,Ft,Rt,zt,vt,Pt,It,Gt,Nt,Mt,At;s._RF.push({},"11069fnnEJFwoDrtALI6yll","Game",void 0);var Ht,Et=r.ccclass,Kt=r.property;!function(t){t[t.NONE=0]="NONE",t[t.TIGER=1]="TIGER",t[t.KLOK=2]="KLOK",t[t.FISH=3]="FISH",t[t.CHICKEN=4]="CHICKEN",t[t.CRAP=5]="CRAP",t[t.SHRIMP=6]="SHRIMP"}(Ht||(Ht={}));t("Game",(f=Et("Game"),T=Kt(a),k=Kt(h),S=Kt(l),y=Kt(u),B=Kt(l),x=Kt(l),d=Kt(l),w=Kt(l),L=Kt(l),F=Kt(l),R=Kt(u),z=Kt(u),v=Kt(c),P=Kt(h),I=Kt(h),G=Kt(h),N=Kt(h),M=Kt(h),A=Kt(h),H=Kt(h),E=Kt(h),K=Kt(Number),O=Kt(a),D=Kt(a),_=Kt(a),j=Kt(a),q=Kt(a),J=Kt(a),W=Kt(h),Q=Kt(C),U=Kt(C),V=Kt(C),X=Kt(C),Y=Kt(C),Z=Kt(a),f(((At=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s))||this,n(i,"plate",it,o(i)),n(i,"timeText",et,o(i)),n(i,"nutSprite",nt,o(i)),n(i,"nutSpriteFrame",ot,o(i)),i.randomList=[],i.reschLis=[],i.result=Ht.SHRIMP,i.pelstart=10,i.tach=!1,i.isRD=!0,i.isTC=!0,n(i,"tigerButton",st,o(i)),n(i,"klokButton",rt,o(i)),n(i,"fishButton",at,o(i)),n(i,"chickenButton",ht,o(i)),n(i,"crabButton",lt,o(i)),n(i,"shrimpButton",ut,o(i)),n(i,"buttonNomaleSpriteFrame",ct,o(i)),n(i,"buttonResultSpriteFrame",Ct,o(i)),n(i,"backButton",gt,o(i)),n(i,"winCoinText",pt,o(i)),i.winCoin=0,i.tigerChoice=void 0,i.tigerCoin=0,i.klokChoice=void 0,i.klokCoin=0,i.fishChoice=void 0,i.fishCoin=0,i.chickenChoice=void 0,i.chickenCoin=0,i.crabChoice=void 0,i.crabCoin=0,i.shrimpChoice=void 0,i.shrimpCoin=0,n(i,"tigerCoinText",mt,o(i)),n(i,"klokCoinText",bt,o(i)),n(i,"fishCoinText",ft,o(i)),n(i,"chickenCoinText",Tt,o(i)),n(i,"crabCoinText",kt,o(i)),n(i,"shrimpCoinText",St,o(i)),n(i,"totalCoinText",yt,o(i)),n(i,"totalCoin",Bt,o(i)),i.isGetChoice=!1,i.tigerTrueCoin=0,i.klokTrueCoin=0,i.fishTrueCoin=0,i.chickenTrueCoin=0,i.crabTrueCoin=0,i.shrimpTrueCoin=0,n(i,"klarButong",xt,o(i)),n(i,"klorkButong",dt,o(i)),n(i,"treuButong",wt,o(i)),n(i,"mornButong",Lt,o(i)),n(i,"kdamButong",Ft,o(i)),n(i,"bongkongButong",Rt,o(i)),n(i,"guessCoinText",zt,o(i)),i.teayCT=1e3,i.isOpen=!1,n(i,"gameScreen",vt,o(i)),n(i,"menuSceen",Pt,o(i)),n(i,"setting",It,o(i)),n(i,"gameController",Gt,o(i)),n(i,"AudioManager",Nt,o(i)),n(i,"settingAnimation",Mt,o(i)),i.isStart=!1,i}e(i,t);var s=i.prototype;return s.onLoad=function(){},s.start=function(){this.timeText.string=this.pelstart.toString(),this.totalCoinText.string=this.totalCoin.toString(),this.tigerCoinText.string=this.tigerCoin.toString(),this.klokCoinText.string=this.klokCoin.toString(),this.fishCoinText.string=this.fishCoin.toString(),this.chickenCoinText.string=this.chickenCoin.toString(),this.crabCoinText.string=this.crabCoin.toString(),this.shrimpCoinText.string=this.shrimpCoin.toString(),this.guessCoinText.string=this.teayCT.toString(),b.instance.PlayMusic("BackgroundMusic"),this.backButton.interactable=!1},s.update=function(t){var i=this;this.isStart&&(this.tach&&(setTimeout((function(){i.pelstart-=t,i.timeText.string=Math.round(i.pelstart).toString()})),this.isTC&&(this.TimeCountSoundEfect(),this.isTC=!1,this.backButton.interactable=!0)),this.pelstart<=0&&this.tach&&(this.tach=!1,this.isGetChoice=!1,this.isOpen=!1,this.ResultButtonChoiceImageChange(),this.CaculateGame(),this.endnStarAgainnnn()),this.pelstart<=10&&this.isRD&&(this.isRD=!1,this.starGameAni()))},s.RandN=function(){this.randomList=[],this.reschLis=[];for(var t=0;t<3;){t++;var i=Math.floor(6*Math.random());this.randomList.push(i)}for(var e=0;e<this.randomList.length;e++){switch(this.randomList[e]){case 0:this.result=Ht.TIGER;break;case 1:this.result=Ht.KLOK;break;case 2:this.result=Ht.FISH;break;case 3:this.result=Ht.CHICKEN;break;case 4:this.result=Ht.CRAP;break;case 5:this.result=Ht.SHRIMP}this.reschLis.push(this.result)}this.MatchingImage(),console.log(this.randomList),console.log(this.randomList[2]),console.log("ResultList : "+this.reschLis),console.log(this.reschLis.length)},s.MatchingImage=function(){for(var t=0;t<this.randomList.length;t++)for(var i=0;i<6;i++)this.randomList[t]==i&&null!=this.nutSprite[t]&&null!=this.nutSprite[t].spriteFrame&&(this.nutSprite[t].spriteFrame=this.nutSpriteFrame[i])},s.TigerButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.tigerChoice=Ht.TIGER,this.tigerCoin+=this.teayCT,this.tigerCoinText.string=this.tigerCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.KlokButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.klokChoice=Ht.KLOK,this.klokCoin+=this.teayCT,this.klokCoinText.string=this.klokCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.FishButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.fishChoice=Ht.FISH,this.fishCoin+=this.teayCT,this.fishCoinText.string=this.fishCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.ChickenButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.chickenChoice=Ht.CHICKEN,this.chickenCoin+=this.teayCT,this.chickenCoinText.string=this.chickenCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.CrabButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.crabChoice=Ht.CRAP,this.crabCoin+=this.teayCT,this.crabCoinText.string=this.crabCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.ShrimpButton=function(){this.isGetChoice&&this.totalCoin>0&&this.totalCoin>=this.teayCT&&(b.instance.PlaySfx("BetCoin"),this.shrimpChoice=Ht.SHRIMP,this.shrimpCoin+=this.teayCT,this.shrimpCoinText.string=this.shrimpCoin.toString(),this.totalCoin-=this.teayCT,this.totalCoinText.string=this.totalCoin.toString())},s.CaculateGame=function(){for(var t=0;t<this.reschLis.length;t++)this.reschLis[t]==this.tigerChoice?(this.winCoin+=this.tigerCoin,this.tigerTrueCoin=this.tigerCoin):this.reschLis[t]==this.klokChoice?(this.winCoin+=this.klokCoin,this.klokTrueCoin=this.klokCoin):this.reschLis[t]==this.fishChoice?(this.winCoin+=this.fishCoin,this.fishTrueCoin=this.fishCoin):this.reschLis[t]==this.chickenChoice?(this.winCoin+=this.chickenCoin,this.chickenTrueCoin=this.chickenCoin):this.reschLis[t]==this.crabChoice?(this.winCoin+=this.crabCoin,this.crabTrueCoin=this.crabCoin):this.reschLis[t]==this.shrimpChoice&&(this.winCoin+=this.shrimpCoin,this.shrimpTrueCoin=this.shrimpCoin);this.totalCoin=this.totalCoin+this.winCoin+this.tigerTrueCoin+this.klokTrueCoin+this.fishTrueCoin+this.chickenTrueCoin+this.crabTrueCoin+this.shrimpTrueCoin,this.totalCoinText.string=this.totalCoin.toString(),this.winCoinText.string=this.winCoin.toString()},s.ResetToDefault=function(){this.tigerCoinText&&this.klokCoinText&&this.fishCoinText&&this.chickenCoinText&&this.crabCoinText&&this.shrimpCoinText&&this.winCoinText&&(this.tigerCoin=this.klokCoin=this.fishCoin=this.chickenCoin=this.crabCoin=this.shrimpCoin=0,this.tigerTrueCoin=this.klokTrueCoin=this.fishTrueCoin=this.chickenTrueCoin=this.crabTrueCoin=this.shrimpTrueCoin=0,this.winCoin=0,this.tigerChoice=this.klokChoice=this.fishChoice=this.chickenChoice=this.crabChoice=this.shrimpChoice=Ht.NONE,this.tigerCoinText.string=this.klokCoinText.string=this.fishCoinText.string=this.chickenCoinText.string=this.crabCoinText.string=this.shrimpCoinText.string=this.winCoinText.string="0"),this.buttonNomaleSpriteFrame&&this.buttonNomaleSpriteFrame.length>0&&(this.tigerButton.spriteFrame=this.buttonNomaleSpriteFrame[0],this.klokButton.spriteFrame=this.buttonNomaleSpriteFrame[1],this.fishButton.spriteFrame=this.buttonNomaleSpriteFrame[2],this.chickenButton.spriteFrame=this.buttonNomaleSpriteFrame[3],this.crabButton.spriteFrame=this.buttonNomaleSpriteFrame[4],this.shrimpButton.spriteFrame=this.buttonNomaleSpriteFrame[5]),this.klarButong&&this.klarButong.play("s"),this.klorkButong&&this.klorkButong.play("s"),this.treuButong&&this.treuButong.play("s"),this.mornButong&&this.mornButong.play("s"),this.kdamButong&&this.kdamButong.play("s"),this.bongkongButong&&this.bongkongButong.play("s")},s.starGameAni=function(){var t=this;this.backButton.interactable=!1,this.plate.play("shake"),b.instance.PlaySfx("shake"),setTimeout((function(){t.RandN(),t.tach=!0,t.isGetChoice=!0,t.isOpen=!0}),3e3)},s.endnStarAgainnnn=function(){var t=this;this.plate.play("openCover"),b.instance.StopMusic("BackgroundMusic"),b.instance.PlaySfx("Open"),setTimeout((function(){b.instance.PlaySfx("WinSound"),setTimeout((function(){t.endNstartAgainnn1()}),5e3)}),1e3)},s.endNstartAgainnn1=function(){var t,i=this;b.instance.StopMusic("BackgroundMusic"),b.instance.PlaySfx("Open"),null==(t=this.plate)||t.play("closeCover"),setTimeout((function(){b.instance.PlayMusic("BackgroundMusic"),i.ResetToDefault(),i.isRD=!0,i.pelstart=10,i.randomList=[],i.reschLis=[]}),2e3)},s.ResultButtonChoiceImageChange=function(){for(var t=0;t<this.reschLis.length;t++)this.reschLis[t]==Ht.TIGER&&(this.tigerButton.spriteFrame=this.buttonResultSpriteFrame[0],this.klarButong.play("sLoad")),this.reschLis[t]==Ht.KLOK&&(this.klokButton.spriteFrame=this.buttonResultSpriteFrame[1],this.klorkButong.play("sLoad")),this.reschLis[t]==Ht.FISH&&(this.fishButton.spriteFrame=this.buttonResultSpriteFrame[2],this.treuButong.play("sLoad")),this.reschLis[t]==Ht.CHICKEN&&(this.chickenButton.spriteFrame=this.buttonResultSpriteFrame[3],this.mornButong.play("sLoad")),this.reschLis[t]==Ht.CRAP&&(this.crabButton.spriteFrame=this.buttonResultSpriteFrame[4],this.kdamButong.play("sLoad")),this.reschLis[t]==Ht.SHRIMP&&(this.shrimpButton.spriteFrame=this.buttonResultSpriteFrame[5],this.bongkongButong.play("sLoad"))},s.IncreasGuessCoin=function(){this.teayCT+=1e3,this.guessCoinText.string=this.teayCT.toString()},s.DecreasGuessCoin=function(){this.teayCT>1e3&&(this.teayCT-=1e3,this.guessCoinText.string=this.teayCT.toString())},s.OpenButton=function(){this.isOpen&&(this.tach=!1,this.isGetChoice=!1,this.isOpen=!1,this.ResultButtonChoiceImageChange(),this.CaculateGame(),this.endnStarAgainnnn(),b.instance.PlaySfx("SoundClick"))},s.TimeCountSoundEfect=function(){var t=this;setTimeout((function(){b.instance.PlaySfx("time"),t.isTC=!0}),1e3)},s.PlayButton=function(){this.isStart=!0,this.gameScreen.active=!0,this.menuSceen.active=!1,this.setting.active=!1,this.gameController.active=!0,b.instance.PlaySfx("SoundClick")},s.showSetting=function(){b.instance.PlaySfx("SoundClick"),this.settingAnimation.play("boardsetting"),this.setting.active=!0},s.backgamescreen=function(){this.settingAnimation.play("closeboartsetting"),this.setting.active=!0,b.instance.PlaySfx("SoundClick")},s.BackToLoading=function(){this.menuSceen.active=!0,b.instance.PlaySfx("SoundClick")},s.HomeButton=function(){this.isStart=!1,g.loadScene("Loading")},s.quitGame=function(){p.end()},i}(m)).end=void 0,it=i((tt=At).prototype,"plate",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=i(tt.prototype,"timeText",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=i(tt.prototype,"nutSprite",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ot=i(tt.prototype,"nutSpriteFrame",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),st=i(tt.prototype,"tigerButton",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),rt=i(tt.prototype,"klokButton",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),at=i(tt.prototype,"fishButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ht=i(tt.prototype,"chickenButton",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=i(tt.prototype,"crabButton",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ut=i(tt.prototype,"shrimpButton",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ct=i(tt.prototype,"buttonNomaleSpriteFrame",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ct=i(tt.prototype,"buttonResultSpriteFrame",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),gt=i(tt.prototype,"backButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pt=i(tt.prototype,"winCoinText",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),mt=i(tt.prototype,"tigerCoinText",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bt=i(tt.prototype,"klokCoinText",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=i(tt.prototype,"fishCoinText",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tt=i(tt.prototype,"chickenCoinText",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),kt=i(tt.prototype,"crabCoinText",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St=i(tt.prototype,"shrimpCoinText",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),yt=i(tt.prototype,"totalCoinText",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bt=i(tt.prototype,"totalCoin",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e4}}),xt=i(tt.prototype,"klarButong",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),dt=i(tt.prototype,"klorkButong",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wt=i(tt.prototype,"treuButong",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lt=i(tt.prototype,"mornButong",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ft=i(tt.prototype,"kdamButong",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rt=i(tt.prototype,"bongkongButong",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zt=i(tt.prototype,"guessCoinText",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vt=i(tt.prototype,"gameScreen",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pt=i(tt.prototype,"menuSceen",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),It=i(tt.prototype,"setting",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Gt=i(tt.prototype,"gameController",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Nt=i(tt.prototype,"AudioManager",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mt=i(tt.prototype,"settingAnimation",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=tt))||$));s._RF.pop()}}}));

System.register("chunks:///_virtual/Loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,r=t.director,c=t.Component}],execute:function(){var i;o._RF.push({},"544a58onaBOZIQLYcSWJwtW","Loading",void 0);var s=e.ccclass;e.property,t("Loading",s("Loading")(i=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){setTimeout((function(){r.loadScene("Game")}),2e3)},o}(c))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AudioManager.ts","./Game.ts","./Loading.ts","./SceneController.ts","./Sound.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SceneController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,o,i,l,c,a,u,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,c=e.Node,a=e.game,u=e.director,s=e.Component}],execute:function(){var p,f,g,m,S,y,d,b,h;i._RF.push({},"89c3bFSlrdNu7BCeze9y+gC","SceneController",void 0);var v=l.ccclass,C=l.property;e("SceneController",(p=v("SceneController"),f=C(c),g=C(c),m=C(c),p((d=n((y=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,r(n,"gameScreen",d,o(n)),r(n,"menuSceen",b,o(n)),r(n,"gameController",h,o(n)),n}t(n,e);var i=n.prototype;return i.start=function(){},i.update=function(e){},i.PlayButton=function(){this.gameScreen.active=!0,this.menuSceen.active=!1,this.gameController.active=!0},i.QuitButton=function(){a.end()},i.HomeButton=function(){u.loadScene("LoadingScene")},n}(s)).prototype,"gameScreen",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(y.prototype,"menuSceen",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=n(y.prototype,"gameController",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=y))||S));i._RF.pop()}}}));

System.register("chunks:///_virtual/Sound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,t,r,n,o,c;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,n=e._decorator,o=e.String,c=e.AudioClip}],execute:function(){var l,u,a,p,s,d,f;r._RF.push({},"de1ec8p4jlB8rLivIesVeJB","Sound",void 0);var b=n.ccclass,y=n.property;e("default",(l=b("Sound"),u=y(o),a=y(c),l((d=i((s=function(){t(this,"name",d,this),t(this,"clip",f,this)}).prototype,"name",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=i(s.prototype,"clip",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=s))||p));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});