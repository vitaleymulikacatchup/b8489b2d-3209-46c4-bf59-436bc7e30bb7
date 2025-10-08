"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const theme: SiteTheme = { styleVariant: "brainRot", colorTemplate: 2, textAnimation: "slide" };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/design-a-simple-high-contrast-logo-for-p-1759931605789-fa61d0b6.jpg"
          logoAlt="Peak Logo"
          brandName="Peak"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <CyclopsHero
          title="Welcome to Peak"
          subtitle="A futuristic Apple-inspired memes site"
          primaryButtonText="Explore"
          secondaryButtonText="Join Us"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/minimal-vector-mascot-for-peak-waist-up--1759931604454-623f73da.jpg"
          characterImageAlt="Minimalist Peak mascot"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout
          title="About Peak"
          descriptions={["Peak is your new go-to for futuristic memes.", "Join us in exploring the latest and greatest in meme culture."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understand the fundamentals of our token structure."
          cardItems={[{ id: 1, title: "Max Supply", description: "1,000,000 tokens" }, { id: 2, title: "Liquidity", description: "75% locked for 12 months" }, { id: 3, title: "Tax", description: "2% per transaction" }]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/design-a-simple-high-contrast-logo-for-p-1759931605789-fa61d0b6.jpg"
          logoWidth={250}
          logoHeight={100}
          columns={[
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }, { label: "Careers", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Contact", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 Peak"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}