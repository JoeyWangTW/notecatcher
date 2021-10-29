goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37228 = arguments.length;
var i__4819__auto___37229 = (0);
while(true){
if((i__4819__auto___37229 < len__4818__auto___37228)){
args__4824__auto__.push((arguments[i__4819__auto___37229]));

var G__37230 = (i__4819__auto___37229 + (1));
i__4819__auto___37229 = G__37230;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36948){
var G__36949 = cljs.core.first(seq36948);
var seq36948__$1 = cljs.core.next(seq36948);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36949,seq36948__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36954 = cljs.core.seq(sources);
var chunk__36955 = null;
var count__36956 = (0);
var i__36957 = (0);
while(true){
if((i__36957 < count__36956)){
var map__36963 = chunk__36955.cljs$core$IIndexed$_nth$arity$2(null,i__36957);
var map__36963__$1 = cljs.core.__destructure_map(map__36963);
var src = map__36963__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36964){var e_37231 = e36964;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37231);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37231.message)].join('')));
}

var G__37232 = seq__36954;
var G__37233 = chunk__36955;
var G__37234 = count__36956;
var G__37235 = (i__36957 + (1));
seq__36954 = G__37232;
chunk__36955 = G__37233;
count__36956 = G__37234;
i__36957 = G__37235;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36954);
if(temp__5753__auto__){
var seq__36954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36954__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36954__$1);
var G__37236 = cljs.core.chunk_rest(seq__36954__$1);
var G__37237 = c__4638__auto__;
var G__37238 = cljs.core.count(c__4638__auto__);
var G__37239 = (0);
seq__36954 = G__37236;
chunk__36955 = G__37237;
count__36956 = G__37238;
i__36957 = G__37239;
continue;
} else {
var map__36965 = cljs.core.first(seq__36954__$1);
var map__36965__$1 = cljs.core.__destructure_map(map__36965);
var src = map__36965__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36965__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36965__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36965__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36965__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36966){var e_37240 = e36966;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37240);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37240.message)].join('')));
}

var G__37241 = cljs.core.next(seq__36954__$1);
var G__37242 = null;
var G__37243 = (0);
var G__37244 = (0);
seq__36954 = G__37241;
chunk__36955 = G__37242;
count__36956 = G__37243;
i__36957 = G__37244;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36971 = cljs.core.seq(js_requires);
var chunk__36972 = null;
var count__36973 = (0);
var i__36974 = (0);
while(true){
if((i__36974 < count__36973)){
var js_ns = chunk__36972.cljs$core$IIndexed$_nth$arity$2(null,i__36974);
var require_str_37245 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37245);


var G__37246 = seq__36971;
var G__37247 = chunk__36972;
var G__37248 = count__36973;
var G__37249 = (i__36974 + (1));
seq__36971 = G__37246;
chunk__36972 = G__37247;
count__36973 = G__37248;
i__36974 = G__37249;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36971);
if(temp__5753__auto__){
var seq__36971__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36971__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36971__$1);
var G__37250 = cljs.core.chunk_rest(seq__36971__$1);
var G__37251 = c__4638__auto__;
var G__37252 = cljs.core.count(c__4638__auto__);
var G__37253 = (0);
seq__36971 = G__37250;
chunk__36972 = G__37251;
count__36973 = G__37252;
i__36974 = G__37253;
continue;
} else {
var js_ns = cljs.core.first(seq__36971__$1);
var require_str_37254 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37254);


