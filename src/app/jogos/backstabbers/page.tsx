'use client';

import React from 'react';
import Main from '../../../components/Main/Main';
import data from '../../../content/backstabbers/backstabbers.json';
import { menuItems } from '../../../content/backstabbers/links';
import { VideoGallery } from '../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../components/Newsletter/Newsletter';

const componentsMap = {
  Main: () => (
    <Main
      data={data}
      menuItems={menuItems}
    />
  ),
  VideoGallery: () => <VideoGallery data={data} />,
  Newsletter: () => (
    <Newsletter
      variant='backstabbers'
      data={data}
    />
  ),
};
const Backstabbers = () => {
  return (
    <>
      {data.inicio.sections
        .filter((section) => section.visible)
        .map((section) => {
          const Component = (componentsMap as any)[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component()}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default Backstabbers;
