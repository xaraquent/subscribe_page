const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT

app.use(cors({
    origin: "*"
}))

app.use(express.json())

const emails = [
    {
        email: "test1@gmail.com",
        id: 1,
    },
    {
        email: "test2@gmail.com",
        id: 2,
    },
]

app.get('/emails', (req, res) => {
    res.json(emails)
})

app.get('/emails/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const email = emails.find((email) => {
        return email.id === id
    })
    if (!email) {
        return res.status(404).send({ message: "Email id not found" });
    }
    res.json(email);
})

app.post("/subscribe", (req, res) => {
    const { email } = req.body

    const subscribe = {
        email: email,
        id: emails.length + 1
    }

    emails.push(subscribe)
    console.log(req.body)
    res.json(subscribe)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})