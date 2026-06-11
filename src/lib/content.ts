/* ============================================================
   THE DECADE · Content / data layer
   All copy + data the sections render. Kept here so the whole
   narrative can be tuned (and fact-checked) in one place.
   ============================================================ */

export type Tag = 'apple' | 'web' | 'mobile' | 'culture' | 'hardware' | 'world'

export interface TimelineEvent {
  id: string
  year: string
  date: string
  title: string
  subtitle: string
  blurb: string
  tag: Tag
  accent: string // CSS color var name token, e.g. 'cyan'
  metric?: { value: string; label: string }
}

/** The milestone spine, 2000 → 2010 — across all four forces. */
export const TIMELINE: TimelineEvent[] = [
  {
    id: 'dotcom',
    year: '2000',
    date: 'Mar 2000',
    title: 'The dot-com crash',
    subtitle: 'The first bubble bursts',
    blurb:
      'The NASDAQ peaked in March 2000 and then collapsed roughly 78%, erasing trillions in paper wealth and ending the first internet gold rush.',
    tag: 'world',
    accent: 'tangerine',
    metric: { value: '−78%', label: 'NASDAQ from its peak' },
  },
  {
    id: 'wikipedia',
    year: '2001',
    date: 'Jan 15, 2001',
    title: 'Wikipedia',
    subtitle: 'The sum of human knowledge, editable by anyone',
    blurb:
      'A free encyclopedia that anyone could edit launched quietly — and within a decade became one of the most visited sites on Earth.',
    tag: 'web',
    accent: 'cyan',
  },
  {
    id: 'macosx',
    year: '2001',
    date: 'Mar 24, 2001',
    title: 'Mac OS X',
    subtitle: 'Aqua, and a new foundation',
    blurb:
      "Apple's UNIX-based operating system arrived with the liquid Aqua interface — the bedrock everything Apple built next would stand on.",
    tag: 'apple',
    accent: 'cobalt',
  },
  {
    id: 'sept11',
    year: '2001',
    date: 'Sep 11, 2001',
    title: 'September 11',
    subtitle: 'The decade’s defining shock',
    blurb:
      'The deadliest attack on US soil reshaped politics, security and privacy for a generation — and launched the War on Terror.',
    tag: 'world',
    accent: 'steel',
    metric: { value: '2,977', label: 'lives lost' },
  },
  {
    id: 'ipod',
    year: '2001',
    date: 'Oct 23, 2001',
    title: 'iPod',
    subtitle: '1,000 songs in your pocket',
    blurb:
      'A scroll wheel, a white-on-white silhouette, and your entire music library on your hip. The object that began Apple’s comeback.',
    tag: 'apple',
    accent: 'acid',
    metric: { value: '1,000', label: 'songs in your pocket' },
  },
  {
    id: 'itunes',
    year: '2003',
    date: 'Apr 28, 2003',
    title: 'iTunes Store',
    subtitle: 'A song for 99¢',
    blurb:
      'Buy one track, legally, for a dollar. It sold a million songs in its first week and rewrote the economics of the music industry.',
    tag: 'apple',
    accent: 'magenta',
    metric: { value: '1M', label: 'songs sold in first week' },
  },
  {
    id: 'myspace',
    year: '2003',
    date: 'Aug 2003',
    title: 'MySpace',
    subtitle: 'A profile, a song, a Top 8',
    blurb:
      'The first social network to truly scale — glittery, customizable, and soundtracked. The internet became a place you decorated.',
    tag: 'culture',
    accent: 'grape',
  },
  {
    id: 'facebook',
    year: '2004',
    date: 'Feb 4, 2004',
    title: 'Facebook',
    subtitle: 'The social graph',
    blurb:
      'Born in a Harvard dorm as “TheFacebook.” It mapped real relationships onto the web and would reach half a billion people by 2010.',
    tag: 'web',
    accent: 'cobalt',
    metric: { value: '500M', label: 'users by 2010' },
  },
  {
    id: 'gmail',
    year: '2004',
    date: 'Apr 1, 2004',
    title: 'Gmail',
    subtitle: 'A gigabyte of inbox',
    blurb:
      'Launched on April Fools’ with a then-absurd 1 GB of free storage. Email stopped being something you deleted.',
    tag: 'web',
    accent: 'tangerine',
    metric: { value: '1 GB', label: 'free storage' },
  },
  {
    id: 'googlemaps',
    year: '2005',
    date: 'Feb 8, 2005',
    title: 'Google Maps',
    subtitle: 'The world, draggable',
    blurb:
      'A slippy, draggable map that loaded as you moved. Within years, getting lost became a choice.',
    tag: 'web',
    accent: 'cyan',
  },
  {
    id: 'youtube',
    year: '2005',
    date: 'Apr 23, 2005',
    title: 'YouTube',
    subtitle: '“Me at the zoo”',
    blurb:
      'The first upload was 19 seconds at the zoo. By 2010 the world was uploading a full day of video every single minute.',
    tag: 'culture',
    accent: 'magenta',
    metric: { value: '24 hrs', label: 'uploaded every minute (2010)' },
  },
  {
    id: 'twitter',
    year: '2006',
    date: 'Mar 21, 2006',
    title: 'Twitter',
    subtitle: '140 characters',
    blurb:
      'The first tweet — “just setting up my twttr.” A global nervous system compressed into a single line of text.',
    tag: 'culture',
    accent: 'cyan',
    metric: { value: '140', label: 'characters' },
  },
  {
    id: 'wii',
    year: '2006',
    date: 'Nov 19, 2006',
    title: 'Nintendo Wii',
    subtitle: 'You are the controller',
    blurb:
      'Motion control put the whole living room on its feet and pulled gaming out of the bedroom and into the mainstream.',
    tag: 'hardware',
    accent: 'lime',
  },
  {
    id: 'iphone',
    year: '2007',
    date: 'Jan 9, 2007',
    title: 'iPhone',
    subtitle: 'Apple reinvents the phone',
    blurb:
      'An iPod, a phone, and an internet communicator — fused into a single sheet of glass you touched with your fingers. Everything after this is the after.',
    tag: 'mobile',
    accent: 'acid',
    metric: { value: '6.1M', label: 'first-gen units sold' },
  },
  {
    id: 'macbookair',
    year: '2008',
    date: 'Jan 15, 2008',
    title: 'MacBook Air',
    subtitle: 'Out of a manila envelope',
    blurb:
      'Jobs slid the world’s thinnest notebook out of an interoffice envelope on stage. The future would be impossibly thin.',
    tag: 'apple',
    accent: 'chrome',
  },
  {
    id: 'appstore',
    year: '2008',
    date: 'Jul 10, 2008',
    title: 'App Store',
    subtitle: 'There’s an app for that',
    blurb:
      'It opened with 500 apps and detonated an industry. The phone became a platform — and a billion downloads followed within nine months.',
    tag: 'mobile',
    accent: 'tangerine',
    metric: { value: '500', label: 'apps at launch' },
  },
  {
    id: 'lehman',
    year: '2008',
    date: 'Sep 15, 2008',
    title: 'Lehman Brothers falls',
    subtitle: 'The Great Recession begins',
    blurb:
      'The largest bankruptcy in US history triggered a global financial crisis — the worst since the Depression — erasing trillions in wealth and millions of jobs.',
    tag: 'world',
    accent: 'tangerine',
    metric: { value: '$639B', label: 'largest US bankruptcy' },
  },
  {
    id: 'android',
    year: '2008',
    date: 'Sep 23, 2008',
    title: 'Android',
    subtitle: 'The open challenger',
    blurb:
      'The T-Mobile G1 brought Google’s open mobile OS to market — and set up the defining platform rivalry of the next decade.',
    tag: 'mobile',
    accent: 'lime',
  },
  {
    id: 'obama',
    year: '2008',
    date: 'Nov 4, 2008',
    title: 'A digital election',
    subtitle: 'Politics moves online',
    blurb:
      'Barack Obama’s web-powered campaign mobilized millions and raised a record sum online — and he became the first Black US president.',
    tag: 'world',
    accent: 'cobalt',
    metric: { value: '$750M', label: 'raised, much online' },
  },
  {
    id: 'ipad',
    year: '2010',
    date: 'Jan 27, 2010',
    title: 'iPad',
    subtitle: 'A third category',
    blurb:
      'Bigger than a phone, lighter than a laptop. A magazine you could hold — and a new canvas for everything.',
    tag: 'apple',
    accent: 'cobalt',
    metric: { value: '15M', label: 'sold in 2010' },
  },
  {
    id: 'instagram',
    year: '2010',
    date: 'Oct 6, 2010',
    title: 'Instagram',
    subtitle: 'A square, a filter',
    blurb:
      'A camera-first social app built for the phone in your pocket. It hit a million users in two months and closed the decade.',
    tag: 'culture',
    accent: 'magenta',
    metric: { value: '1M', label: 'users in 2 months' },
  },
]

