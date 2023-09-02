import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyAsSitterPage from "./components/Detail/ApplyAsSitterPage";
import ApplyComplete from "./components/Detail/ApplyComplete";
import ElderlySupportPage from "./components/Detail/ElderlySupportPage";
import FindeMore from "./components/Detail/FindeMore"
import Finder from "./components/Detail/Finder"
import FindLocalSittersPage from "./components/Detail/FindLocalSittersPage";
import Form_carehelper from "./components/Detail/Form_carehelper";
import Form_mom from "./components/Detail/Form_mom"
import Form_senior from "./components/Detail/Form_senior"
import Form_sitter from "./components/Detail/Form_sitter"
import ParentingSupportPage from "./components/Detail/ParentingSupportPage";
import Select from "./components/Detail/Select"
import Stretching from "./components/Detail/Stretching"
import Stretching_view from "./components/Detail/Stretching_view"
import Yoga from "./components/Detail/Yoga"
import Yoga_view from "./components/Detail/Yoga_view";
import YogaPage from "./components/Detail/YogaPage";
import MainPage from "./components/Main/MainPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Form_senior" element={<Form_senior />}></Route>
        <Route path="/Form_mom" element={<Form_mom />}></Route>
        <Route path="/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/Form_carehelper" element={<Form_carehelper />}></Route>
        <Route path="/ApplyComplete" element={<ApplyComplete />}></Route>
        <Route path="/FindeMore" element={<FindeMore />}></Route>
        <Route path="/Finder" element={<Finder />}></Route>
        <Route path="/Select" element={<Select />}></Route>
        <Route path="/Stretching" element={<Stretching />}></Route>
        <Route path="/Stretching_view" element={<Stretching_view />}></Route>
        <Route path="/Yoga" element={<Yoga />}></Route>
        <Route path="/ApplyAsSitterPage" element={<ApplyAsSitterPage />}></Route>
        <Route path="/ElderlySupportPage" element={<ElderlySupportPage />}></Route>
        <Route path="/FindLocalSittersPage" element={<FindLocalSittersPage />}></Route>
        <Route path="/ParentingSupportPage" element={<ParentingSupportPage />}></Route>
        <Route path="/Yoga_view" element={<Yoga_view />}></Route>
        <Route path="/MainPage" element={<MainPage />}></Route>
        <Route path="/YogaPage" element={<YogaPage />}></Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
