import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            {/* Sidebar */}
            <div>Sidebar</div>

            {/* Outlet --> Dynamic content */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;