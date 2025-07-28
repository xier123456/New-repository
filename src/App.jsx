
import Footer from "./components/Footer";
import LoginToast from "./components/state/LoginToast";
import ThemeInfo from "./InfoComponents/LoginInfo/ThemeInfo";
import AppRouter from "./Routes/AppRoutes";


function App() {
  return (
    <>
    <ThemeInfo>
         <AppRouter/>
    </ThemeInfo>
  
     
    </>
  );
}

export default App;
