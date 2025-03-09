
module.exports=(io)=>{
    

    io.on("connection",(socket)=>{
        console.log("a user connected",socket.id);
        socket.on("report_issue",(data)=>{
            console.log("issue reported",data);
            io.emit("report_issue",data);

        })
    })
}
