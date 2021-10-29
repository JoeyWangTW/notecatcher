goog.provide('notecatcher.client.app');
notecatcher.client.app.Test = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,["Hello World!"]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"notecatcher.client.app/Test");
notecatcher.client.app.main = (function notecatcher$client$app$main(){
return rum.core.mount(notecatcher.client.app.Test(),goog.dom.getElement("main-app"));
});
notecatcher.client.app.main();

//# sourceMappingURL=notecatcher.client.app.js.map
