import React from "react";

class Todo extends React.Component {
  // shouldComponentUpdate(previousProps) {
  //   previousProps.
  // }
  render() {
    const {
      data: { text, users }
    } = this.props;

    return (
      <li className="media" style={{ borderBottom: "1px solid #ccc" }}>
        <div className="media-left" />
        <div className="media-body">
          <h4 className="media-heading">{text}</h4>
        </div>
      </li>
    );
  }
}

export default Todo;