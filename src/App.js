import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import styled from 'styled-components';
import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWirtePage';

const MainTitleText=styled.p`
  font-size:24px;
  font-weight:bold;
  text-align:center;
`;
function App() {
  return (
      <BrowserRouter>
        <MainTitleText>MINI-BLOG</MainTitleText>
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
