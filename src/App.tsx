import type * as React from 'react'
import './App.css'

const logo =
  'https://static.wixstatic.com/media/3c6b29_a6715dacb5f142dbb719d4d6a25f70a7~mv2.png/v1/fill/w_511,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202021-11-29%209_52_14%20PM.png'

const images = {
  homeHero:
    'https://static.wixstatic.com/media/nsplsh_30c1e0b99f8c46198c5e90b684d4a937~mv2.jpg/v1/fill/w_1600,h_820,al_c,q_90,enc_avif,quality_auto/nsplsh_30c1e0b99f8c46198c5e90b684d4a937~mv2.jpg',
  network:
    'https://static.wixstatic.com/media/a656b0ef957a443c8f927793b82cdfa0.jpg/v1/fill/w_900,h_620,al_c,q_90,enc_avif,quality_auto/a656b0ef957a443c8f927793b82cdfa0.jpg',
  lecture:
    'https://static.wixstatic.com/media/1aa76b7f38e743de86ad2fc368d21662.jpg/v1/fill/w_900,h_620,al_c,q_90,enc_avif,quality_auto/1aa76b7f38e743de86ad2fc368d21662.jpg',
  hands:
    'https://static.wixstatic.com/media/31e2e9a7bf5b465887db7407f729ddb8.jpg/v1/fill/w_900,h_620,al_c,q_90,enc_avif,quality_auto/31e2e9a7bf5b465887db7407f729ddb8.jpg',
  usersHero:
    'https://static.wixstatic.com/media/2ad5c3_bddef1e59313434380f58c7d2aae1744~mv2.png/v1/fill/w_1400,h_900,fp_0.50_0.50,q_95,enc_avif,quality_auto/2ad5c3_bddef1e59313434380f58c7d2aae1744~mv2.png',
  developersHero:
    'https://static.wixstatic.com/media/5ca8a97313144b66bd93da08b0f01151.jpg/v1/fill/w_1600,h_900,fp_0.50_0.50,q_90,enc_avif,quality_auto/5ca8a97313144b66bd93da08b0f01151.jpg',
  donorsHero:
    'https://static.wixstatic.com/media/87f4aa163a794af7a9a45e9e409d4fd3.jpg/v1/fill/w_1600,h_900,fp_0.50_0.50,q_90,enc_avif,quality_auto/87f4aa163a794af7a9a45e9e409d4fd3.jpg',
  countriesHero:
    'https://static.wixstatic.com/media/nsplsh_a878e42d761f43fda2af0f6055c04e85~mv2.jpg/v1/fill/w_1600,h_900,fp_0.50_0.50,q_90,enc_avif,quality_auto/nsplsh_a878e42d761f43fda2af0f6055c04e85~mv2.jpg',
  actionHero:
    'https://static.wixstatic.com/media/11062b_be86b7b07dc34c49b9a69664c83206a6~mv2.jpg/v1/fill/w_1600,h_820,al_c,q_90,enc_avif,quality_auto/11062b_be86b7b07dc34c49b9a69664c83206a6~mv2.jpg',
  teamHero:
    'https://static.wixstatic.com/media/3c6b29_ffa706f0e42c43d39fe4f43aa8ef9fff~mv2.jpg/v1/fill/w_1200,h_780,al_c,q_90,enc_avif,quality_auto/3c6b29_ffa706f0e42c43d39fe4f43aa8ef9fff~mv2.jpg',
  taxHero:
    'https://static.wixstatic.com/media/3c6b29_ac6ff8172ec8403b95f689557c7cdc37~mv2.jpg/v1/fill/w_1400,h_820,al_c,q_90,enc_avif,quality_auto/3c6b29_ac6ff8172ec8403b95f689557c7cdc37~mv2.jpg',
  book:
    'https://static.wixstatic.com/media/3c6b29_ac6ff8172ec8403b95f689557c7cdc37~mv2.jpg/v1/fill/w_1000,h_620,al_c,q_90,enc_avif,quality_auto/3c6b29_ac6ff8172ec8403b95f689557c7cdc37~mv2.jpg',
  blogUbi:
    'https://static.wixstatic.com/media/2ad5c3_bddef1e59313434380f58c7d2aae1744~mv2.png/v1/fill/w_704,h_398,fp_0.50_0.50,q_95,enc_avif,quality_auto/2ad5c3_bddef1e59313434380f58c7d2aae1744~mv2.png',
  blogHoliday:
    'https://static.wixstatic.com/media/5ca8a97313144b66bd93da08b0f01151.jpg/v1/fill/w_704,h_398,fp_0.50_0.50,q_90,enc_avif,quality_auto/5ca8a97313144b66bd93da08b0f01151.jpg',
  blogCriteria:
    'https://static.wixstatic.com/media/87f4aa163a794af7a9a45e9e409d4fd3.jpg/v1/fill/w_704,h_398,fp_0.50_0.50,q_90,enc_avif,quality_auto/87f4aa163a794af7a9a45e9e409d4fd3.jpg',
}

