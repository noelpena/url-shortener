import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, g as addAttribute, h as createAstro, j as defineScriptVars, k as renderHead } from '../astro_nX8BPZXn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$AdvancedStats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="advanced-stats" data-astro-cid-r4cypxda> <div id="advanced-stats-wrap" data-astro-cid-r4cypxda> <div id="stats-heading" data-astro-cid-r4cypxda> <h2 data-astro-cid-r4cypxda>Advanced Statistics</h2> <p class="lead" data-astro-cid-r4cypxda>
Track how your links are performing across the web with our
				advanced statistics dashboard.
</p> </div> <div id="cards" data-astro-cid-r4cypxda> <div class="card" data-astro-cid-r4cypxda> <img src="../images/icon-brand-recognition.svg" alt="" data-astro-cid-r4cypxda> <h3 data-astro-cid-r4cypxda>Brand Recognition</h3> <p data-astro-cid-r4cypxda>
Boost your brand recognition with each click. Generic links
					don't mean a thing. Branded links help instil confidence in
					your content.
</p> </div> <div class="card" data-astro-cid-r4cypxda> <img src="../images/icon-detailed-records.svg" alt="" data-astro-cid-r4cypxda> <h3 data-astro-cid-r4cypxda>Detailed Records</h3> <p data-astro-cid-r4cypxda>
Gain insights into who is clicking your links. Knowing when
					and where people engage with your content helps inform
					better decisions.
</p> </div> <div class="card" data-astro-cid-r4cypxda> <img src="../images/icon-fully-customizable.svg" alt="" data-astro-cid-r4cypxda> <h3 data-astro-cid-r4cypxda>Fully Customizable</h3> <p data-astro-cid-r4cypxda>
Improve brand awareness and content discoverability through
					customizable links, supercharging audience engagement.
</p> </div> </div> </div> <div id="hr-wrap" data-astro-cid-r4cypxda> <hr data-astro-cid-r4cypxda> </div> </section> `;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Advanced_Stats.astro", void 0);

function Button({
  text,
  type = "button",
  is_small = false,
  has_square_edges = false
}) {
  is_small = is_small || false;
  has_square_edges = has_square_edges || false;
  let button_class = (has_square_edges ? " btn-square" : "") + (is_small ? " btn-small" : "");
  return /* @__PURE__ */ jsx("button", { type, className: button_class, children: text });
}

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta" data-astro-cid-4xty6sx2> <h2 data-astro-cid-4xty6sx2>Boost your links today</h2> ${renderComponent($$result, "Button", Button, { "text": "Get Started", "data-astro-cid-4xty6sx2": true })} </section> `;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/CTA.astro", void 0);

