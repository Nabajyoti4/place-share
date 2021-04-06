import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import { useRouteMatch } from "react-router";

function UsersList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <div>
      <ul className="users-list">
        {props.items.map((item) => {
          return <UserItem user={item} key={item.id}></UserItem>;
        })}
      </ul>
    </div>
  );
}

export default UsersList;
