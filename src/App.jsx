import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/SettingsPage";


// DECOMMENTARE i vari componenti per farli apparire 
// TODO dropdownmenu piccolo con la pagina da visualizzare (solo temporaneo)
function App() {
  return <>
  <MyNavbar />
  <MyHome />
  {/* <AccountPage /> */}
  {/* <SettingsPage /> */}
  <MyFooter />
  </>;
}

export default App;
