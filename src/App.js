import React from "react";
import "./Css/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { BackGround } from "./Components/Common/Common";
import { SideIcons } from "./Components/Common/Common";
import { OuterLayer } from "./Components/Common/Common";
import { LandingPage } from "./Pages/LandingPage";
import { Userpage } from "./Pages/Userpage";
import { Adminpage } from "./Pages/Adminpage";
import { MyappHeader } from "./Components/Common/MyappHeader";
import { LandingPageHeader } from "./Components/LandingPage/LandingPageHeader";
import { Popup } from "./Components/Common/Popup";

function App() {
  let location = useLocation();
  const [ClassVal, setClassval] = React.useState("landingpage");

  React.useEffect(() => {
    if (location.pathname === "/") {
      setClassval("landingpage");
    }
    if (location.pathname === "/myapp/userpage") {
      setClassval("userpage");
    }
    if (location.pathname === "/myapp/adminpage") {
      setClassval("adminpage");
    }
  }, [ClassVal, location]);

  return (
    <>
      <OuterLayer />
      <SideIcons />
      <BackGround />
      <div className={`MyApp_main_wrapper ${ClassVal}`}>
        <Popup />
        <MyappHeader />
        <LandingPageHeader />
        <Routes>
          <Route exact index path="/" element={<LandingPage />} />
          <Route exact path="/myapp/userpage" element={<Userpage />} />
          <Route exact path="/myapp/adminpage" element={<Adminpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