/** Tracks shown spinning on the interactive iPod click-wheel. */
export interface Track {
  title: string
  artist: string
  year: string
}
export const IPOD_TRACKS: Track[] = [
  { title: 'Hey Ya!', artist: 'OutKast', year: '2003' },
  { title: 'Crazy in Love', artist: 'Beyoncé', year: '2003' },
  { title: 'Seven Nation Army', artist: 'The White Stripes', year: '2003' },
  { title: 'Mr. Brightside', artist: 'The Killers', year: '2004' },
  { title: 'Since U Been Gone', artist: 'Kelly Clarkson', year: '2004' },
  { title: 'Feel Good Inc.', artist: 'Gorillaz', year: '2005' },
  { title: 'Crazy', artist: 'Gnarls Barkley', year: '2006' },
  { title: 'Rehab', artist: 'Amy Winehouse', year: '2006' },
  { title: 'Viva la Vida', artist: 'Coldplay', year: '2008' },
  { title: 'I Gotta Feeling', artist: 'Black Eyed Peas', year: '2009' },
]

/** Original 2007 iPhone home screen (springboard) icons + dock. */
export interface PhoneApp {
  name: string
  glyph: string // emoji stand-in for the era icon
  bg: string // css gradient/color
}
export const IPHONE_APPS: PhoneApp[] = [
  { name: 'Text', glyph: '💬', bg: 'linear-gradient(180deg,#7ee07e,#34a534)' },
  { name: 'Calendar', glyph: '📅', bg: 'linear-gradient(180deg,#fff,#ddd)' },
  { name: 'Photos', glyph: '🌻', bg: 'linear-gradient(180deg,#fff,#e7e7e7)' },
  { name: 'Camera', glyph: '📷', bg: 'linear-gradient(180deg,#3a3a3a,#111)' },
  { name: 'YouTube', glyph: '📺', bg: 'linear-gradient(180deg,#5a5a5a,#1c1c1c)' },
  { name: 'Stocks', glyph: '📈', bg: 'linear-gradient(180deg,#4a4a4a,#0d0d0d)' },
  { name: 'Maps', glyph: '🗺️', bg: 'linear-gradient(180deg,#cfe8a0,#8cb84f)' },
  { name: 'Weather', glyph: '⛅', bg: 'linear-gradient(180deg,#5aa6e6,#1f6fc0)' },
  { name: 'Clock', glyph: '🕙', bg: 'linear-gradient(180deg,#3a3a3a,#0a0a0a)' },
  { name: 'Calculator', glyph: '🧮', bg: 'linear-gradient(180deg,#4a4a4a,#161616)' },
  { name: 'Notes', glyph: '📝', bg: 'linear-gradient(180deg,#ffe9a8,#f4c95d)' },
  { name: 'Settings', glyph: '⚙️', bg: 'linear-gradient(180deg,#d8d8d8,#9a9a9a)' },
]
export const IPHONE_DOCK: PhoneApp[] = [
  { name: 'Phone', glyph: '📞', bg: 'linear-gradient(180deg,#7ee07e,#2f9b2f)' },
  { name: 'Mail', glyph: '✉️', bg: 'linear-gradient(180deg,#7cc6ff,#2a7fd0)' },
  { name: 'Safari', glyph: '🧭', bg: 'linear-gradient(180deg,#8fd0ff,#2670c8)' },
  { name: 'iPod', glyph: '🎵', bg: 'linear-gradient(180deg,#ff8a3d,#e8541a)' },
]

