import React from "react"
const AuthContext = React.createContext({
    isLoggedIn:localStorage.getItem('isLoggedIn')
})

export default AuthContext