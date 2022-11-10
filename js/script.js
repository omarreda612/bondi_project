//  var nam = "omar";
// // document.write(nam);
// typeof(nam);
// document.write(typeof(nam)); not prefer to work with it
//  window.alert(nam); not popular also
//  console.log(nam);
//  document.getElementById("header").innerHTML = nam;
//     total = x < y;
// console.log(total);
// if (total == 20) {
//     console.log("true");
// } else if (total == 30) {
//     console.log("false");
// } else {
//     console.log("check your vs");
// }
// switch (total) {
//     case 20:
//         console.log("total is 20");
//         break;
//     case 30:
//         console.log("your age is 30");
//         break;
//     default:
//         console.log("error");
//         break;
// }

// function clc() {
//     var x = Number(document.getElementById("num1").value);
//     var y = Number(document.getElementById("num2").value);
//     var op = document.getElementById("operator").value;
//     switch (op) {
//         case "plus":
//             var total = x + y;
//             break;
//         case "minus":
//             var total = x - y;
//             break;
//         case "multiply":
//             var total = x * y;
//             break;
//         case "divide":
//             var total = x / y;
//             break;


//     }

//     document.getElementById("result").innerHTML = "your result is " + total;
// }
// var x = 0;
// while (x < 10) {
//     x++;
//     document.write("hello");
//     }
// for (x = 1; x < 10; x++) {
//     document.write(x)
// }
// var x = 1;
// do {
//     document.write(x);
//     x++
// } while (x < 10);
// function welcome() {
//     document.write("hello ya omar");
// }
// welcome();
// function num() {

//     return 20;

// }
// document.write(20 + num());
// function hello(x) {
//     return x;
// }
// console.log(hello(20) + 2);
// var w = function() {
//     console.log("hello");
// }
// w()
// var clrs = ['red', 'blue', 'green'];
// another syntax
// var clrs = new Array('red', 'blue', 'green');
// console.log(clrs);
// console.log(clrs[2]);
// var person = { nam: 'omar', age: '21', city: 'cairo', 10: 20, '10': 80 };
//  not differentiate between num and string
// var person = ['omar', 'reda', 'ahmed', 'hashem', 'lili'];
// // document.getElementById("names").innerHTML = person;
// var list = '';
// person.forEach(function(v, k) {
//     list += "<li>" + v + "</li>";
// });
// document.getElementById("names").innerHTML = list;
// var list = ['omar', 'reda', 'ola'];

// list.forEach(function(value, key) {

//     console.log(value);
// });
{ /* <array  methods></array> */ }
// var list = ['omar', 'reda', 'essam'];
// console.log(list.toString());
// console.log(list.join("*"))
// list.pop();
// list.push("ali");
// list.pop();
// console.log(list);
// var list = ['omar', 'reda', 'essam'];
// list.shift();
// list.unshift("pilo");
// // ---remove from begging--
// list.unshift("pilo");
// console.log(list);
// var list = ['omar', 'reda', 'essam'];
// list.splice(0, 2);
// // بيشبل عناصر من array
// // console.log(list);
// age = [20, 30, 50];
// var x = list.concat(age);
// console.log(x);
// document.getElementById("test").innerHTML = "<h1> omar reda</h1>";
// document.getElementById("test").innerText = "lorem ipsum";
// document.getElementById("test").style.color = 'red';
// function colors(c) {
//     document.body.style.backgroundColor = c;
// }
// document.getElementById("name").onkeypress = function(e) {
//     console.log(e)
// }
// document.getElementById("go").classList.remove("text")
// document.getElementById("go").classList.add("text")
// window.onscroll = function() {
//     console.log(document.documentElement.scrollTop)
//     if (document.documentElement.scrollTop > 400) {
//         document.getElementById("scroll").style.display = 'block'
//     }
// }
// window.setTimeout(test, 1000)
//     // بيعمل الحاجة مرة واحدة اول ما تفتح الصفحة
// function test() {
//     alert("hi")
// }
// window.setInterval(test, 1000)
//     // بيكرر الحاجة كل مدة زمنية معينة
// function test() {
//     document.write('hello  ');
// }
// let x = 9; let is the best key word to declare the variable
// const PI = 22 / 7;
// console.log(PI);
/////////////////////////////////////////////////
// import { display } from "./user";
// let hi = function hi() {
//     console.log('hi');
// }
// hi();
// arrow function
// let h = () => {
//     console.log('hi');
// }
// h()
/////////////////////////////////////////////////////////////////////
// ////////////////////jquery-/-/-///////////////////
// $("#click").click(function() {
//     $("#text").show(2000);
// });
// $("#click").click(function() {
//     $("#text").hide(2000);
// });
// $("#click").click(function() {
//     $("#text").toggle(300);
// });
// $("#click").click(function() {
//     $("#text").fadeOut(4000);
// })
// $("#click").click(function() {
//     $("#text").fadeToggle(1000);
// })
// $("#click").click(function() {
//     $("#text").slideUp(1000);
// });
// $("#click").click(function() {
//     $("#text").slideDown(1000);
// });
// $("#click").click(function() {
//     $("#text").slideToggle(1000);
// });
// $("#click").click(function() {

//     $("#text").animate({ width: '200px', opacity: '0.1' });
// });
// $("#stop").click(function() {
//     $("#text").stop();
// });
// ///////////////call-back //////////////////
// $("#click").click(function() {
//     $("#text").slideDown(function() {
//         $("#text").hide();
//     });
// });
// ////chain similar to call-back //////////////////////
// $("#click").click(function() {
//     $("#text").slideDown(1000).hide(1000);
// });
// $("#click").click(function() {
//     console.log($("#name").html()); // with html tags
// })
// $("#click").click(function() {
//     console.log($("#val").text()); // without html tags
// })
// $("#click").click(function() {
//     console.log($("#val").val()); // value of input
// })
// $("#click").click(function() {
//     console.log($(".name").html()); // get element by class
// })
// $("#click").click(function() {
//     console.log($("div").html()); // get element by tagname
// })
// $("#click").click(function() {
//     console.log($("#val").val("hi, omar reda"));// insert value for input
// })
// $("#click").click(function() {
//     console.log($("#name").html("<h1>hi omar reda</h1>"));
// })
// $("#click").click(function() {
//     console.log($("#name").text("hi omar reda"));
// })
// $("#click").click(function() {
//     console.log($("#name").append("hi omar reda")); // insert value from end
// })
// $("#click").click(function() {
//     console.log($("#name").prepend("hi omar reda")); // insert value from begging
// })
// $("#click").click(function() {
//     console.log($("#name").after("hi omar reda")); // insert value from end but new line outside the article(div)
// })
// $("#click").click(function() {
//     console.log($("#name").before("hi omar reda")); // insert value from begging but outside the article(div)
// })
// $("#click").click(function() {
//     console.log($("#name").remove()); // remove the entire element
// })
// $("#click").click(function() {
//     console.log($("#name").empty()); // clear the content of an element
// })
////////////class//////////
// $("#click").click(function() {
//     $("#name").addClass("box")
// })
// $("#click").click(function() {
//     $("#name").removeClass("box")
// })
// $("#click").click(function() {
//     $("#name").toggleClass("box")
// })
// ////////////////////////
// //////css in jquery /////////////
// $("#click").click(function() {
//      $("#name").css("color", "red");
// })
///////////////////////////////
// $("#click").click(function() {
//     console.log($("h1").parent()); // parent
// })
// $("#click").click(function() {

//     console.log($("#name").children()); // children
// })
// $("#click").click(function() {

//     console.log($("h1").siblings());
// })