/** App Store explosion — emblematic apps of 2008–2010 (stylized, not logos). */
export interface StoreApp {
  name: string
  glyph: string
  hue: string
  year: string
}
export const STORE_APPS: StoreApp[] = [
  { name: 'Facebook', glyph: 'f', hue: '#3b5998', year: '2008' },
  { name: 'Tweetie', glyph: '🐦', hue: '#1da1f2', year: '2008' },
  { name: 'Shazam', glyph: '♪', hue: '#0098ff', year: '2008' },
  { name: 'Pandora', glyph: '▶', hue: '#005483', year: '2008' },
  { name: 'Tap Tap', glyph: '●', hue: '#ff2e63', year: '2008' },
  { name: 'Skype', glyph: 'S', hue: '#00aff0', year: '2009' },
  { name: 'WhatsApp', glyph: '✆', hue: '#25d366', year: '2009' },
  { name: 'Angry Birds', glyph: '🐦', hue: '#e23b2e', year: '2009' },
  { name: 'Doodle Jump', glyph: '↑', hue: '#7bc043', year: '2009' },
  { name: 'Spotify', glyph: '♫', hue: '#1db954', year: '2009' },
  { name: 'Foursquare', glyph: '◆', hue: '#f94877', year: '2009' },
  { name: 'Words', glyph: 'W', hue: '#d23b2e', year: '2009' },
  { name: 'Fruit Ninja', glyph: '🍉', hue: '#d8412f', year: '2010' },
  { name: 'Instagram', glyph: '◉', hue: '#c13584', year: '2010' },
  { name: 'Flipboard', glyph: '❏', hue: '#e12828', year: '2010' },
  { name: 'Hipstamatic', glyph: '◫', hue: '#f7c948', year: '2010' },
]

