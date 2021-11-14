(ns notecatcher.firebase
  (:require
    ["firebase/app" :as firebase]
    ["firebase/auth" :as auth]
    ["firebase/firestore" :as firestore]
    [citrus.core :as citrus]
    [notecatcher.config :as config]
    [notecatcher.reconciler :as reconciler]
    [promesa.core :as promesa]))


(defn doc-handler
  [doc]
  (js->clj (.data doc) :keywordize-keys true))


(defn query-notes
  [date uid]
  (let [db (firestore/getFirestore)
        collection (firestore/collection. db (str "user/" uid "/notes"))
        query (firestore/query. collection (firestore/where "date" "==" (str date)))]
    (-> (firestore/getDocs query)
        (promesa/then #(let [docs (map (fn [doc]
                                         (doc-handler doc))
                                       (.-docs %1))]
                         docs)))))


(defn sign-in-with-google
  []
  (let [provider ^js (auth/GoogleAuthProvider.)]
    (auth/signInWithPopup (auth/getAuth) provider)))


(defn sign-out
  []
  (auth/signOut (auth/getAuth)))


(defn on-auth-state-changed
  []
  (auth/onAuthStateChanged
    (auth/getAuth)
    (fn [user]
      (if user
        (let [uid (.-uid user)
              display-name (.-displayName user)
              photo-url (.-photoURL user)
              email (.-email user)]
          (citrus/dispatch! @reconciler/r :app :login {:uid uid
                                                       :display-name display-name
                                                       :photo-url photo-url
                                                       :email email}))
        (citrus/dispatch! @reconciler/r :app :logout)))))


(defn init
  []
  (firebase/initializeApp
    config/firebase-sdk)
  (on-auth-state-changed))
