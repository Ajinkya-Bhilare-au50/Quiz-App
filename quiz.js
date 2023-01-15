let quizData = [
  {
    id: 0,
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
    userchoice: "",
  },
  {
    id: 1,
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    userchoice: "",
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    userchoice: "",
  },
  {
    id: 3,
    question: "In which year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
    userchoice: "",
  },
  {
    id: 4,
    question: "who was the Founder of Indian Navy",
    a: "Chhatrapati Shivaji Maharaj",
    b: "Rani Laxmibai",
    c: "Chhatrapati Sambhaji Maharaj",
    d: "Chhatrapati Shahu Maharaj",
    correct: "a",
    userchoice: "",
  },
  {
    id: 5,
    question:
      "During the first world war,which country signed the Peace treaty(1917) with Germany",
    a: "England",
    b: "USA",
    c: "Russia",
    d: "Austria",
    correct: "c",
    userchoice: "",
  },
  {
    id: 6,
    question: "When did UK declared war on Germany",
    a: "4th April 1939",
    b: "18th August 1939",
    c: "28th August 1939",
    d: "3rd september 1939",
    correct: "d",
    userchoice: "",
  },
  {
    id: 7,
    question: "In Which year,America joined Second World War",
    a: "1939",
    b: "1940",
    c: "1941",
    d: "1942",
    correct: "c",
    userchoice: "",
  },
  {
    id: 8,
    question: "Who were the axis powers in World War-II",
    a: "Poland,Japan,Germany",
    b: "Germany ,Italy,Japan",
    c: "Germany,Italy,France",
    d: "Germany,Italy,Britain",
    correct: "b",
    userchoice: "",
  },
  {
    id: 9,
    question: "Pearl Harbour,an American Naval and Airforce base was attacked by",
    a: "Germany",
    b: "Japan",
    c: "France",
    d: "Britain",
    correct: "b",
    userchoice: "",
  },
];

arrLength = quizData.length;

let selectedQstn = 0;

function startQuiz() {}

window.onload = () => {
  console.log("Page loaded..");
  selectedQstn = 0;
  loadQuestion(selectedQstn);
};

function loadQuestion(id = 0) {
  // quizData.forEach(function (arrayItem) {
  //   if(arrayItem.userchoice!="")
  //   var x = arrayItem.userchoice;
  //   console.log("userchoice",x);
  // });

  // console.log("question load called..");
  selectedQstn = id;
  let currentQstn = quizData.find((qstn) => qstn.id === id);

  console.log("question Found : ", currentQstn);
  document.getElementById("currentQuestion").innerHTML = currentQstn.question;
  document.getElementById("qstnNumber").innerHTML = currentQstn.id + 1;

  document.getElementById("optionA").innerHTML = currentQstn.a;
  document.getElementById("optionB").innerHTML = currentQstn.b;
  document.getElementById("optionC").innerHTML = currentQstn.c;
  document.getElementById("optionD").innerHTML = currentQstn.d;
}

document.getElementById("next").addEventListener("click", () => {
  console.log("temp : ", selectedQstn);

  userAns = document.querySelector('input[name="option"]:checked').value;
  quizData = quizData.map((q) => {
    console.log("mapping..");
    if (q.id === selectedQstn) {
      // console.log("to update ans..", userAns, q.id, selectedQstn);
      return { ...q, userchoice: userAns };
    } else return q;
  });
  // console.log("Updated quiz data : ", quizData);

  if (selectedQstn < quizData.length - 1) {
    selectedQstn = selectedQstn + 1;
    // console.log("we are on  nextclick");

    next(selectedQstn);
  }
});

document.getElementById("previous").addEventListener("click", () => {
  // console.log("temp : ", selectedQstn);

  userAns = document.querySelector('input[name="option"]:checked').value;
  quizData = quizData.map((q) => {
    console.log("mapping..");
    if (q.id === selectedQstn) {
      console.log("to update ans..", userAns, q.id, selectedQstn);
      return { ...q, userchoice: userAns };
    } else return q;
  });
  console.log("Updated quiz data : ", quizData);

  if (selectedQstn > 0) {
    selectedQstn = selectedQstn - 1;
    // console.log("temp : ", selectedQstn);
    // console.log("we are on previous click");
    previous(selectedQstn);
  }
});

function next(selectedQstn) {
  // console.log("Next called..");
  // console.log(
  //   "we are here",
  //   document.querySelector('input[name="option"]:checked').value
  // );

  reset();
  set2 = quizData[selectedQstn].userchoice;
  if (set2 == "a") {
    document.getElementById("option1").checked = true;
  } else if (set2 == "b") {
    document.getElementById("option2").checked = true;
  } else if (set2 == "c") {
    document.getElementById("option3").checked = true;
  } else if (set2 == "d") {
    document.getElementById("option4").checked = true;
  }

  loadQuestion(selectedQstn);
}
function previous(selectedQstn) {
  // console.log("Previous called..");
  reset();

  set = quizData[selectedQstn].userchoice;
  if (set == "a") {
    document.getElementById("option1").checked = true;
  } else if (set == "b") {
    document.getElementById("option2").checked = true;
  } else if (set == "c") {
    document.getElementById("option3").checked = true;
  } else if (set == "d") {
    document.getElementById("option4").checked = true;
  }

  loadQuestion(selectedQstn);
}

function reset() {
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("option3").checked = false;
  document.getElementById("option4").checked = false;
}

const submit = document.getElementById("submmit");
submit.addEventListener("click", () => {
  result();
});
function result() {
  let right = 0;
  let wrong = 0;
  quizData.forEach((element) => {
    if (element.correct === element.userchoice) {
      right++;
     
    } else {
      wrong++;
    }
  });
  // console.log("wrong is " + wrong);
  // console.log("right count is " + right);

  document.getElementById("right").innerHTML = `Right-${right}`;
  document.getElementById("wrong").innerHTML = `Wrong-${wrong}`;
  document.getElementById("congra").classList.add("visible");
  document.getElementById("trophy").classList.add("visible");
  document.querySelector("#congo").innerHTML = right;

}
