import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard header="Dashboard" />} />
          <Route path="/users" element={<Users header="Users" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
