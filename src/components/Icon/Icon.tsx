import React from 'react';

type Iprops = {
  icon: string;
  className: string;
  [other: string]: any;
};
const Icon = (props: Iprops) => {
  const { icon, className, ...other } = props;
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <svg className={`icon ${className}`} {...other} aria-hidden="true">
      <use xlinkHref={icon} />
    </svg>
  );
};

export default Icon;
