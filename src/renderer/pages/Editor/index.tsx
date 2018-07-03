import React from 'react';

import ComponentPalette from 'components/ComponentPalette';
import Grid from 'components/Grid';

const styles = require('./styles.scss');

export default () => (
  <div className={ styles.editor }>
    <ComponentPalette />
    <Grid />
  </div>
);