/** Big animated statistics — Apple's resurrection + the decade in numbers. */
export interface Stat {
  id: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub: string
  accent: string
}
export const STATS: Stat[] = [
  {
    id: 'marketcap',
    value: 250,
    prefix: '$',
    suffix: 'B',
    label: 'Apple market cap, end of 2010',
    sub: 'From near-bankruptcy in 1997 — and ~$222B when it passed Microsoft in May 2010.',
    accent: 'acid',
  },
  {
    id: 'ipods',
    value: 290,
    suffix: 'M+',
    label: 'iPods sold by 2010',
    sub: 'The device that funded the comeback.',
    accent: 'cyan',
  },
  {
    id: 'appdownloads',
    value: 10,
    suffix: 'B',
    label: 'App Store downloads',
    sub: 'Reached in under three years from launch.',
    accent: 'tangerine',
  },
  {
    id: 'songs',
    value: 10,
    suffix: 'B',
    label: 'songs sold on iTunes',
    sub: 'A dollar at a time, by 2010.',
    accent: 'magenta',
  },
]

/** Apple's value trajectory for the chart (approx. year-end market cap, $B). */
export interface ValuePoint {
  year: string
  cap: number
  note?: string
}
export const APPLE_TRAJECTORY: ValuePoint[] = [
  { year: '2000', cap: 5, note: 'Post dot-com' },
  { year: '2001', cap: 8, note: 'iPod' },
  { year: '2003', cap: 7, note: 'iTunes Store' },
  { year: '2005', cap: 60 },
  { year: '2007', cap: 150, note: 'iPhone' },
  { year: '2008', cap: 76, note: 'Financial crisis' },
  { year: '2010', cap: 250, note: 'Passed Microsoft' },
]

export interface Quote {
  text: string
  attribution: string
}
export const QUOTES: Record<string, Quote> = {
  ipod: { text: '1,000 songs in your pocket.', attribution: 'Apple · iPod, 2001' },
  iphone: {
    text: 'Today, Apple is going to reinvent the phone.',
    attribution: 'Steve Jobs · Macworld, January 9, 2007',
  },
  iphoneTriad: {
    text: 'An iPod, a phone, and an internet communicator. These are not three separate devices.',
    attribution: 'Steve Jobs · 2007',
  },
  foolish: {
    text: 'Stay hungry. Stay foolish.',
    attribution: 'Steve Jobs · Stanford, 2005',
  },
}

/**
 * Web-design eras — drives the "The Web, year by year" chapter, where a
 * period-accurate browser morphs through how the web actually looked across
 * the decade. `key` maps to the era mock component rendered inside the browser.
 */
