import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListScreen from '../screens/ListScreen';

function App() {
  return (
    <Router>
      <Route path="/:filterType/:slug" component={ListScreen} exact/>
      <Route path="/" component={ListScreen} exact />
    </Router>
  );
}

export default App;
