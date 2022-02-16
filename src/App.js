import "./style.css"
import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import Content from './Content'
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
            <div id="layoutSidenav_content">
            <Content />
            </div>
          </div>
    </Router>
    </>
  )
}

export default App;
