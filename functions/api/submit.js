export async function onRequestPost(context) {
  try {
    const { email, name } = await context.request.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
      });
    }

    // Example API call (replace later)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ email, name }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}