---
CreatedAt: 2025-11-18
class: CS 1JC3
tags:
  - "#classnote"
---
# What Do Computers do?
1. Computers store and manipulate information.  
2. The information is represented by various kinds of data.  
3. The behavior of a computer is controlled by algorithms  
4. implemented as programs


# Data
Different kind such as
- Numeric data
- Documents
- Digital images
- Digital audio
- Digital audio
- Data organized for queries

## Digital Images
- A digital display consists of a rectangular grid of pixels.
	- The resolution of the display is the grid dimensions.
	- The higher the resolution, the more detailed the image.
	- Each pixel is assigned a color.
- Raster graphics represents an image as a grid of pixels.
	- The finer the grid, the greater the resolution.
	- The more bits per color, the truer the color.
	- Raster images are usually compressed to save space using one of several formats.
- Vector graphics represent an image as geometric object in a coordinate system.
	- Vector images are usually smaller than raster images.
	- Vector graphics is used for representing scalable images.

![[Data 2025-11-18 08.59.26.excalidraw]]

## How do we represent Colour
### RGB
The RGB model is an **additive model** for representing colour on a monitor screen.
- A colour is a **sum of three colours** (red, green, and blue).
- A colour is often represented as **three 8-bit bytes** 01010101.
- No colour is black (0 + 0 + 0) and full colour is white (255 + 255  +255)
- Represented in **Base-16** `#FFFFFF` -> `#FF FF FF`. $FF_{16}$ is $255_{10}$
### CMYK
The CMYK model is a **subtractive model** for printing colour using ink.  
- A colour is produced by absorbing colour with four inks:  
	1. Cyan ink absorbs red. (cyan = green + blue.)  
	2. Magenta ink absorbs green. (magenta = red + blue.)  
	3. Yellow ink absorbs blue. (yellow = red + green.)  
	4. Black ink absorbs all colours.  
- Complete absorption is black and no absorption is white.
- **think of white as the default colour** - from printing paper

![[Pasted image 20251118093143.png]]

## Digital Audio
- Digital audio is produced from a continuous sound wave by periodic sampling and discrete quantization.  
- Sounds outside human perception are eliminated.  
- Audio files are compressed to reduce size without significantly reducing sound quality.  
- There are a number of audio formats

## Digital Video
- A **digital video** is a sequence of digital images.  
- A **frame rate** of about 30 frames per second is needed to achieve smooth motion.  *obviously*
- A **video file** consists of a video track, audio track, and metadata.  
- The video and audio tracks are compressed for storage and transmission, and decompressed before playing.  
- There are a number of video formats *obviously*

## File Formats
1. **Text Files** - ASCII or unicode characters
	- can be read by humans
	- Ex. XML
	```xml
	  <address></address>
	  ```
2. **Binary Files** - bits
File extensions (suffixes) like .pdf, .txt


# Data Compression
**Compression** is used to reduce data size
**Decompression** recovers the original data.  
**lossless** (reversible) or  **lossy** (irreversible).  
 
Huffman Coding (David Huffman, 1952) **in which the higher the frequency of a symbol, the fewer bits are used to encode it.** 
- The codes are given by a Huffman tree that can be automatically generated from a *set of character-frequency pairs*.  
- Provides **lossless** compression.

LZ77 algorithm (Abraham Lempel and Jacob Ziv, 1977) **replaces repeated strings by references to earlier occurrences.**  
- A reference of the form (n, d) means the string is replaced by n bytes that occurred bytes back.  
- Example. The message  
		bgfgfgfgbggb  
	is encoded as  
		bgf(5,2)(2,8)gb.  
- Provides lossless compression that is the **basis for many common compression algorithms such as zip**

