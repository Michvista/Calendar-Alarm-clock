const dateValue = document.querySelector(".calendar input");
const timeValue = document.querySelector(".time input");
const btn = document.querySelector(".btn")
const audio = document.querySelector("audio")
const p = document.querySelector("p");

let setTimeForAlarm = "";
let intervalId;

function logCurrentTime() {
  const currentTime = new Date();
  
  const minutes = [
  "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
  "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"
];

const seconds = [
  "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
  "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"
];
  
  
const hoursNum = [
  "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24"
  ]
  
  
  const hours = hoursNum[currentTime.getHours()]
  const mins = minutes[currentTime.getMinutes()];
  const secs = seconds[currentTime.getSeconds()];
  
  //format: yy/mm/dd
  
  const date = currentTime.getDate()
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  
  
  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear()

  p.innerHTML = `
    Time&Date: ${year}-${month}-${date} ${hours}:${mins}:${secs}
  `;

  setTimeForAlarm = `${dateValue.value} ${timeValue.value}`
  let compareValues = `${year}-${month}-${date} ${hours}:${mins}`
if (setTimeForAlarm == compareValues) {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      new Notification("Alarm time reached", {
        body: "It's Time!"
      })
    }
  })
  audio.play();
  clearInterval(intervalId)
}

}

btn.addEventListener("click", () => {
  alert("alarm set")
})

//dateValue.addEventListener("change")


intervalId = setInterval(logCurrentTime, 1000);

function forward() {
//  console.log(dateValue.value);
//  console.log(timeValue.value);
 // console.log(setTimeForAlarm);
}
