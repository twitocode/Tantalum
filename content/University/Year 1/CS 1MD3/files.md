---
CreatedAt: 2025-11-04
tags:
  - lecture
class: CS 1MD3
---
```python
with open("bands.txt", "r") as file:

    for line in file:
        print(line[:-1].split(",")[0])

def get_band_names(file_name):
    band_names = []
    with open("bands.txt", "r") as file:
        for line in file:
            band_names.append(line[:-1].split(",")[0])
    return band_names

"""
DO NOT DO THIS
file = open(file_name, "w")
file.close() 
WILL OVERRIDE AND DESTROY YOUR COMPUTER
"""

# file = open(file_name, "w")
# file.write("hey")
# file.write("heythere")
# file.close()


def average_rating(file_name):
    pass

def create_playlist(file_name, playlist_name, threshold):
    """
    Writes a file named playlist_name with bands having a rating greater than or equal to threshold
    """
    playlist_bands = []
    with open(file_name, "r") as file:
        header = file.readline()
        
        for line in file:
            band_info = line.split(",")
            if int(band_info[1]) >= threshold:
                playlist_bands.append(line)
                
    with open(playlist_name, "w") as file:
        file.write(header)
        for band_info in playlist_bands:
            file.write(band_info)     
        
create_playlist("bands.txt", "my_playlist.txt", 8)
int("55\n")      == 55
int("55     \n") == 55
```