import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from "react-router-dom";

function AddProduct() {
    let navigation = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            picture: "", 
          },
          validate: (values) =>{
            let errors = {};
            if(!values.name){errors.name = 'Please enter the name'}
            else if(values.name < 5){
                errors.name = 'Length should be more than 5'
            }
            return errors;
          },
          onSubmit: (values) => {
            console.log(values);
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
                         className={`form-control ${formik.errors.name ? 'error-border' : ''} `}/>
                       {
                         formik.errors.name ? <span style={{color:'red'}}> enter the name</span> : null
                       }

                    </div>
                    <div className="col-lg-6">
                        <label for="price">Enter the price</label>
                        <input type="number" className='form-control'/>
                    </div>
                    <div className="col-lg-6">
                        <label for="picture">Enter the picture link</label>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div>
                    <input type={'submit'} value='Submit' className="btn btn-primary mt-5"/>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;