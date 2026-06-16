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

/** The milestone spine, 2000 to 2010, across all four forces. */
export const TIMELINE: TimelineEvent[] = [
  {
    id: 'dotcom',
    year: '2000',
    date: 'Mar 2000',
    title: 'The dot-com crash',
    subtitle: 'The first bubble bursts',
    blurb:
      'The NASDAQ peaked in March 2000 and then fell about 78%. Trillions in stock value disappeared and the first internet boom was over.',
    tag: 'world',
    accent: 'tangerine',
    metric: { value: '−78%', label: 'NASDAQ from its peak' },
  },
  {
    id: 'wikipedia',
    year: '2001',
    date: 'Jan 15, 2001',
    title: 'Wikipedia',
    subtitle: 'An encyclopedia anyone can edit',
    blurb:
      'A free encyclopedia that anyone could edit. Within ten years it was one of the most visited sites on the web.',
    tag: 'web',
    accent: 'cyan',
  },
  {
    id: 'macosx',
    year: '2001',
    date: 'Mar 24, 2001',
    title: 'Mac OS X',
    subtitle: 'A new foundation, and the Aqua look',
    blurb:
      "Apple's UNIX-based operating system, with the glassy Aqua look. It became the base for everything Apple built next.",
    tag: 'apple',
    accent: 'cobalt',
  },
  {
    id: 'sept11',
    year: '2001',
    date: 'Sep 11, 2001',
    title: 'September 11',
    subtitle: 'The shock that set the tone',
    blurb:
      'The deadliest attack on US soil. It reshaped politics, security, and privacy for years and started the War on Terror.',
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
      "A click wheel, a white case, and your whole music library in one hand. It started Apple's turnaround.",
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
      'Buy a single track, legally, for a dollar. It sold a million songs in its first week and changed how the music business made money.',
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
      'The first social network to really take off. Profiles were customizable, loud, and set to music.',
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
      'Started in a Harvard dorm as TheFacebook. It put real-life relationships online and reached half a billion people by 2010.',
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
      "Launched on April Fools' Day with 1 GB of free storage, which felt huge at the time. You no longer had to delete old mail.",
    tag: 'web',
    accent: 'tangerine',
    metric: { value: '1 GB', label: 'free storage' },
  },
  {
    id: 'googlemaps',
    year: '2005',
    date: 'Feb 8, 2005',
    title: 'Google Maps',
    subtitle: 'A map you could drag',
    blurb:
      'A map you could drag around, loading new areas as you moved. Paper maps and printed directions started to fade.',
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
      'The first upload was a 19-second clip at the zoo. By 2010 people were posting a full day of video every minute.',
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
      "The first tweet was “just setting up my twttr.” Short public messages turned out to spread news fast.",
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
      'Motion controls got whole families off the couch and helped make gaming mainstream.',
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
      'An iPod, a phone, and an internet device in one piece of glass you controlled with your fingers. Phones were never the same.',
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
      'Jobs slid the thinnest laptop yet out of an office envelope on stage. Thin became the goal.',
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
      'It opened with 500 apps and created a whole industry. A billion downloads followed within nine months.',
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
      'The biggest bankruptcy in US history set off a global financial crisis, the worst since the Depression. Trillions in wealth and millions of jobs were gone.',
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
      "The T-Mobile G1 put Google’s open phone software on sale and set up the platform rivalry of the next decade.",
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
      "Obama’s campaign used the web to organize supporters and raise a record amount of money. He became the first Black US president.",
    tag: 'world',
    accent: 'cobalt',
    metric: { value: '$750M', label: 'raised, much online' },
  },
  {
    id: 'ipad',
    year: '2010',
    date: 'Jan 27, 2010',
    title: 'iPad',
    subtitle: 'A new kind of device',
    blurb:
      'Bigger than a phone, lighter than a laptop. It made a new category between the two.',
    tag: 'apple',
    accent: 'cobalt',
    metric: { value: '15M', label: 'sold in 2010' },
  },
  {
    id: 'instagram',
    year: '2010',
    date: 'Oct 6, 2010',
    title: 'Instagram',
    subtitle: 'Photos on your phone',
    blurb:
      'A photo-sharing app built for the phone camera. It hit a million users in two months and closed out the decade.',
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

/** Big animated statistics — Apple's resurgence + the decade in numbers. */
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
    sub: 'Up from near bankruptcy in 1997. It passed Microsoft in May 2010 at about $222B.',
    accent: 'acid',
  },
  {
    id: 'ipods',
    value: 290,
    suffix: 'M+',
    label: 'iPods sold by 2010',
    sub: 'The product that paid for the turnaround.',
    accent: 'cyan',
  },
  {
    id: 'appdownloads',
    value: 10,
    suffix: 'B',
    label: 'App Store downloads',
    sub: 'Reached less than three years after launch.',
    accent: 'tangerine',
  },
  {
    id: 'songs',
    value: 10,
    suffix: 'B',
    label: 'songs sold on iTunes',
    sub: 'Sold a dollar at a time, by 2010.',
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
      'Grey buttons, visitor counters, and “Under Construction” signs. Pages were things you read, not apps you used.',
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
      'Sidebars, blogrolls, and tiled backgrounds. The personal homepage turned into the personal blog.',
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
      'Rounded corners, soft gradients, and a “beta” badge on almost everything.',
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
      'Gel buttons, starbursts, and reflections on everything. The glossiest the web ever got.',
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
      'Grids, more whitespace, and less decoration. Structure took over from shine.',
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
      'Big type, flatter surfaces, and touch-sized buttons. Sites started being built for the phone first.',
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
    headline: 'Politics changed too.',
    tagline:
      'From the September 11 attacks and the War on Terror to the first presidential campaign run online.',
    context:
      'The decade started with the September 11 attacks, which led to the War on Terror and new surveillance laws that traded privacy for security. It ended with Barack Obama winning the presidency on an online campaign and becoming the first Black president. In between, blogs and websites broke news the big TV networks missed, so regular people could help shape the conversation for the first time.',
    items: [
      {
        year: '2001',
        title: 'September 11',
        blurb:
          'The deadliest attack on US soil shaped the rest of the decade: the War on Terror, the wars in Afghanistan and Iraq, and tighter security everywhere.',
        stat: { value: 2977, label: 'lives lost on 9/11' },
      },
      {
        year: '2001',
        title: 'Security vs. privacy',
        blurb:
          'The USA PATRIOT Act, signed weeks after the attacks, greatly expanded government surveillance and started a long debate over privacy.',
        stat: { value: 45, suffix: ' days', label: 'from attack to law' },
      },
      {
        year: '2008',
        title: 'The first digital campaign',
        blurb:
          'Obama’s campaign used email, video, and social media to organize supporters and raise money, and he became the first Black US president.',
        stat: { value: 750, prefix: '$', suffix: 'M', label: 'raised, much of it online' },
      },
      {
        year: '2004',
        title: 'News loses its gatekeepers',
        blurb:
          'Blogs, forums, and YouTube broke stories the TV networks missed. For the first time, anyone online could help shape the news.',
        stat: { value: 50, suffix: 'M', label: 'blogs tracked by 2006' },
      },
    ],
  },
  {
    id: 'economic',
    numeral: 'II',
    label: 'Economic',
    accent: 'tangerine',
    headline: 'The economy changed a lot too.',
    tagline:
      'The decade began and ended with major crashes, with a new kind of internet business growing in between.',
    context:
      'The 2000s were bracketed by two crashes: the dot-com bust in 2000 and the financial crisis in 2008, the worst since the Great Depression. In between, companies built around search ads, online shopping, and mobile apps became some of the most valuable in the world, and a lot of manufacturing moved to Asia.',
    items: [
      {
        year: '2000',
        title: 'The dot-com crash',
        blurb:
          'The dot-com bubble burst, wiping out trillions of dollars and ending the first internet boom. The companies that survived went on to dominate the web.',
        stat: { value: 78, suffix: '%', label: 'NASDAQ fall from its 2000 peak' },
      },
      {
        year: '2008',
        title: 'The Great Recession',
        blurb:
          'Lehman Brothers collapsed in the largest bankruptcy in US history, setting off a global financial crisis that cost millions of jobs.',
        stat: { value: 8.7, decimals: 1, suffix: 'M', label: 'US jobs lost' },
      },
      {
        year: '2004',
        title: 'Google goes public',
        blurb:
          'Google’s stock-market debut and the growth of search advertising created the main money-making model of the modern internet.',
        stat: { value: 23, prefix: '$', suffix: 'B', label: 'Google revenue by 2009' },
      },
      {
        year: '2008',
        title: 'A brand-new app economy',
        blurb:
          'The App Store created a brand-new software business almost overnight. Developers could now sell apps directly to millions of phones.',
        stat: { value: 500, label: 'apps the day the store opened' },
      },
    ],
  },
  {
    id: 'social',
    numeral: 'III',
    label: 'Social',
    accent: 'magenta',
    headline: 'The way people connect changed too.',
    tagline:
      'How people met, shared, and kept in touch changed once the internet became social.',
    context:
      'In the 2000s, staying in touch moved online and stayed there. Social networks changed how people made friends and presented themselves. YouTube, Wikipedia, and blogs let anyone publish to the world. And as broadband and smartphones spread, being online stopped being a thing you did and became a constant, often without much thought about the personal data you were handing over.',
    items: [
      {
        year: '2004',
        title: 'The social web',
        blurb:
          'MySpace, Facebook, and Twitter changed how people met and shared. Social life moved online and stayed there.',
        stat: { value: 500, suffix: 'M', label: 'Facebook users by 2010' },
      },
      {
        year: '2005',
        title: 'Everyone a broadcaster',
        blurb:
          'YouTube, Wikipedia, and blogs let ordinary people publish to a huge audience for the first time.',
        stat: { value: 24, suffix: ' hrs', label: 'of video uploaded every minute (2010)' },
      },
      {
        year: '2007',
        title: 'Always connected',
        blurb:
          'Broadband replaced dial-up and smartphones put the internet in people’s pockets. Being “online” became constant.',
      },
      {
        year: '2003',
        title: 'The price of “free”',
        blurb:
          'Free services were paid for with personal data through targeted ads. People slowly learned that “if it’s free, you’re the product.”',
      },
    ],
  },
  {
    id: 'technological',
    numeral: 'I',
    label: 'Technological',
    accent: 'cyan',
    headline: 'Technology changed a lot.',
    tagline:
      'The basic tools that everything else relied on: fast internet, the cloud, and the smartphone.',
    context:
      'During the 2000s, the internet went from slow dial-up to always-on broadband and Wi-Fi. Web pages turned into interactive web apps. Companies started renting computing power online instead of buying their own servers (the “cloud”). And phones changed from simple calling devices into pocket computers. These changes were the foundation for almost everything else that happened in the decade.',
    items: [
      {
        year: '2006',
        title: 'The cloud',
        blurb:
          'Amazon Web Services let companies rent computing power and storage by the hour instead of buying servers. This made it much cheaper to start a tech company, and most apps today still run on services like it.',
      },
      {
        year: '2004',
        title: 'Web 2.0',
        blurb:
          'New tools like AJAX and open APIs let websites update without reloading the page. Flat pages became interactive apps such as Gmail and Google Maps.',
      },
      {
        year: '2003',
        title: 'Broadband & Wi-Fi',
        blurb:
          'Always-on broadband and Wi-Fi replaced dial-up. People could stay connected all the time instead of tying up the phone line to get online.',
      },
      {
        year: '2007',
        title: 'The smartphone era',
        blurb:
          'The iPhone and, later, Android replaced basic “feature phones.” The smartphone became the most-used computer for most people.',
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

/* ============================================================
   PAGE LAYER — the site is organized as one page per force.
   The decade-wide thesis lives on the home page; each force
   page carries its own claim, analysis, modern-day connection
   and primary sources (the report's evidentiary spine).
   ============================================================ */

/** The order the four force pages appear in the nav and pager. */
export const PAGE_ORDER: Lens[] = [
  'technological',
  'economic',
  'social',
  'political',
]

/** Lens → the on-page anchor id used by the single-page nav. */
export const FORCE_ANCHOR: Record<Lens, string> = {
  technological: 'tech',
  economic: 'economy',
  social: 'society',
  political: 'politics',
}

/** Route slug ⇄ lens. Slugs are the hash-router paths (e.g. #/technological). */
export const lensByRoute = (route: string): RippleLens | undefined =>
  RIPPLE.find((l) => l.id === route)

/** The overarching argument — answers the rubric's progress/conflict/
 *  transformation prompt for the decade as a whole. Shown on the home page. */
export const DECADE_THESIS = {
  claim:
    'The 2000s were less about steady progress and more about big change. In ten years a few technologies, mainly the internet, the smartphone, and social media, reshaped the economy, changed how people stay in touch, and moved power around.',
  body: 'The decade started rough: the dot-com crash and then the September 11 attacks. It ended with a smartphone in almost everyone’s pocket and the first Black president, elected on an online campaign. Four forces, technological, economic, social, and political, changed at the same time and pushed on each other. Most of the gains came with trade-offs: more connection but less privacy, more opportunity but more instability. To understand the 2000s, you have to look at all four forces together.',
}

/** A modern-day connection — the heart of "Connections to Modern America." */
export interface ThenNow {
  label: string
  then: string
  now: string
}

/** A primary source, with the context + bias analysis the rubric asks for. */
export interface PrimarySource {
  title: string
  author: string
  date: string
  kind: string
  /** What it is and why it matters to this force's claim. */
  context: string
  /** Whose perspective it reflects — and how that shapes it. */
  bias: string
}

export interface LensExtras {
  /** A sharper, page-level claim for this single force. */
  thesis: string
  /** One paragraph drawing the line from the 2000s to today. */
  todayLede: string
  thenNow: ThenNow[]
  sources: PrimarySource[]
}

export const LENS_EXTRAS: Record<Lens, LensExtras> = {
  technological: {
    thesis:
      'The biggest change of the decade was the technology underneath everything. Computing moved off the desktop and onto the internet and the smartphone, so being online went from something you did to something that was always there.',
    todayLede:
      'Almost everything about how we use technology today was built during this decade. Always-on internet, cloud computing, interactive web apps, and touchscreens weren’t around in 2000. They were built between 2000 and 2010, and they are the base modern technology runs on.',
    thenNow: [
      {
        label: 'Connectivity',
        then: 'Dial-up tied you to a desk and a phone line, and getting online was a whole process.',
        now: 'Phones stay connected to fast internet almost everywhere, all the time.',
      },
      {
        label: 'Where software runs',
        then: 'Programs came on discs and ran on the computer in front of you.',
        now: 'Cloud services like AWS run most of the apps you use, rented by the second.',
      },
      {
        label: 'How we control it',
        then: 'You used a mouse, keyboard, or a plastic stylus to control a screen.',
        now: 'Touchscreens are everywhere, controlled with your finger.',
      },
    ],
    sources: [
      {
        title: 'iPhone introduction keynote',
        author: 'Steve Jobs, Apple',
        date: 'Macworld, Jan 9, 2007',
        kind: 'Recorded keynote / video',
        context:
          'The live event where Steve Jobs first showed the iPhone and called it “an iPod, a phone, and an internet communicator” in one device.',
        bias: 'This was an Apple sales event, so everything was chosen to make the product look good. It shows the vision, not the problems that came later.',
      },
      {
        title: '“What Is Web 2.0”',
        author: 'Tim O’Reilly',
        date: 'Sep 30, 2005',
        kind: 'Essay',
        context:
          'The essay that named “Web 2.0,” the shift from simple pages to websites people could interact with and add to.',
        bias: 'It was written by a tech publisher who benefited from the trend, so it is part analysis and part promotion.',
      },
      {
        title: 'Amazon S3 launch announcement',
        author: 'Amazon Web Services',
        date: 'Mar 14, 2006',
        kind: 'Press release',
        context:
          'The announcement of cloud storage that companies could rent by the gigabyte, the start of the infrastructure behind most startups since.',
        bias: 'It is a company press release aimed at developers, so it focuses on the benefits and leaves out the downsides.',
      },
    ],
  },
  economic: {
    thesis:
      'The decade was less about steady growth and more about money shifting from older industries to internet companies. Two big crashes, in 2000 and 2008, marked the start and the end of it.',
    todayLede:
      'A lot of today’s biggest companies got their start or their business model in the 2000s. Search ads, online shopping, and the app economy grew into some of the most valuable businesses in the world, while the 2008 crash changed banking rules and a whole generation’s view of the economy.',
    thenNow: [
      {
        label: 'How big companies make money',
        then: 'Google bet in 2004 that targeted search ads could pay for the whole web.',
        now: 'Ad-supported companies are some of the largest in history, along with a big debate about privacy.',
      },
      {
        label: 'Where we shop',
        then: 'Online shopping was still a small part of retail, and people weren’t sure they could trust it.',
        now: 'Shopping online is normal, and fast delivery has reshaped regular stores.',
      },
      {
        label: 'After the crash',
        then: 'Lehman Brothers’ failure in 2008 caused the worst crisis since the Great Depression.',
        now: 'Rules like Dodd-Frank and the idea of banks being “too big to fail” still shape the economy.',
      },
    ],
    sources: [
      {
        title: 'Form S-1 and the founders’ letter',
        author: 'Google (Larry Page & Sergey Brin)',
        date: 'Filed Apr 29, 2004',
        kind: 'SEC filing / founders’ letter',
        context:
          'Google’s official paperwork for going public, including the founders’ letter, which laid out the search-advertising business that funded the modern internet.',
        bias: 'It is a legal document meant to attract investors, so it is positive by design and only admits what the law requires.',
      },
      {
        title: 'Lehman Brothers bankruptcy filing',
        author: 'Lehman Brothers Holdings Inc.',
        date: 'Sep 15, 2008',
        kind: 'Federal bankruptcy filing',
        context:
          'The largest bankruptcy in U.S. history (about $639 billion), the event that marks the start of the global financial crisis.',
        bias: 'It is a court filing that looks factual, but it came from a failing company that wanted its collapse to look orderly.',
      },
      {
        title: 'Emergency Economic Stabilization Act (TARP)',
        author: 'U.S. Congress',
        date: 'Signed Oct 3, 2008',
        kind: 'Federal legislation',
        context:
          'The $700 billion law that bailed out banks. It was the government’s main response to the crash and the start of years of “too big to fail” debates.',
        bias: 'It was written quickly during a panic and under heavy lobbying, so it reflects what the banks and the Treasury wanted.',
      },
    ],
  },
  social: {
    thesis:
      'Social technology changed how people see themselves and connect. Staying in touch became constant and public, and personal data quietly became the way “free” websites made money.',
    todayLede:
      'A lot of today’s online habits, like posting about your life, scrolling a feed, and expecting an audience, started in this decade. So did the basic trade: the services were free because the companies made money from your data.',
    thenNow: [
      {
        label: 'Identity',
        then: 'A MySpace profile let people design a public version of themselves for the first time.',
        now: 'Feeds chosen by algorithms shape identity and status for billions of people.',
      },
      {
        label: 'Who can broadcast',
        then: 'YouTube, blogs, and Wikipedia let regular people reach a big audience.',
        now: 'Creators make a living online, and anyone can reach millions.',
      },
      {
        label: 'The price of free',
        then: 'Targeted ads and digital tracking showed up faster than the rules to control them.',
        now: 'Data privacy is now a major political and legal issue.',
      },
    ],
    sources: [
      {
        title: '“Me at the zoo”',
        author: 'Jawed Karim (YouTube co-founder)',
        date: 'Apr 23, 2005',
        kind: 'Video / digital artifact',
        context:
          'The first video ever posted on YouTube, 19 seconds that marked the start of regular people making and sharing video.',
        bias: 'It was just a casual clip, not a statement. It only seems important looking back, which is part of what makes it interesting.',
      },
      {
        title: '“just setting up my twttr”',
        author: 'Jack Dorsey',
        date: 'Mar 21, 2006',
        kind: 'Social-media post',
        context:
          'The first tweet ever posted, the beginning of short, public, real-time messages that changed how news spreads.',
        bias: 'It was a throwaway test message, with none of the political weight Twitter would later have.',
      },
      {
        title: '“Why Youth ♥ Social Network Sites”',
        author: 'danah boyd (researcher)',
        date: '2007',
        kind: 'Academic essay',
        context:
          'A study from the time about how teenagers actually used MySpace and Facebook, written by a researcher instead of a company.',
        bias: 'It is academic and sympathetic to teens, and it was meant to push back on the negative way the news covered these sites.',
      },
    ],
  },
  political: {
    thesis:
      'After 9/11, power moved in two directions at once. The government gained more surveillance power in the name of security, while blogs and social media let regular people break news and get around the big TV networks.',
    todayLede:
      'A lot of today’s political arguments started in the 2000s: how to balance security and privacy, running campaigns like data operations, and a news system where anyone can break a story, or fake one. We are still arguing about the questions this decade raised.',
    thenNow: [
      {
        label: 'Security vs. privacy',
        then: 'The PATRIOT Act expanded surveillance 45 days after 9/11.',
        now: 'After leaks like Snowden’s, the fight over surveillance and privacy is ongoing and worldwide.',
      },
      {
        label: 'How campaigns run',
        then: 'Obama’s 2008 campaign used email, video, and social media and raised record money online.',
        now: 'Campaigns are run with data and target voters individually.',
      },
      {
        label: 'Who controls the story',
        then: 'Blogs and forums broke stories the TV networks missed.',
        now: 'Social media is the front page, and a major source of misinformation.',
      },
    ],
    sources: [
      {
        title: 'USA PATRIOT Act',
        author: 'U.S. Congress',
        date: 'Signed Oct 26, 2001',
        kind: 'Federal legislation',
        context:
          'The law passed after 9/11 that greatly expanded government surveillance. It began the modern fight over security versus privacy.',
        bias: 'It was passed in 45 days during a time of fear, so it reflects security agencies’ priorities more than privacy concerns.',
      },
      {
        title: 'Address to the Nation on 9/11',
        author: 'President George W. Bush',
        date: 'Sep 11, 2001',
        kind: 'Presidential speech',
        context:
          'President Bush’s address to the country on the night of September 11. It is a record of how the decade’s biggest shock was explained to the public.',
        bias: 'It is a leader speaking during a crisis, meant to reassure people, so it shapes emotion as much as it reports facts.',
      },
      {
        title: 'Election-night victory speech (Grant Park)',
        author: 'President-elect Barack Obama',
        date: 'Nov 4, 2008',
        kind: 'Campaign speech',
        context:
          'The speech at the end of the first internet-powered presidential campaign, and the election of the first Black president.',
        bias: 'It is a victory speech built to inspire, so it celebrates the moment and leaves out the challenges that came next.',
      },
    ],
  },
}
