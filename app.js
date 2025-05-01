import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import db from './database/db.js'
import userSchema from './model/model.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const PORT = 3000

const app = express();

app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }))



db();


const Users = mongoose.model("data", userSchema)



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;
    const user = new Users({
        name,
        email,
        phone,
        message
    })
    await user.save();
    // res.send("Enquiry submitted successfully! We will contact you soon. Thank you! Redirecting in 3 seconds")
    // setTimeout(() => {
    //     // globalThis.window = `http://localhost:${PORT}`;
    //     res.sendFile(path.join(__dirname, 'index.html'))
    // }, 3000);
    // // res.send(alert("Enquiry submitted successfully! We will contact you soon. Thank you! You can now reload the page"))
    // // res.sendFile(path.join(__dirname, 'index.html'))

    res.send(`
        <html>
          <head>
            <title>Enquiry Submitted</title>
            <script>
              let seconds = 5;
              function updateCountdown() {
                if (seconds > 0) {
                  document.getElementById('countdown').innerText = seconds;
                  seconds--;
                } else {
                  window.location.href = '/'; // redirect to homepage
                }
              }
              setInterval(updateCountdown, 1000);
            </script>
          </head>
          <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h2>Enquiry submitted successfully!</h2>
            <p>We will contact you soon. Thank you!</p>
            <p>Redirecting to homepage in <span id="countdown">5</span> seconds...</p>
          </body>
        </html>
      `);

})



app.listen(PORT, () => {
    console.log(`server has started on http://localhost:${PORT}`)
})