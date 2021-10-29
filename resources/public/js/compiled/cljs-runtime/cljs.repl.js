goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34097){
var map__34098 = p__34097;
var map__34098__$1 = cljs.core.__destructure_map(map__34098);
var m = map__34098__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34098__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34098__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34099_34366 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34100_34367 = null;
var count__34101_34368 = (0);
var i__34102_34369 = (0);
while(true){
if((i__34102_34369 < count__34101_34368)){
var f_34371 = chunk__34100_34367.cljs$core$IIndexed$_nth$arity$2(null,i__34102_34369);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34371], 0));


var G__34372 = seq__34099_34366;
var G__34373 = chunk__34100_34367;
var G__34374 = count__34101_34368;
var G__34375 = (i__34102_34369 + (1));
seq__34099_34366 = G__34372;
chunk__34100_34367 = G__34373;
count__34101_34368 = G__34374;
i__34102_34369 = G__34375;
continue;
} else {
var temp__5753__auto___34376 = cljs.core.seq(seq__34099_34366);
if(temp__5753__auto___34376){
var seq__34099_34377__$1 = temp__5753__auto___34376;
if(cljs.core.chunked_seq_QMARK_(seq__34099_34377__$1)){
var c__4638__auto___34378 = cljs.core.chunk_first(seq__34099_34377__$1);
var G__34379 = cljs.core.chunk_rest(seq__34099_34377__$1);
var G__34380 = c__4638__auto___34378;
var G__34381 = cljs.core.count(c__4638__auto___34378);
var G__34382 = (0);
seq__34099_34366 = G__34379;
chunk__34100_34367 = G__34380;
count__34101_34368 = G__34381;
i__34102_34369 = G__34382;
continue;
} else {
var f_34383 = cljs.core.first(seq__34099_34377__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34383], 0));


var G__34384 = cljs.core.next(seq__34099_34377__$1);
var G__34385 = null;
var G__34386 = (0);
var G__34387 = (0);
seq__34099_34366 = G__34384;
chunk__34100_34367 = G__34385;
count__34101_34368 = G__34386;
i__34102_34369 = G__34387;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34389 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34389], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34389)))?cljs.core.second(arglists_34389):arglists_34389)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34110_34391 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34111_34392 = null;
var count__34112_34393 = (0);
var i__34113_34394 = (0);
while(true){
if((i__34113_34394 < count__34112_34393)){
var vec__34134_34395 = chunk__34111_34392.cljs$core$IIndexed$_nth$arity$2(null,i__34113_34394);
var name_34396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134_34395,(0),null);
var map__34137_34397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134_34395,(1),null);
var map__34137_34398__$1 = cljs.core.__destructure_map(map__34137_34397);
var doc_34399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137_34398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137_34398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34400], 0));

if(cljs.core.truth_(doc_34399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34399], 0));
} else {
}


var G__34405 = seq__34110_34391;
var G__34406 = chunk__34111_34392;
var G__34407 = count__34112_34393;
var G__34408 = (i__34113_34394 + (1));
seq__34110_34391 = G__34405;
chunk__34111_34392 = G__34406;
count__34112_34393 = G__34407;
i__34113_34394 = G__34408;
continue;
} else {
var temp__5753__auto___34410 = cljs.core.seq(seq__34110_34391);
if(temp__5753__auto___34410){
var seq__34110_34411__$1 = temp__5753__auto___34410;
if(cljs.core.chunked_seq_QMARK_(seq__34110_34411__$1)){
var c__4638__auto___34412 = cljs.core.chunk_first(seq__34110_34411__$1);
var G__34413 = cljs.core.chunk_rest(seq__34110_34411__$1);
var G__34414 = c__4638__auto___34412;
var G__34415 = cljs.core.count(c__4638__auto___34412);
var G__34416 = (0);
seq__34110_34391 = G__34413;
chunk__34111_34392 = G__34414;
count__34112_34393 = G__34415;
i__34113_34394 = G__34416;
continue;
} else {
var vec__34142_34418 = cljs.core.first(seq__34110_34411__$1);
var name_34419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34142_34418,(0),null);
var map__34145_34420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34142_34418,(1),null);
var map__34145_34421__$1 = cljs.core.__destructure_map(map__34145_34420);
var doc_34422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34145_34421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34145_34421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34419], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34423], 0));

if(cljs.core.truth_(doc_34422)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34422], 0));
} else {
}


var G__34424 = cljs.core.next(seq__34110_34411__$1);
var G__34425 = null;
var G__34426 = (0);
var G__34427 = (0);
seq__34110_34391 = G__34424;
chunk__34111_34392 = G__34425;
count__34112_34393 = G__34426;
i__34113_34394 = G__34427;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34149 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34150 = null;
var count__34151 = (0);
var i__34152 = (0);
while(true){
if((i__34152 < count__34151)){
var role = chunk__34150.cljs$core$IIndexed$_nth$arity$2(null,i__34152);
var temp__5753__auto___34428__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34428__$1)){
var spec_34429 = temp__5753__auto___34428__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34429)], 0));
} else {
}


