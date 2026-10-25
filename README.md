# BMW Website

A responsive, single-page BMW-inspired showroom built with HTML, CSS, and vanilla JavaScript. The site presents a model catalogue and brand-focused content through an interactive, image-led interface.

> This is an independent front-end project for demonstration and learning purposes. It is not an official BMW website and is not affiliated with or endorsed by BMW AG.

## Features

- Responsive navigation with a mobile menu
- Model catalogue with category filters, carousel controls, and pagination dots
- Animated statistics and scroll-triggered section reveals
- Testimonial carousel and expandable FAQ
- Contact form connected to FormSubmit
- Back-to-top control and responsive layouts for mobile and desktop

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) for the Roboto typeface
- [Font Awesome](https://fontawesome.com/) for icons
- [FormSubmit](https://formsubmit.co/) for contact form delivery

The font, icon library, and form service are loaded from external services. An internet connection is required for those features.

## Getting started

This is a static website. It has no package manager, build step, or framework dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/bmw-website.git
   cd bmw-website
   ```

2. Open `index.html` in a browser. For local development, you can also serve the folder with an editor extension such as Live Server.

## Project structure

```text
bmw-website/
├── imgs/       # Website images
├── index.html  # Page content and sections
├── index.js    # Navigation and interactive behavior
├── style.css   # Layout, styling, and responsive rules
└── README.md
```

Keep image paths and filename capitalization in sync with the files in `imgs/`. GitHub Pages uses case-sensitive paths.

## Contact form setup

The form in `index.html` posts submissions to a FormSubmit endpoint. Before publishing, replace its configured recipient with an address you control and follow FormSubmit's activation steps. Form submissions are handled by that third-party service; review its terms and privacy information before using the form with real visitors.

## Deploy with GitHub Pages

Because the site is static and `index.html` is at the repository root, it can be hosted directly with GitHub Pages:

1. Push the project to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and the `/ (root)` folder, then save.

GitHub will provide the published site URL in the Pages settings once deployment completes.

## Content and assets

Model descriptions, displayed prices, statistics, and testimonials should be verified before presenting the site as a real dealership or as a source of current vehicle information. Review the contact details and make sure you have the right to publish every image and any personal information included in the project.

## License

No license file is currently included. Add a license if you want to define how others may use, modify, or redistribute this project.
