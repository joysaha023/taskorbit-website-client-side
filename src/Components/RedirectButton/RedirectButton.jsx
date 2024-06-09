import React from 'react';
import { MdOndemandVideo } from 'react-icons/md';

const RedirectButton = ({videoUrl}) => {

    const handleRedirect = () => {
        window.location.href = videoUrl;
    };

    return (
        <button onClick={handleRedirect} className='btn '>
            <MdOndemandVideo /> Demo
        </button>
    );
};

export default RedirectButton;