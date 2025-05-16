import React from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {

  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

export default App;
