import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {socket} from "./socket";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  return (
      <div className="App">
        {isConnected ? (<div>Connected</div>) : (<div>Disconnected</div>)}
      </div>
  );
}

export default App;
