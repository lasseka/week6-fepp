import useSignup from "../components/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { email, setEmail, password, password2, setPassword, setPassword2, handleSignup } =
    useSignup(setIsAuthenticated);

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm password: 
        <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
      </label>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;