import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Huong dan cau hinh:  https://vitejs.dev/config/
export default defineConfig({
    // khoi chay react
    plugins: [react()],

    // Cau hinh server
    server: {
        // Cai dat port 3000
        port: 3000,
    },
})
