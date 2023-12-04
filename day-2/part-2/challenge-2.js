const fs = require('fs');

let s = 0
const checkColors = (data) => {
    return {
        red: Math.max(...data.map(i => i.red).filter(i => i)),
        blue: Math.max(...data.map(i => i.blue).filter(i => i)),
        green: Math.max(...data.map(i => i.green).filter(i => i))
    }
}

const input = fs.readFileSync('./gamedata', 'utf8').split('\n').map(i => i.trim()).filter(i => i);
for (let i of input) {
    let index = parseInt(i.split(':')[0].split(' ')[1]);
    let data = i.split(':')[1].trim().split(';').map(i => i.trim().split(', ')).map(i => {
        let obj = {};
        for (let j of i) {
            let key = j.split(' ')[1];
            let value = parseInt(j.split(' ')[0]);
            obj[key] = value;
        }
        return obj;
    })
    // console.log({ index, data });
    const result = checkColors(data);
    s += result.red * result.blue * result.green;
}
console.log(s);