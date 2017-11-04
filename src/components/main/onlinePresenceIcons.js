// React
import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';

const listStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
};

const itemStyle = {
  float: 'left',
  margin: '0',
  padding: '0',
};

const iconStyle = {
  color: '#ffffff',
  margin: '0',
  padding: '0',
};

export default () => (
  <ul style={listStyle}>
    <li style={itemStyle}>
      <IconButton
        containerElement={<Link to="/github" />}
        tooltip="Go to my GitHub"
        tooltipPosition="bottom-center"
        iconStyle={iconStyle}
        linkButton >
        <img alt="" src="https://png.icons8.com/github/p1em/32" width="32" height="32" />
      </IconButton>
    </li>
    <li style={itemStyle}>
      <IconButton
        containerElement={<Link to="/linkedin" />}
        tooltip="Go to my LinkedIn"
        tooltipPosition="bottom-center"
        iconStyle={iconStyle}
        linkButton >
        <img alt="" src="https://png.icons8.com/linkedin-filled/ios7/32" width="32" height="32" />
      </IconButton>
    </li>
  </ul>
);
