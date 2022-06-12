


import Home from './pages/Home'
import Menu from './pages/Menu'
import Rewards from './pages/Rewards'
import GiftCards from './pages/GiftCard'
import Form from './pages/Form/Form'



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
          <Route path="/auth" element={<Form />} />
          <Route path="/signup" element={<Form />} />
        </Routes>
    </>
  );
}

export default App;
