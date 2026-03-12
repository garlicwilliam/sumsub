export function isValidAddress(address: string | undefined | null): boolean {
  if (typeof address !== 'string') {
    return false;
  }

  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
