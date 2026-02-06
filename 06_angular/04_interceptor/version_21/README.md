# Angular Auth Demo (Signals + Interceptor)

This is a small Angular demo app that shows how **authentication works using signals**, HTTP calls, and an **HTTP interceptor**.  
It uses the free **DummyJSON API**, so you can focus on learning instead of backend setup.

---

## What this app does

- Login using a dummy API
- Store the access token using **Angular signals**
- Automatically attach the token to API requests using an **HTTP interceptor**
- Fetch and display the logged-in user’s profile
- Update the UI reactively when data changes

---

## Concepts covered

This project is mainly for learning and practice. You’ll understand:

- Angular **signals** for state management
- API calls using **HttpClient**
- Login & profile fetching flow
- **HttpInterceptorFn** for adding auth headers
- Conditional rendering with `*ngIf`
- Clean separation of logic using services

---

## App Flow

1. Click **Login**
   - Calls the login API
   - Saves the `accessToken` in a signal

2. Click **Get Profile**
   - Interceptor adds `Authorization: Bearer <token>`
   - Profile data is fetched and stored in a signal

3. UI updates automatically
   - Token and profile details appear without manual refresh

---

## API Used

- **Login:** `https://dummyjson.com/auth/login`
- **Profile:** `https://dummyjson.com/auth/me`



