
const express = require('express');
const app = express();

let port = 3000

// configure public folder
app.use(express.static('public'))// static assests go


//install ejs templates
app.set('view engine', 'ejs')


//routes
app.use(require('./routes/index'))
app.use(require('./routes/album'))
app.use(require('./routes/feedback'))
app.use(require('./routes/chat'))




//server
app.listen(port, ()=>{
    console.log(`you are running on port: ${port}`);
})

