# Library website

A mobile-friendly library website built with plain HTML, CSS and JavaScript. No install or build step.

## Pages
| File | What it does |
|---|---|
| `index.html` | Home: hero, continue reading, search, categories, news, popular, recommended, recently added, all books, e-books |
| `books.html` | All books with search, genre and tab filters (also used for "Recently added") |
| `popular.html` | Popular books by week, month or all time |
| `book.html?id=1` | Book details, borrow/return, wishlist, read e-book |
| `ebooks.html` | E-book list with a Read button |
| `reader.html?id=1` | E-book reader (text size, Light/Sepia/Dark, page progress) |
| `wishlist.html` | Saved books |
| `status.html` | Hours read, books finished, streak, goal, borrowed books, badges |
| `signin.html` | Sign in / create account |
| `admin.html` | Staff only: add, edit and remove books |

## Try it on your computer
Double-click `index.html`. Demo admin account: `admin@library.demo` / `admin123`.

## Put it on GitHub (no IDE needed)
1. Create a free account at https://github.com.
2. Click **+ → New repository**. Name it `library-website`, choose **Public**, click **Create repository**.
3. Click **uploading an existing file**, drag in everything from this folder (the `.html` files, plus the `css` and `js` folders), then click **Commit changes**.
4. Open **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After about a minute the site is live at `https://YOURUSERNAME.github.io/library-website/`.

### Or with Git on your computer
```
cd library-website
git init
git add .
git commit -m "First version of library website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/library-website.git
git push -u origin main
```
GitHub will ask you to sign in through the browser (or use the GitHub Desktop app). Then do step 4 above.

### Editing later
Open your repo on GitHub and press the `.` key for an in-browser editor, or click a file and use the pencil icon. Commit, and the live site updates in about a minute.

## Customize
- **Library name, About us, Contact us:** search for `[Library name]` and `[...]` placeholders in `js/lib.js` and the HTML files.
- **Colors:** change the values at the top of `css/style.css`.
- **Hero photo:** put `hero.jpg` in an `images` folder and add this to `css/style.css`:
  `.hero{background:linear-gradient(rgba(17,38,60,.65),rgba(17,38,60,.65)),url(../images/hero.jpg) center/cover}`
- **Books:** sign in as admin and use the Admin page, or edit the sample list in `seed()` inside `js/lib.js`.

## Important limits (read before going live)
This version is a front-end only site hosted on GitHub Pages.
- Books, accounts, wishlist, borrowing and reading progress are saved in each visitor's own browser (localStorage). An admin's changes are **not** shared with other visitors.
- The admin check and sign-in only run in the browser, so they are **not real security**. Remove the demo admin hint from `signin.html` before sharing the site.
- For a real library with shared data and real accounts, add a backend such as **Firebase** or **Supabase** (both have free plans) and replace the functions in `js/lib.js`. Ask Claude to help with that step.
