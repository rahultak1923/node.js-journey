import React, { useEffect, useState } from "react";
import postapi from "../services/postapi";
import {SignupUser, UserData} from "../services/web";

const CreateComponent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage]=useState('');

  UserData()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("fullName",  );
    // formData.append("email", email);
    // formData.append("password", password);

    // const formData = {
    //   fullName, email, password
    // }
    if (fullName === "" || email === "" || password === "") {
      alert("All fields are required!");
      return;
    }

    const formData = { "fullName":fullName, "email":email, "password":password };
    SignupUser(formData)
    // const response = await postapi.create(formData);
    // console.log(response);
    //  event.target.reset(); // form data fill kar ne ke baad clear kar ne ke liye
  };

  return (
    <div>
      <form className="container mt-3" onSubmit={handleSubmit}>
        <div class="mb-3 ">
          <label for="fullName" class="form-label">
            FullName
          </label>
          <input
            type="text"
            name="fullName"
            class="form-control"
            id="fullName"
            aria-describedby="emailHelp"
            required
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComponent;
