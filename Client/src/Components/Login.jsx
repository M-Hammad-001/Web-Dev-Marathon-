import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      // setUser(res.data);
      if (res.data.role === "tutor") navigate("/dashboard");
      console.log("hello");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-orange-200 font-display">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full mb-4 p-2 border rounded text-gray-400" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full mb-4 p-2 border rounded text-gray-400"/>
            <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 cursor-pointer">Login</button>
        </form>
    </div>
  
);
}

export default Login