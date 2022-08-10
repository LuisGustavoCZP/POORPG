import loremipsun from './lorem-ipsum.js'; 

function getCount1(str) {
    const ci = performance.now();
    const r = (str.match(/[aeiou]/ig)||[]).length;
    const ce = performance.now();
    return ce - ci;
}

function getCount2(str) 
{
    const ci = performance.now();
    const vowels = {"a":true, "e":true, "i":true, "o":true, "u":true};
    let count = 0;
    for(const letter of str)
    {
        const v = vowels[letter];
        if(v) count++;
    }
    const ce = performance.now();
    return ce - ci;
}

function getCount3(str) {
    const ci = performance.now();
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    const ce = performance.now();
    return ce - ci;
}

let m1, m2, m3;
for(let n = 0; n<100; n++)
{
    const f1 = getCount1(loremipsun);
    const f2 = getCount2(loremipsun);
    const f3 = getCount3(loremipsun);
    console.log(`Teste ${n}\nf1: ${f1}\nf2: ${f2}\nf3: ${f3}`);
    if(m1 === undefined) m1 = f1; else m1 = (m1+f1)/2;
    if(m2 === undefined) m2 = f2; else m2 = (m2+f2)/2;
    if(m3 === undefined) m3 = f3; else m3 = (m3+f3)/2;
}

console.log(`m1: ${m1}\nm2: ${m2}\nm3: ${m3}`);