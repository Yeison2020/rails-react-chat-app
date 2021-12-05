import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:3000");
  }, []);
  return (
    <div>
      <h1>Welcome To the root</h1>
    </div>
  );
};

export default Home;
