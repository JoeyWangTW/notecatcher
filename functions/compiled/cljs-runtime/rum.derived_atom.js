goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__5790 = arguments.length;
switch (G__5790) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__5801 = opts;
var map__5801__$1 = cljs.core.__destructure_map(map__5801);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5801__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5801__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__5804 = cljs.core.count(refs);
switch (G__5804) {
case (1):
var vec__5805 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5805,(0),null);
return (function (){
var G__5808 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__5808) : f.call(null,G__5808));
});

break;
case (2):
var vec__5809 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5809,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5809,(1),null);
return (function (){
var G__5812 = cljs.core.deref(a);
var G__5813 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__5812,G__5813) : f.call(null,G__5812,G__5813));
});

break;
case (3):
var vec__5814 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5814,(2),null);
return (function (){
var G__5817 = cljs.core.deref(a);
var G__5818 = cljs.core.deref(b);
var G__5819 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__5817,G__5818,G__5819) : f.call(null,G__5817,G__5818,G__5819));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__5823 = ref;
cljs.core.reset_BANG_(G__5823,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__5823;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__5830_5837 = cljs.core.seq(refs);
var chunk__5831_5838 = null;
var count__5832_5839 = (0);
var i__5833_5840 = (0);
while(true){
if((i__5833_5840 < count__5832_5839)){
var ref_5841__$1 = chunk__5831_5838.cljs$core$IIndexed$_nth$arity$2(null,i__5833_5840);
cljs.core.add_watch(ref_5841__$1,key,watch);


var G__5842 = seq__5830_5837;
var G__5843 = chunk__5831_5838;
var G__5844 = count__5832_5839;
var G__5845 = (i__5833_5840 + (1));
seq__5830_5837 = G__5842;
chunk__5831_5838 = G__5843;
count__5832_5839 = G__5844;
i__5833_5840 = G__5845;
continue;
} else {
var temp__5753__auto___5846 = cljs.core.seq(seq__5830_5837);
if(temp__5753__auto___5846){
var seq__5830_5847__$1 = temp__5753__auto___5846;
if(cljs.core.chunked_seq_QMARK_(seq__5830_5847__$1)){
var c__4638__auto___5848 = cljs.core.chunk_first(seq__5830_5847__$1);
var G__5849 = cljs.core.chunk_rest(seq__5830_5847__$1);
var G__5850 = c__4638__auto___5848;
var G__5851 = cljs.core.count(c__4638__auto___5848);
var G__5852 = (0);
seq__5830_5837 = G__5849;
chunk__5831_5838 = G__5850;
count__5832_5839 = G__5851;
i__5833_5840 = G__5852;
continue;
} else {
var ref_5853__$1 = cljs.core.first(seq__5830_5847__$1);
cljs.core.add_watch(ref_5853__$1,key,watch);


var G__5854 = cljs.core.next(seq__5830_5847__$1);
var G__5855 = null;
var G__5856 = (0);
var G__5857 = (0);
seq__5830_5837 = G__5854;
chunk__5831_5838 = G__5855;
count__5832_5839 = G__5856;
i__5833_5840 = G__5857;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
