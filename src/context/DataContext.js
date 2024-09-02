// import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialTodos = { name: "mohammed",  age: 16, count: 1 , theme: localStorage.getItem("theme") === null ? "light" : localStorage.getItem("theme") === "light"? "light" : "dark"  };

const reducer = (state, action) => {
    switch (action.type) {
      case "MOHAMED":
        return {
          ...state,
          name: action.newValue,
        };
      case "AGE":
        return {
          ...state,
          age: action.newValue,
        };
      case "COUNT":
        return {
          ...state,
          count: action.newValue,
        };
      case "THEME":
        return {
          ...state,
          theme: action.newValue,
        };
      default:
        return state;
    }
  };

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialTodos);

  const changeName = (props) => {
    dispatch({
        type: "MOHAMED", newValue:props
    })
  }
  const changeAge = (props) => {
    dispatch({
        type: "AGE", newValue: props
    })
  }
  const changeCount = (props) => {
    dispatch({
        type: "COUNT", newValue: props
    })
  }
  const changeTheme = (props) => {
    localStorage.setItem("theme", props)
    dispatch({
        type: "THEME", newValue: props
    })
  }

  return (
     <ThemeContexttt.Provider value={{ ...firstState , changeName ,changeAge , changeCount , changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;