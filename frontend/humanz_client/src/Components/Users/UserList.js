import React from "react";
import "./users.css";

const userList = (allUsers) => {
  const userlist = Object.entries(allUsers);
  console.log(userlist);
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
      <table >
        <tbody>{renderTableData()}</tbody>
      </table>
      <button>Close table</button>
    </div>
  );
};
export default userList;
