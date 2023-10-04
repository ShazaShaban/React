import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Router from "./Routes";
import "./App.css";
import React, { useContext,useState } from "react";
import { ThemeContext } from "./context";
import {LanguageContext} from './context/language.js'



function App() {
  const [ contextLang , setContextLang ] = useState('en')
  const {theme} = React.useContext(ThemeContext)
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ contextLang , setContextLang }}>
        <div
          className={contextLang === "ar" ? "text-right" : "text-left"}
          dir={contextLang === "ar" ? "rtl" : "ltr"}>
          <Header />
          <div className="container-fluid mx-0 my-0 pb-5" style={{ backgroundColor: theme.backgroundColor, color: theme.color , height: '100%' }}>
            <div className="container ">
              <Router />
            </div>
          </div>
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}
export default App;