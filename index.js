const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();
app.use(express.static('assets'));
const port = 3000;
const hostname = '127.0.0.1';

// const home = fs.readFileSync('./code/home.html')
// const about = fs.readFileSync('./code/about.html')
// const course1 = fs.readFileSync('./code/course-1.html')
// const course2 = fs.readFileSync('./code/course-2.html')
// const course3 = fs.readFileSync('./code/course-3.html')
// const contact = fs.readFileSync('./code/contact.html')

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     url = req.url;
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   if(url == '/'){
//     res.end(home);
// }
// else if(url == '/course-1'){
//     res.end(course1);
// }
// else if(url == '/course-2'){
//     res.end(course2);
// }
// else if(url == '/course-3'){
//     res.end(course3);
// }
// else if(url == '/about'){
//     res.end(about);
// }
// else if(url == '/contact'){
//     res.end(contact);
// }
// else{
//     res.statusCode = 404;
//     res.end("<h1>404 not found</h1>");
// }

// });
app.get('/',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/home.html'));
})
app.get('/about',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/about.html'));
})
app.get('/course-1',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/course-1.html'));
})
app.get('/course-2',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/course-2.html'));
})
app.get('/course-3',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/course-3.html'));
})
app.get('/contact',function(req,res){      
    return res.sendFile(path.join(__dirname,'/views/contact.html'));
})

app.listen(port,(err) => {
    if(err){
        console.log("Error in running the server: " ,err);
        return;
    }
  console.log(`Server running at http://${hostname}:${port}/`);
});