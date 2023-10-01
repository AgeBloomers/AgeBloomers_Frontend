import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyComplete from "./components/Detail/ApplyComplete";
import Finder from "./components/Detail/Finders/Finder";
import Form_carehelper from "./components/Detail/CareApplySelectPages/Form_carehelper";
import Form_sitter from "./components/Detail/CareApplySelectPages/Form_sitter";
import MainPage from "./components/Main/MainPage";
import CareApplySelect from "./components/Detail/CareApplySelectPages/CareApplySelect";
import Applylist from "./components/Detail/Applylist";
import FindSitter from "./components/Detail/FindSitter";
import FindCareHelper from "./components/Detail/FindCareHelper";
import SelectCare from "./components/Detail/SelectCarePages/SelectCare";
import SelectCommunity from "./components/Detail/SelectCommunityPages/SelectCommunity";
import Yoga from "./components/Detail/SelectCarePages/Yoga";
import Stretching from "./components/Detail/SelectCarePages/Stretching";
import Yoga_view from "./components/Detail/SelectCarePages/Yoga_view";
import Stretching_view from "./components/Detail/SelectCarePages/Stretching_view";
import ParentingSupportPage from './components/Detail/SelectCommunityPages/ParentingSupportPage';
import ElderlySupportPage from './components/Detail/SelectCommunityPages/ElderlySupportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 케어 지원하기 */}
        <Route path="/CareApplySelect" element={<CareApplySelect />}></Route>
        <Route path="/CareApplySelect/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/CareApplySelect/Form_carehelper" element={<Form_carehelper />}></Route>
        <Route path="/CareApplySelect/Applylist" element={<Applylist />}></Route>
        
       {/* 사회 복지 제도 찾기 */}
       <Route path="/SelectCare" element={<SelectCare />}></Route>
        <Route path="/SelectCommunity" element={<SelectCommunity />}></Route>
        <Route path="/SelectCommunity/ParentingSupportPage" element={<ParentingSupportPage />}></Route>
        <Route path="/SelectCommunity/ElderlySupportPage" element={<ElderlySupportPage />}></Route>

       {/* 건강 관리 프로그램 */}
       <Route path="/SelectCare" element={<SelectCare />}></Route>
       <Route path="/SelectCare/Yoga" element={<Yoga />}></Route>
       <Route path="/SelectCare/Yoga_view" element={<Yoga_view />}></Route>
       <Route path="/SelectCare/Stretching" element={<Stretching />}></Route>
       <Route path="/SelectCare/Stretching__view" element={<Stretching_view />}></Route>

        {/* 내 주변 케어 찾기 */}
        <Route path="/Finder" element={<Finder />}></Route>
        <Route path="/Finder/FindSitter" element={<FindSitter />}></Route>
        <Route path="/Finder/FindCareHelper" element={<FindCareHelper />}></Route>
        <Route path="/Finder/FindCareHelper/FindMore/ApplyComplete" element={<ApplyComplete />}></Route>

        {/* 메인페이지 */}
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
