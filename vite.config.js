import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/Group1_CampusConnect/", // Use environment variable for flexibility
  plugins: [react()],
  resolve: {
    alias: {
      'pg-native': false, // Prevent Vite from bundling 'pg-native'
      '@rollup/rollup-linux-x64-gnu': false // Ignore the Linux-specific module on Windows
    }
  },
  optimizeDeps: {
    exclude: ['pg-native', '@rollup/rollup-linux-x64-gnu'] // Exclude platform-specific modules from optimized dependencies
  },
  define: {
    global: {}, // Define 'global' to avoid compatibility issues
    'process.env': {} // Add empty 'process.env' for compatibility
  },
  server: {
    port: 5000, // Set the development server port
    strictPort: true, // Fail if the port is already in use
    open: true // Automatically open the browser when the server starts
  },
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Enable source maps for easier debugging
    target: 'esnext', // Use modern JavaScript for better performance
    cssCodeSplit: true, // Separate CSS from JS files for better caching
    rollupOptions: {
      external: ['pg-native', '@rollup/rollup-linux-x64-gnu'], // Ignore platform-specific modules
    }
  }
})
