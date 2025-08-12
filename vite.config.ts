import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('Current mode:', command)
  console.log('Current environment configuration:', currentEnv)
  return defineConfig({
    plugins: [
      react(),
      AutoImport({
        imports: ['react', 'react-router-dom'],
        dts: './src/auto-imports.d.ts',
        dirs: ['src/store'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
    ],
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://xxxxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        sass: {},
      },
    },
    build: {
      outDir: /* mode === 'docker' ? 'dist' : */ 'docs',
      sourcemap: mode != 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            vc: ['vconsole'],
          },
        },
      },
    },
  })
}
