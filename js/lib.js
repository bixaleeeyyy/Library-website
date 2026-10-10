/* Shared code: data storage, book cards, header/menu/footer.
   Everything is saved in the visitor's browser (localStorage).
   To use a real database later, replace the functions in `Lib` below. */
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
      ['The Quiet Orchard', 'Maya Rao', 'Fiction', 320, true, 920],
      ['Atlas of Small Things', 'Daniel Okafor', 'Non-fiction', 240, false, 610],
      ['Cells and Seasons', 'Priya Menon', 'Science', 288, true, 700],
      ['The Salt Road', 'Lukas Weiss', 'History', 410, false, 810],
      ['Night Train to Nowhere', 'Elena Costa', 'Fiction', 352, true, 760],
      ['Little Fox Learns to Count', 'Ava Brooks', 'Children', 48, true, 530],
      ['Keeper of the Light', 'Tom Hale', 'Biography', 276, false, 330],
      ['Physics for the Curious', 'Ravi Iyer', 'Science', 360, true, 470],
      ['Rivers of the Old World', 'Hana Sato', 'History', 300, false, 390],
      ['The Paper Lantern', 'Mei Lin', 'Fiction', 198, true, 280],
      ['Algebra Made Simple', 'Sam Patel', 'Textbooks', 420, false, 240],
      ['Stars Over the Harbour', 'Nora Kim', 'Fiction', 264, false, 180]
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
    K: K, rd: rd, wr: wr, esc: esc, safeUrl: safeUrl, ymd: ymd, COLORS: COLORS,

    qs: function (n) { return new URLSearchParams(location.search).get(n); },

    /* books */
    books: function () { var b = rd(K.books, null); if (!b || !b.length) { b = seed(); wr(K.books, b); } return b; },
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
      '<a class="logo" href="index.html"><i>' + bookIcon + '</i>[Library name]</a>' +
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
    foot.innerHTML = '<footer class="foot"><div class="wrap"><h3>About us</h3><p>[Short description of your library]</p>' +
      '<h3>Contact us</h3><p>[Email] &middot; [Phone]<br>[Address and opening hours]</p></div></footer>';
  }
})();
