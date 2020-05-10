class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Nam");
    var button = createButton('Play');
   
    //input.style("background-color",  "red");
    //input.style("color","pink");
    //input.style("padding","30px");
    //input.style("border", "2px solid orange");
   // input.style("border-radius", "5px");
    //input.style("box-shadow" ,"3px 3px 8px 0 #000");
    //button.style("background-color",  "yellow");s
    //button.style("opacity",0.5);
    
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
