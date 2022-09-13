//var str = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e er"
//var obj = {}
//var arr = str.toLowerCase().split(" ").map(i => i.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ""))
//            .reduce((acc, i) => { obj[i] ? ++obj[i] : obj[i] = 1, obj }, {})
//        var ele = Object.values(obj).sort((a, b) => b - a).splice(0, 3)
//        var i = 0
//        var result = []
//        Object.keys(obj).forEach((element) => {
//            console.log(element);
            // if (obj[arr[element]] == ele[i]) {
            //     result.push(i)
            //     i++    
            // }
//        })
//        console.log(str.match(new RegExp("aa", "gi") || []));
//        console.log(result)



// function findSum(first, second) {
//     var carry = 0
//     var diff = first.length - second.length
//     var sum = ""
//     for (var i = first.length - 1; i >= 0; i--) {
//         var t = Number(first.charAt(i)) % 10 + Number(second.charAt(i - diff)) % 10 + carry
//         if (first.length == second.length && i == 0) {
//                 sum = t + sum
//         } else {
//             if (t >= 10) {
//                 sum = (t % 10) + sum
//                 carry = Math.floor(t / 10)
//             } else {
//                 sum = t + sum
//                 carry = 0
//             }
//         }
//     }
//     console.log(sum);
//     return sum
// }

// var arr = [9, 9, -5, 9, 5]
// var k = 3

// console.log(arr.sort().filter((val, i, arr) => i < k).reduce((a, b) => a + b));

// var sum = 0
// var min

// for (var i = 0; i < k; i++) {
//     sum += arr[i]
// }

// min = sum

// for (var i = k; i < arr.length; i++) {
//     sum -= arr[i - k]
//     sum += arr[i]
//     if (sum < min) {
//         min = sum
//     }
// }


// var numbers = "M38.889,201.279l162.374,-162.42l15.846,15.841l-162.374,162.42z"
// console.log(numbers.match(/\-?\d+\.?(\d+)?/g));
// var nums = ""
// var fromViewPort = 256
// var toViewPort = 24
// for (let i = 0; i < numbers.length;) {
//     if ((!isNaN(+numbers[i]) && numbers[i] != " ") || numbers[i] == "-" || numbers[i] == ".") {
//         var num = ""
//         var start = i
//         while((!isNaN(+numbers[i]) && numbers[i] != " ") || numbers[i] == "-" || numbers[i] == ".") {
//             num += numbers[i]
//             i++
//         }

//         var mappedValue = +((+num / fromViewPort).toFixed(4) * toViewPort).toFixed(2)
//         nums += mappedValue
//         // console.log(`num : ${num}, start : ${start}, end : ${end}\t`)
//     } else {
//         // console.log(numbers[i])
//         nums += numbers[i]
//         i++
//     }
// }

// console.log(nums)


// var n = 1300, count = 0;
// for (var i = 1; i <= n; i++) {
//     if ((i + '').includes('2')) {
//         console.log(i + " : " + (i % 2) + "\r\n")
//         count++
//     }
// }

// console.log("14 includes");

// for (var i = 1; i <= n; i++) {
//     if ((i + '').includes('14')) {
//         console.log(i + " : " + (i % 14) + "\r\n")
//         count++
//     }
// }
// console.log(`count : ${count + n}\r\n`)


process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});


process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");

    console.log(input_);

    var idx_ = 0;
    var T = parseInt(input_[idx_++].trim(), 10);
    for(var t_i = 0; t_i < T; t_i++) {
        var line = input_[idx_++].split(" ")
        var L = parseInt(line[0].trim(), 10);
        var R = parseInt(line[1].trim(), 10);

        console.log(`L : ${L}, R : ${R}\r\n`)

        // var out_ = solve( L,  R);
        // process.stdout.write(out_.toString());
        // process.stdout.write('\n');
    }

    process.exit();

});


// var L = 3, R = 5
// var score = 0
// for (var i = 0; i<= R; i++) {
//     for (var j = 0; (i+j) <= R; j++) {
//         if (i != j && (i | j) <= R && (i + j) >= L && (i + j) <= R) {
//             if ((i | j) == (i + j)) {
//                 console.log(`(${i}, ${j})\r\n`)
//                 score++
//             }
//         }
//     }
// }
// console.log(`score : ${score}`)
