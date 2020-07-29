import React from 'react';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { css } from "styled-components/macro";
import "tailwindcss/dist/base.css";
// import globalStyles from "styles/globalStyles.css"

import Page from './Page';
import AdminPage from './AdminPage';



const App = () => (
    <BrowserRouter>
      <Page />
      <AdminPage/>
    </BrowserRouter>
);

export default App;
