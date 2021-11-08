(ns notecatcher.server.functions
  (:require
    ["firebase-admin" :default firebase-admin]
    ["firebase-functions" :as functions]
    [cljs-bean.core :as cljs-bean]
    [notecatcher.server.index-page :as index-page]))


(defonce firebase-app (atom nil))


(defn init-app
  []
  (when-not @firebase-app
    (reset! firebase-app
            (.initializeApp firebase-admin))))


(defn db
  []
  (.firestore firebase-admin))


(init-app)


(def handle-request-fn
  (.onRequest (.-https functions)
              (fn handle-request
                [^js req,  ^js res]
                (.send res "Hello World! I'm notecatcher."))))


(def new-user-handler
  (.onCreate (.. functions -auth user)
             (fn [user-js]
               (let [user (cljs-bean/->clj user-js)]
                 (.set
                   (.doc (db) (str "/user/" (:uid user)))
                   #js {:display_name (:displayName user)
                        :email (:email user)
                        :uid (:uid user)
                        :photo_url (:photoURL user)})))))


(def exports
  #js {:handleRequest handle-request-fn
       :index index-page/handler
       :newUser new-user-handler})
