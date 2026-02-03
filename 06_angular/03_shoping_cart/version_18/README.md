# Shopping Cart App

This is a simple Angular shopping cart application built using **standalone components** and a shared service for state management.

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
- Acts as a **single source of truth**
- Stores:
  - Product list
  - Cart list
  - Login state
- Handles all cart operations:
  - Add to cart
  - Increase / decrease quantity
  - Remove item
- Computes:
  - Total cart amount
  - Total cart item count

---

### Components

#### NavbarComponent
- Displays login status
- Toggles login using `DataService`

#### ItemListComponent
- Displays available products
- Adds products to cart

#### CartListComponent
- Displays cart items
- Increase, decrease, and remove cart items

#### AppComponent
- Root component
- Combines navbar, product list, and cart list

---

## Angular Concepts Used

- **Standalone Components**
- **Services & Dependency Injection**
- **Property Binding**
- **Event Binding**
- **Structural Directives** (`*ngFor`, `*ngIf`)
- **Shared Service State Management**

---

## Login Rule

- Cart actions work **only after login**
- If user is not logged in, an alert is shown

---

## Purpose

This project is built to:
- Practice standalone component architecture
- Understand service-based state sharing
- Learn basic e-commerce cart logic

