import React from 'react';
import Card from './Card.js';
import DoghnutChart from './Doughnut.js';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

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
            <div className="row">
                {
                    cards.map((card) => { return <Card data={card} /> })
                }
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                            <div class="dropdown no-arrow">
                                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart-pie pt-4 pb-2">
                                <DoghnutChart />
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard