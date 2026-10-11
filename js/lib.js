/* Shared code: shared book database (Supabase), sign-in, book cards, header/menu/footer. */
/* ============================================================
   EDIT THIS PART: your library's details.
   Change the text between the quotes. Keep the quotes and commas.
   ============================================================ */
var SITE = {
  name: 'LIBO',
  about: ' We are passionate about bringing readers and books together. Our library is designed to make discovering, exploring, and enjoying books a simple and pleasant experience. We aim to create a welcoming space for readers of all interests, where every book opens the door to new ideas, knowledge, and imagination. Our goal is to make every reading journey meaningful.',
  email: 'libo583@gmail.com',
  phone: '+91 xxxxx xxxxx',
  address: '24 Green Park Road, Lakeview Avenue, Kozikode, Kerala , India.',
  hours: 'Mon to Sat, 9 AM to 10 PM',
  // News cards on the home page. Add or remove lines. Delete every line to hide the News section.
  // image: optional picture for the card, e.g. 'images/news1.jpg' (upload it to the images folder). Leave '' for no picture.
  // text: the full story, shown when someone clicks the card. Type \n\n to start a new paragraph.
  news: [
    { date: 'October 5, 2026', title: 'Welcome to our new library website', image: 'images/News-Library.jpg',
      text: 'We are delighted to announce the arrival of a fresh collection of books at our library! Our latest\n additions include exciting novels, inspiring biographies, educational resources, science and technology\n books, and popular fiction from a variety of authors. Whether you enjoy exploring imaginary worlds,\n learning new skills, or discovering fascinating stories from history, our growing collection has\n something for everyone.\n\n\n At our library, we believe that every book offers an opportunity to learn something new, explore different \n perspectives, and spark your imagination. Our new collection has been carefully selected to\n offer readers a wider range of choices and make every visit a rewarding experience.\n\n\n We invite all our members and book lovers to visit the library, browse through the latest arrivals, and discover\n titles that match their interests. Whether you are a regular reader or just beginning your\n reading journey, there is always something new waiting for you.\n\n\n Visit us today and let your next great reading adventure begin!' },
      { date: 'October 20, 2026', title: 'Library Announces a New Book Donation Campaign', image: 'images/News-Donation.jpg',
      text: "Our library is excited to announce a new book donation campaign aimed at expanding our collection and making more \n reading materials available to the community. The campaign invites students, families, educational institutions, \n and book lovers to donate books they no longer need so that others can enjoy and benefit from them.\n\n\nThe initiative will accept books across various categories, including fiction, biographies, science, history,\n literature, children's stories, and educational resources. Donated books will be carefully reviewed to ensure \n they are in suitable condition before being added to the library's collection. Books that meet our requirements \n will help readers discover new interests, improve their knowledge, and enjoy \n a wider variety of reading experiences.\n\n\nThe campaign also aims to promote the importance of sharing knowledge and encouraging sustainable habits.\n Instead of allowing useful books to remain unused on shelves, people can give them a second life by making \n them available to other readers. This simple act can help students access valuable learning resources and introduce \n young readers to the joy of discovering new stories.\n\n\n Our library believes that every book has the potential to inspire someone, teach an important lesson, or introduce a completely new perspective.\n By bringing together people who value reading and education, we hope to build a stronger reading community \n and create opportunities for everyone to learn and grow.\n\n\n Community members interested in participating are encouraged to contact the library for further information \n about donation guidelines and collection arrangements. Additional details will be shared through our website \n as the campaign progresses.\n\n\n We sincerely appreciate the support of everyone who contributes to this initiative. Every donated book \n can make a difference, and together we can help more people discover the knowledge, imagination, and inspiration \n that books have to offer." },
      { date: 'October 25, 2026', title: 'Library Discovers a 100-Year-Old Mystery Hidden Inside a Book', image: 'images/News-Letter.jpg',
      text: "In an exciting discovery, our library has reportedly found a handwritten letter hidden inside an old book that \n has remained on its shelves for nearly a century. The letter, believed to have been written in 1926, contains \n mysterious references to a forgotten collection of books and a location somewhere within the library \n building.\n\n\n The discovery was made during a routine inspection of the library's historical collection. A staff member \n noticed a folded piece of paper tucked between the final pages of an old novel. Written in faded ink, the \n letter describes a collection of books that was supposedly hidden away to protect valuable historical \n knowledge. However, the letter does not clearly reveal where the collection is located.\n\n\n Since the discovery, the library team has begun examining old catalogues, archived documents, and \n historical records to determine whether the letter contains any truth. Some readers have already shared their \n theories, suggesting that the hidden collectionmight include rare manuscripts, forgotten stories, or books \n that were never officially recorded in the library's archives.\n\n\nThe discovery has also attracted interest from history enthusiasts and book lovers, many of whom are eager \n to learn more about the mysterious letter. The library plans to document the investigation and share updates \n with readers through its website as more information becomes available.\n\n\n Although the origin and authenticity of the letter have not yet been established, the discovery has sparked \n excitement throughout the library community. What began as an ordinary inspection has turned into an \n unexpected mystery, reminding everyone that even the quietest corners of a library may hold fascinating \n secrets waiting to be uncovered.\n\n\n" },
      { date: 'November 2, 2026', title: 'The 24-Hour Reading Marathon: Can Our Community Break the Record?', image: 'images/News-Marathon.png',
      text: "Get ready for a reading adventure like never before! Our library is preparing to host an exciting 24-hour \n Reading Marathon, an event designed to bring together passionate readers, curious students, and book \n lovers for a full day of stories, imagination, and discovery. The challenge invites participants to spend time \n reading their favorite books while exploring new genres and sharing their love of literature with others.\n\n\n The event will feature a variety of reading activities, including individual reading sessions, group storytelling,\n poetry readings, and exciting book quizzes. Participants can choose from novels, mysteries, fantasy \n adventures, biographies, science books, and many other genres. Special sessions will also introduce readers \n to short stories and fascinating facts about famous authors and their works.\n\n\n One of the highlights of the marathon will be the Community Reading Challenge, where participants can \n collectively track the number of pages they read throughout the event. The goal is to encourage teamwork, \n celebrate reading achievements, and inspire more people to make reading a regular part of their lives. Small \n prizes and certificates may be awarded to participants who demonstrate enthusiasm and commitment.\n\n\n The library will also introduce a Book Discovery Corner, where visitors can pick a mystery book wrapped in \n paper without seeing its title or author. Each book will have a few clues describing its genre or story, \n allowing readers to choose something unexpected. This activity aims to encourage people to step outside \n their usual reading preferences and discover books they might never have selected otherwise.\n\n\n Beyond the excitement and friendly competition, the marathon aims to remind everyone that reading is not \n just an academic activity. It can be a source of entertainment, relaxation, inspiration, and personal growth. By \n creating a shared reading experience, the library hopes to strengthen its community and make books more \n appealing to readers of every age.\n\n\n Further details about registration, participation guidelines, and the event schedule will be announced on our \n website. Readers interested in joining the challenge are encouraged to follow our updates and prepare their \n favorite books for this special occasion.\n\n\n Will our community reach its reading goal? Which book will become the most popular choice? Join us for \n this exciting literary adventure and help make the Reading Marathon an unforgettable celebration of books \n and imagination!\n\n\n\n" },
      { date: 'November 12, 2026', title: 'Book Lovers Club Opens Membership to New Readers', image: 'images/News-club.jpg',
      text:" Our library is excited to announce the launch of a Book Lovers Club, a community created for people \n who enjoy reading, sharing ideas, and discovering new stories. The club aims to bring together readers \n from different backgrounds and interests in a friendly environment where everyone can express their \n opinions and explore the world of literature.\n\n\n Members will have the opportunity to participate in monthly book discussions, reading challenges, \n author appreciation sessions, and group activities. Each month, the club will select a featured book for \n members to read and discuss. From mystery novels and fantasy adventures to inspiring biographies \n and thought-provoking nonfiction, the selection will offer something for readers with different tastes.\n\n\n The club will also encourage members to recommend their favorite books, exchange reading \n suggestions, and discover authors they have never explored before. Special activities, including \n book-themed quizzes, creative writing sessions, and storytelling events, may also be organized to \n make participation more enjoyable.\n\n\n One of the main goals of the Book Lovers Club is to create a welcoming space where readers \n can connect through their shared interests. Whether someone reads several books every month or is just \n beginning to develop a reading habit, everyone will have the opportunity to participate and learn \n from others.\n\n\n The library hopes this initiative will encourage more people to read regularly, express their creativity,\n and build meaningful connections with fellow book lovers. Members will also be encouraged to share \n their reviews and recommendations on the library website, helping others discover interesting books \n and inspiring new reading adventures.\n\n\n Readers interested in joining the club can check our website for upcoming meeting dates, \n membership information, and activity announcements. We welcome everyone who believes that a \n good book becomes even more enjoyable when its ideas are shared.\n\n\n Join the Book Lovers Club, discover new stories, meet fellow readers, and become part of a growing \n community united by the love of books!\n\n\n" }
  ]
  
};
/* ============================================================ */

