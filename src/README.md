# React Product List Assignment

## Overview

This project is a small React + TypeScript application that demonstrates:

- Fetching data from a public API
- Displaying the data in a clean table
- Implementing search filtering
- Client-side pagination
- Handling loading, error and empty states
- Creating new items via a simple form (mock submission)

The application fetches products from:

https://dummyjson.com/products

---

# Setup Instructions

### 1 Install dependencies

```
npm install
```

### 2 Run development server

```
npm run dev
```

Then open:

```
http://localhost:5173
```

---

# Folder Structure

```
src
 ├ components
 │   └ ProductTable.tsx
 │
 ├ hooks
 │   └ useProducts.ts
 │
 ├ services
 │   └ productService.ts
 │
 ├ types
 │   └ product.ts
 │
 ├ App.tsx
 ├ main.tsx
 └ app.css
```

### components

Reusable UI components.

### hooks

Custom React hooks used for managing data logic.

### services

API related logic separated from UI components.

### types

TypeScript interfaces describing application data models.

---

# Key Technical Decisions

### Separation of Concerns

The project separates:

- UI components
- Data fetching logic
- API communication
- Type definitions

This improves maintainability and scalability.

---

### Custom Hook for Data Fetching

A custom hook `useProducts` encapsulates:

- API fetching
- loading state
- error handling

This keeps the main component focused on UI rendering.

---

### Client-side Filtering and Pagination

Data transformation follows a pipeline:

```
products
  ↓
filteredProducts
  ↓
paginatedProducts
  ↓
render UI
```

This ensures search results and pagination behave correctly together.

---

### Immutable State Updates

State updates avoid direct mutation and instead create new arrays using the spread operator.

Example:

```
setLocalProducts([newProduct, ...localProducts])
```

This aligns with React best practices and ensures proper re-rendering.

---

# Edge Case Handling

The UI handles the following cases:

- Loading state while fetching API data
- Error state if API request fails
- Empty state when no products match search results

---

# Improvements With More Time

Possible improvements include:

- Using a component library such as Ant Design or Material UI
- Adding form validation
- Adding product editing and deletion
- Server-side pagination for large datasets
- Unit testing with React Testing Library
- Better responsive styling for mobile devices

---

# Technologies Used

- React
- TypeScript
- Vite
- DummyJSON public API
