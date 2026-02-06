# Angular Auth Demo

This is a simple Angular demo app that explains how **authentication works using HttpClient and an HTTP interceptor**.  
It uses the free **DummyJSON API**, so there’s no backend setup needed and you can fully focus on Angular concepts.

---

## What this app does

- Login using a dummy authentication API
- Store the access token in a service
- Automatically attach the token to API requests using an **HTTP interceptor**
- Fetch and display the logged-in user’s profile
- Update the UI when authentication state changes

---

## Concepts covered

This project is meant for learning and practice. It covers:

- API calls using **HttpClient**
- Basic authentication flow (login → token → protected API)
- **HttpInterceptorFn** for adding authorization headers
- Service-based state handling
- Conditional rendering using `*ngIf`
- Standalone Angular components

---

## App Flow

1. Click **Login**
   - Calls the login API
   - Stores the `accessToken` in `AuthService`

2. Click **Get Profile**
   - Interceptor adds `Authorization: Bearer <token>` to the request
   - Profile data is fetched from the API

3. UI updates automatically
   - Token and profile details are shown on the screen

---

## API Used

- **Login:** `https://dummyjson.com/auth/login`
- **Profile:** `https://dummyjson.com/auth/me`