var G__37255 = cljs.core.next(seq__36971__$1);
var G__37256 = null;
var G__37257 = (0);
var G__37258 = (0);
seq__36971 = G__37255;
chunk__36972 = G__37256;
count__36973 = G__37257;
i__36974 = G__37258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36989){
var map__36990 = p__36989;
var map__36990__$1 = cljs.core.__destructure_map(map__36990);
var msg = map__36990__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36990__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36990__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36991(s__36992){
return (new cljs.core.LazySeq(null,(function (){
var s__36992__$1 = s__36992;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36992__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36997 = cljs.core.first(xs__6308__auto__);
var map__36997__$1 = cljs.core.__destructure_map(map__36997);
var src = map__36997__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36997__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36997__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__36992__$1,map__36997,map__36997__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36990,map__36990__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36991_$_iter__36993(s__36994){
return (new cljs.core.LazySeq(null,((function (s__36992__$1,map__36997,map__36997__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36990,map__36990__$1,msg,info,reload_info){
return (function (){
var s__36994__$1 = s__36994;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36994__$1);
if(temp__5753__auto____$1){
var s__36994__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36994__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__36994__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__36996 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__36995 = (0);
while(true){
if((i__36995 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__36995);
cljs.core.chunk_append(b__36996,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37259 = (i__36995 + (1));
i__36995 = G__37259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36996),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36991_$_iter__36993(cljs.core.chunk_rest(s__36994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36996),null);
}
} else {
var warning = cljs.core.first(s__36994__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36991_$_iter__36993(cljs.core.rest(s__36994__$2)));
}
} else {
return null;
}
break;
}
});})(s__36992__$1,map__36997,map__36997__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36990,map__36990__$1,msg,info,reload_info))
,null,null));
});})(s__36992__$1,map__36997,map__36997__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36990,map__36990__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36991(cljs.core.rest(s__36992__$1)));
} else {
var G__37260 = cljs.core.rest(s__36992__$1);
s__36992__$1 = G__37260;
continue;
}
} else {
var G__37261 = cljs.core.rest(s__36992__$1);
s__36992__$1 = G__37261;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37002_37262 = cljs.core.seq(warnings);
var chunk__37003_37263 = null;
var count__37004_37264 = (0);
var i__37005_37265 = (0);
while(true){
if((i__37005_37265 < count__37004_37264)){
var map__37008_37266 = chunk__37003_37263.cljs$core$IIndexed$_nth$arity$2(null,i__37005_37265);
var map__37008_37267__$1 = cljs.core.__destructure_map(map__37008_37266);
var w_37268 = map__37008_37267__$1;
var msg_37269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008_37267__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008_37267__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008_37267__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008_37267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37272)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37270),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37271),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37269__$1)].join(''));


var G__37273 = seq__37002_37262;
var G__37274 = chunk__37003_37263;
var G__37275 = count__37004_37264;
var G__37276 = (i__37005_37265 + (1));
seq__37002_37262 = G__37273;
chunk__37003_37263 = G__37274;
count__37004_37264 = G__37275;
i__37005_37265 = G__37276;
continue;
} else {
var temp__5753__auto___37277 = cljs.core.seq(seq__37002_37262);
if(temp__5753__auto___37277){
var seq__37002_37278__$1 = temp__5753__auto___37277;
if(cljs.core.chunked_seq_QMARK_(seq__37002_37278__$1)){
var c__4638__auto___37279 = cljs.core.chunk_first(seq__37002_37278__$1);
var G__37280 = cljs.core.chunk_rest(seq__37002_37278__$1);
var G__37281 = c__4638__auto___37279;
var G__37282 = cljs.core.count(c__4638__auto___37279);
var G__37283 = (0);
seq__37002_37262 = G__37280;
chunk__37003_37263 = G__37281;
count__37004_37264 = G__37282;
i__37005_37265 = G__37283;
continue;
} else {
var map__37009_37284 = cljs.core.first(seq__37002_37278__$1);
var map__37009_37285__$1 = cljs.core.__destructure_map(map__37009_37284);
var w_37286 = map__37009_37285__$1;
var msg_37287__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009_37285__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009_37285__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009_37285__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37009_37285__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37290)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37288),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37289),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37287__$1)].join(''));


