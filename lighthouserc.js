
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },

    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
      // Category thresholds
      "categories:performance": ["warn", { minScore: 0.5 }],
      "categories:accessibility": ["warn", { minScore: 0.7 }],
      "categories:seo": ["warn", { minScore: 0.8 }],

      // Performance audits (NO prefix)
      "first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
      "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
      "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
      "total-blocking-time": ["warn", { maxNumericValue: 300 }],
      "speed-index": ["warn", { maxNumericValue: 3000 }],

      // Accessibility
      "color-contrast": "warn",
      "image-alt": "warn",
      "aria-allowed-attr": "warn",

      // SEO
      "meta-description": "warn",
      "document-title": "warn",
      "link-text": "warn",

      // Best Practices
      "errors-in-console": "warn",
    }
  },

    upload: {
      target: 'temporary-public-storage',
    },
  },
};