import { Provider } from "react-redux";
import store from "./store";
import Header from "../layouts/header/Header";
import "./App.scss";
import Main from "../layouts/main/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
