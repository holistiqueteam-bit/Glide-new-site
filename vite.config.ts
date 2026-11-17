import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Injects a Content-Security-Policy + Referrer-Policy meta tag into the production build only
// (dev server needs inline scripts / websockets for HMR). Remediates audit FIND-001 / FIND-005.
const securityMetaPlugin = () => ({
  name: 'security-meta-tags',
  apply: 'build' as const,
  transformIndexHtml(html: string) {
    const csp = [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://images.unsplash.com",
      "connect-src 'self' https://formsubmit.co https://generativelanguage.googleapis.com",
      "base-uri 'self'",
      "form-action 'self' https://formsubmit.co",
      "object-src 'none'",
    ].join('; ');
    return html.replace(
      '<meta charset="UTF-8" />',
      `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />\n    <meta name="referrer" content="strict-origin-when-cross-origin" />`
    );
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), securityMetaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
