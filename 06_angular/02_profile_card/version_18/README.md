# Profile Card

This is a simple Angular application that displays a list of user profiles and allows changing their status.

## Flow Overview

- **ProfileService**
  - Stores static user profile data
  - Acts as a single source of truth
  - Provides data to the root component

- **AppComponent**
  - Fetches profile data from `Profile` service
  - Passes data to child component using `@Input`
  - Listens to status updates from child using `@Output`

- **ProfileListComponent**
  - Displays user profile cards
  - Handles user status toggling
  - Emits updated user data to parent component

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



