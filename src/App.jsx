import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Dashboard
import Dashboard from './pages/Dashboard';

// Import All 24 Clients
import ClientOne from './pages/clients/ClientOne';
import ClientTwo from './pages/clients/ClientTwo';
import ClientThree from './pages/clients/ClientThree';
import ClientFour from './pages/clients/ClientFour';
import ClientFive from './pages/clients/ClientFive';
import ClientSix from './pages/clients/ClientSix';
import ClientSeven from './pages/clients/ClientSeven';
import ClientEight from './pages/clients/ClientEight';
import ClientNine from './pages/clients/ClientNine';
import ClientTen from './pages/clients/ClientTen';
import ClientEleven from './pages/clients/ClientEleven';
import ClientTwelve from './pages/clients/ClientTwelve';
import ClientThirteen from './pages/clients/ClientThirteen';
import ClientFourteen from './pages/clients/ClientFourteen';
import ClientFifteen from './pages/clients/ClientFifteen';
import ClientSixteen from './pages/clients/ClientSixteen';
import ClientSeventeen from './pages/clients/ClientSeventeen';
import ClientEighteen from './pages/clients/ClientEighteen';
import ClientNineteen from './pages/clients/ClientNineteen';
import ClientTwenty from './pages/clients/ClientTwenty';
import ClientTwentyOne from './pages/clients/ClientTwentyOne';
import ClientTwentyTwo from './pages/clients/ClientTwentyTwo';
import ClientTwentyThree from './pages/clients/ClientTwentyThree';
import ClientTwentyFour from './pages/clients/ClientTwentyFour';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard - The Entry Point */}
        <Route path="/" element={<Dashboard />} />

        {/* Client Routes */}
        <Route path="/client-one" element={<ClientOne />} />
        <Route path="/client-two" element={<ClientTwo />} />
        <Route path="/client-three" element={<ClientThree />} />
        <Route path="/client-four" element={<ClientFour />} />
        <Route path="/client-five" element={<ClientFive />} />
        <Route path="/client-six" element={<ClientSix />} />
        <Route path="/client-seven" element={<ClientSeven />} />
        <Route path="/client-eight" element={<ClientEight />} />
        <Route path="/client-nine" element={<ClientNine />} />
        <Route path="/client-ten" element={<ClientTen />} />
        <Route path="/client-eleven" element={<ClientEleven />} />
        <Route path="/client-twelve" element={<ClientTwelve />} />
        <Route path="/client-thirteen" element={<ClientThirteen />} />
        <Route path="/client-fourteen" element={<ClientFourteen />} />
        <Route path="/client-fifteen" element={<ClientFifteen />} />
        <Route path="/client-sixteen" element={<ClientSixteen />} />
        <Route path="/client-seventeen" element={<ClientSeventeen />} />
        <Route path="/client-eighteen" element={<ClientEighteen />} />
        <Route path="/client-nineteen" element={<ClientNineteen />} />
        <Route path="/client-twenty" element={<ClientTwenty />} />
        <Route path="/client-twentyone" element={<ClientTwentyOne />} />
        <Route path="/client-twentytwo" element={<ClientTwentyTwo />} />
        <Route path="/client-twentythree" element={<ClientTwentyThree />} />
        <Route path="/client-twentyfour" element={<ClientTwentyFour />} />

        {/* 404 Redirect - Optional */}
        <Route path="*" element={<div className="flex items-center justify-center h-screen font-bold">Macha, indha page illai! Go back to <a href="/" className="text-blue-500 ml-2">Dashboard</a></div>} />
      </Routes>
    </Router>
  );
}

export default App;