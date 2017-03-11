export const toggleAnimation = function() {
  this.setState({playAnimation: !this.state.playAnimation})
  setTimeout(() => this.setState({playAnimation: !this.state.playAnimation}), 3000)
};
