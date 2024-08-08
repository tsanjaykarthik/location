import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "sanjay karthik hello",
      image:
        "https://media.licdn.com/dms/image/C4D03AQHH-mpYIHZ-2Q/profile-displayphoto-shrink_800_800/0/1656848530756?e=2147483647&v=beta&t=xdZZM3YXRcCR0M5JqxwCebWSNlM2KZSQOkClp39Nd6Y",
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
