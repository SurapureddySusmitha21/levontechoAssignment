import React from 'react';
import './index.css';
import LineChartWidget from '../Widgets/LineChartWidget';


import BarChartWidget from '../Widgets/BarChartWidget';
import PieChartWidget from '../Widgets/PieChartWidget';
import RecentActivity from '../Widgets/RecentActivity';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="widget">
                <LineChartWidget />
            </div>
            <div className="widget">
                <BarChartWidget />
            </div>
            <div className="widget">
                <PieChartWidget />
            </div>
            <div className="widget">
                <RecentActivity />
            </div>
        </div>
    );
}

export default MainContent;