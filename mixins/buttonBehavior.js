export default {
  componentWillMount () {
    this.state.clickable = true;
  },

  onClick () {
    this.setState({
      showText: !this.state.showText
    });
  },
};
