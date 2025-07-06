'use client';

import React from 'react';
import Main from '../../../components/Main/Main';
import data from '../../../content/backstabbers/backstabbers.json';
import { menuItems } from '../../../content/backstabbers/links';
import { VideoGallery } from '../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../components/Newsletter/Newsletter';

const Backstabbers = () => {
  return (
    <>
      <Main
        data={data}
        menuItems={menuItems}
      />
      <VideoGallery data={data} />
      <Newsletter
        variant={'backstabbers'}
        data={data}
      />
    </>
  );
};

export default Backstabbers;
