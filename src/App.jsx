import React from 'react'
import './App.scss'
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {HomePage,ErrorPage,MealDetailsPage,CategoryPage} from './pages/index'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
const App = () =>{
 
  return (
  <BrowserRouter>
  <Header/>
  <Sidebar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/meal/:id' element={<MealDetailsPage/>}/>
    <Route path='/meal/cetagory/:name' element={<CategoryPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>

  </Routes>
  </BrowserRouter>
  )
}
export default App;
