def safe_get(data, x, y) -> str:
    if x >= 0 and y >= 0 and x < len(data) and y < len(data[x]):
        return data[x][y]
    return " "

def check_nearby(data, y, x, digits):
    for i in range(x-1, x+digits+1):
        for j in range(y-1, y+2):
            character = safe_get(data, j, i)
            if character != " " and not character.isdigit():
                return True
    return False

with open("engine-schematic") as f:
    s = []
    words = f.readlines()
    print(*words)
    data = [[j if j != "." else " " for j in list(i[:-1])] for i in words]
    for i in range(len(data)):
        n = 0
        for j in range(len(data[i])):
            if not data[i][j].isdigit():
                digits = len(str(n))
                if digits > 0 and n:
                    if check_nearby(data, i, j-digits, digits):
                        s.append(n)             
                n = 0
                continue
            if data[i][j].isdigit():
                n = n * 10 + int(data[i][j])
                continue
    print(s)
    print(sum(s))
