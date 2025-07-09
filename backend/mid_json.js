import express from 'express';
const app = express();
import mock_data from './Data/mock_data.json' assert { type: "json" };


// Middleware to parse JSON
app.use(express.json());

// middleware-1
app.use(function(req, res, next) {
    console.log(`Request received at ${req.url}`);
    next();
});



// Basic route
app.get('/', (req, res) => {
    res.send('Welcome!'); 
});

// Route user
app.get('/user',(req, res)=> {
    res.json(mock_data);
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
