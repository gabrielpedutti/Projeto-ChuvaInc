const seeMore = document.querySelector('.seeMore');
const seeLess = document.querySelector('.seeLess');
const more = document.querySelector('.more');
const paragraphs = document.querySelectorAll('.containerSection p');
const ellipsis = document.querySelector('.ellipsis');
const seeAnswers1 = document.querySelector('.seeAnswers1');
const answers1 = document.querySelector('.answers1')
const seeAnswers2 = document.querySelector('.seeAnswers2');
const answers2 = document.querySelector('.answers2');
const newTopic = document.querySelector('.headerSection3.newTopic');
const headerSection3 = document.querySelector('.headerSection3.info');
const buttonNewTopic = document.querySelector('.topicButton');
const newTopicDoneAll = document.querySelectorAll('.newTopicDone');
const buttonSubmit = document.querySelector('.buttonSubmit')
const menuButton = document.querySelector('.hamburgerDiv');
const menu = document.querySelector('.menu');


seeMore.addEventListener("click", () => {
  more.style.display = "inline";
  paragraphs.forEach(paragraph => {
    paragraph.style.marginBottom = "2rem";
  });
  seeMore.style.display = "none";
  ellipsis.style.display = "none";
})

seeLess.addEventListener("click", () => {
  more.style.display = "none";
  paragraphs.forEach(paragraph => {
    paragraph.style.marginBottom = "0";
  });
  seeMore.style.display = "inline";
  ellipsis.style.display = "inline";
})

seeAnswers1.addEventListener("click", () => {
  if(answers1.style.display === "none") {
    answers1.style.display = "block";
  } else {
    answers1.style.display = "none";
  }
})

seeAnswers2.addEventListener("click", () => {
  if(answers2.style.display === "none") {
    answers2.style.display = "block";
  } else {
    answers2.style.display = "none";
  }
})

buttonNewTopic.addEventListener("click", () => {
  headerSection3.style.display = "none";
  newTopic.style.display = "block";
  buttonNewTopic.style.display = "none";
  newTopicDoneAll.forEach(newTopicDone => {
    newTopicDone.style.display = "none";
  });
})

buttonSubmit.addEventListener("click", () => {
  newTopic.style.display = "none"
  newTopicDoneAll.forEach(newTopicDone => {
    newTopicDone.style.display = "block";
  });
  buttonNewTopic.innerHTML = "criar novo tópico"
  buttonNewTopic.style.width = "14.69rem"
  buttonNewTopic.style.display = "block"
})

menuButton.addEventListener("click", () => {
  menu.style.display = "block"
})