export function extractYear(text: string): string {
  if (!text) return 'to be soon';

  const match = text.match(/\b\d{4}\b/);
  return match ? match[0] : 'to be soon';
}

export function removeYearInBrackets(text: string): string {
  if (!text) return '';
  return text.replace(/\(\d{4}\)/g, '').trim();
}

export function removeMarvelURI(uri: string): string[] {
  if (!uri) return [];
  return uri.replace('http://gateway.marvel.com/v1/public/', '').split('/');
}
