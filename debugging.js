// 5/23/22
let ladder = ''
let word_array = ['head', 'heal', 'teal', 'tell', 'tall', 'tail'];

word_array.forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail