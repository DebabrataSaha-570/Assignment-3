// https://github.com/DebabrataSaha-570/Assignment-3


//my personal kilometerToMeter calculator

function kilometerToMeter(kilometer) {

  var meter = kilometer * 1000;

  if (kilometer < 0) {

    console.log("Distance can not be negative");

  }

  return meter;
}




//my personal budgetCalculator

function budgetCalculator(watch, phone, laptop) {

  var totalWatchPrice = watch * 50;

  var totalPhonePrice = phone * 100;

  var totalLaptopPrice = laptop * 500;

  var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

  if (watch < 0 || phone < 0 || laptop < 0) {

    console.log("Price can not be negative");

  }

  return total;
}


// my personal hotelCost calculator


function hotelCost(days) {

  var totalCost = 0;
  
  if (days <= 10) {

    totalCost = days * 100;
  }

  else if (days <= 20) {

    var firstPart = 10 * 100;

    var remaining = days - 10;

    var secondPart = remaining * 80;

    totalCost = firstPart + secondPart;

  }

  else {

    var firstPart = 10 * 100;

    var secondPart = 10 * 80;

    var remaining = days - 20;

    var thirdPart = remaining * 50;

    totalCost = firstPart + secondPart + thirdPart;

  }

  return totalCost;
}



// megaFriend function

function megaFriend(friends) {

  var max = friends[0]

  for (var i = 0; i < friends.length; i++) {

      var element = friends[i];

      if (element.length > max.length) {

          max = element;
      }
  }
  return max;
}


var friendList = ["Jhankar Mahbub","Programming-hero-community","Shiful Islam Bappi", "saiful Alam", "Joy banik","tawsif ahnaf","Mithun sutradhar"];


console.log(megaFriend(friendList));

console.log(hotelCost(30));

console.log(budgetCalculator(5, 5, 5));

console.log(kilometerToMeter(2));












