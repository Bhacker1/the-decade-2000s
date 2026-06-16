/* ================================================================== */
/*  POLITICAL FORCE — surface: BlogSurface                             */
/*  ERA: 2004 — THE BLOGGERS. A scrappy, link-heavy early-2000s        */
/*  independent weblog (MovableType/Blogger flavor). Citizens hold     */
/*  the megaphone; the gatekeepers lose their monopoly.                */
/*  Pure inline-styled period reconstruction. No external assets.      */
/* ================================================================== */

import type { CSSProperties } from 'react'

export function BlogSurface() {
  // --- period palette -------------------------------------------------
  const PAGE = '#fbfbf9'
  const INK = '#2b2b2b'
  const LINK = '#1a4f9c'
  const LINKVIS = '#5a3a8c'
  const RULE = '#d8d6cf'
  const BOXBORDER = '#c9c7bf'
  const TITLEBAR = '#e9e7df'
  const META = '#7a786f'
  const ORANGE = '#f06a16'

  // tiled diagonal-stripe banner texture (CSS only)
  const stripes =
    'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 12px)'

  const verdana = 'Verdana, Geneva, Tahoma, sans-serif'
  const georgia = 'Georgia, "Times New Roman", serif'

  // ---- reusable bits -------------------------------------------------
  const sidebarBox: CSSProperties = {
    border: `1px solid ${BOXBORDER}`,
    background: '#ffffff',
    marginBottom: 9,
    boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
  }
  const sidebarTitle: CSSProperties = {
    background: TITLEBAR,
    borderBottom: `1px solid ${BOXBORDER}`,
    padding: '3px 7px',
    fontFamily: verdana,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.4,
    color: '#4a4840',
    textTransform: 'uppercase',
  }
  const blogrollLink: CSSProperties = {
    display: 'block',
    color: LINK,
    textDecoration: 'none',
    fontFamily: verdana,
    fontSize: 11,
    lineHeight: '17px',
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: PAGE,
        color: INK,
        fontFamily: verdana,
        fontSize: 12,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <style>{`
        .bsf2004-a:hover { text-decoration: underline; }
        .bsf2004-go:hover { background:#e6e6e6 !important; }
        .bsf2004-scroll::-webkit-scrollbar { width:14px; }
        .bsf2004-scroll::-webkit-scrollbar-track { background:#ece9e0; }
        .bsf2004-scroll::-webkit-scrollbar-thumb {
          background:#c4c1b6; border:1px solid #b3b0a6;
        }
        @keyframes bsf2004-blink { 50% { opacity:0.25; } }
        .bsf2004-new { animation: bsf2004-blink 1.1s steps(1) infinite; }
      `}</style>

      {/* ===================== BANNER ===================== */}
      <div
        style={{
          background: `linear-gradient(180deg,#3a3a3a 0%,#1e1e1e 100%), ${PAGE}`,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: stripes,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '12px 14px 9px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: georgia,
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 1,
                color: '#fff',
                letterSpacing: -0.5,
                textShadow: '1px 1px 0 #000',
              }}
            >
              THE DAILY DISPATCH
            </div>
            <div
              style={{
                fontFamily: georgia,
                fontStyle: 'italic',
                fontSize: 12,
                color: '#e8c98a',
                marginTop: 3,
              }}
            >
              the story the networks won&rsquo;t run.
            </div>
          </div>
          <div
            style={{
              fontFamily: verdana,
              fontSize: 9,
              color: '#bdbab2',
              textAlign: 'right',
              lineHeight: 1.5,
              paddingBottom: 2,
            }}
          >
            est. 2002 &middot; un-spun since day one
            <br />
            <span style={{ color: '#8f8c84' }}>powered by</span>{' '}
            <b style={{ color: '#d6d3cb' }}>MovableType 2.6</b>
          </div>
        </div>

        {/* thin top nav */}
        <div
          style={{
            position: 'relative',
            background: '#111',
            borderTop: '1px solid #000',
            padding: '4px 14px',
            fontFamily: verdana,
            fontSize: 10.5,
            letterSpacing: 0.3,
          }}
        >
          {['Home', 'Archives', 'About', 'Contact'].map((n, i) => (
            <span key={n}>
              {i > 0 && <span style={{ color: '#555', margin: '0 7px' }}>&middot;</span>}
              <a
                href="#"
                className="bsf2004-a"
                style={{ color: i === 0 ? '#fff' : '#c8d6ee', textDecoration: 'none' }}
              >
                {n}
              </a>
            </span>
          ))}
          <span style={{ float: 'right', color: '#7d7a72' }}>Monday, April 12, 2004</span>
        </div>
      </div>

      {/* ===================== BODY (two columns) ===================== */}
      <div
        className="bsf2004-scroll"
        style={{
          position: 'absolute',
          top: 86,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'auto',
          display: 'flex',
          gap: 14,
          padding: '12px 14px 16px',
          boxSizing: 'border-box',
        }}
      >
        {/* ------------------- MAIN COLUMN ------------------- */}
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          {/* POST 1 */}
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: verdana,
                fontSize: 10,
                color: META,
                marginBottom: 3,
                letterSpacing: 0.2,
              }}
            >
              Posted by <b style={{ color: '#5a584f' }}>raincoaster</b> &middot; April 12,
              2004 &middot; 9:42&nbsp;AM &middot; filed under{' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Politics
              </a>
            </div>
            <a
              href="#"
              className="bsf2004-a"
              style={{
                fontFamily: georgia,
                fontSize: 19,
                fontWeight: 700,
                color: LINK,
                textDecoration: 'underline',
                lineHeight: 1.15,
                display: 'block',
              }}
            >
              They Said It Couldn&rsquo;t Be Verified. We Verified It.
            </a>
            <div
              style={{
                fontFamily: georgia,
                fontSize: 13,
                lineHeight: 1.55,
                color: INK,
                marginTop: 7,
              }}
            >
              <p style={{ margin: '0 0 8px' }}>
                The wire services spent the weekend repeating the official line word for word.
                A reader in the room sent us three photographs, a scanned memo, and a phone
                number. We made the calls the press pool didn&rsquo;t. The dates don&rsquo;t
                line up, and once you see the timestamps, you can&rsquo;t un-see them.
              </p>
              <p style={{ margin: 0 }}>
                This is what we keep saying: a thousand readers with cameras beat one anchor
                with a teleprompter. If you were there Saturday and saw something, the tip
                line is open. Forward everything. We&rsquo;ll do the rest in public, with our
                work shown.
              </p>
            </div>
            <div
              style={{
                fontFamily: verdana,
                fontSize: 10,
                color: META,
                marginTop: 9,
                paddingTop: 6,
                borderTop: `1px dotted ${RULE}`,
              }}
            >
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Comments&nbsp;(147)
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                TrackBack&nbsp;(12)
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Permalink
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Email this
              </a>
            </div>
          </div>

          {/* POST 2 */}
          <div>
            <div
              style={{
                fontFamily: verdana,
                fontSize: 10,
                color: META,
                marginBottom: 3,
                letterSpacing: 0.2,
              }}
            >
              Posted by <b style={{ color: '#5a584f' }}>mendoza_in_dc</b> &middot; April 11,
              2004 &middot; 11:18&nbsp;PM &middot; filed under{' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Media&nbsp;Watch
              </a>
            </div>
            <a
              href="#"
              className="bsf2004-a"
              style={{
                fontFamily: georgia,
                fontSize: 19,
                fontWeight: 700,
                color: LINKVIS,
                textDecoration: 'underline',
                lineHeight: 1.15,
                display: 'block',
              }}
            >
              Read the Transcript Yourself: They&rsquo;re Hoping You Won&rsquo;t
            </a>
            <div
              style={{
                fontFamily: georgia,
                fontSize: 13,
                lineHeight: 1.55,
                color: INK,
                marginTop: 7,
              }}
            >
              <p style={{ margin: '0 0 8px' }}>
                Two cable networks quoted the same eleven-word sound bite all night. The full
                exchange runs four minutes and says nearly the opposite. I&rsquo;ve mirrored
                the whole transcript below the fold so it can&rsquo;t quietly disappear.
              </p>
              <blockquote
                style={{
                  margin: '0 0 8px',
                  padding: '6px 10px',
                  borderLeft: `3px solid ${ORANGE}`,
                  background: '#fbf7ee',
                  fontSize: 12,
                  color: '#54524a',
                }}
              >
                &ldquo;If the networks won&rsquo;t link the source, we will.&rdquo;{' '}
                <a
                  href="#"
                  className="bsf2004-a"
                  style={{ color: LINK, textDecoration: 'none' }}
                >
                  Talking Points Memo
                </a>
                , who flagged this first.
              </blockquote>
              <p style={{ margin: 0 }}>
                Permalink it, blog it, forward it. The point of all this isn&rsquo;t my
                opinion, it&rsquo;s the primary document, in your hands, before someone
                decides you didn&rsquo;t need to see it.
              </p>
            </div>
            <div
              style={{
                fontFamily: verdana,
                fontSize: 10,
                color: META,
                marginTop: 9,
                paddingTop: 6,
                borderTop: `1px dotted ${RULE}`,
              }}
            >
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Comments&nbsp;(89)
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                TrackBack&nbsp;(31)
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Permalink
              </a>{' '}
              | {' '}
              <a href="#" className="bsf2004-a" style={{ color: LINK, textDecoration: 'none' }}>
                Email this
              </a>
            </div>
          </div>
        </div>

        {/* ------------------- RIGHT SIDEBAR ------------------- */}
        <div style={{ flex: '0 0 168px', width: 168 }}>
          {/* SEARCH */}
          <div style={sidebarBox}>
            <div style={sidebarTitle}>Search This Site</div>
            <div style={{ padding: 7, display: 'flex', gap: 5 }}>
              <input
                readOnly
                value="florida memo"
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontFamily: verdana,
                  fontSize: 11,
                  padding: '2px 4px',
                  border: '2px inset #d9d7cf',
                  background: '#fff',
                  color: '#666',
                }}
              />
              <button
                className="bsf2004-go"
                style={{
                  fontFamily: verdana,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '2px 8px',
                  border: '2px outset #dcdad2',
                  background: '#ececec',
                  color: '#333',
                  cursor: 'pointer',
                }}
              >
                Go
              </button>
            </div>
          </div>

          {/* BLOGROLL */}
          <div style={sidebarBox}>
            <div style={sidebarTitle}>Blogroll</div>
            <div style={{ padding: '6px 9px' }}>
              {[
                'Instapundit',
                'Daily Kos',
                'BoingBoing',
                'Talking Points Memo',
                'Atrios / Eschaton',
                'Wonkette',
                'Little Green Footballs',
                'Andrew Sullivan',
              ].map((b) => (
                <a key={b} href="#" className="bsf2004-a" style={blogrollLink}>
                  &raquo; {b}
                </a>
              ))}
            </div>
          </div>

          {/* ARCHIVES */}
          <div style={sidebarBox}>
            <div style={sidebarTitle}>Archives</div>
            <div style={{ padding: '6px 9px' }}>
              {[
                ['April 2004', '32'],
                ['March 2004', '58'],
                ['February 2004', '47'],
                ['January 2004', '51'],
                ['December 2003', '44'],
              ].map(([m, c]) => (
                <a
                  key={m}
                  href="#"
                  className="bsf2004-a"
                  style={{ ...blogrollLink, lineHeight: '18px' }}
                >
                  {m}{' '}
                  <span style={{ color: META, fontSize: 10 }}>({c})</span>
                </a>
              ))}
            </div>
          </div>

          {/* SYNDICATE / RSS */}
          <div style={sidebarBox}>
            <div style={sidebarTitle}>Syndicate</div>
            <div style={{ padding: '8px 9px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: verdana,
                  fontSize: 9.5,
                  fontWeight: 700,
                  color: '#fff',
                  background: `linear-gradient(180deg,#ff9436 0%,${ORANGE} 100%)`,
                  border: '1px solid #c4540d',
                  borderRadius: 3,
                  padding: '2px 6px',
                  letterSpacing: 0.5,
                  textShadow: '0 1px 0 rgba(0,0,0,0.25)',
                }}
              >
                XML
              </span>{' '}
              <a
                href="#"
                className="bsf2004-a"
                style={{ color: LINK, fontSize: 11, textDecoration: 'none' }}
              >
                RSS&nbsp;2.0
              </a>
              <div
                style={{
                  fontFamily: verdana,
                  fontSize: 9.5,
                  color: META,
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                Add us to your aggregator, or just hit{' '}
                <b style={{ color: '#5a584f' }}>Refresh</b>.
              </div>
            </div>
          </div>

          {/* HIT COUNTER (LCD) */}
          <div style={sidebarBox}>
            <div style={sidebarTitle}>Visitors</div>
            <div style={{ padding: 8, textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: verdana,
                  fontSize: 9,
                  color: META,
                  marginBottom: 5,
                  letterSpacing: 0.3,
                }}
              >
                you are visitor
              </div>
              <div
                style={{
                  display: 'inline-block',
                  background: '#0a0a0a',
                  border: '2px inset #444',
                  borderRadius: 2,
                  padding: '4px 7px',
                  fontFamily: '"Courier New", monospace',
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: '#39ff61',
                  textShadow: '0 0 4px rgba(57,255,97,0.7)',
                }}
              >
                #48,213
              </div>
              <div
                style={{
                  fontFamily: verdana,
                  fontSize: 9,
                  color: '#c0392b',
                  marginTop: 6,
                }}
              >
                <span className="bsf2004-new">&#9733; NEW</span>{' '}
                <span style={{ color: META }}>since last reset</span>
              </div>
            </div>
          </div>

          {/* tiny footer credit */}
          <div
            style={{
              fontFamily: verdana,
              fontSize: 9,
              color: META,
              textAlign: 'center',
              lineHeight: 1.5,
              marginTop: 4,
            }}
          >
            Best viewed at 1024&times;768.
            <br />
            Comments &copy; their authors.
          </div>
        </div>
      </div>
    </div>
  )
}
