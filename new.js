 var numbers = "M38.889,201.279l162.374,-162.42l15.846,15.841l-162.374,162.42z"
 console.log(numbers.match(/\-?\d+\.?(\d+)?/g));
 var nums = ""
 var fromViewPort = 256
 var toViewPort = 24
 for (let i = 0; i < numbers.length;) {
     if ((!isNaN(+numbers[i]) && numbers[i] != " ") || numbers[i] == "-" || numbers[i] == ".") {
         var num = ""
         var start = i
         while((!isNaN(+numbers[i]) && numbers[i] != " ") || numbers[i] == "-" || numbers[i] == ".") {
             num += numbers[i]
             i++
         }

         var mappedValue = +((+num / fromViewPort).toFixed(4) * toViewPort).toFixed(2)
         nums += mappedValue
         // console.log(`num : ${num}, start : ${start}, end : ${end}\t`)
     } else {
         // console.log(numbers[i])
         nums += numbers[i]
         i++
     }
 }

console.log(nums)
