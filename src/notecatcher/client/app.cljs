(ns notecatcher.client.app
  (:require
    [citrus.core :as citrus]
    [goog.dom :as gdom]
    [notecatcher.client.hooks :as hooks]
    [notecatcher.firebase :as firebase]
    [notecatcher.reconciler :as reconciler]
    [rum.core :as rum]))


(rum/defc GetNote < rum/static
          [r]
          (let [[date set-date!] (rum/use-state "")]
            [:div
             [:p "Enter date (format: mmddyyyy"]
             [:input {:value date
                      :on-change #(set-date! (.. % -target -value))}]
             [:button
              {:on-click #(citrus/dispatch! r :app :get-date date)}
              "Get Note!"]]))


(rum/defc App  < rum/static
          [r]
          (let [user (first (hooks/use-sub r [:app :user]))]
            [:div
             [:h1 "Notecatcher"]
             (when user
               [:h2 (str "Welcome! " (:display-name user))])
             (when-not user
               [:button
                {:on-click #(firebase/sign-in-with-google)}
                "Login"])
             (when user
               [:button
                {:on-click #(firebase/sign-out)}
                "Logout"])
             [:button
              {:on-click #(citrus/dispatch! r :app :test "hi!")}
              "test dispatch"]
             (when user
               (GetNote r))]))


(defn main
  []
  (reconciler/initilize-reconciler)
  (firebase/init)
  (rum/mount
    (App @reconciler/r)
    (gdom/getElement "main-app")))


(main)
