export function createPitchRecord() {
  return {
    pitches: 0,
    strikes: 0,
    balls: 0
  };
}

export function addPitch(record, type) {
  const next = { ...record, pitches: record.pitches + 1 };
  if (type === 'strike') next.strikes++;
  if (type === 'ball') next.balls++;
  return next;
}
