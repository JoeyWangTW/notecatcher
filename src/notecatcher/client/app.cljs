(ns notecatcher.client.app
  (:require
    [goog.dom :as gdom]
    [rum.core :as rum]))


(rum/defc Test < rum/static
          []
          [:div "Hello World!"])


(defn main
  []
  (rum/mount
    (Test)
    (gdom/getElement "main-app")))


(main)
