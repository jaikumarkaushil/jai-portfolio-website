<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** That would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jaikumarkaushil/personal-portfolio">
    <img src="frontend_react/src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio</h3>

  <p align="center">
    A finely crafted portfolio that highlights my expertise and accomplishments. A visually stunning and efficient portfolio, completed with seamless animations, developed using React JS, Sanity, and Framer-motion.
    <br />
    <a href="https://jai-kaushil.tech/" target="_blank"><strong>Portfolio Website</strong></a>
    <br />
    <a href="https://github.com/jaikumarkaushil/jai-portfolio-website"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jai-kaushil.tech/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/jaikumarkaushil/jai-portfolio-website/issues">Report Bug</a>
    ·
    <a href="https://github.com/jaikumarkaushil/jai-portfolio-website/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Page][product-screenshot-1]](https://jai-kaushil.tech)
[![Skills Page][product-screenshot-2]](https://jai-kaushil.tech/#skills)
[![Contact Page][product-screenshot-3]](https://jai-kaushil.tech/#contact)

The website is completely built using React JS and Sanity knowledge. No need to be proficient to understand or change the content, basic understanding is enough to fill the gaps.

It is completely responsive works fine on most of the devices and is highly interactive. Data can be changed using a Content Management Service(CMS), [Sanity](https://www.sanity.io/). Because of this data can be changed anytime even after deployment.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Sanity](https://www.sanity.io/)
- [SCSS](https://sass-lang.com/)
- [Netlify](https://www.netlify.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Getting started, to avoid hassle at a later part, go ahead and create an account in Sanity and follow the displayed commands!

### Prerequisites

- Create a folder named \*\*backend_sanity" and navigate the terminal to it.
  ```
  cd backend_sanity
  ```
- Install the sanity client
  ```sh
  npm install -g @sanity/cli
  ```
- Log in using your preferred way!
- Enter the project name, press Y and use the default settings.
- Now use the command
  ```sh
  sanity start
  ```
- Now run the following in the terminal
  ```
  sanity manage
  ```
- Your project dashboard page pops up in your browser
  > These are the most important steps
- Note your project ID for future reference
- Click on **Token** -> **Add new Token**
- Give it a name and copy the token as it can be viewed only once.
- Now add your react browser address i.e. your localhost in **CORS ORIGIN**
- You are mostly done with setting up the backend.

### Installation

1. After completing the prerequisites, go ahead with the following steps.
2. Clone the repo
   ```sh
   git clone https://github.com/jaikumarkaushil/jai-portfolio-website.git
   ```
3. Install NPM packages in the folders [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```sh
   npm install
   ```
4. Replace the [Backend Sanity](/portfolio_backend) file contents with your sanity file contents (entire folder).
5. Run the command and a page with your sanity documents appears.
   > Make sure you are in the right folder path in the terminal.
   ```
   sanity start
   ```
6. Add your details to the necessary documents, refer [Sanity](https://www.sanity.io/docs) for better understanding.
7. Create a .env file in the [Frontend React](/frontend_react) directory with the following
   ```
   REACT_APP_SANITY_PROJECT_ID= "your project id"
   REACT_APP_SANITY_TOKEN= "your api token"
   ```
8. Run the final command in the [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```
   npm start
   ```
9. Your website is up and running. Make the necessary changes and deploy it.
10. To add or change necessary documents in **Sanity Studio** refer the [Sanity Docs](https://sanity.io/docs), it is very intuitive and easy.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jai Kumar Kaushil - [@jaikumarkaushil (Instagram) ](https://instagram.com/jaikumarkaushill) - jaikumarkaushil@gmail.com

Project Link: [Link](https://jai-kaushil.tech/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jaikumarkaushil/jai-portfolio-website.svg?style=for-the-badge
[contributors-url]: https://github.com/jaikumarkaushil/jai-portfolio-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jaikumarkaushil/jai-portfolio-website.svg?style=for-the-badge
[forks-url]: https://github.com/jaikumarkaushil/jai-portfolio-website/network/members
[stars-shield]: https://img.shields.io/github/stars/jaikumarkaushil/jai-portfolio-website.svg?style=for-the-badge
[stars-url]: https://github.com/jaikumarkaushil/jai-portfolio-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/jaikumarkaushil/jai-portfolio-website.svg?style=for-the-badge
[issues-url]: https://github.com/jaikumarkaushil/jai-portfolio-website/issues
[license-shield]: https://img.shields.io/github/license/jaikumarkaushil/jai-portfolio-website.svg?style=for-the-badge
[license-url]: https://github.com/jaikumarkaushil/jai-portfolio-website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jai-kumar-kaushil
[product-screenshot-1]: images/home-page.png
[product-screenshot-2]: images/contact-page.png
[product-screenshot-3]: images/skills-page.png
