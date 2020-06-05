// 'use strict';

function Calculator() {
  this.x = null;
  this.y = null;
  this.read = () => {
    this.x = prompt('x=', '');
    this.y = prompt('y=', '');
  };
  this.sum = () => this.x + this.y;
  this.mul = () => this.x * this.y;
}
