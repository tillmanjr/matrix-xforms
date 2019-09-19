const freeze = obj => Object.freeze(obj);

function enumeration(...members) {
  let memberValues = {};
  for (member of members) {
    // we're only supporting string or object arguments
    if (typeof member === "string") {
      memberValues[member] = freeze({ value: member });
    } else if (typeof member === "object") {
      // use the first provided key to support { key: value } usage
      const key = Object.keys(member)[0];
      memberValues[key] = freeze({ value: member[key] });
    }
  }
  return freeze(memberValues);
}

module.exports = { enumeration }