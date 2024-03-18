const express = require('express');
const app = express()

app.get('/api/users', (req, res) => {
    // Logic to fetch users from your database or any other source
    res.send("Hello")
});


const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
