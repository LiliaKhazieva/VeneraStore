export function addSpacePrice(num: number) {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
}
