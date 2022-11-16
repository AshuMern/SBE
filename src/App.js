import HomePage from "./components/HomePage";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ResponsiveAppBar from "./components/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cancelationpolicy from "./components/Cancelationpolicy";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />}  />
          <Route path="/policy" element={<PrivacyPolicy />}  />
          <Route path="/cancel" element={<Cancelationpolicy />}  />
        </Routes>
      </Router>
      <Box paddingBottom={0}>
        <Box
          sx={{
            backgroundColor: "#212121",
            mt: "16px",
            left: 0,
            bottom: 0,
            width: "100%",
            display: {xs:"block", md:"flex"},
            alignItems: "center",
            justifyContent: "center",
            color:"white"
          }}>
          
        
          <p>@copyright 2014-22</p>
          <p>
            Contact us:+91921225498
          </p>
          <p>http://myshribalajienterprise.com/</p>
          </Box>
      </Box>
    </div>
  );
}

export default App;
