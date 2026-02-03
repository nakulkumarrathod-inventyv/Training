# Shopping Cart App (Angular Signals)

This is a simple shopping cart application built with **Angular standalone components** and **Signals** for state management.

---

## Features

- Product listing
- Add to cart
- Increase / decrease quantity
- Remove items from cart
- Login toggle required for cart actions
- Auto-calculated cart count and total amount

---

## Application Structure

### Data Service (`Data`)
- Acts as the **central state store**
- Uses **Angular Signals**
- Manages:
  - Product data
  - Login state
  - Cart items
- Provides computed values:
  - Total cart items
  - Total cart amount

---

### Components

#### Navbar
- Toggles login state
- Displays login-based behavior

#### ItemList
- Displays available products
- Adds products to cart

#### CartList
- Displays cart items
- Handles increase, decrease, and remove actions

#### App
- Root component
- Combines all standalone components

---

## Angular Concepts Used

- **Standalone Components**
- **Signals (`signal`, `computed`)**
- **Service-based State Management**
- **Dependency Injection**
- **Property Binding**
- **Event Binding**
- **Structural Directives** (`*ngFor`, `*ngIf`)

---

## Cart Logic Rules

- User must be logged in to:
  - Add items
  - Modify cart
- Quantity cannot exceed stock
- Items are removed when quantity becomes zero

---

## Purpose

This project is built to practice:
- Angular Signals
- Standalone component architecture
- Clean state management
- Basic e-commerce cart logic

