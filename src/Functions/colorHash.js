function colorHash(fullName, seed) {
    let hash = seed;
    const len = fullName.length;
  
    for (let i = 0; i < len; i++) {
      let ch = fullName.charCodeAt(i);
      hash ^= ch;
      hash *= 0x01000193;
    }
  
    const hue = (hash % 359) + 1;
    const saturation = 50;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }


export default colorHash;