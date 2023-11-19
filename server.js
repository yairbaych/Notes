const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.static('public'))

app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404Page Not Found' })
    } else {
        res.type('txt').send('404Page Not Found')
    }

})
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
});