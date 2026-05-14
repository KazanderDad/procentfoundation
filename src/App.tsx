import type * as React from 'react'
import './App.css'

const basePath = import.meta.env.BASE_URL
const localAsset = (path: string) => `${basePath}${path}`
const localHref = (href: string) => (href.startsWith('/') ? `${basePath}${href.slice(1)}` : href)

const logo = localAsset('images/logo.png')

const images = {
  homeHero: localAsset('images/home-hero.jpg'),
  network: localAsset('images/network.jpg'),
  lecture: localAsset('images/lecture.jpg'),
  hands: localAsset('images/hands.jpg'),
  usersHero: localAsset('images/users-hero.png'),
  developersHero: localAsset('images/developers-hero.jpg'),
  donorsHero: localAsset('images/donors-hero.jpg'),
  countriesHero: localAsset('images/countries-hero.jpg'),
  actionHero: localAsset('images/action-hero.jpg'),
  teamHero: localAsset('images/team-hero.jpg'),
  taxHero: localAsset('images/tax-hero.jpg'),
  book: localAsset('images/book.jpg'),
  moonshot: localAsset('images/moonshot.jpg'),
  volunteers: localAsset('images/volunteers.jpg'),
  handshake: localAsset('images/handshake.jpg'),
  card: localAsset('images/card.jpg'),
  aboutMoon: localAsset('images/about-moon.jpg'),
  noak: localAsset('images/leader-noak.jpg'),
  tony: localAsset('images/leader-tony.jpg'),
  olivier: localAsset('images/leader-olivier.jpg'),
  blogUbi: localAsset('images/blog-ubi.png'),
  blogHoliday: localAsset('images/blog-holiday.jpg'),
  blogCriteria: localAsset('images/blog-criteria.jpg'),
}

const presentationSlides = [
  {
    image: images.moonshot,
    title: "What's in it for Countries & Regulators",
    points: [
      ['UBI For Your Citizens', 'Get it earlier than other. Early adopters get more.'],
      ['Transaction Tax', 'Set your own rules and determine how increased funds should be distributed.'],
      ['Decide On UBI Currency', 'Enable national currency, Bitcoin, CBDC, or the global UBI-native currency.'],
      ['KYC Transparency', 'Gain transparency to economic transactions happening within borders.'],
    ],
  },
  {
    image: images.developersHero,
    title: "What's in it for Crypto Developers",
    points: [
      ['User Adoption', 'Users realize they get UBI by holding and using your Crypto.'],
      ['Do The Right Thing', 'Participate in eradicating poverty and empowering individuals.'],
      ['Blaze A New Trail', 'Become part of a rapidly growing new ecosystem.'],
      ['Nothing To Lose', 'Voluntary participation, designed to help your project grow.'],
    ],
  },
  {
    image: images.usersHero,
    title: "What's in it for Crypto Users",
    points: [
      ['Daily UBI', 'Use participating crypto and receive daily Payback.'],
      ['Lower Fees', 'A 1% tax is cheaper than many payment network charges.'],
      ['Bank The Unbanked', 'Only an internet connection is needed to participate.'],
      ['Freedom From Banks', 'A permissionless economy puts users at the center.'],
    ],
  },
  {
    image: images.handshake,
    title: "What's in it for Partners & Backers",
    points: [
      ['CSR', 'Support a better world through a crypto-native public good.'],
      ['Partnership Options', 'Donate, sponsor, volunteer, invest, or help build.'],
      ['Transparent Impact', 'Follow auditable flows from collection to UBI.'],
      ['Early Ecosystem', 'Help shape the foundation while the model is young.'],
    ],
  },
  {
    image: images.card,
    title: 'A Practical Path Toward Global UBI',
    points: [
      ['1% Transaction Tax', 'Small per-transaction contributions can compound globally.'],
      ['24 Hour Turnaround', 'Collected funds are designed to move quickly to recipients.'],
      ['Global Standard', 'A shared framework for crypto taxation and distribution.'],
      ['Change For Good', 'Collective action made automatic, transparent, and repeatable.'],
    ],
  },
]

type NavLink = { label: string; href: string }
type NavGroup = NavLink & { children?: NavLink[] }
type BlogPost = {
  title: string
  date: string
  readTime: string
  image: string
  href: string
  excerpt: string
  author: string
  updated?: string
  body: string[]
}

type CriteriaTable = {
  title: string
  rows: {
    criteria: string
    global: string
    national: string
  }[]
}

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

