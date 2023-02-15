const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.a2ckdqf.mongodb.net/?retryWrites=true&w=majority`,)
    .then(() => {
        app.listen(3000)
        console.log("Conectou ao banco!")
})
    .catch((err) => console.log(err))