type NavLink = { label: string; href: string }
type NavGroup = NavLink & { children?: NavLink[] }

const nav: NavGroup[] = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'For Crypto Users', href: '/what-s-in-it-for-crypto-users' },
      {
        label: 'For Crypto Developers & Project Owners',
        href: '/what-s-in-it-of-crypto-developers-project-owners',
      },
      {
        label: 'For Donors, Sponsors and Backers',
        href: '/what-s-in-it-for-donors-sponsors-and-backers',
      },
      {
        label: 'For Countries and Law Makers',
        href: '/what-s-in-it-for-participating-countries-their-regulators-and-central-banks',
      },
    ],
  },
  {
    label: 'Take Action!',
    href: '/get-involved',
    children: [
      { label: 'Donate Crypto', href: '/make-a-donation' },
      { label: 'Buy $TAX Token', href: '/blank-page' },
      { label: 'Join Our Team', href: '/volunteer-your-time' },
    ],
  },
  {
    label: 'Learn...',
    href: '/about',
    children: [
      { label: 'About Us and Our Vision', href: '/about' },
      { label: 'White Paper', href: '/white-paper' },
      { label: 'Frequently Asked Questions', href: '/frequently-asked-questions' },
    ],
  },
  { label: 'Blog', href: '/blog' },
]

const footerColumns = [
  ['Home', 'For Users', 'For Developers', 'For Sponsors', 'For Countries'],
  ['Take Action', 'Donate Crypto', 'Buy TAX Token', 'Donate Fiat', 'Join Our Team'],
  ['Learn', 'About Our Vision', 'White Paper', 'FAQs'],
  ['Blog', 'Log In', 'Twitter', 'Discord', 'Telegram', 'Email'],
]

const routes: Record<string, () => React.ReactElement> = {
  '/': HomePage,
  '/what-s-in-it-for-crypto-users': UsersPage,
  '/what-s-in-it-of-crypto-developers-project-owners': DevelopersPage,
  '/what-s-in-it-for-donors-sponsors-and-backers': DonorsPage,
  '/what-s-in-it-for-participating-countries-their-regulators-and-central-banks': CountriesPage,
  '/get-involved': TakeActionPage,
  '/make-a-donation': DonateCryptoPage,
  '/donate-fiat': DonateFiatPage,
  '/blank-page': TaxTokenPage,
  '/volunteer-your-time': TeamPage,
  '/about': AboutPage,
  '/white-paper': WhitePaperPage,
  '/frequently-asked-questions': FaqPage,
  '/blog': BlogPage,
  '/login': LoginPage,
}

