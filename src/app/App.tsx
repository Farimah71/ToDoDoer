import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Header } from "../components/header";
import { Main } from "../components/main";
import "./App.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};
