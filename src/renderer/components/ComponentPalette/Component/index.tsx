import React from 'react';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss');

interface OwnProps {
  name: string;
}

export default (props: OwnProps) => (
  <div className={ styles.component }>
    { `<${ props.name }>` }
  </div>
);
