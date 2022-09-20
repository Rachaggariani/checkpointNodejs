//create server
const http= require('http');
const port=3000;
const host='localhost';
const requestListener=(req,res)=>{
    res.writeHead(200);
    res.end(`<h1>Hello Node!!!!</h1>`)
}
const server=http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
})