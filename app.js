const express = require('express')
const app = express()
var teamRouter = require('./routes/teams')

app.listen(8080)
app.use('/team',teamRouter)