function sortByStrings(s, t) {
  let arr = s.split('');
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let idx = (t.indexOf(current));
    if (idx === -1) {
      continue;
    } else if (obj[idx] === undefined) {
      obj[idx] = current;
    } else {
      obj[idx] += current;
    }
  }

  let result = Object.values(obj);
  return result.join('');
}

sortByStrings("weather", "therapyw");
// sortByStrings("good", "odg");


function decodeString(s) {
  let reg = /(\d+)\[([a-z]*)\]/g;

  while (s.includes("[")) {
    s = s.replace(reg, (current, times, section) => (
      section.repeat(times))
    );
  }
  return s;
}

decodeString("4[ab]");
// decodeString("2[b3[a]]");
