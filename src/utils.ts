export function extractYear(text: string) {
  const match = text.match(/\b\d{4}\b/);
  return match ? match[0] : 'to be soon';
}

export function removeYearInBrackets(text: string) {
  return text.replace(/\(\d{4}\)/g, '').trim();
}
