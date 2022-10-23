import React from "react";

/*class HtmlFooter extends Component {
  render() {
    return (
      <footer>
        <h3>{this.props.msg}</h3>
      </footer>
    );
  }
}*/

function HtmlFooter(prop) {
  return (
    <footer>
      <h3>{prop.msg}</h3>
    </footer>
  );
}

export default HtmlFooter;
