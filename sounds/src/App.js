import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import Login from './components/Login';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import Sounds from './components/Sounds';
import axios from 'axios';
import { Buffer } from "buffer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayingTrack from "./components/playingTrack";

// Arman Krosava
function Home() {
  const [{token}, dispatch] = useStateProvider()
  // var clientId = 'ec80aa53b442424096c97f3d31300c06';
  // var clientSecret = "91fd0d69e4e54ba38a5e1393a68f631c";
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      console.log("HASH", hash)
      const token  = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token)
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