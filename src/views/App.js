import Router from "./Router";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Router />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;