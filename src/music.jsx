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
    genre: "Electronic",
    cover: coverSnaps,
    audio: snaps
  },
  {
    title: "Spoon Head",
    genre: "Drum & Bass",
    cover: coverSpoonHead,
    audio: spoonHead
  }
];

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

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
                className="group relative bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl hover:shadow-black/80"
              >
                {/* Artwork Container */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-950 border border-neutral-800/60 flex items-center justify-center">
                  {track.cover ? (
                    <img 
                      src={track.cover} 
                      alt={track.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isThisPlaying ? 'opacity-90 scale-105' : 'opacity-70 group-hover:opacity-100'
                      }`}
                    />
                  ) : (
                    /* Fallback Icon if cover path is missing */
                    <div className="text-neutral-700">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                  )}

                  {/* Play/Pause Overlay */}
                  <button
                    onClick={() => handleSelectTrack(track)}
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-200 ${
                      isThisPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    aria-label={isThisPlaying ? "Pause" : "Play"}
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
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
                  <h3 className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors truncate">
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

      {/* Floating Sticky Audio Player Bar */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-neutral-800 px-6 py-3 shadow-2xl animate-fadeIn">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full md:w-1/4">
              {currentTrack.cover && (
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.title} 
                  className="w-10 h-10 rounded-lg object-cover border border-neutral-800"
                />
              )}
              <div className="overflow-hidden">
                <h4 className="text-xs font-semibold text-white truncate">{currentTrack.title}</h4>
                <p className="text-[10px] font-mono text-neutral-400 truncate">{currentTrack.genre || "Electronic"}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5 w-full md:w-2/4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleSelectTrack(currentTrack)}
                  className="p-2 rounded-full bg-white text-black hover:scale-105 transition-transform"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 w-full max-w-md">
                <span className="text-[10px] font-mono text-neutral-500 w-8 text-right">
                  {formatTime(progress)}
                </span>
                <input 
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <span className="text-[10px] font-mono text-neutral-500 w-8">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            <div className="hidden md:flex justify-end w-1/4">
              <button 
                onClick={() => {
                  audioRef.current.pause();
                  setCurrentTrack(null);
                  setIsPlaying(false);
                }}
                className="p-1.5 text-neutral-500 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
              >
                ✕
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}