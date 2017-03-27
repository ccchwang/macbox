export const toggleAnimation = function(animation) {
  this.setState({[animation]: !this.state[animation]})

  setTimeout(() => this.setState({[animation]: !this.state[animation]}), 2000)
};
