<div id="top"></div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<!-- [![CI](https://github.com/rafae2k/uber-clone/actions/workflows/main.yml/badge.svg)](https://github.com/rafae2k/uber-clone/actions/workflows/main.yml)
[![CodeQL](https://github.com/rafae2k/uber-clone/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/rafae2k/uber-clone/actions/workflows/codeql-analysis.yml) -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rafae2k/uber-clone">
    <img src="./docs/assets/uber-logo.jpeg" alt="Uber clone logo" height="100">
</a>
</br>
</br>

  <p align="center">
    A first experimental Mobile project cloning Uber's Mobile App using React Native, Expo and Google Places API.
    <br />
    <br />
    <a href="https://snack.expo.dev/@rafae2k/rafo---uber-clone">View Live</a>
    ·
    <a href="https://github.com/rafae2k/uber-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/rafae2k/uber-clone/issues">Request Feature</a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In this project I built my first multiplataform mobile app using React Native and Expo.

### Features

- You can search for places using the Google Places API and see the place details.

- You can also see the route drawed in the map between the selected origin and destination.

- You are able to see the approximate time of arrival and estimated cost of the trip.

<br>

<img src="./docs/assets/app.gif" alt="Uber clone app" height="500" style="margin: auto" />

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This App was build with React architecture, fast and reliable.

- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Google Maps API](https://developers.google.com/maps)
- [Tailwind](https://tailwindcss.com/)
- [Expo](https://www.expo.dev)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Expo Snack - Test the app on your on web or on your phone.

[Click Here to run the app on Expo Snack](https://snack.expo.dev/@rafae2k/rafo---uber-clone)

- You can run on Web emulator of Expo Snack only on iOS or Android (Web doesn't work yet for this project) or on your device reading the QR code on Expo Go App.

### Prerequisites

This project use `yarn` as package manager, you can still use others managers as `npm`.

To enable `yarn` follow this steps.

```sh
corepack enable
```

You also need to install the `expo-cli`

```sh
yarn global add expo-cli
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rafae2k/uber-clone
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. start expo
   ```sh
   expo start
   ```
4. Running on your phone

   press `c` on terminal and read the QR code with Expo GO app installed

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create Navigation Tabs with React Navigation
- [x] Implement the search with autocomplete feature using the Google Places API
- [x] Implement redux state
- [x] Use device location to get the current location
- [ ] Fix list of places space while keyboard open on `ChooseRide` component

See the [open issues](https://github.com/rafae2k/uber-clone/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Twitter [@hm_rafo](https://twitter.com/hm_rafo)
  <br>
- Email <a href="mailto:hello@rafo.work">hello@rafo.work</a>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/rafae2k/uber-clone.svg?style=for-the-badge
[forks-url]: https://github.com/rafae2k/uber-clone/fork
[stars-shield]: https://img.shields.io/github/stars/rafae2k/uber-clone.svg?style=for-the-badge
[stars-url]: https://github.com/rafae2k/uber-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/rafae2k/uber-clone.svg?style=for-the-badge
[issues-url]: https://github.com/rafae2k/uber-clone/issues
[license-shield]: https://img.shields.io/github/license/rafae2k/uber-clone.svg?style=for-the-badge
[license-url]: https://github.com/rafae2k/uber-clone/blob/main/LICENSE.txt
[product-screenshot]: docs/assets/app.gif
