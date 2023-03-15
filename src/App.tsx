import React from 'react';
import styled from 'styled-components';
import {ColorModeContext, useMode} from "./theme/theme";
import Topbar from "./scenes/global/Topbar"
import {Routes, Route} from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar"

// CssBaseLine reset css to default
// ThemeProvider the ability to pass in the themes
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ProSidebarProvider} from "react-pro-sidebar";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  position: relative;
`;

const ContentWrapper = styled.main`
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
`;

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ProSidebarProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AppWrapper>
            <Sidebar />
            <ContentWrapper>
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/team" element={<Team />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/invoices" element={<Invoices />}/>
                <Route path="/form" element={<Form />}/>
                <Route path="/bar" element={<Bar />}/>
                <Route path="/pie" element={<Pie />}/>
                <Route path="/line" element={<Line />}/>
                <Route path="/faq" element={<FAQ />}/>
                <Route path="/geography" element={<Geography />}/>
                <Route path="/calendar" element={<Calendar />}/>
              </Routes>
            </ContentWrapper>
          </AppWrapper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ProSidebarProvider>
  );
}

export default App;
