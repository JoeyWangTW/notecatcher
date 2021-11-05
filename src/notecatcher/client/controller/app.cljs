(ns notecatcher.client.controller.app)


(def initial-state
  {})


(defmulti control (fn [app] app))


(defmethod control :init [_ _ _]
  {:state (merge initial-state
                 {:status "initialized"})})


(defmethod control :test [_ arg state]
  (js/console.warn (str ":app/test: " arg))
  {:state (merge state {:test arg})})


(defmethod control :login [_ user state]
  (js/console.warn (str ":app/login: " user))
  {:state (merge state {:user user})})


(defmethod control :logout [_ _ state]
  (js/console.warn (str ":app/logout: "))
  {:state (dissoc state :user)})
