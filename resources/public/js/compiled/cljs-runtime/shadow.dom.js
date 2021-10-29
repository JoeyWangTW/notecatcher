goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34445 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34445(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34449 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34449(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32832 = coll;
var G__32833 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32832,G__32833) : shadow.dom.lazy_native_coll_seq.call(null,G__32832,G__32833));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32923 = arguments.length;
switch (G__32923) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32936 = arguments.length;
switch (G__32936) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32945 = arguments.length;
switch (G__32945) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32956 = arguments.length;
switch (G__32956) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32984 = arguments.length;
switch (G__32984) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33041){if((e33041 instanceof Object)){
var e = e33041;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33041;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33062 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33063 = null;
var count__33064 = (0);
var i__33065 = (0);
while(true){
if((i__33065 < count__33064)){
var el = chunk__33063.cljs$core$IIndexed$_nth$arity$2(null,i__33065);
var handler_34478__$1 = ((function (seq__33062,chunk__33063,count__33064,i__33065,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33062,chunk__33063,count__33064,i__33065,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34478__$1);


var G__34479 = seq__33062;
var G__34480 = chunk__33063;
var G__34481 = count__33064;
var G__34482 = (i__33065 + (1));
seq__33062 = G__34479;
chunk__33063 = G__34480;
count__33064 = G__34481;
i__33065 = G__34482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33062);
if(temp__5753__auto__){
var seq__33062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33062__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33062__$1);
var G__34483 = cljs.core.chunk_rest(seq__33062__$1);
var G__34484 = c__4638__auto__;
var G__34485 = cljs.core.count(c__4638__auto__);
var G__34486 = (0);
seq__33062 = G__34483;
chunk__33063 = G__34484;
count__33064 = G__34485;
i__33065 = G__34486;
continue;
} else {
var el = cljs.core.first(seq__33062__$1);
var handler_34487__$1 = ((function (seq__33062,chunk__33063,count__33064,i__33065,el,seq__33062__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33062,chunk__33063,count__33064,i__33065,el,seq__33062__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34487__$1);


var G__34488 = cljs.core.next(seq__33062__$1);
var G__34489 = null;
var G__34490 = (0);
var G__34491 = (0);
seq__33062 = G__34488;
chunk__33063 = G__34489;
count__33064 = G__34490;
i__33065 = G__34491;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33084 = arguments.length;
switch (G__33084) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33107 = cljs.core.seq(events);
var chunk__33108 = null;
var count__33109 = (0);
var i__33110 = (0);
while(true){
if((i__33110 < count__33109)){
var vec__33125 = chunk__33108.cljs$core$IIndexed$_nth$arity$2(null,i__33110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33125,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34494 = seq__33107;
var G__34495 = chunk__33108;
var G__34496 = count__33109;
var G__34497 = (i__33110 + (1));
seq__33107 = G__34494;
chunk__33108 = G__34495;
count__33109 = G__34496;
i__33110 = G__34497;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33107);
if(temp__5753__auto__){
var seq__33107__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33107__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33107__$1);
var G__34498 = cljs.core.chunk_rest(seq__33107__$1);
var G__34499 = c__4638__auto__;
var G__34500 = cljs.core.count(c__4638__auto__);
var G__34501 = (0);
seq__33107 = G__34498;
chunk__33108 = G__34499;
count__33109 = G__34500;
i__33110 = G__34501;
continue;
} else {
var vec__33132 = cljs.core.first(seq__33107__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34502 = cljs.core.next(seq__33107__$1);
var G__34503 = null;
var G__34504 = (0);
var G__34505 = (0);
seq__33107 = G__34502;
chunk__33108 = G__34503;
count__33109 = G__34504;
i__33110 = G__34505;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33144 = cljs.core.seq(styles);
var chunk__33145 = null;
var count__33146 = (0);
var i__33147 = (0);
while(true){
if((i__33147 < count__33146)){
var vec__33189 = chunk__33145.cljs$core$IIndexed$_nth$arity$2(null,i__33147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33189,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34510 = seq__33144;
var G__34511 = chunk__33145;
var G__34512 = count__33146;
var G__34513 = (i__33147 + (1));
seq__33144 = G__34510;
chunk__33145 = G__34511;
count__33146 = G__34512;
i__33147 = G__34513;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33144);
if(temp__5753__auto__){
var seq__33144__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33144__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33144__$1);
var G__34514 = cljs.core.chunk_rest(seq__33144__$1);
var G__34515 = c__4638__auto__;
var G__34516 = cljs.core.count(c__4638__auto__);
var G__34517 = (0);
seq__33144 = G__34514;
chunk__33145 = G__34515;
count__33146 = G__34516;
i__33147 = G__34517;
continue;
} else {
var vec__33199 = cljs.core.first(seq__33144__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34518 = cljs.core.next(seq__33144__$1);
var G__34519 = null;
var G__34520 = (0);
var G__34521 = (0);
seq__33144 = G__34518;
chunk__33145 = G__34519;
count__33146 = G__34520;
i__33147 = G__34521;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33208_34522 = key;
var G__33208_34523__$1 = (((G__33208_34522 instanceof cljs.core.Keyword))?G__33208_34522.fqn:null);
switch (G__33208_34523__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34526 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34526,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34526,"aria-");
}
})())){
el.setAttribute(ks_34526,value);
} else {
(el[ks_34526] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33263){
var map__33265 = p__33263;
var map__33265__$1 = cljs.core.__destructure_map(map__33265);
var props = map__33265__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33265__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33266 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33271 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33271,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33271;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33281 = arguments.length;
switch (G__33281) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33299){
var vec__33301 = p__33299;
var seq__33302 = cljs.core.seq(vec__33301);
var first__33303 = cljs.core.first(seq__33302);
var seq__33302__$1 = cljs.core.next(seq__33302);
var nn = first__33303;
var first__33303__$1 = cljs.core.first(seq__33302__$1);
var seq__33302__$2 = cljs.core.next(seq__33302__$1);
var np = first__33303__$1;
var nc = seq__33302__$2;
var node = vec__33301;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33311 = nn;
var G__33312 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33311,G__33312) : create_fn.call(null,G__33311,G__33312));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33314 = nn;
var G__33315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33314,G__33315) : create_fn.call(null,G__33314,G__33315));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33330 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33330,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33330,(1),null);
var seq__33333_34537 = cljs.core.seq(node_children);
var chunk__33334_34538 = null;
var count__33335_34539 = (0);
var i__33336_34540 = (0);
while(true){
if((i__33336_34540 < count__33335_34539)){
var child_struct_34542 = chunk__33334_34538.cljs$core$IIndexed$_nth$arity$2(null,i__33336_34540);
var children_34543 = shadow.dom.dom_node(child_struct_34542);
if(cljs.core.seq_QMARK_(children_34543)){
var seq__33410_34544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34543));
var chunk__33412_34545 = null;
var count__33413_34546 = (0);
var i__33414_34547 = (0);
while(true){
if((i__33414_34547 < count__33413_34546)){
var child_34549 = chunk__33412_34545.cljs$core$IIndexed$_nth$arity$2(null,i__33414_34547);
if(cljs.core.truth_(child_34549)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34549);


var G__34550 = seq__33410_34544;
var G__34551 = chunk__33412_34545;
var G__34552 = count__33413_34546;
var G__34553 = (i__33414_34547 + (1));
seq__33410_34544 = G__34550;
chunk__33412_34545 = G__34551;
count__33413_34546 = G__34552;
i__33414_34547 = G__34553;
continue;
} else {
var G__34554 = seq__33410_34544;
var G__34555 = chunk__33412_34545;
var G__34556 = count__33413_34546;
var G__34557 = (i__33414_34547 + (1));
seq__33410_34544 = G__34554;
chunk__33412_34545 = G__34555;
count__33413_34546 = G__34556;
i__33414_34547 = G__34557;
continue;
}
} else {
var temp__5753__auto___34558 = cljs.core.seq(seq__33410_34544);
if(temp__5753__auto___34558){
var seq__33410_34559__$1 = temp__5753__auto___34558;
if(cljs.core.chunked_seq_QMARK_(seq__33410_34559__$1)){
var c__4638__auto___34560 = cljs.core.chunk_first(seq__33410_34559__$1);
var G__34561 = cljs.core.chunk_rest(seq__33410_34559__$1);
var G__34562 = c__4638__auto___34560;
var G__34563 = cljs.core.count(c__4638__auto___34560);
var G__34564 = (0);
seq__33410_34544 = G__34561;
chunk__33412_34545 = G__34562;
count__33413_34546 = G__34563;
i__33414_34547 = G__34564;
continue;
} else {
var child_34566 = cljs.core.first(seq__33410_34559__$1);
if(cljs.core.truth_(child_34566)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34566);


var G__34568 = cljs.core.next(seq__33410_34559__$1);
var G__34569 = null;
var G__34570 = (0);
var G__34571 = (0);
seq__33410_34544 = G__34568;
chunk__33412_34545 = G__34569;
count__33413_34546 = G__34570;
i__33414_34547 = G__34571;
continue;
} else {
var G__34572 = cljs.core.next(seq__33410_34559__$1);
var G__34573 = null;
var G__34574 = (0);
var G__34575 = (0);
seq__33410_34544 = G__34572;
chunk__33412_34545 = G__34573;
count__33413_34546 = G__34574;
i__33414_34547 = G__34575;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34543);
}


var G__34576 = seq__33333_34537;
var G__34577 = chunk__33334_34538;
var G__34578 = count__33335_34539;
var G__34579 = (i__33336_34540 + (1));
seq__33333_34537 = G__34576;
chunk__33334_34538 = G__34577;
count__33335_34539 = G__34578;
i__33336_34540 = G__34579;
continue;
} else {
var temp__5753__auto___34580 = cljs.core.seq(seq__33333_34537);
if(temp__5753__auto___34580){
var seq__33333_34581__$1 = temp__5753__auto___34580;
if(cljs.core.chunked_seq_QMARK_(seq__33333_34581__$1)){
var c__4638__auto___34582 = cljs.core.chunk_first(seq__33333_34581__$1);
var G__34583 = cljs.core.chunk_rest(seq__33333_34581__$1);
var G__34584 = c__4638__auto___34582;
var G__34585 = cljs.core.count(c__4638__auto___34582);
var G__34586 = (0);
seq__33333_34537 = G__34583;
chunk__33334_34538 = G__34584;
count__33335_34539 = G__34585;
i__33336_34540 = G__34586;
continue;
} else {
var child_struct_34588 = cljs.core.first(seq__33333_34581__$1);
var children_34589 = shadow.dom.dom_node(child_struct_34588);
if(cljs.core.seq_QMARK_(children_34589)){
var seq__33438_34590 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34589));
var chunk__33440_34591 = null;
var count__33441_34592 = (0);
var i__33442_34593 = (0);
while(true){
if((i__33442_34593 < count__33441_34592)){
var child_34594 = chunk__33440_34591.cljs$core$IIndexed$_nth$arity$2(null,i__33442_34593);
if(cljs.core.truth_(child_34594)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34594);


var G__34595 = seq__33438_34590;
var G__34596 = chunk__33440_34591;
var G__34597 = count__33441_34592;
var G__34598 = (i__33442_34593 + (1));
seq__33438_34590 = G__34595;
chunk__33440_34591 = G__34596;
count__33441_34592 = G__34597;
i__33442_34593 = G__34598;
continue;
} else {
var G__34599 = seq__33438_34590;
var G__34600 = chunk__33440_34591;
var G__34601 = count__33441_34592;
var G__34602 = (i__33442_34593 + (1));
seq__33438_34590 = G__34599;
chunk__33440_34591 = G__34600;
count__33441_34592 = G__34601;
i__33442_34593 = G__34602;
continue;
}
} else {
var temp__5753__auto___34603__$1 = cljs.core.seq(seq__33438_34590);
if(temp__5753__auto___34603__$1){
var seq__33438_34604__$1 = temp__5753__auto___34603__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33438_34604__$1)){
var c__4638__auto___34606 = cljs.core.chunk_first(seq__33438_34604__$1);
var G__34607 = cljs.core.chunk_rest(seq__33438_34604__$1);
var G__34608 = c__4638__auto___34606;
var G__34609 = cljs.core.count(c__4638__auto___34606);
var G__34610 = (0);
seq__33438_34590 = G__34607;
chunk__33440_34591 = G__34608;
count__33441_34592 = G__34609;
i__33442_34593 = G__34610;
continue;
} else {
var child_34611 = cljs.core.first(seq__33438_34604__$1);
if(cljs.core.truth_(child_34611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34611);


var G__34612 = cljs.core.next(seq__33438_34604__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__33438_34590 = G__34612;
chunk__33440_34591 = G__34613;
count__33441_34592 = G__34614;
i__33442_34593 = G__34615;
continue;
} else {
var G__34616 = cljs.core.next(seq__33438_34604__$1);
var G__34617 = null;
var G__34618 = (0);
var G__34619 = (0);
seq__33438_34590 = G__34616;
chunk__33440_34591 = G__34617;
count__33441_34592 = G__34618;
i__33442_34593 = G__34619;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34589);
}


var G__34620 = cljs.core.next(seq__33333_34581__$1);
var G__34621 = null;
var G__34622 = (0);
var G__34623 = (0);
seq__33333_34537 = G__34620;
chunk__33334_34538 = G__34621;
count__33335_34539 = G__34622;
i__33336_34540 = G__34623;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33524 = cljs.core.seq(node);
var chunk__33525 = null;
var count__33526 = (0);
var i__33527 = (0);
while(true){
if((i__33527 < count__33526)){
var n = chunk__33525.cljs$core$IIndexed$_nth$arity$2(null,i__33527);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34624 = seq__33524;
var G__34625 = chunk__33525;
var G__34626 = count__33526;
var G__34627 = (i__33527 + (1));
seq__33524 = G__34624;
chunk__33525 = G__34625;
count__33526 = G__34626;
i__33527 = G__34627;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33524);
if(temp__5753__auto__){
var seq__33524__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33524__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33524__$1);
var G__34628 = cljs.core.chunk_rest(seq__33524__$1);
var G__34629 = c__4638__auto__;
var G__34630 = cljs.core.count(c__4638__auto__);
var G__34631 = (0);
seq__33524 = G__34628;
chunk__33525 = G__34629;
count__33526 = G__34630;
i__33527 = G__34631;
continue;
} else {
var n = cljs.core.first(seq__33524__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34632 = cljs.core.next(seq__33524__$1);
var G__34633 = null;
var G__34634 = (0);
var G__34635 = (0);
seq__33524 = G__34632;
chunk__33525 = G__34633;
count__33526 = G__34634;
i__33527 = G__34635;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33558 = arguments.length;
switch (G__33558) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33571 = arguments.length;
switch (G__33571) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33591 = arguments.length;
switch (G__33591) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34646 = arguments.length;
var i__4819__auto___34647 = (0);
while(true){
if((i__4819__auto___34647 < len__4818__auto___34646)){
args__4824__auto__.push((arguments[i__4819__auto___34647]));

var G__34648 = (i__4819__auto___34647 + (1));
i__4819__auto___34647 = G__34648;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33612_34650 = cljs.core.seq(nodes);
var chunk__33613_34651 = null;
var count__33614_34652 = (0);
var i__33615_34653 = (0);
while(true){
if((i__33615_34653 < count__33614_34652)){
var node_34655 = chunk__33613_34651.cljs$core$IIndexed$_nth$arity$2(null,i__33615_34653);
fragment.appendChild(shadow.dom._to_dom(node_34655));


var G__34663 = seq__33612_34650;
var G__34664 = chunk__33613_34651;
var G__34665 = count__33614_34652;
var G__34666 = (i__33615_34653 + (1));
seq__33612_34650 = G__34663;
chunk__33613_34651 = G__34664;
count__33614_34652 = G__34665;
i__33615_34653 = G__34666;
continue;
} else {
var temp__5753__auto___34668 = cljs.core.seq(seq__33612_34650);
if(temp__5753__auto___34668){
var seq__33612_34669__$1 = temp__5753__auto___34668;
if(cljs.core.chunked_seq_QMARK_(seq__33612_34669__$1)){
var c__4638__auto___34670 = cljs.core.chunk_first(seq__33612_34669__$1);
var G__34671 = cljs.core.chunk_rest(seq__33612_34669__$1);
var G__34672 = c__4638__auto___34670;
var G__34673 = cljs.core.count(c__4638__auto___34670);
var G__34674 = (0);
seq__33612_34650 = G__34671;
chunk__33613_34651 = G__34672;
count__33614_34652 = G__34673;
i__33615_34653 = G__34674;
continue;
} else {
var node_34676 = cljs.core.first(seq__33612_34669__$1);
fragment.appendChild(shadow.dom._to_dom(node_34676));


var G__34677 = cljs.core.next(seq__33612_34669__$1);
var G__34678 = null;
var G__34679 = (0);
var G__34680 = (0);
seq__33612_34650 = G__34677;
chunk__33613_34651 = G__34678;
count__33614_34652 = G__34679;
i__33615_34653 = G__34680;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33606){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33606));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33625_34684 = cljs.core.seq(scripts);
var chunk__33626_34685 = null;
var count__33627_34686 = (0);
var i__33628_34687 = (0);
while(true){
if((i__33628_34687 < count__33627_34686)){
var vec__33644_34689 = chunk__33626_34685.cljs$core$IIndexed$_nth$arity$2(null,i__33628_34687);
var script_tag_34690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33644_34689,(0),null);
var script_body_34691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33644_34689,(1),null);
eval(script_body_34691);


var G__34694 = seq__33625_34684;
var G__34695 = chunk__33626_34685;
var G__34696 = count__33627_34686;
var G__34697 = (i__33628_34687 + (1));
seq__33625_34684 = G__34694;
chunk__33626_34685 = G__34695;
count__33627_34686 = G__34696;
i__33628_34687 = G__34697;
continue;
} else {
var temp__5753__auto___34698 = cljs.core.seq(seq__33625_34684);
if(temp__5753__auto___34698){
var seq__33625_34699__$1 = temp__5753__auto___34698;
if(cljs.core.chunked_seq_QMARK_(seq__33625_34699__$1)){
var c__4638__auto___34700 = cljs.core.chunk_first(seq__33625_34699__$1);
var G__34701 = cljs.core.chunk_rest(seq__33625_34699__$1);
var G__34702 = c__4638__auto___34700;
var G__34703 = cljs.core.count(c__4638__auto___34700);
var G__34704 = (0);
seq__33625_34684 = G__34701;
chunk__33626_34685 = G__34702;
count__33627_34686 = G__34703;
i__33628_34687 = G__34704;
continue;
} else {
var vec__33654_34705 = cljs.core.first(seq__33625_34699__$1);
var script_tag_34706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654_34705,(0),null);
var script_body_34707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654_34705,(1),null);
eval(script_body_34707);


var G__34708 = cljs.core.next(seq__33625_34699__$1);
var G__34709 = null;
var G__34710 = (0);
var G__34711 = (0);
seq__33625_34684 = G__34708;
chunk__33626_34685 = G__34709;
count__33627_34686 = G__34710;
i__33628_34687 = G__34711;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33658){
var vec__33659 = p__33658;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33659,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33682 = arguments.length;
switch (G__33682) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33736 = cljs.core.seq(style_keys);
var chunk__33737 = null;
var count__33738 = (0);
var i__33739 = (0);
while(true){
if((i__33739 < count__33738)){
var it = chunk__33737.cljs$core$IIndexed$_nth$arity$2(null,i__33739);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34732 = seq__33736;
var G__34733 = chunk__33737;
var G__34734 = count__33738;
var G__34735 = (i__33739 + (1));
seq__33736 = G__34732;
chunk__33737 = G__34733;
count__33738 = G__34734;
i__33739 = G__34735;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33736);
if(temp__5753__auto__){
var seq__33736__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33736__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33736__$1);
var G__34736 = cljs.core.chunk_rest(seq__33736__$1);
var G__34737 = c__4638__auto__;
var G__34738 = cljs.core.count(c__4638__auto__);
var G__34739 = (0);
seq__33736 = G__34736;
chunk__33737 = G__34737;
count__33738 = G__34738;
i__33739 = G__34739;
continue;
} else {
var it = cljs.core.first(seq__33736__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34740 = cljs.core.next(seq__33736__$1);
var G__34741 = null;
var G__34742 = (0);
var G__34743 = (0);
seq__33736 = G__34740;
chunk__33737 = G__34741;
count__33738 = G__34742;
i__33739 = G__34743;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33753,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33767 = k33753;
var G__33767__$1 = (((G__33767 instanceof cljs.core.Keyword))?G__33767.fqn:null);
switch (G__33767__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33753,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33780){
var vec__33784 = p__33780;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33784,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33784,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33752){
var self__ = this;
var G__33752__$1 = this;
return (new cljs.core.RecordIter((0),G__33752__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33754,other33755){
var self__ = this;
var this33754__$1 = this;
return (((!((other33755 == null)))) && ((((this33754__$1.constructor === other33755.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33754__$1.x,other33755.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33754__$1.y,other33755.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33754__$1.__extmap,other33755.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33753){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33834 = k33753;
var G__33834__$1 = (((G__33834 instanceof cljs.core.Keyword))?G__33834.fqn:null);
switch (G__33834__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33753);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33752){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33844 = cljs.core.keyword_identical_QMARK_;
var expr__33845 = k__4470__auto__;
if(cljs.core.truth_((pred__33844.cljs$core$IFn$_invoke$arity$2 ? pred__33844.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33845) : pred__33844.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33845)))){
return (new shadow.dom.Coordinate(G__33752,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33844.cljs$core$IFn$_invoke$arity$2 ? pred__33844.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33845) : pred__33844.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33845)))){
return (new shadow.dom.Coordinate(self__.x,G__33752,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33752),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33752){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33752,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33758){
var extmap__4501__auto__ = (function (){var G__33879 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33758,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33758)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33879);
} else {
return G__33879;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33758),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33758),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33914,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33937 = k33914;
var G__33937__$1 = (((G__33937 instanceof cljs.core.Keyword))?G__33937.fqn:null);
switch (G__33937__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33914,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33956){
var vec__33958 = p__33956;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33913){
var self__ = this;
var G__33913__$1 = this;
return (new cljs.core.RecordIter((0),G__33913__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33915,other33916){
var self__ = this;
var this33915__$1 = this;
return (((!((other33916 == null)))) && ((((this33915__$1.constructor === other33916.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.w,other33916.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.h,other33916.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33915__$1.__extmap,other33916.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33914){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34007 = k33914;
var G__34007__$1 = (((G__34007 instanceof cljs.core.Keyword))?G__34007.fqn:null);
switch (G__34007__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33914);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33913){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34012 = cljs.core.keyword_identical_QMARK_;
var expr__34013 = k__4470__auto__;
if(cljs.core.truth_((pred__34012.cljs$core$IFn$_invoke$arity$2 ? pred__34012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34013) : pred__34012.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34013)))){
return (new shadow.dom.Size(G__33913,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34012.cljs$core$IFn$_invoke$arity$2 ? pred__34012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34013) : pred__34012.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34013)))){
return (new shadow.dom.Size(self__.w,G__33913,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33913),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33913){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33913,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33923){
var extmap__4501__auto__ = (function (){var G__34033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33923,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33923)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34033);
} else {
return G__34033;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33923),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33923),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34803 = (i + (1));
var G__34804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34803;
ret = G__34804;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34076){
var vec__34077 = p__34076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34077,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34089 = arguments.length;
switch (G__34089) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34815 = ps;
var G__34816 = (i + (1));
el__$1 = G__34815;
i = G__34816;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34106 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34118_34823 = cljs.core.seq(props);
var chunk__34119_34824 = null;
var count__34120_34825 = (0);
var i__34121_34826 = (0);
while(true){
if((i__34121_34826 < count__34120_34825)){
var vec__34139_34827 = chunk__34119_34824.cljs$core$IIndexed$_nth$arity$2(null,i__34121_34826);
var k_34828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139_34827,(0),null);
var v_34829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139_34827,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34828);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34828),v_34829);


var G__34833 = seq__34118_34823;
var G__34834 = chunk__34119_34824;
var G__34835 = count__34120_34825;
var G__34836 = (i__34121_34826 + (1));
seq__34118_34823 = G__34833;
chunk__34119_34824 = G__34834;
count__34120_34825 = G__34835;
i__34121_34826 = G__34836;
continue;
} else {
var temp__5753__auto___34837 = cljs.core.seq(seq__34118_34823);
if(temp__5753__auto___34837){
var seq__34118_34838__$1 = temp__5753__auto___34837;
if(cljs.core.chunked_seq_QMARK_(seq__34118_34838__$1)){
var c__4638__auto___34839 = cljs.core.chunk_first(seq__34118_34838__$1);
var G__34840 = cljs.core.chunk_rest(seq__34118_34838__$1);
var G__34841 = c__4638__auto___34839;
var G__34842 = cljs.core.count(c__4638__auto___34839);
var G__34843 = (0);
seq__34118_34823 = G__34840;
chunk__34119_34824 = G__34841;
count__34120_34825 = G__34842;
i__34121_34826 = G__34843;
continue;
} else {
var vec__34146_34844 = cljs.core.first(seq__34118_34838__$1);
var k_34845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146_34844,(0),null);
var v_34846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146_34844,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34845);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34845),v_34846);


var G__34847 = cljs.core.next(seq__34118_34838__$1);
var G__34848 = null;
var G__34849 = (0);
var G__34850 = (0);
seq__34118_34823 = G__34847;
chunk__34119_34824 = G__34848;
count__34120_34825 = G__34849;
i__34121_34826 = G__34850;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34156 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34156,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34156,(1),null);
var seq__34160_34855 = cljs.core.seq(node_children);
var chunk__34162_34856 = null;
var count__34163_34857 = (0);
var i__34164_34858 = (0);
while(true){
if((i__34164_34858 < count__34163_34857)){
var child_struct_34860 = chunk__34162_34856.cljs$core$IIndexed$_nth$arity$2(null,i__34164_34858);
if((!((child_struct_34860 == null)))){
if(typeof child_struct_34860 === 'string'){
var text_34864 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34864),child_struct_34860].join(''));
} else {
var children_34865 = shadow.dom.svg_node(child_struct_34860);
if(cljs.core.seq_QMARK_(children_34865)){
var seq__34210_34867 = cljs.core.seq(children_34865);
var chunk__34212_34868 = null;
var count__34213_34869 = (0);
var i__34214_34870 = (0);
while(true){
if((i__34214_34870 < count__34213_34869)){
var child_34871 = chunk__34212_34868.cljs$core$IIndexed$_nth$arity$2(null,i__34214_34870);
if(cljs.core.truth_(child_34871)){
node.appendChild(child_34871);


var G__34875 = seq__34210_34867;
var G__34876 = chunk__34212_34868;
var G__34877 = count__34213_34869;
var G__34878 = (i__34214_34870 + (1));
seq__34210_34867 = G__34875;
chunk__34212_34868 = G__34876;
count__34213_34869 = G__34877;
i__34214_34870 = G__34878;
continue;
} else {
var G__34879 = seq__34210_34867;
var G__34880 = chunk__34212_34868;
var G__34881 = count__34213_34869;
var G__34882 = (i__34214_34870 + (1));
seq__34210_34867 = G__34879;
chunk__34212_34868 = G__34880;
count__34213_34869 = G__34881;
i__34214_34870 = G__34882;
continue;
}
} else {
var temp__5753__auto___34883 = cljs.core.seq(seq__34210_34867);
if(temp__5753__auto___34883){
var seq__34210_34884__$1 = temp__5753__auto___34883;
if(cljs.core.chunked_seq_QMARK_(seq__34210_34884__$1)){
var c__4638__auto___34885 = cljs.core.chunk_first(seq__34210_34884__$1);
var G__34886 = cljs.core.chunk_rest(seq__34210_34884__$1);
var G__34887 = c__4638__auto___34885;
var G__34888 = cljs.core.count(c__4638__auto___34885);
var G__34889 = (0);
seq__34210_34867 = G__34886;
chunk__34212_34868 = G__34887;
count__34213_34869 = G__34888;
i__34214_34870 = G__34889;
continue;
} else {
var child_34890 = cljs.core.first(seq__34210_34884__$1);
if(cljs.core.truth_(child_34890)){
node.appendChild(child_34890);


var G__34891 = cljs.core.next(seq__34210_34884__$1);
var G__34892 = null;
var G__34893 = (0);
var G__34894 = (0);
seq__34210_34867 = G__34891;
chunk__34212_34868 = G__34892;
count__34213_34869 = G__34893;
i__34214_34870 = G__34894;
continue;
} else {
var G__34895 = cljs.core.next(seq__34210_34884__$1);
var G__34896 = null;
var G__34897 = (0);
var G__34898 = (0);
seq__34210_34867 = G__34895;
chunk__34212_34868 = G__34896;
count__34213_34869 = G__34897;
i__34214_34870 = G__34898;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34865);
}
}


var G__34899 = seq__34160_34855;
var G__34900 = chunk__34162_34856;
var G__34901 = count__34163_34857;
var G__34902 = (i__34164_34858 + (1));
seq__34160_34855 = G__34899;
chunk__34162_34856 = G__34900;
count__34163_34857 = G__34901;
i__34164_34858 = G__34902;
continue;
} else {
var G__34903 = seq__34160_34855;
var G__34904 = chunk__34162_34856;
var G__34905 = count__34163_34857;
var G__34906 = (i__34164_34858 + (1));
seq__34160_34855 = G__34903;
chunk__34162_34856 = G__34904;
count__34163_34857 = G__34905;
i__34164_34858 = G__34906;
continue;
}
} else {
var temp__5753__auto___34908 = cljs.core.seq(seq__34160_34855);
if(temp__5753__auto___34908){
var seq__34160_34909__$1 = temp__5753__auto___34908;
if(cljs.core.chunked_seq_QMARK_(seq__34160_34909__$1)){
var c__4638__auto___34910 = cljs.core.chunk_first(seq__34160_34909__$1);
var G__34911 = cljs.core.chunk_rest(seq__34160_34909__$1);
var G__34912 = c__4638__auto___34910;
var G__34913 = cljs.core.count(c__4638__auto___34910);
var G__34914 = (0);
seq__34160_34855 = G__34911;
chunk__34162_34856 = G__34912;
count__34163_34857 = G__34913;
i__34164_34858 = G__34914;
continue;
} else {
var child_struct_34915 = cljs.core.first(seq__34160_34909__$1);
if((!((child_struct_34915 == null)))){
if(typeof child_struct_34915 === 'string'){
var text_34916 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34916),child_struct_34915].join(''));
} else {
var children_34920 = shadow.dom.svg_node(child_struct_34915);
if(cljs.core.seq_QMARK_(children_34920)){
var seq__34277_34921 = cljs.core.seq(children_34920);
var chunk__34279_34922 = null;
var count__34280_34923 = (0);
var i__34281_34924 = (0);
while(true){
if((i__34281_34924 < count__34280_34923)){
var child_34925 = chunk__34279_34922.cljs$core$IIndexed$_nth$arity$2(null,i__34281_34924);
if(cljs.core.truth_(child_34925)){
node.appendChild(child_34925);


var G__34926 = seq__34277_34921;
var G__34927 = chunk__34279_34922;
var G__34928 = count__34280_34923;
var G__34929 = (i__34281_34924 + (1));
seq__34277_34921 = G__34926;
chunk__34279_34922 = G__34927;
count__34280_34923 = G__34928;
i__34281_34924 = G__34929;
continue;
} else {
var G__34932 = seq__34277_34921;
var G__34933 = chunk__34279_34922;
var G__34934 = count__34280_34923;
var G__34935 = (i__34281_34924 + (1));
seq__34277_34921 = G__34932;
chunk__34279_34922 = G__34933;
count__34280_34923 = G__34934;
i__34281_34924 = G__34935;
continue;
}
} else {
var temp__5753__auto___34938__$1 = cljs.core.seq(seq__34277_34921);
if(temp__5753__auto___34938__$1){
var seq__34277_34939__$1 = temp__5753__auto___34938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34277_34939__$1)){
var c__4638__auto___34940 = cljs.core.chunk_first(seq__34277_34939__$1);
var G__34941 = cljs.core.chunk_rest(seq__34277_34939__$1);
var G__34942 = c__4638__auto___34940;
var G__34943 = cljs.core.count(c__4638__auto___34940);
var G__34944 = (0);
seq__34277_34921 = G__34941;
chunk__34279_34922 = G__34942;
count__34280_34923 = G__34943;
i__34281_34924 = G__34944;
continue;
} else {
var child_34945 = cljs.core.first(seq__34277_34939__$1);
if(cljs.core.truth_(child_34945)){
node.appendChild(child_34945);


var G__34952 = cljs.core.next(seq__34277_34939__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__34277_34921 = G__34952;
chunk__34279_34922 = G__34953;
count__34280_34923 = G__34954;
i__34281_34924 = G__34955;
continue;
} else {
var G__34956 = cljs.core.next(seq__34277_34939__$1);
var G__34957 = null;
var G__34958 = (0);
var G__34959 = (0);
seq__34277_34921 = G__34956;
chunk__34279_34922 = G__34957;
count__34280_34923 = G__34958;
i__34281_34924 = G__34959;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34920);
}
}


var G__34960 = cljs.core.next(seq__34160_34909__$1);
var G__34961 = null;
var G__34962 = (0);
var G__34963 = (0);
seq__34160_34855 = G__34960;
chunk__34162_34856 = G__34961;
count__34163_34857 = G__34962;
i__34164_34858 = G__34963;
continue;
} else {
var G__34964 = cljs.core.next(seq__34160_34909__$1);
var G__34965 = null;
var G__34966 = (0);
var G__34967 = (0);
seq__34160_34855 = G__34964;
chunk__34162_34856 = G__34965;
count__34163_34857 = G__34966;
i__34164_34858 = G__34967;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34976 = arguments.length;
var i__4819__auto___34977 = (0);
while(true){
if((i__4819__auto___34977 < len__4818__auto___34976)){
args__4824__auto__.push((arguments[i__4819__auto___34977]));

var G__34980 = (i__4819__auto___34977 + (1));
i__4819__auto___34977 = G__34980;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34308){
var G__34309 = cljs.core.first(seq34308);
var seq34308__$1 = cljs.core.next(seq34308);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34309,seq34308__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34330 = arguments.length;
switch (G__34330) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__28991__auto___34987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_34359){
var state_val_34360 = (state_34359[(1)]);
if((state_val_34360 === (1))){
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34359__$1,(2),once_or_cleanup);
} else {
if((state_val_34360 === (2))){
var inst_34356 = (state_34359[(2)]);
var inst_34357 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34359__$1 = (function (){var statearr_34361 = state_34359;
(statearr_34361[(7)] = inst_34356);

return statearr_34361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34359__$1,inst_34357);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28489__auto__ = null;
var shadow$dom$state_machine__28489__auto____0 = (function (){
var statearr_34362 = [null,null,null,null,null,null,null,null];
(statearr_34362[(0)] = shadow$dom$state_machine__28489__auto__);

(statearr_34362[(1)] = (1));

return statearr_34362;
});
var shadow$dom$state_machine__28489__auto____1 = (function (state_34359){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_34359);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e34364){var ex__28492__auto__ = e34364;
var statearr_34365_34988 = state_34359;
(statearr_34365_34988[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_34359[(4)]))){
var statearr_34370_34989 = state_34359;
(statearr_34370_34989[(1)] = cljs.core.first((state_34359[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34990 = state_34359;
state_34359 = G__34990;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
shadow$dom$state_machine__28489__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28489__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28489__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28489__auto____0;
shadow$dom$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28489__auto____1;
return shadow$dom$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_34388 = f__28992__auto__();
(statearr_34388[(6)] = c__28991__auto___34987);

return statearr_34388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
