# 03_Shopping_Cart

This folder contains the **Shopping Cart application** implemented using different Angular versions to understand architectural and feature evolution.

---

## Folder Structure

```
03_shopping_cart  
├── version_16  
│   └── README.md
├── version_18  
│   └── README.md
├── version_21  
│   └── README.md
└── README.md
```

---

## Version Overview

### version_16
- Module-based architecture
- Uses `NgModule`, `HttpClientModule`
- State managed using normal variables and services
- Traditional Angular component structure

### version_18
- Hybrid approach
- Introduces **standalone components**
- Cleaner imports and reduced module usage
- Improved component communication

### version_21
- Fully **standalone architecture**
- Uses **Angular Signals** for state management
- `signal()` and `computed()` for cart state
- More reactive, clean, and scalable design

---

## Purpose

- Compare Angular versions side-by-side
- Understand migration from:
  - Modules → Standalone Components
  - Normal state → Signals
- Improve practical Angular knowledge