const blogPosts: BlogPost[] = [
  {
    title: 'Analysis on Universal Basic Income and the Future of the World',
    date: 'Feb 1, 2022',
    readTime: '7 min read',
    image: images.blogUbi,
    href: '/post/analysis-on-universal-basic-income-and-the-future-of-the-world',
    author: 'noak93',
    excerpt:
      'It seems like everything changed during the pandemic and its aftermath, and yet in very important ways, what really needed to change remains ahead of us.',
    body: [
      `It seems like everything changed during the pandemic and its aftermath, and yet in very important ways, what really needed to change didn’t. It’s time to finally take the next logical step in the evolution of our human society and implement a Basic Income investment in the lifelong economic security of people in this world.`,
      `Millions of people starved or visited food banks for the first time in their lives in 2020, while local grocery stores went without customers and food was wasted. Millions of people faced eviction and still do, while at the same time there are vacant homes sitting unused. Millions of people filed for unemployment assistance or simply went without any income at all for the first time in their lives, adding to all the unemployment and poverty that existed before the pandemic. With food going unbought, housing going unutilized, and land sitting undeveloped, we clearly have enough global resources to meet everyone’s basic needs in good times or bad. Yet those resources are not available to everyone. As a civilization we are increasingly worse by the year when it comes to sharing and distributing resources. The richest 1% owned 45% of all the resources just 5 years ago, and now they own 50% of everything. The economic system itself  encourages centralization of resources among a few, while the rest have less and less.`,
      `The coronavirus has thus revealed something extremely important that billions across the globe are starting to realize: We don’t really have a safety net. We never did. Sure, there are programs in some countries meant to help in times of need, like unemployment insurance, disability insurance, housing assistance, food stamps, etc. But those programs – because they are targeted – always exclude many of those in need. Even the most effective welfare programs don't reach everyone living in poverty, and many countries don't even have any welfare programs at all. Or if they do, they only target certain groups while excluding others in need. Because they are almost always income tested, they also create "welfare traps". That's when people can't afford to get a new job, because as soon as they do they lose their welfare checks.`,
      `A net by definition is full of holes. The coronavirus crisis has made abundantly clear that when it comes to our safety net, the holes are large enough for billions of people to fall through. What is needed is a fully universal and unconditional basic income floor for everyone, free of holes.`,
      `We declare that every individual on this planet should have the right to an unconditional cash stipend, one that represents an equal share of our economy we together comprise. It is our inheritance. It is our dividend. It is our tax rebate. It is our right as global citizens. It is a payback for allowing others to buy and fence off land. It is a return on the investment that we all have contributed to when building factories, when inventing new robots and automation, and when bringing the next generation of entrepreneurs into this world. We should receive UBI in recognition that in a capitalistic society we are indeed no longer free. Because - do we have freedom if we no longer have unconditional access to roam the earth. Do we have freedom if what we need to live can be withheld from us? Do we have freedom if we lack the power to say no to exploitation and abuse? Do we have freedom if all we can do is fight for survival? Without unconditional access to the basic needs of existence we are not free.`,
      `We are all human beings whose lives have intrinsic worth. We are all equally worthy of existing. That is what we now recognize and must fully realize together.`,
      `UBI is not a new idea nor a call for charity. This is a centuries-in-the-making. Countless thought leaders have proposed it, time and time again. Supporters of UBI include Bertrand Russel, Virginia Woolf, Stephen Hawking, Pope Francis, Jack Dorsey, Elon Musk, Joe Rogan, Mark Zuckerberg, Jeff Bezos, Bill Gates, Larry Page, Neil deGrasse Tyson, Pen Jillette. It is also not a new idea. Thomas Paine, one of the founding fathers of the USA wrote in support of his own plan for universal inheritance, “it is a right, and not a charity, that I am pleading for.”`,
      `Dr. Martin Luther King, Jr. and Milton Friedman may have disagreed on many things, but they both agreed on the direct elimination of poverty through the guaranteeing of income. UBI is not left or right. It’s forward. This is NOT about capitalism vs. socialism, nor conservatism vs. liberalism. It’s about humanism. It’s about living dignified lives with the agency to make our own choices, secure in the knowledge that whatever happens, we are protected from starvation and homelessness, and are free to forge our own paths.`,
      `You may ask, “how can we afford to end poverty?” and we ask in return, “how can we afford not to end poverty?” The costs of child poverty alone have been estimated to exceed $1 trillion a year. We spend trillions of dollars annually on healthcare and crime treating the downstream effects of poverty and chronic insecurity. We also suffer from the decreased productivity of people just working whatever job they can find in order to just survive, and our economy suffers from a perpetual GDP gap as a result of there simply not being enough consumers with enough money to purchase all that our economy is capable of producing.`,
      `You may ask, “won’t people stop working?” and we ask in return, “how much work is prevented by a lack of money?” How much work is going undone because people can’t afford to create their own job, or relocate or retrain for a job? How many jobs don’t exist due to small businesses failing due to lack of customers? And how much work is being done in homes across the world going unpaid and unrecognized, despite being hugely valuable to all of society?`,
      `Additionally, as technology is able to do more of our work for us, at an increasingly affordable price, should we even be fretting about the loss of those jobs? Or should we be welcoming automation in the same way its owners already do? Is the problem the automation of labor? Or is the problem that we require labor in order to obtain survival income? If the wages that robots aren’t earning are shared universally as a technological dividend, and the value of the data we are generating is shared as a data dividend, then automation literally starts working for all of us. We could welcome automation for the productivity increases it brings if we simply shared the resulting prosperity instead of concentrating it in the hands of the few.`,
      `It is this decades-long concentration of production assets that needs to be reversed. This concentration seems to have kicked into high gear in 1974 when the Bretton-Woods economic system was created. Before then, blue collar workers in the US earned around $28,000 per year. If income growth for this group had matched the economic growth rate, their income would have risen to $61,000 by 2018, but it actually only rose to only $33,000. So, instead of rising at the economic growth rate of around 120%, these workers' incomes rose about 18 percent. And it's the same around the world. The rich get richer, faster, the working class gets poorer, and the poor increasingly rely on charity. So one argument for UBI could be that it is simply a matter of returning the money that would otherwise have been distributed each year as wages and salaries, had they not stagnated decades ago.`,
      `Yes, we will continue working if poverty is ended, just as billionaires continue working without the fear of poverty. A UBI will not be enough to make life comfortable, everyone will want to keep their jobs even with a UBI.`,
      `Yes, we can and should choose to issue a dividend to all shareholders in the race of humanity, as a right of citizenship in recognition of the value we all inherently have, and all interdependently create.`,
      `Yes, this is rightfully our money to demand. The world's economy needs money to continually exchange hands in order to thrive. We will all benefit from small businesses having more customers with more money to spend. We will all benefit from every individual being "invested in" on a monthly or a daily basis. We will all see returns on that investment in the form of improved health, less crime, better educational outcomes, greater wellbeing, higher trust, increased entrepreneurship, and more resilience to the disasters that can befall any of us at any time.`,
      `Consider that last point closely. What if we had already implemented a global UBI before the pandemic hit? What if every human had already been receiving $100 or $1000 each month, not just as a one-time relief payment, but as monthly survival income as their inalienable right? How many more people would have been able to afford to stay home instead of spread Covid? How many fewer people would have had to stand in record-breaking lines at food banks? How many fewer people would have fallen behind on their rent? How much less relief would we have needed if the least income any citizen had was $100 or $1000, each and every month?`,
      `If we can create, test, and distribute a vaccine to a novel coronavirus all within one year, we can inoculate ourselves against poverty when we already have the vaccine available — money — and we already know how to best distribute it — unconditionally.`,
      `The Procent Foundation is building a solution that has the capability to uniquely reach and pay all people in this world, all they need is access to either a phone or the internet. We are also proposing a way of funding a global UBI through a 1% global tax on all Crypto transactions. This tax would be automatically deducted, no paperwork needed, no government bureaucracy, no delays in distributing it back to the people. With only 1% cost of overhead administration and cyber security, and with only 24h processing time before distributing back as UBI, it would be the most efficient tax collection and the fastest distribution ever conceived of. The current fractional banking economic system relies on Central Banks to print money and distribute to regular banks, in the hopes that the money will multiply 10x and trickle down to everyone. But instead, why don't we just distribute the money directly to everyone. Cut out the middle men. With modern Crypto money we can build a better, decentralized system. We can give the power to the people to be their own money printer, operate their own money multiplier and have a say in how to run the tax collector. Let's build a better world together, one where we take care of each other and noone get left behind.`,
      `Please consider supporting and donating to this cause today!`,
      `Adapted from a text originally written by Scott Santens for Fund For Humanity`,
    ],
  },
  {
    title: '10 ways to make a difference this holiday season',
    date: 'Nov 1, 2021',
    readTime: '2 min read',
    image: images.blogHoliday,
    href: '/post/beyond-bucks-10-ways-to-make-a-difference',
    author: '@RCryptobi',
    excerpt:
      'We are so happy you found our site and want to help. We are currently in very early startup mode and would really appreciate any and all support.',
    body: [
      `We are so happy you found our site and want to help. We are currently in very early startup mode and would really appreciate any and all support we can get.`,
      `As we approach the holiday season, here are 10 things you can do right now to make a difference.`,
      `If you are an influencer, or if you have any size social network really. Tweet about our project. Post it on Facebook, Reddit, TikTok, wherever your network is. Spread the good word. Build some momentum for this idea of harnessing global Crypto transactions to fund a global UBI for all. Remember to add a link to our twitter account @RCryptobi or our website.`,
      `If you are creative`,
      `Write an article about what's going on and why this is so important. Submit it for publication in your local paper, or self publish it on a site like Medium or similar.`,
      `Make a video. Did you find one thing in our whitepaper that you thought was interesting, or that you think others could understand better if you explained it in your own words? Make a video and upload it. Share the link with us and we will add it here as well. Add us to your lineup for your podcast. Invite one of our team members to join for a candid discussion.`,
      `Create an explainer slideshow about one of our key concepts. Contact us if you need ideas on which topics we could use more explainers on.`,
      `Or just draw a cartoon highlighting the need for UBI now, or why Cryptos should be paying tax.`,
      `If you have cash to spare`,
      `Use your crypto to buy our $TAX token and join in as a stakeholder. Get early access to ICOs of new participating cryptos when they come up.`,
      `Donate your dollars, francs, marks, rubel or whatever fiat currency you have. We have a paypal account that will accept them all. Your money will go straight into building infrastructure to be able to more efficiently collect and distribute the tax funds.`,
      `If you have free time and would like to help`,
      `We always need help with research. Contact us with a description of your skillset and which datasets you have access to, and we can provide a range of different topics that we need to build a knowledge base around.`,
      `We need to start local users groups in every corner of the world. Join our community and start building a core group in your country. If we don't have one going already then start one.`,
      `Bonus suggestions`,
      `Find crypto developers in your area, or find who the developers of your favourite crypto are. Talk to them about this project. Convince them how important it is that they add a transaction tax into their code base, and that they submit their code to us for certification.`,
      `Find investors that are interested in making this world a better place. If they like to promote UBI, great! Or if they just like to get early access to ICOs then that works too. Send them our way.`,
    ],
  },
  {
    title: 'Announcing our first draft criteria for UBI Project selection',
    date: 'Oct 6, 2021',
    readTime: '1 min read',
    image: images.blogCriteria,
    href: '/post/paving-the-path-to-a-brighter-future',
    author: '@RCryptobi',
    updated: 'Nov 22, 2021',
    excerpt:
      'The main purpose of the Foundation is to ensure that collected tax funds are given back to the people through careful UBI project selection.',
    body: [
      'The main purpose of the Foundation is to ensure that collected tax funds are given back to the people. We do this by first finding, then evaluating the many UBI projects available. We select the best one(s), and once approved we distribute the collected funds to the selected program(s). From then on we continuously monitor that funds made it into the hands of recipients.',
      'Before setting out on a search for the best candidates we wanted to establish a list of criteria against which we want UBI Projects to be evaluated.',
      'We evaluate UBI Programs in two different categories: 1) Global UBI Programs, and 2) National UBI Programs. While most criteria apply to both categories, there are some criteria that differ between the two.',
      'The following is our first draft list of criteria to use when evaluating UBI Programs:',
    ],
  },
  {
    title: 'Why you should back our project',
    date: 'Sep 1, 2021',
    readTime: '2 min read',
    image: images.countriesHero,
    href: '/post/finding-support-and-help-how-your-community-can-make-a-difference',
    author: '@RCryptobi',
    excerpt:
      'We are currently in fundraising mode. To date all of our efforts have been entirely bootstrapped, and we are now at a place where we need to greatly increase our horsepower.',
    body: [
      `We are currently in fundraising mode. To date all of our efforts have been entirely bootstrapped, and we are now at a place where we need to greatly increase our horsepower. We need to boost development of core infrastructure, and we can't attract the best developers without offering a good salary. We need to get out and start convincing developers to join our cause, and that requires marketing dollars. Not to mention build a multilingual government relations army to preach the good word to regulators and lawmakers across all 295+ countries.`,
      `We are facing some unique challenges due to us being a non-profit, charitable organization. Namely, since we are not incorporated we also don't issue shares. And so we can't sell shares or any part of our organization to our seed investors, like normal private companies can. This is problematic, because we can't offer a potential increased valuation to investors. And investors like increased valuation.`,
      `So what can we offer potential backers? Well, we still bring a lot to the table.`,
      `1) A chance to be affiliated with a truly groundbreaking initiative. Affiliating with our organization aiming to eradicate poverty and provide UBI for all can provide incredible goodwill for your brand.`,
      `2) A chance to participate in upcoming ICO launches for future coins. While we are not an incubator per se, we will have some small influence on all new coins seeking to become a participating coin. We will talk to all of them during their certification. We cannot and will not make it a hard requirement, but we will certainly strongly recommend to develpers of all new coins that they include our backers in their whitelisting process for their initial seed round of their initial coin offerings. Also, for any for coins or tokens that we develop our selves it is a given that $TAX holders are invited to participate in seed rounds.`,
      `3) An option to profit from the increased value of our fundraising coin $TAX. We will sell this coin at $1 during the initial fundraising rounds, but will then let the price float. We have included three price-supporting mechanisms to help the price increase with time (reflection, liquidity provisioning, and marketing)`,
      `4) A seat at the table. We will require that members of our governance council show their comittment to the project by buying and holding $TAX. Furthermore, when we go to decentralize our governance into a DAO, we will also leverage the fundraising token. We will do so by either by making $TAX itself the utility coin for the DAO, or by issuing a new utility token to holders of $TAX token.`,
    ],
  },
]

