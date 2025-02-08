import React from "react";
import UserContext from "./UserContext";

// children is the component that we want to wrap with the context
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
         {children}
        </UserContext.Provider>
    )
};

