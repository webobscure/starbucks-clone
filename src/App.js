


import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Rewards from './pages/Rewards.jsx'
import GiftCards from './pages/GiftCard.jsx'
import Signup from './components/Form/Signup.jsx'
import Auth from './components/Form/Auth.jsx'




import Layout from './components/Layout.jsx'

import { Route, Routes } from 'react-router-dom'





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
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
}

export default App;
