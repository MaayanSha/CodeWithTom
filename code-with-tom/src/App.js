import './App.css';
import {useState} from "react";
import {socket} from "./socket";
import Lobby from "./pages/Lobby";
import CodeBlock from "./pages/CodeBlock";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
  //const [isConnected, setIsConnected] = useState(socket.connected);
  const onlineUsers = useSelector(state => state.onlineUsers.users);
  return (
      <Routes>
          <Route path="/" element={<Lobby />} />
            <Route path="/codeblock/:id" element={<CodeBlock />} />
      </Routes>
  );
}

export default App;
