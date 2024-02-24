import React from "react";
import MainBody from "./Components/MainBody/MainBody";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <MainBody />
    </Provider>
  );
};

export default App;
