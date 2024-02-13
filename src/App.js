import './App.css';
import Header from './Components/Header';
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import Footer from "./Components/Footer";

import { useState } from "react";
import AppRoutes from './Components/Routes';


function App() {

  return (
    <div className="App">
      <>
        <Header />
        <div className="SideMenuAndPageContent">
          <SideMenu />
          <PageContent />
        </div>
        <Footer />
        {/* <AppRoutes /> */}
      </>


    </div >
  );
}

export default App;
