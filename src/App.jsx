import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    console.log("Submitting:", { name, email });

    if (!name || !email) {
      console.error("Error: Name and email are required");
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
      } else {
        alert("Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to submit form: " + error.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Test Form</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

