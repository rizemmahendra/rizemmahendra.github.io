import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Graduation from "@pages/Graduation";
import NotFound from "@pages/Not+Found";
import ListInvitee from "@pages/ListInvitee";
// import Navbar from "@components/Navbar";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/graduation" Component={Graduation} />
          <Route path="/graduation/listinvitee" Component={ListInvitee} />
          <Route path="/graduation/:inviteeId" Component={Graduation} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
