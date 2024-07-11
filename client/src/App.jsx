import { useState } from "react";
import { Login, Register } from "./componets/index.js";
function App() {
  const [count, setCount] = useState(0);
  const [formToggel, setFormToggel] = useState(true);
  return (
    <>
      <div className="bg-zinc-900 flex justify-center py-5">
        <button
          className={`${
            formToggel ? "bg-green-400" : "bg-sky-500"
          } text-white px-12 py-2 rounded-2xl font-bold uppercase`}
          onClick={() => setFormToggel(!formToggel)}
        >
          {formToggel ? "Login" : "Register"}
        </button>
      </div>
      <div className="w-full h-[90vh] bg-zinc-900 flex justify-center align-middle my-auto">
        {formToggel ? <Login /> : <Register />}
      </div>
    </>
  );
}
export default App;
