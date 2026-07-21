import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 9000, // Change to whatever port you want
		allowedHosts: ["unpartaking-obstetric-araceli.ngrok-free.dev"]
	},
})
