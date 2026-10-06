# Feathers Nutripharma — Test Site

A static, responsive marketing site (HTML + CSS + JavaScript, no build step).

## Files
- `index.html` — Home
- `about.html` — About (mission, vision, how we work)
- `products.html` — all products with filters (supports `products.html?cat=birds`, `animals`, `breeders`)
- `avian-care.html` — care articles (click to read)
- `contact.html` — contact form and FAQ
- `css/style.css` — design and layout
- `js/main.js` — products list, articles, popups, menu and animations

## Deploy on Vercel
1. Create a new GitHub repository and upload all files from this folder (keep the `css` and `js` folders).
2. Go to https://vercel.com → **Add New → Project** → import the repository.
3. Framework preset: **Other**. Leave build command and output directory empty.
4. Click **Deploy**. Your test link will be ready in about a minute.

## Things to update
- **Products & prices:** edit the `products` list at the top of `js/main.js`.
- **Articles:** edit the `articles` list in `js/main.js`.
- **Contact details:** search for `Add company address here`, `+92 XXX XXXXXXX` and `info@yourdomain.com` in `contact.html`.
- **Contact form:** currently a demo. To receive messages, connect a free service like Formspree or Web3Forms.
- **Real photos:** see `images/HOW-TO-ADD-PHOTOS.txt`. Save each photo with the given name into `images/products/` or `images/care/` and it appears automatically.
