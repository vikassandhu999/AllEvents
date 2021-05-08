import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 5002,
  },
  resolve: {
    alias: [
      { find: '@app', replacement: path.resolve(__dirname, '/src') },
      {
        find: /^@material-ui\/icons\/(.*)/,
        replacement: '@material-ui/icons/esm/$1',
      },
      {
        find: /^@material-ui\/core\/(.+)/,
        replacement: '@material-ui/core/es/$1',
      },
      {
        find: /^@material-ui\/core$/,
        replacement: '@material-ui/core/es',
      },
    ],
  },
});
