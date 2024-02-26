import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SidebarProvider} from './context/sidebarContext.jsx'
import { MealProvider } from './context/mealContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<SidebarProvider>
    <MealProvider>
    <App />
    </MealProvider>

</SidebarProvider>

)
