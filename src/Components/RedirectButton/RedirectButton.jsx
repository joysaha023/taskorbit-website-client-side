import React from 'react';
import { MdOndemandVideo } from 'react-icons/md';

const RedirectButton = ({videoUrl}) => {

    const handleRedirect = () => {
        window.location.href = videoUrl;
    };

    return (
        <button onClick={handleRedirect} className='btn bg-[#557aa7] hover:text-black text-white rounded-3xl'>
            <MdOndemandVideo /> Demo
        </button>
    );
};

export default RedirectButton;