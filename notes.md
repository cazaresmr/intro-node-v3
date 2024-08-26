# Notes on Node

```bash
cd ~/repos
mkdir projectName
cd projectName
touch index.js
git init
npm init --yes
# package.json
which node
npm link
which note
note
# #!/usr/bin/env node to index.js
note web 5001
```

The note command has several subcommands:
new <note>: Create a new note.
all: List all notes.
find <filter>: Find notes based on a filter.
remove <id>: Remove a note by ID.
web [port]: Launch a web server to view notes.
clean: Remove all notes.
Running Commands:

You can execute these commands by running note <command> in your terminal.
For example, note new "My first note" would create a new note.

<hr>

➜ 10-intro-node-v3 git:(main) ✗ note --help  
note <command>

Commands:
note new <note> create a new note
note all get all notes
note find <filter> get matching notes
note remove <id> remove a note by id
note web [port] launch website to see notes
note clean remove all notes

Options:
--help Show help [boolean]
--version Show version number [boolean]
-t, --tags tags to add to the note [string]
➜ 10-intro-node-v3 git:(main) ✗
