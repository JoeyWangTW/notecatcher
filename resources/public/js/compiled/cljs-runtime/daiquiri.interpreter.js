goog.provide('daiquiri.interpreter');
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__35428_35501 = cljs.core.seq(x);
var chunk__35429_35502 = null;
var count__35430_35503 = (0);
var i__35431_35504 = (0);
while(true){
if((i__35431_35504 < count__35430_35503)){
var vec__35447_35509 = chunk__35429_35502.cljs$core$IIndexed$_nth$arity$2(null,i__35431_35504);
var k_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447_35509,(0),null);
var v_35511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447_35509,(1),null);
goog.object.set(m,cljs.core.name(k_35510),v_35511);


var G__35522 = seq__35428_35501;
var G__35523 = chunk__35429_35502;
var G__35524 = count__35430_35503;
var G__35525 = (i__35431_35504 + (1));
seq__35428_35501 = G__35522;
chunk__35429_35502 = G__35523;
count__35430_35503 = G__35524;
i__35431_35504 = G__35525;
continue;
} else {
var temp__5753__auto___35528 = cljs.core.seq(seq__35428_35501);
if(temp__5753__auto___35528){
var seq__35428_35530__$1 = temp__5753__auto___35528;
if(cljs.core.chunked_seq_QMARK_(seq__35428_35530__$1)){
var c__4638__auto___35531 = cljs.core.chunk_first(seq__35428_35530__$1);
var G__35536 = cljs.core.chunk_rest(seq__35428_35530__$1);
var G__35537 = c__4638__auto___35531;
var G__35538 = cljs.core.count(c__4638__auto___35531);
var G__35539 = (0);
seq__35428_35501 = G__35536;
chunk__35429_35502 = G__35537;
count__35430_35503 = G__35538;
i__35431_35504 = G__35539;
continue;
} else {
var vec__35450_35541 = cljs.core.first(seq__35428_35530__$1);
var k_35542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450_35541,(0),null);
var v_35543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450_35541,(1),null);
goog.object.set(m,cljs.core.name(k_35542),v_35543);


var G__35550 = cljs.core.next(seq__35428_35530__$1);
var G__35551 = null;
var G__35552 = (0);
var G__35553 = (0);
seq__35428_35501 = G__35550;
chunk__35429_35502 = G__35551;
count__35430_35503 = G__35552;
i__35431_35504 = G__35553;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__35462 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__35466){
var vec__35467 = p__35466;
var seq__35468 = cljs.core.seq(vec__35467);
var first__35469 = cljs.core.first(seq__35468);
var seq__35468__$1 = cljs.core.next(seq__35468);
var _ = first__35469;
var first__35469__$1 = cljs.core.first(seq__35468__$1);
var seq__35468__$2 = cljs.core.next(seq__35468__$1);
var attrs = first__35469__$1;
var children = seq__35468__$2;
var vec__35471 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__35478){
var vec__35482 = p__35478;
var seq__35483 = cljs.core.seq(vec__35482);
var first__35484 = cljs.core.first(seq__35483);
var seq__35483__$1 = cljs.core.next(seq__35483);
var _ = first__35484;
var first__35484__$1 = cljs.core.first(seq__35483__$1);
var seq__35483__$2 = cljs.core.next(seq__35483__$1);
var component = first__35484__$1;
var first__35484__$2 = cljs.core.first(seq__35483__$2);
var seq__35483__$3 = cljs.core.next(seq__35483__$2);
var attrs = first__35484__$2;
var children = seq__35483__$3;
var vec__35486 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35486,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
