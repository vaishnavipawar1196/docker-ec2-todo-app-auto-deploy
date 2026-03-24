const app = require('./app');

const PORT = 4000;

app.listen(PORT, () => {
    console.log("✅ Server started successfully");
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`👉 http://localhost:${PORT}/health`);
});