import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>Welcome user</h1>
    </div>
  );
};

export default Home;
