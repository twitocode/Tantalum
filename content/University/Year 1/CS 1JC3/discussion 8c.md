---
CreatedAt: 2025-10-31
tags:
  - lecture
class: CS 1JC3
---
`<protocol>://<host>[:<port>]/<path>[?<query>][#<fragment>]`  
https://humanities.mcmaster.ca/~beowulf/
you could do https://192.123.122.11/~beowulf



protocol - https
domain of the machine (DNS) = humanities.mcmaster.ca
- the machine name is humanities
- it is likeliky in mcaster and likely in canada
path - go to the directory that belongs to the username "beouwlf"
tcp - port 80
server process is running on the computer
- has to be able to find documnts
- generate documents
- people are attacking 24 hours
client process only really has to send a request

ephemeral port on the client is needed for a little while
- the operating system gives is a port number 2323049. no point in attacking the client because its 65536

3 way handshake
client says "hey lets starta connectinon" sends out a tcp segment -> ip datagram -> frames, then it will get to the server and that will get the ip datagram -> tcp segment. the server will send back a message that "ok then, lets stat a connection". client sends a "hey i got your acknowledgement"

there are dns systems in mcmaster that know how to make domain names to ip addresses
i want to speak to argentina, the dns server interact with each other to get the right ip addresses

when the computer does get the dns mapping, it does not need to ask the dns server again unless the it cannot access the server again

cookies are sent with your requests to provide state to the server
- **are not a part of the http protocol**