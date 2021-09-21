const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/pet.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// use npm run start within client dir --- this is localhost 3000 &
//this is the front end


// use nodemon server.js within the overall project folder --- this is localhost 8000 &
//this is the backend
