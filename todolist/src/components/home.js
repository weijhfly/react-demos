import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to todolist</h1>
      <Link to="/todolist">
        <Button type="default">Go to todolist</Button>
      </Link>
    </div>
  );
}

export default Home;
