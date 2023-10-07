import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import Login from './components/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Sounds from './components/Sounds';

function App() {
  const [{token}, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token  = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token)
      dispatch({type:reducerCases.SET_TOKEN, token})
    }
  }, [token, dispatch])
  return (
    <div>
      {
        token ? <Sounds /> : <Login />
      }
    </div>
  );
}

export default App;
