import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Dashboard/SideBar/SideBar';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <SideBar></SideBar>
            </div>

            {/* Outlet --> Dynamic content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;