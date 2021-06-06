import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import NotFound from './components/layout/NotFound';

import Routes from "./route/Routes";
import Navbar from "./components/layout/Navbar";


function App()  {
    
    return (
      <>
       
        <Navbar />
          <Switch>
        <Routes/>
        
        {/** 
          {Routes.map((route, i) => {
            return <Route key={i.toString()} component={route.component} />  
          })}
        */}
        
        </Switch>
        
      </>
    );


        
}



export default App;
