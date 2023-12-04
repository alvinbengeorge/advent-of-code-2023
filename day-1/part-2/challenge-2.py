numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five':5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

lines1 = ['']
with open('calibration-document', 'r') as f:
    lines = f.readlines()
    for i in lines:
        for j in range(len(i)):
            if i[j].isnumeric():
                lines1[-1] += i[j]
            else:
                for a in range(j+1, len(i)):
                    print(i[j:a], end=' ')
                    if i[j:a] in numbers:
                        lines1[-1] += str(numbers[i[j:a]])
                        print()
                        break        
        print()
        lines1.append('')
    print(sum([int(i[0]+i[-1]) for i in lines1 if i != '']))
    
            