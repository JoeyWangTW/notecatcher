(ns notecatcher.server.index-page
  (:require
    ["firebase-functions" :as functions]
    [rum.core :as rum]))


(rum/defc IndexPage
          []
          [:html
           [:head [:title "Notecatcher"]]
           [:body
            [:div#main-app]
            [:script {:src (str "/js/compiled/client.js")}]]])


(def handler
  (.onRequest (.-https functions)
              (fn index
                [^js req, ^js res]
                (.. ^js res
                    (status 200)
                    (send (->> (IndexPage)
                               rum/render-static-markup
                               (str "<!DOCTYPE html>\n")))))))
