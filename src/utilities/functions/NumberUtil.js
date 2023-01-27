export function cleanStringFromNumbers(s) {
  if (!s) {
    return ''
  }
  return s.replace(/\D/g, '');
}

export function cleanCommasFromNumbers(s) {
  if (!s) {
    return ''
  }

  return s.replace(/,/g, '');
}


export const localToNumber = (n, whatReturn = 0) => {
  if (!n || String(n).length == 0) {
    return whatReturn
  }
  return Number(n)
}

export const getRandomUUIDV4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}