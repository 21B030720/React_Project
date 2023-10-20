import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Sounds from './components/Sounds';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Profile from './Profile';



function App() {
  const [{ token }, dispatch] = useStateProvider();

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log('HASH', hash);
      const token = hash.substring(1).split('&')[0].split('=')[1];
      console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
