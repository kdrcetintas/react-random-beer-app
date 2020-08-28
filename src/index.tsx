import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import "./index.css";
let myStore = createStore(reducer, applyMiddleware(thunk))
render(<Provider store={myStore}>
    <App />
</Provider>, document.getElementById("root"));