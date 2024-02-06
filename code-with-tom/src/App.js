import './App.css';
import Lobby from "./pages/Lobby";
import CodeBlock from "./pages/CodeBlock";
import {Route, Routes} from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
import {FallbackErrorPage} from "./errorHandling/FallbackErrorPage";
import {StoreStream} from "./data/StoreStream";

function App() {
    //call the StoreStream component to listen for socket events
    StoreStream();

  return (
      <div className="App">
      <ErrorBoundary FallbackComponent={FallbackErrorPage}>
      <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/codeblock/:title" element={<CodeBlock />} />
      </Routes>
      </ErrorBoundary>
      </div>
  );
}

export default App;
