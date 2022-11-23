/** @type {import('next').NextConfig} */
const JavaScriptObfuscatorPlugin = require("webpack-obfuscator")

const obfuscatorOptions = {
  compact: true,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  rotateStringArray: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.4,
  transformObjectKeys: true,
  unicodeEscapeSequence: true,
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  exportTrailingSlash: true,
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new JavaScriptObfuscatorPlugin(obfuscatorOptions, ["bundles/**/**.js"])
      )
    }
    return config
  },
}

module.exports = nextConfig
