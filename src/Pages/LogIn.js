function LogIn() {
  return (
    <div>
      <h1>Log In</h1>
      <div className="logInForm">
        <form>
          <label htmlFor="username">username</label>
          <input id="username" type="text" />
          <label htmlFor="date">email</label>
          <input id="email" type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
