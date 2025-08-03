import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "../page/Home.jsx";
import Article from "../page/Article.jsx";
import About from "../page/About.jsx";
import Login from "../FromLogin/Login.jsx";
import Miscellaneous from "../page/Miscellaneous.jsx";
import Friend from "../page/Friend .jsx";
import Tip from "../page/Tip.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Technology from "../page/Technology.jsx";
import NotePageWithComments from "../Redux/NotePage-003.jsx";

const LayoutWithNavbar = () => (
 
  <>
    <Header />
    <Outlet /> {/* 这里渲染子路由 */}
    <Footer/>
  </>
);

const FooterOnly=()=>(

  <>
    <Outlet />
    <Footer/>
  </>
  )


const PlainLayout = () => <Outlet />;

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* 啥都有的 */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/Miscellaneous" element={<Miscellaneous />} />
          <Route path="/about" element={<About />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/tip" element={<Tip />} /> 
          <Route path="/Technology" element={<Technology/>} /> 
        </Route>
        {/* 只有页脚的 */}
        <Route element={<FooterOnly />}>
          <Route path="/NotePage/:id" element={<NotePageWithComments />} />
        </Route>
        {/* 啥都没有的 */}
        <Route element={<PlainLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      
    </Router>
  );
}

export default AppRouter;
