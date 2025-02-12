// // function checkStorage(available, ordered) {
// //   if (ordered === 0) {
// //     return "There are no products in the order!";
// //   } else if (ordered > available) {
// //     return "Your order is too large, there are not enough items in stock!";
// //   } else {
// //     return "Order is processed, our manager will contact you";
// //   }
// // }
// // console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
// // console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
// // console.log(checkStorage(70, 0)); // "There are no products in the order!"
// // console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
// // console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
// // console.log(checkStorage(150, 0)); // "There are no products in the order!"
// // console.log(checkStorage(80, 80)); // "The order is accepted, our manager will contact you"

// // // Тернарний оператор

// // function checkPassword(password) {
// //   const correctPassword = "jqueryismyjam";
// //   return password === correctPassword
// //     ? "Access granted"
// //     : "Access denied, wrong password!";
// // }

// // console.log(checkPassword("jqueryismyjam")); // "Access granted"
// // console.log(checkPassword("angul4r1sl1f3")); // "Access denied, wrong password!"
// // console.log(checkPassword("r3actsux")); // "Access denied, wrong password!"

// // // Оператор switch (break)

// // function getSubscriptionPrice(type) {
// //   switch (type) {
// //     case "starter":
// //       return 0;
// //     case "professional":
// //       return 20;
// //     case "organization":
// //       return 50;
// //     default:
// //       return "Invalid subscription type!";
// //   }
// // }

// // console.log(getSubscriptionPrice("professional")); // повертає число 20
// // console.log(getSubscriptionPrice("organization")); // повертає число 50
// // console.log(getSubscriptionPrice("starter")); // повертає число 0
// // console.log(getSubscriptionPrice("random")); // повертає рядок "Invalid subscription type!"
// // console.log(getSubscriptionPrice("premium")); // повертає рядок "Invalid subscription type!"

// // const fullName = "Nazar Patsula";
// // console.log(fullName.slice(1, 7));
// // console.log(fullName.slice(5, 10));
// // console.log(fullName.slice(3, 8));
// // console.log(fullName.slice(0, fullName.length));
// // console.log(fullName.slice(2));
// // console.log(fullName.slice());

// // const fullNames = "Jacob Mercer";
// // const firstNames = fullNames.slice(0, 5);
// // const lastNames = fullNames.slice(6);

// // console.log(fullNames);
// // console.log(firstNames);
// // console.log(lastNames);

// // const message = "Welcome to Bologna";
// // console.log(message.toLowerCase()); //перетворення в нижній регістр
// // console.log(message.toLocaleUpperCase()); // перетворення в верхній регістр

// // // приведення до верхнього або до нижнього регістру

// // function normalizeInput(input, to) {
// //   if (to === "upper") {
// //     return input.toUpperCase();
// //   } else if (to === "lower") {
// //     return input.toLowerCase();
// //   }
// // }

// // піднесення до одного регістру і перевірка чи входить перше імя в повне імя!
// function checkForName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();

//   return lowerFullName.includes(lowerFirstName);
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));

// // Метод endsWith() перевіряє, чи закінчується рядок вказаним підрядком.

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("index.html", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

// // Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// // Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.

// function calculateTotal(number) {
//   if (number <= 0) {
//     return 0;
//   }
//   return (number * (number + 1)) / 2;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// // Напишемо фукнцію яка підсумовує всі числа від 0 до заданого числа і повертає результат:

// function sumUpTo(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0

// // Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// // Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 2; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));

// // Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами. Доповни код функції таким чином, щоб вона: повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let number = start; number <= end; number++) {
//     if (number % divisor === 0) {
//       return number;
//     }
//   }
//   return null;
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// // Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
