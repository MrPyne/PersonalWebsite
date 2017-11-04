import React from 'react';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText } from 'material-ui/Card';

import Logo from 'src/assets/tevo-logo.png';

export default () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="3D Printer Project Tarantula" subtitle="Tevo Tarantula" />}>
      <img src={Logo} alt="" />
    </CardMedia>
    <CardText>
      I set out to create a 3D printer and decided to meet it half way. This is
      why I choose a DIY kit. The reason I went with the TevoTarantula was mostly due
      postive things people were saying about it and the price was relative low.
      Other than some mods which I plan on doing phase 1 of this project is
      complete. I plan on using my TevoTarantula for future projects.

      <br />
      <br />
      !!!!PICTURES GO HERE!!!!
    </CardText>
  </Card>
);
