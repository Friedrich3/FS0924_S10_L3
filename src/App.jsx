import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

// DECOMMENTARE i vari componenti per farli apparire
// TODO dropdownmenu piccolo con la pagina da visualizzare (solo temporaneo)
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MyHome />}/>
        <Route path="/tvshows" element={<TvShows />}/>
        <Route path="/movie-details/:movieId" element={<MovieDetails/>} />

        {/* PAGINE EXTRA DEL VECCHIO NETFLIX */}
        <Route path="/account" element={<AccountPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>

        <Route path="*" element={<NotFound />} />

      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
