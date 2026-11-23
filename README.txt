0. SINGLE-FILE HEADER & FOOTER MANAGEMENT (NEW!):
   - All 15 pages now load the Navigation Bar, Footer, Media Lightbox, and
     Floating Dock from ONE file:  assets/js/components.js
   - Whenever you want to add a menu item, change the address, or update a
     footer link, edit ONLY assets/js/components.js — every page updates
     automatically!
   - Works everywhere: GitHub Pages, cPanel, VS Code Live Server, and even
     double-clicking index.html locally.

FABLAB INDIA — MODERN STATIC WEBSITE PACKAGE (cPanel Ready)
============================================================

1. STAGING DEPLOYMENT (TEST FIRST):
   - Upload this ZIP into a staging folder on cPanel (e.g., public_html/test/) and extract it.
   - Disable NGINX Caching temporarily in cPanel while reviewing.
   - Visit https://fablabindia.com/test/ to review all 15 pages with the client.

2. PRESERVING MEDIA BEFORE DELETING WORDPRESS (IMPORTANT!):
   - Right now, images and videos load directly from https://fablabindia.com/wp-content/...
   - BEFORE you delete WordPress from public_html, copy these two folders into a backup or keep them in public_html/media/:
       a) public_html/wp-content/uploads/
       b) public_html/wp-content/themes/leroux/page_template/images/fabsite/
   - Then run a quick Find & Replace across the HTML files:
       https://fablabindia.com/wp-content/  -->  media/
   - After confirming all images/videos load from media/, you can safely delete all WordPress PHP files and drop the WordPress MySQL database.

3. GOING LIVE:
   - Move the extracted files into public_html/.
   - Confirm contact.php delivers to sales@fablabindia.com.
   - Re-enable NGINX Caching in cPanel for maximum speed.
