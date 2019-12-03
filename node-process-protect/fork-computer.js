const  forkComputer = () =>{
    let sum = 0;
        for(let i = 0;i <1000000000;i++){
            sum += 1;
    }
    return sum;
}
process.on('message',msg => {
    const sum = forkComputer();
    process.send(sum)
})