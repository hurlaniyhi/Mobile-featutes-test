const express = require('express')
const app = express()
const server = require("http").createServer(app)
const io = require('socket.io').listen(server)
const port = process.env.PORT || 3000
const {user, password} = require("./config")

const messages = []

io.on("connection", socket => {
    console.log("A user is connected")
    
    socket.on("chat message", msg => {   
    // listens and receive message from the front-end
        
    console.log(msg)
        
    messages.push(msg.chat)

    socket.join(msg.user)  
    // to register a particular user to socket.io room so that we could send message to the user alone later
    
    //io.emit("chat message", messages)  // for sending message to all users at the client side
    
    io.in(msg.user).emit("chat message", messages)  
    // send message to a particular user at the client-side that was registered in the socket.io room 
                                                        
    })
})

server.listen(port, ()=> {
    console.log(`Server is running on port ${password}`)
})  