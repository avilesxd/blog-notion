const { config } = require('./lib/server/config')

module.exports = {
  siteUrl: config.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  exclude: ['/404', '/search'],
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/404', '/search']
      }
    ]
  }
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
