import React from 'react'

const Edit = () => {
  return (
    <div>
      
<button type="button" class="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <form className="container mt-3 justify-content-start" >
        <div className="mb-3 ">
          <label htmlFor="fullName" className="form-label d-flex">
            FullName
          </label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            aria-describedby="emailHelp"
            required
           
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label d-flex">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
        
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
          
          />
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Edit
