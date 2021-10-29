goog.provide('notecatcher.server.functions');
notecatcher.server.functions.handle_request_fn = shadow.js.shim.module$firebase_functions.https.onRequest((function notecatcher$server$functions$handle_request(req,res){
return res.send("Hello World! I'm notecatcher.");
}));
notecatcher.server.functions.exports = ({"handleRequest": notecatcher.server.functions.handle_request_fn, "index": notecatcher.server.index_page.handler});

//# sourceMappingURL=notecatcher.server.functions.js.map
