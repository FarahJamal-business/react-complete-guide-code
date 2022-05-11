import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

function AddUsers(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.length === 0 || age.length === 0) {
      setError("Please enter a valid name and age (non-empty values).");
      setShowModal(true);

      console.log(error);
      return;
    }
    if (age <= 0) {
      setError("Please enter a valid age greater than 0");
      setShowModal(true);
      console.log(error);
      return;
    }
    if (username !== "" && age !== null) {
      props.onAddUser(username, age);
      setShowModal(false);
    }
    setUsername("");
    setAge("");
  };
  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setShowModal(false);
    setError(null);
  };
  return (
    <div>
      {showModal && (
        <Modal
          title="an error occurred"
          message={error}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            name="username"
            onChange={changeUsername}
            value={username}
          />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" onChange={changeAge} value={age} />
          <Button type="submit" name="btn">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUsers;
