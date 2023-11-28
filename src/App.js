import './App.css';
import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [arrData, setArrData] = useState([]);

  const changeInput = (e) => {
    const {name, val} = e.target.name;
    console.log(name, val);
    setUserData({ ...userData, [name]: val });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/form',userData)
    .then((response)=>{
      console.log(response.data);
    })

    const data = { ...userData, id: new Date().getTime().toString() };
    console.log(data);
    setArrData([...arrData, data]);
    setUserData({  name: "", age: "", email: "",})
  };
  return (
    <>
      <form onSubmit={submitData} action='/data' method='post'>
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={changeInput}
          placehoder="Enter Name"
        />
        <br />
        <br />
        <input
          type="tel"
          name="age"
          value={userData.age}
          onChange={changeInput}
          placehoder="Enter Age"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={changeInput}
          placehoder="Enter email"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
    </>
  );
}

export default App;
