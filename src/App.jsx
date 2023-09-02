import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyAsSitterPage from "./components/Detail/ApplyAsSitterPage";
import ApplyComplete from "./components/Detail/ApplyComplete";
import FindMore from "./components/Detail/FindMore";
import Finder from "./components/Detail/Finder";
import FindLocalSittersPage from "./components/Detail/FindLocalSittersPage";
import Form_carehelper from "./components/Detail/Form_carehelper";
import Form_sitter from "./components/Detail/Form_sitter";
import MainPage from "./components/Main/MainPage";
import CareApplySelect from "./components/Main/CareApplySelect";
import Applylist from "./components/Detail/Applylist";
import FindSitter from "./components/Detail/FindSitter";
import FindCareHelper from "./components/Detail/FindCareHelper";
import FindSitter_All from "./components/Detail/FindSitter_All";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 케어 지원하기 */}
        <Route path="/CareApplySelect" element={<CareApplySelect />}></Route>
        <Route
          path="/CareApplySelect/Form_sitter"
          element={<Form_sitter />}
        ></Route>
        <Route
          path="/CareApplySelect/Form_carehelper"
          element={<Form_carehelper />}
        ></Route>
        <Route
          path="/CareApplySelect/Applylist"
          element={<Applylist />}
        ></Route>

        {/* 케어 찾기 */}
        <Route path="/Finder" element={<Finder />}></Route>
        <Route path="/Finder/FindSitter" element={<FindSitter />}></Route>
        <Route path="/Finder/FindCareHelper" element={<FindCareHelper />}></Route>
        <Route path="/Finder/FindCareHelper/FindMore" element={<FindMore />}></Route>
        <Route path="/Finder/FindCareHelper/FindMore/ApplyComplete" element={<ApplyComplete />}></Route>

        {/* 테스트 */}
        <Route path="/FindSitter_All" element={<FindSitter_All />}></Route>

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
