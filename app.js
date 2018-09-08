var express    = require('express');
var app        = express();
var path	   = require('path');
var nodemailer = require('nodemailer'); 

app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});
    

app.get('/sendEmail', function(req, res) {
    
    const request = req.query.JSONstring;
    const JSONstring = JSON.parse(request);

    const emailSubject = "Resume submission from website.";
    const emailBody = `${JSONstring.firstName} ${JSONstring.lastName} resume submission.
                        Phone Number: ${JSONstring.phoneNumber}
                        Email: ${JSONstring.email}`; 

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailerOptions = {
        from: `Daniel Mil <danielmil12345@gmail.com>`,
        to: 'ron@mrflatbeds.com',
        subject: `${emailSubject}`,
        text: `${emailBody}`
    };

    transporter.sendMail(mailerOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send("An error has occured."); 
        }
        console.log(info); 
        console.log("The message was sent.");   
    });

    res.send("Success sending email to client");
});

//running server on port#
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Running app at localhost: "+ port);
});