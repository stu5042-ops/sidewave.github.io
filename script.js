/* SIDEWAVE artist and curated album catalog. Live events are loaded only from configured APIs. */
window.SIDEWAVE_DATA = (() => {
  const rows = [
    // Global / international
    ['maroon-5','Maroon 5','GLOBAL','Pop Rock','band','M5'],
    ['green-day','Green Day','GLOBAL','Punk Rock','band','GD'],
    ['oasis','Oasis','GLOBAL','Britpop','band','O'],
    ['radiohead','Radiohead','GLOBAL','Alternative','band','RH'],
    ['ye','Kanye West (Ye)','GLOBAL','Hip-Hop','solo','YE'],
    ['arctic-monkeys','Arctic Monkeys','GLOBAL','Indie Rock','band','AM'],
    ['coldplay','Coldplay','GLOBAL','Pop Rock','band','C'],
    ['the-1975','The 1975','GLOBAL','Indie Pop','band','1975'],
    ['the-strokes','The Strokes','GLOBAL','Indie Rock','band','TS'],
    ['tame-impala','Tame Impala','GLOBAL','Psychedelic Pop','solo','TI'],
    ['the-killers','The Killers','GLOBAL','Alternative','band','TK'],
    ['foo-fighters','Foo Fighters','GLOBAL','Rock','band','FF'],
    ['muse','Muse','GLOBAL','Alternative Rock','band','M'],
    ['blur','Blur','GLOBAL','Britpop','band','B'],
    ['queen','Queen','GLOBAL','Classic Rock','band','Q'],
    ['the-beatles','The Beatles','GLOBAL','Classic Pop','band','TB'],
    ['nirvana','Nirvana','GLOBAL','Grunge','band','N'],
    ['rhcp','Red Hot Chili Peppers','GLOBAL','Funk Rock','band','RHCP'],
    ['linkin-park','Linkin Park','GLOBAL','Alternative Rock','band','LP'],
    ['paramore','Paramore','GLOBAL','Alternative','band','P'],
    ['imagine-dragons','Imagine Dragons','GLOBAL','Pop Rock','band','ID'],
    ['twenty-one-pilots','Twenty One Pilots','GLOBAL','Alternative Pop','duo','TOP'],
    ['vampire-weekend','Vampire Weekend','GLOBAL','Indie Pop','band','VW'],
    ['smashing-pumpkins','The Smashing Pumpkins','GLOBAL','Alternative Rock','band','SP'],
    ['my-chemical-romance','My Chemical Romance','GLOBAL','Emo Rock','band','MCR'],
    ['fall-out-boy','Fall Out Boy','GLOBAL','Pop Punk','band','FOB'],
    ['weezer','Weezer','GLOBAL','Alternative Rock','band','W'],
    ['the-cure','The Cure','GLOBAL','Post-Punk','band','TC'],
    ['the-smiths','The Smiths','GLOBAL','Indie Rock','band','TS'],
    ['the-xx','The xx','GLOBAL','Indie Pop','band','XX'],
    ['cigarettes-after-sex','Cigarettes After Sex','GLOBAL','Dream Pop','band','CAS'],
    ['beach-house','Beach House','GLOBAL','Dream Pop','duo','BH'],
    ['men-i-trust','Men I Trust','GLOBAL','Indie Pop','band','MIT'],
    ['mac-demarco','Mac DeMarco','GLOBAL','Indie Pop','solo','MD'],
    ['rex-orange-county','Rex Orange County','GLOBAL','Indie Pop','solo','ROC'],
    ['clairo','Clairo','GLOBAL','Indie Pop','solo','CL'],
    ['beabadoobee','beabadoobee','GLOBAL','Indie Rock','solo','BB'],
    ['laufey','Laufey','GLOBAL','Jazz Pop','solo','L'],
    ['billie-eilish','Billie Eilish','GLOBAL','Alt Pop','solo','BE'],
    ['taylor-swift','Taylor Swift','GLOBAL','Pop','solo','TS'],
    ['olivia-rodrigo','Olivia Rodrigo','GLOBAL','Pop Rock','solo','OR'],
    ['sabrina-carpenter','Sabrina Carpenter','GLOBAL','Pop','solo','SC'],
    ['harry-styles','Harry Styles','GLOBAL','Pop Rock','solo','HS'],
    ['dua-lipa','Dua Lipa','GLOBAL','Dance Pop','solo','DL'],
    ['bruno-mars','Bruno Mars','GLOBAL','Pop / R&B','solo','BM'],
    ['the-weeknd','The Weeknd','GLOBAL','Pop / R&B','solo','TW'],
    ['frank-ocean','Frank Ocean','GLOBAL','Alternative R&B','solo','FO'],
    ['kendrick-lamar','Kendrick Lamar','GLOBAL','Hip-Hop','solo','KL'],
    ['tyler-the-creator','Tyler, The Creator','GLOBAL','Hip-Hop','solo','TC'],
    ['travis-scott','Travis Scott','GLOBAL','Hip-Hop','solo','TR'],
    ['childish-gambino','Childish Gambino','GLOBAL','Alt R&B','solo','CG'],
    ['post-malone','Post Malone','GLOBAL','Pop / Hip-Hop','solo','PM'],
    ['sza','SZA','GLOBAL','R&B','solo','SZA'],
    ['lana-del-rey','Lana Del Rey','GLOBAL','Dream Pop','solo','LDR'],
    ['phoebe-bridgers','Phoebe Bridgers','GLOBAL','Indie Folk','solo','PB'],
    ['boygenius','boygenius','GLOBAL','Indie Rock','group','BG'],
    ['bon-iver','Bon Iver','GLOBAL','Indie Folk','band','BI'],
    ['fleet-foxes','Fleet Foxes','GLOBAL','Indie Folk','band','FF'],
    ['sigur-ros','Sigur Rós','GLOBAL','Post-Rock','band','SR'],
    ['daft-punk','Daft Punk','GLOBAL','Electronic','duo','DP'],
    ['justice','Justice','GLOBAL','Electronic','duo','J'],
    ['gorillaz','Gorillaz','GLOBAL','Alternative','virtual band','G'],
    ['the-national','The National','GLOBAL','Indie Rock','band','TN'],
    ['interpol','Interpol','GLOBAL','Post-Punk','band','I'],
    ['franz-ferdinand','Franz Ferdinand','GLOBAL','Indie Rock','band','FF'],
    ['foals','Foals','GLOBAL','Indie Rock','band','F'],
    ['placebo','Placebo','GLOBAL','Alternative Rock','band','P'],
    ['keane','Keane','GLOBAL','Alternative Pop','band','K'],
    ['the-libertines','The Libertines','GLOBAL','Indie Rock','band','TL'],
    ['pixies','Pixies','GLOBAL','Alternative Rock','band','PX'],
    ['the-white-stripes','The White Stripes','GLOBAL','Garage Rock','duo','WS'],
    ['the-doors','The Doors','GLOBAL','Classic Rock','band','TD'],
    ['pink-floyd','Pink Floyd','GLOBAL','Progressive Rock','band','PF'],
    ['led-zeppelin','Led Zeppelin','GLOBAL','Classic Rock','band','LZ'],
    ['the-rolling-stones','The Rolling Stones','GLOBAL','Classic Rock','band','RS'],
    ['u2','U2','GLOBAL','Rock','band','U2'],
    ['the-chemical-brothers','The Chemical Brothers','GLOBAL','Electronic','duo','CB'],
    ['porter-robinson','Porter Robinson','GLOBAL','Electronic','solo','PR'],
    ['mitski','Mitski','GLOBAL','Indie Rock','solo','MI'],
    ['beach-bunny','Beach Bunny','GLOBAL','Indie Pop','band','BB'],
    ['the-last-dinner-party','The Last Dinner Party','GLOBAL','Indie Rock','band','LDP'],
    ['wolf-alice','Wolf Alice','GLOBAL','Alternative','band','WA'],
    ['slowdive','Slowdive','GLOBAL','Shoegaze','band','SD'],
    ['yoasobi','YOASOBI','JP','J-Pop','duo','YO'],
    ['fujii-kaze','Fujii Kaze','JP','J-Pop','solo','FK'],
    ['king-gnu','King Gnu','JP','Alternative','band','KG'],
    ['one-ok-rock','ONE OK ROCK','JP','Rock','band','OOR'],
    // Korea
    ['silica-gel','실리카겔','KR','인디 록','band','SG'],
    ['hyukoh','혁오 (HYUKOH)','KR','인디 록','band','HY'],
    ['jannabi','잔나비','KR','인디 팝','band','JB'],
    ['black-skirts','검정치마','KR','인디 팝','solo','BC'],
    ['se-so-neon','새소년','KR','인디 록','band','SS'],
    ['day6','DAY6','KR','밴드 팝','band','D6'],
    ['n-flying','엔플라잉','KR','밴드 팝','band','NF'],
    ['lucy','LUCY','KR','밴드 팝','band','LC'],
    ['the-poles','더 폴스','KR','인디 록','band','TP'],
    ['thornapple','쏜애플','KR','사이키델릭 록','band','TA'],
    ['guckkasten','국카스텐','KR','얼터너티브 록','band','GK'],
    ['nell','넬 (NELL)','KR','모던 록','band','N'],
    ['broccoli-you-too','브로콜리너마저','KR','인디 팝','band','BYT'],
    ['sister-barbershop','언니네이발관','KR','인디 록','band','SB'],
    ['jang-kiha','장기하와 얼굴들','KR','인디 록','band','JH'],
    ['yb','YB','KR','록','band','YB'],
    ['jaurim','자우림','KR','록','band','JR'],
    ['delispice','델리스파이스','KR','모던 록','band','DS'],
    ['nobrain','노브레인','KR','펑크 록','band','NB'],
    ['crying-nut','크라잉넛','KR','펑크 록','band','CN'],
    ['surl','SURL','KR','인디 록','band','S'],
    ['wave-to-earth','wave to earth','KR','인디 팝','band','WTE'],
    ['92914','92914','KR','인디 팝','duo','92914'],
    ['adoy','ADOY','KR','신스 팝','band','A'],
    ['glen-check','Glen Check','KR','일렉트로닉','band','GC'],
    ['o3ohn','오존 (O3ohn)','KR','인디 팝','solo','O3'],
    ['lee-seung-yoon','이승윤','KR','록','solo','LSY'],
    ['yudabinband','유다빈밴드','KR','인디 록','band','YDB'],
    ['touched','터치드','KR','록','band','TD'],
    ['soran','소란','KR','인디 팝','band','SR'],
    ['peppertones','페퍼톤스','KR','인디 팝','duo','PT'],
    ['romantic-punch','로맨틱펀치','KR','록','band','RP'],
    ['the-solutions','The Solutions','KR','인디 록','band','TS'],
    ['jambinai','잠비나이','KR','포스트 록','band','J'],
    ['cotoba','cotoba','KR','포스트 록','band','CO'],
    ['band-nah','밴드 나상현씨밴드','KR','인디 록','band','NS'],
    ['d82','D82','KR','밴드 팝','band','D82'],
    ['ft-island','FTISLAND','KR','록','band','FT'],
    ['cnblue','CNBLUE','KR','록','band','CNB'],
    ['the-rose','The Rose','KR','인디 록','band','TR'],
    ['dreamcatcher','드림캐쳐','KR','록 팝','group','DC'],
    ['iu','아이유 (IU)','KR','팝','solo','IU'],
    ['akmu','AKMU','KR','팝','duo','AK'],
    ['bts','BTS','KR','팝','group','BTS'],
    ['blackpink','BLACKPINK','KR','팝','group','BP'],
    ['newjeans','NewJeans','KR','팝','group','NJ'],
    ['aespa','aespa','KR','팝','group','AE'],
    ['le-sserafim','LE SSERAFIM','KR','팝','group','LS'],
    ['seventeen','SEVENTEEN','KR','팝','group','SVT'],
    ['red-velvet','Red Velvet','KR','팝','group','RV'],
    ['taeyeon','태연','KR','팝','solo','TY'],
    ['dpr-ian','DPR IAN','KR','얼터너티브 R&B','solo','DPR'],
    ['dean','DEAN','KR','R&B','solo','DE'],
    ['zion-t','자이언티','KR','R&B','solo','ZT'],
    ['crush','Crush','KR','R&B','solo','CR'],
    ['heize','헤이즈','KR','R&B','solo','HZ'],
    ['bibi','비비 (BIBI)','KR','얼터너티브 팝','solo','BB'],
    ['epik-high','에픽하이','KR','힙합','group','EH'],
    ['dynamicduo','다이나믹 듀오','KR','힙합','duo','DD'],
    ['j-hope','제이홉','KR','힙합','solo','JH'],
    ['taemin','태민','KR','팝','solo','TM'],
    ['shinee','SHINee','KR','팝','group','SH'],
    ['exo','EXO','KR','팝','group','EXO'],
    ['nct-127','NCT 127','KR','팝','group','NCT'],
    ['gidle','(여자)아이들','KR','팝','group','IDLE'],
    ['stayc','STAYC','KR','팝','group','ST'],
    ['kiss-of-life','KISS OF LIFE','KR','팝','group','KIOF']
  ];
  const artists = rows.map(([id,name,country,genre,kind,monogram], i) => ({
    id, name, country, genre, kind, monogram,
    accent: ['#b6f09c','#f3c1b4','#d1c5f5','#f6df8d','#acdce0','#f0b6d4','#c2d2ff'][i % 7],
    gradient: [
      'linear-gradient(135deg,#272a3c,#8586c7)',
      'linear-gradient(135deg,#293e37,#a1c29d)',
      'linear-gradient(135deg,#49302f,#edaa8f)',
      'linear-gradient(135deg,#252b45,#9baee9)',
      'linear-gradient(135deg,#533b65,#d8a4d3)',
      'linear-gradient(135deg,#34475a,#9dd5d1)',
      'linear-gradient(135deg,#33312d,#ddb879)'
    ][i % 7]
  }));

  const albums = {
    'radiohead': [
      {title:'OK Computer',year:'1997',note:'Alternative rock · Essential',tone:'album-purple'},
      {title:'In Rainbows',year:'2007',note:'Art rock · Warm & layered',tone:'album-coral'},
      {title:'The Bends',year:'1995',note:'Alternative rock · Classic',tone:'album-blue'}
    ],
    'oasis': [
      {title:"(What's the Story) Morning Glory?",year:'1995',note:'Britpop · Essential',tone:'album-sand'},
      {title:'Definitely Maybe',year:'1994',note:'Britpop · Raw & bright',tone:'album-green'},
      {title:'Be Here Now',year:'1997',note:'Britpop · Big sound',tone:'album-purple'}
    ],
    'silica-gel': [
      {title:'POWER ANDRE 99',year:'2023',note:'Alternative · Experimental',tone:'album-green'},
      {title:'Machine Boy',year:'2024',note:'Alternative rock · Expansive',tone:'album-blue'},
      {title:'Desert Eagle',year:'2021',note:'Indie rock · Cult favorite',tone:'album-coral'}
    ],
    'hyukoh': [
      {title:'23',year:'2017',note:'Indie rock · Restless',tone:'album-blue'},
      {title:'24 : How to find true love and happiness',year:'2018',note:'Indie · Reflective',tone:'album-sand'},
      {title:'20',year:'2014',note:'Indie rock · Early days',tone:'album-green'}
    ],
    'jannabi': [
      {title:'전설',year:'2019',note:'Indie pop · Nostalgic',tone:'album-sand'},
      {title:'환상의 나라',year:'2021',note:'Indie rock · Cinematic',tone:'album-purple'},
      {title:'MONKEY HOTEL',year:'2016',note:'Indie pop · Playful',tone:'album-coral'}
    ],
    'green-day': [
      {title:'Dookie',year:'1994',note:'Punk rock · Essential',tone:'album-coral'},
      {title:'American Idiot',year:'2004',note:'Punk rock · Concept album',tone:'album-green'},
      {title:'Nimrod',year:'1997',note:'Punk rock · Fan favorite',tone:'album-blue'}
    ],
    'maroon-5': [
      {title:'Songs About Jane',year:'2002',note:'Pop rock · Debut classic',tone:'album-sand'},
      {title:'It Won’t Be Soon Before Long',year:'2007',note:'Pop · Sleek & bright',tone:'album-purple'},
      {title:'V',year:'2014',note:'Pop · Radio favorites',tone:'album-blue'}
    ],
    'arctic-monkeys': [
      {title:'AM',year:'2013',note:'Indie rock · Essential',tone:'album-blue'},
      {title:'Favourite Worst Nightmare',year:'2007',note:'Indie rock · High energy',tone:'album-coral'},
      {title:'The Car',year:'2022',note:'Lounge rock · Cinematic',tone:'album-sand'}
    ],
    'day6': [
      {title:'The Book of Us : The Demon',year:'2020',note:'Band pop · Intense',tone:'album-purple'},
      {title:'The Day',year:'2015',note:'Band pop · Debut EP',tone:'album-green'},
      {title:'Fourever',year:'2024',note:'Band pop · Bright',tone:'album-blue'}
    ],
    'black-skirts': [
      {title:'201',year:'2010',note:'Indie rock · Lo-fi classic',tone:'album-sand'},
      {title:'TEAM BABY',year:'2017',note:'Indie pop · Tender',tone:'album-coral'},
      {title:'THIRSTY',year:'2019',note:'Indie · Textured',tone:'album-purple'}
    ],
    'wave-to-earth': [
      {title:'0.1 flaws and all.',year:'2023',note:'Indie pop · Dreamy',tone:'album-green'},
      {title:'summer flows 0.02',year:'2020',note:'Indie · Soft textures',tone:'album-blue'},
      {title:'wave 0.01',year:'2019',note:'Indie · Early release',tone:'album-sand'}
    ],
    'coldplay': [
      {title:'Parachutes',year:'2000',note:'Alternative · Debut',tone:'album-green'},
      {title:'Viva la Vida or Death and All His Friends',year:'2008',note:'Art rock · Expansive',tone:'album-purple'},
      {title:'A Rush of Blood to the Head',year:'2002',note:'Alternative · Classic',tone:'album-blue'}
    ],
    'ye': [
      {title:'The College Dropout',year:'2004',note:'Hip-hop · Debut classic',tone:'album-sand'},
      {title:'Late Registration',year:'2005',note:'Hip-hop · Orchestral',tone:'album-green'},
      {title:'Graduation',year:'2007',note:'Hip-hop · Pop crossover',tone:'album-purple'}
    ],
    'radiohead': [
      {title:'OK Computer',year:'1997',note:'Alternative rock · Essential',tone:'album-purple'},
      {title:'In Rainbows',year:'2007',note:'Art rock · Warm & layered',tone:'album-coral'},
      {title:'The Bends',year:'1995',note:'Alternative rock · Classic',tone:'album-blue'}
    ],
    'clairo': [
      {title:'Immunity',year:'2019',note:'Indie pop · Intimate',tone:'album-blue'},
      {title:'Sling',year:'2021',note:'Indie folk · Soft focus',tone:'album-sand'},
      {title:'Charm',year:'2024',note:'Indie pop · Warm',tone:'album-coral'}
    ],
    'billie-eilish': [
      {title:'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',year:'2019',note:'Alt pop · Breakthrough',tone:'album-green'},
      {title:'Happier Than Ever',year:'2021',note:'Alt pop · Intimate',tone:'album-sand'},
      {title:'HIT ME HARD AND SOFT',year:'2024',note:'Alt pop · Immersive',tone:'album-blue'}
    ],
    'the-1975': [
      {title:'Being Funny in a Foreign Language',year:'2022',note:'Indie pop · Polished',tone:'album-sand'},
      {title:'I like it when you sleep...',year:'2016',note:'Pop · Expansive',tone:'album-purple'},
      {title:'A Brief Inquiry Into Online Relationships',year:'2018',note:'Alternative · Restless',tone:'album-blue'}
    ],
    'se-so-neon': [
      {title:'Nonadaptation',year:'2020',note:'Indie rock · Bold',tone:'album-coral'},
      {title:'Summer Plumage',year:'2017',note:'Indie rock · Debut EP',tone:'album-green'},
      {title:'Kidd',year:'2022',note:'Indie · Expansive',tone:'album-purple'}
    ],
    'nell': [
      {title:'Separation Anxiety',year:'2008',note:'Modern rock · Essential',tone:'album-blue'},
      {title:'Healing Process',year:'2006',note:'Modern rock · Emotional',tone:'album-sand'},
      {title:'Let It Rain',year:'2003',note:'Modern rock · Early classic',tone:'album-green'}
    ],
    'paramore': [
      {title:'Riot!',year:'2007',note:'Pop punk · Essential',tone:'album-coral'},
      {title:'After Laughter',year:'2017',note:'New wave · Bright & bittersweet',tone:'album-green'},
      {title:'This Is Why',year:'2023',note:'Alternative · Angular',tone:'album-purple'}
    ],
    'mitski': [
      {title:'Be the Cowboy',year:'2018',note:'Indie pop · Essential',tone:'album-sand'},
      {title:'Laurel Hell',year:'2022',note:'Indie pop · Synth-driven',tone:'album-purple'},
      {title:'The Land Is Inhospitable and So Are We',year:'2023',note:'Indie folk · Cinematic',tone:'album-blue'}
    ],
    'iu': [
      {title:'Palette',year:'2017',note:'Pop · Thoughtful',tone:'album-coral'},
      {title:'Love Poem',year:'2019',note:'Pop · Emotional',tone:'album-sand'},
      {title:'The Winning',year:'2024',note:'Pop · Expressive',tone:'album-purple'}
    ],
    'tame-impala': [
      {title:'Currents',year:'2015',note:'Psychedelic pop · Essential',tone:'album-purple'},
      {title:'The Slow Rush',year:'2020',note:'Psychedelic pop · Dreamy',tone:'album-blue'},
      {title:'Lonerism',year:'2012',note:'Psychedelic rock · Classic',tone:'album-green'}
    ],
    'the-strokes': [
      {title:'Is This It',year:'2001',note:'Indie rock · Essential',tone:'album-sand'},
      {title:'Room on Fire',year:'2003',note:'Indie rock · Tight & bright',tone:'album-coral'},
      {title:'The New Abnormal',year:'2020',note:'Alternative · Return',tone:'album-blue'}
    ],
    'bts': [
      {title:'Love Yourself 轉 Tear',year:'2018',note:'Pop · R&B textures',tone:'album-purple'},
      {title:'Map of the Soul: 7',year:'2020',note:'Pop · Expansive',tone:'album-blue'},
      {title:'BE',year:'2020',note:'Pop · Reflective',tone:'album-sand'}
    ],
    'blackpink': [
      {title:'THE ALBUM',year:'2020',note:'Pop · High impact',tone:'album-coral'},
      {title:'BORN PINK',year:'2022',note:'Pop · Bold',tone:'album-purple'},
      {title:'SQUARE UP',year:'2018',note:'Pop · Debut EP',tone:'album-blue'}
    ]
  };

  const tours = []; // No invented tour dates: live events come from configured APIs only.

  return { artists, albums, tours };
})();

