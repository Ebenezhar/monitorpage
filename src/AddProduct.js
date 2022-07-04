import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from "react-router-dom";

function AddProduct() {
    let navigation = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            img: "",
            age:"",
        },
        validate: (values) => {
            let errors = {};
            if (!values.name) { errors.name = 'Please enter the name' }
            else if (values.name.length < 5) {
                errors.name = 'Length should be more than 5'
            }
            if(!values.price){
                errors.price = 'Please enter the price'
            } else if (values.price < 100){
                errors.price = 'Price must be higher than 100'
            }

            if(!values.img){
                errors.img = 'Please enter the image link';
            } 
            else if(values.img.length < 5){
                errors.img = 'please enter the valid image link'
            }
            return errors;
        },
        onSubmit: async(values) => {
            console.log(values);
            await axios.post("https://62c29ac6ff594c65675fe6f0.mockapi.io/products",values)
            navigation("/portal/products")
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label for="name">Enter the name</label>
                        <input type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className={`form-control ${formik.errors.name ? 'error-border' : ''} `} />
                        {
                            formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label for="price">Enter the price</label>
                        <input type="number" 
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        className={`form-control ${formik.errors.price ? 'error-border' : ''}`} />
                        {
                            formik.errors.price ? <span style={{ color: 'red' }}> {formik.errors.price}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label for="picture">Enter the picture link</label>
                        <input type="text" 
                        name="img"
                        onChange={formik.handleChange}
                        value={formik.values.img}
                        className={`form-control ${formik.errors.img ? 'error-border' : ''}`} />
                        {
                            formik.errors.img ? <span style={{ color: 'red' }}> {formik.errors.img}</span> : null
                        }
                    </div>
                </div>
                <div>   
                    <input type={'submit'} value='Submit' className="btn btn-primary mt-5" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct;