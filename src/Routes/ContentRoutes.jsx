import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlets,
} from "react-router-dom";

const Layoutcontent = () => (
  <>
    <Header />
    <Outlets /> {/* 这里渲染子路由 */}
    <Footer/>
  </>
);

const Plaincontent = () => <Outlets />;

function ContentRouter() {
  return (
    <Router>
      <Routes>
        {/* 导航栏的 */}
        <Route element={<Layoutcontent />}>
         
          {/* <Route path="/tip" element={<Tip />} />  */}
        </Route>
        {/* 不导航栏的 */}
        <Route element={<Plaincontent/>}>
          {/* <Route path="/login" element={<Login />} /> */}
         
        </Route>
      </Routes>
      
    </Router>
  );
}
export default ContentRouter