import React from 'react';
// eslint-disable-next-line
import { BrowserRouter,HashRouter } from "react-router-dom";
import RouterView from "./router";
const Router = BrowserRouter;
function App() {
  return (
          <Router>
              <RouterView/>
          </Router>
  );
}

export default App;
