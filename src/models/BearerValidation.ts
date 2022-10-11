export default function (header: string): any {
  const Regex = /^Bearer\s[^\s]+$/g;
  return Regex.test(header);
}
