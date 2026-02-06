## Angular Auth Setup

This project can be understood slightly differently depending on the Angular version you’re using.  

---

## Auth Flow (All Versions)

1. User clicks **Login**
2. Login API returns `accessToken`
3. Token is stored in `AuthService`
4. User clicks **Get Profile**
5. Interceptor attaches `Authorization: Bearer <token>`
6. Profile API returns user data
7. UI displays profile details

---

### Angular v16
- Supports **NgModule** and **standalone**
- Interceptors usually registered via:
- `HTTP_INTERCEPTORS` in `AppModule`
- Signals are available but optional

---

### Angular v18
- Standalone-first mindset
- `provideHttpClient(withInterceptors())` preferred
- Class-based interceptors still work
- Better performance & tooling improvements

---

### Angular v21
- Fully **standalone-driven**
- Functional APIs encouraged everywhere
- `HttpInterceptorFn` preferred over class-based interceptors
- Signals commonly used for state



