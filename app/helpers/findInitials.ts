export function getInitials(name: string) {
  const words = name.trim().split(/\s+/);
  const initials = words.map(word => word.charAt(0).toUpperCase());
  const limitedInitials = initials.slice(0, 2);

  return limitedInitials.join('');
}
