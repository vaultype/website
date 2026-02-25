import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vaultype.app',
  integrations: [
    starlight({
      title: 'VaulType',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/vaultype/vaultype',
        },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Setup', slug: 'getting-started/setup' },
            { label: 'Development', slug: 'getting-started/development' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'Speech Recognition', slug: 'features/speech-recognition' },
            { label: 'LLM Processing', slug: 'features/llm-processing' },
            { label: 'Text Injection', slug: 'features/text-injection' },
            { label: 'Voice Commands', slug: 'features/voice-commands' },
            { label: 'Permissions', slug: 'features/permissions' },
            { label: 'Model Management', slug: 'features/model-management' },
          ],
        },
        {
          label: 'Architecture',
          items: [
            { label: 'Overview', slug: 'architecture/overview' },
            { label: 'Tech Stack', slug: 'architecture/tech-stack' },
            { label: 'Database', slug: 'architecture/database' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'User Guide', slug: 'guides/user-guide' },
            { label: 'Plugin Development', slug: 'guides/plugin-development' },
          ],
        },
        {
          label: 'Operations',
          items: [
            { label: 'Troubleshooting', slug: 'operations/troubleshooting' },
            { label: 'Monitoring', slug: 'operations/monitoring' },
            { label: 'Maintenance', slug: 'operations/maintenance' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'FAQ', slug: 'reference/faq' },
            { label: 'Roadmap', slug: 'reference/roadmap' },
            { label: 'Performance', slug: 'reference/performance' },
            { label: 'Accessibility', slug: 'reference/accessibility' },
            { label: 'API', slug: 'reference/api' },
          ],
        },
        {
          label: 'Security',
          items: [
            { label: 'Security', slug: 'security/security' },
            { label: 'Legal', slug: 'security/legal' },
          ],
        },
        {
          label: 'Deployment',
          items: [
            { label: 'Deployment', slug: 'deployment/deployment' },
            { label: 'CI/CD', slug: 'deployment/ci-cd' },
          ],
        },
        {
          label: 'Testing',
          items: [
            { label: 'Testing', slug: 'testing/testing' },
            { label: 'Privacy Results', slug: 'testing/privacy-results' },
            { label: 'Memory Leak Results', slug: 'testing/memory-leak-results' },
            { label: 'Stability Results', slug: 'testing/stability-results' },
            { label: 'Accessibility Audit', slug: 'testing/accessibility-audit' },
            { label: 'Regression Results', slug: 'testing/regression-results' },
          ],
        },
        {
          label: 'Contributing',
          items: [
            { label: 'Contributing Guide', slug: 'contributing/contributing-guide' },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