const ubiCriteriaTables: CriteriaTable[] = [
  {
    title: 'Network Capability',
    rows: [
      {
        criteria:
          'Need to be run on a network capable of scaling with the exponential growth of users, should be able to scale into the Billions',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Need to run on a network with transaction fees that are cheap enough to be less than a fraction of the value of the distributed UBI itself',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria: 'Need to run on a network fast enough to process UBI transactions in a timely fashion',
        global: 'Required',
        national: 'Required',
      },
    ],
  },
  {
    title: 'User Eligibility',
    rows: [
      {
        criteria:
          'No income testing or other testing allowed, cannot distribute UBI only to the poor (or only to the needy, or any other limited subset)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Need to show effort to include the poorest and lowest classes in society over the already privileged. For example, figure out how to enable those without their own device or without internet access',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria: 'Cost of entry should be zero or close to zero for new users (UBI recipients)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          "User's location is known from geolocating, and/or users select one and only one country (and can't change that selection too often)",
        global: 'Required',
        national: 'Required',
      },
      {
        criteria: 'Location is based on residency and/or actual position (not nationality or citizenship)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Need to ensure that users are indeed unique and alive humans. Required frequent and ongoing eligibility tests are:\n- Aliveness check\n- Uniqueness check\n- Human check (Turing test)',
        global: 'Required (minimum quarterly frequency)',
        national: 'Required (minimum quarterly frequency)',
      },
      {
        criteria:
          'Share unique human profile data with other Participating UBI schemes, for free, in an effort to create a global repository of unique humans, if possible',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'No cherry picking of nations or geolocation. Need to support all countries, territories, and other corners of the world',
        global: 'Required',
        national: '[Not applicable]',
      },
      {
        criteria:
          'No exclusion or favouritism based on gender, race, religion, marital status, ethic groups, race, social status, medical conditions, etc',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria: 'No exclusion or favouritism based on age, at least not for for those above certain age',
        global: 'Age of school start or younger',
        national: 'Age of majority or younger',
      },
      {
        criteria:
          'No exclusion or favouritism based on existence of paperwork (e.g. residency permit, passport, citizenship, etc.)',
        global: 'Required',
        national: 'Encouraged',
      },
    ],
  },
  {
    title: 'Earning UBI',
    rows: [
      {
        criteria:
          'Schemes that enable some users to receive more UBI than others if they save, stake or otherwise keep their UBI untouched are not allowed (because if so, then max UBI would go to the rich, not the poor)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Need to upscale the donated amount, apply significant leverage. For example, distribute $10 worth of UBI for every $1 donated or otherwise received',
        global: 'Required',
        national: 'Recommended, not required',
      },
    ],
  },
  {
    title: 'Compatibility',
    rows: [
      {
        criteria: 'Need to cover at least 90% of world population in terms of languages supported',
        global: 'Required',
        national: '[Not applicable]',
      },
      {
        criteria: 'Need to cover at least 90% of country population in terms of languages supported',
        global: '[Not applicable]',
        national: 'Required',
      },
      {
        criteria: 'Government support users with account creation, maintenance, and recovery (i.e. national Wallets)',
        global: '[Not applicable]',
        national: 'Required',
      },
      {
        criteria: 'Need to offer off-boarding option into either the local Fiat currency or a major Participating Currency',
        global: 'Not required',
        national: 'Not required',
      },
    ],
  },
  {
    title: 'Spending & Using the UBI',
    rows: [
      {
        criteria:
          'Spending / using your UBI unaltered for goods and services should be encouraged (i.e. not requiring first exchanging it to another currency)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Developers need to show efforts to build or otherwise encourage creation of open markets for spending and using your UBI',
        global: 'Required',
        national: 'Required',
      },
    ],
  },
  {
    title: 'Security & Data Privacy',
    rows: [
      {
        criteria: 'Anonymous transactions are not allowed, nor are untraceable transactions (eg Monero)',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria:
          'Need to sufficiently ensure users data privacy is protected. Spending habits and similar data need to be protected from mining by large firms such as Google, Facebook and Amazon',
        global: 'Required',
        national: 'Required',
      },
      {
        criteria: 'Pseudonymous accounts and transactions',
        global: 'Discouraged but allowed',
        national: 'Not allowed. Only allowed in nations where population register is non-existent or highly unreliable',
      },
      {
        criteria:
          'Government supports the Tax Foundation by sharing their (encoded and anonymized) repository of registered residents',
        global: '[Not applicable]',
        national:
          'Required. (The main reason we want government support is to gain access to their population register for uniqueness check and residency check)',
      },
    ],
  },
  {
    title: 'Governance',
    rows: [
      {
        criteria: 'Decentralization vs. Government backing',
        global:
          'Need to be "sufficiently decentralized" that it cannot be sued or intervened by any one entity, bank or government agency',
        national:
          'Need to be EITHER fully and publicly backed by / created by / owned by the national government (and in return we will give you significant control over which UBI scheme we should support in your country, to where we should direct the funds), OR sufficiently decentralized that it cannot be sued or intervened by any one entity, bank or government agency',
      },
      {
        criteria: 'Participating nations will positively legalize use of participating Cryptos',
        global: '[Not applicable]',
        national: 'Required',
      },
    ],
  },
]

const aboutChallenges = [
  'Lack of effective crypto taxation',
  'No online unique human verification',
  'Ever increasing poverty, inequalities and wealth gap',
  'Lack of global crypto regulation',
  'No marketplace to spend your cryptos on',
]

const economicFeatures = [
  {
    title: 'Registered Non-profit Charitable Foundation',
    body: 'Established 2021 in Sweden as a charitable foundation. Our financials are fully compliant with regulations, audited and reported to the Swedish tax authorities. We are a non-profit organization and therefore also tax exempt.',
  },
  {
    title: 'Efficient And Effective',
    body: 'We guarantee 95% efficacy in our operation, and will increase this number annually. We expect that with a few years of operation we will reach 99%. We also turn around all funds daily. Within 24 hours of taxation the funds are sent to UBI. Compare this number with 50-70% for a majority of charitable organizations, or 70-80% for most governments, and with turnaround time of months or years.',
  },
  {
    title: 'Fully Auditable and Transparent',
    body: 'Every single tax transaction is fully auditable and visible on the blockchain, and the same goes for our distribution of collected funds towards UBI programs. We also produce summary statistics on a regular basis to show breakdowns of all our financial flows.',
  },
  {
    title: 'Global Standard',
    body: 'We build an ecosystem of Crypto taxation that is truly global-first and will live up to regulatory scrutiny in any and all countries on this globe. We are ready to enable any and all countries that wish to join our taxation program, and can support them with collecting more taxes, distribute in other ways, etc. as well.',
  },
  {
    title: 'Decentralized Governance',
    body: 'We have built our governance in the most robust and inclusive way. Our Governing Council is made up of 21 members distributed across industries, countries, cultures, etc. Critical issues are put up for vote to a DAO made up of users and contributors. Our third governance pillar will be created once Countries and various World Banks decide to join the party.',
  },
  {
    title: 'A solution to Crypto Taxation',
    body: 'We provide an opportunity for Crypto developers to ensure that their Cryptos finally can pay tax natively, as a percentage of every transaction. We provide regular users to choose a responsible and ethical choice, to let our money work for good.',
  },
  {
    title: 'A solution for global Crypto regulation',
    body: 'We give Countries their first real option to regulate and tax crypto transactions. We will enable all Countries that join our initiative to influence their national crypto taxation, as well as how collected taxes are distributed. They can increase the tax rates and they will be able to set criteria for tax exemption.',
  },
  {
    title: 'An entirely new taxation paradigm',
    body: "Transaction tax hasn't really been an option before Cryptos. It's a powerful tax, in that it represents the largest possible taxable base, and as a consequence the percentage can be set very small. Estimates differ, but a transaction tax around 3-5% of all transactions could eventually replace all other taxes.",
  },
  {
    title: 'No admin or annual tax returns',
    body: 'Put an end to having to collect receipts and filing annual tax returns. Administration is non-existent with an automated transaction tax. All taxes are paid instantaneous and are final, no deductions, no admin.',
  },
  {
    title: 'A solution to the Unique Human conundrum',
    body: "One of the biggest challenges in today's digital economy is figuring out if an account represents a unique and live human. If we could achieve this, then a whole world of new opportunities would open up. We can finally propose a solution to this conundrum, built in the intersection of transaction tax collection and UBI distribution.",
  },
  {
    title: 'Finally providing legitimacy to Crypto',
    body: 'When Cryptos can start paying taxes, and Countries can start regulating those taxes, we believe that Cryptos can finally come out of the woodwork and become accepted by all. It will finally be able to prove itself as the revolutionary and modern economic system that it can be.',
  },
  {
    title: 'A solution to the widening wealth gap',
    body: 'Our current, legacy economic system(s) have failed time and again when it comes to creating equal opportunity for all. The wealth gap is ever-widening. Our transaction tax will naturally tax "the rich" more, and our UBI will naturally give to "the poor" in a more meaningful way. This system has the potential to become the most powerful force to slowly reverse the wealth gap and creating equal opportunity for all.',
  },
  {
    title: 'A fully funded Universal Basic Income',
    body: 'When discussing UBI, the questions of "how expensive" and "where should the money come from" always come up. These questions are hard to answer and inevitably become the show stoppers. We provide the world\'s first fully funded and therefore the most realistic UBI concept ever presented.',
  },
  {
    title: 'A solution to the national tax base conundrum',
    body: 'Our current national taxation system is severely limited. Countries cannot tax sales, corporations, wealth, etc. in any significant manner. If they do, then corporations and "the rich" will just move to a different country. Crypto is equally hard to tax, due to the fact that it is very hard to determine which country a crypto transaction "belongs to". Our global taxation provides an opportunity to finally put an end to all these challenges.',
  },
  {
    title: 'Environmentally Friendly',
    body: 'Despite all that has been said of Bitcoin using too much electricity, the fact is that more recent Cryptos are much more energy efficient. Our system is also incredibly light on administration. Crypto also does not require production of plastic bills or metal coins.',
  },
  {
    title: 'Future-proofing our economy',
    body: 'For all those worried about robots and automation eventually taking over all our jobs, this system is here to help you. UBI does not represent a large income, but it will be there to help you while you re-train for a new job. It provides the opportunity for more to quit their job or reduce their hours, making new spots available for you. And it could help you free up time to focus on your creativity, hobbies, entrepreneurship, etc.',
  },
  {
    title: 'Eradicating Poverty',
    body: 'A key criteria for a transaction-tax-funded UBI should be that it is made available to all, regardless of where in the world and regardless of how they connect to the internet, be it on cheap phones, public computers or any other way. Once this UBI is created and awareness spreads, it has the potential to be the enabler to finally eradicating extreme poverty.',
  },
  {
    title: 'A Better Society',
    body: "Studies of past UBI implementations show significant improvements to society. Crime rates and drug abuse decreases. Education rates improve. Child mortality decreases, as does population growth. Overall happiness increases. Also, for those that worry, there are typically very limited impacts to the job markets, as in, it won't make it harder for employers to find workers.",
  },
  {
    title: 'Not a Higher Tax Burden',
    body: 'The key critique against UBI is commonly that the tax load will increase. This is true on a national level. It is not necessarily so on an individual level though. Since most transactions are made between companies, not people, it is financial institutions that will bear the brunt of this tax. Importantly though, on an individual level, almost everyone, except the financially very active, such as day traders, will see a decreased net taxation, if you were to count UBI as returned tax. The velocity of money increases, but not the personal tax burden.',
  },
  {
    title: 'Dynamically and Instantly Calculated Tax',
    body: 'Once we are live with our wallet registry, this information will be made available on the blockchains. The tax rate will be set to zero for transactions between your own wallets. And if Countries wish to set their own transaction taxes, they can do so with complex criteria which will also be calculated in the milliseconds before your transaction is finalized. As a user, your financial app will be able to show your the exact taxation prior to your accepting the charge and authorizing the transaction.',
  },
]

const leaders = [
  {
    name: 'Noak',
    role: 'President',
    image: images.noak,
    body: 'With us since our founding, Noak is one of our veteran team members. He bring years of experience and skills to the forefront in helping our organization grow and succeed.',
  },
  {
    name: 'Tony',
    role: 'Financial Flow Optimization',
    image: images.tony,
    body: 'Experienced, trustworthy, fun. These are just a few of the ways coworkers describe this invaluable member of our team. Tony is truly a joy to be around and makes it a pleasure to come to work every single day.',
  },
  {
    name: 'Olivier',
    role: 'Business Development',
    image: images.olivier,
    body: 'Olivier joined the ProCent Foundation with the vision and drive to improve upon our organization, and focuses on developing the organization with experience and integrity.',
  },
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
  ...Object.fromEntries(blogPosts.map((post) => [post.href, () => <BlogPostPage post={post} />])),
}

function App() {
  const baseRoute = basePath === '/' ? '' : basePath.replace(/\/$/, '')
  const pathname = window.location.pathname.startsWith(baseRoute)
    ? window.location.pathname.slice(baseRoute.length) || '/'
    : window.location.pathname
  const Page = routes[pathname] ?? HomePage

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
      <a className="brand" href={localHref('/')} aria-label="The ProCent Foundation home">
        <img src={logo} alt="The ProCent Foundation" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <div className="nav-item" key={item.label}>
            <a href={localHref(item.href)}>{item.label}</a>
            {item.children ? (
              <div className="submenu">
                {item.children.map((child) => (
                  <a href={localHref(child.href)} key={child.href}>
                    {child.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <a className="login" href={localHref('/login')}>
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
              <a href={localHref(footerHref(item))} key={item}>
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
      <section className="vision-cta">
        <p>Read more our vision in About Us or in our book.</p>
        <div>
          <a href={localHref('/about')}>About Us</a>
          <a href={localHref('/white-paper')}>Buy Our Book</a>
        </div>
      </section>
      <ImageWheel />
      <Section title="Media Center" kicker="Latest Stories">
        <div className="story-grid">
          <Story
            title="In-depth Interview with the Founder of the ProCent Foundation"
            date="June 9, 2019"
            image={images.blogUbi}
            href="/post/analysis-on-universal-basic-income-and-the-future-of-the-world"
          />
          <Story
            title="From Idea to Reality: The Evolution of ProCent Foundation"
            date="June 9, 2019"
            image={images.blogHoliday}
            href="/post/beyond-bucks-10-ways-to-make-a-difference"
          />
        </div>
      </Section>
      <Section title="Ways to Help" kicker="Take Action Now">
        <div className="help-grid">
          {['Volunteer Your Time', 'Partner with Us', 'Make a Donation'].map((item) => (
            <a href={localHref('/get-involved')} key={item}>
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
      <a className="text-link" href={localHref('/about')}>
        Get in Touch
      </a>
    </article>
  )
}

function Story({ title, date, image, href }: { title: string; date: string; image: string; href: string }) {
  return (
    <a className="story" href={localHref(href)}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{date}</p>
      <span>Get in Touch</span>
    </a>
  )
}

function ImageWheel() {
  return (
    <section className="image-wheel" aria-label="ProCent presentation slideshow">
      <div className="slides">
        {presentationSlides.map((slide, index) => (
          <article className="slide" key={slide.title} style={{ '--slide-index': index } as React.CSSProperties}>
            <img src={slide.image} alt="" />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <dl>
                {slide.points.map(([term, detail]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
      <button className="wheel-arrow prev" aria-label="Previous slide" type="button">
        ‹
      </button>
      <button className="wheel-arrow next" aria-label="Next slide" type="button">
        ›
      </button>
      <div className="wheel-dots" aria-hidden="true">
        {presentationSlides.map((slide) => (
          <span key={slide.title}></span>
        ))}
      </div>
    </section>
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
          Dealing with the challenges of today requires problem-solvers who bring different
          perspectives and are willing to take risks.
        </p>
      </Hero>
      <section className="about-vision section">
        <p>
          The ProCent Foundation emerged out of a pursuit to set an example for how to properly
          govern the emerging Crypto space. Where national regulators stumble and fail, we provide a
          pragmatic solution. Where world banks are silent, we create a workable framework.
        </p>
        <p>
          We seek to inspire and support the community. We decided that action speak louder than
          words. A pragmatic solution developed for the community by the community. A proactive step
          forward for the good of the world. One holistic solution that neatly solves five of the
          most challenging conundrums of today:
        </p>
        <FeatureList items={aboutChallenges} />
        <p>
          Established in 2021, we're an organization driven by progressive ideas, bold actions, and
          a strong foundation of support. Contact us to learn more and get involved.
        </p>
      </section>
      <section className="moonshot-definition">
        <img src={images.aboutMoon} alt="" />
        <div>
          <p>Moonshot</p>
          <blockquote>
            "an ambitious, exploratory and ground-breaking project undertaken without any
            expectation of near-term profitability and also, perhaps, without a full investigation
            of potential risks and benefits"
          </blockquote>
        </div>
      </section>
      <Section
        title="Features of our Economic System"
        kicker="Transaction Tax-funded UBI could be the golden ticket to a better society"
      >
        <div className="feature-prose-grid">
          {economicFeatures.map((feature) => (
            <TextBlock key={feature.title} title={feature.title} body={feature.body} />
          ))}
        </div>
      </Section>
      <Section title="Our Leaders" kicker="Committed to the Cause">
        <p className="leaders-intro">
          Coming together from a wide variety of backgrounds and experiences, our skilled team of
          professionals is the backbone of the ProCent Foundation. Their ideas help shape the
          direction and mission of our organization as it continues to develop.
        </p>
        <div className="leaders">
          {leaders.map((leader) => (
            <article key={leader.name}>
              <img src={leader.image} alt="" />
              <h3>{leader.name}</h3>
              <strong>{leader.role}</strong>
              <p>{leader.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Contact Us" image={images.hands}>
        <p>
          Have a question, idea, partnership proposal, or volunteer interest? Get in touch and help
          move the foundation forward.
        </p>
        <form className="contact-form">
          {['First Name', 'Last Name', 'Email', 'Subject'].map((field) => (
            <input key={field} placeholder={field} />
          ))}
          <button type="submit">Submit</button>
        </form>
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
  return (
    <>
      <Hero title="Blog" eyebrow="All Posts" />
      <section className="section blog-list">
        {blogPosts.map((post) => (
          <a className="blog-post" href={localHref(post.href)} key={post.title}>
            <img src={post.image} alt="" />
            <div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span>{post.author} · {post.date} · {post.readTime}</span>
            </div>
          </a>
        ))}
      </section>
    </>
  )
}

function BlogPostPage({ post }: { post: BlogPost }) {
  const relatedPosts = blogPosts.filter((candidate) => candidate.href !== post.href).slice(0, 3)

  return (
    <>
      <Hero image={post.image} title={post.title} eyebrow={`${post.date} · ${post.readTime}`}>
        <p>{post.excerpt}</p>
      </Hero>
      <section className="post-article section">
        <div className="post-meta">
          {post.author} · {post.date} · {post.readTime}
          {post.updated ? <span>Updated: {post.updated}</span> : null}
        </div>
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {post.href === '/post/paving-the-path-to-a-brighter-future' ? <CriteriaTables tables={ubiCriteriaTables} /> : null}
        <a className="text-link" href={localHref('/blog')}>
          All Posts
        </a>
      </section>
      <section className="section related-posts">
        <p className="kicker">Recent Posts</p>
        <h2>Keep Reading</h2>
        <div className="related-grid">
          {relatedPosts.map((related) => (
            <a className="related-card" href={localHref(related.href)} key={related.href}>
              <img src={related.image} alt="" />
              <div>
                <h3>{related.title}</h3>
                <p>{related.date} · {related.readTime}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function CriteriaTables({ tables }: { tables: CriteriaTable[] }) {
  return (
    <div className="criteria-tables">
      {tables.map((table) => (
        <section className="criteria-table-block" key={table.title}>
          <h2>{table.title}</h2>
          <div className="criteria-table-wrap">
            <table className="criteria-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Global UBI Projects</th>
                  <th>National UBI Projects</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.criteria}>
                    <td>{row.criteria}</td>
                    <td>{row.global}</td>
                    <td>{row.national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
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
      <a href={localHref(href)}>Get in Touch</a>
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
