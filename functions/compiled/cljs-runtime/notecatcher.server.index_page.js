goog.provide('notecatcher.server.index_page');
notecatcher.server.index_page.IndexPage = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("html",null,[daiquiri.core.create_element("head",null,null),daiquiri.core.create_element("body",null,[daiquiri.core.create_element("script",{'src':"/js/compiled/client.js"},[]),daiquiri.core.create_element("div",{'id':"main-app"},null)])]);
}),null,"notecatcher.server.index-page/IndexPage");
notecatcher.server.index_page.handler = shadow.js.shim.module$firebase_functions.https.onRequest((function notecatcher$server$index_page$index(req,res){
return res.status((200)).send(["<!DOCTYPE html>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.core.render_static_markup(notecatcher.server.index_page.IndexPage()))].join(''));
}));

//# sourceMappingURL=notecatcher.server.index_page.js.map
