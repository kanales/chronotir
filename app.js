let path = require('path')
let express = require('express')
let app = express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000")
})

