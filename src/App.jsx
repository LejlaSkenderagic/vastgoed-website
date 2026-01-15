import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/notFound";
import { Toaster } from "@/components/ui/toaster";



function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
