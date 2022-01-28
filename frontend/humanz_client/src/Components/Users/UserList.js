import React from "react";
import "./users.css";



const UserList = (allUsers) => {
  // Creating list of the users
const userlist = Object.entries(allUsers);

  const renderTableData = () => {
    return userlist[0][1].map((user, index) => {
      const { name, id, ip, phone } = user; //destructuring
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{id}</td>
          <td>{ip}</td>
          <td>{phone}</td>
        </tr>
      );
    });
  };
  return (
    <div className="table">
      <h3 className="table_title">Humanz Clients</h3>
      <table>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};
export default UserList;
