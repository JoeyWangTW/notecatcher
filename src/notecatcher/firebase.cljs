(ns notecatcher.firebase
  (:require
    ["firebase/app" :as firebase]
    ["firebase/auth" :as auth]
    [citrus.core :as citrus]
    [notecatcher.config :as config]
    [notecatcher.reconciler :as reconciler]))


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
