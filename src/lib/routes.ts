export default {
  browse: '/browse',
  dashboard: '/dashboard',
  landing: '/',
  login: '/login',
  oauth: {
    login: '/oauth/login',
  },
  watch: {
    video: (id: number) => `/watch?video=${id}`,
  },
}
