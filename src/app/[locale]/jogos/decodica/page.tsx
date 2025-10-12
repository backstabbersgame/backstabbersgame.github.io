'use client';

import React from 'react';
import Main from '../../../../components/Main/Main';
import { getDecodicaLinks } from '../../../../content/decodica/links';
import { VideoGallery } from '../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../components/Newsletter/Newsletter';
import { getLocalizedContent } from '../../../../content/getLocalizedContent';
import { Locale } from '../../../../lib/i18n';

const Decodica = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await params;
  const data = await getLocalizedContent('decodica', locale);
  const { menuItems } = await getDecodicaLinks(locale);

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
        variant='decodica'
        data={data}
      />
    ),
  };

  interface Section {
    visible: boolean;
    component: keyof typeof componentsMap;
  }

  return (
    <>
      {data.inicio.sections
        .filter((section: Section) => section.visible)
        .map((section: Section) => {
          const Component = componentsMap[section.component];
          return Component ? (
            <React.Fragment key={section.component}>
              {Component()}
            </React.Fragment>
          ) : null;
        })}
    </>
  );
};

export default Decodica;
