import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoadingBar from "react-redux-loading-bar";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <LoadingBar
            className="loadingPopup"
            progressIncrease={10}
            maxProgress={95}
          />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
      <ToastContainer autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
