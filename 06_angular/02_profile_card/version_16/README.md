# Profile Card

This is a simple Angular application that displays a list of user profiles and allows changing their status.

## Flow Overview

- **ProfileService**
  - Stores static user data
  - Provides user list to components

- **AppComponent**
  - Fetches data from `ProfileService`
  - Holds the main profile list
  - Listens to status change events from child component

- **ProfileListComponent**
  - Receives profile data using `@Input`
  - Emits status updates using `@Output`
  - Toggles user status (`active`, `inactive`, `blocked`)
  - Demonstrates Angular lifecycle hooks and view queries

---

## Angular Concepts Implemented

### Data Binding (All Types)
- **Interpolation**  
  Used to display user data in the template

- **Property Binding**  
  Used for binding image URLs and element properties

- **Event Binding**  
  Used for button click actions (status toggle)

- **Two-Way Binding**  
  Used for input handling (where applicable)

- **Class Binding**     
    Used for card color, border change when status change 

---

## Component Communication

- **Parent to Child** → `@Input()`
- **Child to Parent** → `@Output()` + `EventEmitter`

---

## Lifecycle Hooks Used

- `ngOnInit`
- `ngOnChanges`
- `ngAfterViewInit`

---

## View Queries

- `@ViewChild`
- `@ViewChildren`

Used to access input fields and buttons from the template.

--- 

## Used module.ts file to imports and declare components.

