import { useState, useRef, useEffect, useCallback } from 'react'
import "./css/Player.css"

const TRACKS = [
  { id: 1,  title: "Phantom Signal",   artist: "Kael Voss",      duration: 214, bpm: 118, key: "Dm", genre: "Ambient",     cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop&auto=format", waveColor: "#e85d04" },
  { id: 2,  title: "Pressure Drop",    artist: "Mira Osei",      duration: 187, bpm: 132, key: "Am", genre: "Electronic",  cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&auto=format", waveColor: "#7c3aed" },
  { id: 3,  title: "Glass Archive",    artist: "Theo Nakamura",  duration: 243, bpm: 95,  key: "C",  genre: "Experimental",cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&auto=format", waveColor: "#0ea5e9" },
  { id: 4,  title: "Bone Frequency",   artist: "Sienna Luz",     duration: 198, bpm: 140, key: "Fm", genre: "Industrial",  cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop&auto=format", waveColor: "#dc2626" },
  { id: 5,  title: "Hollow Transit",   artist: "Kael Voss",      duration: 231, bpm: 108, key: "Gm", genre: "Ambient",     cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop&auto=format", waveColor: "#16a34a" },
  { id: 6,  title: "Void Logic",       artist: "Prism Cell",     duration: 267, bpm: 155, key: "Bm", genre: "Techno",      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&auto=format", waveColor: "#ca8a04" },
  { id: 7,  title: "Static Bloom",     artist: "Mira Osei",      duration: 194, bpm: 88,  key: "E",  genre: "Drone",       cover: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=400&h=400&fit=crop&auto=format", waveColor: "#db2777" },
  { id: 8,  title: "Rust Protocol",    artist: "Theo Nakamura",  duration: 220, bpm: 126, key: "Cm", genre: "Industrial",  cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop&auto=format", waveColor: "#ea580c" },
]

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function generateBars(seed, count) {
  const bars = []
  for (let i = 0; i < count; i++) {
    const h = 20 + ((seed * (i + 1) * 7919) % 60) + Math.sin(i * 0.4 + seed) * 15
    bars.push(Math.max(8, Math.min(80, h)))
  }
  return bars
}

export default function Player() {
  const [activeId, setActiveId] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [liked, setLiked] = useState(new Set([1, 3, 6]))
  const [hoverTrack, setHoverTrack] = useState(null)
  const intervalRef = useRef(null)

  const track = TRACKS.find(t => t.id === activeId)
  const pct = progress / track.duration

  const clear = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(p => {
          if (p >= track.duration) { setIsPlaying(false); return 0 }
          return p + 1
        })
      }, 1000)
    } else clear()
    return clear
  }, [isPlaying, track.duration, clear])

  function play(id) {
    if (id === activeId) { setIsPlaying(p => !p) }
    else { setActiveId(id); setProgress(0); setIsPlaying(true) }
  }

  function skip(dir) {
    const idx = TRACKS.findIndex(t => t.id === activeId)
    const next = TRACKS[(idx + dir + TRACKS.length) % TRACKS.length]
    setActiveId(next.id); setProgress(0); setIsPlaying(true)
  }

  const bars = generateBars(activeId, 80)

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0d0c0b', overflow: 'hidden' }}>

      {/* LEFT — Track list */}
      <div style={{ width: 340, borderRight: '1px solid #1e1c1a', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        {/* Header */}
        <div style={{ padding: '28px 24px 20px', borderBottom: '1px solid #1e1c1a' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6b6560', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Queue / {TRACKS.length} tracks</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: '0.04em', lineHeight: 1, color: '#f0ece4' }}>WAVE<br/>STATION</div>
        </div>

        {/* Tracks */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {TRACKS.map((t, i) => {
            const isActive = t.id === activeId
            const isHov = hoverTrack === t.id
            return (
              <div
                key={t.id}
                onClick={() => play(t.id)}
                onMouseEnter={() => setHoverTrack(t.id)}
                onMouseLeave={() => setHoverTrack(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 24px',
                  background: isActive ? '#181614' : isHov ? '#141210' : 'transparent',
                  cursor: 'pointer', transition: 'background 0.15s',
                  borderLeft: `2px solid ${isActive ? t.waveColor : 'transparent'}`,
                }}
              >
                {/* Number / play indicator */}
                <div style={{ width: 20, textAlign: 'center', flexShrink: 0 }}>
                  {isActive && isPlaying
                    ? <PlayingDots color={t.waveColor} />
                    : <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: isActive ? t.waveColor : '#4a4540' }}>{String(i + 1).padStart(2, '0')}</span>
                  }
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: isActive ? '#f0ece4' : '#c8c4bc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>{t.title}</div>
                  <div style={{ fontSize: 11, color: '#6b6560', marginTop: 2 }}>{t.artist}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4540' }}>{fmt(t.duration)}</span>
                  <span style={{ fontSize: 9, color: t.waveColor, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>{t.genre}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CENTER — Main player */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

        {/* Big background art */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            key={track.id}
            src={track.cover}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(60px) saturate(0.3)', transform: 'scale(1.3)', opacity: 0.18 }}
          />
        </div>

        {/* Top bar */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#4a4540', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Now Playing</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['●', '●', '●'].map((d, i) => (
              <span key={i} style={{ fontSize: 6, color: i === 0 ? track.waveColor : '#2a2825', lineHeight: 1 }}>{d}</span>
            ))}
          </div>
        </div>

        {/* Album art — large, centered */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: '0 32px', flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            <img
              src={track.cover}
              alt={track.title}
              style={{ width: 220, height: 220, objectFit: 'cover', display: 'block', filter: 'contrast(1.05) saturate(0.9)' }}
            />
            {/* Corner labels */}
            <div style={{ position: 'absolute', top: -1, left: -1, width: 12, height: 12, borderTop: `2px solid ${track.waveColor}`, borderLeft: `2px solid ${track.waveColor}` }} />
            <div style={{ position: 'absolute', top: -1, right: -1, width: 12, height: 12, borderTop: `2px solid ${track.waveColor}`, borderRight: `2px solid ${track.waveColor}` }} />
            <div style={{ position: 'absolute', bottom: -1, left: -1, width: 12, height: 12, borderBottom: `2px solid ${track.waveColor}`, borderLeft: `2px solid ${track.waveColor}` }} />
            <div style={{ position: 'absolute', bottom: -1, right: -1, width: 12, height: 12, borderBottom: `2px solid ${track.waveColor}`, borderRight: `2px solid ${track.waveColor}` }} />
          </div>
        </div>

        {/* Track title — MASSIVE */}
        <div style={{ position: 'relative', padding: '24px 32px 8px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 64, letterSpacing: '0.06em', lineHeight: 0.9, color: '#f0ece4', textTransform: 'uppercase' }}>{track.title}</div>
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <span style={{ fontSize: 13, color: '#9a9490', fontWeight: 500 }}>{track.artist}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#3a3835', display: 'inline-block' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: track.waveColor, letterSpacing: '0.1em' }}>{track.bpm} BPM</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#3a3835', display: 'inline-block' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6b6560' }}>{track.key}</span>
          </div>
        </div>

        {/* Waveform */}
        <div style={{ position: 'relative', padding: '16px 32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Waveform bars={bars} progress={pct} color={track.waveColor} onSeek={(p) => setProgress(Math.floor(p * track.duration))} />
        </div>

        {/* Controls */}
        <div style={{ position: 'relative', padding: '0 32px 32px' }}>
          {/* Time */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6b6560' }}>{fmt(progress)}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#4a4540' }}>−{fmt(track.duration - progress)}</span>
          </div>

          {/* Main controls row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              onClick={() => setLiked(s => { const n = new Set(s); n.has(activeId) ? n.delete(activeId) : n.add(activeId); return n })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: liked.has(activeId) ? track.waveColor : '#3a3835', transition: 'color 0.2s', padding: 8 }}
            >
              {liked.has(activeId) ? '♥' : '♡'}
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <IconBtn onClick={() => skip(-1)} label="Prev">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </IconBtn>

              <button
                onClick={() => setIsPlaying(p => !p)}
                style={{
                  width: 56, height: 56, border: `2px solid ${track.waveColor}`,
                  background: 'transparent', cursor: 'pointer', color: track.waveColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 8px', transition: 'background 0.15s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = `${track.waveColor}22`)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {isPlaying
                  ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  : <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z"/></svg>
                }
              </button>

              <IconBtn onClick={() => skip(1)} label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z"/></svg>
              </IconBtn>
            </div>

            {/* Volume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#4a4540', letterSpacing: '0.1em' }}>VOL</span>
              <VolumeSlider value={volume} color={track.waveColor} onChange={setVolume} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Info panel */}
      <div style={{ width: 220, borderLeft: '1px solid #1e1c1a', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        {/* Stats */}
        <div style={{ padding: '28px 20px', borderBottom: '1px solid #1e1c1a' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#4a4540', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Track Data</div>
          {[
            { label: 'Genre', value: track.genre },
            { label: 'Key', value: track.key },
            { label: 'BPM', value: String(track.bpm) },
            { label: 'Duration', value: fmt(track.duration) },
          ].map(row => (
            <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#4a4540', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{row.label}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#c8c4bc', fontWeight: 500 }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Up next */}
        <div style={{ padding: '20px', flex: 1, overflow: 'auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#4a4540', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>Up Next</div>
          {TRACKS.filter(t => t.id !== activeId).slice(0, 5).map(t => (
            <div
              key={t.id}
              onClick={() => play(t.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
            >
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: t.waveColor, flexShrink: 0 }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#c8c4bc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</div>
                <div style={{ fontSize: 10, color: '#6b6560', marginTop: 1 }}>{t.artist}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Volume bar vertical feel + current track color swatch */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid #1e1c1a' }}>
          <div style={{ display: 'flex', gap: 3, height: 32, alignItems: 'flex-end' }}>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                style={{
                  flex: 1, borderRadius: 1,
                  height: `${((i + 1) / 12) * 100}%`,
                  background: i < Math.round(volume * 12) ? track.waveColor : '#1e1c1a',
                  transition: 'background 0.1s',
                  cursor: 'pointer',
                }}
                onClick={() => setVolume((i + 1) / 12)}
              />
            ))}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: '#4a4540', letterSpacing: '0.15em', marginTop: 6 }}>VOLUME</div>
        </div>
      </div>
    </div>
  )
}

function Waveform({ bars, progress, color, onSeek }) {
  const ref = useRef(null)
  const filled = Math.floor(progress * bars.length)

  function handleClick(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    onSeek((e.clientX - rect.left) / rect.width)
  }

  return (
    <div ref={ref} onClick={handleClick} style={{ display: 'flex', alignItems: 'center', gap: 2, height: 72, cursor: 'pointer' }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1, borderRadius: 1,
            height: `${h}%`,
            background: i <= filled ? color : '#2a2825',
            transition: 'background 0.1s',
            opacity: i <= filled ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  )
}

function PlayingDots({ color }) {
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 14 }}>
      {[1, 2, 3].map(i => (
        <div
          key={i}
          style={{
            width: 3, background: color, borderRadius: 1,
            animation: `bounce${i} 0.8s ease-in-out infinite`,
            animationDelay: `${(i - 1) * 0.15}s`,
          }}
        >
          <style>{`
            @keyframes bounce${i} {
              0%, 100% { height: 4px; }
              50% { height: 14px; }
            }
          `}</style>
        </div>
      ))}
    </div>
  )
}

function IconBtn({ onClick, label, children }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: 'none', border: 'none', cursor: 'pointer', color: hov ? '#f0ece4' : '#6b6560', padding: 10, transition: 'color 0.15s', display: 'flex', alignItems: 'center' }}
    >
      {children}
    </button>
  )
}

function VolumeSlider({ value, color, onChange }) {
  return (
    <div style={{ position: 'relative', width: 64, height: 3, cursor: 'pointer' }}>
      <div style={{ position: 'absolute', inset: 0, background: '#2a2825', borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${value * 100}%`, background: color, borderRadius: 1 }} />
      <input type="range" min={0} max={1} step={0.01} value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0, width: '100%', height: 12, opacity: 0, cursor: 'pointer' }} />
    </div>
  )
}
