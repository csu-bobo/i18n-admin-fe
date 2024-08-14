import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout';
import TextSearch from './pages/TextSearch';
import DemandList from './pages/demand/DemandList';
import DemandDetail from './pages/demand/DemandDetail';
import DemandAudit from './pages/demand/DemandAudit';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/document-search" element={<TextSearch />} />
          <Route path="/request-list" element={<DemandList />} />
          <Route path="/request-review" element={<DemandDetail />} />
          <Route path="/modify-review" element={<DemandAudit />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
