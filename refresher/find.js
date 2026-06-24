function findName(name) {
  const names = ["Jessa", "Nicole", "Bea"];
  return names.find((n) => n.toLowerCase() === name.toLowerCase());
}

console.log(findName("bea"));
