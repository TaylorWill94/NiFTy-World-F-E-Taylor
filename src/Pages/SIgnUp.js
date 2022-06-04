function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="logInForm">
        <form>
          <label htmlFor="username">username</label>
          <input id="username" type="text" />
          <label htmlFor="last-name">last name</label>
          <input id="last-name" type="text" />
          <label htmlFor="date">email</label>
          <input id="email" type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
