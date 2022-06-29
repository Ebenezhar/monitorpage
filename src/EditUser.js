import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

function EditUser() {
    let { id } = useParams();
    console.log(id);
    let navigation = useNavigate();
    let [isLoading, setLoading] = useState(false)
    let formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            age: "",
            office: "",
            startDate: "",
            salary: "",
          },
        validate: (values) => {
            let errors = {};
            let pattern = new RegExp(/^[a-zA-Z\-]+$/)
            if (!values.name) {
                errors.name = 'Please enter the name';
            } else if (values.name.length < 5) {
                errors.name = 'Length should be more than 5 Characters';
            } else if (values.name.length > 20) {
                errors.name = 'Length should be less than 20 Characters';
            } else if (!pattern.test(formik.values.name)) {
                errors.name = "Enter the valid Name";
            }

            if (!values.position) {
                errors.position = 'Please enter the position'
            }
            if (!values.age) {
                errors.age = 'Please enter the age'
            } else if (values.age < 18) {
                errors.age = 'Age must be above 18'
            }
            if (!values.office) {
                errors.office = 'Please enter the office'
            }
            if (!values.startDate) {
                errors.startDate = 'Please enter the start date'
            }
            if (!values.salary) {
                errors.salary = 'Please enter the salary'
            }
            return errors
        },
        onSubmit: async (values) => {
            try {
                setLoading(true);
                console.log("val",values);
                await axios.put(`https://629040b2665ea71fe12f668b.mockapi.io/employee/${id}`, values);
                navigation('/portal/Users')
            }
            catch (error) { }
        },
    });
    useEffect(() => {
        let fetchData = async() => {
            let userData = await axios.get(`https://629040b2665ea71fe12f668b.mockapi.io/employee/${id}`);
            formik.setValues(userData.data);
        }
        fetchData();
    },[])
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className={`form-control ${formik.errors.name ? 'error-border' : ''} `} />
                        {
                            formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Positon</label>
                        <input type="text"
                            name="position"
                            onChange={formik.handleChange}
                            value={formik.values.position}
                            className="form-control" />
                        {
                            formik.errors.position ? <span style={{ color: 'red' }}> {formik.errors.position}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Office</label>
                        <input type="text"
                            name="office"
                            onChange={formik.handleChange}
                            value={formik.values.office}
                            className="form-control" />
                        {
                            formik.errors.office ? <span style={{ color: 'red' }}> {formik.errors.office}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Age</label>
                        <input type="number"
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className="form-control" />
                        {
                            formik.errors.age ? <span style={{ color: 'red' }}> {formik.errors.age}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Start Date</label>
                        <input type="date"
                            name="startDate"
                            onChange={formik.handleChange}
                            value={formik.values.startDate}
                            className="form-control" />
                        {
                            formik.errors.startDate ? <span style={{ color: 'red' }}> {formik.errors.startDate}e</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>salary</label>
                        <input type="text"
                            name="salary"
                            onChange={formik.handleChange}
                            value={formik.values.salary}
                            className="form-control" />
                        {
                            formik.errors.salary ? <span style={{ color: 'red' }}> {formik.errors.salary}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <input type={'submit'} value='Submit' className="btn btn-primary mt-5" disabled={!formik.isValid && isLoading} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditUser