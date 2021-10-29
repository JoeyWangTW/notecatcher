goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31768,res){
var map__31769 = p__31768;
var map__31769__$1 = cljs.core.__destructure_map(map__31769);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31769__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31769__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31770 = res;
var G__31770__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31770,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31770);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31770__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31770__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31788,msg,handlers,timeout_after_ms){
var map__31789 = p__31788;
var map__31789__$1 = cljs.core.__destructure_map(map__31789);
var runtime = map__31789__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32026 = arguments.length;
var i__4819__auto___32027 = (0);
while(true){
if((i__4819__auto___32027 < len__4818__auto___32026)){
args__4824__auto__.push((arguments[i__4819__auto___32027]));

var G__32028 = (i__4819__auto___32027 + (1));
i__4819__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31793,ev,args){
var map__31794 = p__31793;
var map__31794__$1 = cljs.core.__destructure_map(map__31794);
var runtime = map__31794__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31794__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31795 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31798 = null;
var count__31799 = (0);
var i__31800 = (0);
while(true){
if((i__31800 < count__31799)){
var ext = chunk__31798.cljs$core$IIndexed$_nth$arity$2(null,i__31800);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32039 = seq__31795;
var G__32040 = chunk__31798;
var G__32041 = count__31799;
var G__32042 = (i__31800 + (1));
seq__31795 = G__32039;
chunk__31798 = G__32040;
count__31799 = G__32041;
i__31800 = G__32042;
continue;
} else {
var G__32043 = seq__31795;
var G__32044 = chunk__31798;
var G__32045 = count__31799;
var G__32046 = (i__31800 + (1));
seq__31795 = G__32043;
chunk__31798 = G__32044;
count__31799 = G__32045;
i__31800 = G__32046;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31795);
if(temp__5753__auto__){
var seq__31795__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31795__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31795__$1);
var G__32048 = cljs.core.chunk_rest(seq__31795__$1);
var G__32049 = c__4638__auto__;
var G__32050 = cljs.core.count(c__4638__auto__);
var G__32051 = (0);
seq__31795 = G__32048;
chunk__31798 = G__32049;
count__31799 = G__32050;
i__31800 = G__32051;
continue;
} else {
var ext = cljs.core.first(seq__31795__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32052 = cljs.core.next(seq__31795__$1);
var G__32053 = null;
var G__32054 = (0);
var G__32055 = (0);
seq__31795 = G__32052;
chunk__31798 = G__32053;
count__31799 = G__32054;
i__31800 = G__32055;
continue;
} else {
var G__32056 = cljs.core.next(seq__31795__$1);
var G__32057 = null;
var G__32058 = (0);
var G__32059 = (0);
seq__31795 = G__32056;
chunk__31798 = G__32057;
count__31799 = G__32058;
i__31800 = G__32059;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31790){
var G__31791 = cljs.core.first(seq31790);
var seq31790__$1 = cljs.core.next(seq31790);
var G__31792 = cljs.core.first(seq31790__$1);
var seq31790__$2 = cljs.core.next(seq31790__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31791,G__31792,seq31790__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31820,p__31821){
var map__31822 = p__31820;
var map__31822__$1 = cljs.core.__destructure_map(map__31822);
var runtime = map__31822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31823 = p__31821;
var map__31823__$1 = cljs.core.__destructure_map(map__31823);
var msg = map__31823__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31823__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31824 = cljs.core.deref(state_ref);
var map__31824__$1 = cljs.core.__destructure_map(map__31824);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31824__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31824__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31835){
var map__31836 = p__31835;
var map__31836__$1 = cljs.core.__destructure_map(map__31836);
var runtime = map__31836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31838,msg){
var map__31839 = p__31838;
var map__31839__$1 = cljs.core.__destructure_map(map__31839);
var runtime = map__31839__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31839__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31857,key,p__31858){
var map__31859 = p__31857;
var map__31859__$1 = cljs.core.__destructure_map(map__31859);
var state = map__31859__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31859__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31860 = p__31858;
var map__31860__$1 = cljs.core.__destructure_map(map__31860);
var spec = map__31860__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31860__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31877,key,spec){
var map__31879 = p__31877;
var map__31879__$1 = cljs.core.__destructure_map(map__31879);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31883_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31883_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31884_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31884_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31885_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31885_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31886_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31886_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31887_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31887_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31901,key){
var map__31902 = p__31901;
var map__31902__$1 = cljs.core.__destructure_map(map__31902);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31902__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31916,msg){
var map__31917 = p__31916;
var map__31917__$1 = cljs.core.__destructure_map(map__31917);
var runtime = map__31917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31922,p__31923){
var map__31924 = p__31922;
var map__31924__$1 = cljs.core.__destructure_map(map__31924);
var runtime = map__31924__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31925 = p__31923;
var map__31925__$1 = cljs.core.__destructure_map(map__31925);
var msg = map__31925__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31925__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31925__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31954 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31956 = null;
var count__31957 = (0);
var i__31958 = (0);
while(true){
if((i__31958 < count__31957)){
var map__31985 = chunk__31956.cljs$core$IIndexed$_nth$arity$2(null,i__31958);
var map__31985__$1 = cljs.core.__destructure_map(map__31985);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31985__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32159 = seq__31954;
var G__32160 = chunk__31956;
var G__32161 = count__31957;
var G__32162 = (i__31958 + (1));
seq__31954 = G__32159;
chunk__31956 = G__32160;
count__31957 = G__32161;
i__31958 = G__32162;
continue;
} else {
var G__32163 = seq__31954;
var G__32164 = chunk__31956;
var G__32165 = count__31957;
var G__32166 = (i__31958 + (1));
seq__31954 = G__32163;
chunk__31956 = G__32164;
count__31957 = G__32165;
i__31958 = G__32166;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31954);
if(temp__5753__auto__){
var seq__31954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31954__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__31954__$1);
var G__32167 = cljs.core.chunk_rest(seq__31954__$1);
var G__32168 = c__4638__auto__;
var G__32169 = cljs.core.count(c__4638__auto__);
var G__32170 = (0);
seq__31954 = G__32167;
chunk__31956 = G__32168;
count__31957 = G__32169;
i__31958 = G__32170;
continue;
} else {
var map__32000 = cljs.core.first(seq__31954__$1);
var map__32000__$1 = cljs.core.__destructure_map(map__32000);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32000__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32171 = cljs.core.next(seq__31954__$1);
var G__32172 = null;
var G__32173 = (0);
var G__32174 = (0);
seq__31954 = G__32171;
chunk__31956 = G__32172;
count__31957 = G__32173;
i__31958 = G__32174;
continue;
} else {
var G__32175 = cljs.core.next(seq__31954__$1);
var G__32176 = null;
var G__32177 = (0);
var G__32178 = (0);
seq__31954 = G__32175;
chunk__31956 = G__32176;
count__31957 = G__32177;
i__31958 = G__32178;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
