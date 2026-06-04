// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Header from "./component/header"
import Sidebar from "./component/sidebar"
import Home from "./pages/home"
import Footer from "./component/footer"
import { BrowserRouter  } from "react-router-dom"
// import Form from "./component/test"
// import Header from './component/header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Home />
            <Footer />
            {/* <Form /> */}
        </BrowserRouter>
    )
}

export default App
