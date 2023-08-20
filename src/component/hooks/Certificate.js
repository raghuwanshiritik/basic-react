import React, { useEffect, useState } from 'react'

function Certificate() {
    const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://eccomersapi.onrender.com/getalluser")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        //console.log(users);
        let data1 = users.data;
        console.log(data1);
        setUser(data1);
      });
  };
  useEffect((getallUser) => {
    fetchData(getallUser);
  }, []);

  return (
    <>
    <div className="container mt-5">
      <table className="table  table-success table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {user.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Certificate