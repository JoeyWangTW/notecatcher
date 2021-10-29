goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29100 = arguments.length;
switch (G__29100) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29107 = (function (f,blockable,meta29108){
this.f = f;
this.blockable = blockable;
this.meta29108 = meta29108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29109,meta29108__$1){
var self__ = this;
var _29109__$1 = this;
return (new cljs.core.async.t_cljs$core$async29107(self__.f,self__.blockable,meta29108__$1));
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29109){
var self__ = this;
var _29109__$1 = this;
return self__.meta29108;
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29108","meta29108",1480727367,null)], null);
}));

(cljs.core.async.t_cljs$core$async29107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29107");

(cljs.core.async.t_cljs$core$async29107.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29107.
 */
cljs.core.async.__GT_t_cljs$core$async29107 = (function cljs$core$async$__GT_t_cljs$core$async29107(f__$1,blockable__$1,meta29108){
return (new cljs.core.async.t_cljs$core$async29107(f__$1,blockable__$1,meta29108));
});

}

return (new cljs.core.async.t_cljs$core$async29107(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29131 = arguments.length;
switch (G__29131) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29154 = arguments.length;
switch (G__29154) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29177 = arguments.length;
switch (G__29177) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32790 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32790) : fn1.call(null,val_32790));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32790) : fn1.call(null,val_32790));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29187 = arguments.length;
switch (G__29187) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32798 = n;
var x_32799 = (0);
while(true){
if((x_32799 < n__4695__auto___32798)){
(a[x_32799] = x_32799);

var G__32803 = (x_32799 + (1));
x_32799 = G__32803;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29216 = (function (flag,meta29217){
this.flag = flag;
this.meta29217 = meta29217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29218,meta29217__$1){
var self__ = this;
var _29218__$1 = this;
return (new cljs.core.async.t_cljs$core$async29216(self__.flag,meta29217__$1));
}));

(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29218){
var self__ = this;
var _29218__$1 = this;
return self__.meta29217;
}));

(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29217","meta29217",335675267,null)], null);
}));

(cljs.core.async.t_cljs$core$async29216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29216");

(cljs.core.async.t_cljs$core$async29216.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29216.
 */
cljs.core.async.__GT_t_cljs$core$async29216 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29216(flag__$1,meta29217){
return (new cljs.core.async.t_cljs$core$async29216(flag__$1,meta29217));
});

}

return (new cljs.core.async.t_cljs$core$async29216(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29267 = (function (flag,cb,meta29268){
this.flag = flag;
this.cb = cb;
this.meta29268 = meta29268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29269,meta29268__$1){
var self__ = this;
var _29269__$1 = this;
return (new cljs.core.async.t_cljs$core$async29267(self__.flag,self__.cb,meta29268__$1));
}));

(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29269){
var self__ = this;
var _29269__$1 = this;
return self__.meta29268;
}));

(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29268","meta29268",1403759332,null)], null);
}));

(cljs.core.async.t_cljs$core$async29267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29267");

(cljs.core.async.t_cljs$core$async29267.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29267.
 */
cljs.core.async.__GT_t_cljs$core$async29267 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29267(flag__$1,cb__$1,meta29268){
return (new cljs.core.async.t_cljs$core$async29267(flag__$1,cb__$1,meta29268));
});

}

