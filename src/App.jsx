import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyAsSitterPage from "./component/detail/ApplyAsSitterPage";
import ApplyComplete from "./component/detail/ApplyComplete";
import ElderlySupportPage from "./component/detail/ElderlySupportPage";
import FindeMore from "./component/detail/FindeMore"
import Finder from "./component/detail/Finder"
import FindLocalSittersPage from "./component/detail/FindLocalSittersPage";
import Form_carehelper from "./component/detail/Form_carehelper";
import Form_mom from "./component/detail/Form_mom"
import Form_senior from "./component/detail/Form_senior"
import Form_sitter from "./component/detail/Form_sitter"
import ParentingSupportPage from "./component/detail/ParentingSupportPage";
import Select from "./component/detail/Select"
import Stretching from "./component/detail/Stretching"
import Stretching_view from "./component/detail/Stretching_view"
import Yoga from "./component/detail/Yoga"
import Yoga_view from "./component/detail/Yoga_view";
import MainPage from "./component/main/MainPage";
import YogaPage from "./component/detail/YogaPage";

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
