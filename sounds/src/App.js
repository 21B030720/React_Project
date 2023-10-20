import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Sounds from './components/Sounds';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Sounds from './components/Sounds';
import axios from 'axios';
import { Buffer } from "buffer"


function App() {
  const [{token}, dispatch] = useStateProvider()
  // var clientId = 'ec80aa53b442424096c97f3d31300c06';
  // var clientSecret = "91fd0d69e4e54ba38a5e1393a68f631c";
  useEffect(() => {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PlayingTrack />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
