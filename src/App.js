import './App.css';
import React,{useState} from 'react'

function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [arrData, setArrData] = useState([]);

  const changeInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    setUserData({ ...userData, [name]: val });
  };

  const submitData = (e) => {
    e.preventDefault();

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
      {arrData.map((data) => {
        return (
          <>
            <table border = '1'>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
}

export default App;