export interface WebEra {
  id: string
  key: string
  yearStart: number
  yearEnd: number
  yearLabel: string
  name: string
  browser: string
  url: string
  tags: string[]
  blurb: string
  /** rgb triplet for the era's ambient glow behind the browser */
  ambient: string
}
export const WEB_ERAS: WebEra[] = [
  {
    id: 'static',
    key: 'EraStatic',
    yearStart: 2000,
    yearEnd: 2001,
    yearLabel: '2000–2001',
    name: 'The Static Web',
    browser: 'Internet Explorer 5',
    url: 'http://www.geocities.com/SiliconValley/9042/',
    tags: ['Table layouts', 'Blue underlined links', 'Web-safe greys', 'Visitor counters', 'Times New Roman'],
    blurb:
      'Beveled grey buttons, a hit counter and “Under Construction.” The web was a document you read, not an app you used.',
    ambient: '46, 92, 92',
  },
  {
    id: 'portal',
    key: 'EraPortal',
    yearStart: 2002,
    yearEnd: 2003,
    yearLabel: '2002–2003',
    name: 'Portals & Blogs',
    browser: 'Internet Explorer 6',
    url: 'http://www.angelfire.com/weblog/index.html',
    tags: ['Three-column tables', 'Verdana 11px', 'Tiled backgrounds', 'Blogrolls', 'Guestbooks'],
    blurb:
      'Sidebars, blogrolls and a tiled background. The personal homepage became the personal blog.',
    ambient: '120, 96, 40',
  },
  {
    id: 'dawn',
    key: 'EraDawn',
    yearStart: 2004,
    yearEnd: 2005,
    yearLabel: '2004–2005',
    name: 'Web 2.0 Dawn',
    browser: 'Mozilla Firefox',
    url: 'http://www.flickr.com/photos/',
    tags: ['Rounded corners', 'Glossy gradients', '“Beta” badges', 'Big friendly type', 'Pastel palettes'],
    blurb:
      'Rounded corners, soft gradients and a permanent beta badge. The web learned to smile.',
    ambient: '40, 120, 200',
  },
  {
    id: 'gloss',
    key: 'EraGloss',
    yearStart: 2006,
    yearEnd: 2007,
    yearLabel: '2006–2007',
    name: 'Peak Gloss',
    browser: 'Mozilla Firefox',
    url: 'http://digg.com/technology',
    tags: ['Gel buttons', 'Starbursts', 'Drop shadows', 'Reflections', 'Letterpress text'],
    blurb:
      'Gel buttons, starbursts and reflections on everything. Maximum shine, maximum gradient.',
    ambient: '210, 90, 30',
  },
  {
    id: 'grid',
    key: 'EraGrid',
    yearStart: 2008,
    yearEnd: 2009,
    yearLabel: '2008–2009',
    name: 'The Grid',
    browser: 'Safari 3',
    url: 'http://twitter.com/home',
    tags: ['12-column grids', 'Subtle gradients', 'Helvetica Neue', 'More whitespace', 'Sober palettes'],
    blurb:
      'Grids, restraint and breathing room. The gloss receded and structure took over.',
    ambient: '60, 110, 150',
  },
  {
    id: 'clean',
    key: 'EraClean',
    yearStart: 2010,
    yearEnd: 2010,
    yearLabel: '2010',
    name: 'Clean & Mobile',
    browser: 'Google Chrome',
    url: 'https://instagr.am/',
    tags: ['Big type', 'Flat-ish surfaces', 'Retina-ready', 'Touch targets', 'Minimal chrome'],
    blurb:
      'Big type, flatter surfaces and touch-sized targets. The web started designing for the phone first.',
    ambient: '40, 150, 150',
  },
]

/**
 * "The Ripple" — the decade's impact across four lenses (a PEST view).
 * Comprehensive but uncluttered: the chapter shows ONE lens at a time.
 * Curated for accuracy; figures are fact-checked and rounded for clarity.
 */
export type Lens = 'political' | 'economic' | 'social' | 'technological'

