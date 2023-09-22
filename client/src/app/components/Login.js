import "../styles/main.css";

const Login = () => {
  return (
    <>
      <h2>ASSET REGISTER</h2>
      <div className="log_in">
        <h2>USER LOGIN</h2>
        <form method="post" autocomplete="off">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />

          <input type="submit" value="Log in" name="login" id="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