const $$Astro$1 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const { color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="121" height="33"><path${addAttribute(color, "fill")} d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"></path></svg>`;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Logo.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-dv46nlzh> <li data-astro-cid-dv46nlzh> <a href="##" data-astro-cid-dv46nlzh><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-astro-cid-dv46nlzh><path fill="currentColor" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" data-astro-cid-dv46nlzh></path></svg></a> </li> <li data-astro-cid-dv46nlzh> <a href="##" data-astro-cid-dv46nlzh><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" data-astro-cid-dv46nlzh><path fill="currentColor" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" data-astro-cid-dv46nlzh></path></svg></a> </li> <li data-astro-cid-dv46nlzh> <a href="##" data-astro-cid-dv46nlzh><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-astro-cid-dv46nlzh><path fill="currentColor" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" data-astro-cid-dv46nlzh></path></svg></a> </li> <li data-astro-cid-dv46nlzh> <a href="##" data-astro-cid-dv46nlzh><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-astro-cid-dv46nlzh><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-astro-cid-dv46nlzh></path></svg></a> </li> </ul> `;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/SocialIcons.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div id="footer-wrap" data-astro-cid-sz7xmlte> <a href="#" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Logo", $$Logo, { "color": "#FFF", "data-astro-cid-sz7xmlte": true })} </a> <div class="footer-links" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>Features</strong> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="" data-astro-cid-sz7xmlte>Link Shortening</a></li> <li data-astro-cid-sz7xmlte><a href="" data-astro-cid-sz7xmlte>Branded Links</a></li> <li data-astro-cid-sz7xmlte><a href="" data-astro-cid-sz7xmlte>Analytics</a></li> </ul> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>Resources</strong> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Blog</a></li> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Developers</a></li> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Support</a></li> </ul> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>Company</strong> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>About</a></li> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Our Team</a></li> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Careers</a></li> <li data-astro-cid-sz7xmlte><a href="##" data-astro-cid-sz7xmlte>Contact</a></li> </ul> </div> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "data-astro-cid-sz7xmlte": true })} </div> </footer> `;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Footer.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-astro-cid-bbe6dxrz> <div id="hero-text" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>More than just shorter links</h1> <p data-astro-cid-bbe6dxrz>
Build your brand's recognition and get detailed insights on how your
			links are performing.
</p> ${renderComponent($$result, "Button", Button, { "text": "Get Started", "data-astro-cid-bbe6dxrz": true })} </div> <img src="/images/illustration-working.svg" alt="" data-astro-cid-bbe6dxrz> </section> `;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Hero.astro", void 0);

const closeIcon = new Proxy({"src":"/_astro/icon-close.DnXbGpDr.svg","width":18,"height":19,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/images/icon-close.svg";
							}
							
							return target[name];
						}
					});

const hamburger = new Proxy({"src":"/_astro/icon-hamburger.BkQR2FXG.svg","width":24,"height":11,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/images/icon-hamburger.svg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<nav data-astro-cid-dmqpwcec> <a href="#" data-astro-cid-dmqpwcec> ', ' </a> <ul data-astro-cid-dmqpwcec> <div id="main-links" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Features</a></li> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Pricing</a></li> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Resources</a></li> </div> <div id="cta-links" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Login</a></li> <li data-astro-cid-dmqpwcec>', '</li> </div> </ul> <div id="mobile-nav" style="display: none" data-astro-cid-dmqpwcec> <img', ' alt="hamburger menu icon" data-astro-cid-dmqpwcec> </div> </nav> <div id="mobile_nav_menu" style="opacity: 0; visibility: hidden" data-astro-cid-dmqpwcec> <div role="navigation" aria-label="mobile-navigation" data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Features</a></li> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Pricing</a></li> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Resources</a></li> <hr data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="##" data-astro-cid-dmqpwcec>Login</a></li> ', " </ul> </div> </div>  <script>(function(){", '\n	const hamburgerBtn = document.getElementById("mobile-nav");\n	const mobileMenu = document.getElementById("mobile_nav_menu");\n\n	if (mobileMenu) {\n		hamburgerBtn.addEventListener("click", (e) => {\n			console.dir(mobileMenu);\n			let imgSrc = hamburgerBtn.children[0].src;\n			if (imgSrc.includes("icon-hamburger")) {\n				hamburgerBtn.children[0].src = closeIcon.src;\n				hamburgerBtn.children[0].classList.add("open-menu-icon");\n				mobileMenu.style.opacity = 1;\n				mobileMenu.style.visibility = "visible";\n			} else if (imgSrc.includes("icon-close")) {\n				hamburgerBtn.children[0].classList.remove("open-menu-icon");\n				hamburgerBtn.children[0].src = hamburger.src;\n				mobileMenu.style.opacity = 0;\n				mobileMenu.style.visibility = "hidden";\n			}\n		});\n	}\n})();<\/script>'])), maybeRenderHead(), renderComponent($$result, "Logo", $$Logo, { "color": "#232127", "data-astro-cid-dmqpwcec": true }), renderComponent($$result, "Button", Button, { "text": "Sign Up", "is_small": true, "data-astro-cid-dmqpwcec": true }), addAttribute(hamburger.src, "src"), renderComponent($$result, "Button", Button, { "text": "Sign Up", "data-astro-cid-dmqpwcec": true }), defineScriptVars({ closeIcon, hamburger }));
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Nav.astro", void 0);

function SavedUrls({
  urlData,
  handleUrlDataChange
}) {
  const [clickedBtn, setClickedBtn] = useState(null);
  function handleBtnClick(hash) {
    setClickedBtn(hash);
    setTimeout(() => removeBtnClick(), 3e3);
    const selectedBtn = urlData.find((data) => data.hash === hash);
    if (selectedBtn) {
      navigator.clipboard.writeText(selectedBtn.short_url);
    }
  }
  function removeBtnClick() {
    setClickedBtn(null);
  }
  return /* @__PURE__ */ jsx("div", { id: "saved-urls-wrap", children: urlData.map((data) => /* @__PURE__ */ jsxs("article", { children: [
    /* @__PURE__ */ jsx("p", { style: { margin: 0, padding: 0 }, children: data.long_url }),
    /* @__PURE__ */ jsxs("div", { id: "link_btn_wrap", children: [
      /* @__PURE__ */ jsx("span", { children: data.short_url }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: clickedBtn === data.hash ? "btn-clicked" : "",
          onClick: () => handleBtnClick(data.hash),
          type: "button",
          children: clickedBtn === data.hash ? "Copied!" : "Copy"
        }
      )
    ] })
  ] }, data.hash)) });
}

const LOCAL_STORAGE_PREFIX = "NP_URL_SHORTENER";
function Url_Input() {
  const [inputError, setInputError] = useState(false);
  const [urlData, setUrlData] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_PREFIX);
    if (savedData) {
      handleUrlDataChange(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX, JSON.stringify(urlData));
  }, [urlData]);
  function handleSubmit(e) {
    e.preventDefault();
    setInputError(false);
    const input = document.querySelector("input");
    if (input) {
      const inputValue = input.value;
      if (inputValue === "" || inputValue === null) {
        setInputError(true);
        return;
      }
      shortenUrl(inputValue);
    }
  }
  async function shortenUrl(inputValue) {
    const res = await fetch(`api/hash`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: inputValue
      })
    });
    const data = await res.json();
    console.log(data);
    setUrlData([...urlData, data]);
  }
  function handleUrlDataChange(newData) {
    setUrlData([...newData]);
  }
  return /* @__PURE__ */ jsxs("section", { id: "url-input", children: [
    /* @__PURE__ */ jsxs("form", { className: "url-input-form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { id: "url-input-wrap", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputError ? "input-error" : "",
            type: "text",
            placeholder: "Shorten a link here..."
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            text: "Shorten it!",
            has_square_edges: true
          }
        )
      ] }),
      inputError && /* @__PURE__ */ jsx("span", { id: "input-error-text", children: /* @__PURE__ */ jsx("em", { children: "Please add a link" }) })
    ] }),
    /* @__PURE__ */ jsx(
      SavedUrls,
      {
        urlData,
        handleUrlDataChange
      }
    )
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- FONTS  --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Shortly URL shortening API</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Url_Input", Url_Input, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/components/Url_Input.tsx", "client:component-export": "default" })} ${renderComponent($$result, "AdvancedStats", $$AdvancedStats, {})} ${renderComponent($$result, "CTA", $$CTA, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/penan/Documents/Personal/Frontend Mentors/url-shortener-page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };