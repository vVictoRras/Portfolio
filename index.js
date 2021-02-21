let express = require('express');
let app = express();
let path = require('path');

// Set staic folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));



app.get('/files',function(req,res){
	res.download("files/resume.docx");
});

app.get("*", function(req,res){
    res.sendFile(__dirname + "/public/404.html");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));