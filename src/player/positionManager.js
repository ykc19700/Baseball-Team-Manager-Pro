export const POSITIONS = [
  'P','C','1B','2B','3B','SS','LF','CF','RF','DH'
];

export function isValidPosition(position) {
  return POSITIONS.includes(position);
}
