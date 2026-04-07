// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'], // your CI server URL
      numberOfRuns: 3,
    },

    assert: {
      // Category thresholds (main scores)
      "categories:performance": ["warn", { minScore: 0.5 }],       // Warn if <0.5
      "categories:accessibility": ["warn", { minScore: 0.7 }],    // Warn if <0.7
      "categories:seo": ["warn", { minScore: 0.8 }],              // Warn if <0.8

      // Performance metrics
      "metrics:first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
      "metrics:largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
      "metrics:cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
      "metrics:total-blocking-time": ["warn", { maxNumericValue: 300 }],
      "metrics:speed-index": ["warn", { maxNumericValue: 3000 }],

      // Accessibility metrics
      "color-contrast": "warn",
      "image-alt": "warn",
      "aria-allowed-attr": "warn",

      // SEO metrics
      "meta-description": "warn",
      "document-title": "warn",
      "link-text": "warn",

      // Best Practices
      "best-practices:errors-in-console": "warn",
    },

    upload: {
      target: 'temporary-public-storage', // public report URL
    },
  },
};