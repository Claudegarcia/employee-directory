import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      let res = await axios.get("https://randomuser.me/api/?results=15");
      let data = res.data;
      setUsers(data.results);
    };
    getUserData();
  }, []);

  return (
    <div>
      {users.map(u => (
        <Card
          title={u.name.title}
          name={u.name.first}
          gender={u.gender}
          country={u.location.country}
          email={u.email}
        />
      ))}
    </div>
  );
}
