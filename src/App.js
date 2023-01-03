import './App.css';
import { Data } from "./components/Data";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Data />
        </div>
    </Provider>
  );
}

export default App;
