import React, { useState, useRef, useEffect } from 'react';
import './css/Music.css';

// Audio imports
import track0010 from './assets/music/0010.mp3';
import dontTrustMe from './assets/music/dont trust me.mp3';
import echo from './assets/music/echo.mp3';
import iBlameMe from './assets/music/I blame me.mp3';
import snaps from './assets/music/snaps.mp3';
import spoonHead from './assets/music/spoon_head.mp3';

import cover0010 from './assets/music/artworks-xRMvZAy34qmYojQ2-x7Z3Kg-t500x500.png';
import coverDontTrustMe from './assets/music/artworks-roBwafp6oQzmt5T1-knWk6Q-t500x500.png';
import coverEcho from './assets/music/artworks-mW2n3KE5g4mnplAP-7oSPqQ-t500x500.png';
import coverIBlameMe from './assets/music/artworks-dRx69JhF0DJstS0h-zo795Q-t500x500.png';
import coverSnaps from './assets/music/artworks-jwjDUovYdXlovnrt-GSkGWw-t500x500.png';
import coverSpoonHead from './assets/music/artworks-zCxsy0KcViwyLyYB-B69SSg-t500x500.png';

const tracksData = [
  {
    title: "0010",
    genre: "Psy Trance",
    cover: cover0010,
    audio: track0010
  },
  {
    title: "Don't Trust Me",
    genre: "Drum & Bass",
    cover: coverDontTrustMe,
    audio: dontTrustMe
  },
  {
    title: "Echo",
    genre: "House",
    cover: coverEcho,
    audio: echo
  },
  {
    title: "I Blame Me",
    genre: "Ambient",
    cover: coverIBlameMe,
    audio: iBlameMe
  },
  {
    title: "Snaps",
    genre: "Jersey/Dance/Electronic",
    cover: coverSnaps,
    audio: snaps
  },
  {
    title: "Spoon Head",
    genre: "Jersey/House/Electronic",
    cover: coverSpoonHead,
    audio: spoonHead
  }
];

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying,    setIsPlaying   ] = useState(false);
  const [progress,     setProgress    ] = useState(0);
  const [duration,     setDuration    ] = useState(0);
  const [volume,       setVolume      ] = useState(1);

  const audioRef = useRef(null);

  const handleSelectTrack = (track) => {
    if (currentTrack?.audio === track.audio) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setProgress(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      setVolume(1);
      if (audioRef.current) audioRef.current.volume = 1;
    }
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = volume;
      setIsPlaying(true);
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="music" className="py-24 bg-[#0a0a0a] text-neutral-100 px-6 border-t border-neutral-900 font-sans pb-32">
      
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.audio}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">Music & Audio Production</h2>
            <p className="text-xs sm:text-sm text-neutral-400">Selected tracks and electronic productions.</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 w-fit">
            FL Studio // Audio
          </div>
        </div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracksData.map((track, index) => {
            const isThisPlaying = currentTrack?.audio === track.audio && isPlaying;

            return (
              <div 
                key={index}
                className={`group relative bg-neutral-900/50 border rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl hover:shadow-black/80 ${
                  isThisPlaying 
                    ? 'border-neutral-500 bg-neutral-900/80 shadow-lg shadow-white/5' 
                    : 'border-neutral-800/80 hover:border-neutral-700/80'
                }`}
              >
                {/* Artwork Container */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-950 border border-neutral-700/60 sm:border-neutral-800/60 shadow-inner flex items-center justify-center">
                  {track.cover ? (
                    <img 
                      src={track.cover} 
                      alt={track.title} 
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        isThisPlaying ? 'opacity-100 scale-105' : 'opacity-95 sm:opacity-85 group-hover:opacity-100'
                      }`}
                    />
                  ) : (
                    <div className="text-neutral-700">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                  )}

                  {/* Play/Pause Overlay - Permanent mini indicator on mobile, full hover on desktop */}
                  <button
                    onClick={() => handleSelectTrack(track)}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                      isThisPlaying 
                        ? 'bg-black/40 backdrop-blur-[2px] opacity-100' 
                        : 'bg-black/20 sm:bg-black/40 sm:backdrop-blur-[2px] opacity-100 sm:opacity-0 sm:group-hover:opacity-100'
                    }`}
                    aria-label={isThisPlaying ? "Pause" : "Play"}
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 sm:bg-white text-black flex items-center justify-center shadow-xl transform group-hover:scale-105 active:scale-95 transition-all">
                      {isThisPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>

                {/* Track Details */}
                <div>
                  <h3 className="text-sm font-semibold text-white transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1">
                    {track.genre || "Electronic"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Subtle Floating Player Bar */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-neutral-800/80 px-4 sm:px-6 py-2.5 shadow-2xl">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 h-10">
            
            {/* 1. Cover + Track Info */}
            <div className="flex items-center gap-3 min-w-[120px] sm:min-w-[180px] max-w-[200px] flex-shrink-0">
              {currentTrack.cover && (
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.title} 
                  className="w-8 h-8 rounded-md object-cover border border-neutral-700 flex-shrink-0 shadow-sm"
                />
              )}
              <div className="min-w-0">
                <h4 className="font-medium text-white truncate text-xs leading-snug">
                  {currentTrack.title}
                </h4>
                <p className="text-[10px] font-mono text-neutral-500 truncate">
                  {currentTrack.genre || "Electronic"}
                </p>
              </div>
            </div>

            {/* 2. Seeker */}
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <span className="text-[10px] font-mono text-neutral-500 w-7 text-right flex-shrink-0">
                {formatTime(progress)}
              </span>
              <input 
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-neutral-800 rounded-lg cursor-pointer appearance-none accent-white hover:bg-neutral-700 transition-colors"
              />
              <span className="text-[10px] font-mono text-neutral-500 w-7 flex-shrink-0">
                {formatTime(duration)}
              </span>
            </div>

            {/* 3. Play / Pause Button */}
            <button 
              onClick={() => handleSelectTrack(currentTrack)}
              className="p-2 rounded-full bg-white text-black hover:scale-105 transition-transform flex-shrink-0 shadow-sm"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* 4. Volume Slider */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <button 
                onClick={toggleMute}
                className="text-neutral-500 hover:text-neutral-300 transition-colors"
                aria-label="Toggle Mute"
              >
                {volume === 0 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.536 8.464a5 5 0 010 7.072" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.314M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <input 
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-neutral-800 rounded-lg cursor-pointer appearance-none accent-white hover:bg-neutral-700 transition-colors"
              />
            </div>

            {/* 5. Close Button */}
            <button 
              onClick={() => {
                if (audioRef.current) audioRef.current.pause();
                setCurrentTrack(null);
                setIsPlaying(false);
              }}
              className="p-1 text-neutral-500 hover:text-neutral-300 rounded-md transition-colors flex-shrink-0"
              aria-label="Close player"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>
        </div>
      )}

    </section>
  );
}