export function generateAdvice(data = {}) {
  return {
    title: 'AI Coach Advice',
    suggestions: [
      data.lineup || 'Review lineup',
      data.pitcher || 'Monitor pitcher',
      data.strategy || 'Maintain strategy'
    ],
    createdAt: new Date().toISOString()
  };
}
