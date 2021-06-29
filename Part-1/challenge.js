var payment = 195;

if (50 >= payment && payment >= 200) {
  console.log(payment * 0.15);
} else if (200 > payment) {
  console.log(payment * 0.2);
} else {
  console.log("no tip");
}
