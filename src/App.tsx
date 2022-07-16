import './App.css';
import LoginComponent from './components/login.component';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import DashboardComponent from './components/dashboard.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<LoginComponent />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<DashboardComponent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
