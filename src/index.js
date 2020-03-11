module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");

    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (bracketsConfig[i][0] == arr[k] && bracketsConfig[i][1] == arr[k + 1]) {

                arr.splice(k, 2)
                k = -1;
                i = -1;
                break;
            };

        }

    }
    if (arr.length) return false;
    else return true;
}