function App() {
  const Page = routes[window.location.pathname] ?? HomePage

  return (
    <div className="site">
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="The ProCent Foundation home">
        <img src={logo} alt="The ProCent Foundation" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <div className="nav-item" key={item.label}>
            <a href={item.href}>{item.label}</a>
            {item.children ? (
              <div className="submenu">
                {item.children.map((child) => (
                  <a href={child.href} key={child.href}>
                    {child.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <a className="login" href="/login">
          Log In
        </a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column[0]}>
            {column.map((item) => (
              <a href={footerHref(item)} key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}
        <form className="subscribe">
          <label htmlFor="email">Subscribe Form</label>
          <div>
            <input id="email" type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </div>
          <p>Thanks for submitting!</p>
        </form>
      </div>
      <div className="socials">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Join the discussion
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://discord.gg" target="_blank" rel="noreferrer">
          Discord
        </a>
        <a href="mailto:hello@procent.foundation">Email</a>
      </div>
      <p className="copyright">©2021 by The Procent Foundation. All rights reserved.</p>
    </footer>
  )
}

function Hero({
  image,
  title,
  eyebrow,
  children,
}: {
  image?: string
  title: string
  eyebrow?: string
  children?: React.ReactNode
}) {
  return (
    <section className={image ? 'hero image-hero' : 'hero simple-hero'}>
      {image ? <img src={image} alt="" /> : null}
      <div className="hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}

function Section({
  title,
  kicker,
  children,
  image,
  reverse,
}: {
  title: string
  kicker?: string
  children: React.ReactNode
  image?: string
  reverse?: boolean
}) {
  return (
    <section className={`section ${image ? 'media-section' : ''} ${reverse ? 'reverse' : ''}`}>
      {image ? <img src={image} alt="" /> : null}
      <div>
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function HomePage() {
  return (
    <>
      <Hero image={images.homeHero} title="The ProCent Foundation" eyebrow="Working Towards a Brighter Future. Stay in touch.">
        <p>
          The ProCent Foundation wants to spread our message of hope and compassion. We believe
          that a simple 1% transaction tax can make a huge difference to our global community.
        </p>
      </Hero>
      <Section title="What We Do" kicker="We bring radical change to the world of Crypto">
        <FeatureList
          items={[
            'Voluntary Crypto taxation',
            'Global Universal Basic Income (UBI)',
            'Peer-to-peer commerce',
            'Trust-based Digital Identity',
            'Exponential user adoption of Cryptos',
          ]}
        />
        <p className="statement">We call it Change for Good.</p>
      </Section>
      <div className="three-up">
        <MiniFeature image={images.network} title="Community Development, Education & Outreach" subtitle="Rallying The Community" />
        <MiniFeature image={images.lecture} title="Creating and Operating the Basic Building Blocks" subtitle="One Step at a Time" />
        <MiniFeature image={images.hands} title="Visioning and Global Lobbying" subtitle="Reinforcing our Commitment" />
      </div>
      <Section title="Media Center" kicker="Latest Stories">
        <div className="story-grid">
          <Story title="In-depth Interview with the Founder of the ProCent Foundation" date="June 9, 2019" image={images.blogUbi} />
          <Story title="From Idea to Reality: The Evolution of ProCent Foundation" date="June 9, 2019" image={images.blogHoliday} />
        </div>
      </Section>
      <Section title="Ways to Help" kicker="Take Action Now">
        <div className="help-grid">
          {['Volunteer Your Time', 'Partner with Us', 'Make a Donation'].map((item) => (
            <a href="/get-involved" key={item}>
              {item}
            </a>
          ))}
        </div>
      </Section>
    </>
  )
}

function MiniFeature({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <article>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p className="kicker">{subtitle}</p>
      <p>
        Learn more about our work and our commitment to turning collective action into meaningful,
        measurable progress.
      </p>
      <a className="text-link" href="/about">
        Get in Touch
      </a>
    </article>
  )
}

function Story({ title, date, image }: { title: string; date: string; image: string }) {
  return (
    <article className="story">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{date}</p>
      <a href="/blog">Get in Touch</a>
    </article>
  )
}

function UsersPage() {
  return (
    <>
      <Hero image={images.usersHero} title="Individual Humans: Sellers, Buyers, Crypto Investors, and UBI Recipients" eyebrow="June 9, 2019">
        <p>
          Use a participating, tax-paying Crypto, and receive a daily UBI in return. That's how
          simple it is.
        </p>
      </Hero>
      <Section title="Empower Yourself With Your Own Money">
        <div className="two-column-list">
          <TextBlock title="Money is trust. Trust is Money" body="A UBI currency is like no other currency you've known. You mint your own money and accept money from people you trust." />
          <TextBlock title="Bank the unbanked." body="With only an internet connection, we can help people access UBI and economic freedom." />
          <TextBlock title="True freedom is freedom from banks." body="UBI is not minted by central banks. Only in a permissionless economy are you fully free." />
          <TextBlock title="Fast and efficient money" body="Near-instant transactions with minimal fees can replace expensive card networks and slow international transfers." />
        </div>
      </Section>
      <Section title="Benefits For Us All" image={images.hands}>
        <FeatureList
          items={[
            'End users get to help systematically reduce hunger and the wealth gap.',
            'Retailers gain more buyers and lower overhead costs.',
            'Investors participate in a financial model that works to improve the world.',
          ]}
        />
      </Section>
      <Section title="Too many reasons for UBI, can't list them all..">
        <div className="two-column-list compact">
          {[
            'Ending poverty',
            'A better version of minimum income',
            'The power to say no',
            'Redistributing wealth',
            'Fighting technological unemployment',
            'Supporting unpaid care workers',
            'Reduced crime rates',
            'Future-proofs the economy',
          ].map((title) => (
            <TextBlock key={title} title={title} body="UBI creates more room for people to live, work, care, learn and participate in a freer economy." />
          ))}
        </div>
      </Section>
      <NextSteps title="Love it! What Can I Do Next?" items={['Donate to the cause', 'Ask your place of business to accept a Participating Crypto', 'Join our team', 'Register and start receiving UBI', 'Download our App', 'Create an ad']} />
    </>
  )
}

function DevelopersPage() {
  return (
    <>
      <Hero image={images.developersHero} title="Crypto Developers and Project Managers">
        <p>
          You are our main risk takers and our real sponsors. Participation starts with developers
          opting in by forwarding a 1% fee from transactions to transparent collection.
        </p>
      </Hero>
      <Section title="But wait, there is more...">
        <div className="two-column-list">
          {[
            ['Charitable made easy', 'A few lines in your smart contract can let your crypto be used for good.'],
            ['You can focus on your project', 'We handle monitoring and reporting while you build utility.'],
            ['Confidence that collected taxes go to the best possible purpose', 'Distribution is efficient, transparent and auditable.'],
            ['Access to funds', 'Backers and supporters can discover participating projects.'],
            ['Be a part of the movement', 'More adoption creates more UBI, more legitimacy, and more adoption again.'],
            ['Get ahead of the regulators', 'A working voluntary tax system gives regulators something pragmatic to endorse.'],
          ].map(([title, body]) => (
            <TextBlock key={title} title={title} body={body} />
          ))}
        </div>
      </Section>
      <NextSteps title="Love it! How do we get started?" items={['Check out our Developer Resources', 'Get in touch with us', 'Join our friendly community']} />
    </>
  )
}

function DonorsPage() {
  return (
    <>
      <Hero image={images.donorsHero} title="A Huge Thank You!" eyebrow="To all our Donors, Sponsors, Investors and Backers">
        <p>
          Donations support infrastructure, conferences, outreach, lobbying, and the facilitation
          of UBI by enabling local support groups.
        </p>
      </Hero>
      <Section title="What else?">
        <div className="two-column-list">
          <TextBlock title="Tax receipt" body="Donations over USD $100 will qualify for tax refunds. Please email us so we can thank you and send receipts." />
          <TextBlock title="CSR" body="Participating actively or sponsoring a better world is a powerful Corporate Social Responsibility story." />
          <TextBlock title="Pick your partnership format" body="We are open to donations, sponsorships, purchasing TAX, volunteering, and creative partnerships." />
        </div>
      </Section>
    </>
  )
}

function CountriesPage() {
  return (
    <>
      <Hero image={images.countriesHero} title="What's in it for Participating Countries, their Law Makers, Regulators, Central Banks and Citizens" eyebrow="June 9, 2019">
        <p>
          A resource section for countries and regulators interested in a global, transparent,
          crypto-native taxation model.
        </p>
      </Hero>
      <Section title="But wait, there is more...">
        <div className="two-column-list">
          <TextBlock title="Grow our economy" body="Participating countries can benefit from a larger digital taxable base and new economic activity." />
          <TextBlock title="Increased quality of life" body="A daily UBI can support citizens while reducing administrative complexity." />
          <TextBlock title="Global standards" body="A shared framework gives regulators a pragmatic way to engage with crypto transactions." />
        </div>
      </Section>
    </>
  )
}

function TakeActionPage() {
  return (
    <>
      <Hero image={images.actionHero} title="Take Action" eyebrow="Get Involved. Make a Difference" />
      <Section title="Use a Participating Crypto" kicker="Make Your Everyday Transactions Work For Good">
        <p>Coming Soon. We are busy supporting projects developing new cryptos, soon to be released.</p>
      </Section>
      <div className="action-grid">
        <ActionCard title="Develop a Crypto" body="Build your project with us in mind. Join our developer community or get in touch with your questions." />
        <ActionCard title="Volunteer Your Time" body="The community actively getting involved is one of the simplest ways to help our cause." href="/volunteer-your-time" />
        <ActionCard title="Register Your Wallets" body="Transactions between your own wallets are tax exempt through our central registry." />
        <ActionCard title="Partner with us" body="We are looking for exchanges, swaps, DeFi apps, fiat off-ramps, governments and ecosystem partners." />
        <ActionCard title="Donate Crypto" body="Donate directly or buy $TAX, our fundraising token." href="/make-a-donation" />
        <ActionCard title="Buy Our $TAX Token" body="Our fundraising token comes with benefits for long-term backers." href="/blank-page" />
      </div>
    </>
  )
}

function DonateCryptoPage() {
  const wallets = [
    ['BTC / Bitcoin', '14YLYyeQrfe5JCPYXTFq4nJ1SbundvEjHq'],
    ['ETH / Etherium', '0xf570da4bEBB1cC320246a404d245dA086872d683'],
    ['ADA / Cardano', 'addr1q87tyn4rutca0fdxd7yu9m9zfdh866xklw374qham5k05eu5jm2xrt7h8fwu0em992w8wcvf0lgmup7tk9z8pannpfxqvtt2uc'],
    ['SOL / Solana', 'CP42WfxR6UDeUkarToE6dXBwbuB6Y9ycCzXz1P6uvcjF'],
    ['XLM / Stellar', 'GBS3DL6QZQBZV42OBRBOVKJTTYP6G6X77Q5EI75KFDCZNDKA6I7PLTZH'],
    ['XRP / Ripple', 'rPpFrkYXaLBsF3RudRjPio3TwjMcZdBZfS'],
  ]
  return (
    <>
      <Hero title="Make a Crypto Donation">
        <p>
          We rely on the generosity and involvement of people like you. Please make sure you select
          the right wallet or your funds will be lost.
        </p>
      </Hero>
      <section className="section">
        <h2>Fundraising Wallets</h2>
        <div className="wallet-table">
          {wallets.map(([name, address]) => (
            <div key={name}>
              <strong>{name}</strong>
              <code>{address}</code>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function DonateFiatPage() {
  return (
    <>
      <Hero title="Make a Fiat Donation" eyebrow="Show Your Support">
        <p>
          Want to join our efforts but not sure where to start? Make a Donation and take advantage
          of this opportunity to lend your support.
        </p>
      </Hero>
      <Section title="Pay Pal" image={images.actionHero}>
        <p>
          Our organization is still being formed. Every contribution goes towards making the
          ProCent Foundation stronger and building the infrastructure for a better tomorrow.
        </p>
        <a className="text-link" href="https://www.paypal.com" target="_blank" rel="noreferrer">
          Pay Pal
        </a>
      </Section>
    </>
  )
}

function TaxTokenPage() {
  return (
    <>
      <Hero image={images.taxHero} title="Buy Our $TAX Token" eyebrow="We make fundraising a win-win" />
      <Section title="Process to Buy">
        <ol className="numbered">
          {['Install a wallet', 'Buy some Ether', 'Send the Ether to your wallet', 'Connect your wallet to this site', 'Select the ETH/TAX pair', 'Select how many tokens you want', 'Set slippage to approx 17%', 'Confirm the trade', 'Add the TAX token to your wallet'].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Section>
      <Section title="$TAX Token Benefits and Features">
        <div className="two-column-list">
          {[
            'Buy $TAX on DEX',
            'We only sell above USD $1.00',
            'You pay a little more',
            'You get reflection',
            'We build a price floor',
            'You can sell, we buy back',
            'Early participation in new launches',
            'Foundation Governance',
          ].map((title) => (
            <TextBlock key={title} title={title} body="The token is designed as a fundraising and long-term participation mechanism for the ProCent ecosystem." />
          ))}
        </div>
      </Section>
    </>
  )
}

function TeamPage() {
  const jobs = ['Community Lead', 'UX Design', 'Country Stewards', 'Solidity Developer', 'Plutus, Marlowe, and Glow Developer', 'Audit & Analytics Practice Lead', 'Information Security', 'Marketing & Fundraising Lead', 'UBI Project Liason and Evaluator', 'DeFi App Developer', 'Frontend / Mobile App Developers', 'Project Managers', 'Backend Developer / Cloud Architect', 'Legal Counsel', 'Researcher']
  return (
    <>
      <Hero image={images.teamHero} title="Volunteer Your Time" eyebrow="Help Us Soar">
        <p>
          This is one of the simplest ways to help out our cause. We believe the best way for our
          initiatives to succeed is for the community to actively get involved.
        </p>
      </Hero>
      <Section title="Open Positions" kicker="All positions currently offered on volunteer / deferred pay basis.">
        <div className="jobs">
          {jobs.map((job) => (
            <TextBlock key={job} title={job} body="Help move the foundation forward with your skills, time and practical leadership." />
          ))}
        </div>
      </Section>
      <Section title="Come Work with Us" image={images.hands}>
        <form className="contact-form">
          {['First Name', 'Last Name', 'Email', 'Phone', "I'm applying for"].map((field) => (
            <input key={field} placeholder={field} />
          ))}
          <button type="submit">Submit</button>
        </form>
      </Section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Hero title="About Us" eyebrow="Turning A Global Lack of Crypto Governance Into Action">
        <p>
          The ProCent Foundation emerged out of a pursuit to set an example for how to properly
          govern the emerging Crypto space.
        </p>
      </Hero>
      <Section title="Moonshot" kicker="An ambitious, exploratory and ground-breaking project" image={images.book}>
        <p>
          We seek to inspire and support the community with one holistic solution for crypto
          taxation, unique human verification, poverty, global regulation, and crypto marketplaces.
        </p>
      </Section>
      <Section title="Features of our Economic System" kicker="Transaction Tax-funded UBI could be the golden ticket to a better society">
        <div className="two-column-list">
          {[
            'Registered Non-profit Charitable Foundation',
            'Efficient And Effective',
            'Fully Auditable and Transparent',
            'Global Standard',
            'Decentralized Governance',
            'A solution to Crypto Taxation',
            'A solution for global Crypto regulation',
            'An entirely new taxation paradigm',
            'No admin or annual tax returns',
            'A fully funded Universal Basic Income',
            'Environmentally Friendly',
            'A Better Society',
          ].map((title) => (
            <TextBlock key={title} title={title} body="A practical building block in a transparent, automated, global redistribution system." />
          ))}
        </div>
      </Section>
      <Section title="Our Leaders" kicker="Committed to the Cause">
        <div className="leaders">
          {['Noak Lindqvist - President', 'Tony Patel - Financial Flow Optimization', 'Olivier Giner - Business Development'].map((leader) => (
            <strong key={leader}>{leader}</strong>
          ))}
        </div>
      </Section>
    </>
  )
}

function WhitePaperPage() {
  return (
    <>
      <Hero title="Global UBI, fully funded by a voluntary Crypto Taxation" eyebrow="A Moonshot For a Better World">
        <p>Imagine a world where every financial transaction makes a contribution towards a better, more equal and socially just world.</p>
      </Hero>
      <Section title="The thesis">
        <p>
          This is not a taxation thesis. It is a Moonshot towards a better world, fully financed by
          a small tax included in every transaction, automatically.
        </p>
        <FeatureList
          items={[
            'Wealth distribution from the rich to the poor on a global scale',
            'A small tax with huge impact',
            'Voluntary participation designed to become a global standard',
            'Bring the benefits of Crypto to the world',
            'Provide every person on the globe with a crypto wallet',
          ]}
        />
      </Section>
      <Section title="TL; DR" image={images.book}>
        <p>
          The system is designed to collect a 1% tax on crypto transactions and distribute it as
          Payback, a global UBI, with daily frequency.
        </p>
      </Section>
    </>
  )
}

function FaqPage() {
  return (
    <>
      <Hero title="FAQ" eyebrow="The Answers You Need" />
      <section className="section faq">
        {[1, 2, 3, 4, 5].map((item) => (
          <details key={item} open={item === 1}>
            <summary>Question</summary>
            <p>
              Enter your answer to the question here. Make sure the writing is clear and concise,
              and helps visitors get the support they need in the most efficient way.
            </p>
          </details>
        ))}
      </section>
    </>
  )
}

function BlogPage() {
  const posts = [
    ['Analysis on Universal Basic Income and the Future of the World', 'Feb 1, 2022', '7 min read', images.blogUbi],
    ['10 ways to make a difference this holiday season', 'Nov 1, 2021', '2 min read', images.blogHoliday],
    ['Announcing our first draft criteria for UBI Project selection', 'Oct 6, 2021', '1 min read', images.blogCriteria],
    ['Why you should back our project', 'Sep 1, 2021', '2 min read', images.developersHero],
  ]
  return (
    <>
      <Hero title="Blog" eyebrow="All Posts" />
      <section className="section blog-list">
        {posts.map(([title, date, readTime, image]) => (
          <article className="blog-post" key={title}>
            <img src={image} alt="" />
            <div>
              <h2>{title}</h2>
              <p>
                It seems like everything changed during the pandemic and its aftermath, and yet in
                very important ways, what really needed to change remains ahead of us.
              </p>
              <span>@RCryptobi · {date} · {readTime}</span>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function LoginPage() {
  return (
    <>
      <Hero title="Log In" eyebrow="Member Access" />
      <Section title="Coming Soon">
        <p>
          The original Wix site includes a login entry for wallet registration and member tools.
          This replica keeps the destination in place while the application features are built.
        </p>
      </Section>
    </>
  )
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="text-block">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}

function NextSteps({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="section steps">
      <h2>{title}</h2>
      <div>
        {items.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ActionCard({ title, body, href = '/get-involved' }: { title: string; body: string; href?: string }) {
  return (
    <article className="action-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={href}>Get in Touch</a>
    </article>
  )
}

function footerHref(label: string) {
  const byLabel: Record<string, string> = {
    Home: '/',
    'For Users': '/what-s-in-it-for-crypto-users',
    'For Developers': '/what-s-in-it-of-crypto-developers-project-owners',
    'For Sponsors': '/what-s-in-it-for-donors-sponsors-and-backers',
    'For Countries': '/what-s-in-it-for-participating-countries-their-regulators-and-central-banks',
    'Take Action': '/get-involved',
    'Donate Crypto': '/make-a-donation',
    'Buy TAX Token': '/blank-page',
    'Donate Fiat': '/donate-fiat',
    'Join Our Team': '/volunteer-your-time',
    Learn: '/about',
    'About Our Vision': '/about',
    'White Paper': '/white-paper',
    FAQs: '/frequently-asked-questions',
    Blog: '/blog',
  }

  return byLabel[label] ?? '#'
}

export default App
