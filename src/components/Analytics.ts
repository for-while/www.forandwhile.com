export interface AnalyticsState {
  scriptUrl: string
  websiteId: string
}

export default function Analytics(websiteId: string) {
  const scriptUrl = 'https://analytics.cloud.forandwhile.com/script.js'

  return function(): AnalyticsState {
    return {
      scriptUrl,
      websiteId,
    }
  }
}
