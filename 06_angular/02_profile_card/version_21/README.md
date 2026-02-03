# Profile Card

This is a simple Angular application that displays user profile cards and allows toggling user status using **Angular Signals** and **Standalone Components**.

---

## Flow Overview

### ProfileService
- Stores user profile data using **signals**
- Exposes readonly user state
- Handles user updates immutably

### App (Root Component)
- Injects `ProfileService` using `inject()`
- Reads users as a **signal**
- Passes users to child component
- Handles status change events and updates service state

### ProfileListComponent
- Receives user data using `input()`
- Displays profile cards
- Toggles user status
- Emits updated user data using `@Output`

---

## Angular Concepts Implemented

### Data Binding (All Types)

- **Interpolation**  
  Used to display username, age, and status

- **Property Binding**  
  Used for image URLs and Material component properties

- **Event Binding**  
  Used for button click actions (status toggle)

- **Two-Way Binding**  
  Implemented using `FormsModule` where required

- **Class Binding**  
  Used to change card styles based on user status

---

## Signals Usage

- `signal()` → Store reactive state
- `input()` → Signal-based input binding
- `asReadonly()` → Protect service state
- Immutable updates using `signal.update()`

---

## Component Communication

- **Parent → Child**  
  Signal-based input using `input<User[]>()`

- **Child → Parent**  
  `@Output()` with `EventEmitter`

---

## Lifecycle Hooks Used

- `ngOnInit`
- `ngOnChanges`
- `ngAfterViewInit`

---

## View Queries

- `@ViewChild(MatInput)`
- `@ViewChildren(MatButton)`

Used to access input fields and buttons after view initialization.