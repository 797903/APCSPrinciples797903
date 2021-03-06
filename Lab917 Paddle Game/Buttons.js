class buttons{
  constructor(x, y, w, h, msg, clr){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.message = msg;
    this.clr = clr;
  }

  run(){
    this.render();
    this.buttonIsClicked();
    }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h, this.message, this.clr);
  }

  buttonIsClicked(){
    if(mouseIsPressed && mouseX >
      this.loc.x && mouseX <
      this.loc.x+this.w && mouseY >
      this.loc.y && mouseY <
      this.loc.y+this.h){
        return true;
      }
    }
  }
