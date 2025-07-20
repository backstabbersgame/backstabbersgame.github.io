'use client';
import React, { useEffect, useState } from 'react';
import { Variant } from 'src/types/variant';
import useBreakpoint from '../../hooks/useBreakpoint';

export const HandleContainer = (variant: Variant) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width === undefined) {
    return undefined;
  }

  if (variant === 'solara') {
    if (isMobile) {
      return width === 768 ? { height: '100vh' } : { height: '85vh' };
    } else if (isTablet) {
      return { height: '294px' };
    }
  }
  if (variant === 'backstabbers') {
    if (isMobile) {
      return width === 768
        ? { height: '75vh' }
        : { height: 'clamp(500px, 70vh, 600px)' };
    } else if (isTablet) {
      return { height: '294px' };
    }
  }
  if (variant === 'ordem') {
    if (isMobile) {
      return width === 768
        ? { height: '75vh' }
        : { height: 'clamp(365px, 55vh, 70vh)' };
    } else if (isTablet) {
      return { height: '294px', justifyContent: 'normal' };
    }
  }
  if (variant === 'rebeliao') {
    if (isMobile) {
      return width === 768
        ? { height: '70vh' }
        : { height: 'clamp(365px, 50vh, 70vh)' };
    } else if (isTablet) {
      return { height: '294px', justifyContent: 'space-between' };
    } else {
      return {
        justifyContent: 'space-evenly',
      };
    }
  }
  if (variant === 'armada') {
    if (isMobile) {
      return width === 768
        ? { height: '70vh' }
        : { height: 'clamp(365px, 45vh, 70vh)' };
    } else if (isTablet) {
      return { height: '260px', justifyContent: 'space-between' };
    } else {
      return {
        justifyContent: 'normal',
      };
    }
  }
  if (variant === 'decodica') {
    if (isMobile) {
      return width === 768
        ? { height: '70vh' }
        : { height: 'clamp(365px, 45vh, 70vh)' };
    } else if (isTablet) {
      return { height: '260px', justifyContent: 'space-between' };
    } else {
      return {
        justifyContent: 'normal',
      };
    }
  }
};

export const HandleImageContainer = (variant: Variant): React.CSSProperties => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  if (variant === 'solara') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
        }
      : {};
  }
  if (variant === 'backstabbers') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
        }
      : {};
  }
  if (variant === 'ordem') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
        }
      : {};
  }
  if (variant === 'rebeliao') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
        }
      : {};
  }
  if (variant === 'armada') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '-7px',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
          // height: '40%',
        }
      : isTablet
        ? {
            position: 'absolute',
            left: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : {
            position: 'absolute',
            left: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          };
  }
  if (variant === 'decodica') {
    return isMobile
      ? {
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '-7px',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
          // height: '40%',
        }
      : isTablet
        ? {
            position: 'absolute',
            left: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          }
        : {
            position: 'absolute',
            left: '0',
            bottom: '0',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
          };
  }
  return {};
};

export const HandleImageSize = (variant: Variant): React.CSSProperties => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';

  if (variant === 'solara') {
    return isMobile
      ? { width: '90%', height: 'auto' }
      : isTablet
        ? {
            width: 'auto',
            height: '325px',
          }
        : {
            width: 'auto',
            height: '410px',
          };
  }
  if (variant === 'backstabbers') {
    return isMobile
      ? { width: '115%', height: 'auto' }
      : isTablet
        ? {
            width: 'auto',
            height: '310px',
          }
        : {
            width: 'auto',
            height: '380px',
          };
  }
  if (variant === 'ordem') {
    return isMobile
      ? {
          width: '105%',
          height: 'auto',
          position: 'relative',
          right: '20px',
        }
      : isTablet
        ? {
            width: 'auto',
            height: '325px',
            position: 'relative',
            left: '50px',
          }
        : {
            width: 'auto',
            height: '380px',
          };
  }
  if (variant === 'rebeliao') {
    return isMobile
      ? {
          width: '100%',
          height: 'auto',
          position: 'relative',
          transform: 'translateY(0%)',
        }
      : isTablet
        ? {
            width: 'auto',
            height: '305px',
            position: 'relative',
            transform: 'translateY(1%) translateX(-7%)',
          }
        : {
            width: 'auto',
            height: '380px',
            position: 'relative',
            transform: 'translateY(0.8%)',
          };
  }
  if (variant === 'armada') {
    return isMobile
      ? {
          width: '100%',
          height: 'auto',
          position: 'relative',
          transform: 'translateY(15%)',
        }
      : isTablet
        ? {
            width: 'auto',
            height: '345px',
            position: 'relative',
            transform: 'translateY(12%) translateX(-7%)',
          }
        : {
            width: 'auto',
            height: '480px',
            position: 'relative',
            transform: 'translateY(12%)',
          };
  }
  if (variant === 'decodica') {
    return isMobile
      ? {
          width: '100%',
          height: 'auto',
          position: 'relative',
          transform: 'translateY(-3%)',
        }
      : isTablet
        ? {
            width: 'auto',
            height: '222px',
            position: 'relative',
            transform: 'translateY(1%) translateX(-7%)',
          }
        : {
            width: 'auto',
            height: '407px',
            position: 'relative',
            transform: 'translateY(0.5%)',
          };
  }
  return {};
};
