# KDev -> Web 3.0, FinTech, MetaVerse, Cryptocurrency
As the founder of my first startup company, KDev represents a pioneering venture into the realm of digital innovation and technological advancement. 
With a vision fueled by a deep-seated commitment to addressing cybersecurity and privacy concerns, KDev stands as a beacon of modernity in the landscape of Web 3.0. 
Led by Krystal Zhang, our team has meticulously crafted a web application that embodies our ethos of security, reliability, and innovation.
Our debut offering, KDev's web application, is a testament to our dedication to providing clients with a secure and streamlined online experience. 
By leveraging advanced front-end development techniques and tools, we have meticulously constructed a user interface that not only captivates 
aesthetically but also excels in functionality and performance. Utilizing state-of-the-art technologies such as React.js, Vue.js, and Angular, 
we have ensured a seamless and responsive user experience across diverse devices and platforms. Dynamic and interactive elements engage users, 
enriching their browsing journey and fostering lasting connections. Moreover, our unwavering commitment to security and privacy is underscored by the 
integration of blockchain-powered public distributed ledgers. By harnessing blockchain technology, we not only enhance transparency and 
decentralization but also fortify the integrity of user data and transactions. At KDev, we embrace the spirit of continuous innovation and evolution. 
Our web application undergoes regular updates and enhancements, driven by a relentless pursuit of excellence and a passion for pushing the boundaries of technological 
possibility. 

## Copyright and Commercial Use Disclaimer
⏬

### *Please carefully read [LICENSE.md](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/LICENSE) about the Open Source restrictions and the personal use policy of this project under [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html), any commericial uses on this project by other than the owner [@KrystalZhang612](https://github.com/KrystalZhang612) or the authorized users and organizations, will be subjected to copyright violation with subsequent legal potential concerns.*

## KDev Webapp Overview: 
<p align = "center"> 
  <img src = "https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/testing-result-kdev/kdev-webapp-overview-1.png">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/testing-result-kdev/kdev-webapp-overview-2.png">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/testing-result-kdev/kdev-webapp-overview-3.png">&nbsp; 
</p>


# Build
[Method to Run & Test the Project Locally](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/README.md#method-to-run--test-the-project-locally)<br/> 
[Debugging&Troubleshooting](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/README.md#debuggingtroubleshooting)<br/> 
[Tags and Topics](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/README.md#tags-and-topics)

# Contribution
[Author](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/README.md#author)

# Compatiability 

| Version | Supported          |
| ------- | ------------------ |
| node v16.19.1   | :white_check_mark: |
| npm v8.19.3   | :white_check_mark:             |
| code 1.86.0   | :white_check_mark: |
| react/react-dom@18.2.0   | :white_check_mark:                |

# Method to Run & Test the Project Locally
### Download the entire project folder and open it with any IDE.
### Start the webserver to test KDev Web3.0 Webapp by running: `npm run dev` at http://127.0.0.1:5173/
### Terminate the server by CONTROL+C
### Have fun browsing the responsive KDev UI! 

# Debugging&Troubleshooting 
Need to define `socialMedia` in [Footer.jsx](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/src/components/Footer.jsx) to let the social media icons display & clear console errors:<br />
Import the social media svg or png icons from [src/assets/index.js](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/src/assets/index.js):
```javascript
import linkedin from "./linkedin.svg";
import github from "./github.png";
```
Export:
```javascript
export{
linkedin,
github,
...
}
```
Import icon assets into Footer:
```javascript
import { linkedin } from "../assets";
import { github } from "../assets";
```
Define `socialMedia` at the bottom right:
```javascript
const socialMedia = [
  { id: 1, icon: linkedin, link: "https://www.linkedin.com/in/krystalzhang612/" },
  { id: 2, icon: github, link: "https://github.com/KrystalZhang612" }
];
```
# Tags and Topics
front-end, responsive, javascript, vscode, react-native-js, npm, npx, html5, css3, portolio, ui, ux-design

# Author
Krystal Zhang https://github.com/KrystalZhang612<hr> 

*This file was generated by [KDev-webapp-readme](https://github.com/KrystalZhang612/KDev-Cryptocurrency-Web3.0-UI/blob/main/README.md), on Feburary 7th, 2024*

