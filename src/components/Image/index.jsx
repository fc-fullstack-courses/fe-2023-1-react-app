import React from 'react';
import styles from './Image.module.scss';

function Image(props) {
  const { width, height, style, children, ...restProps } = props;

  const divStyles = {
    ...style,
    width: width,
    height: height,
  };

  // const img = React.createElement('img', { ...restProps });

  return (
    <div style={divStyles} className={styles.wrapper} {...restProps}>
      {children}
    </div>
  );
}

export default Image;
