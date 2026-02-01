# Angular CLI Command Simulator

This project is a **simple Angular app** which works like a **Angular CLI terminal** in browser.  
User can type Angular commands and see output like real terminal.

This is not real CLI. It is just for **learning and demo purpose**.

---

## What this project do

- Show terminal style UI
- User can type Angular CLI commands
- App match command and show response
- Output show step by step like real process
- Built using **Angular signals**

---

## Basic Working Process (Simple Explanation)

1. App start with some default messages
   - Angular CLI version
   - Help message

2. User type command in input box
   - Example: `ng serve`

3. When user press **Enter**
   - `executeCommand()` function is called

4. Entered command is:
   - trimmed
   - converted to lowercase
   - added to terminal history

5. App check command from command list
   - Commands are stored in `commands[]` array
   - Each command has description, success message and example

6. If command match found:
   - After 2 sec → success message shown
   - After 3 sec → description shown
   - After 4 sec → example shown

7. If command not found:
   - Error message shown like real terminal

8. While processing:
   - Input box is hidden
   - User cannot type new command

---

## Files Used

```
src/
├── app
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── models/
│       └── command.ts
└── README.md
```

---

## Angular Concepts Used

- Standalone Component
- Angular Signals
- `@for` structural directive
- `setTimeout` for fake delay
- Basic event handling
