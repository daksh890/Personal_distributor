// function([string1, string2],target id,[color1,color2])    
 consoleText(['Decentralized Distribution.','Progress with People.', 'You Produce. We Sell.','You Plan. We Execute.','Push through Retailers.','Online Rules, Offline Trade.','Preach your Product.','Hire Product Persuaders.', 'Built new Costumers.', 'Get instant Feedback.','Market your Mission.', 'Learn and Improve.'], 'text',['#262626']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#3B3838'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 10)
      } 
      else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount = 0;
          waiting = false;
        }, 100)
      } 
      else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 180)
    
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'

        visible = true;
      }
    }, 10)

    window.onload = () => {
      const dog = document.getElementById("dog");
      const dogImgPaths = ["./Images/actual/1.jpg","./Images/actual/2.jpg", "./Images/actual/3.jpg", "./Images/actual/4.jpg","./Images/actual/5.png", "./Images/actual/6.png"];
      let index = 0;
      setInterval(() => {
        index = (index + 1) % dogImgPaths.length;
        dog.src = dogImgPaths[index];
      }, 8950);
    }
  }