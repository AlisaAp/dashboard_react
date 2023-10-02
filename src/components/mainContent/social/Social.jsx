import React from 'react';
import './style.css';
import { Nav, Panel } from "rsuite";
import TelegramIcon from "../../icons/social/TelegramIcon";
import YoutubeIcon from "../../icons/social/YoutubeIcon";
import LinkedinIcon from "../../icons/social/LinkedinIcon";
import TwitterIcon from "../../icons/social/TwitterIcon";
import GithubIcon from "../../icons/social/GithubIcon";

function Social() {
  return (

    <Panel bordered shaded className="content-container">
      <Nav className="social-container">
        <span>Не забудь подписаться на наши соц. сети и следить за новостями!</span>
        <Nav.Item
          icon={(
            <TelegramIcon />
					)}
          href="https://web.telegram.org"
          target="_blank"
        />
        <Nav.Item
          icon={(
            <YoutubeIcon />
					)}
          href="https://web.telegram.org"
          target="_blank"
        />
        <Nav.Item
          icon={(
            <LinkedinIcon />
					)}
          href="https://web.telegram.org"
          target="_blank"
        />
        <Nav.Item
          icon={(
            <TwitterIcon />
					)}
          href="https://web.telegram.org"
          target="_blank"
        />
        <Nav.Item
          icon={(
            <GithubIcon />
					)}
          href="https://web.telegram.org"
          target="_blank"
        />
      </Nav>
    </Panel>

  );
}

export default Social;
