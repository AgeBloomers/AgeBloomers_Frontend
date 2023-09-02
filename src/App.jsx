import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyAsSitterPage from "./components/Detail/ApplyAsSitterPage";
import ApplyComplete from "./components/Detail/ApplyComplete";
import FindeMore from "./components/Detail/FindeMore";
import Finder from "./components/Detail/Finder";
import FindLocalSittersPage from "./components/Detail/FindLocalSittersPage";
import Form_carehelper from "./components/Detail/Form_carehelper";
import Form_sitter from "./components/Detail/Form_sitter";
import MainPage from "./components/Main/MainPage";
import CareApplySelect from "./components/Main/CareApplySelect";
import Applylist from "./components/Detail/Applylist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 케어 지원하기 */}
        <Route path="/CareApplySelect" element={<CareApplySelect />}></Route>
        <Route path="/CareApplySelect/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/CareApplySelect/Form_carehelper" element={<Form_carehelper />}></Route>
        <Route path="/CareApplySelect/Applylist" element={<Applylist />}></Route>

        <Route path="/ApplyComplete" element={<ApplyComplete />}></Route>
        <Route path="/FindeMore" element={<FindeMore />}></Route>
        <Route path="/Finder" element={<Finder />}></Route>
        <Route
          path="/ApplyAsSitterPage"
          element={<ApplyAsSitterPage />}
        ></Route>
        
        <Route
          path="/FindLocalSittersPage"
          element={<FindLocalSittersPage />}
        ></Route>
        <Route path="/MainPage" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
