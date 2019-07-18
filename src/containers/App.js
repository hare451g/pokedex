import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListScreen from '../screens/ListScreen';
import ResponsiveDrawer from '../components/ResponsiveDrawer';

function App() {
  return (
    <ResponsiveDrawer>
      <Router>
        <Route path="/:filterType/:slug" component={ListScreen} exact/>
        <Route path="/" component={ListScreen} exact />
      </Router>
    </ResponsiveDrawer>
  );
}

export default App;
