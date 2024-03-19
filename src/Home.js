import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleRegis = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div class="container">
      <div class="d-flex  justify-content-around align-items-center  pt-5">
        <div class="">
          <h3 class="text-center">Registration </h3>
          <button onClick={handleRegis}>Click</button>
        </div>
        <div>
          <h3>Login </h3>
          <button onClick={handleLogin}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
