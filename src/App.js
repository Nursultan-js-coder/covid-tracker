import './App.css';
import Header from "./components/Header"
import React, {Suspense,useState,useEffect} from "react"
import Spinner from "./components/Spinner"
import Content from  "./components/Content.js";
import {Container, Grid} from "@material-ui/core";
import Sidebar from "./components/Sidebar"
import axios from "axios";
import {Provider} from "mobx-react";
import  * as clientStores  from "./stores"

const store= {
    ...clientStores
}

function App() {

    const request = axios.create({
        baseURL:"https://api.coronatracker.com/v3/stats/worldometer",
        responseType:"json"
    })


    useEffect(()=>{


    },[])

    const handleCountryChange=(countryCode)=>{
        console.log(countryCode);
    }
  return (
      <Provider {...store}>
    <div className="App">
      <Header/>
            <Grid container style={{width:"80%",display:"flex",justifyContent:"center",marginTop:20}} >
          <Grid item sm={8} style={{padding:10}}>

        <Content/>
          </Grid>
            <Grid item sm={4} style={{padding:10}}>

        <Sidebar />
          </Grid>
            </Grid>
    </div>
      </Provider>
  );
}

export default App;