/* SIDEWAVE app logic. Public music metadata loads from no-key URLs; tour dates link to current official source pages. */
(() => {
  'use strict';
  const DATA = window.SIDEWAVE_DATA;
  const root = document.getElementById('app');
  if (!root || !DATA) return;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const STORAGE = {
    theme: 'sidewave-theme-v2', lang: 'sidewave-lang-v2', following: 'sidewave-following-v2',
    name: 'sidewave-profile-name-v2', playlist: 'sidewave-youtube-playlist-v2', currentVideo: 'sidewave-current-video-v2',
    events: 'sidewave-url-sources-events-v1', ticketmasterKey: 'sidewave-ticketmaster-key-v1'
  };
  const seedPlaylist = [
    { id: 'seed-radiohead-creep', videoId: 'XFkzRNyygfk', title: 'Creep', artistName: 'Radiohead', sourceUrl: 'https://www.youtube.com/watch?v=XFkzRNyygfk' },
    { id: 'seed-oasis-wonderwall', videoId: 'bx1Bh8ZvH84', title: 'Wonderwall', artistName: 'Oasis', sourceUrl: 'https://www.youtube.com/watch?v=bx1Bh8ZvH84' },
    { id: 'seed-greenday-basketcase', videoId: 'NUTGr5t3MoY', title: 'Basket Case', artistName: 'Green Day', sourceUrl: 'https://www.youtube.com/watch?v=NUTGr5t3MoY' },
    { id: 'seed-maroon5-sugar', videoId: '09R8_2nJtjg', title: 'Sugar', artistName: 'Maroon 5', sourceUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg' }
  ];
  const safeParse = (raw, fallback) => { try { const parsed = JSON.parse(raw); return parsed ?? fallback; } catch { return fallback; } };
  const artistMap = new Map(DATA.artists.map(a => [a.id, a]));
  const state = {
    theme: localStorage.getItem(STORAGE.theme) || 'light',
    lang: localStorage.getItem(STORAGE.lang) || 'ko',
    following: safeParse(localStorage.getItem(STORAGE.following), ['silica-gel','radiohead','oasis']).filter(id => artistMap.has(id)),
    name: localStorage.getItem(STORAGE.name) || '음악 탐험가',
    playlist: safeParse(localStorage.getItem(STORAGE.playlist), null) || seedPlaylist.map(item => ({ ...item })),
    currentVideoId: localStorage.getItem(STORAGE.currentVideo) || seedPlaylist[0].videoId,
    // The URL-only edition doesn't keep API-key based event data or stale event caches.
    events: [], eventsUpdated: 0, eventsArtists: '', tourStatus: 'not-configured', genre: 'all', search: '', region: 'all',
    ticketmasterKey: localStorage.getItem(STORAGE.ticketmasterKey) || '', activeArtistTab: 'albums', itunesTracks: new Map(), loadingTours: false
  };
  const normalize = value => String(value || '').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9가-힣]+/g,' ').trim();
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const artist = id => artistMap.get(id) || DATA.artists[0];
  const isFollowing = id => state.following.includes(id);
  const tr = (ko, en) => state.lang === 'ko' ? ko : en;
  const savePreferences = () => {
    try {
      localStorage.setItem(STORAGE.theme, state.theme);
      localStorage.setItem(STORAGE.lang, state.lang);
      localStorage.setItem(STORAGE.following, JSON.stringify(state.following));
      localStorage.setItem(STORAGE.name, state.name);
      localStorage.setItem(STORAGE.playlist, JSON.stringify(state.playlist));
      localStorage.setItem(STORAGE.currentVideo, state.currentVideoId);
    } catch (error) { console.warn('SIDEWAVE: local storage unavailable', error); }
  };
  let currentRoute = 'home';
  let currentArtistId = 'silica-gel';
  let mapInstance = null;
  let ytPlayer = null;
  let ytApiLoading = false;
  let ytReady = false;
  let imageObserver = null;
  const itunesCache = new Map();
  const artistPhotoCache = new Map();
  const albumPhotoCache = new Map();

  function readRoute() {
    const raw = location.hash.replace(/^#/, '') || 'home';
    const [routeName, query = ''] = raw.split('?');
    const params = new URLSearchParams(query);
    const allowed = ['home','artists','artist','tours','library','help'];
    return { route: allowed.includes(routeName) ? routeName : 'home', id: params.get('id') || 'silica-gel', q: params.get('q') || '' };
  }
  function go(route, params = {}) {
    const query = new URLSearchParams(params).toString();
    return `#${route}${query ? `?${query}` : ''}`;
  }
  function artistName(id) { return artist(id).name; }
  function officialLinks(a) {
    const name = encodeURIComponent(a.name);
    const q = encodeURIComponent(`${a.name} official tour dates tickets`);
    const links = [
      { label: 'Bandsintown', url: `https://www.bandsintown.com/search?query=${name}` },
      { label: 'Songkick', url: `https://www.songkick.com/search?query=${name}` },
      { label: 'Ticketmaster', url: `https://www.ticketmaster.com/search?q=${name}` },
      { label: tr('공식 일정 검색','Official tour search'), url: `https://www.google.com/search?q=${q}` }
    ];
    if (a.country === 'KR') {
      links.push(
        { label: 'Interpark Ticket', url: `https://tickets.interpark.com/search?keyword=${name}` },
        { label: 'Melon Ticket', url: `https://ticket.melon.com/search/index.htm?keyword=${name}` }
      );
    }
    return links;
  }
  function ticketUrl(ev, a) {
    if (ev && ev.ticketUrl) return ev.ticketUrl;
    if (ev && ev.url) return ev.url;
    return `https://www.ticketmaster.com/search?q=${encodeURIComponent(`${a.name} ${ev?.city || ''} concert tickets`)}`;
  }
  function navItem(route, label, icon) {
    const active = currentRoute === route || (route === 'artists' && currentRoute === 'artist');
    return `<a class="nav-link ${active ? 'active' : ''}" href="${go(route)}"><span class="nav-icon">${icon}</span><span>${label}</span></a>`;
  }
  function shell(content) {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.lang;
    root.dataset.theme = state.theme;
    document.title = `${currentRoute === 'artist' ? esc(artist(currentArtistId).name) + ' · ' : ''}SIDEWAVE — Music & Live`;
    const searchPlaceholder = tr('아티스트 검색…','Search artists…');
    root.innerHTML = `
      <div class="layout">
        <aside class="sidebar">
          <a class="brand" href="${go('home')}" aria-label="SIDEWAVE home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>sidewave<span class="brand-dot">.</span></span></a>
          <div class="nav-label">MUSIC SPACE</div>
          <nav class="main-nav">
            ${navItem('home',tr('내 프로필','My profile'),'▦')}
            ${navItem('artists',tr('아티스트','Artists'),'♫')}
            ${navItem('tours',tr('투어 지도','Tour map'),'◎')}
            ${navItem('library',tr('내 플레이리스트','My playlist'),'▷')}
          </nav>
          <div class="sidebar-bottom">
            <div class="side-note"><span class="side-note-icon">♫</span><div><strong>${esc(state.name)}</strong><small>${state.following.length} ${tr('팀 팔로우 중','artists followed')}</small></div></div>
            ${navItem('help',tr('도움말','Help center'),'?')}
            <div class="sidebar-foot">SIDEWAVE · ${tr('내 음악과 라이브','Music & live')}</div>
          </div>
        </aside>
        <div class="app-main">
          <header class="topbar">
            <div class="mobile-brand"><a class="brand" href="${go('home')}"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>sidewave<span class="brand-dot">.</span></span></a></div>
            <label class="search-box"><span>⌕</span><input id="global-search" type="search" placeholder="${searchPlaceholder}" aria-label="${searchPlaceholder}"><span>↵</span></label>
            <div class="top-actions">
              <button class="icon-btn" data-action="theme" aria-label="${tr('테마 전환','Toggle theme')}" title="${tr('테마 전환','Toggle theme')}">${state.theme === 'light' ? '☾' : '☼'}</button>
              <button class="language-btn" data-action="language" aria-label="${tr('언어 전환','Switch language')}">${state.lang === 'ko' ? 'EN' : '한'}</button>
              <span class="profile-dot">${esc((state.name.trim()[0] || 'S').toLocaleUpperCase())}</span>
            </div>
          </header>
          <main class="main-content">${content}</main>
          <footer class="page-footer"><span>SIDEWAVE · ${tr('팔로우, 음악, 실제 이벤트 출처를 한곳에','Follow artists, listen, and check sourced events')}</span><a href="${go('help')}">${tr('사용 안내','How it works')} ↗</a></footer>
        </div>
      </div>
      <div id="toast" class="toast" role="status" aria-live="polite"></div>`;
    $('#global-search')?.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.currentTarget.value.trim()) location.hash = `artists?q=${encodeURIComponent(e.currentTarget.value.trim())}`;
    });
  }

  function profileHome() {
    const activeEvents = upcomingEvents().length;
    const initials = (state.name.trim().split(/\s+/).map(part => part[0]).join('').slice(0,2) || 'S').toLocaleUpperCase();
    const followed = state.following.map(artist).slice(0,8);
    return `
      <section class="surface home-profile">
        <div class="profile-main">
          <div class="profile-avatar">${esc(initials)}</div>
          <div>
            <div class="eyebrow">MY MUSIC PROFILE</div>
            <h1 class="profile-name">${tr('안녕하세요,','Hello,')} ${esc(state.name)}</h1>
            <div class="subtle" style="font-size:11px">${tr('내가 팔로우한 아티스트와 저장한 음악','Your followed artists and saved music')}</div>
            <div class="profile-summary">
              <span class="stat-chip"><strong>${state.following.length}</strong>${tr('팔로우','following')}</span>
              <span class="stat-chip"><strong>${state.playlist.length}</strong>${tr('곡','playlist tracks')}</span>
              <span class="stat-chip"><strong>${activeEvents}</strong>${tr('예정 공연','upcoming shows')}</span>
            </div>
          </div>
        </div>
        <form class="profile-edit" id="profile-form">
          <div class="field"><label for="profile-name">${tr('표시 이름','Display name')}</label><input id="profile-name" maxlength="32" value="${esc(state.name)}" placeholder="${tr('이름을 입력해 주세요','Enter a name')}"></div>
          <button class="btn primary" type="submit">${tr('저장','Save')}</button>
        </form>
      </section>
      <section class="section">
        <div class="section-head"><div><div class="eyebrow">YOUR ARTISTS</div><h2>${tr('팔로우 중인 아티스트','Artists you follow')}</h2></div><a class="section-link" href="${go('artists')}">${tr('아티스트 찾기','Find artists')} ↗</a></div>
        ${followed.length ? `<div class="following-grid">${followed.map(artistCard).join('')}</div>` : `<div class="empty-state"><strong>${tr('아직 팔로우한 아티스트가 없어요.','No followed artists yet.')}</strong><p>${tr('아티스트를 팔로우하면 이곳에서 바로 확인할 수 있어요.','Follow artists to see them here.')}</p><a class="btn primary" href="${go('artists')}">${tr('아티스트 둘러보기','Browse artists')} ↗</a></div>`}
      </section>
      <section class="section two-col">
        <div class="surface panel"><div class="section-head"><div><div class="eyebrow">LIVE RADAR</div><h2>${tr('예정 공연','Upcoming shows')}</h2></div><a class="section-link" href="${go('tours')}">${tr('지도 열기','Open map')} ↗</a></div>${miniUpcoming()}</div>
        <div class="surface panel"><div class="section-head"><div><div class="eyebrow">YOUR PLAYLIST</div><h2>${tr('내 음악','My music')}</h2></div><a class="section-link" href="${go('library')}">${tr('플레이어 열기','Open player')} ↗</a></div>${miniPlaylist()}</div>
      </section>`;
  }
  function artistCard(a) {
    return `<article class="artist-card">
      <a class="artist-cover" href="${go('artist',{id:a.id})}" data-cover-artist="${esc(a.id)}" style="--cover:${a.gradient}" aria-label="${esc(a.name)}">
        <span class="cover-country">${a.country === 'KR' ? 'KR' : esc(a.country || 'INTL')}</span><span class="cover-monogram">${esc(a.monogram)}</span>
      </a>
      <div class="artist-card-info"><div class="artist-card-top"><a class="artist-name" href="${go('artist',{id:a.id})}">${esc(a.name)}</a><button class="follow-btn ${isFollowing(a.id) ? 'active' : ''}" data-action="follow" data-id="${esc(a.id)}"><span>${isFollowing(a.id) ? '✓' : '+'}</span>${isFollowing(a.id) ? tr('팔로잉','Following') : tr('팔로우','Follow')}</button></div><div class="artist-meta">${esc(a.genre)} · ${a.country === 'KR' ? tr('국내','Korea') : tr('해외','Global')}</div></div>
    </article>`;
  }
  function artistsPage(query = '') {
    const groups = [
      ['all',tr('전체','All')],['KR',tr('국내','Korean')],['GLOBAL',tr('해외','International')],['band',tr('밴드','Band')],['solo',tr('솔로','Solo')],['group',tr('그룹','Group')],['duo',tr('듀오','Duo')]
    ];
    return `<section class="page-heading"><div><div class="eyebrow">ARTIST DIRECTORY</div><h1>${tr('아티스트','Artists')}</h1><p>${tr(`${DATA.artists.length}팀의 국내외 아티스트를 검색하고 팔로우할 수 있어요.`, `Search and follow ${DATA.artists.length} artists from Korea and around the world.`)}</p></div><div class="heading-count">${String(DATA.artists.length).padStart(3,'0')}<small>ARTISTS</small></div></section>
      <section class="artist-tools"><label class="artist-search"><span>⌕</span><input id="artist-search" type="search" value="${esc(query)}" placeholder="${tr('이름, 장르 검색','Search name or genre')}"><span id="artist-count"></span></label><div class="filter-pills">${groups.map(([key,label])=>`<button class="filter-pill ${state.genre === key ? 'active' : ''}" data-action="filter" data-filter="${key}">${label}</button>`).join('')}</div></section>
      <div class="artist-grid" id="artist-results"></div>`;
  }
  function renderArtistResults() {
    const container = $('#artist-results');
    if (!container) return;
    const input = $('#artist-search');
    const query = (input?.value || '').trim().toLocaleLowerCase();
    const matches = DATA.artists.filter(a => {
      const text = `${a.name} ${a.genre} ${a.country} ${a.kind}`.toLocaleLowerCase();
      const qMatch = !query || text.includes(query);
      const filterMatch = state.genre === 'all' || (state.genre === 'KR' ? a.country === 'KR' : state.genre === 'GLOBAL' ? a.country !== 'KR' : a.kind === state.genre);
      return qMatch && filterMatch;
    });
    container.innerHTML = matches.map(artistCard).join('') || `<div class="empty-state"><strong>${tr('검색 결과가 없어요.','No results found.')}</strong><p>${tr('다른 이름이나 장르로 검색해 보세요.','Try a different name or genre.')}</p></div>`;
    const count = $('#artist-count'); if (count) count.textContent = `${matches.length} / ${DATA.artists.length}`;
    observeArtwork();
  }
  function albumCard(album, a) {
    const searchQuery = `${a.name} ${album.title}`;
    return `<article class="album-card">
      <a class="album-cover" data-cover-album="${esc(searchQuery)}" style="--cover:${a.gradient}" href="https://music.apple.com/${a.country === 'KR' ? 'kr' : 'us'}/search?term=${encodeURIComponent(searchQuery)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(album.title)}">
        <span class="album-title-art">${esc(album.title)}</span>
      </a>
      <div class="album-meta"><div class="album-title">${esc(album.title)}</div><div class="album-sub">${esc(a.name)} · ${esc(album.year || '')}</div></div>
    </article>`;
  }
  function artistPage(id) {
    const a = artist(id);
    const albums = DATA.albums[a.id] || [];
    const events = upcomingEvents().filter(ev => ev.artistId === a.id);
    const active = state.activeArtistTab;
    return `<section class="artist-profile">
      <div class="artist-profile-cover" data-cover-artist="${esc(a.id)}" style="--cover:${a.gradient}"><span class="cover-monogram">${esc(a.monogram)}</span></div>
      <div class="artist-profile-info"><div class="eyebrow">ARTIST PROFILE · ${a.country === 'KR' ? 'KR' : 'GLOBAL'}</div><h1>${esc(a.name)}</h1><div class="profile-tags"><span class="tag">${esc(a.genre)}</span><span class="tag">${esc(a.kind)}</span><span class="tag">${a.country === 'KR' ? tr('국내 아티스트','Korean artist') : tr('해외 아티스트','International artist')}</span></div><div class="profile-actions"><button class="btn ${isFollowing(a.id) ? 'primary' : ''}" data-action="follow" data-id="${esc(a.id)}">${isFollowing(a.id) ? '✓ ' + tr('팔로잉','Following') : '+ ' + tr('팔로우','Follow')}</button><a class="btn" href="https://music.apple.com/${a.country === 'KR' ? 'kr' : 'us'}/search?term=${encodeURIComponent(a.name)}" target="_blank" rel="noopener noreferrer">Apple Music ↗</a><a class="btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(a.name + ' official music') }" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div></div>
      </section>
      <nav class="artist-tabs" aria-label="Artist details">
        <button class="artist-tab ${active === 'albums' ? 'active' : ''}" data-action="artist-tab" data-tab="albums">${tr('앨범','Albums')}</button>
        <button class="artist-tab ${active === 'songs' ? 'active' : ''}" data-action="artist-tab" data-tab="songs">${tr('노래','Songs')}</button>
        <button class="artist-tab ${active === 'tours' ? 'active' : ''}" data-action="artist-tab" data-tab="tours">${tr('투어·활동','Tours & info')}</button>
      </nav>
      ${active === 'albums' ? `<section class="section"><div class="section-head"><div><div class="eyebrow">SELECTED RELEASES</div><h2>${tr('앨범 둘러보기','Album picks')}</h2></div><a class="section-link" href="https://music.apple.com/${a.country === 'KR' ? 'kr' : 'us'}/search?term=${encodeURIComponent(a.name + ' album')}" target="_blank" rel="noopener noreferrer">${tr('모든 앨범 검색','Search all albums')} ↗</a></div>${albums.length ? `<div class="album-grid">${albums.map(al => albumCard(al,a)).join('')}</div>` : `<div class="empty-state"><strong>${tr('등록된 큐레이션 앨범이 아직 없어요.','Curated albums are not available here yet.')}</strong><p>${tr('Apple Music의 공개 검색 URL에서 해당 아티스트 앨범을 불러옵니다.','Artist albums are looked up through Apple Music’s public search URL.')}</p><a class="btn" href="https://music.apple.com/${a.country === 'KR' ? 'kr' : 'us'}/search?term=${encodeURIComponent(a.name + ' album')}" target="_blank" rel="noopener noreferrer">Apple Music ↗</a></div>`}</section>` : ''}
      ${active === 'songs' ? `<section class="song-layout">
        <div class="surface song-panel"><div class="section-head"><div><div class="eyebrow">APPLE MUSIC CATALOG</div><h2>${tr('미리듣기','Track previews')}</h2></div><a class="section-link" href="https://music.apple.com/${a.country === 'KR' ? 'kr' : 'us'}/search?term=${encodeURIComponent(a.name)}" target="_blank" rel="noopener noreferrer">Apple Music ↗</a></div><p class="helper-text">${tr('공개 iTunes Search URL에서 곡과 30초 미리듣기를 자동으로 찾아요. 키 입력은 필요하지 않습니다.','Tracks and preview clips are looked up through the public iTunes Search URL. No key is required.')}</p><div id="itunes-results" class="song-list"><div class="empty-state"><strong>${tr('공개 음원 카탈로그를 불러오는 중…','Loading public music catalog…')}</strong></div></div></div>
        <div class="surface song-panel"><div class="eyebrow">YOUTUBE PLAYLIST</div><h2 style="margin-top:5px">${tr('내 플레이리스트에 추가','Add to my playlist')}</h2><a class="youtube-search-link" href="https://www.youtube.com/results?search_query=${encodeURIComponent(a.name + ' official music video')}" target="_blank" rel="noopener noreferrer">${tr('YouTube에서 곡 찾기','Find a song on YouTube')} ↗</a>${addVideoForm(a)}<p class="helper-text">${tr('YouTube에서 곡을 연 뒤 주소를 붙여 넣으면 저장됩니다. 재생은 내 플레이리스트 화면에서 할 수 있어요.','Open a video on YouTube and paste its URL here. Play it from My playlist.')}</p><a class="btn" href="${go('library')}">${tr('내 플레이리스트 열기','Open playlist')} ↗</a></div>
      </section>` : ''}
      ${active === 'tours' ? `<section class="section"><div class="section-head"><div><div class="eyebrow">OFFICIAL SOURCES</div><h2>${tr('공연 정보 확인','Tour information')}</h2></div><a class="section-link" href="${go('tours')}">${tr('내 투어 지도','My tour map')} ↗</a></div>${events.length ? `<div class="artist-tour-list">${events.map(eventRow).join('')}</div>` : `<div class="empty-state"><strong>${tr('확인된 예정 공연 데이터가 없습니다.','No verified upcoming event data was returned.')}</strong><p>${tr('공연 정보는 국가·예매처별로 다를 수 있어요. 아래 공식 검색 페이지에서 최신 일정을 확인하세요.','Coverage varies by country and ticket vendor. Check the official search links below for the latest dates.')}</p></div>`}<div class="official-sources">${officialLinks(a).map(link => `<article class="source-card"><strong>${esc(link.label)}</strong><a href="${link.url}" target="_blank" rel="noopener noreferrer">${tr('공연 검색 열기','Search events')} ↗</a></article>`).join('')}</div></section>` : ''}`;
  }
  function addVideoForm(a = null) {
    return `<form class="add-video-form" id="add-video-form">
      <div class="field url-field"><label for="youtube-url">${tr('YouTube URL 또는 동영상 ID','YouTube URL or video ID')}</label><input id="youtube-url" type="url" placeholder="https://youtu.be/..." required></div>
      <div class="field"><label for="youtube-title">${tr('곡 이름 (선택)','Song title (optional)')}</label><input id="youtube-title" maxlength="100" placeholder="${tr('곡 이름','Song title')}"></div>
      <button class="btn primary" type="submit" data-artist-id="${esc(a?.id || '')}">${tr('추가','Add track')}</button>
    </form>`;
  }
  function parseYouTubeId(input) {
    const raw = String(input || '').trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;
    try {
      const url = new URL(raw);
      const host = url.hostname.replace(/^www\./,'').toLowerCase();
      if (host === 'youtu.be') return url.pathname.split('/').filter(Boolean)[0]?.match(/^[a-zA-Z0-9_-]{11}$/)?.[0] || null;
      if (host.endsWith('youtube.com') || host === 'youtube-nocookie.com') {
        const v = url.searchParams.get('v');
        if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
        const parts = url.pathname.split('/').filter(Boolean);
        const index = parts.findIndex(part => ['embed','shorts','live'].includes(part));
        if (index >= 0 && /^[a-zA-Z0-9_-]{11}$/.test(parts[index+1] || '')) return parts[index+1];
      }
    } catch { return null; }
    return null;
  }
  function tourSourceCard(a) {
    const links = officialLinks(a);
    return `<article class="tour-source-card">
      <div class="tour-source-head"><div><strong>${esc(a.name)}</strong><small>${esc(a.genre)} · ${a.country === 'KR' ? tr('국내 아티스트','Korean artist') : tr('해외 아티스트','International artist')}</small></div><a class="text-link" href="${go('artist',{id:a.id})}">${tr('프로필','Profile')} ↗</a></div>
      <div class="tour-source-links">${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`).join('')}</div>
    </article>`;
  }
  function toursPage() {
    const followed = state.following.map(id => artist(id)).filter(a => state.region === 'all' || (state.region === 'KR' ? a.country === 'KR' : a.country !== 'KR'));
    const events = upcomingEvents().filter(ev => state.region === 'all' || (state.region === 'KR' ? ev.countryCode === 'KR' : ev.countryCode !== 'KR'));
    const status = state.loadingTours ? tr('공연 검색 중…','Searching events…') : state.tourStatus === 'connected' ? tr(`API 연결됨 · ${events.length}개 공연`,`API connected · ${events.length} events`) : state.tourStatus === 'error' ? tr('API 연결 오류','API connection error') : state.ticketmasterKey ? tr('API 키 저장됨 · 검색을 눌러 주세요','API key saved · run a search') : tr('Ticketmaster API 키 설정 필요','Ticketmaster API key needed');
    return `<section class="page-heading"><div><div class="eyebrow">FOLLOWED ARTISTS · TOUR SOURCES</div><h1>${tr('내 투어 지도','My tour map')}</h1><p>${tr('Ticketmaster에서 공개 공연 데이터를 조회하고 공식 예매 페이지로 이동합니다.','Search public event data from Ticketmaster and open official ticket pages.')}</p></div><div class="heading-count">${String(followed.length).padStart(2,'0')}<small>${tr('아티스트','ARTISTS')}</small></div></section>
      <div class="live-summary"><span class="status-pill ${state.loadingTours ? 'loading' : state.tourStatus === 'connected' ? 'live' : ''}"><i class="status-led"></i>${status}</span><div class="tour-controls"><select id="tour-region" aria-label="${tr('지역 필터','Region filter')}"><option value="all" ${state.region === 'all' ? 'selected' : ''}>${tr('모든 지역','All regions')}</option><option value="KR" ${state.region === 'KR' ? 'selected' : ''}>${tr('한국','Korea')}</option><option value="GLOBAL" ${state.region === 'GLOBAL' ? 'selected' : ''}>${tr('한국 외','Outside Korea')}</option></select><button class="btn small" data-action="search-tours" ${state.loadingTours ? 'disabled' : ''}>↻ ${tr('실제 공연 검색','Search live events')}</button></div></div>
      <details class="surface tour-settings" ${!state.ticketmasterKey ? 'open' : ''}><summary>${tr('무료 Ticketmaster API 연결 설정','Free Ticketmaster API setup')}</summary><div class="api-form"><div class="field"><label for="ticketmaster-key">${tr('Consumer Key / API Key','Consumer Key / API Key')}</label><input id="ticketmaster-key" type="password" autocomplete="off" placeholder="${tr('API 키를 붙여넣으세요','Paste your API key')}" value="${esc(state.ticketmasterKey)}"></div><button class="btn primary" data-action="save-ticketmaster-key">${tr('키 저장','Save key')}</button><a class="btn" href="https://developer.ticketmaster.com/" target="_blank" rel="noopener noreferrer">${tr('무료 키 발급','Get a free key')} ↗</a></div><p class="helper-text">${tr('키는 이 브라우저의 localStorage에만 저장되며 GitHub 파일에 기록되지 않습니다. 단, 브라우저에서 사용하는 키는 개발자 도구에서 볼 수 있습니다. 공개 서비스라면 서버 프록시를 권장합니다. Ticketmaster 데이터는 모든 국가/공연을 포함하지 않습니다.','The key is stored only in this browser’s localStorage and is not written into your GitHub files. However, browser-side keys can be seen in developer tools. For a public service, use a server proxy. Ticketmaster does not cover every country or event.')}</p></details>
      <section class="tour-layout">
        <div class="surface map-panel"><div class="map-head"><div><div class="eyebrow">EVENT LOCATIONS</div><h2>${tr('공연 위치 지도','Tour location map')}</h2></div><span class="subtle" style="font-size:10px">OpenStreetMap</span></div><div id="live-map" class="map-canvas" aria-label="${tr('공연 위치 지도','Tour location map')}"></div><div class="map-legend"><span>${tr('API에서 좌표를 반환한 공연만 표시됩니다.','Only events with coordinates returned by the API are mapped.')}</span><span>© OpenStreetMap</span></div></div>
        <div class="surface event-panel"><div class="event-panel-head"><div><h2>${tr('실제 공연 및 티켓','Live events & tickets')}</h2><p class="helper-text">${tr('API 검색 결과의 공식 티켓 링크입니다.','Official ticket links from API search results.')}</p></div><span class="subtle" style="font-size:10px">${events.length}</span></div><div class="event-list">${events.length ? events.map(eventRow).join('') : `<div class="empty-state"><strong>${state.tourStatus === 'error' ? tr('공연 데이터를 불러오지 못했어요.','Could not load event data.') : tr('아직 공연 데이터가 없습니다.','No event data loaded yet.')}</strong><p>${tr('무료 API 키를 설정하고 실제 공연 검색을 눌러 주세요. 국내 공연이 검색되지 않으면 아래 아티스트별 공식 검색 링크를 이용할 수 있습니다.','Set up a free API key and search. If Korean events are not returned, use the artist-specific official search links below.')}</p></div>`}</div></div>
      </section>
      <section class="section"><div class="section-head"><div><div class="eyebrow">BACKUP SOURCES</div><h2>${tr('아티스트별 공식 검색 링크','Artist source links')}</h2><p>${tr('API에 없는 공연은 예매처에서 직접 확인하세요.','Check ticket providers directly for events not covered by the API.')}</p></div></div><div class="tour-source-list">${followed.length ? followed.slice(0,40).map(tourSourceCard).join('') : `<div class="empty-state">${tr('먼저 아티스트를 팔로우하세요.','Follow artists first.')}</div>`}</div></section>
      <p class="tour-data-note">${tr('Ticketmaster는 공개 이벤트 데이터를 제공하지만 한국을 포함한 모든 시장의 전체 일정을 보장하지 않습니다. 티켓 구매는 Ticketmaster 또는 각 외부 판매처에서 진행되며, SIDEWAVE는 결제 정보를 받지 않습니다.','Ticketmaster provides public event data but does not guarantee complete coverage of every market, including Korea. Purchases happen on Ticketmaster or other ticket-provider sites; SIDEWAVE does not collect payment information.')}</p>`;
  }
  function eventRow(ev) {
    const a = artist(ev.artistId);
    const dateStr = ev.date ? new Date(`${ev.date}T12:00:00`).toLocaleDateString(state.lang === 'ko' ? 'ko-KR' : 'en-US', { month:'short', day:'numeric', weekday:'short' }) : tr('날짜 미정','Date TBA');
    const day = ev.date ? new Date(`${ev.date}T12:00:00`).getDate() : '—';
    const source = ev.source || 'Official API';
    const href = ticketUrl(ev, a);
    return `<article class="event-row"><div class="event-date"><small>${esc(dateStr.split(' ')[0])}</small><strong>${esc(day)}</strong></div><div class="event-info"><strong>${esc(a.name)}${ev.name && normalize(ev.name) !== normalize(a.name) ? ` · ${esc(ev.name)}` : ''}</strong><p>${esc(ev.city || ev.venue || '')}${ev.city && ev.venue ? ' · ' : ''}${esc(ev.venue || '')}${ev.country ? ` · ${esc(ev.country)}` : ''}</p><div class="event-meta"><span class="source-badge">${esc(source)}</span>${ev.time ? `<span class="source-badge">${esc(ev.time)}</span>` : ''}</div><div class="event-actions"><a href="${href}" target="_blank" rel="noopener noreferrer">${tr('공식 이벤트 / 티켓','Event / tickets')} ↗</a>${ev.url && ev.ticketUrl && ev.url !== ev.ticketUrl ? `<a href="${ev.url}" target="_blank" rel="noopener noreferrer">${tr('이벤트 정보','Event info')} ↗</a>` : ''}</div></div></article>`;
  }
  function upcomingEvents() {
    const today = new Date().toISOString().slice(0,10);
    return state.events.filter(ev => state.following.includes(ev.artistId) && (!ev.date || ev.date >= today)).sort((a,b) => String(a.date || '9999').localeCompare(String(b.date || '9999')));
  }
  function miniUpcoming() {
    const events = upcomingEvents().slice(0,3);
    if (!events.length) return `<div class="empty-state"><strong>${tr('아직 앱에 가져온 공연 데이터가 없어요.','No event data is imported into the app yet.')}</strong><p>${tr('투어 지도에서 팔로우한 아티스트의 공식 일정 URL을 열어 최신 날짜를 확인하세요.','Open a followed artist’s official tour URL on the tour map for the latest dates.')}</p><a class="btn" href="${go('tours')}">${tr('투어 설정','Tour settings')} ↗</a></div>`;
    return `<div class="compact-list">${events.map(ev => `<div class="compact-row"><span class="row-date">${esc(ev.date || 'TBA')}</span><span><strong>${esc(artist(ev.artistId).name)}</strong><small>${esc(ev.city || '')} · ${esc(ev.venue || '')}</small></span><a class="section-link" href="${ticketUrl(ev,artist(ev.artistId))}" target="_blank" rel="noopener noreferrer">↗</a></div>`).join('')}</div>`;
  }
  function miniPlaylist() {
    if (!state.playlist.length) return `<div class="empty-state"><strong>${tr('플레이리스트가 비어 있어요.','Your playlist is empty.')}</strong><a class="btn" href="${go('library')}">${tr('곡 추가','Add a song')}</a></div>`;
    return `<div class="compact-list">${state.playlist.slice(0,3).map(item => `<div class="compact-row"><span class="mini-cover">♫</span><span><strong>${esc(item.title)}</strong><small>${esc(item.artistName || 'YouTube')}</small></span><a class="section-link" href="${go('library')}" aria-label="Open playlist">↗</a></div>`).join('')}</div>`;
  }
  function libraryPage() {
    const active = state.playlist.find(item => item.videoId === state.currentVideoId) || state.playlist[0];
    return `<section class="page-heading"><div><div class="eyebrow">PERSONAL PLAYLIST</div><h1>${tr('내 플레이리스트','My playlist')}</h1><p>${tr('YouTube 동영상을 저장하고 IFrame Player API로 재생할 수 있어요. 목록은 이 브라우저에 저장됩니다.','Save YouTube videos and play them with the IFrame Player API. Your list is saved in this browser.')}</p></div><div class="heading-count">${String(state.playlist.length).padStart(2,'0')}<small>TRACKS</small></div></section>
      <section class="library-layout">
        <div class="surface player-panel"><div class="eyebrow">NOW PLAYING</div><div class="yt-player-wrap"><div id="youtube-player"></div></div><div class="now-playing"><span id="now-playing-title"><strong>${esc(active?.title || tr('재생할 곡을 선택하세요','Choose a track'))}</strong>${active ? ` · ${esc(active.artistName || '')}` : ''}</span><a class="section-link" href="${active ? `https://www.youtube.com/watch?v=${active.videoId}` : 'https://www.youtube.com/'}" target="_blank" rel="noopener noreferrer">${tr('YouTube에서 열기','Open on YouTube')} ↗</a></div><p class="helper-text">${tr('일부 동영상은 업로더의 설정에 따라 외부 사이트에서 재생되지 않을 수 있습니다. 이 경우 YouTube에서 열기를 사용하세요.','Some videos cannot be embedded due to uploader settings. Open them on YouTube instead.')}</p></div>
        <div class="surface playlist-panel"><div class="section-head"><div><div class="eyebrow">SAVED TRACKS</div><h2>${tr('재생목록','Playlist')}</h2></div><span class="subtle" style="font-size:10px">${state.playlist.length}</span></div><div class="playlist-list">${state.playlist.map((item,index) => `<div class="playlist-row ${active?.videoId === item.videoId ? 'active' : ''}" data-playlist-row="${esc(item.videoId)}"><button class="playlist-play" data-action="play-video" data-video-id="${esc(item.videoId)}" aria-label="Play ${esc(item.title)}">▶</button><div><div class="playlist-title">${esc(item.title)}</div><span class="playlist-artist">${esc(item.artistName || 'YouTube')}</span></div><div class="playlist-row-actions"><button data-action="remove-video" data-video-id="${esc(item.videoId)}">${tr('삭제','Remove')}</button></div></div>`).join('') || `<div class="empty-state"><strong>${tr('재생목록이 비어 있어요.','Playlist is empty.')}</strong><p>${tr('아래에 YouTube 링크를 추가해 주세요.','Add a YouTube link below.')}</p></div>`}</div>
          <div class="library-add"><div class="eyebrow">ADD A VIDEO</div>${addVideoForm()}</div>
        </div>
      </section>`;
  }
  function helpPage() {
    return `<section class="page-heading"><div><div class="eyebrow">HELP CENTER</div><h1>${tr('사용 안내','Help center')}</h1><p>${tr('기능과 데이터 출처를 확인할 수 있어요.','How features work and where data comes from.')}</p></div></section>
      <section class="help-grid">
        <article class="help-card"><span class="help-icon">＋</span><h2>${tr('팔로우와 아티스트 표지','Follow & artist artwork')}</h2><p>${tr('팔로우 목록은 이 브라우저에 저장됩니다. 아티스트 표지·앨범 표지·곡 미리듣기는 API 키 없이 Apple iTunes Search URL에서 필요할 때 불러옵니다. 이미지가 없으면 디자인용 색상 표지가 남습니다.','Followed artists are stored in this browser. Artist artwork, album art, and track previews are loaded on demand from Apple’s iTunes Search URL without an API key. A designed fallback remains when artwork is unavailable.')}</p></article>
        <article class="help-card"><span class="help-icon">◎</span><h2>${tr('투어 일정 출처','Tour sources')}</h2><p>${tr('투어 지도 설정에서 무료 Ticketmaster Consumer Key를 저장하면 실제 이벤트 날짜·장소·좌표(제공되는 경우)와 공식 티켓 URL을 조회합니다. API에 없는 공연을 위해 아티스트별 공식 검색 링크도 유지합니다. 키는 이 브라우저에 저장되지만 개발자 도구에서 확인할 수 있습니다.','Tour search can use Ticketmaster Discovery API after you add a free Consumer Key in the Tour Map settings. Search results show event dates, venues, coordinates when available, and official ticket URLs. Coverage is incomplete, especially for some Korean events, so artist-specific ticket-provider links remain as a fallback. The key is stored in this browser but is visible in developer tools.')}</p></article>
        <article class="help-card"><span class="help-icon">▶</span><h2>${tr('YouTube 플레이리스트','YouTube playlist')}</h2><p>${tr('YouTube에서 동영상 주소를 복사해 내 플레이리스트에 추가하세요. YouTube IFrame Player API로 페이지 안에서 재생합니다. 별도의 검색 API는 사용하지 않으므로 YouTube 검색은 새 탭에서 열고 링크를 붙여 넣습니다.','Copy a video URL from YouTube into your playlist. Playback uses the YouTube IFrame Player API. YouTube search opens in a new tab; paste the chosen video link into your playlist.')}</p></article>
        <article class="help-card"><span class="help-icon">◐</span><h2>${tr('언어와 테마','Language & theme')}</h2><p>${tr('상단 버튼으로 한국어/영어, 라이트/다크 테마를 전환할 수 있습니다. 설정은 이 브라우저에 저장됩니다.','Use the top controls to switch Korean/English and light/dark themes. Preferences are stored in this browser.')}</p></article>
        <article class="help-card"><span class="help-icon">i</span><h2>${tr('API 키 없는 URL 데이터','Keyless URL data')}</h2><p>${tr('음원·표지 데이터는 공개 iTunes Search URL에서 API 키 없이 조회합니다. 실제 공연 데이터는 투어 지도 설정에서 무료 Ticketmaster API 키를 입력한 뒤 검색할 수 있습니다. 키는 현재 브라우저에 저장되지만 개발자 도구에서 볼 수 있습니다. 공개 서비스에서는 서버 프록시를 권장합니다. Ticketmaster가 모든 국가의 공연을 다루는 것은 아닙니다.','Music metadata and previews are fetched from Apple’s public iTunes Search URL without a key. Live event data can be searched after adding a free Ticketmaster API key in Tour Map settings. The key is stored in this browser but can be seen in developer tools. A server proxy is recommended for public production apps. Ticketmaster does not cover every country or event.')}</p><div class="api-doc-links"><a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/" target="_blank" rel="noopener noreferrer">iTunes Search API info ↗</a><a href="https://developers.google.com/youtube/iframe_api_reference" target="_blank" rel="noopener noreferrer">YouTube IFrame API ↗</a><a href="https://developer.ticketmaster.com/" target="_blank" rel="noopener noreferrer">Ticketmaster Discovery API ↗</a></div></article>
      </section>`;
  }

  function render() {
    if (mapInstance) { mapInstance.remove(); mapInstance = null; }
    if (ytPlayer && typeof ytPlayer.destroy === 'function') { try { ytPlayer.destroy(); } catch {} ytPlayer = null; }
    const route = readRoute();
    currentRoute = route.route;
    currentArtistId = route.id;
    if (currentRoute !== 'artist') state.activeArtistTab = 'albums';
    let content;
    if (currentRoute === 'artists') content = artistsPage(route.q);
    else if (currentRoute === 'artist') content = artistPage(route.id);
    else if (currentRoute === 'tours') content = toursPage();
    else if (currentRoute === 'library') content = libraryPage();
    else if (currentRoute === 'help') content = helpPage();
    else content = profileHome();
    shell(content);
    if (currentRoute === 'artists') {
      renderArtistResults();
      $('#artist-search')?.addEventListener('input', renderArtistResults);
    }
    observeArtwork();
    if (currentRoute === 'tours') initMap();
    if (currentRoute === 'artist' && state.activeArtistTab === 'songs') loadDeezerTracks(route.id);
    if (currentRoute === 'library') initYouTubePlayer();
  }
  function observeArtwork() {
    if (imageObserver) imageObserver.disconnect();
    const targets = $$('[data-cover-artist]:not([data-image-requested]), [data-cover-album]:not([data-image-requested])');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) { targets.slice(0,18).forEach(loadArtworkForNode); return; }
    imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        imageObserver.unobserve(entry.target);
        loadArtworkForNode(entry.target);
      });
    }, { rootMargin: '180px 0px' });
    targets.forEach(node => imageObserver.observe(node));
  }
  function loadArtworkForNode(node) {
    node.dataset.imageRequested = 'true';
    const isArtistArt = !!node.dataset.coverArtist;
    const query = isArtistArt ? node.dataset.coverArtist : node.dataset.coverAlbum;
    const task = isArtistArt ? getArtistPhoto(query) : getAlbumPhoto(query);
    task.then(url => {
      if (!url || !node.isConnected) return;
      const img = document.createElement('img');
      img.className = isArtistArt ? 'artist-photo' : 'album-photo';
      img.alt = isArtistArt ? `${artist(query).name} artwork` : `${query} album cover`;
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      img.onload = () => img.classList.add('loaded');
      img.onerror = () => img.remove();
      img.src = url;
      node.prepend(img);
    }).catch(() => {});
  }
  async function searchItunes(term, entity, country = 'US', limit = 12) {
    const key = `${country}|${entity}|${term}|${limit}`;
    if (itunesCache.has(key)) return itunesCache.get(key);
    const promise = (async () => {
      const params = new URLSearchParams({ term, media: 'music', entity, country, limit: String(limit) });
      const response = await fetch(`https://itunes.apple.com/search?${params.toString()}`, { mode: 'cors' });
      if (!response.ok) throw new Error(`Apple catalog HTTP ${response.status}`);
      const json = await response.json();
      return Array.isArray(json.results) ? json.results : [];
    })();
    itunesCache.set(key, promise);
    try { return await promise; } catch (error) { itunesCache.delete(key); throw error; }
  }
  function artworkLarge(url) {
    return String(url || '').replace(/\d+x\d+bb\.(jpg|png)/i, '600x600bb.$1');
  }
  async function itunesSearchWithFallback(term, entity, a = null, limit = 12) {
    const firstCountry = a?.country === 'KR' ? 'KR' : 'US';
    try {
      const first = await searchItunes(term, entity, firstCountry, limit);
      if (first.length || firstCountry === 'US') return first;
    } catch (error) {
      if (firstCountry === 'US') throw error;
    }
    return searchItunes(term, entity, 'US', limit);
  }
  function getArtistPhoto(id) {
    if (artistPhotoCache.has(id)) return artistPhotoCache.get(id);
    const a = artist(id);
    const promise = itunesSearchWithFallback(a.name, 'album', a, 10).then(results => {
      const expected = normalize(a.name.replace(/\s*\(.+?\)\s*/g, ''));
      const matches = results.filter(item => {
        const name = normalize(item.artistName || '');
        return name === expected || name.includes(expected) || expected.includes(name);
      });
      const best = matches[0] || results[0];
      return artworkLarge(best?.artworkUrl100 || best?.artworkUrl60 || '');
    }).catch(() => null);
    artistPhotoCache.set(id, promise); return promise;
  }
  function getAlbumPhoto(query) {
    if (albumPhotoCache.has(query)) return albumPhotoCache.get(query);
    const promise = searchItunes(query, 'album', 'US', 8).then(results => {
      const best = results[0];
      return artworkLarge(best?.artworkUrl100 || best?.artworkUrl60 || '');
    }).catch(() => null);
    albumPhotoCache.set(query, promise); return promise;
  }
  async function loadDeezerTracks(id) {
    const panel = $('#itunes-results');
    if (!panel) return;
    if (state.itunesTracks.has(id)) { panel.innerHTML = songMarkup(state.itunesTracks.get(id)); return; }
    panel.innerHTML = `<div class="empty-state"><strong>${tr('공개 음원 카탈로그 검색 중…','Searching the public music catalog…')}</strong><p>${tr('API 키 없이 Apple iTunes Search URL에서 곡과 미리듣기를 찾고 있어요.','Looking up tracks and previews from Apple’s iTunes Search URL without an API key.')}</p></div>`;
    const a = artist(id);
    try {
      let results = await itunesSearchWithFallback(a.name, 'song', a, 12);
      const expected = normalize(a.name.replace(/\s*\(.+?\)\s*/g, ''));
      const matching = results.filter(track => {
        const name = normalize(track.artistName || '');
        return name === expected || name.includes(expected) || expected.includes(name);
      });
      if (matching.length) results = matching;
      const tracks = results.filter(track => track.previewUrl && track.trackName).slice(0, 8).map(track => ({
        title: track.trackName,
        artist: { name: track.artistName || a.name },
        album: { title: track.collectionName || '', cover_small: track.artworkUrl100 || '' },
        preview: track.previewUrl,
        externalUrl: track.trackViewUrl || ''
      }));
      state.itunesTracks.set(id, tracks);
      const currentPanel = $('#itunes-results');
      if (currentRoute === 'artist' && currentArtistId === id && state.activeArtistTab === 'songs' && currentPanel) currentPanel.innerHTML = songMarkup(tracks);
    } catch (error) {
      console.warn('Apple iTunes catalog request failed for', a.name, error);
      const currentPanel = $('#itunes-results');
      if (currentPanel) currentPanel.innerHTML = `<div class="empty-state"><strong>${tr('음원 카탈로그를 불러오지 못했어요.','Could not load the music catalog.')}</strong><p>${tr('외부 연결이 제한되면 아래 Apple Music 검색 링크를 이용하세요.','If the catalog request is blocked, use the Apple Music search link below.')}</p></div>`;
    }
  }
  function songMarkup(tracks) {
    if (!tracks?.length) return `<div class="empty-state"><strong>${tr('재생 가능한 미리듣기가 없습니다.','No playable previews were returned.')}</strong><p>${tr('국가별 카탈로그에 따라 일부 곡의 미리듣기가 제공되지 않을 수 있어요.','Previews may be unavailable for some tracks or storefronts.')}</p></div>`;
    return tracks.map((track,index) => `<article class="song-row"><span class="song-index">${String(index+1).padStart(2,'0')}</span><img class="song-cover" src="${esc(track.album?.cover_small || '')}" alt="" loading="lazy" onerror="this.style.visibility='hidden'"><span class="song-info"><strong>${esc(track.title)}</strong><small>${esc(track.artist?.name || '')} · ${esc(track.album?.title || '')}</small>${track.externalUrl ? `<a href="${esc(track.externalUrl)}" target="_blank" rel="noopener noreferrer">${tr('Apple Music에서 보기','View on Apple Music')} ↗</a>` : ''}</span><audio controls preload="none" src="${esc(track.preview)}" aria-label="${esc(track.title)} preview"></audio></article>`).join('');
  }

  function validCoords(event) { return Number.isFinite(event.lat) && Number.isFinite(event.lon) && event.lat >= -90 && event.lat <= 90 && event.lon >= -180 && event.lon <= 180 && !(event.lat === 0 && event.lon === 0); }
  async function loadLiveTours() {
    const key = state.ticketmasterKey.trim();
    if (!key) { state.tourStatus = 'not-configured'; state.events = []; return []; }
    state.loadingTours = true;
    state.tourStatus = 'loading';
    const followed = state.following.map(id => artist(id)).slice(0, 12);
    const found = [];
    try {
      // Ticketmaster's default public quota is limited; query artists sequentially and cap this run.
      for (const a of followed) {
        const params = new URLSearchParams({ apikey: key, keyword: a.name, classificationName: 'music', size: '8', sort: 'date,asc', includeTBA: 'no', startDateTime: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z') });
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${params.toString()}`);
        if (!response.ok) {
          if (response.status === 401 || response.status === 403) throw new Error('API key rejected. Check the Consumer Key.');
          if (response.status === 429) throw new Error('Ticketmaster rate limit reached. Wait a little and try again.');
          throw new Error(`Ticketmaster returned HTTP ${response.status}`);
        }
        const data = await response.json();
        const items = data?._embedded?.events || [];
        for (const ev of items) {
          const attractions = (ev._embedded?.attractions || []).map(x => normalize(x.name));
          const eventName = normalize(ev.name || '');
          const expected = normalize(a.name);
          // Avoid unrelated keyword hits where an attraction name is present.
          if (attractions.length && !attractions.some(n => n === expected || n.includes(expected) || expected.includes(n)) && !eventName.includes(expected)) continue;
          const venue = ev._embedded?.venues?.[0] || {};
          const loc = venue.location || {};
          const date = ev.dates?.start?.localDate || ev.dates?.start?.dateTime?.slice(0,10) || '';
          found.push({
            id: ev.id, artistId: a.id, name: ev.name || a.name, date,
            time: ev.dates?.start?.localTime || '', city: venue.city?.name || '', venue: venue.name || '',
            country: venue.country?.name || '', countryCode: venue.country?.countryCode || '',
            lat: loc.latitude ? Number(loc.latitude) : NaN, lon: loc.longitude ? Number(loc.longitude) : NaN,
            source: 'Ticketmaster', url: ev.url || '', ticketUrl: ev.url || ''
          });
        }
        // Keep requests under the default public API rate limit.
        await new Promise(resolve => setTimeout(resolve, 550));
      }
      const unique = new Map();
      found.forEach(ev => unique.set(ev.id || `${ev.artistId}-${ev.date}-${ev.venue}`, ev));
      state.events = [...unique.values()].sort((a,b) => String(a.date || '9999').localeCompare(String(b.date || '9999')));
      state.eventsUpdated = Date.now(); state.eventsArtists = artistListHash(); state.tourStatus = 'connected';
      return state.events;
    } catch (error) {
      console.warn('SIDEWAVE Ticketmaster API:', error);
      state.tourStatus = 'error';
      toast(error.message || tr('Ticketmaster 연결에 실패했어요.','Ticketmaster connection failed.'));
      return [];
    } finally { state.loadingTours = false; }
  }
  function artistListHash() { return [...state.following].sort().join('|'); }
  function updateTourStatusOnly() { /* Status is rendered from state on the next render. */ }
  function initMap() {
    const el = $('#live-map');
    if (!el) return;
    if (!window.L) { el.innerHTML = `<div class="empty-state"><strong>${tr('지도를 불러오지 못했어요.','Map could not be loaded.')}</strong><p>${tr('인터넷 연결을 확인한 뒤 새로고침해 주세요.','Check your connection and refresh.')}</p></div>`; return; }
    mapInstance = L.map(el, { scrollWheelZoom: false, preferCanvas: true }).setView([30, 115], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(mapInstance);
    const events = upcomingEvents().filter(ev => state.region === 'all' || (state.region === 'KR' ? ev.countryCode === 'KR' || ev.country === 'South Korea' : !(ev.countryCode === 'KR' || ev.country === 'South Korea')));
    const bounds = [];
    events.filter(validCoords).forEach(ev => {
      const a = artist(ev.artistId); const color = a.accent || '#b9ef9e';
      const icon = L.divIcon({ className: 'sidewave-map-marker', html: `<span style="display:block;width:15px;height:15px;border:3px solid #fff;border-radius:50%;background:${color};box-shadow:0 1px 6px #0007"></span>`, iconSize: [19,19], iconAnchor:[9,9] });
      const marker = L.marker([ev.lat,ev.lon], { icon }).addTo(mapInstance);
      const href = ticketUrl(ev,a);
      const date = ev.date ? new Date(`${ev.date}T12:00:00`).toLocaleDateString(state.lang === 'ko' ? 'ko-KR' : 'en-US',{year:'numeric',month:'short',day:'numeric'}) : tr('날짜 미정','Date TBA');
      marker.bindPopup(`<div class="map-popup"><strong>${esc(a.name)}</strong><span>${esc(ev.name || '')}</span><span>${esc(date)}</span><span>${esc(ev.city)} · ${esc(ev.venue)}</span><small>${esc(ev.source || 'Official API')}</small><a href="${href}" target="_blank" rel="noopener noreferrer">${tr('이벤트 / 티켓 보기','View event / tickets')} ↗</a></div>`);
      bounds.push([ev.lat,ev.lon]);
    });
    if (bounds.length === 1) mapInstance.setView(bounds[0], 6);
    else if (bounds.length > 1) mapInstance.fitBounds(bounds, { padding:[28,28], maxZoom:6 });
    if (!events.length || !bounds.length) {
      const overlay = document.createElement('div');
      overlay.className = 'map-empty-overlay';
      overlay.innerHTML = `<div class="empty-state"><strong>${!state.following.length ? tr('아티스트를 팔로우해 주세요.','Follow artists to begin.') : tr('자동 지도 마커용 공개 일정 URL이 없습니다.','No public structured event URL is available for automatic map pins.')}</strong><p>${tr('지도에는 확인된 공연 좌표가 필요합니다. 오른쪽의 공식 출처에서 최신 일정과 장소를 확인하세요.','Map pins require verified show coordinates. Use the official links on the right for current dates and venues.')}</p></div>`;
      el.appendChild(overlay);
    }
    setTimeout(() => { if (mapInstance) mapInstance.invalidateSize({ pan:false }); }, 100);
    window.addEventListener('resize', debounce(() => mapInstance?.invalidateSize({ pan:false }), 160), { once:true });
  }
  function debounce(fn, wait) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), wait); }; }

  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) { ytReady = true; initYouTubePlayer(); return; }
    if (ytApiLoading) return;
    ytApiLoading = true;
    const existing = $('#youtube-iframe-api');
    if (existing) return;
    const script = document.createElement('script');
    script.id = 'youtube-iframe-api';
    script.src = 'https://www.youtube.com/iframe_api';
    script.onerror = () => toast(tr('YouTube 플레이어 API를 불러오지 못했어요.','Could not load the YouTube Player API.'));
    document.head.appendChild(script);
    window.onYouTubeIframeAPIReady = () => { ytReady = true; initYouTubePlayer(); };
  }
  function initYouTubePlayer() {
    if (!$('#youtube-player')) return;
    if (!window.YT || !window.YT.Player) { loadYouTubeApi(); return; }
    if (ytPlayer && typeof ytPlayer.destroy === 'function') { try { ytPlayer.destroy(); } catch {} ytPlayer = null; }
    const chosen = state.playlist.find(item => item.videoId === state.currentVideoId) || state.playlist[0];
    if (!chosen) return;
    ytPlayer = new YT.Player('youtube-player', {
      width: '640', height: '360', videoId: chosen.videoId,
      playerVars: { playsinline: 1, rel: 0, origin: location.origin },
      events: {
        onReady: () => { if ($('#now-playing-title')) updateNowPlaying(chosen); },
        onError: event => { console.warn('YouTube embed error', event.data); toast(tr('이 동영상은 삽입 재생이 제한될 수 있어요. YouTube에서 열어 주세요.','This video may restrict embeds. Open it on YouTube.')); }
      }
    });
  }
  function updateNowPlaying(item) {
    const target = $('#now-playing-title');
    if (target && item) target.innerHTML = `<strong>${esc(item.title)}</strong> · ${esc(item.artistName || 'YouTube')}`;
    $$('[data-playlist-row]').forEach(row => row.classList.toggle('active', row.dataset.playlistRow === item?.videoId));
  }
  function toast(message) {
    const el = $('#toast'); if (!el) return;
    el.textContent = message; el.classList.add('show');
    clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  document.addEventListener('click', async event => {
    const btn = event.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === 'follow') {
      const id = btn.dataset.id;
      if (isFollowing(id)) state.following = state.following.filter(item => item !== id); else if (artistMap.has(id)) state.following.push(id);
      savePreferences(); render(); loadLiveTours(true); return;
    }
    if (action === 'theme') { state.theme = state.theme === 'light' ? 'dark' : 'light'; savePreferences(); render(); return; }
    if (action === 'language') { state.lang = state.lang === 'ko' ? 'en' : 'ko'; savePreferences(); render(); return; }
    if (action === 'filter') { state.genre = btn.dataset.filter || 'all'; renderArtistResults(); $$('.filter-pill').forEach(pill => pill.classList.toggle('active', pill.dataset.filter === state.genre)); return; }
    if (action === 'artist-tab') { state.activeArtistTab = btn.dataset.tab || 'albums'; render(); return; }
    if (action === 'refresh-tours') { render(); toast(tr('공식 일정 링크를 새로고침했어요.','Tour source links refreshed.')); return; }
    if (action === 'save-ticketmaster-key') { const input = $('#ticketmaster-key'); const key = input?.value.trim() || ''; if (!key) { toast(tr('API 키를 입력해 주세요.','Enter an API key first.')); return; } state.ticketmasterKey = key; localStorage.setItem(STORAGE.ticketmasterKey, key); state.tourStatus = 'not-configured'; render(); toast(tr('API 키를 이 브라우저에 저장했어요.','API key saved in this browser.')); return; }
    if (action === 'search-tours') { if (!state.ticketmasterKey) { const input = $('#ticketmaster-key'); if (input?.value.trim()) { state.ticketmasterKey = input.value.trim(); localStorage.setItem(STORAGE.ticketmasterKey, state.ticketmasterKey); } else { toast(tr('먼저 무료 Ticketmaster API 키를 입력해 주세요.','Enter your free Ticketmaster API key first.')); document.querySelector('.tour-settings')?.setAttribute('open',''); return; } } render(); state.loadingTours = true; render(); await loadLiveTours(); render(); if (state.tourStatus === 'connected') toast(tr(`${state.events.length}개 공연을 불러왔어요.`,`Loaded ${state.events.length} events.`)); return; }
    if (action === 'play-video') {
      const id = btn.dataset.videoId; const item = state.playlist.find(track => track.videoId === id); if (!item) return;
      state.currentVideoId = id; savePreferences();
      if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') ytPlayer.loadVideoById(id);
      updateNowPlaying(item); return;
    }
    if (action === 'remove-video') {
      const id = btn.dataset.videoId; state.playlist = state.playlist.filter(item => item.videoId !== id);
      if (state.currentVideoId === id) state.currentVideoId = state.playlist[0]?.videoId || '';
      savePreferences(); render(); return;
    }
  });
  document.addEventListener('submit', async event => {
    const form = event.target;
    if (form.id === 'profile-form') {
      event.preventDefault();
      const input = $('#profile-name'); const value = input?.value.trim();
      if (!value) { toast(tr('이름을 입력해 주세요.','Please enter a display name.')); return; }
      state.name = value.slice(0,32); savePreferences(); render(); toast(tr('프로필을 저장했어요.','Profile saved.')); return;
    }
    if (form.id === 'add-video-form') {
      event.preventDefault();
      const url = $('#youtube-url')?.value.trim();
      const videoId = parseYouTubeId(url);
      if (!videoId) { toast(tr('유효한 YouTube 동영상 주소를 입력해 주세요.','Enter a valid YouTube video URL or ID.')); return; }
      const title = $('#youtube-title')?.value.trim();
      let artistTitle = 'YouTube';
      const id = form.querySelector('[data-artist-id]')?.dataset.artistId;
      if (id && artistMap.has(id)) artistTitle = artist(id).name;
      const search = new URL(url, location.href);
      const item = { id:`user-${videoId}-${Date.now()}`, videoId, title: (title || `${artistTitle} video`).slice(0,100), artistName: artistTitle, sourceUrl: `https://www.youtube.com/watch?v=${videoId}` };
      if (!state.playlist.some(track => track.videoId === videoId)) state.playlist.push(item);
      state.currentVideoId = videoId; savePreferences();
      location.hash = 'library'; render(); toast(tr('플레이리스트에 추가했어요.','Added to your playlist.')); return;
    }
  });
  document.addEventListener('change', event => {
    if (event.target.id === 'tour-region') { state.region = event.target.value; render(); }
  });
  window.addEventListener('hashchange', () => render());
  savePreferences();
  render();
  // Music metadata loads on-demand from public URL endpoints. Tour links are refreshed from the followed-artist list.
})();
