


import Home from './pages/Home'
import Menu from './pages/Menu'
import Rewards from './pages/Rewards'
import GiftCards from './pages/GiftCard'
import Signup from './components/Form/Signup'
import Auth from './components/Form/Auth'




import Layout from './components/Layout'

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
