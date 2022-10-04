import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import dns from 'dns';

// DNS setting required to enable use of "localhost" rather than 127.0.0.1
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Make env variables available via `process.env` as well as `import.meta.env`
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');
  env.NODE_ENV = mode;
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      };
    },
    {}
  );

  return {
    plugins: [eslint(), react(), tsconfigPaths()],

    // Open browser window to http://localhost:3000
    server: {
      open: true,
      port: 3000,
      strictPort: true,
    },

    // Support REACT_APP_ environment variable prefix rather than VITE_
    envPrefix: 'REACT_APP_',
    define: envWithProcessPrefix,
  };
});
