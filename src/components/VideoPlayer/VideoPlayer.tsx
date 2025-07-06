'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './VideoPlayer.module.scss';
import {
  SpeakerSimpleHighIcon,
  SpeakerSimpleSlashIcon,
} from '@phosphor-icons/react/dist/ssr';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
    _YTReadyCallbacks?: (() => void)[];
    _YTReady?: boolean;
  }
}

export interface VideoPlayerProps {
  videoId: string;
  title?: string;
  startMuted?: boolean;
  isMain?: boolean;
  onEnded?: () => void; 
}

const loadYouTubeAPI = () => {
  if (window.YT && window.YT.Player) {
    window._YTReady = true;
    return Promise.resolve();
  }
  if (!window._YTReadyCallbacks) window._YTReadyCallbacks = [];
  return new Promise<void>((resolve) => {
    window._YTReadyCallbacks!.push(resolve);
    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        window._YTReady = true;
        window._YTReadyCallbacks?.forEach((cb) => cb());
        window._YTReadyCallbacks = [];
      };
    }
  });
};

const VideoPlayer = ({
  videoId,
  title,
  startMuted = true,
  isMain = false,
  onEnded, 
}: VideoPlayerProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(startMuted);

  useEffect(() => {
    let destroyed = false;
    loadYouTubeAPI().then(() => {
      if (destroyed) return;
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          showinfo: 0,
          enablejsapi: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            if (startMuted) {
              event.target.mute();
              setMuted(true);
            }
            event.target.playVideo();
            setPlaying(true);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) setPlaying(true);
            if (event.data === window.YT.PlayerState.PAUSED) setPlaying(false);
            if (event.data === window.YT.PlayerState.ENDED) {
              setPlaying(false);
              if (onEnded) onEnded();
            }
          },
        },
      });
    });
    return () => {
      destroyed = true;
      if (ytPlayer.current && ytPlayer.current.destroy) {
        ytPlayer.current.destroy();
      }
    };
  }, [videoId, onEnded, startMuted]); 

  const handleMuteToggle = () => {
    if (!ytPlayer.current) return;
    if (muted) {
      ytPlayer.current.unMute();
      setMuted(false);
    } else {
      ytPlayer.current.mute();
      setMuted(true);
    }
  };

  return (
    <div className={`${styles.wrapper} ${isMain ? styles.main : ''}`}>
      <div className={styles.playerBox}>
        <div
          ref={playerRef}
          className={styles.youtubeFrame}
        ></div>
        {isMain && <div className={styles.overlay} />}
      </div>
      <div className={styles['control-wrapper']}>
        {isMain && muted ? (
          <button
            className={styles.button}
            onClick={handleMuteToggle}
          >
            <SpeakerSimpleSlashIcon
              size={20}
              className={styles.speaker}
            />
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={handleMuteToggle}
          >
            <SpeakerSimpleHighIcon
              size={20}
              className={styles.speaker}
            />
          </button>
        )}
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
