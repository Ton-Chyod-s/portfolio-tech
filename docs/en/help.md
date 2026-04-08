# Help — Usability Heuristics and Guidelines

This page documents **Jakob Nielsen's** usability heuristics applied in this portfolio, indicating where and how each principle was used.

---

## 1. Visibility of System Status

**Description:** The system should always keep users informed about what is happening, providing appropriate feedback within reasonable time.

**Application in this project:**
- The sidebar visually highlights the current page with the theme color (`#42b983`), indicating to the visitor which section they are in.
- The browser title displays "Portfolio - Klayton", contextualizing the user about the site.

---

## 2. Match Between System and the Real World

**Description:** The system should use words, phrases, and concepts familiar to the user, following real-world conventions.

**Application in this project:**
- Page names are intuitive: **About**, **Projects**, **Contact**, **Help** — terms recognized by visitors without needing explanation.
- Use of familiar icons and badges (GitHub, LinkedIn, email) on the home and contact pages.

---

## 3. User Control and Freedom

**Description:** Users often choose functions by mistake and need a clearly marked "emergency exit" to leave the undesired state.

**Application in this project:**
- The sidebar remains visible on all pages, allowing free navigation between sections without mandatory sequence.
- No forced flows or blocking modals — visitors can freely go back and forth.

---

## 4. Consistency and Standards

**Description:** Users should not have to wonder whether different words, situations, or actions mean the same thing.

**Application in this project:**
- Layout, typography, spacing, and color palette (`#42b983` as accent color, `#0E76A8` for secondary elements) are consistent across all pages.
- Heading structure (`#`, `##`, `###`) standardized across all `.md` files.
- Hover effects on the sidebar (`transform: translateX(4px)`) applied uniformly across all links.

---

## 5. Error Prevention

**Description:** Even better than good error messages is a careful design that prevents problems from occurring in the first place.

**Application in this project:**
- The contact form uses native HTML5 validation (`required`, `type="email"`) to prevent submission of incomplete or invalid data.
- External links open in a new tab (`target="_blank"`), preventing visitors from accidentally losing the portfolio context.

---

## 6. Recognition Rather Than Recall

**Description:** Minimize the user's memory load by making objects, actions, and options visible.

**Application in this project:**
- The sidebar with all navigation links is always visible — users do not need to memorize the site structure.
- Clear titles on each page eliminate doubts about the displayed content.

---

## 7. Flexibility and Efficiency of Use

**Description:** Accelerators — unseen by the novice user — may often speed up the interaction for the expert user.

**Application in this project:**
- Responsive design based on the Docsify Vue theme, adapted for reading on mobile and desktop devices.
- Direct URLs to each section (`/#/docs/en/about`, `/#/docs/en/projects`) allow quick access and sharing of specific pages.

---

## 8. Aesthetic and Minimalist Design

**Description:** Dialogues should not contain irrelevant or rarely needed information. Every extra unit of information competes with the relevant information.

**Application in this project:**
- Clean layout with white background, no advertising banners or unnecessary elements.
- Information organized in clear sections with separators (`---`), avoiding visual overload.
- Compact sidebar with only the essential pages.

---

## 9. Help and Documentation

**Description:** Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation.

**Application in this project:**
- This page documents the structure and design principles used, serving as a reference guide for evaluation and portfolio maintenance.
- Each section of the portfolio has self-explanatory titles and descriptions.

---

## Reference

> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Available at: [nngroup.com/articles/ten-usability-heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
