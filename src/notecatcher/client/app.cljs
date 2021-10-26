(ns notecatcher.client.app
  (:require
    [rum.core :as rum]))


(rum/defc Test < rum/static
          []
          [:div "Hello World!"])


(rum/mount
  (Test)
  (.-body js/document))
