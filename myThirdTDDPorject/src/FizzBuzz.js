 var fizzBuzz = function() {
     var num = []
     for (var i = 1; i <= 100; i++) {
         if (i % 5 === 0 && i % 3 === 0) {
             num.push('FizzBuzz')
         } else if (i % 3 === 0) {
             num.push('Fizz')
         } else if (i % 5 === 0) {
             num.push('Buzz')
         } else {
             num.push(i)
         }
     }
     return num
 }
