// import { defineConfig } from 'vite';
// // eslint-disable-next-line import/no-unresolved
// import { configDefaults } from 'vitest/config';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     include: ['**/test/**'],
//     coverage: {
//       reporter: ['json-summary', 'json', 'text', 'html'],
//       reportOnFailure: true,
//       exclude: [
//         ...configDefaults.exclude,
//         'get-pkg-version.js',
//         'server.js',
//         'src/reportWebVitals.ts',
//         'src/index.tsx',
//         'src/app/AppDefinition.tsx',
//         'src/app/externals',
//         '.prettierrc.js',
//         'commitlint.config.js',
//         '**/*naming-convention.js',
//         '**/*create-release-pr.js',
//         '**/*report-web-vitals.ts',
//         '.github/scripts/trivy-scan.js',
//         './android',
//         './ios',
//         'src/app/components',
//         'capacitor.config.ts',
//         'open-lighthouse-report.js',
//         'src/service-worker-registration.ts',
//         'src/service-worker.ts',
//         'src/app/App.tsx',
//         '.github/scripts/update-cicd-deps.js',
//         '.github/scripts/universal-check.js',
//         '.github/scripts/email-formating.js',
//         '.github/scripts/dependabot-checker.js',
//         '**/register-valid-sw.ts',
//         '**/Api.tsx',
//         '**/interceptor.ts',
//         '**/custom-logger.ts',
//         '**/config-type.ts',
//         '**/logging.ts',
//         '**/otel.ts',
//       ],
//       all: true,
//       thresholds: {
//         lines: 80,
//         functions: 60,
//         branches: 80,
//         statements: 80,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "IAM Collective",
        short_name: "IAMCollective",
        description: "Women’s safety and empowerment app",
        theme_color: "#6a0dad",
        background_color: "#ffe4ec",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
