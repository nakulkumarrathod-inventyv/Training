# 02_profile_card

This folder contains the **Profile Card application** implemented using different **Angular versions** to understand version-wise structure, features, and best practices.

---

## Folder Structure Overview

```
02_profile_card  
├── version_16  
│   └── README.md
├── version_18  
│   └── README.md
├── version_21  
│   └── README.md
└── README.md
```


---

## version_16

- Built using **NgModule-based architecture**
- Uses `AppModule`, `HttpClientModule`, and traditional providers
- Component communication with `@Input()` and `@Output()`
- Lifecycle hooks and basic service-based data handling
- Helps understand **classic Angular structure**

---

## version_18

- Uses **Standalone Components**
- Reduced dependency on NgModules
- Cleaner imports and simplified bootstrapping
- Improved component communication
- Acts as a bridge between classic Angular and signals-based approach

---

## version_21

- Fully **Signals-based architecture**
- Uses `signal()`, `input()`, `computed()`, and `inject()`
- Centralized state management using signals in services
- Standalone components only
- Demonstrates **modern Angular best practices**

---

## Purpose

This comparison helps to:
- Understand Angular evolution
- Learn structural changes across versions
- Improve real-world project readiness