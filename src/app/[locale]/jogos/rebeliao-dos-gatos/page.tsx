import React from 'react';
import Main from '../../../../components/Main/Main';
import { getRebeliaoLinks } from '../../../../content/rebeliao/links';
import { VideoGallery } from '../../../../components/VideoGallery/VideoGallery';
import Newsletter from '../../../../components/Newsletter/Newsletter';
import { getLocalizedContent } from '../../../../content/getLocalizedContent';
import { Locale } from '../../../../lib/i18n';

const Rebeliao = async ({ params }: { params: { locale: Locale } }) => {
  const { locale } = await params;
  const data = await getLocalizedContent('rebeliao', locale);
  const { menuItems } = await getRebeliaoLinks(locale);

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
        variant='rebeliao'
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

export default Rebeliao;
