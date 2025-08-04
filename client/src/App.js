import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">MERN Integration</h2>
      <div className="row">
        <div className="col-md-6">
          <Signup />
        </div>
        <div className="col-md-6">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default App;