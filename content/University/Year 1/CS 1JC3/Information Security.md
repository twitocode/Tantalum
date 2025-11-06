---
CreatedAt: 2025-11-04
class: CS 1JC3
tags:
  - "#classnote"
---
# Information Security
Concerned with the protection of:  
- **Electronically stored** and manipulated information.  
- The **systems used to store** and manipulate information.  
Network security is an important subfield.  
Closely related to the problem of **software reliability.**  
- Information systems and security mechanisms are heavily based on software.  
- **Software is difficult to develop and maintain and very often unreliable.**

Concerned with misuse instead of proper use.
Hard to engineer.
- Involves most components of an information system.
- **Information security requirements clash with many other system requirements.**
- Cuts across component boundaries and levels of abstraction.
- Hard to separate from other concerns.
**A system is only as secure as its weakest component!**

## What needs to be Protected
1. Data
	1. Confidentiality
	2. Integrity
	3. Availability
2. Information Systems
	3. System confidentiality
	4. System integrity
	5. availiability of services
	6. system resources
	7. monitoring mechanisms
	8. security mechanisms
3. Your personal and organization's reputation

## Confidentiality
Also called privacy.
Its a state in which information or resources **are concealed**
- also applies to metadata about said info and resources
Achieved by following the **need to know principle** -- part of the **principle of least privilege**
Military interest, yada yada
## Integrity
The state in which data or resources **have not been accidently or maliciously modified or destroyed.** 
- also applies to metadata
An **integrity violation** reduces the **trustworthiness** of the  data or resources
### Two ways to maintain integrity
1. **Prevention** of unautorized attemps to modify data
2. **Detection** of integrity violations or unauthorized modifications. 

> [!NOTE] Title
> Banks care way more about this than confidentiality
> 

## Availability
The state in which information or resources **can be used as needed**
- an important aspect of **reliability**
**Denial of service attacks are attempts to block availability**

## Permissions on Unix
1. read (confidentiality) 
2. write (integrity) 
3. execute (sorta availability)

The root account has access to every permission (100% privleges), it can delete any file, directory, or user account

# Threats and Attacks
A **threat** is a *potential violation* of confidentiality, integrity, or availability.  
An **attack** is *an attempt to violate* confidentiality, integrity, or availability.

there are different kinds of threats
- System failure.  
- System modification.  
- Resource theft.  
- Vandalism.  
- System probing.  
- Unauthorized access.  
- Repudiation of origin.  
- Denial of receipt.  
- Delay.  
- Denial of service.

where do these threats come from?
- Faulty hardware.  
- Faulty software.  
- Configuration mistakes.  
- Operational mistakes.  
- Insiders.  
- Hackers.  
- Criminals, vandals, and terrorists.  
- Malicious code (such as viruses).  
- Natural disasters

there are also different kinds of attack
- Unauthorized system access.  
	- To steal information.  
	- To modify information.  
- Denial of service attacks.  
- Network probing.  
- Network manipulation.  
- Resource theft.

# Cryptography
It is the art and science of concealing meaning
It is also the collection of mathematical techniques for:
- Protecting data confidentiality.  
- Protecting data integrity.  
- Verifying the identity of objects.  
- Verifying the identity of subjects.  
- Producing random objects

There are many different cryptographic techniques
- Conventional encryption.  
- Cryptographic hashing.  
- One-way encryption.  
- Public key encryption.  
- Random number generation

## Conventional Encryption
**Encryption**: plaintext, key $\xrightarrow{f}$ *cipher-text*
**Decryption**: *cipher-text*, key $\xrightarrow{f^{-1}}$ plaintext

$f$ and $f^{-1}$ are encryption and decryption algorithms

> [!NOTE]
> ***Main assumption:*** Computation of the plaintext from the ciphertext is mathematically infeasible without the key.
> - **In practice, the security of the process depends primarily on maintaining the secrecy of the key** 


