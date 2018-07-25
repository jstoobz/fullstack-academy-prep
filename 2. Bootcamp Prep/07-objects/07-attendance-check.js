const attendanceCheck = (day) => {
  const presentStudents= [];

  for (let i = 0; i < classRoom.length; i++) {
    const studentObj = classRoom[i];
    const [studentName, studentAttendanceArray] = Object.entries(studentObj)[0];

    for (let j = 0; j < studentAttendanceArray.length; j++) {
      const dayObj = studentAttendanceArray[j];
      const [nameOfDay, presentOnDay] = Object.entries(dayObj)[0];

      if (nameOfDay === day && presentOnDay) presentStudents.push(studentName);
    }
  }

  return presentStudents;
}

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

console.log(attendanceCheck('Monday'));
// console.log(attendanceCheck('Wednesday'));