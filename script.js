// dennis dayan
function datecalc(){
  var day = new Date(document.getElementById("datepicker").value);
  var dayStr = day.toString();
  if(result == null){
    var result = "Invalid Date"
  }
  if(dayStr.includes("Mon")){
    var result = "A Day"
  }
  if(dayStr.includes("Tue")){
    var result = "B Day"
  }
  if(dayStr.includes("Wed")){
    var result = "A and B Day Schedule"
  }
  if(dayStr.includes("Thu")){
    var result = "B Day"
  }
  if(dayStr.includes("Fri")){
    var result = "A Day"
  }
  if(dayStr.includes("Sat") || dayStr.includes("Sun")){
    var result = "Weekend"
  }
  if(dayStr.includes("Jan 18")){
    var result = "MLK Day"
  }
  if(dayStr.includes("Feb 17")){
    var result = "Presidents Day"
  }
  if(dayStr.includes("May 25")){
    var result = "Memorial Day"
  }
  if(dayStr.includes("Aug") || dayStr.includes("Jul")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 22")){
    var result = "Last day of school"
  }
  if(dayStr.includes("Jun 23")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 24")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 25")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 26")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 27")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 28")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 29")){
    var result = "Summer"
  }
  if(dayStr.includes("Jun 30")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 1")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 2")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 3")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 4")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 5")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 6")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 7")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 8")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 9")){
    var result = "Summer"
  }
  if(dayStr.includes("Sep 10")){
    var result = "First day of school - A Day"
  }
  document.getElementById("result").innerHTML = (result)
}
// perfectly 100 lines, as all things should be