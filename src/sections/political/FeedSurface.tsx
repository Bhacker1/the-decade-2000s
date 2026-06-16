// FeedSurface — 2008-era social feed media surface for THE DECADE (Political force chapter).
// Period-correct Web 2.0 / 2008 Twitter-Facebook hybrid: glossy blue header, white cards,
// rounded corners, soft shadows, Helvetica/Arial. "Everyone holds the megaphone."
// Self-contained, inline styles only, one scoped <style> tag. No external assets.

import type { ReactNode } from 'react';

export function FeedSurface() {
  const sans =
    "Helvetica, 'Helvetica Neue', Arial, 'Lucida Grande', Verdana, sans-serif";

  // ---- small period building blocks (presentational only) ----

  type Post = {
    initials: string;
    avBg: string;
    name: string;
    user: string;
    time: string;
    badge?: string;
    text: ReactNode;
    rt: string;
    fav: string;
  };

  const posts: Post[] = [
    {
      initials: 'GV',
      avBg: 'linear-gradient(160deg,#3b8c3b,#1f5e1f)',
      name: 'Rock the Vote',
      user: '@rockthevote',
      time: '· 14m',
      badge: 'GOTV',
      text: (
        <>
          Polls are open until 8pm tonight! Not sure where to go? Text your ZIP
          to find your polling place. Bring a friend, bring your roommate,{' '}
          <span style={{ color: '#2a64b4' }}>every</span> vote counts. 🇺🇸
        </>
      ),
      rt: '4.1k',
      fav: '9.7k',
    },
    {
      initials: 'DN',
      avBg: 'linear-gradient(160deg,#d24b4b,#8e1f1f)',
      name: 'Debate Night Live',
      user: '@debatenight',
      time: '· 1h',
      text: (
        <>
          🔴 LIVE in 30 min. The candidates take the stage. Watch the stream
          and tweet along with us:{' '}
          <span style={{ color: '#2a64b4', textDecoration: 'underline' }}>
            http://tinyurl.com/debate08
          </span>
        </>
      ),
      rt: '2.3k',
      fav: '5.1k',
    },
    {
      initials: 'MA',
      avBg: 'linear-gradient(160deg,#7a5cc6,#46307f)',
      name: 'Maria A.',
      user: '@maria_at_rally',
      time: '· 2h',
      text: (
        <>
          Snapped this from the rally downtown. The line wraps around two whole
          blocks. Never seen anything like it. Posting more pics from my phone.
          📷
        </>
      ),
      rt: '842',
      fav: '3.4k',
    },
    {
      initials: 'JT',
      avBg: 'linear-gradient(160deg,#e08a2e,#a85c12)',
      name: 'James T.',
      user: '@jtorres',
      time: '· 3h',
      text: (
        <>
          Just got off the phone bank: 60 calls, 12 commitments to vote.
          Grassroots works, people. Who else is volunteering this weekend?{' '}
          <span style={{ color: '#2a64b4' }}>#GetOutTheVote</span>
        </>
      ),
      rt: '517',
      fav: '1.9k',
    },
  ];

  // photo "thumbnail" used inside the rally post — pure CSS, no asset
  const RallyPhoto = () => (
    <div
      style={{
        marginTop: 7,
        height: 70,
        borderRadius: 4,
        border: '1px solid #c9cdd6',
        background:
          'linear-gradient(175deg,#bcd3ec 0%,#bcd3ec 52%,#7fa86a 52%,#5f8a4c 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.08)',
      }}
    >
      {/* crowd silhouettes */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 26,
          background:
            'repeating-linear-gradient(90deg,#2f3a2a 0 4px,#3c4a35 4px 9px)',
          opacity: 0.85,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 10,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'radial-gradient(circle,#fff6cf,#ffe27a)',
          boxShadow: '0 0 10px 3px rgba(255,226,122,.6)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: 7,
          bottom: 4,
          fontSize: 9,
          color: '#eef',
          fontFamily: sans,
          textShadow: '0 1px 1px rgba(0,0,0,.6)',
        }}
      >
        IMG_0413.jpg
      </span>
    </div>
  );

  const ActionRow = ({ rt, fav }: { rt: string; fav: string }) => (
    <div
      style={{
        marginTop: 6,
        display: 'flex',
        gap: 16,
        fontSize: 11,
        color: '#8893a4',
        fontFamily: sans,
      }}
    >
      <span className="fs-act">↩ Reply</span>
      <span className="fs-act">↻ Retweet {rt}</span>
      <span className="fs-act">♥ Favorite {fav}</span>
      <span style={{ marginLeft: 'auto', color: '#b6bdc9' }}>⋯ More</span>
    </div>
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#eef1f5',
        fontFamily: sans,
        color: '#222',
      }}
    >
      <style>{`
        .fs-scroll{ scrollbar-width: thin; scrollbar-color:#c4cad6 #eef1f5; }
        .fs-scroll::-webkit-scrollbar{ width:9px; }
        .fs-scroll::-webkit-scrollbar-track{ background:#e3e7ee; }
        .fs-scroll::-webkit-scrollbar-thumb{ background:linear-gradient(#c9d0dc,#aab3c4); border-radius:6px; border:2px solid #e3e7ee; }
        .fs-card{ transition: box-shadow .15s ease, transform .15s ease; }
        .fs-card:hover{ box-shadow:0 3px 10px rgba(40,60,100,.16); }
        .fs-act{ cursor:pointer; }
        .fs-act:hover{ color:#2a64b4; }
        .fs-follow:hover{ background:#eaf1fb; }
        .fs-trend:hover .fs-tag{ text-decoration:underline; }
        .fs-btn:hover{ background:linear-gradient(#7fb2f0,#3f7fd6); }
        @keyframes fsPulse{ 0%,100%{ box-shadow:0 0 0 0 rgba(60,140,60,.45);} 50%{ box-shadow:0 0 0 5px rgba(60,140,60,0);} }
        .fs-live{ animation: fsPulse 1.8s ease-in-out infinite; }
      `}</style>

      {/* ============ GLOSSY TOP BAR ============ */}
      <div
        style={{
          height: 44,
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: 12,
          background:
            'linear-gradient(180deg,#5a9be0 0%,#3a7fcf 48%,#2f6fc0 52%,#2461ad 100%)',
          borderBottom: '1px solid #1d4f93',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,.45), 0 1px 3px rgba(0,0,0,.25)',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background:
                'linear-gradient(180deg,#ffffff,#dfeaf7)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,.9), 0 1px 2px rgba(0,0,0,.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}
          >
            🐦
          </div>
          <span
            style={{
              fontSize: 21,
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: -0.5,
              textShadow: '0 1px 1px rgba(0,0,0,.35)',
            }}
          >
            chirpr
          </span>
        </div>

        {/* nav links (era) */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            fontSize: 12,
            color: '#dfecfb',
            marginLeft: 6,
          }}
        >
          <span style={{ color: '#fff', fontWeight: 'bold' }}>Home</span>
          <span>Profile</span>
          <span>Find People</span>
        </div>

        {/* rounded search */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(255,255,255,.95)',
            borderRadius: 14,
            padding: '4px 10px',
            width: 150,
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,.2)',
          }}
        >
          <span style={{ fontSize: 11, color: '#9aa3b2' }}>🔍</span>
          <span style={{ fontSize: 11, color: '#9aa3b2', fontStyle: 'italic' }}>
            Search…
          </span>
        </div>

        {/* user pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
            color: '#fff',
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              background: 'linear-gradient(160deg,#6fb0f0,#2f6fc0)',
              border: '1px solid rgba(255,255,255,.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              fontWeight: 'bold',
            }}
          >
            you
          </div>
          <span style={{ opacity: 0.95 }}>Settings ▾</span>
        </div>
      </div>

      {/* ============ BODY (two columns) ============ */}
      <div
        style={{
          position: 'absolute',
          top: 44,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          gap: 12,
          padding: '12px 14px 0',
          boxSizing: 'border-box',
        }}
      >
        {/* ---------- MAIN COLUMN ---------- */}
        <div
          className="fs-scroll"
          style={{
            flex: '1 1 auto',
            minWidth: 0,
            overflowY: 'auto',
            paddingRight: 4,
            paddingBottom: 14,
          }}
        >
          {/* COMPOSE BOX */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #cfd5e0',
              borderRadius: 8,
              padding: 12,
              boxShadow: '0 1px 2px rgba(40,60,100,.08)',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#33455f',
                marginBottom: 7,
              }}
            >
              What are you doing?
            </div>
            <div
              style={{
                border: '1px solid #c3cad6',
                borderRadius: 5,
                background:
                  'linear-gradient(180deg,#f4f6fa,#ffffff 14%)',
                height: 42,
                padding: '7px 9px',
                fontSize: 12,
                color: '#aab2c0',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,.06)',
              }}
            >
              Share an update with your followers…
            </div>
            <div
              style={{
                marginTop: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span style={{ fontSize: 11, color: '#9aa3b2' }}>📷 🔗 📍</span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#3a8c3a',
                }}
              >
                140
              </span>
              <button
                className="fs-btn"
                style={{
                  border: '1px solid #2461ad',
                  borderRadius: 5,
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 12,
                  fontFamily: sans,
                  padding: '6px 18px',
                  cursor: 'pointer',
                  background:
                    'linear-gradient(180deg,#6fa8ec,#3a7fcf 52%,#2f6fc0)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,.5), 0 1px 2px rgba(0,0,0,.2)',
                }}
              >
                Update
              </button>
            </div>
          </div>

          {/* PINNED CAMPAIGN POST w/ donation tally */}
          <div
            className="fs-card"
            style={{
              background:
                'linear-gradient(180deg,#fbfdff,#eef5fe)',
              border: '1px solid #b8cdec',
              borderRadius: 8,
              padding: 12,
              boxShadow: '0 1px 3px rgba(40,60,100,.12)',
              marginBottom: 12,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -1,
                right: 10,
                background: '#2461ad',
                color: '#fff',
                fontSize: 9,
                fontWeight: 'bold',
                padding: '2px 8px',
                borderRadius: '0 0 5px 5px',
                letterSpacing: 0.5,
              }}
            >
              📌 PINNED
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  flexShrink: 0,
                  background:
                    'linear-gradient(160deg,#2f6fc0,#173a6e)',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 17,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,.3)',
                }}
              >
                ★
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13 }}>
                  <b style={{ color: '#1d2b3e' }}>The Campaign 2008</b>{' '}
                  <span style={{ color: '#8893a4', fontSize: 11 }}>
                    @campaign08 · 22m
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.45,
                    color: '#2a3442',
                    marginTop: 3,
                  }}
                >
                  We just hit a new record, powered by{' '}
                  <b>millions of small donors</b> giving what they can. This is
                  what people-powered looks like. Chip in $5 and be part of it. 💙
                </div>

                {/* donation tally */}
                <div
                  style={{
                    marginTop: 9,
                    background: '#fff',
                    border: '1px solid #cdddf2',
                    borderRadius: 6,
                    padding: '9px 11px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        color: '#1f7a2e',
                        letterSpacing: -1,
                        fontFamily: 'Arial, Helvetica, sans-serif',
                      }}
                    >
                      $32,481,907
                    </span>
                    <span style={{ fontSize: 11, color: '#6b7585' }}>
                      raised online
                    </span>
                  </div>
                  {/* progress bar */}
                  <div
                    style={{
                      marginTop: 7,
                      height: 9,
                      borderRadius: 5,
                      background: '#e3e8ef',
                      overflow: 'hidden',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,.12)',
                    }}
                  >
                    <div
                      style={{
                        width: '74%',
                        height: '100%',
                        borderRadius: 5,
                        background:
                          'linear-gradient(180deg,#5fcf6b,#2f9e3e 52%,#1f7a2e)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.4)',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 10,
                      color: '#8893a4',
                    }}
                  >
                    <span>74% of $44M goal</span>
                    <span style={{ color: '#1f7a2e', fontWeight: 'bold' }}>
                      ▲ 1.2M donors
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 7,
                    display: 'flex',
                    gap: 16,
                    fontSize: 11,
                    color: '#8893a4',
                  }}
                >
                  <span className="fs-act">↩ Reply</span>
                  <span className="fs-act">↻ Retweet 18.6k</span>
                  <span className="fs-act">♥ Favorite 41k</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEED POSTS */}
          {posts.map((p, i) => (
            <div
              key={i}
              className="fs-card"
              style={{
                background: '#fff',
                border: '1px solid #d2d8e2',
                borderRadius: 8,
                padding: 11,
                boxShadow: '0 1px 2px rgba(40,60,100,.07)',
                marginBottom: 11,
              }}
            >
              <div style={{ display: 'flex', gap: 10 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    flexShrink: 0,
                    background: p.avBg,
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow:
                      'inset 0 1px 1px rgba(255,255,255,.35), 0 1px 2px rgba(0,0,0,.15)',
                  }}
                >
                  {p.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                    <b style={{ color: '#1d2b3e' }}>{p.name}</b>
                    {p.badge && (
                      <span
                        style={{
                          fontSize: 8.5,
                          fontWeight: 'bold',
                          color: '#1f7a2e',
                          background: '#e3f6e6',
                          border: '1px solid #b6e3bd',
                          borderRadius: 3,
                          padding: '1px 4px',
                          letterSpacing: 0.5,
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                    <span style={{ color: '#8893a4', fontSize: 11 }}>
                      {p.user} {p.time}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.45,
                      color: '#2a3442',
                      marginTop: 3,
                    }}
                  >
                    {p.text}
                  </div>
                  {p.user === '@maria_at_rally' && <RallyPhoto />}
                  <ActionRow rt={p.rt} fav={p.fav} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- RIGHT RAIL ---------- */}
        <div
          style={{
            flex: '0 0 196px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            overflow: 'hidden',
          }}
        >
          {/* TRENDING */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #cfd5e0',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(40,60,100,.08)',
            }}
          >
            <div
              style={{
                padding: '7px 11px',
                fontSize: 12,
                fontWeight: 'bold',
                color: '#33455f',
                background: 'linear-gradient(180deg,#f3f6fb,#e6ecf5)',
                borderBottom: '1px solid #d8deea',
              }}
            >
              Trending Now
            </div>
            {[
              ['#Election08', '128k tweets'],
              ['#GetOutTheVote', '64.2k tweets'],
              ['#DebateNight', '41.8k tweets'],
              ['#Yes​WeCan', '29.5k tweets'],
              ['#PollingPlace', '12.1k tweets'],
              ['#TownHall', '8,940 tweets'],
            ].map(([tag, ct], i) => (
              <div
                key={i}
                className="fs-trend"
                style={{
                  padding: '6px 11px',
                  borderBottom: i < 5 ? '1px solid #eef1f6' : 'none',
                  cursor: 'pointer',
                }}
              >
                <div
                  className="fs-tag"
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#2a64b4',
                  }}
                >
                  {tag}
                </div>
                <div style={{ fontSize: 10, color: '#9aa3b2' }}>{ct}</div>
              </div>
            ))}
          </div>

          {/* WHO TO FOLLOW */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #cfd5e0',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(40,60,100,.08)',
            }}
          >
            <div
              style={{
                padding: '7px 11px',
                fontSize: 12,
                fontWeight: 'bold',
                color: '#33455f',
                background: 'linear-gradient(180deg,#f3f6fb,#e6ecf5)',
                borderBottom: '1px solid #d8deea',
              }}
            >
              Who to follow
            </div>
            {[
              ['LV', 'League of Voters', '@lwvoters', '#7a5cc6'],
              ['NP', 'Nate P.', '@pollster_nate', '#d24b4b'],
              ['CN', 'City News 7', '@citynews7', '#2f6fc0'],
            ].map(([ini, nm, un, c], i) => (
              <div
                key={i}
                className="fs-follow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 11px',
                  borderBottom: i < 2 ? '1px solid #eef1f6' : 'none',
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    flexShrink: 0,
                    background: c as string,
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 11,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,.3)',
                  }}
                >
                  {ini}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 11.5,
                      fontWeight: 'bold',
                      color: '#1d2b3e',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {nm}
                  </div>
                  <div style={{ fontSize: 10, color: '#8893a4' }}>{un}</div>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: '#2a64b4',
                    border: '1px solid #b8cdec',
                    borderRadius: 4,
                    padding: '2px 6px',
                    background: 'linear-gradient(180deg,#fff,#eef4fc)',
                    cursor: 'pointer',
                  }}
                >
                  + Follow
                </span>
              </div>
            ))}
          </div>

          {/* LIVE chip / footer flourish */}
          <div
            style={{
              background:
                'linear-gradient(180deg,#fff,#f5f8fc)',
              border: '1px solid #cfd5e0',
              borderRadius: 8,
              padding: '8px 11px',
              fontSize: 10,
              color: '#6b7585',
              boxShadow: '0 1px 2px rgba(40,60,100,.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                className="fs-live"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#3a8c3a',
                  display: 'inline-block',
                }}
              />
              <b style={{ color: '#33455f' }}>2,841,330</b> updates today
            </div>
            <div style={{ marginTop: 4, color: '#a6adb9' }}>
              © 2008 chirpr · about · api · blog · help
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
