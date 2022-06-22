import React from 'react'
function Card({data}) {
    
    return (
        <div class="col-xl-3 col-md-6 mb-4">
            <div class={`card border-left-${data.color} shadow h-100 py-2`}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>
                                {data.name}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.amount}</div>
                        </div>
                        <div class="col-auto">
                            <i class={`fas fa-${data.logo} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Card