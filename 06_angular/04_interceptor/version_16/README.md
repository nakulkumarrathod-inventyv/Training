# Angular Auth Demo

This is a small Angular demo app that shows a **basic authentication flow** using `HttpClient` and an **HTTP Interceptor**.  
It uses the free **DummyJSON API** to demonstrate login and fetching a protected user profile.

---

## What this app does

- Login using a dummy API
- Store the access token in a service
- Attach the token automatically using an HTTP interceptor
- Fetch and display the logged-in user’s profile
- Show data in the UI using simple Angular bindings

---

## Concepts covered

- Angular **components & services**
- API calls with **HttpClient**
- Authentication token handling
- **HttpInterceptor** for Authorization headers
- Conditional UI rendering with `*ngIf`

---

## App Flow

1. Click **Login**
   - Calls the login API
   - Saves the `accessToken` in `AuthService`

2. Click **Get Profile**
   - Interceptor adds `Authorization: Bearer <token>`
   - Profile data is fetched from the API

3. Profile details appear on the screen

---

## API Used

- **Login:** `https://dummyjson.com/auth/login`
- **Profile:** `https://dummyjson.com/auth/me`


