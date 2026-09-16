---
CreatedAt: 2025-10-30
tags:
  - lecture
class: CS 1JC3
---
every computer has its own network (virtual network) using TCP//IP called the loopback netwrok that allows it to communicate with itself (allows a computer to run TCP/IP on its own)

ip addresses
source ip addresses
target ip addresses

![[Pasted image 20251027194754.png]]

how does A go to B?of.
it has a routing table and looks for the addresses of B, finds a line that the data could go out until it reaches *B**

the internet was not desgined to be secured becaue of the military and because scienttists trusted each other

connectionless vs connection-oriented

IP is not enough for reliability - when you send something, you are hoping that i will go to who it needs to go to
- sending a message in a bottle

TCP segment goes into ip datagram goes into frame\
everytime i send one i start a timer, hopefully i get a reply saying 'i got it'. if that timer goes off then i send it again. they are eached assigned a number in order to prevent duplication. 
- if y is down, then the protocol backs off and sends in long intervals 