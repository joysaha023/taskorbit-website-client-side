import React from 'react';
import { NavLink } from 'react-router-dom';

const CreatorBar = () => {
    return (
        <div className='space-y-2'>
            <li>
          <NavLink to="/dashboard/creatorHome">
            My Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/AddTask">
            Add New Task 
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/creatortask">
             My Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/parchaseCoin">
             Purchase Coin
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/paymentHistory">
             Payment History
          </NavLink>
        </li>
        </div>
    );
};

export default CreatorBar;