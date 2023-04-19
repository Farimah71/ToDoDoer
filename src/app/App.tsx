import { Provider } from 'react-redux';
import store from './store';
import Header from '../layouts/header/Header';
import './App.scss'

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
    </div>
    </Provider>
  )
}

export default App
