import React, { useState } from "react";
import { CreateUsers } from "../api/web";

const CreateUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // 3no input tex se data formData me jayega line nu 12

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { fullName: fullName, email: email, password: password };
    CreateUsers(formData);
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

export default CreateUser;
