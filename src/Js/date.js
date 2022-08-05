const weekNumber = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
};
const dateTime = () => {
  const date = new Date();
  const today = date.getDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const week = weekNumber[today + 1];
  const year = date.getFullYear();

  return (
    <p className="currentDate">
      {week},{month} {today}, {year}
    </p>
  );
};

export default dateTime;
