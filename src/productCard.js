import React from 'react'

function ProductCard({data}) {
    return (
        <div class="card m-3" style={{ width: "18rem" }}>
            <img src={data.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title mb-2">{data.name}</h6>
                <h5 class="card-title">₹ {data.price}</h5>
                <a href="#" class="btn btn-primary m-2">Add to Cart</a>
                <a href="#" class="btn btn-info m-2">Edit</a>
                <a href="#" class="btn btn-danger m-2">Delete</a>
            </div>
        </div>
    )
}

export default ProductCard;