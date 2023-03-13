import { createProxyMiddleware } from 'http-proxy-middleware'
import { API_URL } from '~/config'

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  }
}

export default createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
  pathRewrite: { '^/api/proxy': ''},
  secure: false
})
