
module.exports = {
  ci: {
    assert:{
        
        assertions: {
             // Performance
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],

        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'aria-allowed-attr': 'error',

        // SEO
        'meta-description': 'warn',
        'document-title': 'error',
        'link-text': 'warn',

        // Best Practices
        'errors-in-console': 'warn',
        
        
    },
    collect: {         
        url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
};