export interface RippleStat {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}
export interface RippleItem {
  year: string
  title: string
  blurb: string
  stat?: RippleStat
}
export interface RippleLens {
  id: Lens
  /** Roman force number, e.g. 'I'. */
  numeral: string
  label: string
  accent: string
  /** Big act thesis. */
  headline: string
  tagline: string
  /** Richer framing paragraph — the substance of the act. */
  context: string
  items: RippleItem[]
}

export const RIPPLE: RippleLens[] = [
  {
    id: 'political',
    numeral: 'IV',
    label: 'Political',
    accent: 'cobalt',
    headline: 'Power changed hands.',
    tagline: 'A new century opened with a shock — and a new kind of power.',
    context:
      'The decade began with the deadliest attack on American soil and a War on Terror that rewrote law, travel and privacy. It ended with a campaign run on email and YouTube — and the first Black US president. In between, the gatekeepers of news lost their monopoly: anyone with a connection could now break a story.',
    items: [
      {
        year: '2001',
        title: 'September 11',
        blurb:
          'The deadliest attack on US soil reshaped the decade: the War on Terror, the wars in Afghanistan and Iraq, and a new age of security.',
        stat: { value: 2977, label: 'lives lost on 9/11' },
      },
      {
        year: '2001',
        title: 'Security vs. privacy',
        blurb:
          'The USA PATRIOT Act, signed weeks after the attacks, vastly expanded state surveillance — making privacy the defining tension of the digital age.',
        stat: { value: 45, suffix: ' days', label: 'from attack to law' },
      },
      {
        year: '2008',
        title: 'The first digital campaign',
        blurb:
          'Barack Obama’s run turned email, video and social networks into a movement, and he became the first Black US president.',
        stat: { value: 750, prefix: '$', suffix: 'M', label: 'raised, much of it online' },
      },
      {
        year: '2004',
        title: 'News loses its gatekeepers',
        blurb:
          'Blogs, forums and YouTube broke stories the networks missed. For the first time, anyone with a connection could shape the conversation.',
        stat: { value: 50, suffix: 'M', label: 'blogs tracked by 2006' },
      },
    ],
  },
  {
    id: 'economic',
    numeral: 'II',
    label: 'Economic',
    accent: 'tangerine',
    headline: 'The money moved.',
    tagline: 'A bust, a boom, and a crash — bookending a decade of reinvention.',
    context:
      'Two crashes bracketed the decade: the dot-com bust that ended the first internet gold rush, and the 2008 financial crisis — the worst since the Depression. Between them, search advertising, e-commerce and a brand-new app economy minted fortunes, while manufacturing and supply chains shifted decisively toward Asia.',
    items: [
      {
        year: '2000',
        title: 'The dot-com crash',
        blurb:
          'The bubble burst, erasing trillions in paper wealth and ending the first internet gold rush — but the survivors would inherit the web.',
        stat: { value: 78, suffix: '%', label: 'NASDAQ fall from its 2000 peak' },
      },
      {
        year: '2008',
        title: 'The Great Recession',
        blurb:
          'Lehman Brothers’ collapse — the largest bankruptcy in US history — triggered a global crisis that reset the economy.',
        stat: { value: 8.7, decimals: 1, suffix: 'M', label: 'US jobs lost' },
      },
      {
        year: '2004',
        title: 'Google goes public',
        blurb:
          'Google’s IPO and the rise of search advertising built the engine of the modern internet economy.',
        stat: { value: 23, prefix: '$', suffix: 'B', label: 'Google revenue by 2009' },
      },
      {
        year: '2008',
        title: 'A brand-new app economy',
        blurb:
          'Hardware moved to Asia and software moved to the store. The App Store minted a developer industry that hadn’t existed the year before.',
        stat: { value: 500, label: 'apps the day the store opened' },
      },
    ],
  },
  {
    id: 'social',
    numeral: 'III',
    label: 'Social',
    accent: 'magenta',
    headline: 'We changed.',
    tagline: 'How a billion people met, shared, and lived — online.',
    context:
      'Connection moved online and stayed there. Social networks rewired friendship and identity; YouTube, Wikipedia and blogs handed the microphone to everyone; and the smartphone made “being online” a permanent state rather than a place you visited — at the cost of a privacy we hadn’t yet learned to value.',
    items: [
      {
        year: '2004',
        title: 'The social web',
        blurb:
          'MySpace, Facebook and Twitter rewired how people meet, share and fall out. Social life moved online — and stayed there.',
        stat: { value: 500, suffix: 'M', label: 'Facebook users by 2010' },
      },
      {
        year: '2005',
        title: 'Everyone a broadcaster',
        blurb:
          'YouTube, Wikipedia and blogs democratized media. The audience picked up the camera and never gave it back.',
        stat: { value: 24, suffix: ' hrs', label: 'of video uploaded every minute (2010)' },
      },
      {
        year: '2007',
        title: 'Always connected',
        blurb:
          'Broadband replaced dial-up and the smartphone put the web in every pocket. “Online” stopped being a place you visited.',
      },
      {
        year: '2003',
        title: 'The price of “free”',
        blurb:
          'Targeted ads, digital footprints and oversharing arrived together. The decade learned, slowly, that if it’s free, you’re the product.',
      },
    ],
  },
  {
    id: 'technological',
    numeral: 'I',
    label: 'Technological',
    accent: 'cyan',
    headline: 'The tools were rebuilt.',
    tagline: 'The plumbing that made everything else possible.',
    context:
      'Dial-up gave way to always-on broadband and Wi-Fi; the desktop web became a read-write platform of open APIs; computing itself moved into the cloud as a rentable utility; and the phone evolved from a calling device into the most important computer most people would ever own.',
    items: [
      {
        year: '2006',
        title: 'The cloud',
        blurb:
          'Amazon Web Services turned computing into a utility you rent by the hour — the foundation under every startup that followed.',
      },
      {
        year: '2004',
        title: 'Web 2.0',
        blurb:
          'AJAX, open APIs and the read-write web turned flat pages into living applications you could talk back to.',
      },
      {
        year: '2003',
        title: 'Broadband & Wi-Fi',
        blurb:
          'Always-on connections and ubiquitous Wi-Fi untethered the internet from the desk and filled the home.',
      },
      {
        year: '2007',
        title: 'The smartphone era',
        blurb:
          'Feature phones gave way to the iPhone and Android. The pocket computer became the most important device of the century.',
        stat: { value: 6.1, decimals: 1, suffix: 'M', label: 'first-gen iPhones sold' },
      },
    ],
  },
]

