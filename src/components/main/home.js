import React from 'react';
import CustomTheme from '../../themes/customtheme';
import logo from '../../assets/logo3.svg';

const styleHeader2 = {
  textAlign: 'center',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: CustomTheme.palette.primary1Color,
};

const styleBody = {
  textAlign: 'left',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',
  marginLeft: '10em',
  marginRight: '10em',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: '#FFF',
};

const styleHome = {
  textAlign: 'center',
  paddingTop: '0',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',

  /* bring your own prefixes */
  color: '#000000',
  backgroundColor: '#FFF',
};


const titleMessage = 'Hi, I\'m Matthew';
const subTitleMessage = 'and this is my site!';

export default () => (
  <div style={styleHome}>
    <div style={styleHeader2}>
      <img src={logo} alt="MP" />
      <h1 style={styleHeader2}>{titleMessage}</h1>
      <h2 style={styleHeader2}>{subTitleMessage}</h2>
    </div>
    <div style={styleBody}>
      <p>
          What I think is important to know about
          me is I like to learn and build stuff. I spend most of my spare time
          building something or programming.
        <br />
        <br />
          My education is in electrical and computer engineering, recieving a BENG degree from
          DalHousie University in 2015. I have worked, since 2015, developing freely
          available 3D CAD software, ProtocaseDesigner, at Protocases as a
          Software Engineer. I have also done other things but the majority of time
          has been at Protocase.
        <br />
        <br />
          Feel free to check out my site. I have a project and about me sections.
          Also, try visiting my GitHub to see software projects am working on.
          Please note, this site was my first attempt at building a site and as such
          it is not the best.
      </p>
    </div>
  </div>
);
