const fs = require('fs');

let s = 0;

const check = (data, condition, color) => {
    let sum = 0;
    for (let i of data) {        
        if (i[color]) {
            sum += i[color];
        }
    }
    return sum < condition;
}

const checkColors = (data, conditions) => {
    let result = true;
    for (let color in conditions) {
        result = result && check(data, conditions[color], color);
    }
    return result;
}

const input = fs.readFileSync('./gamedata', 'utf8').split('\n').map(i => i.trim()).filter(i => i);
for (let i of input) {
    let index = i.split(':')[0];
    let data = i.split(':')[1];
    index = parseInt(index.split(' ')[1]);
    data = data.trim().split(';').map(i => i.trim().split(', ')).map(i => {
        let obj = {};
        for (let j of i) {
            let key = j.split(' ')[1];
            let value = parseInt(j.split(' ')[0]);
            obj[key] = value;
        }
        return obj;
    });
    const conditions = {
        red: 12,
        green: 13,
        blue: 14
    }
    const result = checkColors(data, conditions);
    console.log({index, data, result});   
    if (result) {
        s += index;
    }
}
console.log(s);