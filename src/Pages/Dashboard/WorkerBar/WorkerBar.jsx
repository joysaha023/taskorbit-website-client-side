import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkerBar = () => {
    return (
        <div>
            <li>
          <NavLink to="/dashboard/workerhome">
            My Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
             Task List
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
             My Submission
          </NavLink>
        </li>
        </div>
    );
};

export default WorkerBar;