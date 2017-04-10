import React from 'react';
import Menu from './menu'
import { ShareButtons } from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  GooglePlusShareButton
} = ShareButtons;


export default function SocialShareMenu ({ product }) {
  const socialMediaTitle = product.name + " " + product.category;
  const socialMediaImg = `https://macbox.herokuapp.com` + product.imgUrl;
  const socialMediaUrl = `https://macbox.herokuapp.com/products/` + product.id;

  return (
    <Menu
      type="circle"
      margin={120}
    >
      <div className="button">
        <img style={{marginLeft: '7.25px', marginTop: '7.5px'}} src="/img/favorite-5-16.png" />
      </div>

      <FacebookShareButton
        picture={socialMediaImg}
        title={socialMediaTitle}
        description={product.description}
        url={socialMediaUrl}
      >
        <img className="share-img" src="/img/facebook-24.png" />
      </FacebookShareButton>

      <div className="button" />

      <div className="button">
        <a id="email-link" href={`mailto:?body=Shop%20my%20find!%20Visit%3A%20${socialMediaUrl}%0A%0A${socialMediaTitle}%0A%0A${product.description}`}>
          <img className="share-img" src="/img/email-3-24.png" />
        </a>
      </div>

      <PinterestShareButton
        media={socialMediaImg}
        description={socialMediaTitle + " - " + product.description}
        url={socialMediaUrl}
      >
        <img className="share-img" src="/img/pinterest-6-24.png" />
      </PinterestShareButton>

      <GooglePlusShareButton
        url={socialMediaUrl}
      >
        <img className="share-img" src="/img/google-plus-24.png" />
      </GooglePlusShareButton>

      <TwitterShareButton
        title={socialMediaTitle}
        via="Macbox"
        url={socialMediaUrl}
      >
        <img className="share-img" src="/img/twitter-24.png" />
      </TwitterShareButton>
    </Menu>
  )
}




