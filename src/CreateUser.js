import { Formik } from "formik";
import React from "react";
import { useFormik } from "formik";

function CreateUser() {
  let formik = useFormik({
    intialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    onSubmit: (values) => {
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
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>Positon</label>
            <input type="text"
            name="position"
             className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>Start Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-lg-6">
            <label>salary</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
