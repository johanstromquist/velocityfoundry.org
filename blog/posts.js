/* ===================================
   BLOG POSTS MANIFEST
   Responsibility: List of all blog posts

   TO ADD A NEW POST:
   1. Create the HTML file in blog/ directory
   2. Add entry to this array
   3. Commit and push - that's it!

   SCHEDULING POSTS:
   - Add a 'publishDate' field to schedule a post for future publication
   - Posts without a publishDate are published immediately
   - Posts with a publishDate in the future are filtered from the main listing
   - Date-only values publish at 12:00 UTC; exact times use ISO 8601 with an offset
   - The 'date' field is still used for display purposes
   =================================== */

function parsePublishDate(value) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return new Date(value + 'T12:00:00Z');
    }

    const normalized = value.replace(' ', 'T');
    const hasTimezone = /(?:Z|[+-]\d{2}:\d{2})$/i.test(normalized);
    return new Date(hasTimezone ? normalized : normalized + 'Z');
}

const posts = [
    {
        slug: '2027-01-find-the-cause-before-asking-for-a-fix',
        title: 'Find the Cause Before Asking for a Fix',
        date: '2027-01-06',
        publishDate: '2027-01-06T14:00:00+01:00',
        excerpt: 'In 1840s Vienna, one maternity clinic lost far more mothers than the other. Semmelweis tried fixes aimed at guesses before finding a cause that explained the whole pattern. Ask an agent for the cause before the fix.',
        readTime: '4 min',
        image: 'assets/images/chlorine_basin.png'
    },
    {
        slug: '2027-01-done-is-a-claim-verification-is-evidence',
        title: '“Done” Is a Claim; Verification Is Evidence',
        date: '2027-01-04',
        publishDate: '2027-01-04T14:00:00+01:00',
        excerpt: 'In 2015 Dutch engineers proof-loaded one span of a viaduct cut to one lane, and it held. The bridge still stayed at one lane, because the critical span over the motorway could not be tested, and they said so. An agent\'s report that work is done needs the same: checks seen, and a list of what was not tested.',
        readTime: '5 min',
        image: 'assets/images/tested_span.png'
    },
    {
        slug: '2026-12-describe-the-result-not-the-activity',
        title: 'Describe the Result, Not the Activity',
        date: '2026-12-30',
        publishDate: '2026-12-30T14:00:00+01:00',
        excerpt: 'In 1902 Hanoi paid a bounty for rat tails to get rid of rats, and people started breeding rats for their tails. An instruction that names an activity gets the activity. Tell an agent the result you want.',
        readTime: '4 min',
        image: 'assets/images/counted_tails.png'
    },
    {
        slug: '2026-12-simple-is-a-design-decision',
        title: 'Simple Is a Design Decision',
        date: '2026-12-28',
        publishDate: '2026-12-28T14:00:00+01:00',
        excerpt: 'After an oxygen tank failed on Apollo 13, carbon dioxide built up in the lunar module. Houston read the crew a procedure for an adapter made of a bag, cardboard, a hose and tape. It was simple because the job was fixed and nothing else was on board. An agent has neither limit, so you have to set them.',
        readTime: '5 min',
        image: 'assets/images/four_materials.png'
    },
    {
        slug: '2026-12-a-helpful-substitute-can-hide-a-failure',
        title: 'A Helpful Substitute Can Hide a Failure',
        date: '2026-12-23',
        publishDate: '2026-12-23T14:00:00+01:00',
        excerpt: 'In October 1992 London\'s new ambulance dispatch system kept recommending ambulances on wrong information, and nothing on screen showed it. A loud failure tells the builder where to look; a substitute an agent adds can hide it.',
        readTime: '5 min',
        image: 'assets/images/control_room_1992.png'
    },
    {
        slug: '2026-12-two-ways-to-do-the-same-job-drift-apart',
        title: 'Why Two Ways to Do the Same Job Drift Apart',
        date: '2026-12-21',
        publishDate: '2026-12-21T14:00:00+01:00',
        excerpt: 'In 1883 the North American railways stopped keeping their own times and adopted standard time zones. Software built with an agent can end up doing the same job two ways, and the fix is the same: find every place, pick one rule, and make every screen use it.',
        readTime: '4 min',
        image: 'assets/images/two_noons.png'
    },
    {
        slug: '2026-12-write-the-rule-once',
        title: 'Write the Rule Once, Then Use It Everywhere',
        date: '2026-12-16',
        publishDate: '2026-12-16T14:00:00+01:00',
        excerpt: 'Fannie Farmer wrote her measuring rule once, at the front of her 1896 cookbook, and every recipe pointed back to it. A rules file for an agent works the same way, if each rule means the same thing to every session that reads it.',
        readTime: '4 min',
        image: 'assets/images/level_cupful.png'
    },
    {
        slug: '2026-12-build-bricks-not-one-off-features',
        title: 'Build Bricks, Not One-Off Features',
        date: '2026-12-14',
        publishDate: '2026-12-14T14:00:00+01:00',
        excerpt: 'The shipping container changed world trade only after its edges became standard. A reusable part becomes useful to everyone when other people and systems can use it too, and an agent will build a one-off unless someone asks for the brick.',
        readTime: '4 min',
        image: 'assets/images/standard_box.png'
    },
    {
        slug: '2026-12-give-every-experiment-a-way-back',
        title: 'Give Every Experiment a Way Back',
        date: '2026-12-09',
        publishDate: '2026-12-09T14:00:00+01:00',
        excerpt: 'Theatre previews let a company change a play in front of an audience and go back if a change fails. Knowing you can return to a working version changes what you are willing to try, and the same holds when you direct an agent.',
        readTime: '4 min',
        image: 'assets/images/preview_night.png'
    },
    {
        slug: '2026-12-build-the-part-every-case-can-use',
        title: 'Build the Part Every Case Can Use',
        date: '2026-12-07',
        publishDate: '2026-12-07T14:00:00+01:00',
        excerpt: 'Find the small, general part that several needs share, build it once, and make each feature an arrangement of it. Would a completely different case use it unchanged? Agents build for one request, so the director has to ask.',
        readTime: '20 min',
        image: 'assets/images/one_brick_many_shapes.png'
    },
    {
        slug: '2026-12-ask-for-the-shape-first',
        title: 'Ask for the Shape First',
        date: '2026-12-02',
        publishDate: '2026-12-02T14:00:00+01:00',
        excerpt: 'Nightingale designed every part of her rose diagram to show officials one thing. Directing an agent takes the same discipline: ask it what you need to check, judge the shape it proposes, then ask for it filled in.',
        readTime: '4 min',
        image: 'assets/images/ledger_to_rose.png'
    },
    {
        slug: '2026-11-the-interface-should-tell-you-what-to-do',
        title: 'The Interface Should Tell You What to Do',
        date: '2026-11-30',
        publishDate: '2026-11-30T14:00:00+01:00',
        excerpt: 'People do not read instructions. An interface can show what to do through its structure, controls, defaults, constraints and feedback. Self-explanatory design is a north star, and it applies directly to software built with an agent.',
        readTime: '21 min',
        image: 'assets/images/door_without_a_sign.png'
    },
    {
        slug: '2026-11-ask-for-the-map',
        title: 'Ask for the Map',
        date: '2026-11-25',
        publishDate: '2026-11-25T14:00:00+01:00',
        excerpt: 'From a cholera map to a lost Mars probe and a medicine carton: you do not need to read code to direct software, but you do need a picture of how its parts connect.',
        readTime: '4 min',
        image: 'assets/images/ask_for_the_map.png'
    },
    {
        slug: '2026-11-the-work-only-the-director-can-do',
        title: 'The Work Only the Director Can Do',
        date: '2026-11-23',
        publishDate: '2026-11-23T14:00:00+01:00',
        excerpt: 'From Kodak cameras to AI-assisted work, new tools change who can make things and which parts of a craft remain human responsibilities.',
        readTime: '5 min',
        image: 'assets/images/director_selection.png'
    },
    {
        slug: '2026-11-who-gets-to-build-software',
        title: 'Who Gets to Build Software?',
        date: '2026-11-16',
        publishDate: '2026-11-16T14:00:00+01:00',
        excerpt: 'Why I wrote The vibe coder\'s guide to the galaxy: who can build software now, and what it takes to direct an agent well.',
        readTime: '6 min',
        image: 'assets/images/who_gets_to_build_software.jpg'
    },
    {
        slug: '2026-11-how-i-wrote-the-vibe-coders-guide',
        title: 'How I Wrote The vibe coder\'s guide to the galaxy',
        date: '2026-11-18',
        publishDate: '2026-11-18T14:00:00+01:00',
        excerpt: 'How I wrote The vibe coder\'s guide to the galaxy by making principles explicit, checking examples, and directing agents through writing and publishing.',
        readTime: '9 min',
        image: 'assets/images/how_i_wrote_the_vibe_coders_guide.jpg'
    },
    {
        slug: '2026-05-what-stays-yours',
        title: 'What Stays Yours',
        date: '2026-06-01',
        publishDate: '2026-06-01',
        excerpt: 'Climbing the AI maturity ladder is also a surrender ladder. The further up the stack you get, the easier it gets to surrender, and the harder it gets to notice you have. This is the reflective follow-up to Three Tiers of AI Maturity, in conversation with Ethan Mollick on cognitive surrender. The structural answer at altitude: keep the spec, keep the verification, keep the escalation framework. Everything else can go.',
        readTime: '8 min',
        image: 'assets/images/what_stays_yours.png'
    },
    {
        slug: '2026-05-three-tiers-of-ai-maturity',
        title: 'Three Tiers of AI Maturity',
        date: '2026-05-26',
        publishDate: '2026-05-26',
        excerpt: 'There are three tiers of AI maturity -- Copilot, Agent, Orchestration -- and they do not depend on which model you are using. They depend on how you are using it. Most operators are at Tier 1 and do not realise there are more. The transitions are not technical. They are psychological: giving up control in exchange for leverage.',
        readTime: '9 min',
        image: 'assets/images/three_tiers_ai_maturity.png'
    },
    {
        slug: '2026-04-bottom-of-the-ladder',
        title: 'Bottom of the Ladder',
        date: '2026-05-11',
        publishDate: '2026-05-11',
        excerpt: 'AI has pulled the bottom rung out of dozens of professions at once. Most firms are taking what looks like the rational efficiency: stop hiring at the entry level. The labour market bleeds from the bottom up. There is another path -- treat AI as an extension of the workforce, and redirect human resources at new work supported by AI. The bottom of the ladder is still there. It is just shaped differently.',
        readTime: '7 min',
        image: 'assets/images/bottom_of_the_ladder.png'
    },
    {
        slug: '2026-04-the-floor-and-the-bridge',
        title: 'The Floor and the Bridge',
        date: '2026-05-04',
        publishDate: '2026-05-04',
        excerpt: 'Detroit, the English coalfields, Roubaix -- places where the last industrial reallocation was largely left to happen. The Ruhr -- where it was organised at scale. The model that says the relational sector grows under AI is silent on the same architecture: a floor under those displaced, and a bridge to what comes next. Hindsight makes that plain.',
        readTime: '9 min',
        image: 'assets/images/floor_and_bridge.png'
    },
    {
        slug: '2026-04-belonging-not-status',
        title: 'Belonging, Not Status',
        date: '2026-04-27',
        publishDate: '2026-04-27',
        excerpt: 'Starbucks tried to replace baristas with equipment and discovered that the customer was not paying for throughput. As AI makes commodity production cheap, the same lesson is arriving for the rest of the economy. The model says the relational sector grows. It does not say whether the engine driving it is status or belonging. That is a choice.',
        readTime: '10 min',
        image: 'assets/images/belonging_not_status.png'
    },
    {
        slug: '2026-04-a-dream-to-match-the-alarm',
        title: 'A Dream to Match the Alarm',
        date: '2026-04-21',
        publishDate: '2026-04-21',
        excerpt: 'The Molotov at Sam Altman\'s gate was a report. So were the thousands of likes on the comments that followed. An alarm has been sounded for three years, in good faith, from many directions. A dream to answer it has not. That is where the radicalization lives.',
        readTime: '12 min',
        image: 'assets/images/a_dream_to_match_the_alarm.png'
    },
    {
        slug: '2026-04-the-new-ai-stack',
        title: 'The New AI Stack',
        date: '2026-04-13',
        publishDate: '2026-04-13',
        excerpt: 'Today\'s frontier is tomorrow\'s commodity. The agentic explosion is compressing that cycle faster than anything in the history of computing. The question is not which model wins. It is whether you are building for the vector.',
        readTime: '11 min',
        image: 'assets/images/new_ai_stack.png'
    },
    {
        slug: '2026-03-fieri-iussit',
        title: 'Fieri Iussit',
        date: '2026-03-22',
        publishDate: '2026-03-22',
        excerpt: 'A machine can drive an agenda, ideate, plan, and execute. But a machine cannot want anything. Intent -- the expression of want -- turns out to be the central bottleneck of AI-assisted development. And articulating it clearly is harder, and more valuable, than any of the execution it enables.',
        readTime: '9 min',
        image: 'assets/images/fieri_iussit.png'
    },
    {
        slug: '2026-03-life-inside-the-curve',
        title: 'Life Inside the Curve',
        date: '2026-03-09',
        publishDate: '2026-03-09',
        excerpt: 'What does it feel like to be inside an exponential curve? Not the theory. Not the benchmarks. The actual experience of watching seven AI sessions collaborate to solve a problem that would have taken days -- and finishing before lunch.',
        readTime: '10 min',
        image: 'assets/images/life_inside_the_curve.png'
    },
    {
        slug: '2026-03-no-free-lunch',
        title: 'No Free Lunch',
        date: '2026-03-02',
        publishDate: '2026-03-02',
        excerpt: 'The question everyone asks about AI and work -- "how will I earn my keep?" -- assumes the current system rewards effort proportionally. It doesn\'t. It never did. And AI is making the fiction unsustainable.',
        readTime: '9 min',
        image: 'assets/images/no_free_lunch.png'
    },
    {
        slug: '2026-02-what-remains',
        title: 'What Remains',
        date: '2026-02-23',
        publishDate: '2026-02-23',
        excerpt: 'We built our sense of worth on what we produce. AI just called that bluff. The question isn\'t what happens to human value when machines do our work. It\'s why we let "our work" become the whole answer to "our value."',
        readTime: '8 min',
        image: 'assets/images/what_remains.png'
    },
    {
        slug: '2026-02-acceleration-gap',
        title: 'The Acceleration Gap: Why Waiting Is the Riskiest Strategy',
        date: '2026-02-16',
        publishDate: '2026-02-16',
        excerpt: 'The gap between AI adopters and everyone else is no longer a gentle slope. It has become a cliff. And it\'s compounding. Here\'s what the data shows—and why waiting is the riskiest strategy of all.',
        readTime: '9 min',
        image: 'assets/images/acceleration_gap.png'
    },
    {
        slug: '2026-02-possibility-stack',
        title: 'The Possibility Stack: Why "We Can Do Anything" Is the Wrong Promise',
        date: '2026-02-09',
        publishDate: '2026-02-09',
        excerpt: 'The most dangerous promise in AI is "we can make it do anything." Not because it\'s false—it\'s increasingly true. But because it sets up a collision between infinite technical possibility and finite organizational capacity.',
        readTime: '10 min',
        image: 'assets/images/possibility_stack.png'
    },
    {
        slug: '2026-01-fda-ema-ai-guidance',
        title: '10 Principles, Zero Excuses: What FDA/EMA\'s AI Guidance Actually Means',
        date: '2026-01-21',
        publishDate: '2026-01-21',
        excerpt: 'FDA and EMA just released joint guidance on AI in drug development. Ten principles. Zero ambiguity. The regulatory uncertainty excuse just evaporated—here\'s what it means for your organization.',
        readTime: '12 min',
        image: 'assets/images/regulatory_runway.png'
    },
    {
        slug: '2025-11-on-change-release',
        title: 'On Change is Live',
        date: '2025-11-19',
        publishDate: '2025-11-19',
        excerpt: 'After watching 300+ transformations, I wrote the book I wish existed at Day 45—when doubt peaks and most transformations die. On Change is live today.',
        readTime: '5 min',
        image: 'assets/images/On_Change_Cover_Kindle.jpg'
    },
    {
        slug: '2026-01-agents-and-velocity',
        title: 'Agents and the Speed of Development',
        date: '2026-01-19',
        publishDate: '2026-01-19',
        excerpt: 'Anthropic released new tools connecting Claude to life science databases. My first thought wasn\'t "cool, let\'s check it out" but "cool, I should be able to do that too." Two hours later, I had seven connectors in place.',
        readTime: '8 min',
        image: 'assets/images/stopwatch_scientist.jpeg'
    },
    {
        slug: '2026-01-compassionate-revolutionary',
        title: 'The Compassionate Revolutionary: Why You Don\'t Have to Choose Between Speed and Humanity',
        date: '2026-01-13',
        publishDate: '2026-01-13',
        excerpt: 'The leader who sees 95% waste with perfect clarity AND feels the human cost with perfect empathy—they\'re not different people. They\'re the same person, holding both truths simultaneously. That\'s the compassionate revolutionary.',
        readTime: '12 min',
        image: 'assets/images/balanced_scales.png'
    },
    {
        slug: '2026-01-transformation-failure',
        title: 'Why Your Successful 90-Day Transformation Will Fail in 18 Months',
        date: '2026-01-06',
        publishDate: '2026-01-06',
        excerpt: 'Twelve successful Rocks over eighteen months. Protocol amendments from 42 days to 28 hours. Then everything regressed. This is the Sustainability Gap—and why most transformations fail long after they \'succeed.\'',
        readTime: '14 min',
        image: 'assets/images/eroding_cliff.png'
    },
    {
        slug: '2025-12-day-45',
        title: 'Day 45: The Moment Every Transformation Almost Dies (And How to Survive It)',
        date: '2025-12-30',
        publishDate: '2025-12-30',
        excerpt: 'The timeline is slipping. Key people have been pulled away. Pilot results are good but not spectacular. Sarah, your Rock Owner, just asked for \'a conversation about scope.\' Welcome to Day 45—the moment every transformation almost dies.',
        readTime: '13 min',
        image: 'assets/images/storm_approaching.png'
    },
    {
        slug: '2025-12-coalition-72-hours',
        title: 'How to Build a Change Coalition in 72 Hours (While Your Competitors Spend 6 Months)',
        date: '2025-12-23',
        publishDate: '2025-12-23',
        excerpt: 'Traditional stakeholder mapping takes six months. You have 72 hours from Rock assignment to launch. Here\'s how to build a change coalition that protects your transformation—before you need it.',
        readTime: '11 min',
        image: 'assets/images/connecting_network.png'
    },
    {
        slug: '2025-12-three-categories',
        title: 'The Three Categories Every Person Falls Into During Transformation (And What You Owe Each One)',
        date: '2025-12-16',
        publishDate: '2025-12-16',
        excerpt: 'When AI and automation eliminate roles, every person falls into one of three categories. What you owe each one determines whether your transformation succeeds or fails—and whether you\'re remembered as a leader or a coward.',
        readTime: '13 min',
        image: 'assets/images/three_doors.png'
    },
    {
        slug: '2025-12-reading-resistance',
        title: 'Your CMC Team Isn\'t Blocking You—They\'re Trying to Save Your Ass',
        date: '2025-12-09',
        publishDate: '2025-12-09',
        excerpt: 'A VP almost fired her entire CMC team for \'blocking\' transformation. Twenty minutes later, she discovered they were trying to save her from a manufacturing shutdown. Resistance is information—if you know how to listen.',
        readTime: '12 min',
        image: 'assets/images/warning_beacon.png'
    },
    {
        slug: '2025-12-change-management-tax',
        title: 'The $900 Billion Change Management Tax (And Why Speed Isn\'t the Enemy)',
        date: '2025-12-02',
        publishDate: '2025-12-02',
        excerpt: 'McKinsey data shows $900B wasted on failed digital transformations. The myth: choose between speed and change management. The reality: bad change management slows you down, good change management accelerates transformation.',
        readTime: '11 min',
        image: 'assets/images/burning_money.png'
    },
    {
        slug: '2025-11-i-lied-to-you',
        title: 'I Lied to You About Organizational Transformation',
        date: '2025-11-25',
        publishDate: '2025-11-25',
        excerpt: 'I wrote The Velocity Framework as if transformation were purely mechanical. I knew better. This is the confession about what was missing—and why you needed the anger before the empathy.',
        readTime: '10 min',
        image: 'assets/images/removed_mask.png'
    },
    {
        slug: '2025-11-kill-the-redlines',
        title: 'Kill the Redlines',
        date: '2025-11-17',
        publishDate: '2025-11-17',
        excerpt: 'It\'s 10 PM on a Thursday. You\'re on email round 17, negotiating an NDA that\'s 98% identical to the last 50. Nine hours on a document that will never be read again. And this isn\'t unusual. This is Thursday.',
        readTime: '13 min',
        image: 'assets/images/racing_yacht.png'
    },
    {
        slug: '2025-11-the-capability-engine',
        title: 'The Capability Engine',
        date: '2025-11-10',
        publishDate: '2025-11-10',
        excerpt: 'It\'s Tuesday, 9:15 AM. Your new hire is sitting in reception. No laptop. No access badge. Six hours of coordination that requires zero HR expertise. And this isn\'t unusual. This is Tuesday.',
        readTime: '10 min',
        image: 'assets/images/song_bird.png'
    },
    {
        slug: '2025-11-the-continuous-close',
        title: 'The Continuous Close',
        date: '2025-11-03',
        publishDate: '2025-11-03',
        excerpt: 'It\'s 8 PM on a Tuesday. You\'re searching for a $47,000 variance. Another missed family dinner. Four hours to find a mistake that took four seconds to make. The worst part? Next month, everything you\'re doing tonight will be worthless.',
        readTime: '11 min',
        image: 'assets/images/beans.png'
    },
    {
        slug: '2025-10-its-great-escape',
        title: 'IT\'s Great Escape',
        date: '2025-10-27',
        publishDate: '2025-10-27',
        excerpt: 'Your ticket queue has 47 requests. Your team works nights and weekends. You\'re not building anymore—you\'re drowning. Here\'s the truth: In the Velocity age, your survival depends on making most of what you do today unnecessary.',
        readTime: '12 min',
        image: 'assets/images/walkway.png'
    },
    {
        slug: '2025-10-from-friction-to-velocity',
        title: 'From Friction to Velocity: How Your Support Functions Can Make You Accelerate',
        date: '2025-10-20',
        publishDate: '2025-10-20',
        excerpt: 'Most organizations operate at 5% efficiency. Not because people aren\'t working hard, but because 95% of their energy goes into overcoming internal friction. What if the very functions we built to manage complexity are actually creating it?',
        readTime: '8 min',
        image: 'assets/images/hamster.jpg'
    },
    {
        slug: '2025-10-the-bio-tech-stack',
        title: 'The Bio Tech Stack: Golden Paths for Every Biotech',
        date: '2025-10-06',
        publishDate: '2025-10-06 14:00:00',
        excerpt: '80% of biotech operations follow predictable patterns. We\'re all special snowflakes doing identical administrative work. Stop rebuilding these processes from scratch and start assembling your Bio Tech Stack.',
        readTime: '7 min',
        image: 'assets/images/techstack.png'
    },
    {
        slug: '2025-10-platos-dialogue-on-agi',
        title: 'Plato\'s Dialogue on AGI',
        date: '2025-10-08',
        publishDate: '2025-10-08',
        excerpt: 'Socrates would have laughed at our AGI debates. While we argue about whether AI is "truly intelligent," we\'re missing what\'s actually happening - and making the same philosophical error ancient Athens already solved.',
        readTime: '9 min',
        image: 'assets/images/Socrates.png'
    },
    {
        slug: '2025-10-operationalizing-velocity-os',
        title: 'Operationalizing Velocity OS: From Committee Speed to Continuous Speed',
        date: '2025-10-13',
        publishDate: '2025-10-13',
        excerpt: 'The Velocity Operating System isn\'t philosophy - it\'s mechanics. Five core components that work together to eliminate organizational friction and move from committee speed to continuous speed.',
        readTime: '10 min',
        image: 'assets/images/switchboard.png'
    },
    {
        slug: '2025-09-velocity-os',
        title: 'Velocity OS: The DNA of an Accelerating Biotech',
        date: '2025-09-23',
        excerpt: 'It wasn\'t the 6.8-year development timeline. It was the parking lot at 5:30 PM. Half empty. If everyone\'s here at 9 PM, we\'ve designed our organization wrong.',
        readTime: '8 min',
        image: 'assets/images/Formula1.png'
    },
    {
        slug: '2025-09-the-velocity-foundry',
        title: 'The Velocity Foundry',
        date: '2025-09-16',
        excerpt: 'How is it that my teenager can build apps faster than our IT department? Welcome to biotech\'s uncomfortable truth about the new reality of software creation.',
        readTime: '7 min',
        image: 'assets/images/VelocityFoundry.jpg'
    },
    {
        slug: '2025-09-when-speed-is-the-path-to-compliance',
        title: 'When Speed Is the Path to Compliance',
        date: '2025-09-09',
        excerpt: 'The most compliant trial I ever saw had 500 protocol deviations. What if moving faster IS how we ensure compliance - when we move smart?',
        readTime: '6 min',
        image: 'assets/images/rapids.png'
    },
    {
        slug: '2025-09-when-speed-is-everything',
        title: 'When Speed Is Everything',
        date: '2025-09-02',
        excerpt: 'Every day a drug sits in development is a day someone doesn\'t get better. In biotech\'s AI-powered future, velocity has become as fundamental as funding.',
        readTime: '7 min',
        image: 'assets/images/congestion.png'
    }
];

// Note: Posts are displayed newest first (sorted by date)