## Public Key Encryption
TLDR
![[Drawing 2025-11-06 08.39.59.excalidraw]]
Discovery:  
- Discovered but held secret by USA NSA and UK Communications-Electronic Security Group in 1960s.  
- Discovered and publicized by Whitfield Diffie and Martin Hellman at Stanford University in 1976 
Motivation:  
1. Difficulty of secret key distribution: secrecy must be shared.  
2. Need for digital signatures that can be verified by arbitrary parties

### Well how does it work?
It is much less efficient compared to conventional encryption. it is not good for general encryption but it is good for sending encrypted keys

Each end system has a public key and a private key which is kept secret
**Encryption**: plaintext, public key $\xrightarrow{f}$ ciphertext
**Decryption**: ciphertext, *private* key $\xrightarrow{f}$ plaintext
**Signature writing**: plaintext, private key $\xrightarrow{f}$ ciphertext
**Signature reading**: ciphertext, *public* key $\xrightarrow{f}$ plaintext

as you can see, the same algorithm is used for both encryption and decryption
![[Pasted image 20251104112133.png]]

> [!important] Title
> It is mathematically infeasible to derive the private key from the public key

### Applications of Public Key Encryption
1. Confidentiality
	1. The sender encrypts the plaintext message with the receiver’s public key.  
	2. The receiver decrypts the ciphertext message with its private key
2. Integrity, digital signature, nonrepudiation
	1. The sender encrypts the message digest of the sent text with its private key.  
	2. The receiver decrypts the encrypted message digest with the sender’s public key and compares it with the message digest of the received text
3. Confidentiality and integrity
	1. The sender encrypts the plaintext message with its private key.  
	2. The sender encrypts the ciphertext message with the receiver’s public key.  
	3. The receiver decrypts the ciphertext message with its private key.  
	4. The receiver decrypts the ciphertext message with the sender’s public key
5. Secret key exchange

### Conventional vs. Public Key Encryption  
**Conventional encryption is much more efficient than  public key encryption.**  
- Public key encryption is only practical on small pieces of text.  
- **Public key encryption is much more versatile than conventional encryption.**  
	- Public key encryption can be used for digital signature and secret key exchange. 
	- Public/private key pairs are easily changed or revoked


## RSA Algorithm
Invented by Ron Rivest, Adi Shamir, and Leonard Adleman in 1977
Its security is based on the fact that **factoring the product of two large prime numbers is mathematically infeasible.**

# SSH
SSH stands for **S**ecure **Sh**ell. It’s a cryptographic network protocol used for operating network services securely over an unsecured network.

It consists of 3 layers
1. Transport Layer
	- Initial session key exchange (using Diffie-Hellman).  
	- Server authentication.  
	- Encryption, compression, integrity verification.  
	- Session key re-exchange.
2. User authenticated layer
	- Several available user authentication methods including password and public key
3. Connection
	- Management of ssh communication channels (which may not be encrypted)

Here's the provided text converted into Markdown format:

## Establishing an SSH Connection

1.  Client and server establish a TCP connection.
2.  Client and server exchange protocol identification.
3.  Server sends its (RSA or DSA) **public host key** to client.
4.  Client generates a **session key**, encrypts it with the **public host key**, and sends it back to the server with the selected cipher type (such as DES or Blowfish).
5.  Server decrypts the **session key** with its **private host key** and then sends an encrypted confirmation to the client.
6.  Client authenticates the server.
    a.  Client checks to see if the server's **public host key** is in the user's `known_hosts` file.
    b.  If no **public host key** for the server is present, the user is given the opportunity to add it to the `known_hosts` file.
    c.  If the server's **public host key** has been changed, the user is warned that the server may have been compromised.
7.  Client authenticates the user to the server using (RSA or DSA) public key authentication.
    a.  Server sends a challenge to the client encrypted with the user's public key stored on the server.
    b.  Client decrypts the challenge with the **user's private key,** which is decrypted using the **passphrase** supplied by the user when the private/public key pair was generated.
    c.  Client sends the required response signed using the **user's private key** to the server.
    d.  Server verifies the response using the **user's public key.**
8.  Client makes several requests to finish setting up the secure channel.

**Note:** Depending on the version of SSH, other user authentication methods can be supported, such as standard password authentication.