/* ============================================================
   SHARED DATABASE (Supabase). These two values are public by design.
   Only change them if you move to a different Supabase project.
   ============================================================ */
var SUPABASE_URL = 'https://zvxurdhtuhjzghnldaoi.supabase.co';
var SUPABASE_KEY = 'sb_publishable_BwXU4YhArlvsGabuDbGzxQ_AI948PcQ';
/* ============================================================ */


(function () {
  'use strict';

  var K = {
    last: 'lib_books_last', user: 'lib_user', sess: 'lib_sess', bc: 'lib_bc',
    wish: 'lib_wish', prog: 'lib_prog', days: 'lib_days', mins: 'lib_mins',
    borrowed: 'lib_borrowed', goal: 'lib_goal', reader: 'lib_reader'
  };
  var COLORS = ['#1E6B5C', '#3C5C84', '#C9503C', '#6B4C8A', '#B5731E', '#8A3C5C'];

  function rd(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function wr(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) { return /^(https?:\/\/[^\s'"()<>]+|images\/[\w\-.]+)$/.test(u || '') ? u : ''; }
  function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  // Per-person data (wishlist, progress...) is stored in this browser under the signed-in email, or "guest".
  function pk(k) { var u = Lib.user(); return k + ':' + (u ? u.email : 'guest'); }

  /* ---------- talking to Supabase ---------- */
  function hdrs(token, extra) {
    var h = { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' };
    if (token) h['Authorization'] = 'Bearer ' + token;
    for (var k in (extra || {})) h[k] = extra[k];
    return h;
  }
  function req(method, path, body, token, extra) {
    return fetch(SUPABASE_URL + path, { method: method, headers: hdrs(token, extra), body: body == null ? undefined : JSON.stringify(body) })
      .then(function (r) {
        return r.text().then(function (t) {
          var j = null; try { j = t ? JSON.parse(t) : null; } catch (e) {}
          return { ok: r.ok, status: r.status, json: j };
        });
      });
  }
  function errMsg(res) { var j = res.json || {}; return j.error_description || j.msg || j.message || j.error || ('Error ' + res.status); }

  function getSess() { return rd(K.sess, null); }
  function setSess(s) { if (s) wr(K.sess, s); else { try { localStorage.removeItem(K.sess); } catch (e) {} } }
  function toSess(j, old) {
    return {
      access_token: j.access_token, refresh_token: j.refresh_token,
      expires_at: j.expires_at || Math.floor(Date.now() / 1000) + (j.expires_in || 3600),
      uid: (j.user && j.user.id) || (old && old.uid) || ''
    };
  }
  // Gives a valid access token (refreshing it if needed), or null when signed out.
  function token() {
    var s = getSess(); if (!s) return Promise.resolve(null);
    if (s.expires_at - 60 > Date.now() / 1000) return Promise.resolve(s.access_token);
    return req('POST', '/auth/v1/token?grant_type=refresh_token', { refresh_token: s.refresh_token }).then(function (r) {
      if (r.ok && r.json && r.json.access_token) { setSess(toSess(r.json, s)); return r.json.access_token; }
      if (r.status >= 400 && r.status < 500) { setSess(null); try { localStorage.removeItem(K.user); } catch (e) {} }
      return null;
    }, function () { return s.access_token; });
  }
  function authed(method, path, body, extra) {
    return token().then(function (t) { return req(method, path, body, t, extra); });
  }
  function getProfile(uid, tok) {
    return req('GET', '/rest/v1/profiles?select=email,name,role&id=eq.' + encodeURIComponent(uid), null, tok).then(function (r) {
      return (r.ok && r.json && r.json[0]) || null;
    }, function () { return null; });
  }

  /* ---------- books (shared, loaded from the database) ---------- */
  function fromRow(r) {
    return {
      id: r.id, title: r.title, author: r.author, genre: r.genre || '', pages: r.pages || 0, ebook: !!r.ebook,
      language: r.language || '', year: r.year || '', publisher: r.publisher || '', isbn: r.isbn || '', copies: r.copies == null ? 0 : r.copies,
      summary: r.summary || '', cover: r.cover || '', ebookUrl: r.ebook_url || '', text: r.text_content || '',
      color: r.color || COLORS[(Number(r.id) || 0) % COLORS.length],
      addedAt: Date.parse(r.added_at) || 0,
      borrows: { week: r.borrows_week || 0, month: r.borrows_month || 0, all: r.borrows_all || 0 }
    };
  }
  function toRow(b) {
    var r = {
      title: b.title, author: b.author, genre: b.genre, pages: Number(b.pages) || 0, ebook: !!b.ebook,
      ebook_url: b.ebookUrl || '', text_content: b.text || '', copies: Math.max(0, Number(b.copies) || 0),
      language: b.language || '', year: String(b.year == null ? '' : b.year), publisher: b.publisher || '', isbn: b.isbn || '',
      summary: b.summary || '', cover: b.cover || '', color: b.color || ''
    };
    if (b.addedAt) r.added_at = new Date(b.addedAt).toISOString();
    return r;
  }
  var BOOKS = null, loadFailed = false;
  function clearBooksCache() { BOOKS = null; try { sessionStorage.removeItem(K.bc); } catch (e) {} }
  function loadBooksSync() {
    try { var c = JSON.parse(sessionStorage.getItem(K.bc)); if (c && Date.now() - c.t < 60000) return c.b; } catch (e) {}
    try {
      var x = new XMLHttpRequest();
      x.open('GET', SUPABASE_URL + '/rest/v1/books?select=*&order=added_at.desc&limit=1000', false);
      x.setRequestHeader('apikey', SUPABASE_KEY);
      x.send(null);
      if (x.status === 200) {
        var b = JSON.parse(x.responseText).map(fromRow);
        try { sessionStorage.setItem(K.bc, JSON.stringify({ t: Date.now(), b: b })); } catch (e) {}
        wr(K.last, b);
        return b;
      }
    } catch (e) {}
    loadFailed = true;
    return rd(K.last, []);
  }
  function showLoadError() {
    var h = document.getElementById('site-header');
    if (!h || document.getElementById('load-err')) return;
    var d = document.createElement('div'); d.id = 'load-err'; d.className = 'msg err';
    d.style.cssText = 'margin:0;border-radius:0;text-align:center';
    d.textContent = 'We could not load the books right now. Please check your connection and refresh the page.';
    h.appendChild(d);
  }
  function writeBook(method, query, row) {
    return authed(method, '/rest/v1/books' + query, row, { 'Prefer': 'return=representation' }).then(function (r) {
      if (!r.ok) throw new Error(r.status === 401 || r.status === 403 ? 'Not allowed. Please sign in with a staff account.' : errMsg(r));
      if (!r.json || !r.json.length) throw new Error('Not allowed. Only staff accounts can change books.');
      clearBooksCache(); return fromRow(r.json[0]);
    });
  }

  var Lib = {
    SITE: SITE, K: K, rd: rd, wr: wr, esc: esc, safeUrl: safeUrl, ymd: ymd, COLORS: COLORS,

    qs: function (n) { return new URLSearchParams(location.search).get(n); },

    /* books */
    books: function () {
      if (!BOOKS) { BOOKS = loadBooksSync(); if (loadFailed && !BOOKS.length) showLoadError(); }
      return BOOKS;
    },
    book: function (id) { return Lib.books().filter(function (x) { return String(x.id) === String(id); })[0]; },
    genres: function () {
      var g = {}; Lib.books().forEach(function (b) { if (b.genre) g[b.genre] = 1; });
      return Object.keys(g).sort();
    },
    addBook: function (b) { return writeBook('POST', '', toRow(b)); },
    updateBook: function (id, b) { return writeBook('PATCH', '?id=eq.' + Number(id), toRow(b)); },
    removeBook: function (id) { return writeBook('DELETE', '?id=eq.' + Number(id), null); },
    recordBorrow: function (id) {
      return authed('POST', '/rest/v1/rpc/record_borrow', { p_id: Number(id) }).then(function (r) { clearBooksCache(); return r.ok; }, function () { return false; });
    },

    /* account (real sign-in through Supabase) */
    user: function () { return getSess() ? rd(K.user, null) : null; },
    setUser: function (u) { if (u) wr(K.user, u); else { try { localStorage.removeItem(K.user); } catch (e) {} } },
    isStaff: function (u) { u = u || Lib.user(); return !!u && (u.role === 'admin' || u.role === 'editor'); },
    // Re-reads the signed-in person's role from the database (so role changes apply).
    refreshUser: function () {
      return token().then(function (t) {
        var s = getSess();
        if (!t || !s) { Lib.setUser(null); return null; }
        return getProfile(s.uid, t).then(function (p) {
          var cur = rd(K.user, null);
          if (!p) return cur;
          var u = { email: p.email, name: p.name, role: p.role };
          Lib.setUser(u); return u;
        });
      }, function () { return rd(K.user, null); });
    },
    signIn: function (email, pw) {
      return req('POST', '/auth/v1/token?grant_type=password', { email: email, password: pw }).then(function (r) {
        if (!r.ok || !r.json || !r.json.access_token) throw new Error(errMsg(r));
        var s = toSess(r.json); setSess(s);
        return getProfile(s.uid, s.access_token).then(function (p) {
          var u = p ? { email: p.email, name: p.name, role: p.role } : { email: email, name: email.split('@')[0], role: 'member' };
          Lib.setUser(u); return u;
        });
      });
    },
    signUp: function (email, pw, name) {
      return req('POST', '/auth/v1/signup', { email: email, password: pw, data: { name: name } }).then(function (r) {
        if (!r.ok) throw new Error(errMsg(r));
        if (!r.json || !r.json.access_token) return { user: null, confirm: true };
        var s = toSess(r.json); setSess(s);
        return getProfile(s.uid, s.access_token).then(function (p) {
          var u = p ? { email: p.email, name: p.name, role: p.role } : { email: email, name: name, role: 'member' };
          Lib.setUser(u); return { user: u, confirm: false };
        });
      });
    },
    signOut: function () {
      var s = getSess();
      if (s) { try { fetch(SUPABASE_URL + '/auth/v1/logout', { method: 'POST', headers: hdrs(s.access_token), keepalive: true }); } catch (e) {} }
      setSess(null); Lib.setUser(null); location.href = 'index.html';
    },
    // Admin only: list people and change their role (member, editor, admin).
    listUsers: function () {
      return authed('GET', '/rest/v1/profiles?select=id,email,name,role&order=created_at.asc').then(function (r) {
        if (!r.ok) throw new Error(errMsg(r)); return r.json || [];
      });
    },
    setRole: function (id, role) {
      return authed('PATCH', '/rest/v1/profiles?id=eq.' + encodeURIComponent(id), { role: role }, { 'Prefer': 'return=representation' }).then(function (r) {
        if (!r.ok) throw new Error(errMsg(r));
        if (!r.json || !r.json.length) throw new Error('Only an admin can change roles.');
        return true;
      });
    },

    /* wishlist */
    wishlist: function () { return rd(pk(K.wish), []); },
    inWish: function (id) { return Lib.wishlist().indexOf(Number(id)) > -1; },
    toggleWish: function (id) {
      id = Number(id); var w = Lib.wishlist(), i = w.indexOf(id);
      if (i > -1) w.splice(i, 1); else w.push(id);
      wr(pk(K.wish), w); return i === -1;
    },

    /* reading progress, days and minutes (saved in this browser) */
    progress: function () { return rd(pk(K.prog), {}); },
    saveProgress: function (id, page, total) {
      var p = Lib.progress(); p[id] = { page: page, total: total, ts: Date.now() }; wr(pk(K.prog), p);
    },
    recordDay: function () {
      var d = rd(pk(K.days), []), t = ymd(new Date());
      if (d.indexOf(t) === -1) { d.push(t); wr(pk(K.days), d); }
    },
    days: function () { return rd(pk(K.days), []); },
    addMinute: function () { wr(pk(K.mins), rd(pk(K.mins), 0) + 1); },
    minutes: function () { return rd(pk(K.mins), 0); },
    streak: function () {
      var set = {}; Lib.days().forEach(function (x) { set[x] = 1; });
      var n = 0, t = new Date();
      if (!set[ymd(t)]) t.setDate(t.getDate() - 1);
      while (set[ymd(t)]) { n++; t.setDate(t.getDate() - 1); }
      return n;
    },
    goal: function () { return rd(pk(K.goal), 12); },
    setGoal: function (n) { wr(pk(K.goal), n); },

    /* borrowing (due dates are saved in this browser) */
    borrowed: function () { return rd(pk(K.borrowed), {}); },
    saveBorrowed: function (b) { wr(pk(K.borrowed), b); },

    /* html helpers */
    cover: function (b, badge) {
      var img = safeUrl(b.cover);
      var st = img ? 'background-image:url(' + img + ')' : 'background:' + esc(b.color || COLORS[0]);
      return '<span class="cover' + (img ? ' img' : '') + '" style="' + st + '"><span>' + esc(b.title) + '</span>' +
        (badge ? '<b class="badge">E-BOOK</b>' : '') + '</span>';
    },
    card: function (b, o) {
      o = o || {};
      return '<div class="book"><a href="book.html?id=' + b.id + '" aria-label="' + esc(b.title) + '">' + Lib.cover(b, o.ebook) + '</a>' +
        '<a class="t" href="book.html?id=' + b.id + '">' + esc(b.title) + '</a><div class="a">' + esc(b.author) + '</div>' +
        (o.ebook ? '<a class="btn primary sm" href="reader.html?id=' + b.id + '">Read</a>' : '') + '</div>';
    }
  };
  window.Lib = Lib;

  /* header, menu and footer */
  var heart = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
  var burger = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  var close = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  var bookIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h5a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4z"/><path d="M20 5h-5a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h6z"/></svg>';

  var u = Lib.user();
  var head = document.getElementById('site-header');
  if (head) {
    var links = [
      ['index.html', 'Home'], ['index.html#news', 'News'], ['popular.html', 'Popular books'],
      ['books.html?tab=recent', 'Recently added'], ['books.html', 'All books'], ['ebooks.html', 'E-books'],
      ['wishlist.html', 'Wishlist'], ['status.html', 'Reading status']
    ];
    head.innerHTML =
      '<header class="bar"><div class="wrap">' +
      '<a class="logo" href="index.html"><i>' + bookIcon + '</i>' + esc(SITE.name) + '</a>' +
      '<div><a class="icon-btn" href="wishlist.html" aria-label="Wishlist">' + heart + '</a>' +
      '<button class="icon-btn" id="menu-open" aria-label="Open menu">' + burger + '</button></div>' +
      '</div></header>' +
      '<div class="drawer" id="drawer" hidden><nav aria-label="Main menu">' +
      '<div class="top">Menu<button class="icon-btn" id="menu-close" aria-label="Close menu">' + close + '</button></div>' +
      links.map(function (l) { return '<a class="l" href="' + l[0] + '">' + l[1] + '</a>'; }).join('') +
      (Lib.isStaff(u) ? '<small>Library staff</small><a class="l" href="admin.html">' + (u.role === 'admin' ? 'Admin dashboard' : 'Manage books') + '</a>' : '') +
      '<div class="grow"></div>' +
      (u ? '<p class="muted" style="margin:8px 0">Signed in as ' + esc(u.name || u.email) + '</p><button class="btn" id="signout">Sign out</button>'
         : '<a class="btn primary" href="signin.html">Sign in</a>') +
      '</nav></div>';
    var dr = document.getElementById('drawer');
    function show(v) { dr.hidden = !v; if (v) document.getElementById('menu-close').focus(); else document.getElementById('menu-open').focus(); }
    document.getElementById('menu-open').onclick = function () { show(true); };
    document.getElementById('menu-close').onclick = function () { show(false); };
    dr.onclick = function (e) { if (e.target === dr) show(false); };
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dr.hidden) show(false); });
    var so = document.getElementById('signout'); if (so) so.onclick = Lib.signOut;
  }
  // Keep the signed-in role up to date (for example after an admin makes someone an editor).
  if (u) Lib.refreshUser().then(function (nu) { if ((nu ? nu.role : null) !== u.role) location.reload(); });
  var foot = document.getElementById('site-footer');
  if (foot) {
    foot.innerHTML = '<footer class="foot"><div class="wrap cols">' +
      '<div><h3>About us</h3><p>' + esc(SITE.about) + '</p></div>' +
      '<div><h3>Contact us</h3><p>' + [SITE.email, SITE.phone].filter(Boolean).map(function (x) { return esc(x); }).join(' &middot; ') +
      (SITE.address ? '<br>' + esc(SITE.address) : '') + (SITE.hours ? '<br>' + esc(SITE.hours) : '') + '</p></div>' +
      '</div></footer>';
  }
  if (document.title.indexOf(SITE.name) === -1) document.title += ' | ' + SITE.name;

  /* Left/right arrows on every sliding row (works with mouse; touch users can swipe) */
  function enhance() {
    var rows = document.querySelectorAll('.row:not([data-sl])');
    Array.prototype.forEach.call(rows, function (row) {
      row.setAttribute('data-sl', '1');
      var wrap = document.createElement('div'); wrap.className = 'rowwrap';
      row.parentNode.insertBefore(wrap, row); wrap.appendChild(row);
      function mk(cls, label, glyph) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'arrow ' + cls;
        b.setAttribute('aria-label', label); b.innerHTML = glyph; wrap.appendChild(b); return b;
      }
      var prev = mk('prev', 'Slide left', '&#8249;'), next = mk('next', 'Slide right', '&#8250;');
      function upd() {
        var max = row.scrollWidth - row.clientWidth;
        prev.hidden = row.scrollLeft < 4; next.hidden = row.scrollLeft >= max - 4;
      }
      prev.onclick = function () { row.scrollBy({ left: -row.clientWidth * 0.8, behavior: 'smooth' }); };
      next.onclick = function () { row.scrollBy({ left: row.clientWidth * 0.8, behavior: 'smooth' }); };
      row.addEventListener('scroll', upd);
      window.addEventListener('resize', upd);
      new MutationObserver(upd).observe(row, { childList: true });
      upd(); setTimeout(upd, 300);
    });
  }
  enhance();
  var pend = false;
  new MutationObserver(function () {
    if (pend) return; pend = true;
    requestAnimationFrame(function () { pend = false; enhance(); });
  }).observe(document.body, { childList: true, subtree: true });
})();
