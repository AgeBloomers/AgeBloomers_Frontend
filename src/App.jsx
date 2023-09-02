import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form_senior from "./component/form_senior";
import Form_mom from "./component/Form_mom";
import Form_sitter from "./component/Form_sitter";
import Form_carehelper from "./component/Form_carehelper";
import ApplyComplete from "./component/ApplyComplete";
import FindeMore from "./component/FindeMore";
import Finder from "./component/finder";
import Select from "./component/select";
import Stretching from "./component/stretching";
import Stretching_view from "./component/stretching_view";
import Yoga from "./component/yoga";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Form_senior" element={<Form_senior />}></Route>
        <Route path="/Form_mom" element={<Form_mom />}></Route>
        <Route path="/Form_sitter" element={<Form_sitter />}></Route>
        <Route path="/Form_carehelper" element={<Form_carehelper />}></Route>
        <Route path="ApplyComplete" element={<ApplyComplete />}></Route>
        <Route path="FindeMore" element={<FindeMore />}></Route>
        <Route path="Finder" element={<Finder />}></Route>
        <Route path="Select" element={<Select />}></Route>
        <Route path="Stretching" element={<Stretching />}></Route>
        <Route path="Stretching_view" element={<Stretching_view />}></Route>
        <Route path="Yoga" element={<Yoga />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
