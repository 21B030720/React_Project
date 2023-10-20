
// import './App.css';
import React, {useEffect} from 'react';
import Login from './Login';
import { useStateProvider } from '../utils/StateProvider'; 
import { reducerCases } from '../utils/Constants';
import Sounds from './Sounds';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";


// Просто добавил. Не нужен
export default function PlayingTrack() {
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
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
    </div>
  )
}