/** Economic force viz — the NASDAQ arc (real index values) showing the decade's boom→bust→boom→bust→recovery. */
export interface MarketPoint {
  year: string
  when: string
  label: string
  value: number
}
export const NASDAQ_ARC: MarketPoint[] = [
  { year: '2000', when: 'Mar 2000', label: 'Dot-com peak', value: 5048 },
  { year: '2002', when: 'Oct 2002', label: 'Dot-com crash', value: 1114 },
  { year: '2007', when: 'Oct 2007', label: 'Pre-crisis high', value: 2859 },
  { year: '2009', when: 'Mar 2009', label: 'Financial crisis', value: 1268 },
  { year: '2010', when: 'Dec 2010', label: 'Recovery', value: 2653 },
]

/** Social force viz — platforms that wired the world together. */
export interface SocialNode {
  name: string
  glyph: string
  year: string
  hue: string
}
export const SOCIAL_NODES: SocialNode[] = [
  { name: 'Wikipedia', glyph: 'W', year: '2001', hue: '#38e8ff' },
  { name: 'MySpace', glyph: 'M', year: '2003', hue: '#a855f7' },
  { name: 'Facebook', glyph: 'f', year: '2004', hue: '#4366ff' },
  { name: 'YouTube', glyph: '▶', year: '2005', hue: '#ff2e9a' },
  { name: 'Twitter', glyph: 't', year: '2006', hue: '#34e7ff' },
]

/** Section registry — drives the side-dot navigation. */
export interface SectionMeta {
  id: string
  index: string
  label: string
}
export const SECTIONS: SectionMeta[] = [
  { id: 'hero', index: '00', label: 'Prelude' },
  { id: 'tech', index: 'I', label: 'Technological' },
  { id: 'economy', index: 'II', label: 'Economic' },
  { id: 'society', index: 'III', label: 'Social' },
  { id: 'politics', index: 'IV', label: 'Political' },
  { id: 'finale', index: '∞', label: 'A New Canvas' },
]
