const http=require('http');
const port=8000;
const fs=require('fs');




let filePath; 

function requestHandler(req,res){

    res.writeHead(200,{'content-type':'text/html'});

    switch(req.url){
    case '/':
        filePath='./index.html';
        break;
    case '/playlistScreen':
        filePath='./playlistScreen.html';
        break;
    default:
        filePath='./pageNotFound.html';
        break;
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);

            return res.end('<h1>Error!</h1>');

        }
   
    return res.end(data);
});

}
const server=http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Started server in port",port);
});