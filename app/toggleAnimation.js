export const animationOff = function() {
  this.setState({playAnimation: false})
}

export const animationOn = function() {
  console.log(this)
  this.setState({playAnimation: true})
  setTimeout(this.animationOff, 2000)
};
