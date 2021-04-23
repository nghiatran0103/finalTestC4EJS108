function strings(s1, s2) {
  let string = [];

  s1 = s1.split("");
  s2 = s2.split("");

  let max = Math.max(s1.length, s2.length);

  for (let i = 0; i < max; i++) {
    if (s1[i] != null) {
      string.push(s1[i]);
    }
    if (s2[i] != null) {
      string.push(s2[i]);
    }
  }

  console.log(string);
  console.log(string.join(""));
}

strings("abc", "123");
strings("abc", "0123");
strings("abcd", "123");
