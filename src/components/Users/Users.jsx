import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handledelete = _id =>{
        console.log('delete', _id);
        fetch(`http://localhost:3000/users/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })

    }
    return (
        <div>
            <h2>Total Number of Available user :  {users.length}</h2>
            <div>
                {
                    users.map(user => <p
                     key={user._id}>
                        {user.name} : {user.email} : {user._id}
                        <Link to={`/update ${user._id}`}>
                            <button className="btn">Update</button>
                        </Link>
                        <button 
                        className="btn" onClick={() => handledelete(user._id)}
                        >x</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;