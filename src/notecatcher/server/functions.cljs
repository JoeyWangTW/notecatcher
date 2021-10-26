(ns notecatcher.server.functions
  (:require
    ["firebase-functions" :as functions]
    [notecatcher.server.index-page :as index-page]))


(def handle-request-fn
  (.onRequest (.-https functions)
              (fn handle-request
                [^js req,  ^js res]
                (.send res "Hello World! I'm notecatcher."))))


(def exports
  #js {:handleRequest handle-request-fn
       :index index-page/handler})
