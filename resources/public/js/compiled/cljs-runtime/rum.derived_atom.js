goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35625 = arguments.length;
switch (G__35625) {
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
var map__35645 = opts;
var map__35645__$1 = cljs.core.__destructure_map(map__35645);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35645__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35651 = cljs.core.count(refs);
switch (G__35651) {
case (1):
var vec__35655 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(0),null);
return (function (){
var G__35658 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35658) : f.call(null,G__35658));
});

break;
case (2):
var vec__35659 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(1),null);
return (function (){
var G__35662 = cljs.core.deref(a);
var G__35663 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35662,G__35663) : f.call(null,G__35662,G__35663));
});

break;
case (3):
var vec__35664 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35664,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35664,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35664,(2),null);
return (function (){
var G__35671 = cljs.core.deref(a);
var G__35672 = cljs.core.deref(b);
var G__35673 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35671,G__35672,G__35673) : f.call(null,G__35671,G__35672,G__35673));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35682 = ref;
cljs.core.reset_BANG_(G__35682,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__35682;
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
var seq__35692_35763 = cljs.core.seq(refs);
var chunk__35693_35764 = null;
var count__35694_35765 = (0);
var i__35695_35766 = (0);
while(true){
if((i__35695_35766 < count__35694_35765)){
var ref_35767__$1 = chunk__35693_35764.cljs$core$IIndexed$_nth$arity$2(null,i__35695_35766);
cljs.core.add_watch(ref_35767__$1,key,watch);


var G__35768 = seq__35692_35763;
var G__35769 = chunk__35693_35764;
var G__35770 = count__35694_35765;
var G__35771 = (i__35695_35766 + (1));
seq__35692_35763 = G__35768;
chunk__35693_35764 = G__35769;
count__35694_35765 = G__35770;
i__35695_35766 = G__35771;
continue;
} else {
var temp__5753__auto___35772 = cljs.core.seq(seq__35692_35763);
if(temp__5753__auto___35772){
var seq__35692_35777__$1 = temp__5753__auto___35772;
if(cljs.core.chunked_seq_QMARK_(seq__35692_35777__$1)){
var c__4638__auto___35778 = cljs.core.chunk_first(seq__35692_35777__$1);
var G__35779 = cljs.core.chunk_rest(seq__35692_35777__$1);
var G__35780 = c__4638__auto___35778;
var G__35781 = cljs.core.count(c__4638__auto___35778);
var G__35782 = (0);
seq__35692_35763 = G__35779;
chunk__35693_35764 = G__35780;
count__35694_35765 = G__35781;
i__35695_35766 = G__35782;
continue;
} else {
var ref_35783__$1 = cljs.core.first(seq__35692_35777__$1);
cljs.core.add_watch(ref_35783__$1,key,watch);


var G__35784 = cljs.core.next(seq__35692_35777__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35692_35763 = G__35784;
chunk__35693_35764 = G__35785;
count__35694_35765 = G__35786;
i__35695_35766 = G__35787;
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
