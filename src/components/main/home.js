import React from 'react';
import CustomTheme from 'src/themes/customtheme';
import logo from 'src/assets/logo3.svg';

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
  marginLeft: '25em',
  marginRight: '25em',

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
         me is that I like to learn and build stuff. In my spare time am ussually
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
        Feel free to check out some of my projects and or other aspects about me.
        Try visiting my GitHub to see what software projects am working on.
        Please note, this site was my first attempt at building a site and as such
        it is not the best but hopefully useable. Site is still under construction.
      </p>
    </div>
  </div>
);
