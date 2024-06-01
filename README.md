# namaste-react

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm- Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different Dev and prod bundles

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react

# useEffect()

- If no dependency array => useEffect is called on every render
- If the dependency array is empty = [] => useEffect is called on initial render(just once)
- If the dependency array has variable => useEffect is called every time that variable updated
