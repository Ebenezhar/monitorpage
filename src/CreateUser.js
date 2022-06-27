import { Formik } from "formik";
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


function CreateUser() {
  let navigation =  useNavigate();
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
        errors.name = 'Please enter the name'
      }else if(values.name.length < 5) {
        errors.name = 'Length should be more than five'
      }else if(values.name.length > 20) {
        errors.name = 'Length should be less than 20 Characters'
      } else if(!pattern.test(formik.values.name)){
        errors.name = "Enter the valid Name"
      }

      if (!values.position) {
        errors.position = 'Please enter the position'
      }
      if (!values.age) {
        errors.age = 'Please enter the age'
      }else if(values.age < 18) {
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
    onSubmit: (values) => {
      console.log(values);
      navigation('/portal/Users')
    },
  });
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
              className={`form-control ${formik.errors.name ? 'error-border' : ''} `}/>
            {
              formik.errors.name ? <span style={{color:'red'}}> enter the name</span> : null
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
              formik.errors.position ? <span style={{color:'red'}}> enter the position</span> : null
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
              formik.errors.office ? <span style={{color:'red'}}> enter the office</span> : null
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
              formik.errors.age ? <span style={{color:'red'}}> enter the age</span> : null
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
              formik.errors.startDate ? <span style={{color:'red'}}> enter the start Date</span> : null
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
              formik.errors.salary ? <span style={{color:'red'}}> enter the salary</span> : null
            }
          </div>
          <div className="col-lg-6">
            <input type={'submit'} value='Submit' className="btn btn-primary mt-5" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