var G__37291 = cljs.core.next(seq__37002_37278__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__37002_37262 = G__37291;
chunk__37003_37263 = G__37292;
count__37004_37264 = G__37293;
i__37005_37265 = G__37294;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36988_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36988_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37018){
var map__37019 = p__37018;
var map__37019__$1 = cljs.core.__destructure_map(map__37019);
var msg = map__37019__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37019__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37020 = cljs.core.seq(updates);
var chunk__37022 = null;
var count__37023 = (0);
var i__37024 = (0);
while(true){
if((i__37024 < count__37023)){
var path = chunk__37022.cljs$core$IIndexed$_nth$arity$2(null,i__37024);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37066_37295 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37070_37296 = null;
var count__37071_37297 = (0);
var i__37072_37298 = (0);
while(true){
if((i__37072_37298 < count__37071_37297)){
var node_37299 = chunk__37070_37296.cljs$core$IIndexed$_nth$arity$2(null,i__37072_37298);
if(cljs.core.not(node_37299.shadow$old)){
var path_match_37300 = shadow.cljs.devtools.client.browser.match_paths(node_37299.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37300)){
var new_link_37301 = (function (){var G__37101 = node_37299.cloneNode(true);
G__37101.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37300),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37101;
})();
(node_37299.shadow$old = true);

(new_link_37301.onload = ((function (seq__37066_37295,chunk__37070_37296,count__37071_37297,i__37072_37298,seq__37020,chunk__37022,count__37023,i__37024,new_link_37301,path_match_37300,node_37299,path,map__37019,map__37019__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37299);
});})(seq__37066_37295,chunk__37070_37296,count__37071_37297,i__37072_37298,seq__37020,chunk__37022,count__37023,i__37024,new_link_37301,path_match_37300,node_37299,path,map__37019,map__37019__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37300], 0));

goog.dom.insertSiblingAfter(new_link_37301,node_37299);


var G__37302 = seq__37066_37295;
var G__37303 = chunk__37070_37296;
var G__37304 = count__37071_37297;
var G__37305 = (i__37072_37298 + (1));
seq__37066_37295 = G__37302;
chunk__37070_37296 = G__37303;
count__37071_37297 = G__37304;
i__37072_37298 = G__37305;
continue;
} else {
var G__37306 = seq__37066_37295;
var G__37307 = chunk__37070_37296;
var G__37308 = count__37071_37297;
var G__37309 = (i__37072_37298 + (1));
seq__37066_37295 = G__37306;
chunk__37070_37296 = G__37307;
count__37071_37297 = G__37308;
i__37072_37298 = G__37309;
continue;
}
} else {
var G__37310 = seq__37066_37295;
var G__37311 = chunk__37070_37296;
var G__37312 = count__37071_37297;
var G__37313 = (i__37072_37298 + (1));
seq__37066_37295 = G__37310;
chunk__37070_37296 = G__37311;
count__37071_37297 = G__37312;
i__37072_37298 = G__37313;
continue;
}
} else {
var temp__5753__auto___37314 = cljs.core.seq(seq__37066_37295);
if(temp__5753__auto___37314){
var seq__37066_37315__$1 = temp__5753__auto___37314;
if(cljs.core.chunked_seq_QMARK_(seq__37066_37315__$1)){
var c__4638__auto___37316 = cljs.core.chunk_first(seq__37066_37315__$1);
var G__37317 = cljs.core.chunk_rest(seq__37066_37315__$1);
var G__37318 = c__4638__auto___37316;
var G__37319 = cljs.core.count(c__4638__auto___37316);
var G__37320 = (0);
seq__37066_37295 = G__37317;
chunk__37070_37296 = G__37318;
count__37071_37297 = G__37319;
i__37072_37298 = G__37320;
continue;
} else {
var node_37321 = cljs.core.first(seq__37066_37315__$1);
if(cljs.core.not(node_37321.shadow$old)){
var path_match_37322 = shadow.cljs.devtools.client.browser.match_paths(node_37321.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37322)){
var new_link_37323 = (function (){var G__37102 = node_37321.cloneNode(true);
G__37102.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37322),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37102;
})();
(node_37321.shadow$old = true);

(new_link_37323.onload = ((function (seq__37066_37295,chunk__37070_37296,count__37071_37297,i__37072_37298,seq__37020,chunk__37022,count__37023,i__37024,new_link_37323,path_match_37322,node_37321,seq__37066_37315__$1,temp__5753__auto___37314,path,map__37019,map__37019__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37321);
});})(seq__37066_37295,chunk__37070_37296,count__37071_37297,i__37072_37298,seq__37020,chunk__37022,count__37023,i__37024,new_link_37323,path_match_37322,node_37321,seq__37066_37315__$1,temp__5753__auto___37314,path,map__37019,map__37019__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37322], 0));

goog.dom.insertSiblingAfter(new_link_37323,node_37321);


var G__37324 = cljs.core.next(seq__37066_37315__$1);
var G__37325 = null;
var G__37326 = (0);
var G__37327 = (0);
seq__37066_37295 = G__37324;
chunk__37070_37296 = G__37325;
count__37071_37297 = G__37326;
i__37072_37298 = G__37327;
continue;
} else {
var G__37328 = cljs.core.next(seq__37066_37315__$1);
var G__37329 = null;
var G__37330 = (0);
var G__37331 = (0);
seq__37066_37295 = G__37328;
chunk__37070_37296 = G__37329;
count__37071_37297 = G__37330;
i__37072_37298 = G__37331;
continue;
}
} else {
var G__37332 = cljs.core.next(seq__37066_37315__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__37066_37295 = G__37332;
chunk__37070_37296 = G__37333;
count__37071_37297 = G__37334;
i__37072_37298 = G__37335;
continue;
}
}
} else {
}
}
break;
}


var G__37336 = seq__37020;
var G__37337 = chunk__37022;
var G__37338 = count__37023;
var G__37339 = (i__37024 + (1));
seq__37020 = G__37336;
chunk__37022 = G__37337;
count__37023 = G__37338;
i__37024 = G__37339;
continue;
} else {
var G__37340 = seq__37020;
var G__37341 = chunk__37022;
var G__37342 = count__37023;
var G__37343 = (i__37024 + (1));
seq__37020 = G__37340;
chunk__37022 = G__37341;
count__37023 = G__37342;
i__37024 = G__37343;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37020);
if(temp__5753__auto__){
var seq__37020__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37020__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37020__$1);
var G__37344 = cljs.core.chunk_rest(seq__37020__$1);
var G__37345 = c__4638__auto__;
var G__37346 = cljs.core.count(c__4638__auto__);
var G__37347 = (0);
seq__37020 = G__37344;
chunk__37022 = G__37345;
count__37023 = G__37346;
i__37024 = G__37347;
continue;
} else {
var path = cljs.core.first(seq__37020__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37105_37348 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37109_37349 = null;
var count__37110_37350 = (0);
var i__37111_37351 = (0);
while(true){
if((i__37111_37351 < count__37110_37350)){
var node_37352 = chunk__37109_37349.cljs$core$IIndexed$_nth$arity$2(null,i__37111_37351);
if(cljs.core.not(node_37352.shadow$old)){
var path_match_37353 = shadow.cljs.devtools.client.browser.match_paths(node_37352.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37353)){
var new_link_37354 = (function (){var G__37128 = node_37352.cloneNode(true);
G__37128.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37353),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37128;
})();
(node_37352.shadow$old = true);

(new_link_37354.onload = ((function (seq__37105_37348,chunk__37109_37349,count__37110_37350,i__37111_37351,seq__37020,chunk__37022,count__37023,i__37024,new_link_37354,path_match_37353,node_37352,path,seq__37020__$1,temp__5753__auto__,map__37019,map__37019__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37352);
});})(seq__37105_37348,chunk__37109_37349,count__37110_37350,i__37111_37351,seq__37020,chunk__37022,count__37023,i__37024,new_link_37354,path_match_37353,node_37352,path,seq__37020__$1,temp__5753__auto__,map__37019,map__37019__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37353], 0));

goog.dom.insertSiblingAfter(new_link_37354,node_37352);


var G__37355 = seq__37105_37348;
var G__37356 = chunk__37109_37349;
var G__37357 = count__37110_37350;
var G__37358 = (i__37111_37351 + (1));
seq__37105_37348 = G__37355;
chunk__37109_37349 = G__37356;
count__37110_37350 = G__37357;
i__37111_37351 = G__37358;
continue;
} else {
var G__37359 = seq__37105_37348;
var G__37360 = chunk__37109_37349;
var G__37361 = count__37110_37350;
var G__37362 = (i__37111_37351 + (1));
seq__37105_37348 = G__37359;
chunk__37109_37349 = G__37360;
count__37110_37350 = G__37361;
i__37111_37351 = G__37362;
continue;
}
} else {
var G__37363 = seq__37105_37348;
var G__37364 = chunk__37109_37349;
var G__37365 = count__37110_37350;
var G__37366 = (i__37111_37351 + (1));
seq__37105_37348 = G__37363;
chunk__37109_37349 = G__37364;
count__37110_37350 = G__37365;
i__37111_37351 = G__37366;
continue;
}
} else {
var temp__5753__auto___37367__$1 = cljs.core.seq(seq__37105_37348);
if(temp__5753__auto___37367__$1){
var seq__37105_37368__$1 = temp__5753__auto___37367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37105_37368__$1)){
var c__4638__auto___37369 = cljs.core.chunk_first(seq__37105_37368__$1);
var G__37370 = cljs.core.chunk_rest(seq__37105_37368__$1);
var G__37371 = c__4638__auto___37369;
var G__37372 = cljs.core.count(c__4638__auto___37369);
var G__37373 = (0);
seq__37105_37348 = G__37370;
chunk__37109_37349 = G__37371;
count__37110_37350 = G__37372;
i__37111_37351 = G__37373;
continue;
} else {
var node_37374 = cljs.core.first(seq__37105_37368__$1);
if(cljs.core.not(node_37374.shadow$old)){
var path_match_37375 = shadow.cljs.devtools.client.browser.match_paths(node_37374.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37375)){
var new_link_37376 = (function (){var G__37130 = node_37374.cloneNode(true);
G__37130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37375),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37130;
})();
(node_37374.shadow$old = true);

(new_link_37376.onload = ((function (seq__37105_37348,chunk__37109_37349,count__37110_37350,i__37111_37351,seq__37020,chunk__37022,count__37023,i__37024,new_link_37376,path_match_37375,node_37374,seq__37105_37368__$1,temp__5753__auto___37367__$1,path,seq__37020__$1,temp__5753__auto__,map__37019,map__37019__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37374);
});})(seq__37105_37348,chunk__37109_37349,count__37110_37350,i__37111_37351,seq__37020,chunk__37022,count__37023,i__37024,new_link_37376,path_match_37375,node_37374,seq__37105_37368__$1,temp__5753__auto___37367__$1,path,seq__37020__$1,temp__5753__auto__,map__37019,map__37019__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37375], 0));

