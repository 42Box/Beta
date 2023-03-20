import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import Home from './routes/Home'
import Box from './routes/Box'
import Token from './Token'


function App() {
  return 
    <BrowserRouter base = {process.env.PUBLIC_URL}>
    <Routes>
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}/>
      <Route path={process.env.PUBLIC_URL +"/home"}element={<Token />}/>
      <Route path={process.env.PUBLIC_URL + "/box" }element={<Box />}/>
    </Routes>
  </BrowserRouter>
}

export default App;