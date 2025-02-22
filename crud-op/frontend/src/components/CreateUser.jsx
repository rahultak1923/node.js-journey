import React, { useState } from "react";
import { CreateUsers } from "../api/web";

const CreateUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // 3no input tex se data formData me jayega line nu 12

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { fullName: fullName, email: email, password: password };
    await CreateUsers(formData);

    setFullName(""); // form data clear kar ne ke liye 
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form className="container mt-3" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="fullName" className="form-label">
            FullName
          </label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            aria-describedby="emailHelp"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password} // form data fill hone ke baad clear kar ne ke liye 
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
