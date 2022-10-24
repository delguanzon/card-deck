window.addEventListener("load", function(){
  const body = document.querySelector("body");

  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const ranks = ["ace",2,3,4,5,6,7,8,9,10, "jack", "queen", "king"];

  const deck = [];
  const ul = document.createElement("ul");
  body.append(ul);

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {

      deck.push(rank + " of " + suit);

      // const li = document.createElement("li");
      // li.append(rank + " of " + suit);
      // ul.append(li);
    });
  });

  deck.forEach(function(card){
    const li = document.createElement("li");
    li.append(card);
    ul.append(li);
  });

});