import { useState } from "react";
import Login from "./componets/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex justify-center align-middle my-auto">
        <Login />
      </div>
    </>
  );
}

export default App;
