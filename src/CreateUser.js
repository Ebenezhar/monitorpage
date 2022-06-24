import React from "react";

function CreateUser() {
  return (
    <>
      <h3> Enter the User Details</h3>
      <form>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Enter the Name
          </label>
          <input
            type="text"
            class="form-control"
            id="Input1"
            placeholder="User Name"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Enter the Position
          </label>
          <input
            type="text"
            class="form-control"
            id="Input2"
            placeholder="Position"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Enter the office Location
          </label>
          <input
            type="text"
            class="form-control"
            id="Input3"
            placeholder="Location"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Enter the Age
          </label>
          <input
            type="number"
            class="form-control"
            id="Input4"
            placeholder="Age"
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateUser;
