import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = function (setIsAuthenticated) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate();

  const handleSignup = async () => {

    try {
        if (password !== password2){
            throw new Error("Passwords dont match")
        }
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    password2,
    setPassword,
    setPassword2,
    handleSignup,
  };
};

export default useSignup;