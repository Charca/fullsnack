/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'modules-not-to-modules',
      comment:
        'One module should not depend on another module (in a separate folder)',
      severity: 'error',
      from: { path: '(^modules/)([^/]+)/' },
      to: { path: '^$1', pathNot: '$1$2' },
    },
  ],
}
// generated: dependency-cruiser@16.4.1 on 2024-09-05T06:00:13.294Z
