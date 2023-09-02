import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import NavBar from './components/NavBar';
import YogaPage from './Pages/DetailPage/YogaPage';
import ElderlySupportPage from './Pages/DetailPage/ElderlySupportPage';
import FindLocalSittersPage from './Pages/DetailPage/FindLocalSittersPage';
import ApplyAsSitterPage from './Pages/DetailPage/ApplyAsSitterPage';
import ParentingSupportPage from './Pages/DetailPage/ParentingSupportPage';

const Layout = () => {
  return (
      <>
      <NavBar />
      </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<MainPage />} />
      <Route path='/yoga' element={<YogaPage />} />
      <Route path='/elderly-support' element={<ElderlySupportPage />} />
      <Route path='/parenting-support' element={<ParentingSupportPage />} />
      <Route path='/find-local-sitters' element={<FindLocalSittersPage />} />
      <Route path='/apply-as-sitter' element={<ApplyAsSitterPage />} />
    </Routes>
    </BrowserRouter>

    
  );
};

export default App;
