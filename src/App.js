import { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
// import Testing from "./Testing";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {

pagecount = 10;
render(){

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pagecount} country="in"  category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={this.pagecount} country="in"  category="business" />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pagecount} country="in"  category="entertainment" />}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={this.pagecount} country="in"  category="general" />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={this.pagecount} country="in"  category="health" />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={this.pagecount} country="in"  category="science" />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pagecount} country="in"  category="sports" />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pagecount} country="in"  category="technology" />}></Route>
        </Routes>
        
      </Router>
      {/* <Testing/> */}
    </>
  );
}
}

export default App;
