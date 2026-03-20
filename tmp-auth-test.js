const http = require("http");

async function testLogin() {
  const csrfRes = await fetch("http://localhost:3000/api/auth/csrf");
  const csrfData = await csrfRes.json();
  const csrfToken = csrfData.csrfToken;
  
  const cookies = csrfRes.headers.get("set-cookie");
  // usually next-auth.csrf-token=...
  let csrfCookie = cookies ? cookies.split(';')[0] : "";

  const payload = new URLSearchParams({
    csrfToken: csrfToken,
    email: "admin@morent.com",
    password: "morent2026",
    json: "true"
  });

  const res = await fetch("http://localhost:3000/api/auth/callback/credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookies, // Send the full cookies string retrieved from csrf endpoint
    },
    body: payload.toString()
  });

  const data = await res.json();
  console.log("Status:", res.status);
  console.log("Response:", data);
}

testLogin().catch(console.error);
