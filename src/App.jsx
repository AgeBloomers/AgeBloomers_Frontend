import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/Main/MainPage";
import SelectCommunity from "./components/Detail/SelectCommunity"
import SelectCare from "./components/Detail/SelectCare"
import Yoga from "./components/Detail/Yoga";
import Yoga_view from "./components/Detail/Yoga_view";
import Stretching from "./components/Detail/Stretching"
import Stretching_view from "./components/Detail/Stretching_view"
import ParentingSupportPage from "./components/Detail/ParentingSupportPage"
import ElderlySupportPage from "./components/Detail/ElderlySupportPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />}></Route>
        
        
        {/* 사회 복지 프로그램 페이지 */}
        <Route path="/SelectCommunity" element={<SelectCommunity />}></Route>
        <Route path="/SelectCommunity/ParentingSupportPage" element={<ParentingSupportPage />}></Route>
        <Route path="/SelectCommunity/ElderlySupportPage" element={<ElderlySupportPage />}></Route>
        
        
        {/* 헬스 케어 프로그램 페이지 */}
        <Route path="/SelectCare" element={<SelectCare />}></Route>
        
        {/* 요가 선택 */}
        <Route path="/SelectCare/Yoga" element={<Yoga />}></Route>
        <Route path="/SelectCare/Yoga/Yoga_view" element={<Yoga_view />}></Route>

        {/* 스트레칭 선택 */}
        <Route path="/SelectCare/Stretching" element={<Stretching />}></Route>
        <Route path="/SelectCare/Stretching/Stretching_view" element={<Stretching_view />}></Route>




      {/*        
        <Route path="/ApplyAsSitterPage" element={<ApplyAsSitterPage />}></Route>
        <Route path="/Form_senior" element={<Form_senior />}></Route>
        <Route path="/Form_mom" element={<Form_mom />}></Route>
        <Route path="/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/Form_carehelper" element={<Form_carehelper />}></Route>

        <Route path="/ApplyComplete" element={<ApplyComplete />}></Route>

        <Route path="/FindeMore" element={<FindeMore />}></Route>
        <Route path="/Finder" element={<Finder />}></Route> */}




      </Routes>
    </BrowserRouter>
  );
}

export default App;