var G__34430 = seq__34149;
var G__34431 = chunk__34150;
var G__34432 = count__34151;
var G__34433 = (i__34152 + (1));
seq__34149 = G__34430;
chunk__34150 = G__34431;
count__34151 = G__34432;
i__34152 = G__34433;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34149);
if(temp__5753__auto____$1){
var seq__34149__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34149__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34149__$1);
var G__34434 = cljs.core.chunk_rest(seq__34149__$1);
var G__34435 = c__4638__auto__;
var G__34436 = cljs.core.count(c__4638__auto__);
var G__34437 = (0);
seq__34149 = G__34434;
chunk__34150 = G__34435;
count__34151 = G__34436;
i__34152 = G__34437;
continue;
} else {
var role = cljs.core.first(seq__34149__$1);
var temp__5753__auto___34438__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34438__$2)){
var spec_34439 = temp__5753__auto___34438__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34439)], 0));
} else {
}


var G__34441 = cljs.core.next(seq__34149__$1);
var G__34442 = null;
var G__34443 = (0);
var G__34444 = (0);
seq__34149 = G__34441;
chunk__34150 = G__34442;
count__34151 = G__34443;
i__34152 = G__34444;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34446 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34447 = cljs.core.ex_cause(t);
via = G__34446;
t = G__34447;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34206 = datafied_throwable;
var map__34206__$1 = cljs.core.__destructure_map(map__34206);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34206__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34206__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34206__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34207 = cljs.core.last(via);
var map__34207__$1 = cljs.core.__destructure_map(map__34207);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34207__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34207__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34208 = data;
var map__34208__$1 = cljs.core.__destructure_map(map__34208);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34208__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34208__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34208__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34209 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34209__$1 = cljs.core.__destructure_map(map__34209);
var top_data = map__34209__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34209__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34230 = phase;
var G__34230__$1 = (((G__34230 instanceof cljs.core.Keyword))?G__34230.fqn:null);
switch (G__34230__$1) {
case "read-source":
var map__34242 = data;
var map__34242__$1 = cljs.core.__destructure_map(map__34242);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34256 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34256__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34256,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34256);
var G__34256__$2 = (cljs.core.truth_((function (){var fexpr__34257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34257.cljs$core$IFn$_invoke$arity$1 ? fexpr__34257.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34257.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34256__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34256__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34256__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34256__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34258 = top_data;
var G__34258__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34258,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34258);
var G__34258__$2 = (cljs.core.truth_((function (){var fexpr__34263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34263.cljs$core$IFn$_invoke$arity$1 ? fexpr__34263.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34263.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34258__$1);
var G__34258__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34258__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34258__$2);
var G__34258__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34258__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34258__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34258__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34258__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34271 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(3),null);
var G__34276 = top_data;
var G__34276__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34276,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34276);
var G__34276__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34276__$1);
var G__34276__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34276__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34276__$2);
var G__34276__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34276__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34276__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34276__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34276__$4;
}

break;
case "execution":
var vec__34283 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34198_SHARP_){
var or__4212__auto__ = (p1__34198_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34286.cljs$core$IFn$_invoke$arity$1 ? fexpr__34286.cljs$core$IFn$_invoke$arity$1(p1__34198_SHARP_) : fexpr__34286.call(null,p1__34198_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34287 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34287__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34287,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34287);
var G__34287__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34287__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34287__$1);
var G__34287__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34287__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34287__$2);
var G__34287__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34287__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34287__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34287__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34287__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34230__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34298){
var map__34299 = p__34298;
var map__34299__$1 = cljs.core.__destructure_map(map__34299);
var triage_data = map__34299__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34314 = phase;
var G__34314__$1 = (((G__34314 instanceof cljs.core.Keyword))?G__34314.fqn:null);
switch (G__34314__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34315 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34317 = loc;
var G__34318 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34320_34474 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34321_34475 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34322_34476 = true;
var _STAR_print_fn_STAR__temp_val__34323_34477 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34322_34476);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34323_34477);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34288_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34288_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34321_34475);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34320_34474);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34315,G__34316,G__34317,G__34318) : format.call(null,G__34315,G__34316,G__34317,G__34318));

break;
case "macroexpansion":
var G__34325 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34326 = cause_type;
var G__34327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34328 = loc;
var G__34329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34325,G__34326,G__34327,G__34328,G__34329) : format.call(null,G__34325,G__34326,G__34327,G__34328,G__34329));

break;
case "compile-syntax-check":
var G__34331 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34332 = cause_type;
var G__34333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34334 = loc;
var G__34335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34331,G__34332,G__34333,G__34334,G__34335) : format.call(null,G__34331,G__34332,G__34333,G__34334,G__34335));

break;
case "compilation":
var G__34337 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34338 = cause_type;
var G__34339 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34340 = loc;
var G__34341 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34337,G__34338,G__34339,G__34340,G__34341) : format.call(null,G__34337,G__34338,G__34339,G__34340,G__34341));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34342 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34343 = symbol;
var G__34344 = loc;
var G__34345 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34346_34506 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34347_34507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34348_34508 = true;
var _STAR_print_fn_STAR__temp_val__34349_34509 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34348_34508);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34349_34509);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34289_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34289_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34347_34507);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34346_34506);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34342,G__34343,G__34344,G__34345) : format.call(null,G__34342,G__34343,G__34344,G__34345));
} else {
var G__34350 = "Execution error%s at %s(%s).\n%s\n";
var G__34351 = cause_type;
var G__34352 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34353 = loc;
var G__34354 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34350,G__34351,G__34352,G__34353,G__34354) : format.call(null,G__34350,G__34351,G__34352,G__34353,G__34354));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34314__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
