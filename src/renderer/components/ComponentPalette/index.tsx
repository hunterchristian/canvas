import React from 'react';

import Component from 'components/ComponentPalette/Component';

// bypass TypeScript by using a 'require' rather than 'import'
const styles = require('./styles.scss');

export default () => (
  <div className={ styles.componentPalette }>
    <Component name="div" />
    <Component name="span" />
    <Component name="h1" />
    <Component name="h2" />
    <Component name="h3" />
    <Component name="a" />
  </div>
);
