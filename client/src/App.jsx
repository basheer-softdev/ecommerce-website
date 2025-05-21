import React from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./layouts/AdminLayout";
import Test from "./pages/Test";

const App = () => {

  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
