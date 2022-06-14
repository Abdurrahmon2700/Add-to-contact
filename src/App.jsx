import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");

  const addItem = (e) => {
    if (
      e.key === "Enter" &&
      surname !== "" &&
      username !== "" &&
      number !== ""
    ) {
      const item = {
        id: new Date().getTime(),
        name: surname,
        username: username,
        tel: number,
      };
      console.log(item);
      setTodos([item, ...todos]);
      setSurname("");
      setUsername("");
      setNumber("");
      console.log(Object.keys(item).length);
    }
  };
  console.log(todos);

  return (
    <>
      <div className="container">
        <div className="contact m-0 m-auto">
          <div className="mt-5">
            <h1 className="text-center">Contact</h1>
            <form onKeyPress={addItem}>
              <input
                placeholder="Surname"
                className="form-control mt-2 mb-2"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                placeholder="Name"
                className="form-control mt-2 mb-2"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="Number"
                className="form-control mt-2 mb-2"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </form>
            <ul className="m-0 p-0 border card p-3 h-50vh">
              {todos.map((item) => {
                return (
                  <li className="d-flex justify-content-between border w-100 p-1 mb-2">
                    <p className="text-primary">
                      User name:{" "}
                      <span className="text-danger">{item.name}</span>
                    </p>
                    <p className="text-primary">
                      Name: <span className="text-danger">{item.username}</span>
                    </p>
                    <p className="text-primary">
                      User number:{" "}
                      <a href="tel: 123456789" className="text-danger">
                        {item.tel}
                      </a>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setTodos(todos.filter((data) => data.id !== item.id))
                      }
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
