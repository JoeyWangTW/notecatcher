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
var seq__5881_5914 = cljs.core.seq(x);
var chunk__5882_5915 = null;
var count__5883_5916 = (0);
var i__5884_5917 = (0);
while(true){
if((i__5884_5917 < count__5883_5916)){
var vec__5891_5918 = chunk__5882_5915.cljs$core$IIndexed$_nth$arity$2(null,i__5884_5917);
var k_5919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5891_5918,(0),null);
var v_5920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5891_5918,(1),null);
goog.object.set(m,cljs.core.name(k_5919),v_5920);


var G__5921 = seq__5881_5914;
var G__5922 = chunk__5882_5915;
var G__5923 = count__5883_5916;
var G__5924 = (i__5884_5917 + (1));
seq__5881_5914 = G__5921;
chunk__5882_5915 = G__5922;
count__5883_5916 = G__5923;
i__5884_5917 = G__5924;
continue;
} else {
var temp__5753__auto___5925 = cljs.core.seq(seq__5881_5914);
if(temp__5753__auto___5925){
var seq__5881_5926__$1 = temp__5753__auto___5925;
if(cljs.core.chunked_seq_QMARK_(seq__5881_5926__$1)){
var c__4638__auto___5927 = cljs.core.chunk_first(seq__5881_5926__$1);
var G__5928 = cljs.core.chunk_rest(seq__5881_5926__$1);
var G__5929 = c__4638__auto___5927;
var G__5930 = cljs.core.count(c__4638__auto___5927);
var G__5931 = (0);
seq__5881_5914 = G__5928;
chunk__5882_5915 = G__5929;
count__5883_5916 = G__5930;
i__5884_5917 = G__5931;
continue;
} else {
var vec__5894_5932 = cljs.core.first(seq__5881_5926__$1);
var k_5933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5894_5932,(0),null);
var v_5934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5894_5932,(1),null);
goog.object.set(m,cljs.core.name(k_5933),v_5934);


var G__5935 = cljs.core.next(seq__5881_5926__$1);
var G__5936 = null;
var G__5937 = (0);
var G__5938 = (0);
seq__5881_5914 = G__5935;
chunk__5882_5915 = G__5936;
count__5883_5916 = G__5937;
i__5884_5917 = G__5938;
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
var vec__5897 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__5900){
var vec__5901 = p__5900;
var seq__5902 = cljs.core.seq(vec__5901);
var first__5903 = cljs.core.first(seq__5902);
var seq__5902__$1 = cljs.core.next(seq__5902);
var _ = first__5903;
var first__5903__$1 = cljs.core.first(seq__5902__$1);
var seq__5902__$2 = cljs.core.next(seq__5902__$1);
var attrs = first__5903__$1;
var children = seq__5902__$2;
var vec__5904 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5904,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5904,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__5907){
var vec__5908 = p__5907;
var seq__5909 = cljs.core.seq(vec__5908);
var first__5910 = cljs.core.first(seq__5909);
var seq__5909__$1 = cljs.core.next(seq__5909);
var _ = first__5910;
var first__5910__$1 = cljs.core.first(seq__5909__$1);
var seq__5909__$2 = cljs.core.next(seq__5909__$1);
var component = first__5910__$1;
var first__5910__$2 = cljs.core.first(seq__5909__$2);
var seq__5909__$3 = cljs.core.next(seq__5909__$2);
var attrs = first__5910__$2;
var children = seq__5909__$3;
var vec__5911 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5911,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5911,(1),null);
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
