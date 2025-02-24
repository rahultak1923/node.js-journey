import React from "react";
import { UserData, DeleteUser } from "../api/web";
import { useEffect, useState } from "react";
import Edit from "./Edit";

const UserShow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await UserData();
      console.log("Fetched Data:", result);

      setData(result.user || []);
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const result = await DeleteUser(userId);
      console.log("User Deleted:", result);
      alert("User Deleted Successfully!");

      setData((prevData) => prevData.filter((user) => user._id !== userId)); // delete ke baad pages reload kar ne ke liye
    } catch (error) {
      console.error("Error Deleting User:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="App">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((user, id) => (
          <>
            <h2 key={id}>
              {user.fullName} - {user.email}
            </h2>
            <div className="d-flex justify-content-center">

            <button
              type="submit"
              className="btn btn-success"
              onClick={() => handleDelete(user._id)}
            >
              delete
            </button>

            <Edit userId={user._id} userData={user} />

            </div>
          </>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default UserShow;
