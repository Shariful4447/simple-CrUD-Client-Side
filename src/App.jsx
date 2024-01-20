


function App() {
  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  

  return (
    <>

      <h1>Vite + React</h1>
      <form onSubmit={handleAddUser}>
        <input className="border" type="text" name="name" id="" /> <br />
        <input className="border" type="email" name="email" id="" /> <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