return (new cljs.core.async.t_cljs$core$async29267(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29294_SHARP_){
var G__29312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29294_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29312) : fret.call(null,G__29312));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29295_SHARP_){
var G__29314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29295_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29314) : fret.call(null,G__29314));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32875 = (i + (1));
i = G__32875;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32884 = arguments.length;
var i__4819__auto___32885 = (0);
while(true){
if((i__4819__auto___32885 < len__4818__auto___32884)){
args__4824__auto__.push((arguments[i__4819__auto___32885]));

var G__32889 = (i__4819__auto___32885 + (1));
i__4819__auto___32885 = G__32889;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29329){
var map__29330 = p__29329;
var map__29330__$1 = cljs.core.__destructure_map(map__29330);
var opts = map__29330__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29324){
var G__29325 = cljs.core.first(seq29324);
var seq29324__$1 = cljs.core.next(seq29324);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29325,seq29324__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29350 = arguments.length;
switch (G__29350) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28991__auto___32906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_29383){
var state_val_29384 = (state_29383[(1)]);
if((state_val_29384 === (7))){
var inst_29379 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
var statearr_29393_32910 = state_29383__$1;
(statearr_29393_32910[(2)] = inst_29379);

(statearr_29393_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (1))){
var state_29383__$1 = state_29383;
var statearr_29394_32912 = state_29383__$1;
(statearr_29394_32912[(2)] = null);

(statearr_29394_32912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (4))){
var inst_29361 = (state_29383[(7)]);
var inst_29361__$1 = (state_29383[(2)]);
var inst_29362 = (inst_29361__$1 == null);
var state_29383__$1 = (function (){var statearr_29395 = state_29383;
(statearr_29395[(7)] = inst_29361__$1);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29400_32913 = state_29383__$1;
(statearr_29400_32913[(1)] = (5));

} else {
var statearr_29405_32914 = state_29383__$1;
(statearr_29405_32914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (13))){
var state_29383__$1 = state_29383;
var statearr_29410_32915 = state_29383__$1;
(statearr_29410_32915[(2)] = null);

(statearr_29410_32915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (6))){
var inst_29361 = (state_29383[(7)]);
var state_29383__$1 = state_29383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29383__$1,(11),to,inst_29361);
} else {
if((state_val_29384 === (3))){
var inst_29381 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29383__$1,inst_29381);
} else {
if((state_val_29384 === (12))){
var state_29383__$1 = state_29383;
var statearr_29415_32916 = state_29383__$1;
(statearr_29415_32916[(2)] = null);

(statearr_29415_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (2))){
var state_29383__$1 = state_29383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29383__$1,(4),from);
} else {
if((state_val_29384 === (11))){
var inst_29371 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
if(cljs.core.truth_(inst_29371)){
var statearr_29417_32917 = state_29383__$1;
(statearr_29417_32917[(1)] = (12));

} else {
var statearr_29420_32919 = state_29383__$1;
(statearr_29420_32919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (9))){
var state_29383__$1 = state_29383;
var statearr_29422_32924 = state_29383__$1;
(statearr_29422_32924[(2)] = null);

(statearr_29422_32924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (5))){
var state_29383__$1 = state_29383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29423_32925 = state_29383__$1;
(statearr_29423_32925[(1)] = (8));

} else {
var statearr_29424_32926 = state_29383__$1;
(statearr_29424_32926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (14))){
var inst_29377 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
var statearr_29425_32928 = state_29383__$1;
(statearr_29425_32928[(2)] = inst_29377);

(statearr_29425_32928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (10))){
var inst_29368 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
var statearr_29426_32929 = state_29383__$1;
(statearr_29426_32929[(2)] = inst_29368);

(statearr_29426_32929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (8))){
var inst_29365 = cljs.core.async.close_BANG_(to);
var state_29383__$1 = state_29383;
var statearr_29428_32930 = state_29383__$1;
(statearr_29428_32930[(2)] = inst_29365);

(statearr_29428_32930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_29432 = [null,null,null,null,null,null,null,null];
(statearr_29432[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_29432[(1)] = (1));

return statearr_29432;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_29383){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29383);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29433){var ex__28492__auto__ = e29433;
var statearr_29434_32931 = state_29383;
(statearr_29434_32931[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29383[(4)]))){
var statearr_29436_32935 = state_29383;
(statearr_29436_32935[(1)] = cljs.core.first((state_29383[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32937 = state_29383;
state_29383 = G__32937;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_29383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_29383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_29442 = f__28992__auto__();
(statearr_29442[(6)] = c__28991__auto___32906);

return statearr_29442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29469){
var vec__29470 = p__29469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29470,(1),null);
var job = vec__29470;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28991__auto___32940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_29477){
var state_val_29478 = (state_29477[(1)]);
if((state_val_29478 === (1))){
var state_29477__$1 = state_29477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29477__$1,(2),res,v);
} else {
if((state_val_29478 === (2))){
var inst_29474 = (state_29477[(2)]);
var inst_29475 = cljs.core.async.close_BANG_(res);
var state_29477__$1 = (function (){var statearr_29480 = state_29477;
(statearr_29480[(7)] = inst_29474);

return statearr_29480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29477__$1,inst_29475);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_29485 = [null,null,null,null,null,null,null,null];
(statearr_29485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__);

(statearr_29485[(1)] = (1));

return statearr_29485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1 = (function (state_29477){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29477);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29488){var ex__28492__auto__ = e29488;
var statearr_29489_32943 = state_29477;
(statearr_29489_32943[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29477[(4)]))){
var statearr_29490_32946 = state_29477;
(statearr_29490_32946[(1)] = cljs.core.first((state_29477[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32947 = state_29477;
state_29477 = G__32947;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = function(state_29477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1.call(this,state_29477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_29491 = f__28992__auto__();
(statearr_29491[(6)] = c__28991__auto___32940);

return statearr_29491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29505){
var vec__29506 = p__29505;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29506,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29506,(1),null);
var job = vec__29506;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32948 = n;
var __32949 = (0);
while(true){
if((__32949 < n__4695__auto___32948)){
var G__29509_32950 = type;
var G__29509_32951__$1 = (((G__29509_32950 instanceof cljs.core.Keyword))?G__29509_32950.fqn:null);
switch (G__29509_32951__$1) {
case "compute":
var c__28991__auto___32953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32949,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = ((function (__32949,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function (state_29527){
var state_val_29532 = (state_29527[(1)]);
if((state_val_29532 === (1))){
var state_29527__$1 = state_29527;
var statearr_29545_32954 = state_29527__$1;
(statearr_29545_32954[(2)] = null);

(statearr_29545_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (2))){
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29527__$1,(4),jobs);
} else {
if((state_val_29532 === (3))){
var inst_29525 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29527__$1,inst_29525);
} else {
if((state_val_29532 === (4))){
var inst_29516 = (state_29527[(2)]);
var inst_29517 = process(inst_29516);
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29517)){
var statearr_29546_32958 = state_29527__$1;
(statearr_29546_32958[(1)] = (5));

} else {
var statearr_29547_32959 = state_29527__$1;
(statearr_29547_32959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (5))){
var state_29527__$1 = state_29527;
var statearr_29548_32960 = state_29527__$1;
(statearr_29548_32960[(2)] = null);

(statearr_29548_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (6))){
var state_29527__$1 = state_29527;
var statearr_29549_32961 = state_29527__$1;
(statearr_29549_32961[(2)] = null);

(statearr_29549_32961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (7))){
var inst_29523 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29550_32968 = state_29527__$1;
(statearr_29550_32968[(2)] = inst_29523);

(statearr_29550_32968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32949,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
;
return ((function (__32949,switch__28488__auto__,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1 = (function (state_29527){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29527);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29556){var ex__28492__auto__ = e29556;
var statearr_29558_32969 = state_29527;
(statearr_29558_32969[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29527[(4)]))){
var statearr_29559_32970 = state_29527;
(statearr_29559_32970[(1)] = cljs.core.first((state_29527[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_29527;
state_29527 = G__32971;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__;
})()
;})(__32949,switch__28488__auto__,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
})();
var state__28993__auto__ = (function (){var statearr_29567 = f__28992__auto__();
(statearr_29567[(6)] = c__28991__auto___32953);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
});})(__32949,c__28991__auto___32953,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
);


break;
case "async":
var c__28991__auto___32973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32949,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = ((function (__32949,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function (state_29590){
var state_val_29591 = (state_29590[(1)]);
if((state_val_29591 === (1))){
var state_29590__$1 = state_29590;
var statearr_29593_32975 = state_29590__$1;
(statearr_29593_32975[(2)] = null);

(statearr_29593_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (2))){
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29590__$1,(4),jobs);
} else {
if((state_val_29591 === (3))){
var inst_29584 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29590__$1,inst_29584);
} else {
if((state_val_29591 === (4))){
var inst_29575 = (state_29590[(2)]);
var inst_29577 = async(inst_29575);
var state_29590__$1 = state_29590;
if(cljs.core.truth_(inst_29577)){
var statearr_29596_32977 = state_29590__$1;
(statearr_29596_32977[(1)] = (5));

} else {
var statearr_29598_32978 = state_29590__$1;
(statearr_29598_32978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (5))){
var state_29590__$1 = state_29590;
var statearr_29599_32979 = state_29590__$1;
(statearr_29599_32979[(2)] = null);

(statearr_29599_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (6))){
var state_29590__$1 = state_29590;
var statearr_29601_32981 = state_29590__$1;
(statearr_29601_32981[(2)] = null);

(statearr_29601_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29591 === (7))){
var inst_29582 = (state_29590[(2)]);
var state_29590__$1 = state_29590;
var statearr_29603_32983 = state_29590__$1;
(statearr_29603_32983[(2)] = inst_29582);

(statearr_29603_32983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32949,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
;
return ((function (__32949,switch__28488__auto__,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_29607 = [null,null,null,null,null,null,null];
(statearr_29607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__);

(statearr_29607[(1)] = (1));

return statearr_29607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1 = (function (state_29590){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29590);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29608){var ex__28492__auto__ = e29608;
var statearr_29609_32986 = state_29590;
(statearr_29609_32986[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29590[(4)]))){
var statearr_29610_32987 = state_29590;
(statearr_29610_32987[(1)] = cljs.core.first((state_29590[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_29590;
state_29590 = G__32998;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = function(state_29590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1.call(this,state_29590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__;
})()
;})(__32949,switch__28488__auto__,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
})();
var state__28993__auto__ = (function (){var statearr_29617 = f__28992__auto__();
(statearr_29617[(6)] = c__28991__auto___32973);

return statearr_29617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
});})(__32949,c__28991__auto___32973,G__29509_32950,G__29509_32951__$1,n__4695__auto___32948,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29509_32951__$1)].join('')));

}

var G__33003 = (__32949 + (1));
__32949 = G__33003;
continue;
} else {
}
break;
}

var c__28991__auto___33004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_29665){
var state_val_29666 = (state_29665[(1)]);
if((state_val_29666 === (7))){
var inst_29661 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29672_33005 = state_29665__$1;
(statearr_29672_33005[(2)] = inst_29661);

(statearr_29672_33005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (1))){
var state_29665__$1 = state_29665;
var statearr_29674_33009 = state_29665__$1;
(statearr_29674_33009[(2)] = null);

(statearr_29674_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (4))){
var inst_29629 = (state_29665[(7)]);
var inst_29629__$1 = (state_29665[(2)]);
var inst_29630 = (inst_29629__$1 == null);
var state_29665__$1 = (function (){var statearr_29679 = state_29665;
(statearr_29679[(7)] = inst_29629__$1);

return statearr_29679;
})();
if(cljs.core.truth_(inst_29630)){
var statearr_29680_33012 = state_29665__$1;
(statearr_29680_33012[(1)] = (5));

} else {
var statearr_29682_33013 = state_29665__$1;
(statearr_29682_33013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (6))){
var inst_29629 = (state_29665[(7)]);
var inst_29640 = (state_29665[(8)]);
var inst_29640__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29652 = [inst_29629,inst_29640__$1];
var inst_29653 = (new cljs.core.PersistentVector(null,2,(5),inst_29651,inst_29652,null));
var state_29665__$1 = (function (){var statearr_29689 = state_29665;
(statearr_29689[(8)] = inst_29640__$1);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29665__$1,(8),jobs,inst_29653);
} else {
if((state_val_29666 === (3))){
var inst_29663 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29665__$1,inst_29663);
} else {
if((state_val_29666 === (2))){
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29665__$1,(4),from);
} else {
if((state_val_29666 === (9))){
var inst_29657 = (state_29665[(2)]);
var state_29665__$1 = (function (){var statearr_29701 = state_29665;
(statearr_29701[(9)] = inst_29657);

return statearr_29701;
})();
var statearr_29702_33018 = state_29665__$1;
(statearr_29702_33018[(2)] = null);

(statearr_29702_33018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (5))){
var inst_29636 = cljs.core.async.close_BANG_(jobs);
var state_29665__$1 = state_29665;
var statearr_29715_33020 = state_29665__$1;
(statearr_29715_33020[(2)] = inst_29636);

(statearr_29715_33020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (8))){
var inst_29640 = (state_29665[(8)]);
var inst_29655 = (state_29665[(2)]);
var state_29665__$1 = (function (){var statearr_29719 = state_29665;
(statearr_29719[(10)] = inst_29655);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29665__$1,(9),results,inst_29640);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_29722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__);

(statearr_29722[(1)] = (1));

return statearr_29722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1 = (function (state_29665){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29665);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29726){var ex__28492__auto__ = e29726;
var statearr_29727_33025 = state_29665;
(statearr_29727_33025[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29665[(4)]))){
var statearr_29730_33026 = state_29665;
(statearr_29730_33026[(1)] = cljs.core.first((state_29665[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33030 = state_29665;
state_29665 = G__33030;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = function(state_29665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1.call(this,state_29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_29733 = f__28992__auto__();
(statearr_29733[(6)] = c__28991__auto___33004);

return statearr_29733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


var c__28991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (7))){
var inst_29777 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29786_33032 = state_29781__$1;
(statearr_29786_33032[(2)] = inst_29777);

(statearr_29786_33032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (20))){
var state_29781__$1 = state_29781;
var statearr_29790_33033 = state_29781__$1;
(statearr_29790_33033[(2)] = null);

(statearr_29790_33033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
var statearr_29791_33034 = state_29781__$1;
(statearr_29791_33034[(2)] = null);

(statearr_29791_33034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (4))){
var inst_29739 = (state_29781[(7)]);
var inst_29739__$1 = (state_29781[(2)]);
var inst_29740 = (inst_29739__$1 == null);
var state_29781__$1 = (function (){var statearr_29800 = state_29781;
(statearr_29800[(7)] = inst_29739__$1);

return statearr_29800;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29801_33039 = state_29781__$1;
(statearr_29801_33039[(1)] = (5));

} else {
var statearr_29803_33040 = state_29781__$1;
(statearr_29803_33040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (15))){
var inst_29753 = (state_29781[(8)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29781__$1,(18),to,inst_29753);
} else {
if((state_val_29782 === (21))){
var inst_29771 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29807_33043 = state_29781__$1;
(statearr_29807_33043[(2)] = inst_29771);

(statearr_29807_33043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (13))){
var inst_29774 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29808 = state_29781;
(statearr_29808[(9)] = inst_29774);

return statearr_29808;
})();
var statearr_29809_33044 = state_29781__$1;
(statearr_29809_33044[(2)] = null);

(statearr_29809_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (6))){
var inst_29739 = (state_29781[(7)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29781__$1,(11),inst_29739);
} else {
if((state_val_29782 === (17))){
var inst_29765 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
if(cljs.core.truth_(inst_29765)){
var statearr_29812_33046 = state_29781__$1;
(statearr_29812_33046[(1)] = (19));

} else {
var statearr_29815_33047 = state_29781__$1;
(statearr_29815_33047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (3))){
var inst_29779 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29781__$1,inst_29779);
} else {
if((state_val_29782 === (12))){
var inst_29750 = (state_29781[(10)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29781__$1,(14),inst_29750);
} else {
if((state_val_29782 === (2))){
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29781__$1,(4),results);
} else {
if((state_val_29782 === (19))){
var state_29781__$1 = state_29781;
var statearr_29821_33053 = state_29781__$1;
(statearr_29821_33053[(2)] = null);

(statearr_29821_33053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (11))){
var inst_29750 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29825 = state_29781;
(statearr_29825[(10)] = inst_29750);

return statearr_29825;
})();
var statearr_29827_33058 = state_29781__$1;
(statearr_29827_33058[(2)] = null);

(statearr_29827_33058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (9))){
var state_29781__$1 = state_29781;
var statearr_29829_33059 = state_29781__$1;
(statearr_29829_33059[(2)] = null);

(statearr_29829_33059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (5))){
var state_29781__$1 = state_29781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29834_33060 = state_29781__$1;
(statearr_29834_33060[(1)] = (8));

} else {
var statearr_29835_33061 = state_29781__$1;
(statearr_29835_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (14))){
var inst_29756 = (state_29781[(11)]);
var inst_29753 = (state_29781[(8)]);
var inst_29753__$1 = (state_29781[(2)]);
var inst_29755 = (inst_29753__$1 == null);
var inst_29756__$1 = cljs.core.not(inst_29755);
var state_29781__$1 = (function (){var statearr_29844 = state_29781;
(statearr_29844[(11)] = inst_29756__$1);

(statearr_29844[(8)] = inst_29753__$1);

return statearr_29844;
})();
if(inst_29756__$1){
var statearr_29845_33067 = state_29781__$1;
(statearr_29845_33067[(1)] = (15));

} else {
var statearr_29846_33068 = state_29781__$1;
(statearr_29846_33068[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (16))){
var inst_29756 = (state_29781[(11)]);
var state_29781__$1 = state_29781;
var statearr_29849_33069 = state_29781__$1;
(statearr_29849_33069[(2)] = inst_29756);

(statearr_29849_33069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (10))){
var inst_29746 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29850_33070 = state_29781__$1;
(statearr_29850_33070[(2)] = inst_29746);

(statearr_29850_33070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (18))){
var inst_29762 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29851_33071 = state_29781__$1;
(statearr_29851_33071[(2)] = inst_29762);

(statearr_29851_33071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (8))){
var inst_29743 = cljs.core.async.close_BANG_(to);
var state_29781__$1 = state_29781;
var statearr_29852_33072 = state_29781__$1;
(statearr_29852_33072[(2)] = inst_29743);

(statearr_29852_33072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1 = (function (state_29781){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29781);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29857){var ex__28492__auto__ = e29857;
var statearr_29858_33075 = state_29781;
(statearr_29858_33075[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29781[(4)]))){
var statearr_29859_33078 = state_29781;
(statearr_29859_33078[(1)] = cljs.core.first((state_29781[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33079 = state_29781;
state_29781 = G__33079;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_29862 = f__28992__auto__();
(statearr_29862[(6)] = c__28991__auto__);

return statearr_29862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

return c__28991__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29869 = arguments.length;
switch (G__29869) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29887 = arguments.length;
switch (G__29887) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29901 = arguments.length;
switch (G__29901) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28991__auto___33087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_29940){
var state_val_29941 = (state_29940[(1)]);
if((state_val_29941 === (7))){
var inst_29935 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
var statearr_29947_33088 = state_29940__$1;
(statearr_29947_33088[(2)] = inst_29935);

(statearr_29947_33088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (1))){
var state_29940__$1 = state_29940;
var statearr_29950_33098 = state_29940__$1;
(statearr_29950_33098[(2)] = null);

(statearr_29950_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (4))){
var inst_29916 = (state_29940[(7)]);
var inst_29916__$1 = (state_29940[(2)]);
var inst_29917 = (inst_29916__$1 == null);
var state_29940__$1 = (function (){var statearr_29952 = state_29940;
(statearr_29952[(7)] = inst_29916__$1);

return statearr_29952;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_29965_33099 = state_29940__$1;
(statearr_29965_33099[(1)] = (5));

} else {
var statearr_29966_33100 = state_29940__$1;
(statearr_29966_33100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (13))){
var state_29940__$1 = state_29940;
var statearr_29969_33101 = state_29940__$1;
(statearr_29969_33101[(2)] = null);

(statearr_29969_33101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (6))){
var inst_29916 = (state_29940[(7)]);
var inst_29922 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29916) : p.call(null,inst_29916));
var state_29940__$1 = state_29940;
if(cljs.core.truth_(inst_29922)){
var statearr_29972_33102 = state_29940__$1;
(statearr_29972_33102[(1)] = (9));

} else {
var statearr_29973_33103 = state_29940__$1;
(statearr_29973_33103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (3))){
var inst_29937 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29940__$1,inst_29937);
} else {
if((state_val_29941 === (12))){
var state_29940__$1 = state_29940;
var statearr_29974_33105 = state_29940__$1;
(statearr_29974_33105[(2)] = null);

(statearr_29974_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (2))){
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29940__$1,(4),ch);
} else {
if((state_val_29941 === (11))){
var inst_29916 = (state_29940[(7)]);
var inst_29926 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29940__$1,(8),inst_29926,inst_29916);
} else {
if((state_val_29941 === (9))){
var state_29940__$1 = state_29940;
var statearr_29977_33106 = state_29940__$1;
(statearr_29977_33106[(2)] = tc);

(statearr_29977_33106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (5))){
var inst_29919 = cljs.core.async.close_BANG_(tc);
var inst_29920 = cljs.core.async.close_BANG_(fc);
var state_29940__$1 = (function (){var statearr_29980 = state_29940;
(statearr_29980[(8)] = inst_29919);

return statearr_29980;
})();
var statearr_29982_33111 = state_29940__$1;
(statearr_29982_33111[(2)] = inst_29920);

(statearr_29982_33111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (14))){
var inst_29933 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
var statearr_29983_33115 = state_29940__$1;
(statearr_29983_33115[(2)] = inst_29933);

(statearr_29983_33115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (10))){
var state_29940__$1 = state_29940;
var statearr_29984_33116 = state_29940__$1;
(statearr_29984_33116[(2)] = fc);

(statearr_29984_33116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (8))){
var inst_29928 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
if(cljs.core.truth_(inst_29928)){
var statearr_29986_33117 = state_29940__$1;
(statearr_29986_33117[(1)] = (12));

} else {
var statearr_29987_33118 = state_29940__$1;
(statearr_29987_33118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_29991 = [null,null,null,null,null,null,null,null,null];
(statearr_29991[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_29991[(1)] = (1));

return statearr_29991;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_29940){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_29940);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e29992){var ex__28492__auto__ = e29992;
var statearr_29993_33122 = state_29940;
(statearr_29993_33122[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_29940[(4)]))){
var statearr_29994_33123 = state_29940;
(statearr_29994_33123[(1)] = cljs.core.first((state_29940[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33124 = state_29940;
state_29940 = G__33124;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_29940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_29940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_29997 = f__28992__auto__();
(statearr_29997[(6)] = c__28991__auto___33087);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30031_33128 = state_30025__$1;
(statearr_30031_33128[(2)] = inst_30021);

(statearr_30031_33128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_29999 = init;
var inst_30000 = inst_29999;
var state_30025__$1 = (function (){var statearr_30032 = state_30025;
(statearr_30032[(7)] = inst_30000);

return statearr_30032;
})();
var statearr_30036_33129 = state_30025__$1;
(statearr_30036_33129[(2)] = null);

(statearr_30036_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_30003 = (state_30025[(8)]);
var inst_30003__$1 = (state_30025[(2)]);
var inst_30004 = (inst_30003__$1 == null);
var state_30025__$1 = (function (){var statearr_30043 = state_30025;
(statearr_30043[(8)] = inst_30003__$1);

return statearr_30043;
})();
if(cljs.core.truth_(inst_30004)){
var statearr_30044_33130 = state_30025__$1;
(statearr_30044_33130[(1)] = (5));

} else {
var statearr_30045_33131 = state_30025__$1;
(statearr_30045_33131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_30003 = (state_30025[(8)]);
var inst_30009 = (state_30025[(9)]);
var inst_30000 = (state_30025[(7)]);
var inst_30009__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30000,inst_30003) : f.call(null,inst_30000,inst_30003));
var inst_30012 = cljs.core.reduced_QMARK_(inst_30009__$1);
var state_30025__$1 = (function (){var statearr_30049 = state_30025;
(statearr_30049[(9)] = inst_30009__$1);

return statearr_30049;
})();
if(inst_30012){
var statearr_30050_33140 = state_30025__$1;
(statearr_30050_33140[(1)] = (8));

} else {
var statearr_30051_33141 = state_30025__$1;
(statearr_30051_33141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30025__$1,(4),ch);
} else {
if((state_val_30026 === (9))){
var inst_30009 = (state_30025[(9)]);
var inst_30000 = inst_30009;
var state_30025__$1 = (function (){var statearr_30059 = state_30025;
(statearr_30059[(7)] = inst_30000);

return statearr_30059;
})();
var statearr_30060_33142 = state_30025__$1;
(statearr_30060_33142[(2)] = null);

(statearr_30060_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_30000 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
var statearr_30061_33143 = state_30025__$1;
(statearr_30061_33143[(2)] = inst_30000);

(statearr_30061_33143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30019 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30063_33148 = state_30025__$1;
(statearr_30063_33148[(2)] = inst_30019);

(statearr_30063_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30009 = (state_30025[(9)]);
var inst_30015 = cljs.core.deref(inst_30009);
var state_30025__$1 = state_30025;
var statearr_30067_33153 = state_30025__$1;
(statearr_30067_33153[(2)] = inst_30015);

(statearr_30067_33153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28489__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28489__auto____0 = (function (){
var statearr_30068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30068[(0)] = cljs$core$async$reduce_$_state_machine__28489__auto__);

(statearr_30068[(1)] = (1));

return statearr_30068;
});
var cljs$core$async$reduce_$_state_machine__28489__auto____1 = (function (state_30025){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_30025);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e30074){var ex__28492__auto__ = e30074;
var statearr_30075_33183 = state_30025;
(statearr_30075_33183[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_30025[(4)]))){
var statearr_30076_33184 = state_30025;
(statearr_30076_33184[(1)] = cljs.core.first((state_30025[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33188 = state_30025;
state_30025 = G__33188;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28489__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28489__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28489__auto____0;
cljs$core$async$reduce_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28489__auto____1;
return cljs$core$async$reduce_$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_30078 = f__28992__auto__();
(statearr_30078[(6)] = c__28991__auto__);

return statearr_30078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

return c__28991__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_30088){
var state_val_30089 = (state_30088[(1)]);
if((state_val_30089 === (1))){
var inst_30082 = cljs.core.async.reduce(f__$1,init,ch);
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30088__$1,(2),inst_30082);
} else {
if((state_val_30089 === (2))){
var inst_30084 = (state_30088[(2)]);
var inst_30085 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30084) : f__$1.call(null,inst_30084));
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30088__$1,inst_30085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28489__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28489__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null];
(statearr_30097[(0)] = cljs$core$async$transduce_$_state_machine__28489__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var cljs$core$async$transduce_$_state_machine__28489__auto____1 = (function (state_30088){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_30088);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e30099){var ex__28492__auto__ = e30099;
var statearr_30102_33202 = state_30088;
(statearr_30102_33202[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_30088[(4)]))){
var statearr_30104_33203 = state_30088;
(statearr_30104_33203[(1)] = cljs.core.first((state_30088[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33204 = state_30088;
state_30088 = G__33204;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28489__auto__ = function(state_30088){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28489__auto____1.call(this,state_30088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28489__auto____0;
cljs$core$async$transduce_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28489__auto____1;
return cljs$core$async$transduce_$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_30108 = f__28992__auto__();
(statearr_30108[(6)] = c__28991__auto__);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

return c__28991__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30112 = arguments.length;
switch (G__30112) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_30146){
var state_val_30147 = (state_30146[(1)]);
if((state_val_30147 === (7))){
var inst_30124 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30148_33207 = state_30146__$1;
(statearr_30148_33207[(2)] = inst_30124);

(statearr_30148_33207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (1))){
var inst_30116 = cljs.core.seq(coll);
var inst_30117 = inst_30116;
var state_30146__$1 = (function (){var statearr_30150 = state_30146;
(statearr_30150[(7)] = inst_30117);

return statearr_30150;
})();
var statearr_30154_33209 = state_30146__$1;
(statearr_30154_33209[(2)] = null);

(statearr_30154_33209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (4))){
var inst_30117 = (state_30146[(7)]);
var inst_30122 = cljs.core.first(inst_30117);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30146__$1,(7),ch,inst_30122);
} else {
if((state_val_30147 === (13))){
var inst_30140 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30155_33217 = state_30146__$1;
(statearr_30155_33217[(2)] = inst_30140);

(statearr_30155_33217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (6))){
var inst_30127 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
if(cljs.core.truth_(inst_30127)){
var statearr_30156_33218 = state_30146__$1;
(statearr_30156_33218[(1)] = (8));

} else {
var statearr_30157_33219 = state_30146__$1;
(statearr_30157_33219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (3))){
var inst_30144 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30146__$1,inst_30144);
} else {
if((state_val_30147 === (12))){
var state_30146__$1 = state_30146;
var statearr_30160_33220 = state_30146__$1;
(statearr_30160_33220[(2)] = null);

(statearr_30160_33220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (2))){
var inst_30117 = (state_30146[(7)]);
var state_30146__$1 = state_30146;
if(cljs.core.truth_(inst_30117)){
var statearr_30161_33222 = state_30146__$1;
(statearr_30161_33222[(1)] = (4));

} else {
var statearr_30162_33223 = state_30146__$1;
(statearr_30162_33223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (11))){
var inst_30137 = cljs.core.async.close_BANG_(ch);
var state_30146__$1 = state_30146;
var statearr_30166_33224 = state_30146__$1;
(statearr_30166_33224[(2)] = inst_30137);

(statearr_30166_33224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (9))){
var state_30146__$1 = state_30146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30169_33225 = state_30146__$1;
(statearr_30169_33225[(1)] = (11));

} else {
var statearr_30170_33226 = state_30146__$1;
(statearr_30170_33226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (5))){
var inst_30117 = (state_30146[(7)]);
var state_30146__$1 = state_30146;
var statearr_30171_33227 = state_30146__$1;
(statearr_30171_33227[(2)] = inst_30117);

(statearr_30171_33227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (10))){
var inst_30142 = (state_30146[(2)]);
var state_30146__$1 = state_30146;
var statearr_30172_33228 = state_30146__$1;
(statearr_30172_33228[(2)] = inst_30142);

(statearr_30172_33228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30147 === (8))){
var inst_30117 = (state_30146[(7)]);
var inst_30130 = cljs.core.next(inst_30117);
var inst_30117__$1 = inst_30130;
var state_30146__$1 = (function (){var statearr_30176 = state_30146;
(statearr_30176[(7)] = inst_30117__$1);

return statearr_30176;
})();
var statearr_30177_33229 = state_30146__$1;
(statearr_30177_33229[(2)] = null);

(statearr_30177_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_30178 = [null,null,null,null,null,null,null,null];
(statearr_30178[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_30178[(1)] = (1));

return statearr_30178;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_30146){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_30146);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e30179){var ex__28492__auto__ = e30179;
var statearr_30181_33239 = state_30146;
(statearr_30181_33239[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_30146[(4)]))){
var statearr_30182_33240 = state_30146;
(statearr_30182_33240[(1)] = cljs.core.first((state_30146[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33241 = state_30146;
state_30146 = G__33241;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_30146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_30146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_30186 = f__28992__auto__();
(statearr_30186[(6)] = c__28991__auto__);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

return c__28991__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30196 = arguments.length;
switch (G__30196) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33247 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33247(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33258 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33258(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33260 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33260(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33264 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33264(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30226 = (function (ch,cs,meta30227){
this.ch = ch;
this.cs = cs;
this.meta30227 = meta30227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30228,meta30227__$1){
var self__ = this;
var _30228__$1 = this;
return (new cljs.core.async.t_cljs$core$async30226(self__.ch,self__.cs,meta30227__$1));
}));

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30228){
var self__ = this;
var _30228__$1 = this;
return self__.meta30227;
}));

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30227","meta30227",-1157065423,null)], null);
}));

(cljs.core.async.t_cljs$core$async30226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30226");

(cljs.core.async.t_cljs$core$async30226.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30226.
 */
cljs.core.async.__GT_t_cljs$core$async30226 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30226(ch__$1,cs__$1,meta30227){
return (new cljs.core.async.t_cljs$core$async30226(ch__$1,cs__$1,meta30227));
});

}

return (new cljs.core.async.t_cljs$core$async30226(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28991__auto___33284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_30430){
var state_val_30431 = (state_30430[(1)]);
if((state_val_30431 === (7))){
var inst_30423 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30432_33289 = state_30430__$1;
(statearr_30432_33289[(2)] = inst_30423);

(statearr_30432_33289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (20))){
var inst_30320 = (state_30430[(7)]);
var inst_30334 = cljs.core.first(inst_30320);
var inst_30335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30334,(0),null);
var inst_30336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30334,(1),null);
var state_30430__$1 = (function (){var statearr_30434 = state_30430;
(statearr_30434[(8)] = inst_30335);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30336)){
var statearr_30435_33293 = state_30430__$1;
(statearr_30435_33293[(1)] = (22));

} else {
var statearr_30436_33294 = state_30430__$1;
(statearr_30436_33294[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (27))){
var inst_30279 = (state_30430[(9)]);
var inst_30372 = (state_30430[(10)]);
var inst_30365 = (state_30430[(11)]);
var inst_30367 = (state_30430[(12)]);
var inst_30372__$1 = cljs.core._nth(inst_30365,inst_30367);
var inst_30373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30372__$1,inst_30279,done);
var state_30430__$1 = (function (){var statearr_30440 = state_30430;
(statearr_30440[(10)] = inst_30372__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30373)){
var statearr_30441_33296 = state_30430__$1;
(statearr_30441_33296[(1)] = (30));

} else {
var statearr_30442_33297 = state_30430__$1;
(statearr_30442_33297[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (1))){
var state_30430__$1 = state_30430;
var statearr_30443_33298 = state_30430__$1;
(statearr_30443_33298[(2)] = null);

(statearr_30443_33298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (24))){
var inst_30320 = (state_30430[(7)]);
var inst_30341 = (state_30430[(2)]);
var inst_30342 = cljs.core.next(inst_30320);
var inst_30294 = inst_30342;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30430__$1 = (function (){var statearr_30444 = state_30430;
(statearr_30444[(13)] = inst_30297);

(statearr_30444[(14)] = inst_30294);

(statearr_30444[(15)] = inst_30341);

(statearr_30444[(16)] = inst_30296);

(statearr_30444[(17)] = inst_30295);

return statearr_30444;
})();
var statearr_30445_33300 = state_30430__$1;
(statearr_30445_33300[(2)] = null);

(statearr_30445_33300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (39))){
var state_30430__$1 = state_30430;
var statearr_30450_33304 = state_30430__$1;
(statearr_30450_33304[(2)] = null);

(statearr_30450_33304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (4))){
var inst_30279 = (state_30430[(9)]);
var inst_30279__$1 = (state_30430[(2)]);
var inst_30283 = (inst_30279__$1 == null);
var state_30430__$1 = (function (){var statearr_30452 = state_30430;
(statearr_30452[(9)] = inst_30279__$1);

return statearr_30452;
})();
if(cljs.core.truth_(inst_30283)){
var statearr_30453_33305 = state_30430__$1;
(statearr_30453_33305[(1)] = (5));

} else {
var statearr_30454_33306 = state_30430__$1;
(statearr_30454_33306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (15))){
var inst_30297 = (state_30430[(13)]);
var inst_30294 = (state_30430[(14)]);
var inst_30296 = (state_30430[(16)]);
var inst_30295 = (state_30430[(17)]);
var inst_30316 = (state_30430[(2)]);
var inst_30317 = (inst_30297 + (1));
var tmp30447 = inst_30294;
var tmp30448 = inst_30296;
var tmp30449 = inst_30295;
var inst_30294__$1 = tmp30447;
var inst_30295__$1 = tmp30449;
var inst_30296__$1 = tmp30448;
var inst_30297__$1 = inst_30317;
var state_30430__$1 = (function (){var statearr_30460 = state_30430;
(statearr_30460[(13)] = inst_30297__$1);

(statearr_30460[(14)] = inst_30294__$1);

(statearr_30460[(18)] = inst_30316);

(statearr_30460[(16)] = inst_30296__$1);

(statearr_30460[(17)] = inst_30295__$1);

return statearr_30460;
})();
var statearr_30462_33316 = state_30430__$1;
(statearr_30462_33316[(2)] = null);

(statearr_30462_33316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (21))){
var inst_30345 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30467_33321 = state_30430__$1;
(statearr_30467_33321[(2)] = inst_30345);

(statearr_30467_33321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (31))){
var inst_30372 = (state_30430[(10)]);
var inst_30376 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30372);
var state_30430__$1 = state_30430;
var statearr_30468_33322 = state_30430__$1;
(statearr_30468_33322[(2)] = inst_30376);

(statearr_30468_33322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (32))){
var inst_30365 = (state_30430[(11)]);
var inst_30367 = (state_30430[(12)]);
var inst_30364 = (state_30430[(19)]);
var inst_30366 = (state_30430[(20)]);
var inst_30378 = (state_30430[(2)]);
var inst_30379 = (inst_30367 + (1));
var tmp30463 = inst_30365;
var tmp30464 = inst_30364;
var tmp30465 = inst_30366;
var inst_30364__$1 = tmp30464;
var inst_30365__$1 = tmp30463;
var inst_30366__$1 = tmp30465;
var inst_30367__$1 = inst_30379;
var state_30430__$1 = (function (){var statearr_30469 = state_30430;
(statearr_30469[(21)] = inst_30378);

(statearr_30469[(11)] = inst_30365__$1);

(statearr_30469[(12)] = inst_30367__$1);

(statearr_30469[(19)] = inst_30364__$1);

(statearr_30469[(20)] = inst_30366__$1);

return statearr_30469;
})();
var statearr_30470_33337 = state_30430__$1;
(statearr_30470_33337[(2)] = null);

(statearr_30470_33337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (40))){
var inst_30396 = (state_30430[(22)]);
var inst_30400 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30396);
var state_30430__$1 = state_30430;
var statearr_30471_33338 = state_30430__$1;
(statearr_30471_33338[(2)] = inst_30400);

(statearr_30471_33338[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (33))){
var inst_30383 = (state_30430[(23)]);
var inst_30386 = cljs.core.chunked_seq_QMARK_(inst_30383);
var state_30430__$1 = state_30430;
if(inst_30386){
var statearr_30472_33345 = state_30430__$1;
(statearr_30472_33345[(1)] = (36));

} else {
var statearr_30476_33347 = state_30430__$1;
(statearr_30476_33347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (13))){
var inst_30310 = (state_30430[(24)]);
var inst_30313 = cljs.core.async.close_BANG_(inst_30310);
var state_30430__$1 = state_30430;
var statearr_30477_33348 = state_30430__$1;
(statearr_30477_33348[(2)] = inst_30313);

(statearr_30477_33348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (22))){
var inst_30335 = (state_30430[(8)]);
var inst_30338 = cljs.core.async.close_BANG_(inst_30335);
var state_30430__$1 = state_30430;
var statearr_30478_33349 = state_30430__$1;
(statearr_30478_33349[(2)] = inst_30338);

(statearr_30478_33349[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (36))){
var inst_30383 = (state_30430[(23)]);
var inst_30389 = cljs.core.chunk_first(inst_30383);
var inst_30391 = cljs.core.chunk_rest(inst_30383);
var inst_30392 = cljs.core.count(inst_30389);
var inst_30364 = inst_30391;
var inst_30365 = inst_30389;
var inst_30366 = inst_30392;
var inst_30367 = (0);
var state_30430__$1 = (function (){var statearr_30479 = state_30430;
(statearr_30479[(11)] = inst_30365);

(statearr_30479[(12)] = inst_30367);

(statearr_30479[(19)] = inst_30364);

(statearr_30479[(20)] = inst_30366);

return statearr_30479;
})();
var statearr_30480_33350 = state_30430__$1;
(statearr_30480_33350[(2)] = null);

(statearr_30480_33350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (41))){
var inst_30383 = (state_30430[(23)]);
var inst_30402 = (state_30430[(2)]);
var inst_30403 = cljs.core.next(inst_30383);
var inst_30364 = inst_30403;
var inst_30365 = null;
var inst_30366 = (0);
var inst_30367 = (0);
var state_30430__$1 = (function (){var statearr_30482 = state_30430;
(statearr_30482[(11)] = inst_30365);

(statearr_30482[(12)] = inst_30367);

(statearr_30482[(19)] = inst_30364);

(statearr_30482[(25)] = inst_30402);

(statearr_30482[(20)] = inst_30366);

return statearr_30482;
})();
var statearr_30486_33351 = state_30430__$1;
(statearr_30486_33351[(2)] = null);

(statearr_30486_33351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (43))){
var state_30430__$1 = state_30430;
var statearr_30487_33352 = state_30430__$1;
(statearr_30487_33352[(2)] = null);

(statearr_30487_33352[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (29))){
var inst_30411 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30494_33353 = state_30430__$1;
(statearr_30494_33353[(2)] = inst_30411);

(statearr_30494_33353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (44))){
var inst_30420 = (state_30430[(2)]);
var state_30430__$1 = (function (){var statearr_30495 = state_30430;
(statearr_30495[(26)] = inst_30420);

return statearr_30495;
})();
var statearr_30496_33356 = state_30430__$1;
(statearr_30496_33356[(2)] = null);

(statearr_30496_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (6))){
var inst_30356 = (state_30430[(27)]);
var inst_30355 = cljs.core.deref(cs);
var inst_30356__$1 = cljs.core.keys(inst_30355);
var inst_30357 = cljs.core.count(inst_30356__$1);
var inst_30358 = cljs.core.reset_BANG_(dctr,inst_30357);
var inst_30363 = cljs.core.seq(inst_30356__$1);
var inst_30364 = inst_30363;
var inst_30365 = null;
var inst_30366 = (0);
var inst_30367 = (0);
var state_30430__$1 = (function (){var statearr_30497 = state_30430;
(statearr_30497[(27)] = inst_30356__$1);

(statearr_30497[(11)] = inst_30365);

(statearr_30497[(28)] = inst_30358);

(statearr_30497[(12)] = inst_30367);

(statearr_30497[(19)] = inst_30364);

(statearr_30497[(20)] = inst_30366);

return statearr_30497;
})();
var statearr_30500_33357 = state_30430__$1;
(statearr_30500_33357[(2)] = null);

(statearr_30500_33357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (28))){
var inst_30383 = (state_30430[(23)]);
var inst_30364 = (state_30430[(19)]);
var inst_30383__$1 = cljs.core.seq(inst_30364);
var state_30430__$1 = (function (){var statearr_30501 = state_30430;
(statearr_30501[(23)] = inst_30383__$1);

return statearr_30501;
})();
if(inst_30383__$1){
var statearr_30502_33358 = state_30430__$1;
(statearr_30502_33358[(1)] = (33));

} else {
var statearr_30503_33359 = state_30430__$1;
(statearr_30503_33359[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (25))){
var inst_30367 = (state_30430[(12)]);
var inst_30366 = (state_30430[(20)]);
var inst_30369 = (inst_30367 < inst_30366);
var inst_30370 = inst_30369;
var state_30430__$1 = state_30430;
if(cljs.core.truth_(inst_30370)){
var statearr_30504_33360 = state_30430__$1;
(statearr_30504_33360[(1)] = (27));

} else {
var statearr_30505_33363 = state_30430__$1;
(statearr_30505_33363[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (34))){
var state_30430__$1 = state_30430;
var statearr_30506_33364 = state_30430__$1;
(statearr_30506_33364[(2)] = null);

(statearr_30506_33364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (17))){
var state_30430__$1 = state_30430;
var statearr_30508_33365 = state_30430__$1;
(statearr_30508_33365[(2)] = null);

(statearr_30508_33365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (3))){
var inst_30425 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30430__$1,inst_30425);
} else {
if((state_val_30431 === (12))){
var inst_30350 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30511_33366 = state_30430__$1;
(statearr_30511_33366[(2)] = inst_30350);

(statearr_30511_33366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (2))){
var state_30430__$1 = state_30430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30430__$1,(4),ch);
} else {
if((state_val_30431 === (23))){
var state_30430__$1 = state_30430;
var statearr_30512_33367 = state_30430__$1;
(statearr_30512_33367[(2)] = null);

(statearr_30512_33367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (35))){
var inst_30409 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30513_33368 = state_30430__$1;
(statearr_30513_33368[(2)] = inst_30409);

(statearr_30513_33368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (19))){
var inst_30320 = (state_30430[(7)]);
var inst_30324 = cljs.core.chunk_first(inst_30320);
var inst_30325 = cljs.core.chunk_rest(inst_30320);
var inst_30327 = cljs.core.count(inst_30324);
var inst_30294 = inst_30325;
var inst_30295 = inst_30324;
var inst_30296 = inst_30327;
var inst_30297 = (0);
var state_30430__$1 = (function (){var statearr_30515 = state_30430;
(statearr_30515[(13)] = inst_30297);

(statearr_30515[(14)] = inst_30294);

(statearr_30515[(16)] = inst_30296);

(statearr_30515[(17)] = inst_30295);

return statearr_30515;
})();
var statearr_30516_33370 = state_30430__$1;
(statearr_30516_33370[(2)] = null);

(statearr_30516_33370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (11))){
var inst_30294 = (state_30430[(14)]);
var inst_30320 = (state_30430[(7)]);
var inst_30320__$1 = cljs.core.seq(inst_30294);
var state_30430__$1 = (function (){var statearr_30517 = state_30430;
(statearr_30517[(7)] = inst_30320__$1);

return statearr_30517;
})();
if(inst_30320__$1){
var statearr_30519_33378 = state_30430__$1;
(statearr_30519_33378[(1)] = (16));

} else {
var statearr_30520_33379 = state_30430__$1;
(statearr_30520_33379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (9))){
var inst_30353 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30522_33380 = state_30430__$1;
(statearr_30522_33380[(2)] = inst_30353);

(statearr_30522_33380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (5))){
var inst_30292 = cljs.core.deref(cs);
var inst_30293 = cljs.core.seq(inst_30292);
var inst_30294 = inst_30293;
var inst_30295 = null;
var inst_30296 = (0);
var inst_30297 = (0);
var state_30430__$1 = (function (){var statearr_30523 = state_30430;
(statearr_30523[(13)] = inst_30297);

(statearr_30523[(14)] = inst_30294);

(statearr_30523[(16)] = inst_30296);

(statearr_30523[(17)] = inst_30295);

return statearr_30523;
})();
var statearr_30525_33381 = state_30430__$1;
(statearr_30525_33381[(2)] = null);

(statearr_30525_33381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (14))){
var state_30430__$1 = state_30430;
var statearr_30529_33382 = state_30430__$1;
(statearr_30529_33382[(2)] = null);

(statearr_30529_33382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (45))){
var inst_30417 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30530_33383 = state_30430__$1;
(statearr_30530_33383[(2)] = inst_30417);

(statearr_30530_33383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (26))){
var inst_30356 = (state_30430[(27)]);
var inst_30413 = (state_30430[(2)]);
var inst_30414 = cljs.core.seq(inst_30356);
var state_30430__$1 = (function (){var statearr_30534 = state_30430;
(statearr_30534[(29)] = inst_30413);

return statearr_30534;
})();
if(inst_30414){
var statearr_30535_33384 = state_30430__$1;
(statearr_30535_33384[(1)] = (42));

} else {
var statearr_30536_33385 = state_30430__$1;
(statearr_30536_33385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (16))){
var inst_30320 = (state_30430[(7)]);
var inst_30322 = cljs.core.chunked_seq_QMARK_(inst_30320);
var state_30430__$1 = state_30430;
if(inst_30322){
var statearr_30538_33386 = state_30430__$1;
(statearr_30538_33386[(1)] = (19));

} else {
var statearr_30539_33387 = state_30430__$1;
(statearr_30539_33387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (38))){
var inst_30406 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30540_33388 = state_30430__$1;
(statearr_30540_33388[(2)] = inst_30406);

(statearr_30540_33388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (30))){
var state_30430__$1 = state_30430;
var statearr_30541_33389 = state_30430__$1;
(statearr_30541_33389[(2)] = null);

(statearr_30541_33389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (10))){
var inst_30297 = (state_30430[(13)]);
var inst_30295 = (state_30430[(17)]);
var inst_30309 = cljs.core._nth(inst_30295,inst_30297);
var inst_30310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30309,(0),null);
var inst_30311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30309,(1),null);
var state_30430__$1 = (function (){var statearr_30546 = state_30430;
(statearr_30546[(24)] = inst_30310);

return statearr_30546;
})();
if(cljs.core.truth_(inst_30311)){
var statearr_30548_33390 = state_30430__$1;
(statearr_30548_33390[(1)] = (13));

} else {
var statearr_30549_33391 = state_30430__$1;
(statearr_30549_33391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (18))){
var inst_30348 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30550_33392 = state_30430__$1;
(statearr_30550_33392[(2)] = inst_30348);

(statearr_30550_33392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (42))){
var state_30430__$1 = state_30430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30430__$1,(45),dchan);
} else {
if((state_val_30431 === (37))){
var inst_30279 = (state_30430[(9)]);
var inst_30383 = (state_30430[(23)]);
var inst_30396 = (state_30430[(22)]);
var inst_30396__$1 = cljs.core.first(inst_30383);
var inst_30397 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30396__$1,inst_30279,done);
var state_30430__$1 = (function (){var statearr_30557 = state_30430;
(statearr_30557[(22)] = inst_30396__$1);

return statearr_30557;
})();
if(cljs.core.truth_(inst_30397)){
var statearr_30558_33397 = state_30430__$1;
(statearr_30558_33397[(1)] = (39));

} else {
var statearr_30559_33398 = state_30430__$1;
(statearr_30559_33398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (8))){
var inst_30297 = (state_30430[(13)]);
var inst_30296 = (state_30430[(16)]);
var inst_30300 = (inst_30297 < inst_30296);
var inst_30301 = inst_30300;
var state_30430__$1 = state_30430;
if(cljs.core.truth_(inst_30301)){
var statearr_30560_33399 = state_30430__$1;
(statearr_30560_33399[(1)] = (10));

} else {
var statearr_30561_33400 = state_30430__$1;
(statearr_30561_33400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28489__auto__ = null;
var cljs$core$async$mult_$_state_machine__28489__auto____0 = (function (){
var statearr_30566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30566[(0)] = cljs$core$async$mult_$_state_machine__28489__auto__);

(statearr_30566[(1)] = (1));

return statearr_30566;
});
var cljs$core$async$mult_$_state_machine__28489__auto____1 = (function (state_30430){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_30430);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e30570){var ex__28492__auto__ = e30570;
var statearr_30571_33416 = state_30430;
(statearr_30571_33416[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_30430[(4)]))){
var statearr_30572_33417 = state_30430;
(statearr_30572_33417[(1)] = cljs.core.first((state_30430[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33418 = state_30430;
state_30430 = G__33418;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28489__auto__ = function(state_30430){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28489__auto____1.call(this,state_30430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28489__auto____0;
cljs$core$async$mult_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28489__auto____1;
return cljs$core$async$mult_$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_30573 = f__28992__auto__();
(statearr_30573[(6)] = c__28991__auto___33284);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30579 = arguments.length;
switch (G__30579) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33425 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33425(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33432 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33432(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33436 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33436(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33447 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33447(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33448 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33448(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33450 = arguments.length;
var i__4819__auto___33451 = (0);
while(true){
if((i__4819__auto___33451 < len__4818__auto___33450)){
args__4824__auto__.push((arguments[i__4819__auto___33451]));

var G__33452 = (i__4819__auto___33451 + (1));
i__4819__auto___33451 = G__33452;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30638){
var map__30639 = p__30638;
var map__30639__$1 = cljs.core.__destructure_map(map__30639);
var opts = map__30639__$1;
var statearr_30640_33453 = state;
(statearr_30640_33453[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30641_33460 = state;
(statearr_30641_33460[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30644_33461 = state;
(statearr_30644_33461[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30630){
var G__30631 = cljs.core.first(seq30630);
var seq30630__$1 = cljs.core.next(seq30630);
var G__30632 = cljs.core.first(seq30630__$1);
var seq30630__$2 = cljs.core.next(seq30630__$1);
var G__30633 = cljs.core.first(seq30630__$2);
var seq30630__$3 = cljs.core.next(seq30630__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30631,G__30632,G__30633,seq30630__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30665 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30666){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30666 = meta30666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30667,meta30666__$1){
var self__ = this;
var _30667__$1 = this;
return (new cljs.core.async.t_cljs$core$async30665(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30666__$1));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30667){
var self__ = this;
var _30667__$1 = this;
return self__.meta30666;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30665.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30666","meta30666",2146358070,null)], null);
}));

(cljs.core.async.t_cljs$core$async30665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30665");

(cljs.core.async.t_cljs$core$async30665.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30665.
 */
cljs.core.async.__GT_t_cljs$core$async30665 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30665(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30666){
return (new cljs.core.async.t_cljs$core$async30665(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30666));
});

}

return (new cljs.core.async.t_cljs$core$async30665(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28991__auto___33480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_30799){
var state_val_30800 = (state_30799[(1)]);
if((state_val_30800 === (7))){
var inst_30752 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
if(cljs.core.truth_(inst_30752)){
var statearr_30809_33481 = state_30799__$1;
(statearr_30809_33481[(1)] = (8));

} else {
var statearr_30811_33483 = state_30799__$1;
(statearr_30811_33483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (20))){
var inst_30742 = (state_30799[(7)]);
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30799__$1,(23),out,inst_30742);
} else {
if((state_val_30800 === (1))){
var inst_30716 = calc_state();
var inst_30717 = cljs.core.__destructure_map(inst_30716);
var inst_30718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30727 = inst_30716;
var state_30799__$1 = (function (){var statearr_30821 = state_30799;
(statearr_30821[(8)] = inst_30718);

(statearr_30821[(9)] = inst_30722);

(statearr_30821[(10)] = inst_30723);

(statearr_30821[(11)] = inst_30727);

return statearr_30821;
})();
var statearr_30824_33491 = state_30799__$1;
(statearr_30824_33491[(2)] = null);

(statearr_30824_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (24))){
var inst_30732 = (state_30799[(12)]);
var inst_30727 = inst_30732;
var state_30799__$1 = (function (){var statearr_30834 = state_30799;
(statearr_30834[(11)] = inst_30727);

return statearr_30834;
})();
var statearr_30835_33494 = state_30799__$1;
(statearr_30835_33494[(2)] = null);

(statearr_30835_33494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (4))){
var inst_30747 = (state_30799[(13)]);
var inst_30742 = (state_30799[(7)]);
var inst_30741 = (state_30799[(2)]);
var inst_30742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30741,(0),null);
var inst_30744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30741,(1),null);
var inst_30747__$1 = (inst_30742__$1 == null);
var state_30799__$1 = (function (){var statearr_30842 = state_30799;
(statearr_30842[(13)] = inst_30747__$1);

(statearr_30842[(7)] = inst_30742__$1);

(statearr_30842[(14)] = inst_30744);

return statearr_30842;
})();
if(cljs.core.truth_(inst_30747__$1)){
var statearr_30843_33499 = state_30799__$1;
(statearr_30843_33499[(1)] = (5));

} else {
var statearr_30845_33500 = state_30799__$1;
(statearr_30845_33500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (15))){
var inst_30771 = (state_30799[(15)]);
var inst_30733 = (state_30799[(16)]);
var inst_30771__$1 = cljs.core.empty_QMARK_(inst_30733);
var state_30799__$1 = (function (){var statearr_30849 = state_30799;
(statearr_30849[(15)] = inst_30771__$1);

return statearr_30849;
})();
if(inst_30771__$1){
var statearr_30850_33506 = state_30799__$1;
(statearr_30850_33506[(1)] = (17));

} else {
var statearr_30851_33507 = state_30799__$1;
(statearr_30851_33507[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (21))){
var inst_30732 = (state_30799[(12)]);
var inst_30727 = inst_30732;
var state_30799__$1 = (function (){var statearr_30853 = state_30799;
(statearr_30853[(11)] = inst_30727);

return statearr_30853;
})();
var statearr_30854_33508 = state_30799__$1;
(statearr_30854_33508[(2)] = null);

(statearr_30854_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (13))){
var inst_30760 = (state_30799[(2)]);
var inst_30761 = calc_state();
var inst_30727 = inst_30761;
var state_30799__$1 = (function (){var statearr_30859 = state_30799;
(statearr_30859[(17)] = inst_30760);

(statearr_30859[(11)] = inst_30727);

return statearr_30859;
})();
var statearr_30860_33515 = state_30799__$1;
(statearr_30860_33515[(2)] = null);

(statearr_30860_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (22))){
var inst_30792 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30862_33516 = state_30799__$1;
(statearr_30862_33516[(2)] = inst_30792);

(statearr_30862_33516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (6))){
var inst_30744 = (state_30799[(14)]);
var inst_30750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30744,change);
var state_30799__$1 = state_30799;
var statearr_30870_33521 = state_30799__$1;
(statearr_30870_33521[(2)] = inst_30750);

(statearr_30870_33521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (25))){
var state_30799__$1 = state_30799;
var statearr_30872_33522 = state_30799__$1;
(statearr_30872_33522[(2)] = null);

(statearr_30872_33522[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (17))){
var inst_30735 = (state_30799[(18)]);
var inst_30744 = (state_30799[(14)]);
var inst_30774 = (inst_30735.cljs$core$IFn$_invoke$arity$1 ? inst_30735.cljs$core$IFn$_invoke$arity$1(inst_30744) : inst_30735.call(null,inst_30744));
var inst_30775 = cljs.core.not(inst_30774);
var state_30799__$1 = state_30799;
var statearr_30877_33532 = state_30799__$1;
(statearr_30877_33532[(2)] = inst_30775);

(statearr_30877_33532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (3))){
var inst_30796 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30799__$1,inst_30796);
} else {
if((state_val_30800 === (12))){
var state_30799__$1 = state_30799;
var statearr_30879_33533 = state_30799__$1;
(statearr_30879_33533[(2)] = null);

(statearr_30879_33533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (2))){
var inst_30732 = (state_30799[(12)]);
var inst_30727 = (state_30799[(11)]);
var inst_30732__$1 = cljs.core.__destructure_map(inst_30727);
var inst_30733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30799__$1 = (function (){var statearr_30884 = state_30799;
(statearr_30884[(18)] = inst_30735);

(statearr_30884[(16)] = inst_30733);

(statearr_30884[(12)] = inst_30732__$1);

return statearr_30884;
})();
return cljs.core.async.ioc_alts_BANG_(state_30799__$1,(4),inst_30736);
} else {
if((state_val_30800 === (23))){
var inst_30783 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
if(cljs.core.truth_(inst_30783)){
var statearr_30889_33535 = state_30799__$1;
(statearr_30889_33535[(1)] = (24));

} else {
var statearr_30890_33536 = state_30799__$1;
(statearr_30890_33536[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (19))){
var inst_30778 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30892_33537 = state_30799__$1;
(statearr_30892_33537[(2)] = inst_30778);

(statearr_30892_33537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (11))){
var inst_30744 = (state_30799[(14)]);
var inst_30756 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30744);
var state_30799__$1 = state_30799;
var statearr_30900_33539 = state_30799__$1;
(statearr_30900_33539[(2)] = inst_30756);

(statearr_30900_33539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (9))){
var inst_30733 = (state_30799[(16)]);
var inst_30744 = (state_30799[(14)]);
var inst_30765 = (state_30799[(19)]);
var inst_30765__$1 = (inst_30733.cljs$core$IFn$_invoke$arity$1 ? inst_30733.cljs$core$IFn$_invoke$arity$1(inst_30744) : inst_30733.call(null,inst_30744));
var state_30799__$1 = (function (){var statearr_30902 = state_30799;
(statearr_30902[(19)] = inst_30765__$1);

return statearr_30902;
})();
if(cljs.core.truth_(inst_30765__$1)){
var statearr_30908_33545 = state_30799__$1;
(statearr_30908_33545[(1)] = (14));

} else {
var statearr_30910_33546 = state_30799__$1;
(statearr_30910_33546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (5))){
var inst_30747 = (state_30799[(13)]);
var state_30799__$1 = state_30799;
var statearr_30914_33547 = state_30799__$1;
(statearr_30914_33547[(2)] = inst_30747);

(statearr_30914_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (14))){
var inst_30765 = (state_30799[(19)]);
var state_30799__$1 = state_30799;
var statearr_30918_33548 = state_30799__$1;
(statearr_30918_33548[(2)] = inst_30765);

(statearr_30918_33548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (26))){
var inst_30788 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30923_33549 = state_30799__$1;
(statearr_30923_33549[(2)] = inst_30788);

(statearr_30923_33549[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (16))){
var inst_30780 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
if(cljs.core.truth_(inst_30780)){
var statearr_30927_33552 = state_30799__$1;
(statearr_30927_33552[(1)] = (20));

} else {
var statearr_30928_33553 = state_30799__$1;
(statearr_30928_33553[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (10))){
var inst_30794 = (state_30799[(2)]);
var state_30799__$1 = state_30799;
var statearr_30930_33555 = state_30799__$1;
(statearr_30930_33555[(2)] = inst_30794);

(statearr_30930_33555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (18))){
var inst_30771 = (state_30799[(15)]);
var state_30799__$1 = state_30799;
var statearr_30937_33557 = state_30799__$1;
(statearr_30937_33557[(2)] = inst_30771);

(statearr_30937_33557[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30800 === (8))){
var inst_30742 = (state_30799[(7)]);
var inst_30754 = (inst_30742 == null);
var state_30799__$1 = state_30799;
if(cljs.core.truth_(inst_30754)){
var statearr_30940_33559 = state_30799__$1;
(statearr_30940_33559[(1)] = (11));

} else {
var statearr_30947_33560 = state_30799__$1;
(statearr_30947_33560[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28489__auto__ = null;
var cljs$core$async$mix_$_state_machine__28489__auto____0 = (function (){
var statearr_30951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30951[(0)] = cljs$core$async$mix_$_state_machine__28489__auto__);

(statearr_30951[(1)] = (1));

return statearr_30951;
});
var cljs$core$async$mix_$_state_machine__28489__auto____1 = (function (state_30799){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_30799);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e30953){var ex__28492__auto__ = e30953;
var statearr_30955_33562 = state_30799;
(statearr_30955_33562[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_30799[(4)]))){
var statearr_30958_33566 = state_30799;
(statearr_30958_33566[(1)] = cljs.core.first((state_30799[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33567 = state_30799;
state_30799 = G__33567;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28489__auto__ = function(state_30799){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28489__auto____1.call(this,state_30799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28489__auto____0;
cljs$core$async$mix_$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28489__auto____1;
return cljs$core$async$mix_$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_30961 = f__28992__auto__();
(statearr_30961[(6)] = c__28991__auto___33480);

return statearr_30961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33570 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33570(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33572 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33572(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33580 = (function() {
var G__33581 = null;
var G__33581__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33581__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33581 = function(p,v){
switch(arguments.length){
case 1:
return G__33581__1.call(this,p);
case 2:
return G__33581__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33581.cljs$core$IFn$_invoke$arity$1 = G__33581__1;
G__33581.cljs$core$IFn$_invoke$arity$2 = G__33581__2;
return G__33581;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31026 = arguments.length;
switch (G__31026) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33580(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33580(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31047 = arguments.length;
switch (G__31047) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31039_SHARP_){
if(cljs.core.truth_((p1__31039_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31039_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31039_SHARP_.call(null,topic)))){
return p1__31039_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31039_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31063,meta31062__$1){
var self__ = this;
var _31063__$1 = this;
return (new cljs.core.async.t_cljs$core$async31061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31062__$1));
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31063){
var self__ = this;
var _31063__$1 = this;
return self__.meta31062;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31062","meta31062",-792931562,null)], null);
}));

(cljs.core.async.t_cljs$core$async31061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31061");

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31061.
 */
cljs.core.async.__GT_t_cljs$core$async31061 = (function cljs$core$async$__GT_t_cljs$core$async31061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31062){
return (new cljs.core.async.t_cljs$core$async31061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31062));
});

}

return (new cljs.core.async.t_cljs$core$async31061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28991__auto___33592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_31193){
var state_val_31194 = (state_31193[(1)]);
if((state_val_31194 === (7))){
var inst_31189 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31195_33594 = state_31193__$1;
(statearr_31195_33594[(2)] = inst_31189);

(statearr_31195_33594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (20))){
var state_31193__$1 = state_31193;
var statearr_31200_33595 = state_31193__$1;
(statearr_31200_33595[(2)] = null);

(statearr_31200_33595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (1))){
var state_31193__$1 = state_31193;
var statearr_31205_33596 = state_31193__$1;
(statearr_31205_33596[(2)] = null);

(statearr_31205_33596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (24))){
var inst_31172 = (state_31193[(7)]);
var inst_31181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31172);
var state_31193__$1 = state_31193;
var statearr_31210_33597 = state_31193__$1;
(statearr_31210_33597[(2)] = inst_31181);

(statearr_31210_33597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (4))){
var inst_31120 = (state_31193[(8)]);
var inst_31120__$1 = (state_31193[(2)]);
var inst_31121 = (inst_31120__$1 == null);
var state_31193__$1 = (function (){var statearr_31220 = state_31193;
(statearr_31220[(8)] = inst_31120__$1);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31121)){
var statearr_31221_33598 = state_31193__$1;
(statearr_31221_33598[(1)] = (5));

} else {
var statearr_31224_33599 = state_31193__$1;
(statearr_31224_33599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (15))){
var inst_31166 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31225_33600 = state_31193__$1;
(statearr_31225_33600[(2)] = inst_31166);

(statearr_31225_33600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (21))){
var inst_31186 = (state_31193[(2)]);
var state_31193__$1 = (function (){var statearr_31226 = state_31193;
(statearr_31226[(9)] = inst_31186);

return statearr_31226;
})();
var statearr_31231_33601 = state_31193__$1;
(statearr_31231_33601[(2)] = null);

(statearr_31231_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (13))){
var inst_31146 = (state_31193[(10)]);
var inst_31150 = cljs.core.chunked_seq_QMARK_(inst_31146);
var state_31193__$1 = state_31193;
if(inst_31150){
var statearr_31232_33602 = state_31193__$1;
(statearr_31232_33602[(1)] = (16));

} else {
var statearr_31233_33603 = state_31193__$1;
(statearr_31233_33603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (22))){
var inst_31178 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31178)){
var statearr_31234_33604 = state_31193__$1;
(statearr_31234_33604[(1)] = (23));

} else {
var statearr_31239_33605 = state_31193__$1;
(statearr_31239_33605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (6))){
var inst_31172 = (state_31193[(7)]);
var inst_31174 = (state_31193[(11)]);
var inst_31120 = (state_31193[(8)]);
var inst_31172__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31120) : topic_fn.call(null,inst_31120));
var inst_31173 = cljs.core.deref(mults);
var inst_31174__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31173,inst_31172__$1);
var state_31193__$1 = (function (){var statearr_31244 = state_31193;
(statearr_31244[(7)] = inst_31172__$1);

(statearr_31244[(11)] = inst_31174__$1);

return statearr_31244;
})();
if(cljs.core.truth_(inst_31174__$1)){
var statearr_31246_33607 = state_31193__$1;
(statearr_31246_33607[(1)] = (19));

} else {
var statearr_31247_33608 = state_31193__$1;
(statearr_31247_33608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (25))){
var inst_31183 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31248_33609 = state_31193__$1;
(statearr_31248_33609[(2)] = inst_31183);

(statearr_31248_33609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (17))){
var inst_31146 = (state_31193[(10)]);
var inst_31157 = cljs.core.first(inst_31146);
var inst_31158 = cljs.core.async.muxch_STAR_(inst_31157);
var inst_31159 = cljs.core.async.close_BANG_(inst_31158);
var inst_31160 = cljs.core.next(inst_31146);
var inst_31132 = inst_31160;
var inst_31133 = null;
var inst_31134 = (0);
var inst_31135 = (0);
var state_31193__$1 = (function (){var statearr_31252 = state_31193;
(statearr_31252[(12)] = inst_31133);

(statearr_31252[(13)] = inst_31159);

(statearr_31252[(14)] = inst_31135);

(statearr_31252[(15)] = inst_31132);

(statearr_31252[(16)] = inst_31134);

return statearr_31252;
})();
var statearr_31253_33610 = state_31193__$1;
(statearr_31253_33610[(2)] = null);

(statearr_31253_33610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (3))){
var inst_31191 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31193__$1,inst_31191);
} else {
if((state_val_31194 === (12))){
var inst_31168 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31261_33611 = state_31193__$1;
(statearr_31261_33611[(2)] = inst_31168);

(statearr_31261_33611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (2))){
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31193__$1,(4),ch);
} else {
if((state_val_31194 === (23))){
var state_31193__$1 = state_31193;
var statearr_31267_33616 = state_31193__$1;
(statearr_31267_33616[(2)] = null);

(statearr_31267_33616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (19))){
var inst_31174 = (state_31193[(11)]);
var inst_31120 = (state_31193[(8)]);
var inst_31176 = cljs.core.async.muxch_STAR_(inst_31174);
var state_31193__$1 = state_31193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31193__$1,(22),inst_31176,inst_31120);
} else {
if((state_val_31194 === (11))){
var inst_31146 = (state_31193[(10)]);
var inst_31132 = (state_31193[(15)]);
var inst_31146__$1 = cljs.core.seq(inst_31132);
var state_31193__$1 = (function (){var statearr_31273 = state_31193;
(statearr_31273[(10)] = inst_31146__$1);

return statearr_31273;
})();
if(inst_31146__$1){
var statearr_31275_33617 = state_31193__$1;
(statearr_31275_33617[(1)] = (13));

} else {
var statearr_31278_33618 = state_31193__$1;
(statearr_31278_33618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (9))){
var inst_31170 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31279_33619 = state_31193__$1;
(statearr_31279_33619[(2)] = inst_31170);

(statearr_31279_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (5))){
var inst_31129 = cljs.core.deref(mults);
var inst_31130 = cljs.core.vals(inst_31129);
var inst_31131 = cljs.core.seq(inst_31130);
var inst_31132 = inst_31131;
var inst_31133 = null;
var inst_31134 = (0);
var inst_31135 = (0);
var state_31193__$1 = (function (){var statearr_31284 = state_31193;
(statearr_31284[(12)] = inst_31133);

(statearr_31284[(14)] = inst_31135);

(statearr_31284[(15)] = inst_31132);

(statearr_31284[(16)] = inst_31134);

return statearr_31284;
})();
var statearr_31285_33620 = state_31193__$1;
(statearr_31285_33620[(2)] = null);

(statearr_31285_33620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (14))){
var state_31193__$1 = state_31193;
var statearr_31292_33621 = state_31193__$1;
(statearr_31292_33621[(2)] = null);

(statearr_31292_33621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (16))){
var inst_31146 = (state_31193[(10)]);
var inst_31152 = cljs.core.chunk_first(inst_31146);
var inst_31153 = cljs.core.chunk_rest(inst_31146);
var inst_31154 = cljs.core.count(inst_31152);
var inst_31132 = inst_31153;
var inst_31133 = inst_31152;
var inst_31134 = inst_31154;
var inst_31135 = (0);
var state_31193__$1 = (function (){var statearr_31294 = state_31193;
(statearr_31294[(12)] = inst_31133);

(statearr_31294[(14)] = inst_31135);

(statearr_31294[(15)] = inst_31132);

(statearr_31294[(16)] = inst_31134);

return statearr_31294;
})();
var statearr_31296_33622 = state_31193__$1;
(statearr_31296_33622[(2)] = null);

(statearr_31296_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (10))){
var inst_31133 = (state_31193[(12)]);
var inst_31135 = (state_31193[(14)]);
var inst_31132 = (state_31193[(15)]);
var inst_31134 = (state_31193[(16)]);
var inst_31140 = cljs.core._nth(inst_31133,inst_31135);
var inst_31141 = cljs.core.async.muxch_STAR_(inst_31140);
var inst_31142 = cljs.core.async.close_BANG_(inst_31141);
var inst_31143 = (inst_31135 + (1));
var tmp31286 = inst_31133;
var tmp31287 = inst_31132;
var tmp31288 = inst_31134;
var inst_31132__$1 = tmp31287;
var inst_31133__$1 = tmp31286;
var inst_31134__$1 = tmp31288;
var inst_31135__$1 = inst_31143;
var state_31193__$1 = (function (){var statearr_31298 = state_31193;
(statearr_31298[(12)] = inst_31133__$1);

(statearr_31298[(14)] = inst_31135__$1);

(statearr_31298[(15)] = inst_31132__$1);

(statearr_31298[(16)] = inst_31134__$1);

(statearr_31298[(17)] = inst_31142);

return statearr_31298;
})();
var statearr_31299_33624 = state_31193__$1;
(statearr_31299_33624[(2)] = null);

(statearr_31299_33624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (18))){
var inst_31163 = (state_31193[(2)]);
var state_31193__$1 = state_31193;
var statearr_31302_33629 = state_31193__$1;
(statearr_31302_33629[(2)] = inst_31163);

(statearr_31302_33629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (8))){
var inst_31135 = (state_31193[(14)]);
var inst_31134 = (state_31193[(16)]);
var inst_31137 = (inst_31135 < inst_31134);
var inst_31138 = inst_31137;
var state_31193__$1 = state_31193;
if(cljs.core.truth_(inst_31138)){
var statearr_31318_33633 = state_31193__$1;
(statearr_31318_33633[(1)] = (10));

} else {
var statearr_31322_33634 = state_31193__$1;
(statearr_31322_33634[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_31328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31328[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_31328[(1)] = (1));

return statearr_31328;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_31193){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_31193);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e31333){var ex__28492__auto__ = e31333;
var statearr_31334_33638 = state_31193;
(statearr_31334_33638[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_31193[(4)]))){
var statearr_31335_33639 = state_31193;
(statearr_31335_33639[(1)] = cljs.core.first((state_31193[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33643 = state_31193;
state_31193 = G__33643;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_31193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_31193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_31339 = f__28992__auto__();
(statearr_31339[(6)] = c__28991__auto___33592);

return statearr_31339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31342 = arguments.length;
switch (G__31342) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31358 = arguments.length;
switch (G__31358) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31374 = arguments.length;
switch (G__31374) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28991__auto___33662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_31442){
var state_val_31444 = (state_31442[(1)]);
if((state_val_31444 === (7))){
var state_31442__$1 = state_31442;
var statearr_31454_33663 = state_31442__$1;
(statearr_31454_33663[(2)] = null);

(statearr_31454_33663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (1))){
var state_31442__$1 = state_31442;
var statearr_31455_33664 = state_31442__$1;
(statearr_31455_33664[(2)] = null);

(statearr_31455_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (4))){
var inst_31390 = (state_31442[(7)]);
var inst_31391 = (state_31442[(8)]);
var inst_31393 = (inst_31391 < inst_31390);
var state_31442__$1 = state_31442;
if(cljs.core.truth_(inst_31393)){
var statearr_31459_33665 = state_31442__$1;
(statearr_31459_33665[(1)] = (6));

} else {
var statearr_31460_33666 = state_31442__$1;
(statearr_31460_33666[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (15))){
var inst_31427 = (state_31442[(9)]);
var inst_31432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31427);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31442__$1,(17),out,inst_31432);
} else {
if((state_val_31444 === (13))){
var inst_31427 = (state_31442[(9)]);
var inst_31427__$1 = (state_31442[(2)]);
var inst_31428 = cljs.core.some(cljs.core.nil_QMARK_,inst_31427__$1);
var state_31442__$1 = (function (){var statearr_31462 = state_31442;
(statearr_31462[(9)] = inst_31427__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31463_33667 = state_31442__$1;
(statearr_31463_33667[(1)] = (14));

} else {
var statearr_31464_33668 = state_31442__$1;
(statearr_31464_33668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (6))){
var state_31442__$1 = state_31442;
var statearr_31469_33669 = state_31442__$1;
(statearr_31469_33669[(2)] = null);

(statearr_31469_33669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (17))){
var inst_31434 = (state_31442[(2)]);
var state_31442__$1 = (function (){var statearr_31487 = state_31442;
(statearr_31487[(10)] = inst_31434);

return statearr_31487;
})();
var statearr_31488_33670 = state_31442__$1;
(statearr_31488_33670[(2)] = null);

(statearr_31488_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (3))){
var inst_31439 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31442__$1,inst_31439);
} else {
if((state_val_31444 === (12))){
var _ = (function (){var statearr_31491 = state_31442;
(statearr_31491[(4)] = cljs.core.rest((state_31442[(4)])));

return statearr_31491;
})();
var state_31442__$1 = state_31442;
var ex31485 = (state_31442__$1[(2)]);
var statearr_31492_33671 = state_31442__$1;
(statearr_31492_33671[(5)] = ex31485);


if((ex31485 instanceof Object)){
var statearr_31497_33672 = state_31442__$1;
(statearr_31497_33672[(1)] = (11));

(statearr_31497_33672[(5)] = null);

} else {
throw ex31485;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (2))){
var inst_31389 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31390 = cnt;
var inst_31391 = (0);
var state_31442__$1 = (function (){var statearr_31499 = state_31442;
(statearr_31499[(7)] = inst_31390);

(statearr_31499[(8)] = inst_31391);

(statearr_31499[(11)] = inst_31389);

return statearr_31499;
})();
var statearr_31500_33677 = state_31442__$1;
(statearr_31500_33677[(2)] = null);

(statearr_31500_33677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (11))){
var inst_31406 = (state_31442[(2)]);
var inst_31407 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31442__$1 = (function (){var statearr_31501 = state_31442;
(statearr_31501[(12)] = inst_31406);

return statearr_31501;
})();
var statearr_31502_33681 = state_31442__$1;
(statearr_31502_33681[(2)] = inst_31407);

(statearr_31502_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (9))){
var inst_31391 = (state_31442[(8)]);
var _ = (function (){var statearr_31503 = state_31442;
(statearr_31503[(4)] = cljs.core.cons((12),(state_31442[(4)])));

return statearr_31503;
})();
var inst_31413 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31391) : chs__$1.call(null,inst_31391));
var inst_31414 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31391) : done.call(null,inst_31391));
var inst_31415 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31413,inst_31414);
var ___$1 = (function (){var statearr_31504 = state_31442;
(statearr_31504[(4)] = cljs.core.rest((state_31442[(4)])));

return statearr_31504;
})();
var state_31442__$1 = state_31442;
var statearr_31506_33685 = state_31442__$1;
(statearr_31506_33685[(2)] = inst_31415);

(statearr_31506_33685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (5))){
var inst_31425 = (state_31442[(2)]);
var state_31442__$1 = (function (){var statearr_31508 = state_31442;
(statearr_31508[(13)] = inst_31425);

return statearr_31508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31442__$1,(13),dchan);
} else {
if((state_val_31444 === (14))){
var inst_31430 = cljs.core.async.close_BANG_(out);
var state_31442__$1 = state_31442;
var statearr_31509_33686 = state_31442__$1;
(statearr_31509_33686[(2)] = inst_31430);

(statearr_31509_33686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (16))){
var inst_31437 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31510_33687 = state_31442__$1;
(statearr_31510_33687[(2)] = inst_31437);

(statearr_31510_33687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (10))){
var inst_31391 = (state_31442[(8)]);
var inst_31418 = (state_31442[(2)]);
var inst_31419 = (inst_31391 + (1));
var inst_31391__$1 = inst_31419;
var state_31442__$1 = (function (){var statearr_31511 = state_31442;
(statearr_31511[(14)] = inst_31418);

(statearr_31511[(8)] = inst_31391__$1);

return statearr_31511;
})();
var statearr_31516_33692 = state_31442__$1;
(statearr_31516_33692[(2)] = null);

(statearr_31516_33692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31444 === (8))){
var inst_31423 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31523_33695 = state_31442__$1;
(statearr_31523_33695[(2)] = inst_31423);

(statearr_31523_33695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31527[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_31442){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_31442);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e31532){var ex__28492__auto__ = e31532;
var statearr_31533_33702 = state_31442;
(statearr_31533_33702[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_31442[(4)]))){
var statearr_31534_33703 = state_31442;
(statearr_31534_33703[(1)] = cljs.core.first((state_31442[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33704 = state_31442;
state_31442 = G__33704;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_31442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_31442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_31543 = f__28992__auto__();
(statearr_31543[(6)] = c__28991__auto___33662);

return statearr_31543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31547 = arguments.length;
switch (G__31547) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___33716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_31580){
var state_val_31581 = (state_31580[(1)]);
if((state_val_31581 === (7))){
var inst_31559 = (state_31580[(7)]);
var inst_31560 = (state_31580[(8)]);
var inst_31559__$1 = (state_31580[(2)]);
var inst_31560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31559__$1,(0),null);
var inst_31561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31559__$1,(1),null);
var inst_31562 = (inst_31560__$1 == null);
var state_31580__$1 = (function (){var statearr_31582 = state_31580;
(statearr_31582[(9)] = inst_31561);

(statearr_31582[(7)] = inst_31559__$1);

(statearr_31582[(8)] = inst_31560__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31562)){
var statearr_31583_33719 = state_31580__$1;
(statearr_31583_33719[(1)] = (8));

} else {
var statearr_31584_33720 = state_31580__$1;
(statearr_31584_33720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (1))){
var inst_31549 = cljs.core.vec(chs);
var inst_31550 = inst_31549;
var state_31580__$1 = (function (){var statearr_31591 = state_31580;
(statearr_31591[(10)] = inst_31550);

return statearr_31591;
})();
var statearr_31592_33723 = state_31580__$1;
(statearr_31592_33723[(2)] = null);

(statearr_31592_33723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (4))){
var inst_31550 = (state_31580[(10)]);
var state_31580__$1 = state_31580;
return cljs.core.async.ioc_alts_BANG_(state_31580__$1,(7),inst_31550);
} else {
if((state_val_31581 === (6))){
var inst_31576 = (state_31580[(2)]);
var state_31580__$1 = state_31580;
var statearr_31593_33725 = state_31580__$1;
(statearr_31593_33725[(2)] = inst_31576);

(statearr_31593_33725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (3))){
var inst_31578 = (state_31580[(2)]);
var state_31580__$1 = state_31580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31580__$1,inst_31578);
} else {
if((state_val_31581 === (2))){
var inst_31550 = (state_31580[(10)]);
var inst_31552 = cljs.core.count(inst_31550);
var inst_31553 = (inst_31552 > (0));
var state_31580__$1 = state_31580;
if(cljs.core.truth_(inst_31553)){
var statearr_31603_33730 = state_31580__$1;
(statearr_31603_33730[(1)] = (4));

} else {
var statearr_31604_33731 = state_31580__$1;
(statearr_31604_33731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (11))){
var inst_31550 = (state_31580[(10)]);
var inst_31569 = (state_31580[(2)]);
var tmp31594 = inst_31550;
var inst_31550__$1 = tmp31594;
var state_31580__$1 = (function (){var statearr_31605 = state_31580;
(statearr_31605[(11)] = inst_31569);

(statearr_31605[(10)] = inst_31550__$1);

return statearr_31605;
})();
var statearr_31607_33744 = state_31580__$1;
(statearr_31607_33744[(2)] = null);

(statearr_31607_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (9))){
var inst_31560 = (state_31580[(8)]);
var state_31580__$1 = state_31580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31580__$1,(11),out,inst_31560);
} else {
if((state_val_31581 === (5))){
var inst_31574 = cljs.core.async.close_BANG_(out);
var state_31580__$1 = state_31580;
var statearr_31619_33745 = state_31580__$1;
(statearr_31619_33745[(2)] = inst_31574);

(statearr_31619_33745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (10))){
var inst_31572 = (state_31580[(2)]);
var state_31580__$1 = state_31580;
var statearr_31620_33746 = state_31580__$1;
(statearr_31620_33746[(2)] = inst_31572);

(statearr_31620_33746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31581 === (8))){
var inst_31561 = (state_31580[(9)]);
var inst_31550 = (state_31580[(10)]);
var inst_31559 = (state_31580[(7)]);
var inst_31560 = (state_31580[(8)]);
var inst_31564 = (function (){var cs = inst_31550;
var vec__31555 = inst_31559;
var v = inst_31560;
var c = inst_31561;
return (function (p1__31544_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31544_SHARP_);
});
})();
var inst_31565 = cljs.core.filterv(inst_31564,inst_31550);
var inst_31550__$1 = inst_31565;
var state_31580__$1 = (function (){var statearr_31626 = state_31580;
(statearr_31626[(10)] = inst_31550__$1);

return statearr_31626;
})();
var statearr_31627_33750 = state_31580__$1;
(statearr_31627_33750[(2)] = null);

(statearr_31627_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_31629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31629[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_31629[(1)] = (1));

return statearr_31629;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_31580){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_31580);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e31630){var ex__28492__auto__ = e31630;
var statearr_31632_33751 = state_31580;
(statearr_31632_33751[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_31580[(4)]))){
var statearr_31654_33756 = state_31580;
(statearr_31654_33756[(1)] = cljs.core.first((state_31580[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_31580;
state_31580 = G__33757;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_31580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_31580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_31658 = f__28992__auto__();
(statearr_31658[(6)] = c__28991__auto___33716);

return statearr_31658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31664 = arguments.length;
switch (G__31664) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___33762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (7))){
var inst_31673 = (state_31695[(7)]);
var inst_31673__$1 = (state_31695[(2)]);
var inst_31677 = (inst_31673__$1 == null);
var inst_31678 = cljs.core.not(inst_31677);
var state_31695__$1 = (function (){var statearr_31704 = state_31695;
(statearr_31704[(7)] = inst_31673__$1);

return statearr_31704;
})();
if(inst_31678){
var statearr_31705_33769 = state_31695__$1;
(statearr_31705_33769[(1)] = (8));

} else {
var statearr_31706_33771 = state_31695__$1;
(statearr_31706_33771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (1))){
var inst_31668 = (0);
var state_31695__$1 = (function (){var statearr_31711 = state_31695;
(statearr_31711[(8)] = inst_31668);

return statearr_31711;
})();
var statearr_31713_33774 = state_31695__$1;
(statearr_31713_33774[(2)] = null);

(statearr_31713_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (4))){
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31695__$1,(7),ch);
} else {
if((state_val_31696 === (6))){
var inst_31689 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31715_33776 = state_31695__$1;
(statearr_31715_33776[(2)] = inst_31689);

(statearr_31715_33776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (3))){
var inst_31691 = (state_31695[(2)]);
var inst_31692 = cljs.core.async.close_BANG_(out);
var state_31695__$1 = (function (){var statearr_31717 = state_31695;
(statearr_31717[(9)] = inst_31691);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31695__$1,inst_31692);
} else {
if((state_val_31696 === (2))){
var inst_31668 = (state_31695[(8)]);
var inst_31670 = (inst_31668 < n);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31670)){
var statearr_31718_33791 = state_31695__$1;
(statearr_31718_33791[(1)] = (4));

} else {
var statearr_31720_33792 = state_31695__$1;
(statearr_31720_33792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (11))){
var inst_31668 = (state_31695[(8)]);
var inst_31681 = (state_31695[(2)]);
var inst_31682 = (inst_31668 + (1));
var inst_31668__$1 = inst_31682;
var state_31695__$1 = (function (){var statearr_31722 = state_31695;
(statearr_31722[(8)] = inst_31668__$1);

(statearr_31722[(10)] = inst_31681);

return statearr_31722;
})();
var statearr_31723_33797 = state_31695__$1;
(statearr_31723_33797[(2)] = null);

(statearr_31723_33797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (9))){
var state_31695__$1 = state_31695;
var statearr_31724_33798 = state_31695__$1;
(statearr_31724_33798[(2)] = null);

(statearr_31724_33798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (5))){
var state_31695__$1 = state_31695;
var statearr_31725_33799 = state_31695__$1;
(statearr_31725_33799[(2)] = null);

(statearr_31725_33799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (10))){
var inst_31686 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31726_33801 = state_31695__$1;
(statearr_31726_33801[(2)] = inst_31686);

(statearr_31726_33801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (8))){
var inst_31673 = (state_31695[(7)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31695__$1,(11),out,inst_31673);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_31730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31730[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_31730[(1)] = (1));

return statearr_31730;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_31695){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_31695);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e31731){var ex__28492__auto__ = e31731;
var statearr_31732_33804 = state_31695;
(statearr_31732_33804[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_31695[(4)]))){
var statearr_31733_33806 = state_31695;
(statearr_31733_33806[(1)] = cljs.core.first((state_31695[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33809 = state_31695;
state_31695 = G__33809;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_31734 = f__28992__auto__();
(statearr_31734[(6)] = c__28991__auto___33762);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31736 = (function (f,ch,meta31737){
this.f = f;
this.ch = ch;
this.meta31737 = meta31737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31738,meta31737__$1){
var self__ = this;
var _31738__$1 = this;
return (new cljs.core.async.t_cljs$core$async31736(self__.f,self__.ch,meta31737__$1));
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31738){
var self__ = this;
var _31738__$1 = this;
return self__.meta31737;
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31742 = (function (f,ch,meta31737,_,fn1,meta31743){
this.f = f;
this.ch = ch;
this.meta31737 = meta31737;
this._ = _;
this.fn1 = fn1;
this.meta31743 = meta31743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31744,meta31743__$1){
var self__ = this;
var _31744__$1 = this;
return (new cljs.core.async.t_cljs$core$async31742(self__.f,self__.ch,self__.meta31737,self__._,self__.fn1,meta31743__$1));
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31744){
var self__ = this;
var _31744__$1 = this;
return self__.meta31743;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31735_SHARP_){
var G__31766 = (((p1__31735_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31735_SHARP_) : self__.f.call(null,p1__31735_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31766) : f1.call(null,G__31766));
});
}));

(cljs.core.async.t_cljs$core$async31742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31737","meta31737",-1390292890,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31736","cljs.core.async/t_cljs$core$async31736",-1237549324,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31743","meta31743",357375986,null)], null);
}));

(cljs.core.async.t_cljs$core$async31742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31742");

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31742.
 */
cljs.core.async.__GT_t_cljs$core$async31742 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31742(f__$1,ch__$1,meta31737__$1,___$2,fn1__$1,meta31743){
return (new cljs.core.async.t_cljs$core$async31742(f__$1,ch__$1,meta31737__$1,___$2,fn1__$1,meta31743));
});

}

return (new cljs.core.async.t_cljs$core$async31742(self__.f,self__.ch,self__.meta31737,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31815 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31815) : self__.f.call(null,G__31815));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31737","meta31737",-1390292890,null)], null);
}));

(cljs.core.async.t_cljs$core$async31736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31736");

(cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31736.
 */
cljs.core.async.__GT_t_cljs$core$async31736 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31736(f__$1,ch__$1,meta31737){
return (new cljs.core.async.t_cljs$core$async31736(f__$1,ch__$1,meta31737));
});

}

return (new cljs.core.async.t_cljs$core$async31736(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31829 = (function (f,ch,meta31830){
this.f = f;
this.ch = ch;
this.meta31830 = meta31830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31831,meta31830__$1){
var self__ = this;
var _31831__$1 = this;
return (new cljs.core.async.t_cljs$core$async31829(self__.f,self__.ch,meta31830__$1));
}));

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31831){
var self__ = this;
var _31831__$1 = this;
return self__.meta31830;
}));

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31830","meta31830",-1667563617,null)], null);
}));

(cljs.core.async.t_cljs$core$async31829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31829");

(cljs.core.async.t_cljs$core$async31829.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31829.
 */
cljs.core.async.__GT_t_cljs$core$async31829 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31829(f__$1,ch__$1,meta31830){
return (new cljs.core.async.t_cljs$core$async31829(f__$1,ch__$1,meta31830));
});

}

return (new cljs.core.async.t_cljs$core$async31829(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31869 = (function (p,ch,meta31870){
this.p = p;
this.ch = ch;
this.meta31870 = meta31870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31871,meta31870__$1){
var self__ = this;
var _31871__$1 = this;
return (new cljs.core.async.t_cljs$core$async31869(self__.p,self__.ch,meta31870__$1));
}));

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31871){
var self__ = this;
var _31871__$1 = this;
return self__.meta31870;
}));

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31870","meta31870",1023545625,null)], null);
}));

(cljs.core.async.t_cljs$core$async31869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31869");

(cljs.core.async.t_cljs$core$async31869.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31869.
 */
cljs.core.async.__GT_t_cljs$core$async31869 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31869(p__$1,ch__$1,meta31870){
return (new cljs.core.async.t_cljs$core$async31869(p__$1,ch__$1,meta31870));
});

}

return (new cljs.core.async.t_cljs$core$async31869(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31920 = arguments.length;
switch (G__31920) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___33855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_31952){
var state_val_31953 = (state_31952[(1)]);
if((state_val_31953 === (7))){
var inst_31948 = (state_31952[(2)]);
var state_31952__$1 = state_31952;
var statearr_31962_33857 = state_31952__$1;
(statearr_31962_33857[(2)] = inst_31948);

(statearr_31962_33857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (1))){
var state_31952__$1 = state_31952;
var statearr_31967_33860 = state_31952__$1;
(statearr_31967_33860[(2)] = null);

(statearr_31967_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (4))){
var inst_31933 = (state_31952[(7)]);
var inst_31933__$1 = (state_31952[(2)]);
var inst_31934 = (inst_31933__$1 == null);
var state_31952__$1 = (function (){var statearr_31970 = state_31952;
(statearr_31970[(7)] = inst_31933__$1);

return statearr_31970;
})();
if(cljs.core.truth_(inst_31934)){
var statearr_31972_33862 = state_31952__$1;
(statearr_31972_33862[(1)] = (5));

} else {
var statearr_31975_33864 = state_31952__$1;
(statearr_31975_33864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (6))){
var inst_31933 = (state_31952[(7)]);
var inst_31939 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31933) : p.call(null,inst_31933));
var state_31952__$1 = state_31952;
if(cljs.core.truth_(inst_31939)){
var statearr_31984_33866 = state_31952__$1;
(statearr_31984_33866[(1)] = (8));

} else {
var statearr_31987_33867 = state_31952__$1;
(statearr_31987_33867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (3))){
var inst_31950 = (state_31952[(2)]);
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31952__$1,inst_31950);
} else {
if((state_val_31953 === (2))){
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31952__$1,(4),ch);
} else {
if((state_val_31953 === (11))){
var inst_31942 = (state_31952[(2)]);
var state_31952__$1 = state_31952;
var statearr_31998_33871 = state_31952__$1;
(statearr_31998_33871[(2)] = inst_31942);

(statearr_31998_33871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (9))){
var state_31952__$1 = state_31952;
var statearr_32001_33872 = state_31952__$1;
(statearr_32001_33872[(2)] = null);

(statearr_32001_33872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (5))){
var inst_31936 = cljs.core.async.close_BANG_(out);
var state_31952__$1 = state_31952;
var statearr_32005_33873 = state_31952__$1;
(statearr_32005_33873[(2)] = inst_31936);

(statearr_32005_33873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (10))){
var inst_31945 = (state_31952[(2)]);
var state_31952__$1 = (function (){var statearr_32008 = state_31952;
(statearr_32008[(8)] = inst_31945);

return statearr_32008;
})();
var statearr_32009_33874 = state_31952__$1;
(statearr_32009_33874[(2)] = null);

(statearr_32009_33874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (8))){
var inst_31933 = (state_31952[(7)]);
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31952__$1,(11),out,inst_31933);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_32016 = [null,null,null,null,null,null,null,null,null];
(statearr_32016[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_32016[(1)] = (1));

return statearr_32016;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_31952){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_31952);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e32017){var ex__28492__auto__ = e32017;
var statearr_32018_33880 = state_31952;
(statearr_32018_33880[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_31952[(4)]))){
var statearr_32021_33881 = state_31952;
(statearr_32021_33881[(1)] = cljs.core.first((state_31952[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33884 = state_31952;
state_31952 = G__33884;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_31952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_31952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_32029 = f__28992__auto__();
(statearr_32029[(6)] = c__28991__auto___33855);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32047 = arguments.length;
switch (G__32047) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_32152){
var state_val_32153 = (state_32152[(1)]);
if((state_val_32153 === (7))){
var inst_32145 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32192_33893 = state_32152__$1;
(statearr_32192_33893[(2)] = inst_32145);

(statearr_32192_33893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (20))){
var inst_32100 = (state_32152[(7)]);
var inst_32123 = (state_32152[(2)]);
var inst_32124 = cljs.core.next(inst_32100);
var inst_32084 = inst_32124;
var inst_32085 = null;
var inst_32086 = (0);
var inst_32087 = (0);
var state_32152__$1 = (function (){var statearr_32199 = state_32152;
(statearr_32199[(8)] = inst_32084);

(statearr_32199[(9)] = inst_32086);

(statearr_32199[(10)] = inst_32123);

(statearr_32199[(11)] = inst_32087);

(statearr_32199[(12)] = inst_32085);

return statearr_32199;
})();
var statearr_32204_33895 = state_32152__$1;
(statearr_32204_33895[(2)] = null);

(statearr_32204_33895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (1))){
var state_32152__$1 = state_32152;
var statearr_32206_33900 = state_32152__$1;
(statearr_32206_33900[(2)] = null);

(statearr_32206_33900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (4))){
var inst_32070 = (state_32152[(13)]);
var inst_32070__$1 = (state_32152[(2)]);
var inst_32073 = (inst_32070__$1 == null);
var state_32152__$1 = (function (){var statearr_32207 = state_32152;
(statearr_32207[(13)] = inst_32070__$1);

return statearr_32207;
})();
if(cljs.core.truth_(inst_32073)){
var statearr_32208_33903 = state_32152__$1;
(statearr_32208_33903[(1)] = (5));

} else {
var statearr_32209_33904 = state_32152__$1;
(statearr_32209_33904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (15))){
var state_32152__$1 = state_32152;
var statearr_32213_33909 = state_32152__$1;
(statearr_32213_33909[(2)] = null);

(statearr_32213_33909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (21))){
var state_32152__$1 = state_32152;
var statearr_32214_33910 = state_32152__$1;
(statearr_32214_33910[(2)] = null);

(statearr_32214_33910[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (13))){
var inst_32084 = (state_32152[(8)]);
var inst_32086 = (state_32152[(9)]);
var inst_32087 = (state_32152[(11)]);
var inst_32085 = (state_32152[(12)]);
var inst_32096 = (state_32152[(2)]);
var inst_32097 = (inst_32087 + (1));
var tmp32210 = inst_32084;
var tmp32211 = inst_32086;
var tmp32212 = inst_32085;
var inst_32084__$1 = tmp32210;
var inst_32085__$1 = tmp32212;
var inst_32086__$1 = tmp32211;
var inst_32087__$1 = inst_32097;
var state_32152__$1 = (function (){var statearr_32215 = state_32152;
(statearr_32215[(8)] = inst_32084__$1);

(statearr_32215[(9)] = inst_32086__$1);

(statearr_32215[(11)] = inst_32087__$1);

(statearr_32215[(14)] = inst_32096);

(statearr_32215[(12)] = inst_32085__$1);

return statearr_32215;
})();
var statearr_32219_33917 = state_32152__$1;
(statearr_32219_33917[(2)] = null);

(statearr_32219_33917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (22))){
var state_32152__$1 = state_32152;
var statearr_32220_33922 = state_32152__$1;
(statearr_32220_33922[(2)] = null);

(statearr_32220_33922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (6))){
var inst_32070 = (state_32152[(13)]);
var inst_32082 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32070) : f.call(null,inst_32070));
var inst_32083 = cljs.core.seq(inst_32082);
var inst_32084 = inst_32083;
var inst_32085 = null;
var inst_32086 = (0);
var inst_32087 = (0);
var state_32152__$1 = (function (){var statearr_32221 = state_32152;
(statearr_32221[(8)] = inst_32084);

(statearr_32221[(9)] = inst_32086);

(statearr_32221[(11)] = inst_32087);

(statearr_32221[(12)] = inst_32085);

return statearr_32221;
})();
var statearr_32223_33927 = state_32152__$1;
(statearr_32223_33927[(2)] = null);

(statearr_32223_33927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (17))){
var inst_32100 = (state_32152[(7)]);
var inst_32104 = cljs.core.chunk_first(inst_32100);
var inst_32106 = cljs.core.chunk_rest(inst_32100);
var inst_32118 = cljs.core.count(inst_32104);
var inst_32084 = inst_32106;
var inst_32085 = inst_32104;
var inst_32086 = inst_32118;
var inst_32087 = (0);
var state_32152__$1 = (function (){var statearr_32225 = state_32152;
(statearr_32225[(8)] = inst_32084);

(statearr_32225[(9)] = inst_32086);

(statearr_32225[(11)] = inst_32087);

(statearr_32225[(12)] = inst_32085);

return statearr_32225;
})();
var statearr_32227_33931 = state_32152__$1;
(statearr_32227_33931[(2)] = null);

(statearr_32227_33931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (3))){
var inst_32147 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32152__$1,inst_32147);
} else {
if((state_val_32153 === (12))){
var inst_32135 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32230_33933 = state_32152__$1;
(statearr_32230_33933[(2)] = inst_32135);

(statearr_32230_33933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (2))){
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32152__$1,(4),in$);
} else {
if((state_val_32153 === (23))){
var inst_32143 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32232_33936 = state_32152__$1;
(statearr_32232_33936[(2)] = inst_32143);

(statearr_32232_33936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (19))){
var inst_32130 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32235_33942 = state_32152__$1;
(statearr_32235_33942[(2)] = inst_32130);

(statearr_32235_33942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (11))){
var inst_32084 = (state_32152[(8)]);
var inst_32100 = (state_32152[(7)]);
var inst_32100__$1 = cljs.core.seq(inst_32084);
var state_32152__$1 = (function (){var statearr_32238 = state_32152;
(statearr_32238[(7)] = inst_32100__$1);

return statearr_32238;
})();
if(inst_32100__$1){
var statearr_32239_33945 = state_32152__$1;
(statearr_32239_33945[(1)] = (14));

} else {
var statearr_32240_33946 = state_32152__$1;
(statearr_32240_33946[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (9))){
var inst_32137 = (state_32152[(2)]);
var inst_32138 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32152__$1 = (function (){var statearr_32241 = state_32152;
(statearr_32241[(15)] = inst_32137);

return statearr_32241;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32246_33951 = state_32152__$1;
(statearr_32246_33951[(1)] = (21));

} else {
var statearr_32247_33955 = state_32152__$1;
(statearr_32247_33955[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (5))){
var inst_32075 = cljs.core.async.close_BANG_(out);
var state_32152__$1 = state_32152;
var statearr_32256_33957 = state_32152__$1;
(statearr_32256_33957[(2)] = inst_32075);

(statearr_32256_33957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (14))){
var inst_32100 = (state_32152[(7)]);
var inst_32102 = cljs.core.chunked_seq_QMARK_(inst_32100);
var state_32152__$1 = state_32152;
if(inst_32102){
var statearr_32257_33961 = state_32152__$1;
(statearr_32257_33961[(1)] = (17));

} else {
var statearr_32258_33962 = state_32152__$1;
(statearr_32258_33962[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (16))){
var inst_32133 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32262_33965 = state_32152__$1;
(statearr_32262_33965[(2)] = inst_32133);

(statearr_32262_33965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (10))){
var inst_32087 = (state_32152[(11)]);
var inst_32085 = (state_32152[(12)]);
var inst_32094 = cljs.core._nth(inst_32085,inst_32087);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32152__$1,(13),out,inst_32094);
} else {
if((state_val_32153 === (18))){
var inst_32100 = (state_32152[(7)]);
var inst_32121 = cljs.core.first(inst_32100);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32152__$1,(20),out,inst_32121);
} else {
if((state_val_32153 === (8))){
var inst_32086 = (state_32152[(9)]);
var inst_32087 = (state_32152[(11)]);
var inst_32090 = (inst_32087 < inst_32086);
var inst_32091 = inst_32090;
var state_32152__$1 = state_32152;
if(cljs.core.truth_(inst_32091)){
var statearr_32271_33970 = state_32152__$1;
(statearr_32271_33970[(1)] = (10));

} else {
var statearr_32272_33971 = state_32152__$1;
(statearr_32272_33971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____0 = (function (){
var statearr_32274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32274[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__);

(statearr_32274[(1)] = (1));

return statearr_32274;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____1 = (function (state_32152){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_32152);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e32275){var ex__28492__auto__ = e32275;
var statearr_32276_33977 = state_32152;
(statearr_32276_33977[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_32152[(4)]))){
var statearr_32277_33982 = state_32152;
(statearr_32277_33982[(1)] = cljs.core.first((state_32152[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33983 = state_32152;
state_32152 = G__33983;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__ = function(state_32152){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____1.call(this,state_32152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28489__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_32280 = f__28992__auto__();
(statearr_32280[(6)] = c__28991__auto__);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));

return c__28991__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32282 = arguments.length;
switch (G__32282) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32287 = arguments.length;
switch (G__32287) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32292 = arguments.length;
switch (G__32292) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___34000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_32318){
var state_val_32319 = (state_32318[(1)]);
if((state_val_32319 === (7))){
var inst_32313 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32322_34001 = state_32318__$1;
(statearr_32322_34001[(2)] = inst_32313);

(statearr_32322_34001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (1))){
var inst_32294 = null;
var state_32318__$1 = (function (){var statearr_32326 = state_32318;
(statearr_32326[(7)] = inst_32294);

return statearr_32326;
})();
var statearr_32327_34002 = state_32318__$1;
(statearr_32327_34002[(2)] = null);

(statearr_32327_34002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (4))){
var inst_32297 = (state_32318[(8)]);
var inst_32297__$1 = (state_32318[(2)]);
var inst_32298 = (inst_32297__$1 == null);
var inst_32299 = cljs.core.not(inst_32298);
var state_32318__$1 = (function (){var statearr_32329 = state_32318;
(statearr_32329[(8)] = inst_32297__$1);

return statearr_32329;
})();
if(inst_32299){
var statearr_32330_34003 = state_32318__$1;
(statearr_32330_34003[(1)] = (5));

} else {
var statearr_32332_34004 = state_32318__$1;
(statearr_32332_34004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (6))){
var state_32318__$1 = state_32318;
var statearr_32339_34005 = state_32318__$1;
(statearr_32339_34005[(2)] = null);

(statearr_32339_34005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (3))){
var inst_32315 = (state_32318[(2)]);
var inst_32316 = cljs.core.async.close_BANG_(out);
var state_32318__$1 = (function (){var statearr_32345 = state_32318;
(statearr_32345[(9)] = inst_32315);

return statearr_32345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32318__$1,inst_32316);
} else {
if((state_val_32319 === (2))){
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32318__$1,(4),ch);
} else {
if((state_val_32319 === (11))){
var inst_32297 = (state_32318[(8)]);
var inst_32307 = (state_32318[(2)]);
var inst_32294 = inst_32297;
var state_32318__$1 = (function (){var statearr_32350 = state_32318;
(statearr_32350[(7)] = inst_32294);

(statearr_32350[(10)] = inst_32307);

return statearr_32350;
})();
var statearr_32352_34008 = state_32318__$1;
(statearr_32352_34008[(2)] = null);

(statearr_32352_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (9))){
var inst_32297 = (state_32318[(8)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32318__$1,(11),out,inst_32297);
} else {
if((state_val_32319 === (5))){
var inst_32297 = (state_32318[(8)]);
var inst_32294 = (state_32318[(7)]);
var inst_32301 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32297,inst_32294);
var state_32318__$1 = state_32318;
if(inst_32301){
var statearr_32359_34009 = state_32318__$1;
(statearr_32359_34009[(1)] = (8));

} else {
var statearr_32361_34010 = state_32318__$1;
(statearr_32361_34010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (10))){
var inst_32310 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32364_34011 = state_32318__$1;
(statearr_32364_34011[(2)] = inst_32310);

(statearr_32364_34011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (8))){
var inst_32294 = (state_32318[(7)]);
var tmp32358 = inst_32294;
var inst_32294__$1 = tmp32358;
var state_32318__$1 = (function (){var statearr_32367 = state_32318;
(statearr_32367[(7)] = inst_32294__$1);

return statearr_32367;
})();
var statearr_32370_34015 = state_32318__$1;
(statearr_32370_34015[(2)] = null);

(statearr_32370_34015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_32379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32379[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_32379[(1)] = (1));

return statearr_32379;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_32318){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_32318);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e32380){var ex__28492__auto__ = e32380;
var statearr_32381_34016 = state_32318;
(statearr_32381_34016[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_32318[(4)]))){
var statearr_32382_34017 = state_32318;
(statearr_32382_34017[(1)] = cljs.core.first((state_32318[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34019 = state_32318;
state_32318 = G__34019;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_32318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_32318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_32384 = f__28992__auto__();
(statearr_32384[(6)] = c__28991__auto___34000);

return statearr_32384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___34023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32454 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32475_34024 = state_32464__$1;
(statearr_32475_34024[(2)] = inst_32454);

(statearr_32475_34024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var inst_32404 = (new Array(n));
var inst_32405 = inst_32404;
var inst_32406 = (0);
var state_32464__$1 = (function (){var statearr_32490 = state_32464;
(statearr_32490[(7)] = inst_32406);

(statearr_32490[(8)] = inst_32405);

return statearr_32490;
})();
var statearr_32493_34025 = state_32464__$1;
(statearr_32493_34025[(2)] = null);

(statearr_32493_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32413 = (state_32464[(9)]);
var inst_32413__$1 = (state_32464[(2)]);
var inst_32415 = (inst_32413__$1 == null);
var inst_32416 = cljs.core.not(inst_32415);
var state_32464__$1 = (function (){var statearr_32500 = state_32464;
(statearr_32500[(9)] = inst_32413__$1);

return statearr_32500;
})();
if(inst_32416){
var statearr_32501_34027 = state_32464__$1;
(statearr_32501_34027[(1)] = (5));

} else {
var statearr_32502_34028 = state_32464__$1;
(statearr_32502_34028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (15))){
var inst_32443 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32503_34029 = state_32464__$1;
(statearr_32503_34029[(2)] = inst_32443);

(statearr_32503_34029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (13))){
var state_32464__$1 = state_32464;
var statearr_32504_34030 = state_32464__$1;
(statearr_32504_34030[(2)] = null);

(statearr_32504_34030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var inst_32406 = (state_32464[(7)]);
var inst_32436 = (inst_32406 > (0));
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32436)){
var statearr_32507_34031 = state_32464__$1;
(statearr_32507_34031[(1)] = (12));

} else {
var statearr_32508_34032 = state_32464__$1;
(statearr_32508_34032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var inst_32456 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32464__$1,inst_32456);
} else {
if((state_val_32465 === (12))){
var inst_32405 = (state_32464[(8)]);
var inst_32438 = cljs.core.vec(inst_32405);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32464__$1,(15),out,inst_32438);
} else {
if((state_val_32465 === (2))){
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32464__$1,(4),ch);
} else {
if((state_val_32465 === (11))){
var inst_32430 = (state_32464[(2)]);
var inst_32431 = (new Array(n));
var inst_32405 = inst_32431;
var inst_32406 = (0);
var state_32464__$1 = (function (){var statearr_32522 = state_32464;
(statearr_32522[(7)] = inst_32406);

(statearr_32522[(10)] = inst_32430);

(statearr_32522[(8)] = inst_32405);

return statearr_32522;
})();
var statearr_32527_34035 = state_32464__$1;
(statearr_32527_34035[(2)] = null);

(statearr_32527_34035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var inst_32405 = (state_32464[(8)]);
var inst_32428 = cljs.core.vec(inst_32405);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32464__$1,(11),out,inst_32428);
} else {
if((state_val_32465 === (5))){
var inst_32406 = (state_32464[(7)]);
var inst_32405 = (state_32464[(8)]);
var inst_32423 = (state_32464[(11)]);
var inst_32413 = (state_32464[(9)]);
var inst_32422 = (inst_32405[inst_32406] = inst_32413);
var inst_32423__$1 = (inst_32406 + (1));
var inst_32424 = (inst_32423__$1 < n);
var state_32464__$1 = (function (){var statearr_32533 = state_32464;
(statearr_32533[(12)] = inst_32422);

(statearr_32533[(11)] = inst_32423__$1);

return statearr_32533;
})();
if(cljs.core.truth_(inst_32424)){
var statearr_32535_34036 = state_32464__$1;
(statearr_32535_34036[(1)] = (8));

} else {
var statearr_32536_34037 = state_32464__$1;
(statearr_32536_34037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (14))){
var inst_32449 = (state_32464[(2)]);
var inst_32452 = cljs.core.async.close_BANG_(out);
var state_32464__$1 = (function (){var statearr_32546 = state_32464;
(statearr_32546[(13)] = inst_32449);

return statearr_32546;
})();
var statearr_32549_34038 = state_32464__$1;
(statearr_32549_34038[(2)] = inst_32452);

(statearr_32549_34038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (10))){
var inst_32434 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32554_34043 = state_32464__$1;
(statearr_32554_34043[(2)] = inst_32434);

(statearr_32554_34043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (8))){
var inst_32405 = (state_32464[(8)]);
var inst_32423 = (state_32464[(11)]);
var tmp32538 = inst_32405;
var inst_32405__$1 = tmp32538;
var inst_32406 = inst_32423;
var state_32464__$1 = (function (){var statearr_32565 = state_32464;
(statearr_32565[(7)] = inst_32406);

(statearr_32565[(8)] = inst_32405__$1);

return statearr_32565;
})();
var statearr_32570_34048 = state_32464__$1;
(statearr_32570_34048[(2)] = null);

(statearr_32570_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_32579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32579[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_32579[(1)] = (1));

return statearr_32579;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_32464){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_32464);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e32581){var ex__28492__auto__ = e32581;
var statearr_32582_34053 = state_32464;
(statearr_32582_34053[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_32464[(4)]))){
var statearr_32583_34054 = state_32464;
(statearr_32583_34054[(1)] = cljs.core.first((state_32464[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34055 = state_32464;
state_32464 = G__34055;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_32587 = f__28992__auto__();
(statearr_32587[(6)] = c__28991__auto___34023);

return statearr_32587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32592 = arguments.length;
switch (G__32592) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28991__auto___34057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28992__auto__ = (function (){var switch__28488__auto__ = (function (state_32648){
var state_val_32649 = (state_32648[(1)]);
if((state_val_32649 === (7))){
var inst_32644 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32651_34058 = state_32648__$1;
(statearr_32651_34058[(2)] = inst_32644);

(statearr_32651_34058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (1))){
var inst_32603 = [];
var inst_32604 = inst_32603;
var inst_32605 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32648__$1 = (function (){var statearr_32652 = state_32648;
(statearr_32652[(7)] = inst_32604);

(statearr_32652[(8)] = inst_32605);

return statearr_32652;
})();
var statearr_32653_34059 = state_32648__$1;
(statearr_32653_34059[(2)] = null);

(statearr_32653_34059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (4))){
var inst_32608 = (state_32648[(9)]);
var inst_32608__$1 = (state_32648[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var inst_32610 = cljs.core.not(inst_32609);
var state_32648__$1 = (function (){var statearr_32654 = state_32648;
(statearr_32654[(9)] = inst_32608__$1);

return statearr_32654;
})();
if(inst_32610){
var statearr_32657_34060 = state_32648__$1;
(statearr_32657_34060[(1)] = (5));

} else {
var statearr_32658_34061 = state_32648__$1;
(statearr_32658_34061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (15))){
var inst_32604 = (state_32648[(7)]);
var inst_32636 = cljs.core.vec(inst_32604);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32648__$1,(18),out,inst_32636);
} else {
if((state_val_32649 === (13))){
var inst_32631 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32669_34062 = state_32648__$1;
(statearr_32669_34062[(2)] = inst_32631);

(statearr_32669_34062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (6))){
var inst_32604 = (state_32648[(7)]);
var inst_32633 = inst_32604.length;
var inst_32634 = (inst_32633 > (0));
var state_32648__$1 = state_32648;
if(cljs.core.truth_(inst_32634)){
var statearr_32677_34063 = state_32648__$1;
(statearr_32677_34063[(1)] = (15));

} else {
var statearr_32682_34064 = state_32648__$1;
(statearr_32682_34064[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (17))){
var inst_32641 = (state_32648[(2)]);
var inst_32642 = cljs.core.async.close_BANG_(out);
var state_32648__$1 = (function (){var statearr_32683 = state_32648;
(statearr_32683[(10)] = inst_32641);

return statearr_32683;
})();
var statearr_32684_34065 = state_32648__$1;
(statearr_32684_34065[(2)] = inst_32642);

(statearr_32684_34065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (3))){
var inst_32646 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32648__$1,inst_32646);
} else {
if((state_val_32649 === (12))){
var inst_32604 = (state_32648[(7)]);
var inst_32624 = cljs.core.vec(inst_32604);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32648__$1,(14),out,inst_32624);
} else {
if((state_val_32649 === (2))){
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32648__$1,(4),ch);
} else {
if((state_val_32649 === (11))){
var inst_32604 = (state_32648[(7)]);
var inst_32608 = (state_32648[(9)]);
var inst_32612 = (state_32648[(11)]);
var inst_32621 = inst_32604.push(inst_32608);
var tmp32685 = inst_32604;
var inst_32604__$1 = tmp32685;
var inst_32605 = inst_32612;
var state_32648__$1 = (function (){var statearr_32686 = state_32648;
(statearr_32686[(12)] = inst_32621);

(statearr_32686[(7)] = inst_32604__$1);

(statearr_32686[(8)] = inst_32605);

return statearr_32686;
})();
var statearr_32689_34074 = state_32648__$1;
(statearr_32689_34074[(2)] = null);

(statearr_32689_34074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (9))){
var inst_32605 = (state_32648[(8)]);
var inst_32617 = cljs.core.keyword_identical_QMARK_(inst_32605,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32648__$1 = state_32648;
var statearr_32696_34075 = state_32648__$1;
(statearr_32696_34075[(2)] = inst_32617);

(statearr_32696_34075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (5))){
var inst_32608 = (state_32648[(9)]);
var inst_32605 = (state_32648[(8)]);
var inst_32614 = (state_32648[(13)]);
var inst_32612 = (state_32648[(11)]);
var inst_32612__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32608) : f.call(null,inst_32608));
var inst_32614__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32612__$1,inst_32605);
var state_32648__$1 = (function (){var statearr_32700 = state_32648;
(statearr_32700[(13)] = inst_32614__$1);

(statearr_32700[(11)] = inst_32612__$1);

return statearr_32700;
})();
if(inst_32614__$1){
var statearr_32701_34080 = state_32648__$1;
(statearr_32701_34080[(1)] = (8));

} else {
var statearr_32702_34081 = state_32648__$1;
(statearr_32702_34081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (14))){
var inst_32608 = (state_32648[(9)]);
var inst_32612 = (state_32648[(11)]);
var inst_32626 = (state_32648[(2)]);
var inst_32627 = [];
var inst_32628 = inst_32627.push(inst_32608);
var inst_32604 = inst_32627;
var inst_32605 = inst_32612;
var state_32648__$1 = (function (){var statearr_32705 = state_32648;
(statearr_32705[(7)] = inst_32604);

(statearr_32705[(14)] = inst_32626);

(statearr_32705[(8)] = inst_32605);

(statearr_32705[(15)] = inst_32628);

return statearr_32705;
})();
var statearr_32706_34082 = state_32648__$1;
(statearr_32706_34082[(2)] = null);

(statearr_32706_34082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (16))){
var state_32648__$1 = state_32648;
var statearr_32707_34083 = state_32648__$1;
(statearr_32707_34083[(2)] = null);

(statearr_32707_34083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (10))){
var inst_32619 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
if(cljs.core.truth_(inst_32619)){
var statearr_32710_34084 = state_32648__$1;
(statearr_32710_34084[(1)] = (11));

} else {
var statearr_32713_34085 = state_32648__$1;
(statearr_32713_34085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (18))){
var inst_32638 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32714_34086 = state_32648__$1;
(statearr_32714_34086[(2)] = inst_32638);

(statearr_32714_34086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (8))){
var inst_32614 = (state_32648[(13)]);
var state_32648__$1 = state_32648;
var statearr_32715_34088 = state_32648__$1;
(statearr_32715_34088[(2)] = inst_32614);

(statearr_32715_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28489__auto__ = null;
var cljs$core$async$state_machine__28489__auto____0 = (function (){
var statearr_32716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32716[(0)] = cljs$core$async$state_machine__28489__auto__);

(statearr_32716[(1)] = (1));

return statearr_32716;
});
var cljs$core$async$state_machine__28489__auto____1 = (function (state_32648){
while(true){
var ret_value__28490__auto__ = (function (){try{while(true){
var result__28491__auto__ = switch__28488__auto__(state_32648);
if(cljs.core.keyword_identical_QMARK_(result__28491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28491__auto__;
}
break;
}
}catch (e32717){var ex__28492__auto__ = e32717;
var statearr_32718_34090 = state_32648;
(statearr_32718_34090[(2)] = ex__28492__auto__);


if(cljs.core.seq((state_32648[(4)]))){
var statearr_32719_34091 = state_32648;
(statearr_32719_34091[(1)] = cljs.core.first((state_32648[(4)])));

} else {
throw ex__28492__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34096 = state_32648;
state_32648 = G__34096;
continue;
} else {
return ret_value__28490__auto__;
}
break;
}
});
cljs$core$async$state_machine__28489__auto__ = function(state_32648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28489__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28489__auto____1.call(this,state_32648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28489__auto____0;
cljs$core$async$state_machine__28489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28489__auto____1;
return cljs$core$async$state_machine__28489__auto__;
})()
})();
var state__28993__auto__ = (function (){var statearr_32720 = f__28992__auto__();
(statearr_32720[(6)] = c__28991__auto___34057);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28993__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
