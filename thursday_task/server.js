const http = require('http');
const fs = require('fs');

//Get the content of the html, css, js and logo fil
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();   
    }else if(url === '/styles.css'){
    	res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end();
    } else if(url === '/browser-app.js'){
    	res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    } else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About page</h1>');
        res.end('This is my About Page');
    } else if(url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end('This is my Contact Page');
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found </h1>');
        res.end('<a href="/">Go Back Home</a>');
    }
});
server.listen(5000, () =>{
    console.log("Server listening at port 5000");
});

//to reference the pages we created we need to create another html file 
//corresponding to the pages/routes
