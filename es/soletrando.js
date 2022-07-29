// configurations
//  set_lang = 0-pt | 1-en | 3-es
var set_lang = 2;

// set_base = ... implementar carregamento de arquivo.
var set_base = 0;

var pt = 'pt-BR';
var en = 'en-GB';
var es = 'es';
var langs = [pt, en, es];

var intro_words = ['A palavra é: ', 'The word is: ', 'La palabra es: '];
var intro_app = ['Aplicação na frase: ', 'Aplicação na frase em inglês', 'Aplicación en la frase: '];
var intro_dic = ['Significado: ', 'Translate: ', 'Traducción: '];

var info = document.getElementById("info");
var escrita = document.getElementById("escrita");
var noteTextarea = document.getElementById('result_fala');
var microfone = document.getElementById('microfone');

var iword=0;

// randomizar as palavras
words.sort( function(a,b){ return Math.random() - 0.5; } );

var noteContent = '';

if( 'speechSynthesis' in window){
  
  speech = window.speechSynthesis;
  
  try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  }
  catch(e) {
    console.error(e);
    alert('Seu navegador não é compatível!');
  }

}else{
  alert('Seu navegador não é compatível!');
}

recognition.continuous = true;
recognition.lang = set_lang;

recognition.onresult = function(event) {
  console.log("onresult");

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
  noteContent=""; 
  if(!mobileRepeatBug) {
    noteContent += transcript.replace(/\s/g, '');
    noteTextarea.innerHTML = ""+noteContent;
  };
  if(noteContent.toLowerCase()==words[iword].word.toLowerCase()){
    noteContent += " ✔";
  }else{
    noteContent += " ✖";
  };
  noteTextarea.innerHTML = ""+noteContent;
  microfone.innerHTML = "blur_off";
};

recognition.onstart = function() { 
  console.log('Voice recognition activated.');
}

recognition.onspeechend = function() {
  console.log('Voice recognition turned off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    console.log('No speech was detected. Try again.');  
  };
}

function voice(word){
  console.log('Reproduzindo voz...');
  var msg = new SpeechSynthesisUtterance();
  // var voices = window.speechSynthesis.getVoices();
  // msg.voice = voices[voice]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  // msg.volume = 1; // 0 to 1
  msg.rate = 0.9; // 0.24; // 0.1 to 10
  msg.pitch = 1; //0 to 2 // 0.24 en, 
  msg.text = word;
  msg.lang = langs[set_lang];
  
  msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    }

  window.speechSynthesis.speak(msg);
}

function ouvir(){
  voice(intro_words[set_lang] + words[iword].word);
}

function dic(){
  voice(intro_dic[set_lang] + words[iword].dic);
}

function app(){
  voice(intro_app[set_lang] + words[iword].app);
}

function sayWord(word){
  voice(word);
}

function sayLetter(letter){
  voice(letter);
}

function soletrar(){
  var slt_word = words[iword].word;
  var letters = slt_word.split("");
  var iletter=0;

  sayWord(slt_word);
  for (;;) {
    if (iletter >=(letters.length)) break;
    sayLetter( letters[iletter] );
    iletter = iletter + 1;
  }
  sayWord(slt_word);
}

$(function(){
  // speechSynthesis.onvoiceschanged = function() {
  //   var voicelist = 4;
  //   if(voicelist.find('option').length == 0) {
  //     speechSynthesis.getVoices().forEach(function(voice, index) {
  //       var option = $('<option>')
  //       .val(index)
  //       .html(voice.name + (voice.default ? ' (default)' :''));

  //       voicelist.append(option);
  //     });

  //     voicelist.material_select();
  //   }
  // }

  $('#speak').click( function(){
    ouvir( words[iword].word );
  });

  $('#slt').click( function(){
    soletrar();
  });

  $('#frase').click( function(){
    app();
  });

  $('#dic').click( function(){
    dic();
  });

  $('#proxima').click(function(){
    iword+=1;
    if (iword>=150){
      iword=0;
    }
    console.log(info.innerHTML);
    info.innerHTML = 'Palavra '+(iword+1);
    escrita.innerHTML = 'Clique p/ ver';
  })

  $('#anterior').click(function(){
    iword-=1;
    if (iword<0){
      iword=0;
    }
    info.innerHTML = 'Palavra '+(iword+1);
    escrita.innerHTML = 'Clique p/ ver';
  })

  $('#escrita').click(function(){
    if (escrita.innerHTML == 'Clique p/ ver'){
      escrita.innerHTML = words[iword].word;
    }
    else{
      escrita.innerHTML = 'Clique p/ ver';
    }
  });

  // SpeechRecognition
  $('#start-record-btn').on('click', function(e) {
    if (noteContent.length) {
      noteContent += ' ';
    }
    microfone.innerHTML = "blur_on";
    recognition.start();
    console.log('Voice onresult activated.');
  });

  $('#pause-record-btn').on('click', function(e) {
    recognition.stop();
    console.log('Voice recognition paused.');
  });

// end
});