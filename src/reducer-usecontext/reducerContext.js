import { createContext, useEffect, useReducer } from "react";


const INITIAL_STATE = {
  User:JSON.parse(localStorage.getItem('User1')) || null
};

export const UserContext = createContext(INITIAL_STATE);

const UserReducer = (state,action) => {
    console.log(action.payload);
  switch (action.types) {
    case "LoginSuccess":
      return { User: action.payload };
    default:
      return state;
  }
};

export const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("User1", JSON.stringify(state.User));
  }, [state.User]);
  return (
    <UserContext.Provider value={{ users: state.User, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
