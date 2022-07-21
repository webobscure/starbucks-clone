


import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Rewards from './pages/Rewards.jsx'
import GiftCards from './pages/GiftCard.jsx'





import Layout from './components/Layout.jsx'

import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Form/Login.jsx'
import { Register } from './components/Form/Register.jsx'






function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/cards" element={<GiftCards />} />
          </Route>
          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
    </>
  );
}

export default App;
