/* Shared code: data storage, book cards, header/menu/footer.
   Everything is saved in the visitor's browser (localStorage).
   To use a real database later, replace the functions in `Lib` below. */
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

(function () {
  'use strict';

  var K = {
    books: 'lib_books', user: 'lib_user', users: 'lib_users',
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

  // Per-person data (wishlist, progress...) is stored under the signed-in email, or "guest".
  function pk(k) { var u = rd(K.user, null); return k + ':' + (u ? u.email : 'guest'); }

  function seed() {
    // Sample books. Replace or delete them on the Admin page.
    var rows = [
      // Order: title, author, genre, pages, e-book (true/false), borrow count, picture (optional, e.g. 'images/orchard.jpg')
      ['The Alchemist', 'Paulo Coelho', 'Fiction', 208, false, 176, 'images/Book-The-Alchemist.jpg'],
      ['The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 'Fiction', 366, true, 205, 'images/Book-The-adventures-of-sherlock-holmes.jpg'],
      ['Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 'History', 480, false, 27, 'images/Book-Sapiens-A-Brief-History-of-Humankind.jpg'],
      ['Treasure Island', 'Robert Louis Stevenson', 'Fiction', 333, true, 169, 'images/Book-Treasure-Island.jpg'],
      ['The Selfish Gene', 'Richard Dawkins', 'Science', 496, false, 95,'images/Book-The-Selfish-Gene.jpg'],
      ['Crime and Punishment', 'Fyodor Dostoevsky', 'Psychological', 527, true, 83,'images/Book-Crime-And-Punishment.jpg'],
      ['Guns, Germs, and Steel', 'Jared Diamond', 'History', 480, false, 30, 'images/Book-Guns-Germs-and-Steel.jpg'],
      ['Oru Desathinte Katha', 'S. K. Pottekkatt', 'Malayalam', 566, false, 70, 'images/Book-Oru-Desathinte-Katha.jpg'],
      ['Cosmos', 'Carl Sagan', 'Science', 365, false, 30, 'images/Book-Cosmos.jpg'],
      ["Alice's Adventures in Wonderland", 'Lewis Carroll', 'Children', 122, true, 90, 'images/Book-Alice-in-Wonderland.jpg'],
      ['Moby-Dick; or, The Whale', 'Herman Melville', 'Fiction', 635, true, 80,'images/Book-Moby-Dick.jpg'],
      ['Ram c/o Anandhi', 'Akhil P. Dharmajan', 'Romance', 320, false, 40, 'images/Book-Ram-care-of-Anandhi.jpg'],
      ['Wings of Fire', 'A. P. J. Abdul Kalam', 'Autobiography', 180, false, 180, 'images/Book-Wings-of-Fire.jpg'],
      ['Dracula', 'Bram Stoker', 'Horror', 480, true, 72,'images/Book-Dracula.jpg'],
      ['The Count of Monte Cristo', 'Alexandre Dumas', 'Fiction', 1804, false, 30, 'images/Book-The-count-of-Monte-cristo.jpg'],
      ['The Silk Roads: A New History of the World', 'Peter Frankopan', 'History', 736, false, 49, 'images/Book-The-Silk-Roads-A-New-History-of-the-World.jpg'],
      ['The Strange Case of Dr Jekyll and Mr Hyde', 'Robert Louis Stevenson', 'Fiction', 90, true, 153, 'images/Book-the-strange-case-of-dr-jekyll-and-hyde.jpg'],
      ['Balyakalasakhi', 'Vaikom Muhammad Basheer', 'Malayalam', 80, false, 108, 'images/Book-Balyakalasakhi.jpg'],
      ['Charlie and the Chocolate Factory', 'Roald Dahl', 'Children', 192, true, 60,'images/Book-Charlie-and-the-Chocolate-Factory.jpg'],
      ['Atomic Habits', 'James Clear', 'Non-fiction', 320, false, 140, 'images/Book-Atomic-Habits.jpg'],
      ['Peter Pan', 'J. M. Barrie', 'Children', 240, false, 70, 'images/Book-Peter-Pan.jpg']
    ];
    var now = Date.now(), day = 864e5;
    return rows.map(function (r, i) {
      return {
        id: i + 1, title: r[0], author: r[1], genre: r[2], pages: r[3], ebook: r[4],
        language: 'English', year: '', publisher: '', isbn: '', copies: 3,
        summary: '[Add a short summary on the Admin page.]',
        cover: r[6] || '', ebookUrl: '', text: '', color: COLORS[i % COLORS.length],
        addedAt: now - i * 3 * day,
        borrows: { week: Math.round(r[5] / 20), month: Math.round(r[5] / 5), all: r[5] }
      };
    });
  }

  var Lib = {
    SITE: SITE, K: K, rd: rd, wr: wr, esc: esc, safeUrl: safeUrl, ymd: ymd, COLORS: COLORS,

    qs: function (n) { return new URLSearchParams(location.search).get(n); },

    /* books */
    books: function () { var b = rd(K.books, null), v = 1; if (!b || !b.length || rd('lib_booksv', 0) !== v) { b = seed(); wr(K.books, b); wr('lib_booksv', v); } return b; },
    saveBooks: function (b) { wr(K.books, b); },
    resetBooks: function () { wr(K.books, seed()); },
    book: function (id) { return Lib.books().filter(function (x) { return String(x.id) === String(id); })[0]; },
    genres: function () {
      var g = {}; Lib.books().forEach(function (b) { if (b.genre) g[b.genre] = 1; });
      return Object.keys(g).sort();
    },

    /* account (demo: stored in this browser only) */
    user: function () { return rd(K.user, null); },
    setUser: function (u) { if (u) wr(K.user, u); else localStorage.removeItem(K.user); },

    /* wishlist */
    wishlist: function () { return rd(pk(K.wish), []); },
    inWish: function (id) { return Lib.wishlist().indexOf(Number(id)) > -1; },
    toggleWish: function (id) {
      id = Number(id); var w = Lib.wishlist(), i = w.indexOf(id);
      if (i > -1) w.splice(i, 1); else w.push(id);
      wr(pk(K.wish), w); return i === -1;
    },

    /* reading progress, days and minutes */
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

    /* borrowing */
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
    },
    signOut: function () { Lib.setUser(null); location.href = 'index.html'; }
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
      ((u && u.role === 'admin') ? '<small>Library staff</small><a class="l" href="admin.html">Admin dashboard</a>' : '') +
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
