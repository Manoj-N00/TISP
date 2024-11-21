import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../src/contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Threats from './pages/Threats';
import Organizations from './pages/Organizations';
import Discussions from './pages/Discussions';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Top10 from './pages/Top10';
import Chat from './pages/Chat';
import Checklink from './pages/checklink';
import VirusTotalIntegration from './pages/Threatintll';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function App(): JSX.Element {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/threats"
                element={
                  <PrivateRoute>
                    <Threats />
                  </PrivateRoute>
                }
              />
              <Route
                path="/organizations"
                element={
                  <PrivateRoute>
                    <Organizations />
                  </PrivateRoute>
                }
              />
              <Route
                path="/discussions"
                element={
                  <PrivateRoute>
                    <Discussions />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <Settings />
                  </PrivateRoute>
                }
              />
              <Route
                path="/top10"
                element={
                  <PrivateRoute>
                    <Top10 />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <Chat />
                  </PrivateRoute>
                }
              />
              <Route
                path="/checklink"
                element={
                  <PrivateRoute>
                    <Checklink />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Threatintll"
                element={
                  <PrivateRoute>
                    <VirusTotalIntegration />
                  </PrivateRoute>
                }
              />
            </Routes>
            
          </main>
        </div>
      </div>
    </Router>
  );
}
