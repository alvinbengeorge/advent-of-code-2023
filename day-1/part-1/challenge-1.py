with open('calibration-document', 'r') as f:
    lines = f.readlines()
    for i in range(len(lines)):
        a = [c for c in lines[i] if c.isnumeric()]
        lines[i] = int(a[0]+a[-1])
    print(sum(lines))