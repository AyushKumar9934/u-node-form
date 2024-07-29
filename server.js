const http=require("http");
const { buffer } = require("stream/consumers");
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>')
        res.write('<body>Hare Krishna</body>')
        res.write('</html>')
        res.write('<label>username</label>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"> <button type="submit">send</button></input></form>' )
        res.end();
    }
    if(url==='/users'){
        res.write('<html>')
        res.write('<body><ul><li>Hare Krishna</li><li>Hare Krishna</li><li>Krishna Krishna</li><li>Hare Hare </li><li>Hare Rama </li><li>Hare Rama</li><li>Rama Rama</li><li>Hare Hare </li></ul></body>')
        res.write('</html>')
        res.end();

    }
    if(method=="POST" && url=='/create-user'){
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            console.log('message is ',message);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })
    }
    

})
server.listen(3000,()=>{
    console.log("we are listening to 3000.")
})