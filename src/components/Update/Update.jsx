import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        fetch(`http://localhost:3000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then (res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedcount > 0) {
                alert('Updated user successfully');
            }
        })
    }

    return (
        <div>
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input className="border" type="text" name="name" id="" defaultValue={loadedUser?.name} /> <br />
                <input className="border" type="email" name="email" id="" defaultValue={loadedUser?.email} /> <br />
                <input className="border bg-blue-500" type="submit" value="Update" />

            </form>
        </div>

    );
};

export default Update;