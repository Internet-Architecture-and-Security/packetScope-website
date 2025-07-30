import nextra from 'nextra'
 
const isProduction = process.env.NODE_ENV === 'production'
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  contentDirBasePath: '/docs',
  latex: true,
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  typescript: {
    // 允许 build 时跳过 TS 错误
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 开发环境：不设置 assetPrefix，使用默认的绝对路径
  // 生产环境：使用相对路径以支持 GitHub Pages 子路径部署
  // ...(isProduction && {
  // 明确指定 GitHub Pages 的子路径
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.ASSET_PREFIX,
  // }),
  
  // 可选：如果需要在特定情况下使用 basePath
  // ...(isGithubPages && {
  //   basePath: '/packetScope-website',
  //   assetPrefix: '/packetScope-website/',
  // }),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    }); // 针对 SVG 的处理规则

    return config;
  },
})