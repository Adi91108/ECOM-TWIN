import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });

