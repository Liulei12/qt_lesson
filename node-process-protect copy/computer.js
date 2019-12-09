const http = require('http');
const { fork } = require('child_process');

const httpServer = http.createServer((req, res) => {
    if(req.url === '/computer'){
        const childComputer = fork('./fork-computer.js');
        childComputer.send('open');
        // res.end(sum.toString());
        childComputer.on('message',sum => {
            res.end(sum.toString());
        })
        }else{
        res.end('ok');
    }
  
})
httpServer.listen(3333, () => {
  console.log('server is running 3333');
})
