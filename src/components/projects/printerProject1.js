import React from 'react';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText } from 'material-ui/Card';

import Logo from '../../assets/tevo-logo.png';

export default () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="3D Printer Project Tarantula" subtitle="Tevo Tarantula" />}>
      <img src={Logo} alt="" />
    </CardMedia>
    <CardText>
      I set out to create a 3D printer and ended up to meeting it half way with a DIY kit.
      The reason I went with the TevoTarantula was mostly due
      postive things people were saying about it and the price was relative low.
      Other than some mods which I plan on doing I consider it complete for now.
      I do plan on using my TevoTarantula for future projects.
    <br />
    <br />
      To be continued.
    </CardText>
  </Card>
);
