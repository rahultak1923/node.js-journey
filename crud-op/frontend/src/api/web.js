

export const UserData = async()=>{
    const url = await fetch("http://localhost:8000/user",{method:"GET",

    });
    return await url.json();
}

export const CreateUsers = async(formData)=>{
    console.log(formData)
    const response = await fetch("http://localhost:8000/user/signin",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    return await response.json()
}


export const DeleteUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/user/delete/${userId}`, {
        method: "DELETE",
    });

    return await response.json();
};
