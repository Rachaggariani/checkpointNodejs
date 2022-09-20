var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rachaghariani@gmail.com',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'rachaghariani@gmail.com',
    to: 'rachaghariani@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });