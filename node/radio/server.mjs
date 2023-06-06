import app from './index.mjs'
app.then((app)=>{
    let port = process.env.PORT || 4444;
    app.listen(port, function () { console.log('listening on http://localhost:'+ port); });
})
