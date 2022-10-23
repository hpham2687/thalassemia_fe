const baseConfigs = {
  appVersion: '1.0.1',
  appId: 'photostudy',
  appPlatform: 'waf',
  apiUrl: 'http://localhost:3000',
  appUrl: 'http://localhost:8000',
  crossDomainCredentialsUrl: 'https://cdc.gotit.education',
  crossDomainCredentialsTargetOrigin: '*',
  link: {
    emailSupport: 'support@photostudy.co',
    appDemoVideo: 'https://www.youtube.com/embed/Ze13PrAsbwA',
    appDemoVideoTitle: 'How it works. The PhotoStudy Web App.',
    facebook: 'https://www.facebook.com/gotithelp/',
    twitter: 'https://twitter.com/PhotoStudy_app',
    terms: 'https://www.got-it.co/terms.html',
    privacyPolicy: 'https://www.got-it.co/privacy-policy.html',
    androidApp: 'https://play.google.com/store/apps/details?id=co.gotitapp.android',
    isoApp: 'https://itunes.apple.com/app/apple-store/id797535508?mt=8',
  },
  giapToken: 'photostudy-student-dev',
  giapServerUrl: 'https://analytics-api.got-it.ai',
  giapPlatform: 'web',
  pusherKey: 'cda52073e74e0e183033',
  pusherCluster: 'mt1',
  facebookAppId: '119353708180184',
  refreshInterval: 10000,
  refreshAccessTokenTimeThreshold: 60, // seconds
  sentryDSN: 'https://f75f036ca58b445a9d3052427a40c382@o159574.ingest.sentry.io/6149245',
};
export default baseConfigs;
