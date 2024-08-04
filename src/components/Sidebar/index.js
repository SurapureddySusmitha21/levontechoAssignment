// src/components/Sidebar.js
import React from 'react';
import './index.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className='sideD'>
                <li>Overview</li>
                <li>Analytics</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

export default Sidebar;