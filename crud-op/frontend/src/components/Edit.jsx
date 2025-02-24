import React, { useState } from 'react';
import { UpdateUser } from '../api/web';

const Edit = ({ userId, userData }) => {
  const [formData, setFormData] = useState({
    fullName: userData?.fullName || '',
    email: userData?.email || '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!userId) {
      console.error("User ID is missing");
      alert("User ID is not defined. Please try again.");
      return;
    }
    await UpdateUser(userId, formData);
  };
  

  return (
    <div>
      <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <form className="container mt-3 justify-content-start" >
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label d-flex">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label d-flex">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div id="emailHelp" className="form-text d-flex">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label d-flex">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
