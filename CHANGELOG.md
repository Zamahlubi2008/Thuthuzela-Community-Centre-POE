# Thuthuzela Community Centre POE — Change Log

**Version:** POE revision / submission preparation  
**Date:** 2 November 2026

> Important: The original Part 2 lecturer feedback was not included with the files supplied for this review. This log records technical corrections prepared for the supplied project. Before submission, add the exact Part 2 feedback and identify which of the changes below respond to each comment. Do not claim a change was made in response to feedback unless that is true.

| Area | Issue found in supplied project | Change prepared | Purpose / test |
|---|---|---|---|
| Stylesheet loading | Pages linked to `assets/css/style.css`, but the ZIP only contained root-level `styles.css`. | Added `assets/css/style.css` and compatibility rules for the actual page class names. | Load each page and confirm layout, navigation, cards and mobile styles appear. |
| JavaScript loading | Pages linked to `assets/js/main.js`, but the ZIP only contained root-level `main.js`. | Added `assets/js/main.js`. | Confirm menu, service search, form validation, gallery lightbox and back-to-top behaviour. |
| Form validation | Email validation regex and checkbox clearing needed correction. | Corrected email pattern and checkbox validation feedback handling. | Test empty fields, invalid email, unchecked consent and valid input. |
| Missing enquiry page | Navigation and service links pointed to `inquiry.html`, which was absent. | Added `inquiry.html` with a browser-side demo form and topic selection. | Open enquiry links from navigation and service cards; confirm query-string topic preselection. |
| Missing privacy page | Footer links pointed to `privacy.html`, which was absent. | Added `privacy.html` describing the prototype's demo-only form behaviour and external content. | Open the privacy link from the footer. |
| Missing image assets | Local favicon and fallback image paths were referenced but not supplied. | Added favicon and labelled SVG fallback placeholders; copied community photo for stylesheet background. | Temporarily block external image access and confirm local fallback paths load where used. |
| Canonical metadata | Pages used `example.org` canonical URLs, which are not the real project domain. | Removed the placeholder canonical URL tags. | Confirm no fake canonical domain remains in page source. |
| Map script | Root-level `map.js` referred to Ikasi Youth Centre and a different address. | Replaced it with a clearly documented placeholder; the contact page continues to use its labelled approximate OpenStreetMap iframe. | Confirm the unrelated centre name/address is no longer in project JavaScript. Verify the real centre address before publishing. |
| Sitemap | Existing sitemap contains `example.org` URLs. | Fix pack instructions say to remove it until the real hosted domain is known. | Generate a new sitemap only after the final website URL is confirmed. |

## Part 2 feedback mapping — complete before submission

Copy each lecturer comment from Part 2 into the first column and complete the other columns with your own evidence.

| Exact Part 2 feedback | Action taken | Evidence / page tested |
|---|---|---|
| [Paste lecturer comment 1] | [Describe your actual correction] | [Name the page / screenshot] |
| [Paste lecturer comment 2] | [Describe your actual correction] | [Name the page / screenshot] |
| [Add further comments as needed] | [Describe your actual correction] | [Name the page / screenshot] |

## Before submission

- Replace any placeholder organisational address, email, phone number, service details or map location with verified information, or keep a clear student-prototype disclaimer if the assignment permits sample content.
- Confirm the images and external map load with an internet connection and retain appropriate image credits/licences if required by the assignment.
- Test every navigation/footer link and all forms in a browser. Demo forms only validate locally; they do not send messages.
- Check the final project folder includes the original JSON files and all original HTML pages as well as the `assets` folder.
- Add dated screenshots or other evidence of changes if required by the lecturer.
