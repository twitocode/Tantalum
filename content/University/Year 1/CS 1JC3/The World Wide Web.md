---
CreatedAt: 2025-10-28
class: CS 1JC3
tags:
  - "#classnote"
---
# Client-Server Model
**Servers** are processes that provide services over a network.
1. Usually listen at a particular **reserved** TCP or UDP port.  
2. May participate in more than one TCP connection at the same time.  
3. Often called **daemons** and are then given a name that ends with d (e.g., httpd).  
4.  May be organized as a group of processes or threads
5. **Servers are usually more complex than clients.**  
	- The burden of security falls mostly on the server.

**Clients** are processes that utilize services provided by servers
1. Initiates connections to servers.  
2. Usually are assigned **an ephemeral port** by the OS.

## Components of an Application
1. **Communication protocol** (e.g., http).  
2. Server running a **server program** (e.g., web server).  
3. One or more clients running **client programs** (e.g., web  
browser).  
4. Communication channels via **TCP or UDP** (email vs gaming)
# Cloud Computing
It is the use of data storage and computation resources provided by servers on the internet
Ex. AWS, GCP, Azure
- fee-based subscription
- infrastructure shared among many clients

There are different kinds
- data storage
- SaaS
- PaaS - Platform
- IaaS  - Infra

Advantages
1. Reduced personnel and capital investment.  
2. Reduced management costs.  
3. Better range and quality of services

Disadvantages
1. **Possible loss of privacy and security.**  
2. **Loss of management control.**  
3. Reduced computational speed.

# DNS
![[Pasted image 20251028085327.png]]
Purposes:  
- Provides a hierarchical scheme for naming hosts and collections of hosts.  
- **Maps host names to IP addresses.**  
- **Maps IP addresses to host names.**  
- Host names may be assigned aliases.  
- Stores information about hosts and collections of hosts such as the mail exchange servers used by the hosts.  
DNS is **managed by a set of cooperating name servers**.  
- Each server is responsible for part of the name space.  
- Name servers communicate with each other using both TCP and UDP.  
- **Name lookups are done by recursive search, sometimes** starting at a root server.  
- Answers to name lookups are cached by name servers to optimize lookup costs.

## Domain Names
Consists of a sequence of **labels** separated by dots
- Each suffix of a domain name is also a domain name.  
- Denotes a set of one or more hosts.  
- A domain name denoting an individual host (called a host name) looks no different than a domain name denoting a collection of hosts.
- The domain is denoted by $d_{1}.d_{2}\dots d_{n}$ is a subdomain of $d_{m}\dots d_{n}$ where $1 \leq m$
- **The syntax of domain name has nothing to do with the IP addresses or network structure of the hosts in its denotation**
A host only has a subdomain name if it is registered with some domain in the DNS system.

May be used with any set of domain names but...
the Internet's DNS currently uses a set of official top-level domain names of 3 kinds:
1. Generic top-level domains (**gTLDs**).  
	1. The original six were: `com, net, org, edu, gov, mil`
	2. there are now over 1500 gTLDs
2. Country code top-level domains (**ccTLDs**).  
	1. over 312 ccTLDs
	2. Ex. `ca (Canada), de (germany), eu (european union), uk (united kingdom), us (United states`
3. Infrastructure top-level domain (only arpa).

# Time Berners-lee
Inventory of the World Wide Web
- Created the first web client and server at CERN
- Created HTTP
- Created HTML
- Created the first browser, Nexus
- Won the British knighthood and Turing Award

# World Wide Web
A vast collection of interlinked documents and related services that is accessible via the Internet
Web resources are 
- identified using **URLs (Uniform Resource Locators)**
- obtained using requesting web pages using **HTTP (Hypertext Transfer Protocol)**

Web pages are written using **HTML (Hypertext Markup Language)**

## HTML
Documents called **web pages** contain links to other units of information, inside and outside the document
Information is represented as
1. statically in files
2. dynamically via scripts or programs that assemble information on the fly (SPA, SSR, etc)

## HTTP
Enables web browser (web client) to request documents from a web server
**Uses TCP for transport**
- servers usually listen at TCP port 80, but can do others (i personally use 3000, 5000 or 8000)
- An HTTP transaction consists of a **client request** followed by a **server response**
	- HTTP is stateless  (REST apis, etc)
	- state is tracked using **cookies**
- A requested document can be processed both **server side**  (e.g., using PHP) and **client side** (e.g., using JavaScript)


## URLs
consists of 6 items:
1. Protocol - TCP protocol needed for transferring info (http, https, ftp, file)
2. Host - the actual server name
3. Port - optional port, default 80
4. Path - path to the file you want
5. Query strings - optional info
6. Fragments - used for things like h1 tags to find them easily
`<protocol>://<host>[:<port>]/<path>[?<query>][#<fragment>]`
`http://hygelac.cas.mcmaster.ca:80/wmfarmer/`


##  Web Services
- web search
- web user interfaces for programs and databases
- shopping
- banking
- maps and directions
- weather info
- social media