var flame1 = document.querySelector('.flame-1');

var flame2 = document.querySelector('.flame-2');

var flame3 = document.querySelector('.flame-3');

anime({
  targets: flame1,
  translateY: -200,
   loop: true,
  easing: 'easeInOutSine',
  opacity: 0,
  duration:5000,
  direction: 'alternate'
});


anime({
  targets: flame2,
  translateY: -200,
   loop: true,
  easing: 'easeInOutSine',
  opacity: 0,
  delay: 1000,
  duration:8000,
  direction: 'alternate'
});

anime({
  targets: flame3,
  translateY: -200,
   loop: true,
  easing: 'easeInOutSine',
  opacity: 0,
  delay: 1500,
  duration:3000,
   direction: 'alternate'
});
