import React from "react";
import Card from "../UI/Card";

function UsersList(props) {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li>
            <div style={{ border: "1px solid black" }}>
              {user.name} ({user.age} years old)
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
