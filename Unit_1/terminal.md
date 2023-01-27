# The Terminal 

The terminal is how we interact with our computer and it's directories(folders) and files.

It is a CLI: Command Line Interface, a text based interface to the computer.

We can type commands, manipulate files, execute programs, or open documents. More powerful and fast than a GUI

(GUI is a Graphical User Interface using icons, menus, and windows for us to interact with in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory
    - `pwd`
    - Shows the name of the current directory, prints the full directory file path
-List Directory
    - `ls`
    - show the content of the current directory, shows all the folders and/or files at the current directory path
- Make Directory 
    - `mkdir` 
    - creates a new directory inside the current one, aka makes a new folder. 
- Touch or New Item 
    - `touch Filename.Filetype` 
    - `ni filename.filetype`
    - creates a new file at the current directory path.
- Change Directory
    - `cd` 
    - moves into a different directory (folder).
    - To move forward: `cd FileOrFolderName`
    - To move backwards: `cd ..`
- Clear
    - `clear` 
    - `cls` 
    - Clears the terminal. 
<hr>

## Other Terminal Commands: 

- Copy File 
    - `cp` 
    - Copies a file, ex: `cp index.html copyIndex.html` 
- Move File
    - `mv` 
    - moves a files, ex: `mv index.html ./newfolderpath`
- Help
    - `help`
    - provides a list of commands and/or opens a help menu.
- Remove Here
    - `rm -r` or `rmdir` 
    - Removes files/folders, warning: These CANNOT be recovered. PERMANENTLY DELETED!
    - `rm -r` removes a directory's contents (ALL/ANY folders and files it contains), `rmdir` removes an empty directory/folder.

<hr>

### Other Things to Note:

- In the terminal a file path divides parent and child folders and files with a forward slash: /

- Ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/terminal.md
    - desktop
        - PTSB_Jan_2023
            - Lectures
                - Unit_1
                    - Terminal.md

- Using the tab kep can help us finish a folder or file name we are typing out. 

- We do need to type file/folder names exactly.

- How to stop the terminal from running: 
    - Use `Ctrl+C` or `cmd+c` and enter/return 
    - Killswitch for the terminal from running something and/or exits whats running/a menu. Appears in terminal as `^C`

- On mac `sudo` may need to be used before commands where we need to elevate from user to admin privileges.
    - a password field will appear and your user computer password needs to be entered 
    