module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },

    assert: {
      // Category thresholds
      "categories:performance": ["error", { minScore: 0.5 }],
      "categories:accessibility": ["error", { minScore: 0.7 }],
      "categories:seo": ["error", { minScore: 0.8 }],

      // Performance metrics
      'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
      'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
      'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      'total-blocking-time': ['warn', { maxNumericValue: 300 }],
      'speed-index': ['warn', { maxNumericValue: 3000 }],

      // Accessibility metrics
      'color-contrast': 'error',
      'image-alt': 'error',
      'label': 'error',
      'aria-allowed-attr': 'error',

      // SEO metrics
      'meta-description': 'warn',
      'document-title': 'error',
      'link-text': 'warn',

      // Best Practices
      'errors-in-console': 'warn',
    },

    upload: {
      target: 'temporary-public-storage',
    },
  },
};