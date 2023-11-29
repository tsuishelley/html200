let dogNames = ['Mei', 'Yuna', 'Zoomy', 'Flower', 'Muffin'];

console.log(dogNames);

dogNames.push('Stupidhead');

console.log(dogNames);

dogNames.splice(2, 1);

console.log(dogNames);

let dogNamesTogether = dogNames.join(', ');

console.log(dogNamesTogether);