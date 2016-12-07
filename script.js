$(document).ready(function(){
  var randomNum;
  var randomQuote;
  var randomAuthor;
  getQuote();
  function getQuote(){
    var quotes = ['The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.', 'Never memorize something that you can look up.','Science without religion is lame, religion without science is blind.','If we knew what it was we were doing, it would not be called research, would it?',"Somewhere, something incredible is waiting to be known.","The important thing is not to stop questioning. ","An expert is a person who has made all the mistakes that can be made in a very narrow field.","That which can be asserted without evidence, can be dismissed without evidence.","The good thing about science is that it's true whether or not you believe in it.","Science is not only compatible with spirituality. It is a profound source of spirituality.","If you wish to make an apple pie from scratch, you must first invent the universe.","Any sufficiently advanced technology is indistinguishable from magic."];
    var author = ['Isaac Asimov','Albert Einstein','Albert Einstein','Albert Einstein','Carl Sagan','Albert Einstein','Niels Bohr','Christopher Hitchens','Neil deGrasse Tyson','Carl Sagan','Carl Sagan','Arthur C. Clarke'];
    
    randomNum = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];
    
    $("#quote").text(randomQuote);
    $("#author").text(randomAuthor);
  }
  $("#newQuote").on("click", function(){
    getQuote();
  });
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'"'+" -"+randomAuthor+' %23FreeCodeCamp')
  });
})
