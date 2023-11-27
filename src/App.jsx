import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage'
import NotFound from './views/NotFound'

function App() {


  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/contactpage" element={<ContactPage></ContactPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
