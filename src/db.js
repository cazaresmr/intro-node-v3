import fs from 'node:fs/promises'

const DB_PATH = new URL('../db.json', import.meta.url).pathname

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, 'utf-8')
  return JSON.parse(db)
}

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  return db
}

export const insert = async (data) => {
  const db = await getDB()
  db.notes.push(data)
  await saveDB(db)
  return data 
}

/*
```markdown
This JavaScript module handles basic database operations by using a JSON file for storage.

It leverages Node.js's `fs/promises` module to perform file operations asynchronously.

### Key Components

1. **File System Operations**:
   - The module imports the `fs/promises` module, which provides promise-based methods for working with the file system.
   
2. **Database Path Resolution**:
   - The `DB_PATH` constant is defined using the `URL` class to resolve the path to the `db.json` file relative to the current module's URL.

3. **Retrieving Database Content (`getDB` Function)**:
   - The `getDB` function is an asynchronous function that reads the contents of the `db.json` file.
   - It uses `fs.readFile` to read the file as a UTF-8 encoded string and then parses this string into a JavaScript object with `JSON.parse`.
   - The function returns the parsed object, which represents the current state of the database.

4. **Saving Database Content (`saveDB` Function)**:
   - The `saveDB` function is another asynchronous function that takes a JavaScript object (`db`) as its argument.
   - It converts this object into a JSON string using `JSON.stringify`, including formatting options for readability.
   - The JSON string is then written to the `db.json` file using `fs.writeFile`.
   - After saving, the function returns the `db` object.

5. **Inserting New Data (`insert` Function)**:
   - The `insert` function is used to add a new note to the database.
   - It first calls `getDB` to retrieve the current state of the database.
   - The new data is then pushed into the `notes` array within the database object.
   - After updating the database, it calls `saveDB` to write the changes back to `db.json`.
   - The function finally returns the newly inserted data.

### Summary

This module provides a straightforward way to interact with a JSON file as a database, enabling asynchronous reading, writing, and data insertion.

It's a simple yet effective solution for basic data persistence in small applications.
```
This markdown explanation summarizes the JavaScript module and its key components, focusing on how it manages basic database operations using a JSON file and asynchronous file system methods.
*/