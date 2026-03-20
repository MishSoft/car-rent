fetch("http://localhost:3000/api/auth/callback/credentials", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    email: "admin@morent.com",
    password: "morent2026",
    json: "true"
  }).toString()
}).then(res => res.json()).then(console.log).catch(console.error);
