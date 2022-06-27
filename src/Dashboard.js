import React from 'react';
import Card from './Card.js';

function Dashboard() {

    let cards = [
        {
            name: 'Earnings (Monthly)',
            amount: '$40,000',
            logo: "calendar",
            color: "primary",
        },
        {
            name: 'EARNINGS (ANNUAL)',
            amount: '$215,000',
            logo: "dollar-sign",
            color: "success",
        },
        {
            name: 'TASKS',
            amount: 50,
            logo: "clipboard-list",
            color: "info",
        },
        {
            name: 'PENDING REQUESTS',
            amount: 12,
            logo: "comments",
            color: "warning",
        },
    ]
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                {
                    cards.map((card) => { return <Card data={card} /> })
                }
            </div>
          
        </>
    )
}

export default Dashboard