goog.dom.insertSiblingAfter(new_link_37376,node_37374);


var G__37377 = cljs.core.next(seq__37105_37368__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__37105_37348 = G__37377;
chunk__37109_37349 = G__37378;
count__37110_37350 = G__37379;
i__37111_37351 = G__37380;
continue;
} else {
var G__37381 = cljs.core.next(seq__37105_37368__$1);
var G__37382 = null;
var G__37383 = (0);
var G__37384 = (0);
seq__37105_37348 = G__37381;
chunk__37109_37349 = G__37382;
count__37110_37350 = G__37383;
i__37111_37351 = G__37384;
continue;
}
} else {
var G__37385 = cljs.core.next(seq__37105_37368__$1);
var G__37386 = null;
var G__37387 = (0);
var G__37388 = (0);
seq__37105_37348 = G__37385;
chunk__37109_37349 = G__37386;
count__37110_37350 = G__37387;
i__37111_37351 = G__37388;
continue;
}
}
} else {
}
}
break;
}


var G__37389 = cljs.core.next(seq__37020__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37020 = G__37389;
chunk__37022 = G__37390;
count__37023 = G__37391;
i__37024 = G__37392;
continue;
} else {
var G__37393 = cljs.core.next(seq__37020__$1);
var G__37394 = null;
var G__37395 = (0);
var G__37396 = (0);
seq__37020 = G__37393;
chunk__37022 = G__37394;
count__37023 = G__37395;
i__37024 = G__37396;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37143){
var map__37144 = p__37143;
var map__37144__$1 = cljs.core.__destructure_map(map__37144);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37144__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37208){
var map__37209 = p__37208;
var map__37209__$1 = cljs.core.__destructure_map(map__37209);
var _ = map__37209__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37209__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37210,done,error){
var map__37211 = p__37210;
var map__37211__$1 = cljs.core.__destructure_map(map__37211);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37212,done,error){
var map__37213 = p__37212;
var map__37213__$1 = cljs.core.__destructure_map(map__37213);
var msg = map__37213__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37214){
var map__37215 = p__37214;
var map__37215__$1 = cljs.core.__destructure_map(map__37215);
var src = map__37215__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37215__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37216 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37216) : done.call(null,G__37216));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37217){
var map__37218 = p__37217;
var map__37218__$1 = cljs.core.__destructure_map(map__37218);
var msg__$1 = map__37218__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37219){var ex = e37219;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37220){
var map__37221 = p__37220;
var map__37221__$1 = cljs.core.__destructure_map(map__37221);
var env = map__37221__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37222){
var map__37223 = p__37222;
var map__37223__$1 = cljs.core.__destructure_map(map__37223);
var msg = map__37223__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37224){
var map__37225 = p__37224;
var map__37225__$1 = cljs.core.__destructure_map(map__37225);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37226){
var map__37227 = p__37226;
var map__37227__$1 = cljs.core.__destructure_map(map__37227);
var svc = map__37227__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
