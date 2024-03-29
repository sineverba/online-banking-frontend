import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Footer } from "./components/Footer";
import { Router } from "./Router";
import { LOGIN_SHARED_KEY } from "./utils/constants/constant";

function App() {
  
  const accessToken = useSelector((state) => state.apiSlice.mutations[LOGIN_SHARED_KEY]?.data?.access_token ?? null);

  const getClassName = () => {
    let className = "d-flex flex-column";
    if (!accessToken) {
      className = `${className} with-background`;
    }
    return className;
  };

  return (
    <div id="wrapper">
      {accessToken && <Sidebar />}
      <div id="content-wrapper" className={getClassName()}>
        <div id="content">
          {accessToken && <Topbar />}
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
