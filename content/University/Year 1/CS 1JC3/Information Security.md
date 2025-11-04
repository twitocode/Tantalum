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
	4. Systme integrity
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
**Encryption**: plaintext, key $\xrightarrow{f}$ *ciphertext*
**Decryption**: *ciphertext*, key $\xrightarrow{f^{-1}}$ plaintext

$f$ and $f^{-1}$ are encryption and decryption algorithms

> [!NOTE]
> ***Main assumption:*** Computation of the plaintext from the ciphertext is mathematically infeasible without the key.
> - **In practice, the security of the process depends primarily on maintaining the secrecy of the key** 

## Public Key Encryption
Discovery:  
- Discovered but held secret by USA NSA and UK Communications-Electronic Security Group in 1960s.  
- Discovered and publicized by Whitfield Diffie and Martin Hellman at Stanford University in 1976 
Motivation:  
1. Difficulty of secret key distribution: secrecy must be shared.  
2. Need for digital signatures that can be verified by arbitrary parties

### Well how does it work?
It is much less efficient compared to conventional encryption. it is not good for general encryption but it is good for sending encrypted keys