goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34999,p__35000){
var map__35001 = p__34999;
var map__35001__$1 = cljs.core.__destructure_map(map__35001);
var svc = map__35001__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35001__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35001__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35001__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35002 = p__35000;
var map__35002__$1 = cljs.core.__destructure_map(map__35002);
var msg = map__35002__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35002__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35009,p__35010){
var map__35014 = p__35009;
var map__35014__$1 = cljs.core.__destructure_map(map__35014);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35014__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35015 = p__35010;
var map__35015__$1 = cljs.core.__destructure_map(map__35015);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35015__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35018,p__35019){
var map__35021 = p__35018;
var map__35021__$1 = cljs.core.__destructure_map(map__35021);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35021__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35021__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35022 = p__35019;
var map__35022__$1 = cljs.core.__destructure_map(map__35022);
var msg = map__35022__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35022__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35026,tid){
var map__35027 = p__35026;
var map__35027__$1 = cljs.core.__destructure_map(map__35027);
var svc = map__35027__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35027__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35037 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35038 = null;
var count__35039 = (0);
var i__35040 = (0);
while(true){
if((i__35040 < count__35039)){
var vec__35056 = chunk__35038.cljs$core$IIndexed$_nth$arity$2(null,i__35040);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35076 = seq__35037;
var G__35077 = chunk__35038;
var G__35078 = count__35039;
var G__35079 = (i__35040 + (1));
seq__35037 = G__35076;
chunk__35038 = G__35077;
count__35039 = G__35078;
i__35040 = G__35079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35037);
if(temp__5753__auto__){
var seq__35037__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35037__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35037__$1);
var G__35080 = cljs.core.chunk_rest(seq__35037__$1);
var G__35081 = c__4638__auto__;
var G__35082 = cljs.core.count(c__4638__auto__);
var G__35083 = (0);
seq__35037 = G__35080;
chunk__35038 = G__35081;
count__35039 = G__35082;
i__35040 = G__35083;
continue;
} else {
var vec__35060 = cljs.core.first(seq__35037__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35084 = cljs.core.next(seq__35037__$1);
var G__35085 = null;
var G__35086 = (0);
var G__35087 = (0);
seq__35037 = G__35084;
chunk__35038 = G__35085;
count__35039 = G__35086;
i__35040 = G__35087;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35028_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35028_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35029_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35029_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35030_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35030_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35031_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35031_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35071){
var map__35072 = p__35071;
var map__35072__$1 = cljs.core.__destructure_map(map__35072);
var svc = map__35072__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35072__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35072__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
