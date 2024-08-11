import os

def main():
  os.chdir("./content/- Notes/Physics")
  files = os.listdir()
  
  for file in files:
    if (file[0] == "." or file[0] == "-"):
      continue

    if (not os.path.isfile(file) and os.path.isdir(file)):
      continue
    
    with open(file, 'r', encoding="utf8") as f:
        lines = f.readlines()

    # Filter out lines that contain '#flashcard'
    filtered_lines = [line.replace('#flashcard', '').strip() + '\n' for line in lines]

    # Write the filtered lines to the output file
    with open(file, 'w', encoding="utf8")  as f:
        f.writelines(filtered_lines)

if __name__ == "__main__":
  main()