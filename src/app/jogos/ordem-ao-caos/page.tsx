'use client';

import React from 'react';
import Main from '../../../components/Main/Main';
import data from '../../../content/ordem/ordem.json';
import { menuItems } from '../../../content/ordem/links';
import { VideoGallery } from '../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../components/Newsletter/Newsletter';

const Ordem = () => {
  return (
    <>
      <Main
        data={data}
        menuItems={menuItems}
      />
      {/* <VideoGallery data={data} /> */}
      <Newsletter
        variant={'ordem'}
        data={data}
      />
    </>
  );
};

export default Ordem;
