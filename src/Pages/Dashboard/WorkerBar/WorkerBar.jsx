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
          <NavLink to="/dashboard/tasklist">
             Task List
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/workersubmission">
             My Submission
          </NavLink>
        </li>
        </div>
    );
};

export default WorkerBar;