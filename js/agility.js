function WhackAMole(el, settings) {
  this.el = el;
  this.running = false;
  
  _.assign(this, {
    rows: 4,
    cols: 4,
    duration: 30000, // how long the game lasts
    speed: 1500, // how quickly the moles disappear
    frequency: 3000, // how often new moles appear
    minMoles: 2, // minimum number of moles per cycle
    maxMoles: 4, // maximum number of moles per cycle
    timerEl: null, // element to use for timer
    scoreEl: null // element to use for score counter
  }, settings);
  
  if (this.frequency < this.speed) {
    this.speed = this.frequency;
  }
  
  this.updateScore(0);
    
  this.el.style.width = (this.cols * 50) + "px";
  
  this.holes = this.rows * this.cols;
  
  for (var i = 0; i < this.holes; i++) {
    this.el.appendChild(document.createElement("div"));
  }
  
  this.el.addEventListener("click", (function (event) {
    if (event.target.className === "mole") {
      event.target.className = "";
      this.updateScore(this.score + 1);
    }
  }).bind(this));
  
  return this;
}

WhackAMole.prototype.run = function () {
  if (this.running) {
    var moles = [];
    var numberOfMoles = _.random(this.minMoles, this.maxMoles);
    for (var i = 0; moles.length < numberOfMoles; i++) {
      var newMole = _.random(1, this.holes);
      if (moles.indexOf(newMole) === -1) {
        moles.push(newMole);
        this.el.querySelector("div:nth-child(" + newMole + ")").className = "mole";
      }
    }
    this.hideTimer = setTimeout(this.hideMoles.bind(this), this.speed);
    this.runTimer = setTimeout(this.run.bind(this), this.frequency);
  }
};

WhackAMole.prototype.hideMoles = function () {
  var moles = this.el.querySelectorAll(".mole");
  for (var i = 0; i < moles.length; i++) {
    moles[i].className = "";
  }
};

WhackAMole.prototype.updateScore = function (score) {
  this.score = score;
  if (this.scoreEl) {
    this.scoreEl.innerHTML = this.score;
  }
};

WhackAMole.prototype.countdown = function (seconds) {
  if (this.timerEl) {
    this.timerEl.innerHTML = seconds;
  }
  if (seconds > 0) {
    this.countdownTimer = setTimeout(this.countdown.bind(this, seconds - 1), 1000);
  } else {
    this.stop();
  }
}

WhackAMole.prototype.start = function (duration) {
  if (!this.running) {
    if (typeof duration === "number") {
      this.duration = duration;
    }
    this.running = true;
    this.run();
    this.countdown(this.duration / 1000);
  }
};

WhackAMole.prototype.stop = function () {
  this.running = false;
  clearTimeout(this.runTimer);
  clearTimeout(this.hideTimer);
  clearTimeout(this.countdownTimer);
  this.hideMoles();
  if (confirm("You scored " + this.score + "!\n\nWant to play again?")) {
    this.updateScore(0);
    this.start();
  }
};

var game = new WhackAMole(document.querySelector("#game"), {
  rows: 4,
  cols: 10,
  duration: 30000,
  speed: 2000,
  frequency: 1500,
  minMoles: 3,
  maxMoles: 6,
  scoreEl: document.querySelector("#score"),
  timerEl: document.querySelector("#timer")
});

game.start();
