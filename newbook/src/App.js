import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Detail from "./scenes/detail/Detail";
import Bookview from "./scenes/bookview/Bookview";
import Home from "./scenes/dashboard/home";
import Layout from "./scenes/dashboard/layout";
import Service from "./scenes/dashboard/service";
import Bible from "./scenes/dashboard/bible";
import Picture from "./scenes/dashboard/picture";
//admin
import Dashboardadmin from "./scenes/admin/scenes/dashboardadmin";
import Loginadmin from "./scenes/admin/scenes/loginadmin/login";
import Teamadmin from "./scenes/admin/scenes/managepost";
import {
  QuestionTypes,
  Questions,
} from "./scenes/admin/scenes/managecod/index";
import Formadmin from "./scenes/admin/scenes/formadmin";
import Detailadmin from "./scenes/admin/scenes/detailadmin/Detail";
import Bookviewadmin from "./scenes/admin/scenes/bookviewadmin/Bookview";
import { ManageBookDetail } from "./scenes/admin/scenes/manageBook/ManageBookDetail";

import { ManageBook } from "./scenes/admin/scenes/manageBook";
import { Cityyy } from "./scenes/admin/scenes/manageBook/Cityyy";

import {
  QuestionTypesClient,
  QuestionsClient,
  AnswersClient,
} from "./scenes/dashboard/Cod/index";
import Mobhome from "./components/Mobileview/Mobhome";
import Moblayoutpage from "./components/Mobileview/Moblayoutpage";
import Mobsettings from "./components/Mobileview/Mobsettings";
import Mobpictures from "./components/Mobileview/Mobpictures";
import Loginscreen from "./components/Mobileview/Loginpages/Loginscreen";
import Registerpage from "./components/Mobileview/Loginpages/Registerpage";
import Forgetpassword from "./components/Mobileview/Loginpages/Forgetpassword";
import Otpverify from "./components/Mobileview/Loginpages/Otpverify";
import Resetpassword from "./components/Mobileview/Loginpages/Resetpassword";
import Mobbibleview from "./scenes/dashboard/bible-components/BibleView/Mobbibleview";
import Mobmessageview from "./scenes/dashboard/bible-components/MessageView/Mobmessageview";
import Mobparasearch from "./scenes/dashboard/bible-components/SearchView/Mobparasearch";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cod/questiontypes" element={<QuestionTypesClient />} />
          <Route path="/cod/questions/:type" element={<QuestionsClient />} />
          <Route path="/cod/answer/:question" element={<AnswersClient />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/bible/:id/:newid" element={<Bible />} />
          <Route path="/picture/:id/:title" element={<Picture />} />

          <Route path="/admin/dashboard" element={<Dashboardadmin />} />
          <Route path="/admin/login" element={<Loginadmin />} />
          <Route path="/admin/post" element={<Teamadmin />} />
          <Route path="/admin/manage-qtypes" element={<QuestionTypes />} />
          <Route path="/admin/manage-books" element={<ManageBook />} />
          <Route
            path="/admin/manage-booksdetail/:id"
            element={<ManageBookDetail />}
          />
          <Route path="/admin/manage-questions" element={<Questions />} />
          <Route path="/admin/form" element={<Formadmin />} />
          <Route path="/admin/bookview/:id" element={<Bookviewadmin />} />
          <Route path="/admin/detail/:pro/:id" element={<Detailadmin />} />
          <Route path="/admin/manage-city" element={<Cityyy />} />

{/* Mobile view route */}

<Route path="/mobhome" element={<Mobhome />} />
<Route path="/moblayout" element={<Moblayoutpage />} />
<Route path="/mobsettings" element={<Mobsettings />} />
<Route path="/mobpictures" element={<Mobpictures />} />
<Route path="/loginscreen" element={<Loginscreen />} />
<Route path="/register" element={<Registerpage />} />
<Route path="/forgetpassword" element={<Forgetpassword />} />
<Route path="/otpverify" element={<Otpverify />} />
<Route path="/resetpassword" element={<Resetpassword />} />
<Route path="/mobbibleview" element={<Mobbibleview />} />
<Route path="/mobmsg" element={<Mobmessageview />} />
<Route path="/mobparasearch" element={<Mobparasearch />} />















        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
