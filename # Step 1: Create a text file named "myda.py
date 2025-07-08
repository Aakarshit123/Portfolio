# Step 1: Create a text file named "mydata.txt" and write "Welcome to LW"
with open("mydata.txt", "w") as file:
    file.write("Welcome to LW")

# Step 2: Read and print the content of the file
with open("mydata.txt", "r") as file:
    content = file.read()
    print("After first write:\n", content)

# Step 3: Append "Vimal Sir" to the file
with open("mydata.txt", "a") as file:
    file.write("\nVimal Sir")

# Step 4: Read and print the updated content of the file
with open("mydata.txt", "r") as file:
    updated_content = file.read()
    print("\nAfter appending:\n", updated_content)