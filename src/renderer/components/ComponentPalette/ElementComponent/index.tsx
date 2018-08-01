import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DragSource } from 'react-dnd';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss')

interface OwnProps {
  connectDragSource: any;
  isDragging: boolean;
  name: string;
}

/**
 * Implements the drag source contract.
 */
const elementComponentSource = {
  beginDrag(props: OwnProps) {
    return {
      text: props.name
    };
  }
};

@DragSource('component', elementComponentSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class ElementComponent extends Component<OwnProps> {
  static propTypes = {
    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDragSource,
      isDragging,
      name,
    } = this.props;
    return connectDragSource(
      <div className={ styles.component } style={{ opacity: isDragging ? 0.5 : 1 }}>
        { `<${ name }>` }
      </div>
    );
  }
}
