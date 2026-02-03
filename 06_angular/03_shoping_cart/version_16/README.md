# Shopping Cart App

This is a simple Angular shopping cart application that demonstrates basic state management using a shared service.

---

## Features

- Product listing
- Add items to cart
- Increase / decrease item quantity
- Remove items from cart
- Login toggle (required for cart actions)
- Cart item count and total amount calculation

---

## Application Flow

### DataService
- Acts as a **central data store**
- Stores product list, cart items, and login state
- Handles all cart logic (add, remove, increase, decrease)
- Calculates:
  - Total cart amount
  - Total cart item count

---

### Components Used

#### NavbarComponent
- Displays login status
- Toggles login using `DataService`

#### ItemListComponent
- Displays available products
- Adds products to cart

#### CartListComponent
- Displays cart items
- Increase / decrease quantity
- Remove item from cart

#### AppComponent
- Root component
- Holds layout structure

---

## Angular Concepts Used

- **Components**
- **Services (`@Injectable`)**
- **Dependency Injection**
- **Property Binding**
- **Event Binding**
- **Structural Directives** (`*ngFor`, `*ngIf`)
- **Getter methods** for computed values
- **Immutable state updates** using spread operator

---

## Login Rule

- Cart actions are allowed **only after login**
- If user is not logged in, an alert is shown

---

## Purpose

This project is built to:
- Understand service-based state management
- Practice component interaction using a shared service
- Learn cart logic used in real e-commerce apps

