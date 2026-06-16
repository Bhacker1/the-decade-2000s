/* ================================================================== */
/*  PRESS SURFACE — 2001 · THE PRESS HOLDS THE MEGAPHONE               */
/*  A period-accurate broadsheet front page: "THE DAILY HERALD".       */
/*  Solemn, dignified, institutional. All inline styles + one scoped   */
/*  <style> tag for halftone texture / hairline flourishes. No assets. */
/*  Decorative reconstruction — masthead, dateline, lead, 3-col body,  */
/*  duotone photo block, INSIDE index, weather strip.                  */
/* ================================================================== */

const PAPER = '#f4f0e3'
const PAPER_EDGE = '#ece6d4'
const INK = '#1a1712'
const INK_SOFT = '#322c22'
const RULE = '#181410'

const serif = "Georgia, 'Times New Roman', 'Times', serif"

export function PressSurface() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: PAPER,
        color: INK,
        fontFamily: serif,
        // faint vignette + uneven newsprint tone
        backgroundImage:
          'radial-gradient(120% 90% at 50% -10%, rgba(255,253,246,0.7), rgba(0,0,0,0) 55%),' +
          'radial-gradient(140% 120% at 100% 120%, rgba(120,104,72,0.10), rgba(0,0,0,0) 60%),' +
          `linear-gradient(180deg, ${PAPER} 0%, ${PAPER_EDGE} 100%)`,
        boxShadow: 'inset 0 0 90px rgba(82,68,40,0.14)',
      }}
    >
      <style>{`
        .dh-halftone {
          background-image:
            radial-gradient(rgba(20,18,14,0.55) 0.9px, transparent 1.1px),
            radial-gradient(rgba(20,18,14,0.30) 0.9px, transparent 1.1px),
            linear-gradient(155deg, #6b6357 0%, #847b6c 38%, #4d473d 70%, #2c281f 100%);
          background-size: 4px 4px, 4px 4px, 100% 100%;
          background-position: 0 0, 2px 2px, 0 0;
        }
        .dh-scroll::-webkit-scrollbar { width: 9px; }
        .dh-scroll::-webkit-scrollbar-track { background: ${PAPER_EDGE}; }
        .dh-scroll::-webkit-scrollbar-thumb {
          background: #b6ab90; border: 2px solid ${PAPER_EDGE};
        }
        .dh-link:hover { text-decoration: underline; }
        @keyframes dh-flag {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
      `}</style>

      {/* INNER PAGE — scrolls internally if the frame is short; never the root */}
      <div
        className="dh-scroll"
        style={{
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: 'clamp(10px, 2.4vw, 26px)',
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* ---------- TOP EARS + MASTHEAD ---------- */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 'clamp(6px, 1.05vw, 9px)',
            letterSpacing: '0.06em',
            color: INK_SOFT,
            textTransform: 'uppercase',
            paddingBottom: 4,
          }}
        >
          <span style={{ maxWidth: '28%', lineHeight: 1.25 }}>
            Cloudy, breezy.
            <br />
            High 73 · Low 58
          </span>
          <span
            style={{
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              textTransform: 'none',
              fontSize: 'clamp(6px, 1vw, 9px)',
              color: '#5a503d',
            }}
          >
            “All the news, plainly told.”
          </span>
          <span style={{ maxWidth: '28%', textAlign: 'right', lineHeight: 1.25 }}>
            Late City
            <br />
            Edition
          </span>
        </div>

        <div style={{ borderTop: `2.5px solid ${RULE}`, marginTop: 2 }} />
        <div style={{ borderTop: `1px solid ${RULE}`, marginTop: 2 }} />

        {/* MASTHEAD WORDMARK */}
        <div
          style={{
            textAlign: 'center',
            padding: 'clamp(4px, 1.2vw, 12px) 0 clamp(2px, 0.6vw, 6px)',
            animation: 'dh-flag 7s ease-in-out infinite',
          }}
        >
          <div
            style={{
              fontFamily: "'Times New Roman', Georgia, serif",
              fontWeight: 700,
              letterSpacing: 'clamp(1px, 0.5vw, 5px)',
              fontSize: 'clamp(26px, 7.6vw, 78px)',
              lineHeight: 0.92,
              color: INK,
              textShadow: '0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            The Daily Herald
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${RULE}` }} />

        {/* DATELINE ROW */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'clamp(6.5px, 1.15vw, 11px)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: 'clamp(3px, 0.7vw, 6px) 2px',
            color: INK_SOFT,
            fontWeight: 600,
          }}
        >
          <span>Vol. CL · No. 51,204</span>
          <span style={{ letterSpacing: '0.07em', color: INK }}>
            Tuesday, September 11, 2001
          </span>
          <span>50 Cents</span>
        </div>

        <div style={{ borderTop: `2px solid ${RULE}` }} />
        <div style={{ borderTop: `1px solid ${RULE}`, marginTop: 1.5 }} />

        {/* ---------- LEAD HEADLINE ---------- */}
        <div style={{ textAlign: 'center', padding: 'clamp(8px,1.8vw,18px) 0 clamp(4px,1vw,10px)' }}>
          <div
            style={{
              fontWeight: 700,
              letterSpacing: 'clamp(0.5px, 0.4vw, 4px)',
              fontSize: 'clamp(28px, 9.2vw, 96px)',
              lineHeight: 0.95,
              color: INK,
              textShadow: '0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            A NATION REELS
          </div>
          <div
            style={{
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(10px, 2.2vw, 22px)',
              lineHeight: 1.25,
              color: INK_SOFT,
              maxWidth: '88%',
              margin: 'clamp(4px,1vw,10px) auto 0',
            }}
          >
            Coordinated attacks strike New York and Washington as the country
            awakens to a day without precedent
          </div>
          {/* subdeck rule with diamond */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              margin: 'clamp(5px,1.1vw,10px) auto 0',
              maxWidth: '52%',
            }}
          >
            <span style={{ flex: 1, height: 1, background: RULE }} />
            <span style={{ fontSize: 'clamp(6px,1.1vw,11px)', color: RULE }}>◆</span>
            <span style={{ flex: 1, height: 1, background: RULE }} />
          </div>
          <div
            style={{
              fontSize: 'clamp(7px, 1.4vw, 13px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: INK_SOFT,
              marginTop: 4,
              fontWeight: 600,
            }}
          >
            By the Editorial Staff
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${RULE}`, marginBottom: 'clamp(6px,1.4vw,12px)' }} />

        {/* ---------- 3-COLUMN BODY ---------- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
          }}
        >
          {/* COLUMN 1 — drop cap lead */}
          <div style={col(true)}>
            <Lead />
            <p style={para}>
              Air traffic was halted nationwide for the first time in the
              history of commercial flight. Bridges and tunnels were sealed,
              federal buildings emptied, and a stillness settled over cities
              that rarely fall quiet, broken only by the distant rise and fall
              of sirens.
            </p>
            <p style={para}>
              From coast to coast, Americans gathered around televisions and
              radios, telephones pressed to their ears, trying to reach the
              people they loved. Churches and synagogues opened their doors
              before noon. Lines formed outside donation centers as ordinary
              men and women asked, simply, how they might help.
            </p>
            <SubHead>‘An act of war,’ leaders say</SubHead>
            <p style={para}>
              Officials in Washington pledged a full accounting of the day and
              vowed that those responsible would be found. Across the aisle,
              voices that rarely agree spoke as one, calling for unity and
              resolve in the hours ahead.
            </p>
          </div>

          {/* COLUMN 2 — middle, continues + pull quote */}
          <div style={col(false)}>
            <p style={{ ...para, marginTop: 0 }}>
              By midday the rhythms of the country had bent to a single, somber
              purpose. Hospitals readied beds that, for many, would not be
              needed. Strangers stood in line for hours to give blood. The
              streets near the disaster filled not with panic but with the
              quiet, dust-covered procession of people walking home.
            </p>

            {/* PULL QUOTE */}
            <blockquote
              style={{
                margin: 'clamp(6px,1.4vw,12px) 0',
                padding: 'clamp(6px,1.3vw,12px) 0',
                borderTop: `2px solid ${RULE}`,
                borderBottom: `2px solid ${RULE}`,
                fontStyle: 'italic',
                fontSize: 'clamp(10px, 2vw, 19px)',
                lineHeight: 1.3,
                textAlign: 'center',
                color: INK,
              }}
            >
              “Today our fellow citizens, our way of life, our very freedom came
              under attack.”
              <div
                style={{
                  fontStyle: 'normal',
                  fontSize: 'clamp(6.5px,1.1vw,11px)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: 6,
                  color: INK_SOFT,
                }}
              >
                From an evening address to the nation
              </div>
            </blockquote>

            <p style={para}>
              Markets did not open. The great trading floors, ordinarily a roar
              of commerce, stood empty and dark. Economists cautioned against
              forecasts; the morning had outrun every model. What remained, they
              said, was the steadiness of a people accustomed to weathering the
              unimaginable together.
            </p>
            <p style={para}>
              In the capital, the business of government continued under guard.
              Lawmakers returned to the steps where they convene and, in the
              fading light, lifted their voices in song, a small, unscripted act
              that traveled the country faster than any decree.
            </p>
            <p style={{ ...para, marginBottom: 0 }}>
              By nightfall the questions outnumbered the answers, and the
              accounting of the day was far from complete.
            </p>
            <div
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(7px,1.3vw,12px)',
                marginTop: 6,
                color: INK_SOFT,
              }}
            >
              Continued on Page A8, Column 1
            </div>
          </div>

          {/* COLUMN 3 — photo + INSIDE index */}
          <div style={col(false)}>
            {/* DUOTONE / HALFTONE PHOTO */}
            <figure style={{ margin: '0 0 clamp(6px,1.4vw,12px)' }}>
              <div
                className="dh-halftone"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  border: `1px solid ${RULE}`,
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.45)',
                  position: 'relative',
                }}
              >
                {/* faint skyline silhouette in the duotone */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '46%',
                    background:
                      'linear-gradient(180deg, rgba(20,18,14,0) 0%, rgba(20,18,14,0.55) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '8%',
                    right: '8%',
                    height: '38%',
                    background:
                      'repeating-linear-gradient(90deg, rgba(12,10,7,0.85) 0 6%, rgba(12,10,7,0) 6% 9%, rgba(12,10,7,0.7) 9% 13%, rgba(12,10,7,0) 13% 17%)',
                    maskImage:
                      'linear-gradient(180deg, transparent 0%, #000 35%)',
                    WebkitMaskImage:
                      'linear-gradient(180deg, transparent 0%, #000 35%)',
                  }}
                />
              </div>
              <figcaption
                style={{
                  fontSize: 'clamp(6.5px,1.15vw,11px)',
                  lineHeight: 1.3,
                  color: INK_SOFT,
                  marginTop: 4,
                  paddingBottom: 5,
                  borderBottom: `1px solid ${RULE}`,
                }}
              >
                <span style={{ fontWeight: 700, color: INK }}>
                  A changed skyline.
                </span>{' '}
                The lower Manhattan horizon as seen from across the river
                yesterday morning.{' '}
                <span style={{ fontStyle: 'italic' }}>(Herald photo)</span>
              </figcaption>
            </figure>

            {/* INSIDE INDEX BOX */}
            <div
              style={{
                border: `1.5px solid ${RULE}`,
                padding: 'clamp(5px,1.1vw,10px)',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  fontSize: 'clamp(9px,1.7vw,16px)',
                  borderBottom: `1px solid ${RULE}`,
                  paddingBottom: 4,
                  marginBottom: 5,
                }}
              >
                INSIDE
              </div>
              {[
                ['The Day, Hour by Hour', 'A3'],
                ['Voices From the City', 'A5'],
                ['Markets Stand Silent', 'B1'],
                ['Editorial: We Endure', 'A14'],
                ['Weather & Almanac', 'C8'],
              ].map(([t, p]) => (
                <div
                  key={t}
                  className="dh-link"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontSize: 'clamp(7px,1.3vw,12.5px)',
                    lineHeight: 1.5,
                    cursor: 'default',
                  }}
                >
                  <span>{t}</span>
                  <span
                    aria-hidden
                    style={{
                      flex: 1,
                      borderBottom: '1px dotted #948a72',
                      margin: '0 4px 0 5px',
                      transform: 'translateY(-2px)',
                    }}
                  />
                  <span style={{ fontWeight: 700 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM WEATHER / INDEX STRIP ---------- */}
        <div
          style={{
            borderTop: `2px solid ${RULE}`,
            marginTop: 'clamp(8px,1.6vw,14px)',
            paddingTop: 5,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(6px, 1.6vw, 20px)',
            justifyContent: 'space-between',
            fontSize: 'clamp(6.5px, 1.15vw, 11px)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: INK_SOFT,
          }}
        >
          <span>
            <b style={{ color: INK }}>Weather:</b> Clear, cool. High 73, Low 58.
          </span>
          <span>Editorials A14 · Business B1 · Sports D1 · Obituaries C12</span>
          <span>www.dailyherald.example · printed daily since 1851</span>
        </div>
      </div>

      {/* outer key-line frame for that printed-page-in-a-frame feel */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 5,
          border: '1px solid rgba(40,32,18,0.18)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  small style helpers + atoms                                        */
/* ------------------------------------------------------------------ */

function col(first: boolean) {
  return {
    padding: '0 clamp(6px, 1.2vw, 14px)',
    borderLeft: first ? 'none' : `1px solid ${RULE}`,
    minWidth: 0,
  } as const
}

const para = {
  margin: '0 0 clamp(5px, 1vw, 9px)',
  fontSize: 'clamp(7.5px, 1.45vw, 13px)',
  lineHeight: 1.42,
  textAlign: 'justify',
  color: INK_SOFT,
  hyphens: 'auto',
} as const

function Lead() {
  return (
    <p style={{ ...para, marginTop: 0 }}>
      <span
        style={{
          float: 'left',
          fontFamily: "'Times New Roman', Georgia, serif",
          fontWeight: 700,
          fontSize: 'clamp(34px, 7vw, 64px)',
          lineHeight: 0.74,
          padding: '4px 7px 0 0',
          color: INK,
        }}
      >
        A
      </span>
      cross the country yesterday, an ordinary morning gave way to scenes that
      will be remembered for generations. In the span of a few hours, the nation
      was drawn together in shock and grief, and a settled sense of security
      gave way to questions that would not soon be answered.
    </p>
  )
}

function SubHead({ children }: { children: string }) {
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 'clamp(9px, 1.7vw, 15px)',
        letterSpacing: '0.01em',
        margin: 'clamp(4px,1vw,9px) 0 clamp(3px,0.7vw,6px)',
        color: INK,
      }}
    >
      {children}
    </div>
  )
}
