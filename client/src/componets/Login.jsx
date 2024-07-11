import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="loginContainer bg-zinc-50 w-[50vh] h-[90vh] m-auto rounded-3xl overflow-hidden">
        <div className="loginPage">
          <form action="" method="post">
            <input
              type="text"
              name="UserName"
              id="userName"
              placeholder="User Name"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
