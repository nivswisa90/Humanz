import React from "react";
import axios from "axios";
import UserNotFound from "../FeedbackUser/userNotFound";

const ShowSearch = (userByName) => {
  const userByNameList = Object.entries(userByName);
  // ToDo - get geolocation by ip
  // const getGeolocation = () => {
  //   axios
  //     .get(`http://ip-api.com/json/${userByNameList[0].ip}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const renderTableData = () => {
    if (userByNameList[0][1] === null) return <UserNotFound />;
    else {
      console.log(userByNameList[0].ip);
      return userByNameList[0][1].map((user, index) => {
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
    }
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
export default ShowSearch;
