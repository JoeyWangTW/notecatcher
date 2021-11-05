(ns notecatcher.reconciler
  (:require
    [citrus.core :as citrus]
    [notecatcher.client.controller.app :as app]))


(defonce r (atom nil))

(defonce app-state (atom {}))


(def controllers
  {:app app/control})


(def effects
  {})


(defn initilize-reconciler
  []
  (when-not @r
    (reset! r
            (citrus/reconciler {:state app-state
                                :controllers controllers
                                :effect-handlers effects}))))
