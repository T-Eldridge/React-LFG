import React from "react";
import { Button } from "@material-ui/core";

// const defaultUser = {
//   userName: false,
// };

// const HandleLogin = (props) => {
//   if (!props.userName) {
//     return (
//       <a href="/login">
//         <Button>Login</Button>
//       </a>
//     );
//   } else {
//     return (
//       <a href="/">
//         <Button onClick={() => props.logoutUser(defaultUser)}>Logout</Button>
//       </a>
//     );
//   }
// };

const HandleLogin = (props) => {
  console.log("handle login", props.userName);
  return props.userName ? (
    <a href="/">
      <Button onClick={() => props.setUser("")}>Logout</Button>
    </a>
  ) : (
    <a href="/login">
      <Button>Login</Button>
    </a>
  );
};

export default HandleLogin;
