import os
from pathlib import Path

def main():
  os.chdir("./content")
  files = os.listdir()

  for file in files:
    parentPath = os.getcwd() + "/- Notes"

    if (file[0] == "." or file[0] == "-"):
      continue
    
    with open(file, 'r', encoding="utf8") as f:
        lines = f.readlines()
    
    def moveAndDelete(folder):
      Path(os.getcwd() + "/" + file).rename(parentPath + "/" + folder + "/" + file)

      # if os.path.isfile(os.getcwd() + "/" + file):
      #   os.remove(os.getcwd() + "/" + file)

    for i in range(len(lines)):
      line = lines[i]

      if line.__contains__("Business MOC"):
          moveAndDelete("Business")
          break
      elif line.__contains__("Physics MOC"):
          moveAndDelete("Physics")
          break
      elif line.__contains__("Religion MOC"):
          moveAndDelete("Religion")
          break
      if i == 10:
        break

if __name__ == "__main__":
  main()