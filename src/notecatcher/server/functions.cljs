(ns notecatcher.server.functions
  (:require
    ["firebase-functions" :as functions]))


(defn handle-request
  [^js req,  ^js res]
  (.send res "Hello World! I'm notecatcher."))


(def exports
  #js{:handleRequest (.onRequest functions/https handle-request)})
