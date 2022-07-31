const quiz = [
  {
    question:'リンゴの色は？',
    answers:[
    '赤',
    '青',
    '黄',
    '緑'
    ],
    correct: '赤'
  },  
  {
    question:'リンゴの大きさは？',
    answers:[
    '1cm',
    '2cm',
    '3cm',
    '4cm'
    ],
    correct: '4cm'
  },
  {
    question:'リンゴっておいしい？',
    answers:[
    'おいしい',
    'まずい',
    '人それぞれ',
    '品種による'
    ],
    correct: '品種による'
  }
  ]

    
    
let quizIndex = 0
let score = 0;
const $button = document.getElementsByTagName('button')
let buttonLength =$button.length;
let quizLength = quiz.length;


//クイズの問題分、選択し
const setupQuiz = () =>  {
  console.log(document.getElementById('js-question').textContent = quiz[quizIndex].question);
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    console.log($button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]);
    buttonIndex++;
  }
}

setupQuiz(quizIndex)

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解"');
    score++;
  }else{
    window.alert('不正解!');
    console.log(quiz[quizIndex].correct);
    console.log(e.target.textContent);  
  }
  
  quizIndex++;
  
  if(quizIndex < quizLength){
    setupQuiz()
  }else {

    window.alert('終了！あなたの正解数は'+score+"/"+ quizLength + 'です！');
  }
}


//ボタンをクリックしたら製誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e,quizIndex)
  });
  handlerIndex++;
}

