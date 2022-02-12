import { IconSVG } from './IconSVG.styled';

const onpilot = {
  github: 'https://github.com/onpilot',
  linkedin: 'https://www.linkedin.com/in/onpilot',
  twitter: 'https://twitter.com/onpilot_',
};

const Link = (props) => {
  const link = props.link;
  return (
    <a href={onpilot[link]} target="_blank" rel="noreferrer">
      <IconSVG className={link}></IconSVG>
    </a>
  );
};

export const SocialLinks = () => {
  return (
    <>
      <Link link="github"></Link>
      <Link link="linkedin"></Link>
      <Link link="twitter"></Link>
    </>
  );
};
