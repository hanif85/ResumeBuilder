import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeroHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  & > * {
    flex-basis: 50%;
  }

  h3 {
    margin-bottom: -10px;
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .cta-holder {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h3 {
      text-align: start;
    }

    h1 {
      font-size: 2.5rem;
      text-align: start;
    }

    .cta-holder {
      justify-content: flex-start;
    }
  }
`;

const CTA = styled.span`
  padding: 0.8rem 2rem;
  background: linear-gradient(45deg, #6c63ff, #4a47ed);
  color: white;
  border-radius: 50px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
    animation: glowing 1.5s infinite;
  }

  @keyframes glowing {
    0% {
      background-color: #6c63ff;
      box-shadow: 0px 0px 10px 0px #6c63ff;
    }
    50% {
      background-color: #4a47ed;
      box-shadow: 0px 0px 20px 5px #4a47ed;
    }
    100% {
      background-color: #6c63ff;
      box-shadow: 0px 0px 10px 0px #6c63ff;
    }
  }
`;

const Hero: NextPage = () => {
  return (
    <HeroHolder>
      <div>
        <h3>Free & Open source</h3>
        <h1>
          Single Page <br />
          Resume Builder
        </h1>
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Get Started</CTA>
            </a>
          </Link>
        </div>
      </div>
      <Image src="/hiring.svg" alt="hiring" width="300px" height="300px" priority />
    </HeroHolder>
  );
};

export default Hero;
