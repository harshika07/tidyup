import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "./Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();
  const [role, setRole] = useState("user");

  function getRole() {
    return role;
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function updateEmail(email) {
    return auth.currentUser.updateEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      let userData = { role: "user" };
      if (user) {
        console.log(user.uid);
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            userData = doc.data();
            setRole(userData.role);
          });
        setCurrentUser(user);
        setLoading(false);
      } else {
        setRole("user");
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getRole,
    login,
    signup,
    logout,
    updateEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
