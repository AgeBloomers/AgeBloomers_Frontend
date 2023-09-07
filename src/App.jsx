import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import ApplyComplete from "./components/Detail/ApplyComplete";
import Finder from "./components/Main/Finder";
import Form_carehelper from "./components/Detail/Form_carehelper";
import Form_sitter from "./components/Detail/Form_sitter";
import MainPage from "./components/Main/MainPage";
import CareApplySelect from "./components/Main/CareApplySelect";
import Applylist from "./components/Detail/Applylist";
import FindSitter from "./components/Detail/FindSitter";
import FindCareHelper from "./components/Detail/FindCareHelper";
>>>>>>> yeji

import MainPage from "./components/Main/MainPage";
import SelectCommunity from "./components/Detail/SelectCommunity"
import SelectCare from "./components/Detail/SelectCare"
import Yoga from "./components/Detail/Yoga";
import Yoga_view from "./components/Detail/Yoga_view";
import Stretching from "./components/Detail/Stretching"
import Stretching_view from "./components/Detail/Stretching_view"
import ParentingSupportPage from "./components/Detail/ParentingSupportPage"
import ElderlySupportPage from "./components/Detail/ElderlySupportPage"
import Finder from "./components/Main/Finder";
import CareApplySelect from "./components/Main/CareApplySelect";
import Applylist from "./components/Detail/Applylist";
import FindSitter_Sitter from "./components/Detail/FindSitter_Sitter";
import Form_sitter from "./components/Detail/Form_sitter";
import FindCareHelper from "./components/Detail/FindCareHelper";
import ApplyComplete from "./components/Detail/ApplyComplete";
import Form_carehelper from "./components/Detail/Form_carehelper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />}></Route>

=======
>>>>>>> yeji
        {/* 케어 지원하기 */}
        <Route path="/CareApplySelect" element={<CareApplySelect />}></Route>
        <Route path="/CareApplySelect/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/CareApplySelect/Form_carehelper" element={<Form_carehelper />}></Route>
        <Route path="/CareApplySelect/Applylist" element={<Applylist />}></Route>

        {/* 케어 찾기 */}
        <Route path="/Finder" element={<Finder />}></Route>
<<<<<<< HEAD
        <Route path="/Finder/FindSitter" element={<FindSitter_Sitter />}></Route>
        <Route path="/Finder/FindCareHelper" element={<FindCareHelper />}></Route>
        <Route path="/Finder/FindCareHelper/FindMore/ApplyComplete" element={<ApplyComplete />}></Route>
        
        {/* 사회 복지 프로그램 페이지 */}
        <Route path="/SelectCommunity" element={<SelectCommunity />}></Route>
        <Route path="/SelectCommunity/ParentingSupportPage" element={<ParentingSupportPage />}></Route>
        <Route path="/SelectCommunity/ElderlySupportPage" element={<ElderlySupportPage />}></Route>
        
        
        {/* 헬스 케어 프로그램 페이지 */}
        <Route path="/SelectCare" element={<SelectCare />}></Route>
        {/* 요가 선택 */}
        <Route path="/SelectCare/Yoga" element={<Yoga />}></Route>
        <Route path="/SelectCare/Yoga/Yoga_view" element={<Yoga_view />} />
        {/* 스트레칭 선택 */}
        <Route path="/SelectCare/Stretching" element={<Stretching />}></Route>
        <Route path="/SelectCare/Stretching/Stretching_view" element={<Stretching_view />}></Route>
        
      

z        
        



      {/*        
        <Route path="/ApplyAsSitterPage" element={<ApplyAsSitterPage />}></Route>
        <Route path="/Form_senior" element={<Form_senior />}></Route>
        <Route path="/Form_mom" element={<Form_mom />}></Route>
        <Route path="/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/Form_carehelper" element={<Form_carehelper />}></Route>

        <Route path="/ApplyComplete" element={<ApplyComplete />}></Route>

        <Route path="/FindeMore" element={<FindeMore />}></Route>
        <Route path="/Finder" element={<Finder />}></Route> */}



=======
        <Route path="/Finder/FindSitter" element={<FindSitter />}></Route>
        <Route path="/Finder/FindCareHelper" element={<FindCareHelper />}></Route>
        <Route path="/Finder/FindCareHelper/FindMore/ApplyComplete" element={<ApplyComplete />}></Route>
>>>>>>> yeji

        {/* 메인페이지 */}
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
