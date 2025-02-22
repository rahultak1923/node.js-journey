

export const SignupUser = (formData) => {
    console.log(formData);
//   const url = "https://jsonplaceholder.typicode.com/posts";
  const url = "http://localhost:8000/user/signin";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
        "Content-Type": "application/json",
      }
  }).then((data) => {
    console.log(data)
  })
}



export const UserData = () => {
  const url = "http://localhost:8000/user";
  fetch(url).then((data) => {
    console.log(data)
  })
}