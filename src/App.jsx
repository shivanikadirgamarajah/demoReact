import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Test Form</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

