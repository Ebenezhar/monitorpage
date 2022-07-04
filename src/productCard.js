import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <div class="card m-3" style={{ width: "18rem" }}>
            <img src={props.data.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h6 class="card-title mb-2">{props.data.name}</h6>
                <h5 class="card-title">₹ {props.data.price}</h5>
                <a href="#" class="btn btn-primary m-2">Add to Cart</a>
                <Link to={`/portal/Products/EditProducts/${props.data.id}`} class="btn btn-info m-2">Edit</Link>
                <button onClick={() => props.deletefromList(props.data.id)} href="#" class="btn btn-danger m-2">Delete</button>
            </div>
        </div>
    )
}

export default ProductCard;