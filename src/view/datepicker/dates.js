function Dates(year) {
  if (parseInt(year, 10) > 2019) {
    year = new Date();
  }
  console.log(year);
  const endDate = new Date(year);
  const startDate = new Date();
  const startYear = endDate.getFullYear() - 2;
  const datesList = {};

  startDate.setFullYear(startYear);

  function formatDate(date) {
    let formattedDate = new Date(date).toUTCString();
    formattedDate = formattedDate
      .split(" ")
      .slice(0, 4)
      .join(" ");

    return formattedDate;
  }

  function formatDateTest(date) {
    let formattedDate = new Date(date).toUTCString();
    var obj = {};
    formattedDate = formattedDate.split(" ");

    obj["year"] = formattedDate[3];
    obj["date"] = formattedDate;

    return obj;
  }

  function getAllDates(startDate, endDate) {
    let index = 0;
    let end = formatDate(endDate);
    let currentDate = formatDate(startDate);

    while (currentDate !== end) {
      let dateIncrement = new Date(startDate);

      dateIncrement.setDate(startDate.getDate() + index);
      currentDate = formatDate(dateIncrement);

      let splitDate = formatDateTest(dateIncrement);
      if (!(splitDate["year"] in datesList)) {
        datesList[splitDate["year"]] = [];
      }
      if (!(splitDate["date"][2] in datesList[splitDate["year"]])) {
        datesList[splitDate["year"]][splitDate["date"][2]] = [];
      }
      datesList[splitDate["year"]][splitDate["date"][2]].push(
        splitDate["date"]
      );
      index++;
    }
  }

  getAllDates(startDate, endDate);

  return datesList;
}

export default Dates;
