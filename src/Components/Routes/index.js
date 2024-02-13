import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../../Pages/HomePage'
import Dashboard from '../../Pages/Dashboard'
import Orders from '../../Pages/Orders'
import Inventory from '../../Pages/Inventory'

const AppRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path='/Dashboard-Reactjs-Antd' element={<HomePage />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/orders' element={<Orders />}></Route >
                <Route path='/inventory' element={<Inventory />}></Route >
            </Routes>

        </div >
    )
}

export default AppRoutes