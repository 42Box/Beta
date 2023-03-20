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
  return <Router>
  <Routes>
    <Route path="/" element={<Box />}/>
  </Routes>
</Router>
}
export default App;