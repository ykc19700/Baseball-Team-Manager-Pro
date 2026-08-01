export function generateCoachReport(data = {}) {
  return {
    title: 'Coach AI Report',
    lineup: data.lineup || [],
    suggestions: data.suggestions || [],
    createdAt: new Date().toISOString()
  };
}
