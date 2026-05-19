const today = new Date();

function getMonthName(mo) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here
  }
  return months[mo];
}

try {
  // statements to try
  monthName = getMonthName(12); // function could throw exception
  console.log(monthName);
} catch (e) {
  monthName = "unknown";
  console.error(e.message);
  // if (e instanceof Error) {
  //   console.error(e.message);
  // }
} finally {
  console.log("Exiting...");
}
