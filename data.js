// ============================================================
//  data.js  —  All 110 platforms  —  CLEAN VERSION
//  IMPORTANT: Load this WITHOUT defer in index.html
//  <script src="data.js"></script>
//  <script src="scripts.js"></script>
// ============================================================

const categories = [

  { name:"Security & Justice", description:"Platforms that help keep people safe, protect rights, and make justice easier for everyone.",
    platforms:[
      { name:"SafeNation",    tag:"Public Safety & Emergency Reporting",  status:"Active / Growing" },
      { name:"JusticeNow",   tag:"Justice for Every Citizen",             status:"Coming Soon" },
      { name:"LegalSure",    tag:"Your Law, Your Shield",                 status:"Coming Soon" },
      { name:"LawSimple",    tag:"Law Without Confusion",                 status:"Coming Soon" },
      { name:"JudicialBar",  tag:"Where Justice Connects Digitally",      status:"Coming Soon" },
      { name:"CyberNet",     tag:"Securing the Digital Nation",           status:"Coming Soon" },
      { name:"DigitalRights",tag:"Your Data, Your Right",                 status:"Coming Soon" },
      { name:"LawSimplify",  tag:"Makes complex laws simple for all",     status:"Coming Soon" }
    ]},

  { name:"Business & Economy", description:"Platforms that support businesses, jobs, trade, and money flow across Nigeria.",
    platforms:[
      { name:"TradeCentre",      tag:"Where Commerce Meets Opportunity",   status:"Coming Soon" },
      { name:"RetaileX",         tag:"The Future of Retail",               status:"Coming Soon" },
      { name:"BusinessMap",      tag:"Mapping Every Business",             status:"Coming Soon" },
      { name:"FinanceHub",       tag:"Connecting Money, Markets & People", status:"Coming Soon" },
      { name:"RemiteX",          tag:"Sending Money Without Borders",      status:"Coming Soon" },
      { name:"DigitalPays Hub",  tag:"Powering Digital Money",             status:"Coming Soon" },
      { name:"HausaWealth",      tag:"Empowering Hausa Prosperity",        status:"Coming Soon" },
      { name:"EasternWealth",    tag:"Building Eastern Prosperity",        status:"Coming Soon" },
      { name:"WesternWealth",    tag:"Driving Western Growth",             status:"Coming Soon" },
      { name:"NigerDeltaWealth", tag:"Empowering Niger Delta Prosperity",  status:"Coming Soon" },
      { name:"NigerBenueWealth", tag:"Uniting Middle Belt Prosperity",     status:"Coming Soon" },
      { name:"WorkGlobal",       tag:"Work Without Borders",               status:"Coming Soon" }
    ]},

  { name:"Youth", description:"Platforms created for young Nigerians to learn, grow skills, find opportunities, and build the future.",
    platforms:[
      { name:"YouthSpace",        tag:"Building Nigeria's Future in Space",    status:"Coming Soon" },
      { name:"SpaceKids",         tag:"Exploring Space the Fun Way",           status:"Coming Soon" },
      { name:"YouthEmploy",       tag:"Tackling Unemployment",                 status:"Coming Soon" },
      { name:"Iboprentice",       tag:"Training, Skills, Building the Future", status:"Coming Soon" },
      { name:"Naijy GameCraft",   tag:"Play. Build. Invent.",                  status:"Coming Soon" },
      { name:"Naijy ScienceTech", tag:"Learn. Experiment. Build the future.",  status:"Coming Soon" }
    ]},

  { name:"Education & Leadership", description:"Platforms that improve learning, connect schools, and help develop future leaders.",
    platforms:[
      { name:"EducaHub",         tag:"Education by Everyone, for Everyone",  status:"Coming Soon" },
      { name:"VersitiesConnect", tag:"Connecting Campus Life Digitally",      status:"Coming Soon" },
      { name:"LeadersArena",     tag:"Training Tomorrow's Leaders Today",     status:"Coming Soon" },
      { name:"DiasporaLink",     tag:"Connecting Naijy Talents Worldwide",    status:"Coming Soon" }
    ]},

  { name:"Health", description:"Platforms that support healthcare, medical knowledge, and better health services for citizens.",
    platforms:[
      { name:"TeleMedic",     tag:"Healthcare Without Distance",  status:"Coming Soon" },
      { name:"HealthPro",     tag:"Prevention Before Cure",       status:"Coming Soon" },
      { name:"PharmaBiotech", tag:"Where Science Meets Health",   status:"Coming Soon" },
      { name:"RetireesHub",   tag:"Care After Service",           status:"Coming Soon" },
      { name:"SendMe",        tag:"Help, Instantly",              status:"Coming Soon" }
    ]},

  { name:"Agriculture", description:"Platforms helping farmers grow food, access markets, and improve farming across the country.",
    platforms:[
      { name:"AgricoNet",   tag:"Connecting Farms to Markets",                      status:"Coming Soon" },
      { name:"FarmConet",   tag:"Powering Farmers Digitally",                       status:"Coming Soon" },
      { name:"FoodHub",     tag:"Healthy Food, Healthy Nation",                     status:"Coming Soon" },
      { name:"FulaConnect", tag:"Herding, Culture, Social Network & Digital Market",status:"Coming Soon" }
    ]},

  { name:"Energy & Environment", description:"Platforms focused on energy resources, environmental protection, and sustainable development.",
    platforms:[
      { name:"360Energy",        tag:"Powering the Nation Digitally",  status:"Coming Soon" },
      { name:"Petro360",         tag:"Energy Knowledge for All",        status:"Coming Soon" },
      { name:"OilKnowledge Hub", tag:"Energy Knowledge for Citizens",   status:"Coming Soon" },
      { name:"Environmental",    tag:"Act for the Earth",               status:"Coming Soon" },
      { name:"WaterConnect",     tag:"Clean Water, Healthy Life",       status:"Coming Soon" }
    ]},

  { name:"Housing", description:"Platforms helping people find homes, manage property, and build smarter cities.",
    platforms:[
      { name:"HomeConnect",   tag:"Connecting Homes & People",           status:"Coming Soon" },
      { name:"PropertyHub",   tag:"Property Made Simple",                status:"Coming Soon" },
      { name:"SmartCities",   tag:"Building the Cities of Tomorrow",     status:"Coming Soon" },
      { name:"UrbanDataGrid", tag:"Data for Smarter Cities",             status:"Coming Soon" },
      { name:"MoveCity",      tag:"Smarter Movement for Smarter Cities", status:"Coming Soon" }
    ]},

  { name:"Culture & Faith", description:"Platforms celebrating Nigerian culture, traditions, faith communities, and national identity.",
    platforms:[
      { name:"EthnicHub",         tag:"Preserving Identity Digitally",       status:"Coming Soon" },
      { name:"TransEthnic",       tag:"Connecting Families Beyond Tribe",    status:"Coming Soon" },
      { name:"NigerianCreed",     tag:"One Nation, One Identity",            status:"Coming Soon" },
      { name:"DeenConnect",       tag:"Faith, Knowledge, Unity",             status:"Coming Soon" },
      { name:"ChurchTestimonies", tag:"Sharing Evidence of Faith",           status:"Coming Soon" },
      { name:"RiseNigeria",       tag:"Rising for Nation, Rising for Self",  status:"Coming Soon" }
    ]},

  { name:"Media", description:"Platforms for storytelling, creativity, digital content, and sharing Nigerian voices.",
    platforms:[
      { name:"MediaWatch", tag:"Watching the Media for the People",                   status:"Coming Soon" },
      { name:"CreativeX",  tag:"Where Creativity Becomes Industry",                   status:"Coming Soon" },
      { name:"FilmHub",    tag:"Stories to the World",                                status:"Coming Soon" },
      { name:"WifeyMet",   tag:"How I Met My Husband - And I finally did",            status:"Coming Soon" },
      { name:"HusbyMet",   tag:"How I Met My Wife - And Life Till Now",               status:"Coming Soon" },
      { name:"JJCstory",   tag:"The Newcomer's Story - Journey, Mistakes and Fun",    status:"Coming Soon" }
    ]},

  { name:"SporTertainment", description:"Platforms combining sports, gaming, entertainment, and talent discovery.",
    platforms:[
      { name:"EntertainmentX", tag:"Entertainment, Reimagined",     status:"Coming Soon" },
      { name:"CelebHub",       tag:"Leveraging Fame for Impact",    status:"Coming Soon" },
      { name:"SportsEco",      tag:"Where Sports Lives Digitally",  status:"Coming Soon" },
      { name:"GameArena",      tag:"Play. Predict. Win.",           status:"Coming Soon" }
    ]},

  { name:"Hospitality", description:"Platforms that promote travel, tourism, events, and experiences across Nigeria.",
    platforms:[
      { name:"TraveleX",   tag:"Explore. Connect. Experience",  status:"Coming Soon" },
      { name:"Hotels360",  tag:"Discover. Book. Experience",    status:"Coming Soon" },
      { name:"EventsHub",  tag:"Discover What's Happening",     status:"Coming Soon" },
      { name:"Tourism360", tag:"Experience the Nation",         status:"Coming Soon" }
    ]},

  { name:"Technology", description:"Platforms driving digital innovation, technology development, and Nigeria's tech ecosystem.",
    platforms:[
      { name:"NaMyArea",       tag:"Your Community, Digitally Connected",                    status:"Coming Soon" },
      { name:"BlockchainNet",  tag:"Powering the Digital Economy",                           status:"Coming Soon" },
      { name:"InnovateLab",    tag:"Where Ideas Become Solutions",                           status:"Coming Soon" },
      { name:"BreaktruAfrica", tag:"Africa's Success, Amplified",                            status:"Coming Soon" },
      { name:"DigitalNation",  tag:"One Nation, One Digital Network",                        status:"Coming Soon" },
      { name:"RobotAI",        tag:"Nigeria's AI & Robotics Future",                         status:"Coming Soon" },
      { name:"DefenTech",      tag:"Nigeria's Defense Industry & Military Technology Platform", status:"Coming Soon" },
      { name:"RoboTech",       tag:"Building the Future",                                    status:"Coming Soon" },
      { name:"LabSpace",       tag:"Where Ideas Become Reality",                             status:"Coming Soon" }
    ]},

  { name:"Governance", description:"Platforms that make government more open, transparent, and connected with citizens.",
    platforms:[
      { name:"CivService",    tag:"Serving Smarter, Serving Better",          status:"Coming Soon" },
      { name:"GomentWatch",   tag:"Power to the People to Watch Power",       status:"Coming Soon" },
      { name:"PolicyDecoded", tag:"Government Made Simple",                   status:"Coming Soon" },
      { name:"ElectConnect",  tag:"Connecting the Electoral System",          status:"Coming Soon" },
      { name:"CivicPolitics", tag:"Where Citizens Meet Power",                status:"Coming Soon" },
      { name:"LegacyHub",     tag:"Your Legacy, Secured Forever",             status:"Coming Soon" },
      { name:"LocaGov",       tag:"Governance at Your Doorstep",              status:"Coming Soon" },
      { name:"EasyGov",       tag:"Government, Simplified",                   status:"Coming Soon" }
    ]},

  { name:"Industry", description:"Platforms supporting manufacturing, logistics, transportation, and national industrial growth.",
    platforms:[
      { name:"SteelHub",       tag:"Making Engineering Fun & Accessible",  status:"Coming Soon" },
      { name:"MakersHub",      tag:"Building What Builds the Nation",      status:"Coming Soon" },
      { name:"MarineHub",      tag:"Powering the Blue Economy",            status:"Coming Soon" },
      { name:"MinesHub",       tag:"Unlocking Natural Wealth",             status:"Coming Soon" },
      { name:"Transport360",   tag:"Moving People, Goods & Economies",     status:"Coming Soon" },
      { name:"LogisticsChain", tag:"Moving Supply Seamlessly",             status:"Coming Soon" },
      { name:"AirspaceHub",    tag:"Naijy Aviation & Aerospace Future",    status:"Coming Soon" },
      { name:"IndusLead",      tag:"Powering National Industry",           status:"Coming Soon" },
      { name:"InvestUp",       tag:"Where Capital Meets Opportunity",      status:"Coming Soon" }
    ]},

  { name:"Say Something", description:"Simple platforms where people can quickly share thoughts, ideas, and opinions.",
    platforms:[
      { name:"FlowStream", tag:"See thoughts as they flow",  status:"Coming Soon" },
      { name:"FlashBoard", tag:"Quick ideas, gone fast",     status:"Coming Soon" },
      { name:"HideIt",     tag:"Hide, Say Before You Do",    status:"Coming Soon" },
      { name:"ProjectX",   tag:"Ideas Into Action",          status:"Coming Soon" },
      { name:"NGOHub",     tag:"Connecting Impact",          status:"Coming Soon" }
    ]}

];


// ============================================================
//  SPECIAL PLATFORMS  (4)
// ============================================================
const corePlatforms = [
  { name:"MediaLane",  line1:"National Media Visibility & Public Record",      line2:"Expanding the Fourth Estate",       status:"Coming Soon" },
  { name:"ProfsLane",  line1:"Professorial Excellence & Knowledge Impact",     line2:"From classrooms to global impact",  status:"Coming Soon" },
  { name:"InfluenceX", line1:"Nigerian Influencers & Creators Network",        line2:"Influence, united and amplified",   status:"Coming Soon" },
  { name:"LeaderTics", line1:"Political Visibility & Leadership Legacy",       line2:"Politics, records and Public trust",status:"Coming Soon" }
];


// ============================================================
//  STRATEGIC PLATFORMS  (6)
// ============================================================
const strategicPlatforms = [
  { name:"NaijyShield",    line1:"National Security & Protection Platform",        line2:"Protecting Nigeria, One Step Ahead",   status:"Coming Soon" },
  { name:"NaijyPulse",     line1:"Real-Time National Monitoring & Smart Cities",   line2:"Seeing the Nation in Real Time",        status:"Coming Soon" },
  { name:"NaijyPolicy",    line1:"Policy, Governance & Public Decisions Platform", line2:"Governance in the open",                status:"Coming Soon" },
  { name:"RevenueMap",     line1:"Nigeria Public Revenue Map",                     line2:"See where Nigeria's money comes from",  status:"Coming Soon" },
  { name:"ExpenditureMap", line1:"National Expenditure Map of Nigeria",            line2:"Transparent National Spending",         status:"Coming Soon" },
  { name:"InfraAssets",    line1:"National Assets & Infrastructure Reality Map",   line2:"What exists. Where it is. What works", status:"Coming Soon" }
];


// ============================================================
//  BUILD FLAT LIST  (used by platform.html)
// ============================================================
const platforms = [];

categories.forEach(function(cat) {
  cat.platforms.forEach(function(p) {
    platforms.push({
      key:p.name.toLowerCase().replace(/\s+/g,""), name:p.name, category:cat.name,
      status:p.status||"Coming Soon", tagline:p.tag||"",
      problem:[], who:[], does:[], features:[], how:[], impact:[], nigeria:[], investors:[], future:[], subPlatforms:[]
    });
  });
});

corePlatforms.forEach(function(p) {
  platforms.push({
    key:p.name.toLowerCase().replace(/\s+/g,""), name:p.name, category:"Special Platforms",
    status:p.status||"Coming Soon", tagline:(p.line1||"")+(p.line2?" - "+p.line2:""), intro:"",
    problem:[], who:[], does:[], features:[], how:[], impact:[], nigeria:[], investors:[], future:[], subPlatforms:[]
  });
});

strategicPlatforms.forEach(function(p) {
  platforms.push({
    key:p.name.toLowerCase().replace(/\s+/g,""), name:p.name, category:"Strategic Platforms",
    status:p.status||"Coming Soon", tagline:(p.line1||"")+(p.line2?" - "+p.line2:""), intro:"",
    problem:[], who:[], does:[], features:[], how:[], impact:[], nigeria:[], investors:[], future:[], subPlatforms:[]
  });
});


// ============================================================
//  FULL CONTENT — SAFENATION
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="safenation";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SafeNation is Nigeria's flagship public safety and emergency reporting platform — the first responder in the digital space. Built to bridge the critical gap between citizens in distress and the agencies empowered to help them, SafeNation transforms how emergencies are reported, tracked, and resolved across the nation. Whether it's a crime in progress, a fire outbreak, a flood, or a security threat, SafeNation puts the power to act in every Nigerian's hands — and ensures the right people respond, fast.";
  p.problem   = ["Citizens don't know who to contact in urgent situations.","Emergency response is often delayed due to uncoordinated reporting channels.","No single system centralizes all public safety reports.","Authorities lack real-time information.","Many incidents go unreported due to fear or complexity.","Poor data makes planning future emergencies difficult."];
  p.who       = ["Citizens reporting emergencies quickly","Security agencies needing real-time data","Government planners","Community leaders","First responders & volunteers"];
  p.does      = ["Submit emergency reports easily","Connect reports to authorities instantly","Track incidents in real-time","Provide analytics for planning","Send alerts & notifications"];
  p.features  = ["Real-time alerts","Automatic location tracking","User-friendly dashboard","Simple interface","Notification system"];
  p.how       = ["Citizen submits report","System processes urgency","Authorities notified","Updates shared with community","Data stored for analysis"];
  p.impact    = ["Faster emergency response","Increased public trust","Better coordination","Reliable safety data","Nationwide coverage"];
  p.nigeria   = ["Single trusted emergency system","Reduces deadly delays","Strengthens safety infrastructure","Supports data-driven decisions","Builds safer communities"];
  p.investors = ["High demand nationwide","Scalable across all states","Government partnership potential","Telecom integration","Valuable data insights"];
  p.future    = ["Mobile app development","AI threat detection","Rural expansion","Integration with emergency numbers","Smart ecosystem connections"];
  p.subPlatforms = [
    {name:"Emergency System",    tagline:"Real-time emergency reporting & response",   features:["1-tap SOS alert","GPS location sharing","Photo & video upload","Live status tracking","Authority notification"]},
    {name:"Community System",    tagline:"Neighbourhood safety & local coordination",  features:["Community alerts","Local volunteer network","Safety tips & guides","Neighbourhood watch groups","Peer reporting"]},
    {name:"Analytics",           tagline:"Safety data & intelligence for planners",    features:["Incident heatmaps","Response time tracking","Trend reports","Data export for agencies","Predictive risk scoring"]},
    {name:"Missing Persons",     tagline:"Find and report missing people fast",        features:["Missing person alerts","Photo database","Community search network","Agency coordination","Case status updates"]},
    {name:"Disaster Response",   tagline:"Coordinated action during disasters",        features:["Mass alert broadcasts","Evacuation route maps","Resource tracking","Agency task board","Survivor check-in system"]},
    {name:"School Safety",       tagline:"Protecting students and school communities", features:["School incident reporting","Parent alerts","Safe zone mapping","Staff emergency tools","Student check-in"]},
    {name:"Transport Safety",    tagline:"Safer roads, rails and waterways",           features:["Accident reporting","Road hazard alerts","Transport authority links","Real-time traffic safety","Fleet monitoring"]},
    {name:"Anonymous Reporting", tagline:"Report safely without revealing identity",   features:["Identity-free submissions","Encrypted reports","Tip confirmation system","Agency-only access","Whistleblower protection"]}
  ];
})();


// ============================================================
//  FULL CONTENT — JUSTICENOW
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="justicenow";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "JusticeNow is a transformative legal access platform built to ensure that no Nigerian is denied justice because of poverty, ignorance, or delay. By connecting citizens directly to legal aid, case tracking tools, and rights education, JusticeNow tears down the barriers that have kept millions from the justice they deserve. The law is supposed to protect everyone — JusticeNow makes that a reality, not just a written promise.";
  p.problem   = ["People struggle to access justice quickly — processes are slow and confusing.","Many Nigerians cannot afford legal representation or basic guidance.","Cases are frequently delayed or completely ignored by the system.","Corruption reduces public trust in the justice system deeply.","Citizens lack awareness of their most basic legal rights.","No centralized platform connects people to legal help fast."];
  p.who       = ["Citizens seeking justice who cannot afford private lawyers","Victims of injustice, abuse, fraud, and official misconduct","Lawyers and legal bodies willing to provide pro bono services","Government agencies and human rights organizations","Community leaders helping constituents navigate legal issues"];
  p.does      = ["Connects citizens to free and affordable legal help quickly","Enables fast and verifiable reporting of injustice","Tracks the status of legal cases and court proceedings","Provides step-by-step legal guidance for common situations","Bridges the gap between ordinary people and the formal justice system"];
  p.features  = ["Case tracking system with real-time status updates","Verified lawyer directory and legal support access","Simple complaint and reporting tools for non-lawyers","Guided legal help with plain-language explanations","Notification updates at every stage of the legal process"];
  p.how       = ["User submits complaint or legal issue through the platform","System categorizes the issue and identifies relevant legal bodies","Legal bodies are notified and assigned to the case","Progress is tracked transparently by all parties involved","Regular updates are sent to the user until full resolution"];
  p.impact    = ["Faster justice delivery reduces the suffering caused by delays","Fills the gaps that corruption exploits in the justice chain","Improved public trust in the legal and judicial system","Better legal awareness among ordinary Nigerians","Accessible justice for all — regardless of income or location"];
  p.nigeria   = ["Improves justice access across all 36 states and the FCT","Helps reduce the massive backlog in Nigeria's court system","Supports the rule of law which underpins national development","Protects citizen rights against official abuse and corruption","Strengthens democratic institutions from the grassroots level up"];
  p.investors = ["High national demand from Nigeria's 200M+ citizens","Legal-tech is a proven high-growth investment sector globally","Government collaboration and procurement opportunities","NGO and international human rights organization partnerships","Scalable platform with expanding content and growing user base"];
  p.future    = ["AI legal assistant providing 24/7 basic legal guidance","Mobile-first legal services for rural and low-connectivity areas","Direct integration with Nigerian courts and tribunals","Automated case filing and digital evidence management system","National legal aid network connecting all pro bono lawyers"];
  p.subPlatforms = [
    {name:"Legal Aid",          tagline:"Free and accessible legal support",       features:["Verified lawyer directory","Case guidance tools","Consultation booking","Document assistance","Pro bono network access"]},
    {name:"Court Tracker",      tagline:"Track court cases with ease",             features:["Case status updates","Hearing reminders","Court schedules","Outcome tracking","Filing guidance"]},
    {name:"Rights Education",   tagline:"Know your legal rights",                  features:["Plain-language law guides","Video explainers","Community education content","Awareness campaigns","Local language support"]},
    {name:"Dispute Resolution", tagline:"Resolve conflicts faster",                features:["Mediation system","Community arbitration","Settlement tracking","Peace-building tools","Digital agreements"]},
    {name:"Prison Support",     tagline:"Support inmates and their families",      features:["Inmate location tracking","Legal aid for inmates","Family communication tools","Rehabilitation programs","Release coordination"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LEGALSURE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="legalsure";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LegalSure is Nigeria's most accessible legal education platform — designed to ensure every citizen, student, and small business owner knows their rights and can confidently navigate everyday legal situations. Where the law once felt distant and intimidating, LegalSure makes it personal, practical, and powerful. Because when you know the law, you cannot easily be exploited by it.";
  p.problem   = ["The majority of Nigerians do not understand the laws that govern their lives.","Legal information is hard to access outside of expensive lawyers.","People are regularly exploited because they don't know their rights.","No simple, structured legal education system exists for ordinary people.","Fear of legal processes prevents people from seeking help they deserve.","Low legal awareness creates vulnerability at every level of society."];
  p.who       = ["The general public — every Nigerian deserves legal knowledge","Students at secondary and tertiary levels","Small business owners and market traders","Workers needing to understand their employment rights","Community members and local leaders"];
  p.does      = ["Simplifies legal knowledge into language everyone understands","Provides structured legal education for everyday situations","Offers practical guidance for common legal challenges","Helps people avoid costly legal mistakes before they happen","Improves overall legal awareness and confidence across Nigeria"];
  p.features  = ["Simple legal articles written in plain Nigerian English","Guided step-by-step explanations of legal situations","Interactive learning with quizzes and real-life examples","Searchable legal topic database covering all common issues","Clean, easy-to-use interface optimized for mobile devices"];
  p.how       = ["User selects a legal topic relevant to their situation","System explains the law in simple, clear terms with examples","Real-life scenarios are provided to anchor understanding","User learns, understands, and can apply the knowledge","Optional connection to a legal expert for further guidance"];
  p.impact    = ["Better decision-making because people understand their legal options","Drastically reduced exploitation of the legally ignorant","Increased confidence in dealing with officials and institutions","Improved awareness that strengthens entire communities","Safer society through informed and empowered citizens"];
  p.nigeria   = ["Bridges the enormous legal knowledge gap between elites and ordinary Nigerians","Empowers every citizen to stand up for themselves legally","Supports the justice system by creating legally literate users","Reduces ignorance-based conflicts and exploitation nationwide","Builds an informed, confident, rights-aware Nigerian society"];
  p.investors = ["EdTech + LegalTech combination with dual-sector growth potential","High potential user base — virtually every Nigerian is a target user","Multiple content monetization pathways: ads, premium, subscription","Partnership opportunities with schools, NGOs, and law firms","Scalable platform with low content marginal cost"];
  p.future    = ["Mobile learning app with offline capability for rural users","AI legal tutor providing personalized learning journeys","Voice-based learning for low-literacy users","Local language support: Hausa, Yoruba, Igbo, Pidgin","Legal literacy certification recognized by employers and institutions"];
  p.subPlatforms = [
    {name:"Legal Basics",     tagline:"Core legal concepts simplified",      features:["Simple law guides","Practical examples","Frequently asked questions","Quick legal tips","Downloadable content"]},
    {name:"Workplace Rights", tagline:"Know your employment rights",         features:["Employee rights guide","Contract understanding","Dispute handling tools","Salary & benefits law","Wrongful termination help"]},
    {name:"Business Law",     tagline:"Legal help for entrepreneurs",        features:["Business registration guides","Compliance tips","Tax law basics","Contract guidance","Intellectual property basics"]},
    {name:"Family Law",       tagline:"Understand family legal matters",     features:["Marriage & divorce law","Custody guidance","Inheritance rights","Land & property disputes","Children's rights"]},
    {name:"Consumer Rights",  tagline:"Protect yourself as a buyer",        features:["Refund & returns guide","Fraud awareness","Complaint filing system","Consumer protection guides","Scam identification alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LAWSIMPLE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="lawsimple";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LawSimple strips the complexity from Nigerian law and delivers it in language everyone can understand. From market traders to university students, LawSimple ensures the law is no longer the exclusive language of the elite — it becomes a practical tool for every Nigerian to live, trade, and thrive safely. Confusion about the law is not just inconvenient — it is dangerous. LawSimple removes that danger, one topic at a time.";
  p.problem   = ["Laws in Nigeria are written in complex English inaccessible to most citizens.","Citizens don't know the basic legal protections that apply to their daily lives.","Legal jargon creates fear and discourages people from asserting their rights.","No simple, practical breakdown of everyday laws exists for ordinary people.","Communities suffer preventable harm because of widespread legal ignorance."];
  p.who       = ["Everyday citizens in markets, villages, and cities across Nigeria","Traders, artisans, and informal sector workers","Students at all levels of education","Teachers and community educators","Local government officials and ward leaders"];
  p.does      = ["Translates complex laws into plain, accessible everyday language","Explains government regulations in terms everyone can act on","Provides topic-based legal breakdowns organized by daily life situations","Connects users to relevant guidance, resources, and expert help","Builds lasting legal confidence across all education levels"];
  p.features  = ["Plain-language law library covering all major legal topics","Category-based browsing — find law by your life situation","Audio explanations for low-literacy and accessibility needs","Local language options: Pidgin, Hausa, Yoruba, Igbo","Offline access mode for low-connectivity environments"];
  p.how       = ["User picks a law category related to their daily situation","Simplified explanation is displayed immediately in plain language","Audio option reads the content aloud on request","Practical real-life examples anchor understanding effectively","Related laws and next steps are automatically suggested"];
  p.impact    = ["Citizens know and can confidently assert their legal rights","Reduced exploitation of ordinary people by authorities and officials","Empowered communities who hold their leaders accountable","Fewer wrongful arrests because citizens know their rights","Legal confidence spread to every corner of Nigeria"];
  p.nigeria   = ["Nigeria's complex federal-state legal structure requires clear communication","Rural communities are the most vulnerable to legal exploitation","Reduces police and official abuse through widespread legal awareness","Supports Nigeria's legal reform agenda with an informed citizenry","Strengthens democratic participation through genuine legal understanding"];
  p.investors = ["Massive untapped audience — essentially every Nigerian is a potential user","Language localization creates a strong competitive moat","Government-education sector partnership opportunities","Ad-supported free model with premium certification tiers","Schools and training institutions as sustainable B2B clients"];
  p.future    = ["AI law explainer bot available on WhatsApp and SMS","Full content in Yoruba, Igbo, Hausa, and other major languages","Integration with LegalSure and JusticeNow for end-to-end help","School curriculum integration at secondary level nationwide","WhatsApp daily law tip service reaching millions of Nigerians"];
  p.subPlatforms = [
    {name:"LawInPidgin",     tagline:"Law in everyday Nigerian language",    features:["Pidgin explanations","Street law topics","Audio content","Community examples","Easy share tools"]},
    {name:"LawForStudents",  tagline:"Legal education for youth",            features:["School curriculum content","Student law guides","Exam-relevant content","Youth legal rights","Career in law guidance"]},
    {name:"LawForBusiness",  tagline:"Business law in plain terms",          features:["Trading laws simplified","Market regulations","Tax basics","Contract guide","Business rights"]},
    {name:"LawForFamilies",  tagline:"Family and home legal guide",          features:["Marriage law basics","Property rights","Children's rights","Land dispute guidance","Inheritance law"]},
    {name:"LawUpdates",      tagline:"Stay current on new laws",             features:["New legislation alerts","Policy update summaries","Government directives","Expert plain-language analysis","Impact on everyday citizens"]}
  ];
})();


// ============================================================
//  FULL CONTENT — JUDICIALBAR
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="judicialbar";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "JudicialBar is the digital bridge between Nigeria's legal professionals, courts, and the citizens who depend on them. It digitizes the legal profession and brings court processes into the modern era — connecting lawyers to clients, courts to citizens, and the entire legal ecosystem into one transparent, efficient digital network that works for everyone.";
  p.problem   = ["Courts are physically and practically inaccessible to many Nigerian citizens.","Lawyers and potential clients struggle to find and connect with each other.","Court schedules are unpredictable and poorly communicated to all parties.","The legal profession has very low digital presence and modern infrastructure.","Judicial processes lack transparency, fuelling distrust and enabling corruption."];
  p.who       = ["Lawyers and barristers at all levels of practice across Nigeria","Judges, magistrates, and all judicial officers","Law students and recent call-to-bar graduates","Courts, tribunals, and arbitration bodies","Citizens seeking verified and qualified legal professionals"];
  p.does      = ["Digitizes the lawyer-client connection with verified professional profiles","Provides court scheduling and hearing tracking tools for all parties","Lists and certifies legal professionals across all 36 states","Supports bar association management and member verification","Tracks judicial proceedings for accountability and public transparency"];
  p.features  = ["Verified lawyer directory with specialization filters and ratings","Court schedule tracker with automated hearing reminders","Digital case filing and secure document management tools","Bar association member portal with CPD tracking","Encrypted client-lawyer messaging system"];
  p.how       = ["User searches for a lawyer or court by specialization and location","System shows verified and rated professional profiles","Appointment or case engagement is booked digitally","Case is filed, tracked, and updated on the platform","Outcomes are logged and accessible to all authorized parties"];
  p.impact    = ["Far more accessible legal services for ordinary Nigerians everywhere","Faster court scheduling and significantly reduced unnecessary adjournments","Transparent judicial process rebuilds vital public trust","A stronger, better-organized bar association across Nigeria","A modernized legal sector increasingly attractive to investment"];
  p.nigeria   = ["Nigeria's legal system desperately needs modern digital infrastructure","Supports relief of the severe court congestion crisis nationwide","Makes lawyer accessibility equal across all income levels","Builds the judicial transparency that Nigeria's democracy demands","Strengthens rule of law — the foundation every sector of the economy needs"];
  p.investors = ["Legal sector transformation is a long-term institutional opportunity","Government and judiciary digitization contracts readily available","Subscription model for individual lawyers and law firms","NGO legal access grants and international rule-of-law funding","Long-term institutional revenue from court system integration"];
  p.future    = ["Online court hearings and virtual proceedings support platform","E-filing integration for all Nigerian courts at federal and state level","AI case prediction and deep legal research tools","Complete digital legal records and searchable judgment database","Integration with the Federal Ministry of Justice information systems"];
  p.subPlatforms = [
    {name:"LawyerDirectory", tagline:"Find verified lawyers fast",           features:["Verified lawyer profiles","Specialization filters","Ratings & reviews","Appointment booking","Fee transparency"]},
    {name:"CourtSchedule",   tagline:"Track court dates and hearings",       features:["Case calendar","Hearing reminders","Judge allocation info","Court locations","Adjournment alerts"]},
    {name:"BarAssociation",  tagline:"Digital bar management tools",         features:["Member portal","License tracking","Disciplinary records","CPD tracking","Events calendar"]},
    {name:"LegalFiling",     tagline:"Digital case submission tools",        features:["E-filing tools","Document upload","Submission tracking","Receipt generation","Status updates"]},
    {name:"JudicialWatch",   tagline:"Transparency in the judiciary",        features:["Judgment records","Sentencing data","Court performance metrics","Public access portal","Accountability reports"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CYBERNET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="cybernet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "CyberNet is Nigeria's frontline digital security platform — protecting citizens, businesses, and government systems from the growing wave of cybercrime, fraud, and digital threats. In a nation rapidly moving online, CyberNet ensures that digital growth does not come at the cost of digital safety. Every Nigerian should be able to access the internet without fear — CyberNet makes that possible.";
  p.problem   = ["Cybercrime is rising at alarming rates throughout Nigeria.","Citizens routinely fall victim to online fraud, romance scams, and phishing.","Businesses are vulnerable to cyber attacks with little recourse available.","Government systems lack adequate cybersecurity protection infrastructure.","Very low cybersecurity awareness exists among the general population.","Nigeria's reputation as a cybercrime hotspot damages the national economy."];
  p.who       = ["Individual internet users needing digital protection and guidance","Businesses and SMEs vulnerable to digital attacks and fraud","Government agencies managing critical digital infrastructure","Banks, fintechs, and all financial institutions","Tech companies, developers, and digital entrepreneurs"];
  p.does      = ["Enables reporting and tracking of cybercrime incidents nationally","Educates users on digital safety and online security best practices","Connects victims to cyber response units and expert support","Monitors and broadcasts cyber threats in near real time","Builds a sustained national culture of cybersecurity awareness"];
  p.features  = ["Cybercrime reporting tool with evidence upload capability","Threat alerts and security advisories for individuals and businesses","Digital safety courses and certification programs for all levels","Known fraud and scam database with easy search function","Incident response support connecting victims to cybersecurity experts"];
  p.how       = ["User reports a cyber incident through the secure platform","System logs, categorizes, and identifies the threat type accurately","Relevant agencies and response teams are immediately notified","User is guided on concrete next steps for protection and recovery","Case tracked to resolution; data enriches national threat intelligence"];
  p.impact    = ["Reduced financial losses from cybercrime across Nigeria","Better-informed digital citizens who identify and avoid scams","Stronger cyber defenses for businesses and government systems","Faster response to digital crimes and cyber attacks","Nigeria's digital safety reputation improves globally"];
  p.nigeria   = ["Nigeria is among Africa's most targeted nations for cybercrime","Billions of naira are lost to internet fraud and scams annually","Nigeria's fast-growing digital economy requires a robust security foundation","Banks and fintechs urgently need shared cyber support infrastructure","Government digitization programs demand security built in from the start"];
  p.investors = ["Rapidly growing cybersecurity market worldwide and within Nigeria","Government and large enterprise contracts available immediately","Training, certification, and awareness program revenue streams","Insurance-tech partnerships for cyber incident coverage","International cybersecurity alliances and joint venture opportunities"];
  p.future    = ["AI-powered national threat detection and prevention system","National cyber incident response center full integration","Blockchain-based fraud tracking and prevention network","Youth cybersecurity talent training and career pipeline","Continental cyber cooperation hub for West Africa"];
  p.subPlatforms = [
    {name:"CyberReport",    tagline:"Report digital crimes instantly",        features:["Incident reporting forms","Evidence upload system","Agency routing","Case tracking","Victim support links"]},
    {name:"FraudAlert",     tagline:"Real-time fraud warnings",               features:["Known scam database","Alert broadcasts","Pattern detection","Victim testimonies","Prevention tips"]},
    {name:"CyberLearn",     tagline:"Digital safety education for all",       features:["Security awareness courses","Phishing awareness","Password safety guide","Device protection tips","Certification program"]},
    {name:"ThreatMonitor",  tagline:"Live cyber threat intelligence",         features:["National threat map","Vulnerability alerts","Agency coordination","Industry advisories","Trend reports"]},
    {name:"CyberResponse",  tagline:"Incident response support",              features:["Expert matching","Recovery guidance","Legal support links","Evidence preservation","Insurance referrals"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DIGITALRIGHTS
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="digitalrights";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DigitalRights is Nigeria's dedicated platform for protecting the digital privacy, freedom, and rights of every citizen in an increasingly connected world. As data becomes the new currency of the digital age, DigitalRights ensures Nigerians know — and can actively defend — what belongs to them. Your data, your online activities, and your freedom of expression are rights, not privileges. DigitalRights is your shield.";
  p.problem   = ["Citizens' personal data is collected and used without informed consent.","Digital rights violations are rarely reported and almost never resolved.","Very low awareness of Nigeria's Data Protection Regulation (NDPR).","Businesses and apps exploit user information with near-total impunity.","Government surveillance increasingly lacks adequate public oversight.","Journalists and activists face digital threats with no structured support system."];
  p.who       = ["All Nigerian internet and smartphone users regardless of literacy level","Privacy advocates and digital rights activists","Journalists, bloggers, and online content creators","Businesses that collect and process user personal data","Government and regulatory bodies responsible for digital rights enforcement"];
  p.does      = ["Educates citizens on their digital rights and NDPR legal protections","Enables secure reporting of digital rights violations","Monitors and supports data protection compliance by businesses","Connects citizens to digital rights lawyers and qualified advocates","Advocates for stronger and better-enforced digital laws in Nigeria"];
  p.features  = ["Digital rights violation reporting system with full case tracking","Data protection education library and interactive guides","Privacy audit tools for individuals and organizations","Expert lawyer connection for rights violation cases","Policy tracker following Nigeria's digital legislation in real time"];
  p.how       = ["User learns about their digital rights through the education library","Reports a violation through the platform's secure reporting channel","Platform connects the user to the appropriate legal or advocacy expert","Case is logged, tracked, and monitored transparently to resolution","Documented patterns trigger advocacy campaigns and policy recommendations"];
  p.impact    = ["Empowered digital citizens who understand and actively defend their rights","Reduced exploitation of Nigerians' data by apps and digital platforms","Stronger digital privacy laws driven by documented violations","Better business compliance with existing NDPR regulations","Protected freedom of expression for journalists, activists, and citizens"];
  p.nigeria   = ["Nigeria's NDPR needs citizen champions to enforce it meaningfully","Social media and app abuse is rising rapidly and causing real harm","Journalists and activists face increasing digital surveillance threats","Nigeria's fintech boom creates unprecedented personal data risks","Weak enforcement of digital rights needs sustained, organized public pressure"];
  p.investors = ["Privacy technology is a globally growing and high-value investment sector","Compliance consultancy services for businesses across all industries","Training and awareness programs for corporate clients","NGO and civil society organization funding channels","Government regulatory technology partnership opportunities"];
  p.future    = ["National digital rights observatory monitoring violations at scale","AI-powered privacy audit tool for individuals and companies","VPN and secure browsing integration for activist protection","Global digital rights network connection for Nigerian civil society","Legislative reform advocacy platform for stronger digital laws"];
  p.subPlatforms = [
    {name:"PrivacyGuard",     tagline:"Protect your personal data",           features:["Privacy settings guide","App permissions checker","Data request tools","Breach alerts","NDPR guidance"]},
    {name:"RightsReport",     tagline:"Report digital rights violations",     features:["Violation reporting forms","Legal routing system","Case tracking","Anonymous option","Agency alerts"]},
    {name:"DataFreedom",      tagline:"Control your digital footprint",       features:["Data deletion requests","Opt-out tools","Platform audit guides","Rights templates","Consent management"]},
    {name:"DigitalAdvocacy",  tagline:"Campaign for better digital laws",     features:["Policy tracker","Petition tools","Campaign hub","Law update alerts","Coalition building"]},
    {name:"PressShield",      tagline:"Protect journalists and activists",    features:["Secure reporting tools","Digital safety training","Encryption guides","Emergency support","Legal defense network"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LAWSIMPLIFY
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="lawsimplify";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LawSimplify goes deeper than plain language — it turns legal complexity into structured, actionable understanding for civil servants, business compliance officers, community activists, and anyone who needs to navigate Nigeria's regulatory environment with precision and confidence. Where LawSimple explains, LawSimplify empowers you to act.";
  p.problem   = ["Government regulations are largely incomprehensible to those they govern.","New laws are passed without adequate public communication or explanation.","Legal procedures frighten ordinary people away from their legitimate rights.","Bureaucratic complexity causes unnecessary delays, costs, and missed opportunities.","Citizens make costly mistakes due to procedural legal ignorance.","SMEs struggle enormously to stay compliant with constantly changing regulations."];
  p.who       = ["Civil servants needing to understand and implement legislation correctly","Business owners and compliance officers across all sectors","Community leaders and local government officials","NGO workers navigating complex registration and regulatory requirements","Educated citizens seeking deeper legal and regulatory understanding"];
  p.does      = ["Breaks down complex legislation into layered, digestible explanations","Guides users step-by-step through legal and regulatory procedures","Tracks new laws and regulation changes as they occur in real time","Provides practical compliance checklists for businesses and organizations","Supports regulatory understanding with expert annotations and commentary"];
  p.features  = ["Deep law analysis library with expert professional commentary","Step-by-step procedural walkthroughs for all common regulatory processes","Regulatory update tracker with instant notification alerts","Business and organization compliance checklists organized by sector","Expert annotations explaining the practical meaning of legislation"];
  p.how       = ["User selects a complex regulatory or legal topic of relevance","Platform provides layered explanation from basic to advanced levels","Procedure guides activate to walk through all required steps","User follows each step with progress clearly tracked","Completion and compliance verified with confirmation tools"];
  p.impact    = ["Fewer costly procedural errors by businesses and individuals","Better regulatory compliance across every sector of the economy","More empowered civil society engaging with laws that affect them daily","Improved business-government relations built on clarity and understanding","More informed and effective democratic participation by Nigerian citizens"];
  p.nigeria   = ["Nigeria's complex federal-state legal structure urgently needs demystification","Rapidly changing regulatory environment requires real-time clarity for all","SMEs need reliable compliance guidance to survive and grow sustainably","Civil society empowerment through legal knowledge strengthens democracy","Fighting corruption requires citizens who fully understand the laws being broken"];
  p.investors = ["Compliance technology is a proven and recurring revenue business model","Government training and compliance program contracts available","Corporate compliance packages for large enterprises and multinationals","Academic institution partnerships for legal education programs","International development organization funding channels"];
  p.future    = ["AI regulatory compliance engine with automatic real-time updates","Integration with CAC, FIRS, CBN, and other major agency portals","Compliance certificate and verification badge system for organizations","Mobile-first delivery for accessibility across all of Nigeria","Enterprise licensing for large organizations and government MDAs"];
  p.subPlatforms = [
    {name:"RegTrack",        tagline:"Track all regulatory changes",          features:["Law update alerts","Regulatory calendar","Agency news feeds","Compliance deadlines","Impact analysis"]},
    {name:"ProcedureGuide",  tagline:"Step-by-step legal procedures",         features:["Business registration guide","Permit applications","Court procedures","Agency processes","Document checklists"]},
    {name:"ComplianceCheck", tagline:"Business compliance made easy",         features:["Industry checklists","Self-audit tools","Risk assessment","Compliance reports","Deadline alerts"]},
    {name:"LawAnnotator",    tagline:"Expert notes on legislation",           features:["Professional insights","Case law references","Practical notes","Amendment tracking","Download options"]},
    {name:"PolicyBridge",    tagline:"Connect policy to practice",            features:["Policy plain summaries","Implementation guides","Impact assessments","Stakeholder feedback","Government liaison"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TRADECENTRE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="tradecentre";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "TradeCentre is Nigeria's most comprehensive B2B and B2C commerce platform — a digital marketplace where businesses, traders, and buyers connect, negotiate, and transact with speed, safety, and scale. From Aba manufacturers to Lagos distributors to Kano wholesalers, TradeCentre puts every corner of Nigeria's enormous commercial ecosystem on one powerful platform. Commerce is the engine of Nigeria's economy — TradeCentre turbocharges it.";
  p.problem   = ["Nigeria's commerce ecosystem is fragmented across hundreds of disconnected platforms.","Small and medium businesses struggle to find verified buyers and suppliers.","Trade disputes are common and resolution mechanisms are almost nonexistent.","Cross-state commerce is difficult, expensive, and full of trust gaps.","Informal trade produces no data, making business planning near impossible.","Export-ready Nigerian products cannot easily reach international buyers."];
  p.who       = ["Manufacturers and producers across all sectors","Wholesalers, distributors, and bulk buyers","Retailers and market traders going digital","Exporters seeking international market access","Businesses seeking verified, trusted local suppliers"];
  p.does      = ["Connects buyers and sellers in a verified, trust-rated marketplace","Facilitates B2B and B2C transactions with escrow payment protection","Provides trade dispute resolution tools and secure transaction records","Enables exporters to showcase Nigerian products to global buyers","Creates transparent trade data accessible to businesses and policymakers"];
  p.features  = ["Verified business profiles with trust scores and ratings","Escrow payment system protecting buyers and sellers","Product catalogue with bulk pricing and negotiation tools","Trade dispute resolution panel with documented evidence trails","Export showcase module connecting Nigerian businesses to global buyers"];
  p.how       = ["Business registers and creates a verified profile with documents","Lists products or services with pricing, MOQ, and delivery terms","Buyers browse, contact, and negotiate directly on the platform","Transaction is secured through escrow until both parties confirm delivery","Ratings and reviews update seller trust score after each deal"];
  p.impact    = ["Billions in new commerce facilitated between Nigerian businesses","Reduced trade fraud through verified identities and escrow protection","More Nigerian products reaching export markets for the first time","Formal trade data helping businesses and government plan better","Thousands of new B2B relationships built across all 36 states"];
  p.nigeria   = ["Nigeria's $450B+ economy urgently needs a unified trade infrastructure","Supports the informal-to-formal economy transition at scale","Empowers Aba, Kano, and Onitsha trade hubs to go national and global","Generates export revenue diversifying Nigeria away from oil dependence","Creates trade data that helps government support the right sectors"];
  p.investors = ["E-commerce and B2B platforms are among the highest-value global tech investments","Transaction fee revenue model generates income on every deal","Escrow and financial services create additional high-margin revenue streams","Logistics and trade finance partnership opportunities","Export facilitation attracts international development organization funding"];
  p.future    = ["AI-powered trade matching connecting buyers to verified suppliers","Trade finance integration enabling credit for business purchases","Logistics integration for same-day and interstate delivery","Nigeria Export Hub reaching buyers in Europe, Asia, and the diaspora","Analytics dashboard giving businesses real-time market intelligence"];
  p.subPlatforms = [
    {name:"BulkBazaar",      tagline:"Wholesale marketplace for bulk buyers",      features:["MOQ listings","Bulk pricing tools","Verified suppliers","Negotiation chat","Delivery terms"]},
    {name:"ExportGate",      tagline:"Nigeria's export marketplace",               features:["International buyer reach","Export documentation guides","Product showcase","Currency tools","Global shipping links"]},
    {name:"TradeTrust",      tagline:"Escrow and payment protection",              features:["Escrow payments","Transaction records","Dispute filing","Refund system","Completion confirmation"]},
    {name:"SupplierMap",     tagline:"Find verified local suppliers fast",         features:["State-by-state supplier directory","Category filters","Rating system","Contact tools","Sample request tools"]},
    {name:"TradeAnalytics",  tagline:"Data and insights for smarter trade",        features:["Price trend charts","Market demand signals","Category performance","Regional insights","Export opportunity alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — RETAILEX
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="retailex";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RetaileX is the platform that brings every Nigerian retailer — from the neighbourhood kiosk to the growing boutique chain — fully into the digital economy. It gives physical shops a powerful online presence, real inventory tools, and access to millions of customers, without the complexity of building a standalone e-commerce site. In Nigeria's highly competitive retail market, RetaileX gives every seller the digital edge they need to survive and thrive.";
  p.problem   = ["Millions of Nigerian retailers have no digital presence or online sales channel.","Inventory management is manual, error-prone, and time-consuming.","Customer discovery happens mostly through word of mouth and physical location.","Small retailers cannot afford to build or maintain standalone online stores.","Payment collection is cash-heavy, insecure, and difficult to track.","Retail data is not captured, making growth planning nearly impossible."];
  p.who       = ["Small and medium retailers across all product categories","Market stall operators going digital for the first time","Boutique and fashion retailers","Pharmacy and FMCG retailers","Supermarkets and mini-marts managing large inventories"];
  p.does      = ["Gives retailers a fully functional digital storefront in minutes","Provides inventory management tools that track stock in real time","Connects retailers to customers searching for nearby products","Enables digital payment collection with instant settlement","Generates sales reports and analytics to guide business decisions"];
  p.features  = ["Digital storefront builder — no coding required","Real-time inventory tracker with low-stock alerts","Customer loyalty and promo tools","Multiple payment options: transfer, card, USSD, wallet","Sales analytics dashboard with daily, weekly, and monthly reports"];
  p.how       = ["Retailer signs up and builds their digital store in under 10 minutes","Products are listed with photos, prices, and stock levels","Customers discover the store through search and location-based browsing","Orders are placed, paid for, and tracked from pickup or delivery","Sales data updates automatically, giving the retailer live business intelligence"];
  p.impact    = ["Millions of Nigerian retailers enter the digital economy","Reduced stockouts and overstocking through smart inventory management","Higher sales through digital customer discovery and loyalty programs","Cleaner, faster payment collection reducing cash-handling risks","Better business decisions powered by real sales data"];
  p.nigeria   = ["Nigeria has one of Africa's largest retail markets — mostly offline","Digitizing retail creates enormous tax base and trade data for government","Supports financial inclusion by moving retailers from cash to digital payments","Enables Nigerian retail brands to grow beyond their physical location","Builds a competitive, modern retail ecosystem across all 36 states"];
  p.investors = ["Retail tech is a high-growth segment across all emerging markets","Transaction fees, subscription tiers, and payment processing revenue","Advertising revenue from brands reaching targeted retail customers","Logistics and last-mile delivery partnership opportunities","Data monetization for FMCG brands seeking retail intelligence"];
  p.future    = ["AI-powered demand forecasting for retail inventory planning","Franchise and multi-branch management for growing retail chains","Buy now, pay later integration for customer purchases","Automated reorder system connected to supplier marketplace","Loyalty program ecosystem shared across all RetaileX stores"];
  p.subPlatforms = [
    {name:"ShopBuilder",    tagline:"Build your digital store in minutes",        features:["Drag-and-drop storefront","Product photo upload","Price management","Opening hours","Custom store URL"]},
    {name:"StockSense",     tagline:"Smart inventory management",                  features:["Real-time stock tracker","Low-stock alerts","Supplier reorder tools","Category management","Barcode support"]},
    {name:"PayCollect",     tagline:"Accept all payment types easily",            features:["Bank transfer","Card payment","USSD payment","Digital wallet","Instant settlement"]},
    {name:"CustomerLoop",   tagline:"Loyalty and customer retention tools",       features:["Loyalty points system","Promo codes","Customer database","Birthday offers","Repeat buyer rewards"]},
    {name:"RetailInsights", tagline:"Sales data for smarter decisions",           features:["Daily sales report","Top product rankings","Revenue trends","Customer behaviour data","Export to Excel"]}
  ];
})();


// ============================================================
//  FULL CONTENT — BUSINESSMAP
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="businessmap";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "BusinessMap is Nigeria's definitive digital directory — a living, searchable map of every business across the country. From the largest corporations in Lagos to the smallest artisans in Borno, BusinessMap makes every business discoverable, visible, and connected. For the first time, Nigeria gets a complete, real-time picture of its commercial landscape — where businesses are, what they do, and how to reach them.";
  p.problem   = ["Millions of Nigerian businesses are invisible online — no address, no website, no listing.","Customers struggle to find trusted local businesses near them.","There is no comprehensive, accurate database of Nigerian businesses.","Small businesses lose customers daily because they cannot be found digitally.","Government lacks reliable data on business density and economic activity by region.","New entrants into a market cannot assess competition or opportunity easily."];
  p.who       = ["Every business in Nigeria seeking online visibility","Customers searching for products and services near them","Investors doing market research and due diligence","Government agencies tracking economic activity","Entrepreneurs analyzing market gaps and opportunities"];
  p.does      = ["Creates searchable, verified digital profiles for every Nigerian business","Maps businesses by location, sector, and category nationwide","Enables customer reviews and ratings building business credibility","Provides business density data useful for planning and investment decisions","Connects businesses to customers through search and location-based discovery"];
  p.features  = ["Comprehensive business directory with map and list views","Verified business profiles with contact, hours, and photos","Customer reviews and ratings for every listed business","Advanced search by location, sector, keyword, and rating","Business analytics showing views, searches, and customer engagement"];
  p.how       = ["Business owner lists their business in under 5 minutes","Profile is verified through phone number and basic documentation","Customers search by name, category, or location and find the business","Business receives customer inquiries, directions, and calls through the platform","Engagement data helps businesses understand who is finding them and why"];
  p.impact    = ["Millions of invisible businesses become discoverable nationwide","Customers find trusted, reviewed businesses near them faster","Government gains real commercial activity data for policy decisions","Entrepreneurs can assess market competition with real data","Nigeria's entire commercial ecosystem becomes visible, searchable, and accountable"];
  p.nigeria   = ["Nigeria's informal economy needs a formal digital address book","Supports government's drive to formalize and enumerate all businesses","Enables data-driven economic planning at state and federal level","Connects diaspora investors to Nigerian business opportunities","Reduces the information gap between urban business hubs and rural markets"];
  p.investors = ["Digital directory and local search is a proven, high-margin global business","Advertising revenue from businesses promoting their listings","Premium profile subscriptions for enhanced visibility and features","Data licensing to government, banks, and market research firms","Anchor platform for other Naijy services requiring business verification"];
  p.future    = ["AI-powered business recommendation engine based on user behaviour","Integration with CAC database for automatic registration verification","Appointment and booking system built into every business profile","Business performance benchmarking against category and regional peers","National economic activity heatmap updated in real time"];
  p.subPlatforms = [
    {name:"LocalFind",      tagline:"Discover businesses near you",               features:["GPS-based search","Category filters","Distance sorting","Quick contact","Opening hours"]},
    {name:"BizProfile",     tagline:"Your complete business profile online",      features:["Photo gallery","Business description","Contact details","Social links","Product/service listing"]},
    {name:"ReviewCenter",   tagline:"Ratings and reviews that build trust",       features:["Star ratings","Written reviews","Business reply tools","Review moderation","Verified customer badge"]},
    {name:"MarketIntel",    tagline:"Business intelligence for decision makers",  features:["Sector density maps","Growth trend data","Competitive landscape","Regional insights","Export data option"]},
    {name:"BizVerify",      tagline:"Verified business identity system",          features:["CAC cross-check","Phone verification","Document upload","Trust badge","Fraud report tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FINANCEHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="financehub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FinanceHub is Nigeria's central platform for financial connection — linking individuals, businesses, investors, and financial institutions in one intelligent ecosystem. From personal financial planning to investment discovery, SME lending to market data, FinanceHub makes money work harder and smarter for every Nigerian. Because financial empowerment is not just about access to money — it is about access to the right knowledge, tools, and connections at the right time.";
  p.problem   = ["Millions of Nigerians are financially excluded from formal banking and investment products.","SMEs cannot access affordable credit when they need it most.","Investment opportunities are opaque and largely inaccessible to ordinary Nigerians.","Financial literacy is low, leading to poor decisions and vulnerability to fraud.","There is no single platform connecting all financial services for citizens.","Savings are lost to inflation because Nigerians lack easy investment access."];
  p.who       = ["Individuals seeking better personal financial management","SMEs and entrepreneurs needing business financing","Investors looking for vetted opportunities across sectors","Banks, microfinance institutions, and fintech companies","Financial advisors and wealth managers"];
  p.does      = ["Connects users to financial products: loans, savings, insurance, investment","Provides financial literacy education in plain Nigerian English","Enables SMEs to access credit from verified lenders in one place","Gives investors access to curated, vetted investment opportunities","Delivers real-time financial market data and economic indicators"];
  p.features  = ["Financial product marketplace: compare loans, savings, and insurance","SME credit application and lender matching platform","Investment opportunity board with verified listings","Personal finance tools: budget planner, savings goal tracker","Financial news, market data, and economic analysis dashboard"];
  p.how       = ["User completes financial profile and sets goals","Platform matches user to appropriate financial products","Applications are submitted digitally with document upload","Lenders and investors review and respond within the platform","User tracks all financial activities from one dashboard"];
  p.impact    = ["Millions more Nigerians accessing formal financial products","SMEs getting the credit they need to grow and hire","More Nigerians participating in wealth-building through investment","Improved financial literacy reducing vulnerability to fraud and poverty","A more connected, efficient, and inclusive Nigerian financial system"];
  p.nigeria   = ["Nigeria's massive unbanked population represents an enormous opportunity","SME financing gap costs the economy billions in lost growth annually","Investment access democratization can build a wealth-owning middle class","Financial literacy is the foundation of sustainable poverty reduction","A connected financial ecosystem supports the CBN's financial inclusion targets"];
  p.investors = ["Fintech and financial services is Nigeria's fastest-growing investment sector","Revenue from loan facilitation fees, investment listing fees, and subscriptions","Data services for banks, fintech companies, and regulatory bodies","Insurance and pension product distribution commission revenue","International development finance institution partnership opportunities"];
  p.future    = ["AI financial advisor providing personalized money guidance","Robo-investing platform for retail investors starting small","Credit scoring system built on alternative data from Naijy platforms","Pension and long-term savings integration for formal and informal workers","Cross-border investment and remittance integration"];
  p.subPlatforms = [
    {name:"LoanConnect",     tagline:"Match SMEs to the right lenders",           features:["Credit application portal","Lender comparison","Rate calculator","Application tracking","Document upload"]},
    {name:"InvestBoard",     tagline:"Verified investment opportunities",         features:["Sector-based listings","Due diligence summaries","Investor-founder matching","Returns tracker","Risk rating system"]},
    {name:"MoneySchool",     tagline:"Financial literacy for every Nigerian",     features:["Personal finance courses","Budget tools","Savings guides","Fraud awareness","Investment basics"]},
    {name:"MarketPulse",     tagline:"Real-time financial market data",           features:["Stock market updates","Forex rates","Bond yields","Commodity prices","Economic calendar"]},
    {name:"WealthPlanner",   tagline:"Plan, save, and grow your money",           features:["Goal-based savings tracker","Budget planner","Net worth calculator","Retirement planner","Tax planning guide"]}
  ];
})();


// ============================================================
//  FULL CONTENT — REMITEX
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="remitex";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RemiteX makes sending money to and from Nigeria faster, cheaper, and more transparent than it has ever been. Designed for the Nigerian diaspora and for cross-border traders, RemiteX eliminates the hidden fees, poor exchange rates, and painful delays that have cost Nigerians billions. Whether you are sending school fees from London, supporting family from Houston, or paying a supplier in Ghana — RemiteX moves your money without borders, and without waste.";
  p.problem   = ["Remittance fees to Nigeria are among the highest in the world — averaging 8–10%.","Exchange rates offered by traditional services are significantly below market rates.","Transfers often take days, causing real hardship for recipients waiting on critical funds.","No transparent comparison tool exists to help senders find the best rates.","Informal hawala channels used to bypass high fees are unregulated and risky.","Nigeria's $20B+ annual remittance inflow is being reduced by fee extraction."];
  p.who       = ["Nigerian diaspora in the UK, USA, Canada, Europe, and beyond","Cross-border traders importing and exporting goods","Family members regularly supporting relatives in Nigeria","International businesses paying Nigerian contractors and suppliers","Nigerians sending money to other African countries"];
  p.does      = ["Provides fast, cheap international money transfers to Nigerian bank accounts","Compares remittance providers in real time to find the best rate","Enables multi-currency wallet management for diaspora users","Supports bulk payments for businesses paying multiple recipients","Tracks transfer status in real time from send to delivery"];
  p.features  = ["Multi-provider rate comparison in real time","Fast transfer — most payments arrive within minutes","Multi-currency wallet supporting GBP, USD, EUR, CAD, and NGN","Bulk payment tools for businesses and employers","Live transfer tracker with delivery confirmation notifications"];
  p.how       = ["User selects destination, amount, and compares live rates","Selects best provider and initiates secure transfer","Recipient's bank account is credited, often within minutes","Both sender and recipient receive real-time confirmation notifications","Transaction history stored securely for records and tax purposes"];
  p.impact    = ["Billions in savings returned to Nigerian families by reducing fees","Faster access to critical funds — school fees, medical bills, emergencies","Transparent exchange rates that respect the value of diaspora earnings","Safer alternative to unregulated informal transfer channels","More remittance money reaching Nigerian families and circulating in the economy"];
  p.nigeria   = ["Nigeria is one of Africa's largest remittance recipients — $20B+ annually","Reducing remittance fees by just 5% returns $1B+ to Nigerian families","Supports the CBN's goal of increasing formal remittance inflows","Diaspora investment in Nigeria increases when transfer is easy and trusted","Transparent remittance data helps government track foreign inflow patterns"];
  p.investors = ["Remittance is a $700B+ global industry with high margins","Revenue from spread, transfer fees, and premium subscription tiers","Currency exchange services generate consistent daily revenue","B2B bulk payment services for businesses are a high-value revenue segment","Licensing to banks and fintechs wanting remittance functionality"];
  p.future    = ["Instant transfers to mobile money wallets across all African markets","Diaspora investment module — send money directly into Nigerian assets","Cryptocurrency on-ramp and off-ramp for tech-savvy diaspora users","Group remittance pooling for community organizations","Fully regulated cross-border payment infrastructure for West Africa"];
  p.subPlatforms = [
    {name:"RateWatch",       tagline:"Compare live remittance rates",             features:["Real-time rate comparison","Provider rankings","Fee calculator","Best deal alerts","Historical rate charts"]},
    {name:"QuickSend",       tagline:"Send money in minutes",                     features:["Bank transfer","Mobile wallet delivery","Minutes-fast settlement","ID verification","Confirmation alerts"]},
    {name:"DiasporaWallet",  tagline:"Multi-currency wallet for Nigerians abroad",features:["Multi-currency balance","Auto-conversion","Spending cards","Send from wallet","Account top-up"]},
    {name:"BulkPay",         tagline:"Mass payments for businesses",              features:["Multi-recipient upload","Batch processing","Payment scheduling","Payroll export","Transaction reports"]},
    {name:"TransferTrack",   tagline:"Real-time transfer status monitoring",      features:["Live status updates","Delivery confirmation","Delay alerts","Recipient notification","Transfer history"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DIGITALPAYS HUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="digitalPayshub";});
  // fallback: try alternate key
  if(!p) p = platforms.find(function(x){return x.key==="digitalpayshub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DigitalPays Hub is Nigeria's unified digital payments infrastructure — powering every kind of transaction from FMCG market payments to school fees, utility bills, event tickets, and government levies. It brings together payment providers, merchants, and customers in one seamless ecosystem, so that whether you are a street hawker or a large corporation, digital payment is always the easiest option. Nigeria runs on transactions — DigitalPays Hub makes every one of them effortless.";
  p.problem   = ["Cash remains dominant in Nigeria, creating security, hygiene, and inefficiency problems.","Merchants lose sales because they cannot accept digital payments easily.","Payment fragmentation means customers manage multiple apps and wallets.","Government revenue collection is hampered by reliance on physical payment processes.","Small businesses cannot access payment infrastructure without expensive hardware.","Bill payment and service fees require multiple trips and platforms."];
  p.who       = ["Merchants and vendors of all sizes seeking to accept digital payments","Consumers wanting a single app for all payment needs","Government agencies collecting levies, fees, and taxes digitally","Schools, hospitals, and utilities managing high-volume collections","Fintechs and developers needing payment API infrastructure"];
  p.does      = ["Aggregates all payment methods into one merchant-facing platform","Enables QR code and link-based payments requiring zero hardware","Provides consumers with a single wallet for all bill and service payments","Connects government agencies to digital collection infrastructure","Offers developers and fintechs robust payment APIs to build on"];
  p.features  = ["Universal QR code payments — no terminal needed","Bill payment aggregator for utilities, subscriptions, and levies","Merchant dashboard with real-time transaction tracking","Consumer super-wallet managing all payment accounts in one place","Developer API suite for building payment-powered applications"];
  p.how       = ["Merchant generates a QR code linked to their account in seconds","Customer scans, confirms amount, and payment is instant","Merchant sees real-time confirmation and settlement notification","Consumer pays bills, fees, and services from one unified dashboard","All transactions are recorded, reportable, and disputable through the platform"];
  p.impact    = ["Massive reduction in cash dependency across Nigerian commerce","More merchants accepting digital payments, boosting sales and safety","Government revenue collection becomes faster, traceable, and fraud-resistant","Consumers save time managing payments from a single interface","Nigeria's digital payment ecosystem becomes genuinely inclusive"];
  p.nigeria   = ["CBN's cashless policy needs the right infrastructure to succeed","Digital payment adoption is key to formalizing Nigeria's informal economy","Government digital collection reduces leakage and improves accountability","Supports Nigeria's goal of a fully digital financial ecosystem by 2030","Every naira digitized is a naira that is counted, trackable, and taxable"];
  p.investors = ["Payments infrastructure is among the most valuable fintech segments globally","Revenue from transaction fees on every payment processed","Merchant subscription tiers for advanced analytics and branding","API licensing revenue from fintechs and enterprise clients","Government contracts for digital levy and fee collection systems"];
  p.future    = ["Offline payment capability for low-connectivity environments","Biometric payment authentication for secure transactions","AI-powered fraud detection across all transactions on the platform","Cross-border payment rails connecting Nigeria to all African markets","Central bank digital currency (CBDC) integration for the eNaira"];
  p.subPlatforms = [
    {name:"MerchPay",        tagline:"Accept all payments, zero hardware",        features:["QR code generation","Payment links","Instant settlement","Transaction history","Refund tools"]},
    {name:"BillCentral",     tagline:"Pay all bills from one place",              features:["Utility payments","School fees","Hospital bills","Subscription management","Government levies"]},
    {name:"SuperWallet",     tagline:"One wallet for everything",                 features:["Multi-account aggregation","Spend tracking","Budget tools","Transfer tools","Savings pockets"]},
    {name:"PayGov",          tagline:"Digital government revenue collection",     features:["LGA levy portal","State agency fees","Tax payment tools","Receipt generation","Reconciliation reports"]},
    {name:"PayAPI",          tagline:"Payment infrastructure for developers",     features:["REST API access","Webhook integration","Sandbox environment","Documentation library","Developer support"]}
  ];
})();


// ============================================================
//  FULL CONTENT — WORKGLOBAL
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="workglobal";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "WorkGlobal unlocks the global job market for every skilled Nigerian — connecting professionals, freelancers, and remote workers to employers, clients, and opportunities worldwide. Nigeria has an enormous, talented, ambitious workforce that the world needs. WorkGlobal ensures that world knows where to find them — and that Nigerians can work without borders, earn in strong currencies, and build world-class careers from Nigeria. Talent is everywhere. Opportunity should be too.";
  p.problem   = ["Millions of skilled Nigerians cannot access global work opportunities due to lack of platforms.","Nigerian freelancers earn significantly less than peers elsewhere for identical skills.","Brain drain removes Nigeria's best talent permanently instead of enabling remote work.","There is no trusted, Nigeria-focused global work marketplace for employers.","Skills exist but portfolios, verification, and global network access are missing.","Payment in foreign currencies is complex, slow, and expensive for Nigerian remote workers."];
  p.who       = ["Nigerian software developers, designers, writers, and creative professionals","Engineers, accountants, analysts, and consultants with global-ready skills","Freelancers seeking international clients and project-based income","Fresh graduates building portfolios for global employment","International companies seeking verified Nigerian talent at competitive rates"];
  p.does      = ["Connects Nigerian professionals to verified global employers and projects","Provides skill verification and professional profile building tools","Enables secure foreign currency payment collection and conversion","Builds Nigerian talent visibility with international clients and companies","Supports career development with training, mentorship, and portfolio tools"];
  p.features  = ["Verified professional profiles with skills tests and portfolio showcase","Global job and gig board filtered for Nigeria-friendly roles","Foreign currency payment wallet with simple NGN conversion","Mentorship network connecting junior professionals to experienced global Nigerians","Skills training pathways aligned to most in-demand global roles"];
  p.how       = ["Professional creates verified profile with portfolio, skills, and experience","Completes skill assessments to earn verification badges","Browses and applies for global jobs and projects through the platform","Accepted work begins; payments held in secure foreign currency wallet","Income converts to NGN on demand or builds as foreign currency savings"];
  p.impact    = ["Billions in foreign earnings brought into Nigeria by remote professionals","Brain drain reduced as top talent earns globally without leaving Nigeria","World-class Nigerian talent visible and accessible to global employers","New generation of globally competitive Nigerian professionals","Nigeria's tech and creative economy gains massive export revenue"];
  p.nigeria   = ["Nigeria's demographic dividend must be harnessed through quality employment","Remote work can keep talent in Nigeria earning in dollars and pounds","Reduces the psychological and economic pressure to emigrate permanently","Forex earned by remote workers strengthens Nigeria's foreign currency position","Government's economic diversification goals benefit from a global talent export model"];
  p.investors = ["Future of work is global and remote — WorkGlobal is perfectly positioned","Revenue from placement fees, subscription tiers, and payment processing","Premium verification and profile boosting for competitive professionals","B2B talent sourcing subscriptions for international employers","Training and certification programs as recurring revenue"];
  p.future    = ["AI career coach providing personalized job matching and development plans","Global talent agency model representing top Nigerian professionals","Corporate training programs for international companies hiring Nigerians","WorkGlobal visa support network for hybrid remote-to-relocation pathways","Pan-African expansion connecting all African professionals to global markets"];
  p.subPlatforms = [
    {name:"TalentProfile",   tagline:"Build a world-class professional profile",  features:["Skills verification tests","Portfolio builder","Work history showcase","LinkedIn integration","Global readiness score"]},
    {name:"GlobalGigs",      tagline:"Find international projects and contracts", features:["Remote job board","Freelance project listings","Skill-based filters","Application tracker","Client reviews"]},
    {name:"EarnGlobal",      tagline:"Get paid in foreign currency simply",       features:["USD/GBP/EUR wallet","Instant NGN conversion","Payment request links","Invoice generation","Transaction history"]},
    {name:"CareerPath",      tagline:"Train and grow for global careers",         features:["In-demand skills courses","Certification programs","Mentorship matching","Career roadmaps","Interview preparation"]},
    {name:"TalentSearch",    tagline:"Helping employers find Nigerian talent",     features:["Talent database search","Skill and experience filters","Direct messaging","Contract tools","Verified badge filter"]}
  ];
})();


// ============================================================
//  FULL CONTENT — YOUTHSPACE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="youthspace";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "YouthSpace is Nigeria's premier platform for young people who dream beyond boundaries — where curiosity about space, science, technology, and innovation is nurtured into real capability. Through space education, STEM challenges, mentorship, and a community of like-minded young Nigerians, YouthSpace ignites the next generation of scientists, engineers, and explorers. Nigeria's youth are not just the future — with YouthSpace, they are already building it.";
  p.problem   = ["Nigeria has almost no structured STEM pipeline connecting youth to space and deep science careers.","Most young Nigerians believe advanced science careers are not for them.","Space education does not exist in most Nigerian school curricula.","Youth interest in science is high but channels to develop it are nearly absent.","Nigeria risks being left behind as the global space economy grows exponentially.","There are no youth-facing platforms making space science exciting and accessible."];
  p.who       = ["Secondary school students with interest in science and technology","University students in science, technology, engineering, and maths","Youth science and robotics clubs across Nigeria","Science teachers seeking digital STEM curriculum support","Nigerian parents wanting their children exposed to future-ready education"];
  p.does      = ["Makes space science exciting, visual, and accessible for Nigerian youth","Provides structured STEM learning pathways from beginner to advanced","Connects young Nigerians to space scientists, engineers, and mentors","Hosts national science and technology competitions and challenges","Builds a community of young Nigerian innovators and future explorers"];
  p.features  = ["Interactive space and STEM education modules for all age groups","National STEM challenge competitions with real prizes and recognition","Mentor connection platform linking students to Nigerian and diaspora scientists","Space news feed curated for Nigerian youth audiences","Club and group tools for school science clubs and STEM teams"];
  p.how       = ["Student signs up and selects learning pathway based on age and interest","Completes interactive modules at their own pace","Participates in national competitions and connects with peers","Gets matched to a mentor from Nigeria's science and tech community","Achieves certificates and builds a portfolio of innovation projects"];
  p.impact    = ["A generation of Nigerian youth excited about science and space careers","More Nigerians entering STEM fields and advancing to global scientific roles","Increased diversity in Nigeria's science and technology workforce","School science clubs transformed into innovation hubs","Nigeria positioned as a serious participant in the global space economy"];
  p.nigeria   = ["Nigeria needs a homegrown STEM talent pipeline for the 21st century economy","Space technology has real applications for agriculture, climate, and security","Youth unemployment drops when young people have competitive, future-ready skills","Nigeria's NigeriaSat programme needs the next generation of space engineers","Building scientific ambition in youth today creates national capacity for tomorrow"];
  p.investors = ["Ed-tech and STEM platforms attract significant global philanthropy and venture funding","Government education ministry and NASRDA partnership opportunities","School and institution subscription model for organized learning delivery","Corporate STEM sponsorship from telecoms, oil companies, and banks","International space agency and development organization funding channels"];
  p.future    = ["Physical YouthSpace innovation hubs in all six geopolitical zones","Nigeria's first youth-built micro-satellite project coordination platform","Partnership with NASRDA and international space agencies for student programs","Live space event broadcasts and astronaut interaction sessions","YouthSpace alumni network of Nigeria's next generation of scientists"];
  p.subPlatforms = [
    {name:"SpaceLab",        tagline:"Explore space science interactively",       features:["3D solar system explorer","Satellite tracking tool","Rocket science basics","Astronomy guides","Space career pathways"]},
    {name:"STEMChallenge",   tagline:"National science competitions for youth",   features:["Challenge registration","Submission portal","Judge panel system","Prize board","School team management"]},
    {name:"MentorMatch",     tagline:"Connect to Nigerian science mentors",       features:["Mentor profiles","Interest-based matching","1:1 session booking","Progress tracking","Career guidance tools"]},
    {name:"ScienceClub",     tagline:"Tools for school science clubs",            features:["Club registration","Member management","Project collaboration","Resource library","Event calendar"]},
    {name:"FutureBuilders",  tagline:"Innovation projects for young creators",   features:["Project submission","Peer collaboration","Innovation diary","Portfolio builder","National showcase"]}
  ];
})();


// ============================================================
//  FULL CONTENT — YOUTHEMPLOY
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="youthemploy";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "YouthEmploy is Nigeria's most focused platform for tackling youth unemployment — directly connecting young Nigerians to jobs, internships, apprenticeships, and entrepreneurship opportunities. It goes beyond a job board: YouthEmploy provides the career guidance, skills verification, and employer connections that young Nigerians need to not just find a job, but to build lasting, fulfilling careers. Because every unemployed Nigerian youth is a national waste — and YouthEmploy refuses to accept that.";
  p.problem   = ["Nigeria's youth unemployment rate exceeds 40% in many regions.","Most graduates lack the practical skills employers actually need and demand.","Job information is scattered, unreliable, and often fraudulent.","Young people from underserved communities have no connections to opportunity.","Employers cannot easily find, verify, and recruit young Nigerian talent.","Internship and apprenticeship culture is underdeveloped in Nigeria's formal sector."];
  p.who       = ["Fresh graduates seeking their first formal employment","Secondary school leavers entering the job market or vocational training","Young professionals with 1–5 years experience seeking career growth","Employers hiring entry-level and mid-career young talent","NGOs, government agencies, and social enterprises supporting youth employment"];
  p.does      = ["Connects youth to verified job, internship, and apprenticeship opportunities","Provides CV building, interview preparation, and career coaching tools","Verifies youth skills through assessments and employer-recognized badges","Alerts users to relevant opportunities matching their profile and location","Supports entrepreneurship as an employment alternative with resource and network access"];
  p.features  = ["Verified job and internship board updated daily","CV builder and professional profile creator for first-time job seekers","Skills assessment and employer-recognized certification program","Career coaching chatbot providing 24/7 job search guidance","Entrepreneurship resource hub for youth choosing self-employment"];
  p.how       = ["Youth creates professional profile with skills, education, and experience","Completes skills assessments to earn verified badges","Browses verified job listings tailored to their profile","Applies directly through platform with tracked application status","Employer shortlists, interviews, and hires through the platform"];
  p.impact    = ["Hundreds of thousands of young Nigerians finding formal employment","Reduced youth unemployment contributing to national economic stability","Employers accessing a verified, quality pool of young Nigerian talent","Young Nigerians building professional networks and career capital","Entrepreneurship surge as YouthEmploy supports those choosing to build their own futures"];
  p.nigeria   = ["Nigeria's 70%+ youth population demands structural employment solutions","Youth unemployment drives insecurity, crime, and social instability","Every employed young Nigerian multiplies economic activity in their community","Connecting youth to industry builds the skills pipeline Nigeria's economy needs","Government job creation programmes need a platform infrastructure to reach youth effectively"];
  p.investors = ["Youth employment platforms attract significant social impact investment","Revenue from employer job posting subscriptions and featured listings","Skills training and certification program fees","Government youth employment programme platform contracts","NGO and international development organization funding partnerships"];
  p.future    = ["AI-powered job matching learning from youth profiles and employer preferences","National apprenticeship management system connecting youth to trades","YouthEmploy camps — physical career development events in all states","Alumni mentorship network where hired youth mentor the next generation","Integration with SMEDAN, NDE, and other government youth employment bodies"];
  p.subPlatforms = [
    {name:"JobBoard",        tagline:"Verified jobs for young Nigerians",         features:["Daily updated listings","Internship filter","Location-based search","Application tracker","Fraud-free guarantee"]},
    {name:"CareerBuilder",   tagline:"Build your professional foundation",        features:["CV builder","Cover letter templates","Interview simulator","Skills gap analysis","Professional headshot tips"]},
    {name:"SkillBadge",      tagline:"Earn employer-recognized skill credentials",features:["Skills assessments","Digital badge issuance","Employer recognition","Portfolio integration","Badge sharing tools"]},
    {name:"StartUpMe",       tagline:"Support for young entrepreneurs",           features:["Business idea resources","Startup guide","Grant opportunity alerts","Mentor matching","Peer entrepreneur network"]},
    {name:"HireYouth",       tagline:"Employers finding verified young talent",   features:["Talent search tools","Skill-filtered database","Bulk application management","Interview scheduling","Hire confirmation tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — IBOPRENTICE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="iboprentice";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Iboprentice is Nigeria's dedicated skills and apprenticeship platform — bridging the gap between raw potential and market-ready competence for millions of young Nigerians. From learning a trade to mastering a profession, Iboprentice provides structured training programs, verified apprenticeships with master craftsmen and businesses, and a clear pathway from learning to earning. Because skill is the most portable form of wealth, and Iboprentice ensures every Nigerian can acquire it.";
  p.problem   = ["Nigeria's skills gap is one of the biggest barriers to youth employment and national productivity.","Traditional apprenticeship systems are unstructured, unverified, and often exploitative.","Vocational training institutions are underfunded and disconnected from real market demands.","There is no formal certification system that employers can trust for vocational skills.","Young people in rural areas have almost no access to structured skills training.","Skilled artisans cannot find and vet apprentices efficiently through traditional channels."];
  p.who       = ["Young Nigerians seeking practical, vocational, or trade-based skills","School leavers choosing vocational pathways over university education","Skilled master craftsmen and artisans seeking to train apprentices formally","Businesses needing qualified tradespeople and skilled workers","TVET institutions seeking a digital delivery and certification platform"];
  p.does      = ["Lists and verifies vocational training programmes across Nigeria","Connects apprentices to certified master trainers in their trade and location","Issues verifiable digital skill certificates recognized by employers","Provides online training modules supplementing hands-on apprenticeship","Tracks apprenticeship progress and completion for all parties"];
  p.features  = ["Verified master trainer directory across all trades and states","Apprenticeship matching — connect to the right trainer for your skill goal","Digital certificate issuance upon verified programme completion","Blended learning — online theory modules plus physical hands-on practice","Progress tracking dashboard for apprentice, trainer, and institution"];
  p.how       = ["Apprentice selects skill area and browses verified trainers nearby","Application is sent and trainer reviews and accepts the apprentice","Training programme begins with milestones tracked on the platform","Online modules supplement practical sessions in a blended format","Programme completion triggers digital certificate issuance and skill badge"];
  p.impact    = ["Millions of young Nigerians gaining verified, market-ready vocational skills","Employers confidently hiring certified tradespeople for the first time","Reduction in exploitative apprenticeship conditions through platform oversight","Traditional skills and crafts preserved and professionalized","Nigeria's vocational education sector modernized and scaled"];
  p.nigeria   = ["Nigeria's skills gap is a direct driver of unemployment and poverty","Vocational skills provide employment pathways for those not suited to university","Artisan and trade skills are the backbone of Nigeria's informal economy","Formalizing apprenticeship builds national productivity and tax base","Iboprentice supports the FG's technical education reform agenda"];
  p.investors = ["Skills and vocational training is a proven global investment sector","Revenue from training institution listings, apprenticeship matching fees, and certifications","Government TVET programme contracts and implementation partnerships","Corporate CSR training programme partnerships with large companies","International development funding focused on youth skills and employment"];
  p.future    = ["National skills passport recognized by all employers across Nigeria","Virtual reality practical training modules for complex trades","Iboprentice centres — physical training hubs in underserved communities","Recognition of prior learning system for experienced self-taught artisans","West Africa expansion connecting skilled workers to opportunities across the region"];
  p.subPlatforms = [
    {name:"TradeMatch",      tagline:"Find the right apprenticeship fast",        features:["Trade category search","Location filter","Trainer profiles","Application system","Rating and reviews"]},
    {name:"SkillCertify",    tagline:"Verified certificates for every skill",     features:["Digital certificate generation","Employer-shareable format","QR code verification","Certificate archive","Badge integration"]},
    {name:"LearnOnline",     tagline:"Theory modules for every trade",            features:["Trade-specific content","Video lessons","Quizzes and assessments","Offline mode","Progress tracker"]},
    {name:"MasterTrainer",   tagline:"Tools for certified training providers",    features:["Trainer profile builder","Apprentice management","Payment tracking","Timetable tools","Certificate issuance"]},
    {name:"TVETConnect",     tagline:"Platform for vocational institutions",      features:["Institution listing","Course catalogue","Student enrollment management","Government reporting","Alumni tracking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — EDUCAHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="educahub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EducaHub is Nigeria's most comprehensive education platform — connecting students, teachers, schools, and communities in one powerful digital learning ecosystem. From primary school to postgraduate level, EducaHub makes quality education more accessible, more engaging, and more outcomes-focused for every Nigerian learner. Education is the most powerful tool for national transformation — and EducaHub puts it in every Nigerian's hands.";
  p.problem   = ["Quality education is unequally distributed across states, zones, and income groups in Nigeria.","Teachers lack digital tools for engaging, modern lesson delivery.","Students have very limited access to quality study materials beyond their physical location.","School management is largely manual, slow, and paper-dependent.","Parent engagement in children's education is low due to poor information flow.","WAEC, JAMB, and NECO preparation is underfunded and poorly resourced for most students."];
  p.who       = ["Students from primary through postgraduate level across Nigeria","Teachers and educators seeking better digital teaching tools","School owners and administrators managing institutions","Parents seeking visibility into their children's academic progress","Government education agencies monitoring outcomes and enrollment"];
  p.does      = ["Delivers digital learning content aligned to Nigeria's curriculum","Provides teachers with lesson planning, assessment, and classroom tools","Connects students to quality exam preparation resources for WAEC, JAMB, and NECO","Enables schools to manage enrollment, timetables, and communications digitally","Gives parents real-time visibility into their children's academic activities"];
  p.features  = ["Curriculum-aligned digital lessons for all levels — primary through university","WAEC, JAMB, and NECO past questions with intelligent revision tools","Teacher toolkit: lesson planner, gradebook, assignment manager","School management system: enrollment, attendance, timetable, and fee tracking","Parent dashboard with real-time grades, attendance, and teacher communication"];
  p.how       = ["School registers on EducaHub and sets up classes and timetables","Teachers upload lessons, assignments, and assessments","Students access lessons, submit assignments, and sit assessments online","Parents log in to track their child's attendance, grades, and school notices","School management monitors all activity and generates reports for planning"];
  p.impact    = ["Quality education accessible to students in underserved areas for the first time","Better exam performance through structured, curriculum-aligned digital preparation","More engaged teachers with professional digital tools supporting their work","Reduced administrative burden freeing schools to focus on learning outcomes","Parents more engaged in children's education through transparent real-time information"];
  p.nigeria   = ["Nigeria's education system needs urgent digital transformation at scale","Over 10 million out-of-school children need alternative learning pathways","Exam failure rates must be addressed through better preparation tools","Teacher quality improvement is directly linked to Nigeria's human capital development","Universal digital learning access supports Nigeria's 2030 development goals"];
  p.investors = ["EdTech is among the fastest-growing investment sectors in Sub-Saharan Africa","School subscription revenue with high retention and recurring income","Government and state education board digitization contracts","Exam preparation premium services with high willingness to pay","Publisher and content partner revenue sharing opportunities"];
  p.future    = ["AI personal tutor providing adaptive learning for every student","Full STEM laboratory simulation for schools without physical labs","National teacher CPD certification and development platform","Offline learning capability for schools with unreliable internet","EducaHub school accreditation programme setting quality standards"];
  p.subPlatforms = [
    {name:"ClassRoom",       tagline:"Digital classroom for Nigerian schools",    features:["Video lessons","Live class sessions","Assignment submission","Grade tracking","Class discussion tools"]},
    {name:"ExamPrep",        tagline:"Master WAEC, JAMB, NECO, and more",        features:["Past question bank","Timed mock exams","Subject-by-subject revision","Score analytics","Weakness identifier"]},
    {name:"TeacherHub",      tagline:"Professional tools for every teacher",     features:["Lesson planner","Gradebook","Assignment manager","Student performance reports","CPD resource library"]},
    {name:"SchoolAdmin",     tagline:"Full school management system",            features:["Student enrollment","Attendance tracker","Timetable builder","Fee management","Parent communication"]},
    {name:"ParentConnect",   tagline:"Stay connected to your child's education", features:["Real-time grades","Attendance reports","Teacher messaging","Notice board","School calendar"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TELEMEDIC
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="telemedic";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "TeleMedic brings healthcare directly to Nigerians wherever they are — eliminating the distance, cost, and delay that prevent millions from accessing quality medical care. Through secure video consultations, digital prescriptions, remote monitoring, and specialist referrals, TeleMedic turns every smartphone into a gateway to professional healthcare. In a country where a hospital visit can mean hours of travel and waiting, TeleMedic delivers care in minutes.";
  p.problem   = ["Healthcare infrastructure is severely underdeveloped across most of Nigeria.","Millions of Nigerians are more than two hours away from the nearest qualified doctor.","Cost of physical hospital visits prevents many from seeking care until illness is critical.","Specialist access is concentrated in Lagos, Abuja, and Port Harcourt, excluding the rest.","Medical records are paper-based, frequently lost, and not portable between facilities.","Preventable deaths occur because minor symptoms are ignored until they become emergencies."];
  p.who       = ["Individuals and families in remote and underserved communities","Urban Nigerians seeking fast, convenient medical advice without long waits","Patients with chronic conditions needing regular monitoring and follow-up","Pregnant women seeking antenatal guidance and maternal health support","Employers providing health benefits to staff through a digital health platform"];
  p.does      = ["Connects patients to verified Nigerian doctors via video, audio, and text","Issues digital prescriptions fulfilled through partner pharmacies","Monitors chronic condition patients remotely with data-driven check-ins","Provides maternal health support from antenatal to post-natal care","Maintains portable digital medical records accessible across all facilities"];
  p.features  = ["Video and audio consultation with verified, licensed Nigerian doctors","Digital prescription with pharmacy partner network for home delivery","Chronic condition monitoring for diabetes, hypertension, and asthma","Maternal health module supporting pregnancy from week 1 to post-delivery","Portable digital health record accessible by patient and authorized providers"];
  p.how       = ["Patient creates profile including health history and current conditions","Selects a doctor by specialty or urgency and books a consultation","Consultation happens via video or chat — prescription issued digitally","Medicines delivered from partner pharmacy or collected nearby","Follow-up appointments, lab results, and monitoring continue through the platform"];
  p.impact    = ["Healthcare access extended to millions previously excluded by distance and cost","Preventable deaths reduced through early medical intervention","Specialists reaching patients across all 36 states without physical travel","Drug prescriptions filled accurately, reducing risk of wrong medication","A national digital health record system for the first time in Nigeria's history"];
  p.nigeria   = ["Nigeria has fewer than 0.4 doctors per 1,000 citizens — telemedicine multiplies reach","Rural communities suffer most from healthcare inaccessibility — TeleMedic changes this","Maternal mortality and child health outcomes improve dramatically with remote guidance","Digital health records support disease surveillance and epidemic early warning","Nigeria's healthcare burden requires technology to bridge the gap while infrastructure grows"];
  p.investors = ["Healthtech is one of the fastest-growing and most impactful global investment sectors","Consultation fees, subscription health plans, and employer health benefit contracts","Pharmacy partner revenue sharing on digital prescription fulfilment","Government NHIS and health ministry digital healthcare contracts","Insurance integration for cashless digital healthcare claims processing"];
  p.future    = ["AI symptom checker providing 24/7 triage before doctor consultation","Remote diagnostic device integration — blood pressure, glucose, oxygen monitors","National hospital referral network for specialist in-person care when needed","Mental health teletherapy platform for Nigeria's underserved mental health needs","TeleMedic clinic network — physical touchpoints in high-need communities"];
  p.subPlatforms = [
    {name:"DocConsult",      tagline:"Talk to a doctor in minutes",               features:["Video consultations","Audio calls","Text chat","Specialty selection","24/7 availability"]},
    {name:"RxDeliver",       tagline:"Digital prescriptions delivered home",      features:["Digital prescription","Pharmacy partner network","Home delivery","Medication reminders","Drug interaction checker"]},
    {name:"ChronicCare",     tagline:"Remote monitoring for long-term conditions",features:["Diabetes management","Hypertension tracking","Asthma monitoring","Regular check-in alerts","Specialist escalation"]},
    {name:"MamaHealth",      tagline:"Maternal and child health support",         features:["Antenatal guidance","Pregnancy week tracker","Nutrition advice","Labour preparation","Post-natal check-ins"]},
    {name:"HealthRecord",    tagline:"Your portable digital health file",         features:["Medical history storage","Lab result uploads","Prescription archive","Authorized sharing","Emergency access card"]}
  ];
})();


// ============================================================
//  FULL CONTENT — AGRICONET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="agriconet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "AgricoNet is Nigeria's agricultural marketplace and intelligence platform — directly connecting farmers to buyers, agro-dealers, and financial services, while providing the digital tools and market information farmers need to produce more and earn more. Nigeria feeds itself through millions of smallholder farmers who deserve digital infrastructure as powerful as any other sector. AgricoNet is that infrastructure — built for the farmer, by those who understand the land.";
  p.problem   = ["Nigerian farmers sell at exploitatively low prices because they have no market access.","Post-harvest losses exceed 40% of produce due to poor logistics and storage.","Farmers have no reliable source of market prices, weather, or agronomic advice.","Agricultural financing is almost completely inaccessible to smallholder farmers.","Input dealers and farmers cannot find each other efficiently.","Food insecurity persists despite Nigeria's enormous agricultural potential."];
  p.who       = ["Smallholder farmers growing food and cash crops across Nigeria","Commodity buyers, traders, food processors, and exporters","Agro-input dealers supplying seeds, fertilizer, and equipment","Agricultural extension workers providing farm advisory services","Banks and microfinance institutions lending to the agricultural sector"];
  p.does      = ["Connects farmers directly to buyers, eliminating exploitative middlemen","Provides real-time market prices for all major crops and commodities","Delivers agronomic advice, weather alerts, and farming best practices","Facilitates agricultural input procurement from verified agro-dealers","Enables farmer access to credit and insurance through verified profiles"];
  p.features  = ["Direct farmer-to-buyer marketplace with price discovery tools","Real-time commodity price tracker for all major Nigerian crops","Agronomic advisory chatbot with weather and pest alerts","Input marketplace connecting farmers to verified agro-dealers","Farmer financial profile builder enabling access to agricultural credit"];
  p.how       = ["Farmer creates profile listing crops, farm size, and location","Lists produce for sale with current volume, quality grade, and price","Buyers browse and contact farmers directly or through the platform","Transaction proceeds with logistics support and payment protection","Farmer's history builds a credit profile enabling future loan applications"];
  p.impact    = ["Farmers earning 30–60% more by bypassing exploitative intermediaries","Post-harvest losses reduced through better logistics and buyer connections","Food prices stabilized through more efficient supply chain connections","Agricultural credit access unlocked for millions of smallholder farmers","Nigeria's food security and agricultural export capacity dramatically improved"];
  p.nigeria   = ["Agriculture employs over 35% of Nigerians — digitizing it transforms the economy","Nigeria loses billions annually to post-harvest waste and middlemen exploitation","Food inflation is largely driven by supply chain inefficiency AgricoNet directly addresses","Agricultural credit access is the single biggest barrier to farming productivity growth","Nigeria's $10B+ agricultural export potential cannot be unlocked without better market infrastructure"];
  p.investors = ["Agritech is one of Africa's most active and high-return investment sectors","Marketplace transaction fees generating revenue on every successful trade","Input marketplace and logistics partnership revenue streams","Agricultural credit facilitation fees from lender partners","Government agricultural programme digitization contracts"];
  p.future    = ["Drone and satellite crop monitoring integrated into the platform","AI yield prediction and precision farming advisory services","Cold chain logistics coordination reducing post-harvest loss to under 10%","Nigeria agricultural commodity exchange — formal futures pricing platform","Export gateway connecting Nigerian produce to international commodity buyers"];
  p.subPlatforms = [
    {name:"FarmMarket",      tagline:"Sell your produce at the right price",      features:["Produce listing","Buyer matching","Price negotiation","Payment protection","Logistics coordination"]},
    {name:"CropPrice",       tagline:"Real-time commodity price intelligence",    features:["Daily price updates","State-by-state comparison","Price history charts","Crop demand signals","SMS price alerts"]},
    {name:"FarmAdvisor",     tagline:"Agronomic advice and weather alerts",       features:["Expert farming tips","Weather forecasts","Pest and disease alerts","Soil management guides","Season planning tools"]},
    {name:"InputShop",       tagline:"Buy verified farm inputs online",           features:["Seed catalogue","Fertilizer listings","Equipment marketplace","Verified dealer profiles","Delivery coordination"]},
    {name:"FarmFinance",     tagline:"Credit and insurance for farmers",          features:["Farmer credit profile","Loan application tools","Insurance products","Grant opportunity alerts","Repayment tracking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — 360ENERGY
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="360energy";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "360Energy is Nigeria's comprehensive digital energy platform — connecting citizens, businesses, energy providers, and policymakers in one intelligent ecosystem built to solve Nigeria's most persistent infrastructure crisis. Whether it is tracking power outages, accessing solar solutions, monitoring renewable energy projects, or holding DisCos accountable, 360Energy turns Nigerians from passive sufferers of the power crisis into active participants in its solution.";
  p.problem   = ["Nigeria's electricity supply is among the worst in the world for an economy its size.","Citizens have no platform to formally report and track power outages.","Renewable energy providers cannot reach the millions of Nigerians who need them.","Energy policy is opaque, poorly communicated, and rarely monitored publicly.","Nigeria's vast solar, wind, and hydro potential remains largely untapped.","Businesses lose billions annually to generator costs driven by grid unreliability."];
  p.who       = ["Households and businesses suffering from power supply failures","Renewable energy companies seeking to reach residential and commercial customers","Government and regulatory agencies monitoring electricity distribution","Investors in Nigeria's energy sector seeking market intelligence","Communities and cooperatives pursuing off-grid solar solutions"];
  p.does      = ["Enables citizens to report and map power outages in real time","Connects energy consumers to solar and renewable energy providers","Monitors DisCo performance and publishes accountability data","Provides energy sector policy analysis and regulatory news","Supports community solar and off-grid cooperative project coordination"];
  p.features  = ["Outage reporting and live power availability map by community","Renewable energy provider marketplace and comparison tool","DisCo performance scorecard updated with citizen-reported data","Energy policy tracker with plain-language analysis and updates","Community solar project coordination and investment pooling tools"];
  p.how       = ["User reports power outage with location and duration through the app","Reports aggregate to produce a live national power availability map","DisCo scorecards update based on outage patterns and resolution times","Energy providers list products and services reaching millions of consumers","Community groups organize solar projects through the coordination tools"];
  p.impact    = ["Nigeria's first real-time national electricity availability map","DisCos held accountable through transparent, publicly visible performance data","Millions of Nigerians connected to renewable energy alternatives","Reduced dependence on generators through better solar access","Evidence-based energy policy reform driven by real citizen data"];
  p.nigeria   = ["Electricity unreliability costs Nigeria's economy 2–3% of GDP annually","Nigeria's 180GW solar potential is almost entirely untapped","Power accountability is essential for attracting manufacturing investment to Nigeria","Every percentage point of improved electricity access improves quality of life for millions","Renewable energy transition is essential for Nigeria's climate commitments under the Paris Agreement"];
  p.investors = ["Energy sector platforms in Nigeria serve a market of 220 million people","Revenue from energy provider listings, advertising, and premium analytics","Data services for investors, development banks, and energy regulators","Government energy monitoring contract opportunities","Renewable energy transition attracts massive climate finance globally"];
  p.future    = ["AI-powered energy demand prediction for community and grid planning","Smart meter integration enabling real-time household consumption tracking","National renewable energy project registry for government and investors","Carbon credit tracking and trading for Nigerian renewable projects","Integration with NERC and NBET for regulatory data and reporting"];
  p.subPlatforms = [
    {name:"PowerMap",        tagline:"Live national electricity availability map", features:["Outage reporting","Community power status","DisCo zone tracker","Uptime statistics","Resolution time data"]},
    {name:"SolarConnect",    tagline:"Find and compare solar energy providers",   features:["Provider directory","System size calculator","Price comparison","Installation reviews","Financing options"]},
    {name:"DisCo Watch",     tagline:"Holding distribution companies accountable",features:["Performance scorecards","Outage frequency data","Billing complaint reports","Regulatory filing links","Citizen advocacy tools"]},
    {name:"EnergyPolicy",    tagline:"Understand Nigeria's energy regulations",   features:["Policy plain summaries","Regulatory updates","NERC news","Tariff explainers","Stakeholder consultations"]},
    {name:"CommunitySolar",  tagline:"Off-grid energy for communities",           features:["Community project registration","Investment pooling","Cooperative management","Progress tracking","Off-grid supplier directory"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HOMECONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="homeconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HomeConnect is the platform that makes finding, renting, buying, and managing property in Nigeria simpler, safer, and faster than it has ever been. By digitizing Nigeria's chaotic property market — plagued by fraud, inflated fees, and information asymmetry — HomeConnect brings transparency, verification, and ease to every housing transaction. Because shelter is a fundamental need, and finding it should not require navigating a minefield.";
  p.problem   = ["Nigeria's property market is rife with fraud, fake listings, and exploitative agents.","Renters pay multiple fees (agent, agreement, caution, service charge) with no protection.","Property seekers have no reliable platform for verified listings in their price range.","Landlords cannot easily find verified, trusted tenants.","Property management is entirely manual, creating disputes and poor record-keeping.","Housing data is nonexistent, making investment and policy decisions very difficult."];
  p.who       = ["Individuals and families seeking to rent or buy property","Landlords seeking verified tenants for their properties","Property agents operating with verified listings and transparent fees","Real estate developers marketing residential and commercial properties","Property investors seeking market data to guide decisions"];
  p.does      = ["Lists verified, fraud-free properties for rent and sale across Nigeria","Connects landlords to verified, screened tenants transparently","Provides transparent fee structures eliminating hidden charges","Enables digital tenancy agreements and rent payment tracking","Generates housing market data for investors, developers, and policymakers"];
  p.features  = ["Verified property listings with photos, videos, and full fee disclosure","Tenant verification and screening tools for landlords","Digital tenancy agreement generation and management","Online rent payment with automated receipt and tracking","Housing market data dashboard for pricing intelligence by area"];
  p.how       = ["Landlord lists property with full documentation, photos, and transparent fees","Prospective tenants browse, filter by location and budget, and apply","Platform runs tenant verification checks and presents results to landlord","Agreement is signed digitally and rent payments tracked through the platform","Both parties access dispute resolution tools if issues arise"];
  p.impact    = ["Millions of Nigerians finding housing without fraud or hidden fees","Landlords accessing verified, reliable tenants reducing default risk","Property market fraud dramatically reduced through verified listings","Transparent fees protecting renters from exploitation by unethical agents","Housing market data enabling smarter investment and policy decisions"];
  p.nigeria   = ["Nigeria's housing deficit of 17 million units demands efficient market infrastructure","Property fraud is among the most reported financial crimes in Nigeria","Urbanization is accelerating — Lagos, Abuja, and Port Harcourt need digital housing markets urgently","Rental exploitation affects millions of working Nigerians paying excessive fees","Transparent housing data will enable better urban planning and investment decisions"];
  p.investors = ["PropTech is one of the fastest-growing global tech investment categories","Revenue from listing fees, premium placements, and verification services","Tenancy agreement and legal document service fees","Mortgage and housing finance referral partnership revenue","Housing data licensing to banks, developers, and government agencies"];
  p.future    = ["AI-powered property recommendation based on preferences and affordability","Blockchain-based land and property title verification system","Mortgage marketplace connecting property buyers to home loan providers","Virtual property viewing using 3D and video walkthrough technology","National housing registry integration for formal title and ownership verification"];
  p.subPlatforms = [
    {name:"ListIt",          tagline:"List your property safely and simply",      features:["Photo and video upload","Fee disclosure tool","Legal document upload","Listing visibility boost","Inquiry management"]},
    {name:"FindHome",        tagline:"Search verified properties near you",       features:["Location-based search","Price range filter","Property type filter","Map view","Save and compare"]},
    {name:"TenantCheck",     tagline:"Verify tenants before committing",          features:["Identity verification","Employment check","Reference check","Tenancy history","Risk score"]},
    {name:"RentTrack",       tagline:"Digital rent payment and management",       features:["Online rent payment","Automated receipt","Rent arrears alerts","Payment history","Landlord dashboard"]},
    {name:"PropMarket",      tagline:"Housing price intelligence by location",    features:["Area price averages","Price trend charts","Demand heatmap","Rental yield calculator","Investment alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ETHNICHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="ethnichub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EthnicHub is Nigeria's digital home for cultural identity — a living archive and community platform where every ethnic group, language, tradition, and heritage is preserved, celebrated, and shared. With over 250 ethnic groups and hundreds of languages, Nigeria's cultural wealth is extraordinary and deeply threatened by rapid urbanization and cultural homogenization. EthnicHub ensures that no culture is forgotten, no language is lost, and no tradition fades into silence.";
  p.problem   = ["Nigeria's 250+ ethnic groups are poorly represented in the digital space.","Hundreds of indigenous languages are dying as younger generations disconnect from heritage.","Cultural knowledge held by elders is disappearing without being documented or transmitted.","There is no central digital platform where Nigerian cultures can be discovered and explored.","Inter-ethnic misunderstanding fuels conflict in the absence of cultural education and appreciation.","Diaspora Nigerians lose cultural connection with no digital community to maintain it."];
  p.who       = ["Members of all Nigerian ethnic and cultural communities","Elders and cultural custodians seeking to preserve their heritage digitally","Diaspora Nigerians maintaining cultural identity from abroad","Researchers, academics, and historians studying Nigerian cultures","Young Nigerians exploring and reconnecting with their heritage"];
  p.does      = ["Creates digital profiles for every Nigerian ethnic group and cultural community","Archives languages, oral traditions, songs, proverbs, and cultural practices","Connects diaspora Nigerians to their cultural communities and heritage","Facilitates inter-ethnic dialogue and cultural exchange reducing prejudice","Provides educational content making Nigerian cultural diversity a source of national pride"];
  p.features  = ["Ethnic group digital community pages with culture profiles and history","Language archive with recordings, translations, and learning resources","Elder interview series documenting oral history and cultural knowledge","Cultural calendar tracking festivals, events, and traditions across Nigeria","Inter-ethnic dialogue forum fostering understanding and shared identity"];
  p.how       = ["Cultural community creates and manages their ethnic group page","Elders contribute oral history, language recordings, and traditional knowledge","Community members engage, share, and celebrate their culture online","Young and diaspora members explore and reconnect through digital cultural content","Inter-ethnic discussions and shared experiences build national cohesion"];
  p.impact    = ["Hundreds of Nigerian languages documented and preserved for future generations","Young Nigerians reconnecting with cultural roots reducing identity crisis","Inter-ethnic understanding improved through accessible cultural education","Diaspora communities maintaining living cultural connection with Nigeria","Nigeria's cultural heritage recognized globally as a rich, diverse, and valued legacy"];
  p.nigeria   = ["Nigeria's cultural diversity is a national asset that is currently poorly preserved","Language loss is irreversible — EthnicHub creates a permanent digital record","Cultural pride reduces the identity vacuum that extremism often fills","Heritage tourism potential grows as Nigeria's cultures become globally discoverable","Unity in diversity requires Nigerians to actually know and respect each other's cultures"];
  p.investors = ["Digital cultural preservation attracts significant UNESCO and global heritage funding","Cultural tourism integration creating commercial cultural experience opportunities","Educational content licensing to schools and universities","Government culture ministry digital heritage programme partnerships","Diaspora monetization through cultural membership, events, and merchandise"];
  p.future    = ["AI language preservation tool recording and teaching endangered Nigerian languages","Virtual cultural museum experience for each of Nigeria's major ethnic groups","Annual digital and physical National Cultural Festival powered by EthnicHub","Inter-ethnic unity curriculum partnership with Federal Ministry of Education","Global diaspora cultural network connecting Nigerian communities worldwide"];
  p.subPlatforms = [
    {name:"CulturePages",    tagline:"Your ethnic group's digital home",          features:["Group profile builder","History and traditions content","Photo and video gallery","Event calendar","Community discussions"]},
    {name:"LangArchive",     tagline:"Preserve every Nigerian language",          features:["Audio recordings","Phrase translations","Grammar guides","Children's content","Elder contribution tools"]},
    {name:"ElderVoices",     tagline:"Documenting oral history and wisdom",       features:["Video interview archive","Story submission tools","Proverbs collection","Traditional knowledge library","Youth-elder dialogue tools"]},
    {name:"CultCalendar",    tagline:"Nigeria's cultural events and festivals",   features:["Festival listings","Event reminders","Cultural explanation guides","Community RSVPs","Tourism information"]},
    {name:"DiasporaHub",     tagline:"Cultural connection for Nigerians abroad",  features:["Diaspora community pages","Cultural news feed","Virtual event access","Send heritage home tools","Language learning resources"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MEDIAWATCH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="mediawatch";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MediaWatch is Nigeria's platform for media accountability and press transparency — where citizens can monitor, fact-check, and hold the Nigerian media ecosystem to the highest standards of accuracy, fairness, and public interest journalism. In an era of rampant misinformation, clickbait, and compromised editorial independence, MediaWatch is the people's watchdog — ensuring that those who report the news are themselves reported on when they fall short.";
  p.problem   = ["Misinformation and fake news spread rapidly through Nigerian social media and news platforms.","Very few mechanisms exist for holding Nigerian media organizations accountable.","Sponsored content and paid-for journalism are common but rarely disclosed.","Citizens have no easy tool to verify claims made in news stories.","Press freedom is threatened while editorial capture by political and business interests grows.","Journalism quality varies enormously and misleads millions of Nigerians daily."];
  p.who       = ["Citizens who consume Nigerian media and deserve accurate information","Journalists committed to maintaining high professional standards","Civil society organizations monitoring press freedom and media independence","Researchers studying media, misinformation, and public discourse in Nigeria","Advertisers wanting to associate their brands with credible, ethical media"];
  p.does      = ["Fact-checks claims made in Nigerian news stories and social media posts","Monitors and rates Nigerian media outlets for accuracy and editorial independence","Publishes transparency reports on media ownership and funding sources","Provides media literacy education for Nigerian citizens","Connects journalists with whistleblowers and source verification tools"];
  p.features  = ["Fact-checking database with verified verdicts on Nigerian news claims","Media outlet credibility scorecard updated continuously","Ownership and funding transparency registry for all major Nigerian media","Media literacy education modules for citizens and schools","Press freedom incident tracker monitoring journalist harassment and censorship"];
  p.how       = ["Citizens submit questionable news claims through the platform","Research team investigates and publishes a verified fact-check verdict","Media outlet behaviour is monitored and scorecard updated accordingly","Findings are published and shared widely through social and mainstream media","Pattern data drives media industry accountability campaigns and advocacy"];
  p.impact    = ["Misinformation debunked faster and more authoritatively than ever before","Nigerian media outlets improving standards under transparent public scrutiny","Citizens better equipped to identify reliable news from misleading content","Press freedom documented and defended with evidence-based advocacy","Nigeria's information ecosystem gradually becomes more trustworthy and credible"];
  p.nigeria   = ["Misinformation during elections has caused real violence and democratic harm in Nigeria","Political actors exploit weak media accountability to manipulate public opinion","A credible press is essential for Nigeria's democracy and national development","Media literacy is low — citizens need tools to navigate an increasingly complex information space","Strong independent media is a prerequisite for fighting corruption and bad governance"];
  p.investors = ["Media accountability platforms attract significant press freedom foundation funding","Revenue from media organization transparency certification subscriptions","Research and data services for academic institutions and international organizations","Training and media literacy programme delivery contracts","Government-independent partnership for civic education and misinformation response"];
  p.future    = ["AI-powered real-time misinformation detection across Nigerian social media","Automated fact-check alerts pushed to users when false news goes viral","National media standards board integration and accreditation system","Cross-border West Africa misinformation monitoring network","MediaWatch journalism school — training the next generation of accountability reporters"];
  p.subPlatforms = [
    {name:"FactCheck NG",    tagline:"Verify claims before sharing them",         features:["Claim submission","Verdict database","Verdict sharing tools","Category filters","False viral story alerts"]},
    {name:"MediaScore",      tagline:"Rate and monitor Nigerian media outlets",   features:["Outlet credibility ratings","Bias monitoring","Editorial independence scores","Complaint submission","Historical comparison"]},
    {name:"OwnershipMap",    tagline:"Who owns Nigeria's media?",                 features:["Outlet ownership database","Funding source disclosure","Political affiliation tracker","Conflict of interest flags","Public update submissions"]},
    {name:"PressDefend",     tagline:"Protecting journalists in Nigeria",         features:["Incident reporting","Safety resources","Legal support links","Journalist solidarity network","Freedom of press tracker"]},
    {name:"MediaLiteral",    tagline:"Teaching Nigerians to read news critically",features:["Media literacy courses","Fake news identification guide","Social media verification tools","Youth programme content","School curriculum resources"]}
  ];
})();


// ============================================================
//  FULL CONTENT — GOVMENTWATCH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="gomentwatch";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "GomentWatch is Nigeria's citizen-powered government accountability platform — giving ordinary Nigerians the tools to monitor their elected officials, track government spending, report governance failures, and demand answers from those who hold public power. Because government is supposed to work for the people, and GomentWatch ensures Nigerians always know whether it is — and has the tools to act when it is not.";
  p.problem   = ["Most Nigerians have no way to know what their elected representatives are actually doing.","Government budgets are published but not accessible, understandable, or monitored by citizens.","Corruption thrives in the darkness of governmental opacity and citizen disengagement.","Constituency projects are frequently ghost-projects that never actually get delivered.","Citizens feel powerless to hold government accountable between election cycles.","Public contracts are awarded without transparency, inviting fraud and inflated costs."];
  p.who       = ["Citizens wanting to know what their government is doing with public resources","Civil society organizations working on governance and anti-corruption campaigns","Journalists covering government, politics, and public finance","Academic researchers studying governance and political economy in Nigeria","International organizations monitoring Nigeria's governance and accountability progress"];
  p.does      = ["Tracks government budgets from allocation to expenditure in real time","Monitors legislative activity — bills, votes, and attendance of elected officials","Enables citizens to report governance failures and infrastructure problems","Publishes government contract awards and procurement data transparently","Provides easy-to-understand analysis of government performance by sector and state"];
  p.features  = ["Budget tracker: follow public money from allocation to spending","Legislative monitor: voting records, attendance, and bill tracking for every lawmaker","Citizen complaint portal for governance failures and public service breakdowns","Government contract transparency register with value, vendor, and status","Governance report cards for all 36 states, 774 LGAs, and federal institutions"];
  p.how       = ["Data is sourced from official government portals, FOIA requests, and partner CSOs","Citizens contribute reports on service failures and infrastructure problems in their communities","Journalists and researchers use the platform to investigate and publish findings","Accountability reports are shared widely to drive public discourse and action","Patterns of failure or corruption are escalated to relevant agencies and the public"];
  p.impact    = ["Nigerians more informed about government actions and public resource use","Corruption made harder through mandatory public visibility of contracts and spending","Elected officials improving performance under sustained citizen scrutiny","Infrastructure problems reported and escalated to responsible authorities faster","A culture of accountability shifting Nigeria from impunity toward consequence for public office holders"];
  p.nigeria   = ["Corruption costs Nigeria an estimated $18 billion annually — transparency is the first remedy","Citizens' democratic power must extend beyond election day to daily governance oversight","Constituency project fraud robs millions of Nigerians of infrastructure they were promised","An informed citizenry is the most powerful anti-corruption tool Nigeria has","Nigeria's development goals cannot be reached while public resources are diverted through opacity"];
  p.investors = ["Governance accountability attracts substantial international funding from democracy foundations","Revenue from civil society, media, and research institution data subscriptions","Government transparency certification services for progressive administrations","Training and capacity-building programmes for CSOs and journalists","USAID, DFID, MacArthur, and similar institutional funding partnerships"];
  p.future    = ["AI-powered anomaly detection identifying suspicious spending patterns","Real-time FOIA request tracker with automated escalation for non-responses","Nigeria's first comprehensive political finance transparency registry","Integration with ICPC, EFCC, and anti-corruption agency data","GomentWatch citizen reporter network in all 774 LGAs across Nigeria"];
  p.subPlatforms = [
    {name:"BudgetEye",       tagline:"Follow public money from allocation to spending", features:["Federal budget tracker","State budget comparisons","Expenditure alerts","Sectoral analysis","Citizens guide to the budget"]},
    {name:"LegisTrack",      tagline:"Monitor your lawmakers daily",              features:["Attendance records","Voting history","Bill sponsorship","Constituency project tracker","Lawmaker contact tools"]},
    {name:"CitiReport",      tagline:"Report governance failures near you",       features:["Infrastructure complaint tool","Agency routing","Report tracking","Anonymous option","Community upvote system"]},
    {name:"ContractWatch",   tagline:"Transparent public procurement data",       features:["Contract register","Vendor profiles","Value comparison","Completion status","Red flag reporting"]},
    {name:"StateReport",     tagline:"Government report cards by state and LGA",  features:["State governance score","LGA performance data","Sector-by-sector ratings","Peer state comparison","Trend over time"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAIJYSHIELD  (Strategic Platform)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="naijyshield";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NaijyShield is Nigeria's national digital security and protection platform — the strategic intelligence infrastructure underpinning every safety, security, and emergency response system across the Naijy ecosystem. NaijyShield aggregates threat intelligence, coordinates inter-agency security response, and provides strategic decision-makers with the real-time situational awareness needed to protect 220 million Nigerians. It is Nigeria's digital security nervous system — always alert, always connected.";
  p.problem   = ["Nigeria's security agencies operate in silos with poor inter-agency information sharing.","Threat intelligence is fragmented and rarely reaches decision-makers in actionable form.","Terrorist, insurgent, and criminal activity benefits from information asymmetry.","Citizens have no early warning system for emerging security threats in their areas.","Border security, maritime, and airspace monitoring lack digital coordination infrastructure.","Security data is generated but not aggregated, analysed, or acted upon strategically."];
  p.who       = ["Federal and state security agencies and their leadership","Military and police command structures requiring strategic intelligence","Government and executive decision-makers managing national security","National security researchers and strategic analysts","International security partners and allied intelligence agencies"];
  p.does      = ["Aggregates security intelligence from all Naijy platforms into a unified picture","Provides real-time threat assessment and situational awareness dashboards","Coordinates multi-agency security response to emerging threats","Issues early warning alerts to citizens and agencies about developing threats","Supports strategic security planning with trend analysis and predictive modelling"];
  p.features  = ["National security intelligence aggregation from SafeNation, CyberNet, and all platforms","Real-time threat assessment dashboard for decision-makers","Multi-agency coordination and communication tools","Citizen early warning system with tiered alert levels","Predictive security trend modelling and scenario planning tools"];
  p.how       = ["Security data flows into NaijyShield from all connected Naijy platforms","Analysts review, assess, and classify threats in real time","Relevant agencies and command structures are alerted and coordinated","Citizens in affected areas receive appropriate early warning notifications","Incident data feeds back into predictive models improving future threat anticipation"];
  p.impact    = ["Faster, more coordinated security response saving lives across Nigeria","Reduced terrorist and criminal success rate through better intelligence sharing","Citizens safer through early warning systems operating at national scale","Security agencies more effective through shared intelligence infrastructure","Nigeria's national security architecture strengthened through digital coordination"];
  p.nigeria   = ["Nigeria faces simultaneous security threats across multiple regions requiring coordinated response","Boko Haram, banditry, and separatist violence demand intelligence-led security strategy","Border porosity requires a comprehensive, data-driven border security approach","Urban crime and cybercrime both require integrated digital intelligence infrastructure","Nigeria's security must modernize — NaijyShield is the platform for that transformation"];
  p.investors = ["National security infrastructure is a long-term government contract opportunity","Strategic platform with government partnership and funding at federal level","Data analysis and intelligence tools with ongoing development contracts","International security partnership and co-investment opportunities","Critical infrastructure status provides regulatory protection and priority access"];
  p.future    = ["AI-powered predictive threat modelling at national scale","Integration with military, police, and DSS command information systems","Satellite imagery and drone data integration for border and terrain monitoring","West Africa regional security intelligence sharing network","Full integration with Interpol and international security cooperation frameworks"];
  p.subPlatforms = [
    {name:"ThreatIntel",     tagline:"National security intelligence aggregation", features:["Multi-source data fusion","Threat classification","Confidence scoring","Historical analysis","Strategic briefing tools"]},
    {name:"AgencyLink",      tagline:"Multi-agency security coordination",        features:["Secure inter-agency messaging","Joint operation management","Evidence sharing","Command coordination","Incident command tools"]},
    {name:"EarlyAlert",      tagline:"Citizen security early warning system",     features:["Tiered alert broadcasts","Location-based warnings","Agency-initiated alerts","Response guidance","All-clear notifications"]},
    {name:"BorderWatch",     tagline:"Digital border and perimeter security",     features:["Border crossing monitoring","Suspicious activity reports","Smuggling intelligence","Cross-border coordination","Maritime and airspace alerts"]},
    {name:"SecurityAnalytics",tagline:"Strategic security trend analysis",        features:["Incident pattern analysis","Regional risk heatmaps","Prediction modelling","Policy scenario planning","Executive briefing generation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — REVENUGEMAP  (Strategic Platform)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="revenuemap";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RevenueMap gives every Nigerian an unprecedented, transparent view of where the country's money comes from — oil revenue, tax income, customs duties, grants, and every other public income stream, mapped by source, volume, and trend. For too long, Nigeria's national revenue has been discussed without evidence, allocated without transparency, and questioned without data. RevenueMap changes that permanently — because you cannot demand accountability for money you cannot see.";
  p.problem   = ["Nigeria's public revenue data is not presented in an accessible, citizen-friendly way.","Revenue figures are frequently disputed, with little basis for public verification.","Citizens cannot tell where government money comes from or whether it matches announcements.","Oil revenue volatility causes budget crises that citizens experience but do not understand.","Non-oil revenue growth is poorly communicated despite its critical importance.","Corruption in revenue collection is enabled by opacity in how much should be collected."];
  p.who       = ["Citizens seeking to understand how Nigeria's public finances work","Journalists and civil society organizations covering public finance","Investors and businesses assessing Nigeria's fiscal health and stability","Academic researchers and economists studying Nigeria's revenue landscape","International financial institutions monitoring Nigeria's fiscal performance"];
  p.does      = ["Maps all sources of Nigeria's public revenue with real-time data visualization","Tracks oil revenue, tax collection, customs, and non-oil income by source","Compares actual revenue to budget projections highlighting gaps transparently","Publishes revenue trends and analysis in plain language for every Nigerian","Enables citizens and researchers to access, download, and analyse revenue data"];
  p.features  = ["Interactive national revenue map with drill-down by source and period","Oil revenue tracker with global price correlation","Tax collection performance dashboard by agency and revenue type","Budget vs actual revenue comparison with variance analysis","Plain-language revenue explainers and citizens guide to public finance"];
  p.how       = ["Data sourced from FIRS, NNPC, Customs, CBN, and official government portals","Automatically updated and verified on a monthly basis","Presented in visual formats accessible to everyone from students to economists","Citizens can explore, filter, and download datasets for their own analysis","Analysts publish monthly commentary contextualizing revenue performance"];
  p.impact    = ["Every Nigerian able to see where national money comes from for the first time","Revenue manipulation made harder through public visibility and verification","Better public understanding of oil price impacts on Nigeria's budget","Non-oil revenue growth tracked and celebrated encouraging diversification","Data-driven public discourse replacing opinion-based arguments about national finance"];
  p.nigeria   = ["Nigeria's over-reliance on oil revenue is the biggest fiscal risk the country faces","Tax compliance improves when citizens can see what is being collected and how","Revenue transparency directly reduces corruption in collection agencies","Citizens holding FIRS, NNPC, and Customs accountable requires data they can understand","Nigeria's Sovereign Wealth Fund and FAAC allocations need public oversight infrastructure"];
  p.investors = ["Government transparency platform with long-term institutional funding potential","Data subscription services for financial institutions, analysts, and rating agencies","Academic licensing for research institutions globally","International development organization partnership for fiscal transparency programs","Integration with Nigeria's Open Government Partnership commitments"];
  p.future    = ["Real-time FAAC allocation tracker down to state and LGA level","AI revenue forecasting model for public and policy use","Integration with NNPC's petroleum revenue audit processes","State revenue comparison league table encouraging competitive tax compliance","Quarterly national revenue town hall powered by RevenueMap data"];
  p.subPlatforms = [
    {name:"OilRevenue",      tagline:"Track Nigeria's petroleum income",          features:["Crude oil production data","Export revenue tracker","NNPC lifting data","Global oil price correlation","Monthly revenue comparisons"]},
    {name:"TaxTracker",      tagline:"Monitor national tax collection performance",features:["FIRS collection data","VAT performance","Company tax analysis","Personal income tax trends","State IGR comparisons"]},
    {name:"CustomsWatch",    tagline:"Imports, exports, and customs duties",      features:["Customs duty collections","Import value data","Export revenue tracking","Port-by-port breakdown","Trade balance visualization"]},
    {name:"BudgetGap",       tagline:"Budget projections vs actual revenue",      features:["Revenue target comparison","Variance analysis","Deficit/surplus tracker","Quarterly performance","Historical trend charts"]},
    {name:"RevenueLearn",    tagline:"Understand Nigeria's public finances",      features:["Plain-language guides","Interactive revenue explainers","School curriculum content","Budget literacy tools","Citizens finance glossary"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAIJYPULSE  (Strategic Platform)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="naijypulse";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NaijyPulse is the real-time heartbeat of Nigeria — a national monitoring and smart city intelligence platform that aggregates data from all Naijy platforms to give decision-makers, researchers, and citizens a live picture of what is happening across the country. From public safety incidents to agricultural conditions, urban congestion to disease outbreak patterns, NaijyPulse sees Nigeria as it truly is, in real time, enabling faster and smarter national responses to every challenge.";
  p.problem   = ["Nigeria has no unified national data intelligence system for real-time monitoring.","Government decisions are frequently made without access to current, accurate national data.","Crises escalate because early warning signs are not detected or acted upon quickly enough.","Smart city potential across Lagos, Abuja, and other urban centres is untapped.","National planning relies on outdated census and survey data rather than real-time intelligence.","Coordination failures during emergencies cost lives and resources unnecessarily."];
  p.who       = ["Federal and state government decision-makers and planners","Urban management authorities in Nigeria's major cities","Emergency management agencies needing real-time situational awareness","Researchers studying Nigeria's socioeconomic, safety, and environmental landscape","International organizations monitoring Nigeria's development indicators"];
  p.does      = ["Aggregates real-time data from all 110 Naijy platforms into a unified intelligence dashboard","Provides national emergency early warning and coordination support","Monitors urban indicators: traffic, safety, health, utilities, and environment","Generates real-time national reports on key social and economic conditions","Supports smart city management tools for Nigeria's urban centres"];
  p.features  = ["National real-time intelligence dashboard aggregating all Naijy platform data","Emergency early warning system with multi-agency alert broadcasting","Urban monitoring tools: traffic, power, health, and safety by city","National condition reports generated automatically on configurable schedules","Smart city management console for urban authority decision-making"];
  p.how       = ["Data streams into NaijyPulse from all Naijy platforms continuously","Algorithms identify patterns, anomalies, and emerging trends","Relevant alerts are issued to appropriate agencies and decision-makers","City management authorities use the console to monitor and respond to urban conditions","Reports are published for government, researchers, and the public on regular schedules"];
  p.impact    = ["Nigeria's first real-time national situation awareness system","Faster emergency response as crises are detected and coordinated digitally","Smarter city management improving quality of life for millions of urban Nigerians","Evidence-based government decision-making replacing guesswork and outdated data","National data infrastructure that strengthens every aspect of governance and development"];
  p.nigeria   = ["Nigeria governs 220 million people largely with analogue tools — NaijyPulse changes that","Lagos, Abuja, and Port Harcourt need smart city infrastructure to manage rapid urbanization","Emergency coordination failures during floods, pandemics, and security events are preventable","Real-time data infrastructure positions Nigeria as Africa's digital governance leader","Development goals require real-time measurement — you cannot manage what you cannot see"];
  p.investors = ["National data infrastructure platform with government as primary client","Long-term government contracts for national monitoring and smart city services","International development bank investment in governance and smart city infrastructure","Data analytics and intelligence service revenue from research and private sector clients","Platform powers the entire Naijy ecosystem — strategic value beyond standalone revenue"];
  p.future    = ["Satellite imagery integration for environmental and infrastructure monitoring","IoT sensor network integration for air quality, flood, and infrastructure data","AI-powered predictive modelling for national crisis prevention","Full smart city suite for all state capital cities across Nigeria","Africa-wide expansion connecting national monitoring systems across the continent"];
  p.subPlatforms = [
    {name:"NationDash",      tagline:"Nigeria's real-time national dashboard",    features:["Live data aggregation","Key indicator tiles","Trend visualization","Alert integration","Export for briefings"]},
    {name:"CrisisWatch",     tagline:"Early warning and emergency coordination",  features:["Anomaly detection","Multi-agency alerts","Incident command tools","Resource tracking","All-clear signals"]},
    {name:"SmartCity",       tagline:"Urban intelligence for Nigeria's cities",   features:["Traffic monitoring","Power availability","Health facility status","Safety incident map","Urban services tracker"]},
    {name:"NaijyReports",    tagline:"Automated national condition reports",      features:["Daily situation summaries","Weekly trend reports","Monthly performance reviews","Custom report builder","Public report publication"]},
    {name:"DataGov",         tagline:"Open data for researchers and the public",  features:["Dataset catalogue","API access","Download tools","Visualization builder","Methodology documentation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — EXPENDITUREMAP  (Strategic Platform)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="expendituremap";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "ExpenditureMap shows exactly where Nigeria's public money goes — from the federal allocation to the last naira spent at state and LGA level. By making government expenditure visible, understandable, and trackable in real time, ExpenditureMap transforms every Nigerian into an informed watchdog over public spending. Billions lost to corruption, ghost workers, and inflated contracts begin to shrink when spending is in full public view. Accountability starts with visibility.";
  p.problem   = ["Nigeria loses an estimated $18B+ annually to corruption including public expenditure fraud.","Budget allocations are published but actual spending is rarely tracked or disclosed.","Ghost workers on government payrolls cost billions without delivering any public service.","Infrastructure spending is inflated through contract padding that no one publicly monitors.","Citizens have no tool to follow public money from approval through to actual delivery.","Expenditure data from different agencies is incompatible, incomplete, and inaccessible."];
  p.who       = ["Citizens demanding accountability for how public money is spent","Civil society and anti-corruption organizations tracking government expenditure","Journalists investigating public finance and contract fraud","Budget analysts and economists studying Nigeria's fiscal landscape","International donors and lenders monitoring conditionality on Nigerian public spending"];
  p.does      = ["Maps all government expenditure from federal to LGA level with real data","Tracks capital and recurrent spending by ministry, agency, and project","Publishes contractor payments and infrastructure spending data transparently","Enables citizens to flag suspicious expenditure patterns for investigation","Compares spending to budget allocations highlighting unexplained variances"];
  p.features  = ["National expenditure map with federal, state, and LGA drill-down","Ministry and agency spending tracker by category and time period","Infrastructure project spending tracker from allocation to payment","Suspicious expenditure flagging tool for citizens and CSOs","Budget versus actual spending comparison with variance alerts and explanations"];
  p.how       = ["Data sourced from OAGF, state accountant-generals, and official portals","Published and updated monthly with prior month verification","Citizens and CSOs browse, filter, and analyse expenditure data freely","Suspicious items are flagged and escalated to ICPC, EFCC, and relevant agencies","Accountability reports published quarterly driving public discourse and official responses"];
  p.impact    = ["Corruption in public expenditure reduced through mandatory public visibility","Ghost workers identified and removed from payrolls through transparent salary data","Infrastructure contract fraud exposed through public cost benchmarking","Government officials aware that every naira spent is being publicly tracked","Billions returned to public purposes as corruption becomes harder to hide"];
  p.nigeria   = ["Nigeria's anti-corruption war needs public data infrastructure to succeed","The Nigerian public has a constitutional right to know how their taxes are spent","Expenditure transparency is the single most powerful deterrent to public fund theft","International lenders and donors require transparent expenditure monitoring as a condition","Building a culture of public finance accountability requires tools that enable citizen oversight"];
  p.investors = ["Public finance transparency platforms attract massive international development funding","Government transparency certification and audit support contracts","Research institution data subscription revenue","Integration with anti-corruption agency operations providing institutional value","DFID, World Bank, and USAID funding channels for fiscal transparency programmes"];
  p.future    = ["Real-time expenditure tracking with bank-level payment integration","AI anomaly detection flagging suspicious spending patterns automatically","Constituency-level expenditure tracker for all 360 federal constituencies","Ghost worker detection system cross-referencing payrolls with biometric data","Integration with IPPIS, GIFMIS, and IPSAS reporting frameworks"];
  p.subPlatforms = [
    {name:"SpendMap",        tagline:"Where does Nigeria's money actually go?",   features:["Federal spending map","State expenditure breakdown","LGA spending tracker","Sector allocation views","Year-on-year comparison"]},
    {name:"ProjectTrack",    tagline:"Follow infrastructure projects end-to-end", features:["Project registry","Contractor disclosure","Payment milestone tracker","Completion verification","Citizen inspection reports"]},
    {name:"PayrollWatch",    tagline:"Government payroll transparency system",    features:["MDAs payroll size","Wage bill trends","Ghost worker flags","Biometric verification links","State payroll comparison"]},
    {name:"ContractAlert",   tagline:"Flag suspicious contracts and costs",       features:["Contract value benchmarking","Cost comparison tool","Red flag reporting","CSO escalation tools","EFCC/ICPC referral"]},
    {name:"SpendReport",     tagline:"Quarterly public expenditure reports",      features:["Quarterly publications","Infographic summaries","Plain-language analysis","Downloadable data","Media-ready briefing packs"]}
  ];
})();


// ============================================================
//  FULL CONTENT — INFRAASSETS  (Strategic Platform)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="infraassets";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "InfraAssets is Nigeria's first comprehensive national infrastructure and assets reality map — a live, verified picture of what exists, where it is, what condition it is in, and whether it is actually working. Roads, bridges, hospitals, schools, power infrastructure, water systems, government buildings — all mapped, monitored, and publicly visible. For a nation that has spent trillions on infrastructure with questionable results, InfraAssets finally answers the most important question: what do we actually have, and what actually works?";
  p.problem   = ["Nigeria has no verified, comprehensive database of its national infrastructure assets.","Billions are spent duplicating infrastructure that already exists in underused locations.","Critical infrastructure failure is only discovered when it causes a crisis.","Ghost infrastructure — projects marked complete that do not exist — wastes enormous public funds.","Government cannot plan efficiently without knowing what assets and infrastructure it has.","Citizens cannot report or track the condition of infrastructure in their communities."];
  p.who       = ["Federal and state government ministries managing infrastructure portfolios","Urban planners and engineers designing new infrastructure and services","Citizens reporting infrastructure failure and poor conditions in their communities","Journalists investigating ghost projects and infrastructure fraud","International donors and investors assessing Nigeria's infrastructure baseline"];
  p.does      = ["Builds and maintains a verified national infrastructure asset registry","Maps the location, condition, and operational status of all public infrastructure","Enables citizens to report infrastructure failure and deterioration","Tracks government infrastructure projects from announcement through to verified completion","Provides planners and investors with evidence-based infrastructure gap analysis"];
  p.features  = ["National infrastructure map with asset-by-asset detail","Asset condition tracker: operational, degraded, failed, or non-existent","Citizen infrastructure failure reporting tool with photo and location","Project tracker: from budget approval to verified physical completion","Infrastructure gap analysis dashboard by sector, state, and LGA"];
  p.how       = ["Infrastructure is entered by government agencies, verified by field teams and satellites","Citizens contribute real-time condition reports with photo evidence","Condition data updates automatically based on citizen and official reports","New project announcements are tagged and tracked until physical verification of completion","Analytics identify infrastructure gaps, duplication, and maintenance priorities"];
  p.impact    = ["Nigeria's first verified national infrastructure asset registry created","Ghost infrastructure exposed and public funds protected from fraudulent project claims","Infrastructure planning made evidence-based for the first time","Citizens empowered to report and track infrastructure in their communities","Maintenance prioritized for the most critical failing assets across the country"];
  p.nigeria   = ["Nigeria has spent over $100B on infrastructure with disputed outcomes — InfraAssets provides the truth","Infrastructure deficit directly limits economic growth and quality of life for all Nigerians","Ghost projects have robbed Nigeria of trillions over decades — verification ends that era","Effective maintenance of existing assets is far cheaper than building new ones without data","Every development planning cycle needs an accurate baseline — InfraAssets provides it"];
  p.investors = ["National infrastructure database has long-term government contract value","Engineering firm and construction company data subscription revenue","International development bank partnership for infrastructure investment planning","Insurance and risk assessment company data licensing opportunities","Satellite and field verification service contracts for ongoing asset monitoring"];
  p.future    = ["Drone and satellite imagery integration for remote asset condition verification","IoT sensor network connecting critical infrastructure to real-time monitoring","AI-powered infrastructure maintenance prediction modelling","Integration with FMW&H, state ministries, and infrastructure agencies nationwide","West Africa infrastructure database expansion connecting all national asset registries"];
  p.subPlatforms = [
    {name:"AssetMap",        tagline:"Every public asset mapped and verified",    features:["National asset register","Location mapping","Category filters","Condition status","Ownership records"]},
    {name:"ConditionTrack",  tagline:"Real-time infrastructure health monitoring",features:["Condition ratings","Citizen report integration","Deterioration alerts","Maintenance scheduling","Historical condition data"]},
    {name:"ProjectVerify",   tagline:"Verify that projects actually get built",   features:["Announcement tracker","Construction milestone monitoring","Satellite image comparison","Completion verification","Ghost project flagging"]},
    {name:"GapAnalysis",     tagline:"Identify Nigeria's infrastructure deficits",features:["Gap visualization by sector","Underserved community mapping","Priority scoring","Investment opportunity identification","Peer state comparison"]},
    {name:"CitiReport",      tagline:"Report broken infrastructure near you",     features:["Photo evidence upload","Location tagging","Agency routing","Report status tracking","Community upvote system"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HAUSAWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="hausawealth";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HausaWealth is the dedicated digital prosperity platform for Nigeria's Hausa-Fulani communities — connecting farmers, traders, artisans, and entrepreneurs across the north to markets, finance, skills, and opportunity. Built in the languages and context of the north, HausaWealth ensures that northern Nigeria's enormous economic potential is unlocked for the people who live and work there.";
  p.problem   = ["Northern Nigeria has the highest poverty rates despite vast agricultural and mineral wealth.","Hausa-speaking entrepreneurs lack digital tools built for their language and context.","Access to formal finance is extremely limited across northern states.","Northern farmers sell at low prices with no market connectivity.","Youth unemployment is critically high across the north with few digital pathways.","Trade networks exist but are entirely offline and limited in reach."];
  p.who       = ["Hausa and Fulani farmers, traders, and artisans","Northern entrepreneurs building businesses in any sector","Youth seeking employment, skills, and opportunity in northern Nigeria","Women's cooperatives and savings groups in northern communities","Investors seeking to engage northern Nigeria's emerging market"];
  p.does      = ["Connects northern businesses to national and international markets","Provides financial tools and microfinance access tailored for the north","Delivers business training and skills content in Hausa","Supports agricultural trade connecting northern farmers to buyers","Builds a digital economic community for northern Nigerian prosperity"];
  p.features  = ["Hausa-language business platform with trade and market tools","Northern agricultural marketplace for crops and livestock","Microfinance and savings cooperative management tools","Business skills content in Hausa and Pidgin","Northern entrepreneur directory and networking tools"];
  p.how       = ["User registers in Hausa and builds a business or farmer profile","Lists products, services, or skills for buyers to discover","Connects to buyers, partners, and financial services through the platform","Accesses training content and mentorship in their own language","Grows business with data, connections, and financial tools"];
  p.impact    = ["Northern entrepreneurs digitally connected to national and global markets","Reduced poverty through better market access and financial inclusion","Northern agricultural produce earning fair prices for the first time","A thriving northern digital economy lifting millions out of poverty","Hausa language and culture celebrated as a platform for prosperity"];
  p.nigeria   = ["Northern Nigeria's development gap is a national security and economic crisis","Agricultural wealth in the north is being lost to poor markets and infrastructure","Youth unemployment in the north fuels insecurity — economic opportunity is the solution","Every zone of Nigeria must participate in the digital economy for the nation to grow","Northern integration into Nigeria's digital economy is essential for unity"];
  p.investors = ["Northern Nigeria is an underserved market of 80M+ people — enormous opportunity","Agricultural and trade transaction fees generating recurring revenue","Microfinance facilitation fees from lender partners","Government northern development programme platform contracts","International development organization funding for northern Nigeria investment"];
  p.future    = ["Full Hausa-language AI business assistant","Northern Nigeria commodity exchange and price discovery platform","Cattle and livestock digital marketplace","Integration with NEMA and federal northern development agencies","Cross-border trade tools connecting northern Nigeria to Niger, Chad, and Cameroon"];
  p.subPlatforms = [
    {name:"NorthMarket",     tagline:"Buy and sell across northern Nigeria",      features:["Product listings","Crop marketplace","Livestock trading","Price discovery","Logistics coordination"]},
    {name:"HausaLearn",      tagline:"Business skills content in Hausa",         features:["Hausa-language courses","Video lessons","Business basics","Trade skills","Financial literacy"]},
    {name:"NorthFinance",    tagline:"Microfinance and savings for the north",    features:["Cooperative management","Loan applications","Savings groups","Islamic finance options","Grant alerts"]},
    {name:"NorthConnect",    tagline:"Networking for northern entrepreneurs",     features:["Business directory","Community forums","Event listings","Mentorship matching","Trade associations"]},
    {name:"NorthFarm",       tagline:"Digital tools for northern farmers",        features:["Crop listings","Buyer matching","Weather alerts","Agronomic advice","Input marketplace"]}
  ];
})();


// ============================================================
//  FULL CONTENT — EASTERNWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="easternwealth";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EasternWealth is the digital prosperity engine for Nigeria's South-East — amplifying the legendary entrepreneurial spirit of the Igbo people and connecting eastern businesses, traders, and artisans to national and global markets. From Onitsha traders to Aba manufacturers to Enugu tech founders, EasternWealth ensures that the east's energy, creativity, and commercial genius has a powerful digital infrastructure behind it.";
  p.problem   = ["South-East businesses are nationally under-represented in the digital economy.","Aba manufacturers produce world-quality goods but reach very limited markets.","Eastern traders lack digital tools to scale their networks beyond physical hubs.","Youth in the east leave for other regions because local opportunities aren't visible online.","No platform exists celebrating and amplifying the east's commercial culture and identity."];
  p.who       = ["Igbo entrepreneurs, traders, and manufacturers","Aba, Onitsha, Enugu, Owerri, and Abakaliki business owners","Eastern diaspora investing in and trading with the south-east","Youth in the south-east seeking digital economic opportunity","Investors targeting the south-east's high-growth commercial ecosystem"];
  p.does      = ["Connects eastern businesses to national buyers and international markets","Showcases Aba-made and eastern-manufactured products to global audiences","Provides digital tools for traders operating in eastern market hubs","Builds an eastern entrepreneur network for knowledge and deal sharing","Delivers business training and finance access tailored for eastern SMEs"];
  p.features  = ["Eastern products marketplace with export showcase","Onitsha and Aba market digital trading hub","Eastern entrepreneur directory and network","Business training content aligned to eastern commercial culture","Finance and investment access for eastern SMEs"];
  p.how       = ["Business registers and creates a verified eastern business profile","Lists products or services for national and international discovery","Connects to buyers, distributors, and partners through the platform","Accesses training, mentorship, and finance tools","Grows brand nationally and globally from an eastern base"];
  p.impact    = ["Aba and eastern manufacturers reaching national and global buyers","Eastern traders scaling operations beyond physical market limits","Youth staying in the east because digital opportunities are real and visible","South-East GDP growing through digitized commerce and market access","Eastern entrepreneurial culture celebrated and amplified globally"];
  p.nigeria   = ["South-East is Nigeria's commercial heartbeat — it deserves world-class digital infrastructure","Aba manufacturing alone has multi-billion naira export potential largely untapped","Eastern trade networks are the backbone of Nigeria's informal commerce","Digital tools for the east support national economic diversification goals","A prosperous south-east strengthens national unity and collective progress"];
  p.investors = ["South-East commerce is one of Nigeria's most dynamic and resilient economic zones","Manufacturing and export marketplace transaction fees","Premium business listing and visibility services","Trade finance facilitation revenue from partner lenders","Diaspora investment channel creating consistent capital flow"];
  p.future    = ["Aba Made global export platform reaching international buyers directly","Eastern manufacturing quality certification programme","Igbo-language business tools for local entrepreneurs","Eastern commodity exchange for palm oil, cassava, and other eastern crops","Cross-border Igbo diaspora trade network connecting Nigeria, UK, USA, and West Africa"];
  p.subPlatforms = [
    {name:"AbaMade",         tagline:"Eastern manufactured products for the world", features:["Product showcase","Export listings","Manufacturer profiles","Quality certification","International buyer tools"]},
    {name:"EastMarket",      tagline:"Digital hub for eastern traders",            features:["Onitsha market online","Aba trade listings","Price discovery","Bulk buyer matching","Transport coordination"]},
    {name:"IgboNetwork",     tagline:"Eastern entrepreneur connections",           features:["Business directory","Deal forum","Investment network","Mentorship matching","Diaspora connect"]},
    {name:"EastGrow",        tagline:"Business training for eastern SMEs",         features:["SME training content","Export guides","Finance literacy","Business registration help","Growth planning tools"]},
    {name:"EastInvest",      tagline:"Investment tools for the south-east",        features:["Investment opportunities","Diaspora investment portal","Business valuation guides","Pitch deck tools","Investor matching"]}
  ];
})();


// ============================================================
//  FULL CONTENT — WESTERNWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="westernwealth";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "WesternWealth powers the digital prosperity of Nigeria's South-West — connecting Lagos, Ogun, Oyo, Osun, Ondo, and Ekiti businesses to each other, to national markets, and to the world. From tech startups in Yaba to cocoa farmers in Ondo to manufacturers in Sagamu, WesternWealth ensures that the south-west's dynamic, educated, internationally connected economy has the platform infrastructure it needs to grow further, faster, and more inclusively.";
  p.problem   = ["Despite Lagos being Nigeria's commercial capital, many south-west businesses lack digital infrastructure.","Agricultural producers in Oyo, Osun, and Ondo struggle with market access and fair pricing.","South-west SMEs outside Lagos are invisible to national buyers and investors.","Women entrepreneurs in the south-west need tailored digital business support.","The creative and tech economy of the south-west is powerful but poorly organized."];
  p.who       = ["Lagos tech founders and creative economy entrepreneurs","Agricultural producers in Oyo, Osun, Ondo, and Ekiti","South-west manufacturers and industrial operators","Women-owned businesses and cooperatives across the south-west","Investors and diaspora targeting south-west Nigeria opportunities"];
  p.does      = ["Connects south-west businesses to national and international markets","Amplifies the Lagos tech and creative ecosystem with organized platform tools","Supports agricultural producers in inner south-west states with market access","Delivers south-west-specific business intelligence and market data","Builds south-west business networks for partnership and investment"];
  p.features  = ["South-west business marketplace and trade platform","Tech and creative economy directory and collaboration tools","Agricultural trade module for Oyo, Osun, Ondo, and Ekiti farmers","South-west investment opportunity board","Business networking and mentorship tools for south-west entrepreneurs"];
  p.how       = ["Business registers and sets up a south-west business profile","Lists products, services, or investment opportunities","Connects to buyers, partners, and investors through the platform","Accesses business training, market data, and financial tools","Grows with a supportive south-west business community behind them"];
  p.impact    = ["South-west businesses outside Lagos gaining national visibility","Agricultural producers earning fair prices through direct buyer connections","South-west tech and creative economy organised and globally visible","Women entrepreneurs in the south-west scaling with digital tools","South-west GDP growth accelerated by digital market infrastructure"];
  p.nigeria   = ["South-West is Nigeria's most developed region — its digital tools must match that potential","Lagos tech and creative ecosystem needs organized infrastructure to reach its ceiling","Inner south-west states are falling behind Lagos — WesternWealth bridges that gap","South-west agricultural produce has major export potential with better market access","A stronger south-west economy benefits all of Nigeria"];
  p.investors = ["South-west Nigeria has the highest concentration of bankable, digital-ready businesses","Transaction fees, premium listings, and investment facilitation revenue","Tech and creative economy platform building long-term community value","Agricultural marketplace generating recurring transaction revenue","Partnership with Lagos State government and south-west development bodies"];
  p.future    = ["Lagos-Ibadan innovation corridor digital platform","South-west agro-export marketplace for cocoa, palm oil, and cashew","Creative economy export platform for fashion, music, and film","South-west diaspora investment portal","Yoruba-language business content for local accessibility"];
  p.subPlatforms = [
    {name:"LagosHub",        tagline:"Lagos tech and creative business network",  features:["Tech startup directory","Creative economy listings","Collaboration tools","Investor connect","Event hub"]},
    {name:"WestFarm",        tagline:"Agricultural market access for south-west", features:["Crop and produce listings","Cocoa and palm oil marketplace","Buyer matching","Price intelligence","Export tools"]},
    {name:"WestMarket",      tagline:"South-west trade and commerce platform",    features:["Product marketplace","SME directory","B2B tools","Logistics links","Trade financing"]},
    {name:"WestInvest",      tagline:"Investment opportunities in south-west",    features:["Opportunity board","Diaspora connect","Pitch tools","Due diligence profiles","Investor matching"]},
    {name:"WestWomen",       tagline:"Digital tools for women entrepreneurs",     features:["Women business directory","Cooperative management","Mentorship matching","Finance access","Training content"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NIGERDELTAWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="nigerdeltawealth";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NigerDeltaWealth is the digital platform dedicated to the economic empowerment and prosperity of the Niger Delta region — connecting the people of Rivers, Bayelsa, Delta, Edo, Cross River, and Akwa Ibom to diversified economic opportunities beyond oil. For too long the Niger Delta has produced Nigeria's wealth while its people remained poor. NigerDeltaWealth reverses that — building a prosperous, diversified digital economy rooted in the region's people, resources, and culture.";
  p.problem   = ["Niger Delta communities host Nigeria's oil wealth but suffer persistent poverty and underdevelopment.","The region's fisheries, agriculture, and tourism potential are entirely underdeveloped.","Environmental degradation from oil spills has destroyed traditional livelihoods with no replacement.","Youth unemployment drives militancy and crime in the absence of economic alternatives.","Niger Delta businesses are invisible in the national digital economy.","No platform exists to organize and amplify the region's non-oil economic potential."];
  p.who       = ["Farmers, fishermen, and artisans in Niger Delta communities","Entrepreneurs building non-oil businesses in the region","Youth seeking digital economic pathways as alternatives to militancy","Investors in Niger Delta fisheries, tourism, and agricultural sectors","Community development organizations driving economic diversification"];
  p.does      = ["Connects Niger Delta businesses to national and international markets","Showcases the region's fisheries, agriculture, and tourism assets","Provides digital economic tools for communities affected by oil degradation","Builds a Niger Delta business network for collaboration and investment","Delivers business training and finance access for regional SMEs"];
  p.features  = ["Niger Delta business and trade marketplace","Fisheries and aquaculture digital market","Tourism and eco-tourism discovery platform for the region","Environmental livelihood support tools for oil-affected communities","Niger Delta investment opportunity board"];
  p.how       = ["Business or community registers and builds a Niger Delta profile","Lists products, services, tourism assets, or investment opportunities","Connects to buyers, visitors, and investors through the platform","Accesses training, environmental support tools, and finance options","Grows with a strong regional digital community and national visibility"];
  p.impact    = ["Niger Delta communities earning income from diversified non-oil sources","Fisheries and tourism sectors developed into major regional economic drivers","Youth with real digital economic options choosing prosperity over militancy","Environmental livelihood compensation guided through the platform","A prosperous Niger Delta finally matching the wealth it has generated for Nigeria"];
  p.nigeria   = ["Niger Delta peace and development is critical to Nigeria's oil security and national cohesion","Economic diversification in the region reduces dependence on oil revenue nationally","Communities with economic opportunity are communities at peace","Nigeria owes the Niger Delta a digital prosperity infrastructure equal to its contribution","Environmental justice requires economic alternatives — NigerDeltaWealth provides them"];
  p.investors = ["Niger Delta fisheries, tourism, and agriculture are high-potential underinvested sectors","Transaction fees from regional marketplace activity","Tourism and eco-tourism booking and facilitation revenue","Government Niger Delta development programme platform contracts","NDDC and international environmental and development fund partnerships"];
  p.future    = ["Niger Delta eco-tourism booking platform reaching global adventure travellers","Fisheries export marketplace connecting the region to international seafood buyers","Environmental livelihood programme management tools","Mangrove and ecosystem restoration project coordination platform","Cross-regional integration with South-South states' development programmes"];
  p.subPlatforms = [
    {name:"DeltaMarket",     tagline:"Trade and commerce for the Niger Delta",    features:["Product marketplace","Fisheries trading","Agricultural listings","Buyer matching","Logistics tools"]},
    {name:"DeltaTourism",    tagline:"Discover Niger Delta's natural beauty",     features:["Tourism listings","Eco-tourism guides","Community stay bookings","Waterway tours","Event calendar"]},
    {name:"FishMarket",      tagline:"Digital market for fisheries and seafood",  features:["Fresh fish listings","Aquaculture products","Bulk buyer tools","Price discovery","Export tools"]},
    {name:"EcoLivelihood",   tagline:"Alternative livelihoods for oil communities",features:["Livelihood programme directory","Grant applications","Skills retraining tools","Community project management","Environmental compensation guidance"]},
    {name:"DeltaInvest",     tagline:"Investment into Niger Delta's potential",   features:["Sector opportunity listings","Community partnership tools","Environmental compliance guides","Investor matching","Due diligence support"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NIGERBENUEWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="nigerbenuwealth";});
  if(!p) p = platforms.find(function(x){return x.key==="nigerbenuwealth";});
  if(!p) p = platforms.find(function(x){ return x.name && x.name.toLowerCase().includes("nigerbenue"); });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NigerBenueWealth is the dedicated digital prosperity platform for Nigeria's Middle Belt — uniting the diverse communities of Benue, Kogi, Kwara, Nassarawa, Niger, Plateau, and the FCT in a shared digital economic mission. The Middle Belt is Nigeria's breadbasket, cultural crossroads, and strategic heartland. NigerBenueWealth ensures its farmers, traders, artisans, and entrepreneurs have the digital tools to build the prosperity this vital region deserves.";
  p.problem   = ["The Middle Belt is Nigeria's agricultural heartland but its farmers earn very little.","Communal and ethnic conflict in the region is driven partly by economic frustration.","Middle Belt businesses are almost entirely absent from the national digital economy.","Youth lack digital pathways to economic opportunity in their home states.","The region's cultural and tourism potential is entirely undiscovered and undeveloped.","No platform exists amplifying the Middle Belt's economic voice and potential."];
  p.who       = ["Farmers, food producers, and agro-processors across the Middle Belt","Traders and artisans in Benue, Plateau, Kogi, and surrounding states","Youth seeking economic alternatives to conflict and out-migration","Investors in Middle Belt agriculture, mining, and tourism","Community leaders driving economic peace and development in the region"];
  p.does      = ["Connects Middle Belt farmers and businesses to national buyers and markets","Supports agro-processing and food value chain development in the region","Provides digital economic tools reducing conflict-driving economic frustration","Builds the region's tourism and cultural economy through digital visibility","Delivers business and finance tools for Middle Belt SMEs and cooperatives"];
  p.features  = ["Middle Belt agricultural marketplace and food value chain tools","Regional business directory and trade platform","Tourism and cultural discovery for the Middle Belt","Youth economic opportunity board for the region","Business training and microfinance access tools"];
  p.how       = ["Farmer or business registers and creates a regional profile","Lists agricultural produce, products, or services for discovery","Connects to buyers, tourists, partners, and investors","Accesses training, finance, and market intelligence tools","Builds a sustainable regional digital business presence"];
  p.impact    = ["Middle Belt farmers earning fair prices reducing poverty-driven conflict","Youth with real economic pathways choosing peace over militancy","Agricultural food value chains developed creating thousands of new jobs","Middle Belt tourism growing as the region's natural beauty is discovered","A more prosperous Middle Belt contributing to national food security and peace"];
  p.nigeria   = ["Middle Belt peace is essential to Nigeria's food security and national stability","Farmer-herder conflict is partly economic — digital prosperity reduces the pressure","Middle Belt food production capacity is critical to Nigeria's nutrition and export goals","Economic inclusion for every region is the foundation of true national unity","A developed Middle Belt closes Nigeria's development gap between north and south"];
  p.investors = ["Middle Belt agriculture is high-potential with very low current digital penetration","Food value chain development attracts agricultural investment and development finance","Tourism in Plateau, Kwara, and Niger states has significant growth potential","Government Middle Belt development programme contracts","International development organization funding for conflict-economic development"];
  p.future    = ["Plateau State tourism showcase reaching international visitors","Middle Belt food processing investment marketplace","Farmer-herder dialogue and economic cooperation digital tools","Integration with NEMA conflict-affected community programmes","Federal agricultural development programme platform for the Middle Belt"];
  p.subPlatforms = [
    {name:"BeltFarm",        tagline:"Agricultural market for the Middle Belt",   features:["Crop listings","Food produce marketplace","Buyer matching","Agro-processing connections","Price discovery"]},
    {name:"BeltTrade",       tagline:"Middle Belt business and commerce",         features:["Business directory","Product marketplace","Trade networking","B2B tools","Logistics links"]},
    {name:"PlateauTours",    tagline:"Discover Middle Belt tourism assets",       features:["Tourism listings","Natural attraction guides","Community stays","Cultural events","Adventure tourism"]},
    {name:"BeltYouth",       tagline:"Economic opportunities for Middle Belt youth",features:["Job board","Skills training","Entrepreneurship tools","Mentorship matching","Grant alerts"]},
    {name:"BeltFinance",     tagline:"Finance and microfinance for the region",   features:["Cooperative management","Loan applications","Savings tools","Grant directory","Islamic finance options"]}
  ];
})();


// ============================================================
//  FULL CONTENT — SPACEKIDS
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="spacekids";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SpaceKids makes the wonders of space and science irresistible for Nigerian children — through games, stories, animations, and interactive activities that turn curiosity into learning and play into discovery. Every Nigerian child deserves to look up at the sky and believe they could reach it. SpaceKids plants that belief early and nurtures it with joy, wonder, and the knowledge that space is not just for astronauts — it belongs to every child who dares to dream.";
  p.problem   = ["Nigerian children have almost no engaging digital science content designed for them.","Science education in primary schools is dry, theoretical, and disconnected from excitement.","Cartoons and entertainment dominate children's screen time with very little educational value.","Parents have limited tools for inspiring STEM interest in young children.","Nigeria risks producing generations disinterested in science at an early age."];
  p.who       = ["Nigerian children aged 4–12 years","Primary school teachers seeking engaging science content","Parents wanting educational screen time alternatives for their children","Primary and nursery schools building STEM culture from early years","NGOs supporting children's science education across Nigeria"];
  p.does      = ["Delivers fun, age-appropriate space and science content for Nigerian children","Uses games, animations, and stories to teach science concepts","Inspires early STEM interest through wonder and joy","Supports teachers with classroom-ready interactive science content","Connects children to a community of young Nigerian science explorers"];
  p.features  = ["Space and science games designed for ages 4–12","Animated science stories featuring Nigerian child characters","Interactive space explorer tool — visit planets, stars, and galaxies","Teacher toolkit with lesson-linked space and science activities","Parent dashboard tracking learning progress and engagement"];
  p.how       = ["Child selects a game, story, or exploration activity","Engages with age-appropriate content that teaches while it entertains","Earns explorer badges as they complete activities and learn concepts","Parents and teachers track progress and encourage further discovery","Community challenges and competitions motivate continued engagement"];
  p.impact    = ["Millions of Nigerian children excited about science from an early age","Better science readiness when children enter secondary school","Teachers with engaging tools transforming science lessons","Parents confidently supporting early STEM learning at home","A pipeline of science-curious Nigerian youth entering secondary and tertiary education"];
  p.nigeria   = ["Nigeria needs science-excited children today to have scientists and engineers tomorrow","Early childhood STEM exposure is the most cost-effective education investment","Nigerian children deserve the same quality science content as children anywhere in the world","Primary school science outcomes in Nigeria must improve — SpaceKids is a catalyst","Building scientific identity in childhood creates lifelong learners"];
  p.investors = ["Children's edtech is a globally proven high-growth investment category","School subscription revenue with high renewal rates","Parent premium subscription for ad-free experience and advanced content","Government and NGO programme delivery contracts","Advertising to family brands in a safe, moderated children's environment"];
  p.future    = ["SpaceKids TV show — animated Nigerian children exploring the galaxy","Physical SpaceKids science kit for home and school experiments","SpaceKids camps — school holiday STEM programs across Nigeria","Multilingual content in Hausa, Yoruba, Igbo, and Pidgin","SpaceKids schools programme with curriculum alignment at primary level"];
  p.subPlatforms = [
    {name:"StarPlay",        tagline:"Space science games for children",          features:["Rocket builder game","Planet explorer","Star map puzzle","Space quiz","Badge rewards"]},
    {name:"CosmicStories",   tagline:"Animated science stories for kids",         features:["Nigerian characters","Space adventure stories","Science concept integration","Narrated episodes","Parent reading guide"]},
    {name:"GalaxyExplore",   tagline:"Interactive universe explorer for kids",    features:["3D planet visit","Solar system map","Star naming tool","Galaxy journey","Fun science facts"]},
    {name:"TeacherSpace",    tagline:"Science classroom tools for teachers",      features:["Lesson-linked activities","Printable worksheets","Class progress tracking","Assembly presentation tools","Teacher community"]},
    {name:"KidsChallenge",   tagline:"Science competitions for young explorers",  features:["Monthly challenges","Drawing competitions","Quiz contests","Prize board","School team rankings"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAIJY GAMECRAFT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="naijygamecraft";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Naijy GameCraft is Nigeria's platform for young game designers, developers, and digital creators — where playing games leads to building them, and building them leads to a career. GameCraft gives Nigerian youth the tools, training, and community to design, code, and publish their own games, telling Nigerian stories through the most powerful interactive medium of the 21st century. Play. Build. Invent. Nigeria's gaming future starts here.";
  p.problem   = ["Nigerian youth consume global games but produce almost none — all value flows out.","Game development skills are not taught in any Nigerian school curriculum.","Young Nigerians with game ideas have no structured pathway to build them.","The global gaming industry is worth $200B+ but Nigeria captures essentially none of it.","Nigerian stories and culture are absent from the global gaming landscape.","No community exists for young Nigerian game developers to learn, share, and collaborate."];
  p.who       = ["Young Nigerians aged 12–25 interested in games and digital creation","Secondary school and university students learning coding through game development","Youth with game ideas seeking tools and community to build them","Schools and youth organizations wanting game development curriculum","Investors in Nigeria's creative and gaming economy"];
  p.does      = ["Teaches game design and development through hands-on project-based learning","Provides tools for young Nigerians to build and publish their own games","Builds a community of young Nigerian game developers sharing knowledge","Hosts game jams and competitions celebrating Nigerian gaming talent","Connects talented developers to career and commercial opportunities"];
  p.features  = ["Game development learning pathway from beginner to advanced","Simple game builder tool for first-time creators — no code required to start","Code-based development environment for more advanced learners","Game jam competitions with real prizes and national recognition","Community portfolio and game publishing platform for all creators"];
  p.how       = ["Young person joins and selects their starting level — beginner to coder","Completes learning modules building real games as they go","Publishes their game to the GameCraft community for feedback and play","Enters game jams and challenges to test skills against peers","Advances to commercial tools and connects with industry as skills grow"];
  p.impact    = ["Thousands of young Nigerians able to design and build digital games","Nigerian stories and culture entering the global gaming landscape","Game development skills creating employment and entrepreneurship pathways","Nigeria's tech and creative economy enriched by a new generation of game developers","A world-class Nigerian gaming industry beginning to take shape"];
  p.nigeria   = ["Nigeria's youth-heavy population includes millions of passionate gamers","Game development teaches coding, design, and storytelling skills simultaneously","Nigeria spending $100M+ annually on foreign games — local development reverses that","Cultural storytelling through games preserves and exports Nigerian identity","A Nigerian game development industry could generate billions in export revenue"];
  p.investors = ["Gaming is a $200B+ global industry with Nigeria currently contributing near zero","Premium tools, course subscriptions, and game publishing revenue","Game jam sponsorship from tech and consumer brands","Talent pipeline value for Nigeria's growing tech sector","International gaming industry partnership for African game development"];
  p.future    = ["Nigeria's first game development studio incubator programme","GameCraft publishing label distributing Nigerian games to global app stores","Annual Nigerian Game Awards celebrating the best homegrown titles","University partnership integrating GameCraft into computer science curricula","Pan-African game development network connecting creators across the continent"];
  p.subPlatforms = [
    {name:"GameLearn",       tagline:"Learn game development step by step",       features:["Beginner to advanced pathway","Video tutorials","Project-based learning","Coding modules","Design principles"]},
    {name:"GameBuilder",     tagline:"Build your first game today",               features:["No-code game creator","Level design tools","Character builder","Sound integration","Publish to platform"]},
    {name:"GameJam",         tagline:"National game design competitions",         features:["Monthly jam events","Theme-based challenges","Team formation tools","Prize leaderboard","Judge showcase"]},
    {name:"GameGallery",     tagline:"Play and publish Nigerian-made games",      features:["Community game library","Play and rate tools","Developer profiles","Game portfolio pages","Featured game showcase"]},
    {name:"GameCareer",      tagline:"Turn game skills into a career",            features:["Industry job board","Studio connections","Portfolio review","Freelance project listings","Career roadmap guide"]}
  ];
})();


// ============================================================
//  FULL CONTENT — VERSITIESCONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="versitiesconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "VersitiesConnect is Nigeria's digital campus — the platform connecting university students, graduates, lecturers, and institutions across all Nigerian tertiary institutions in one vibrant academic and social ecosystem. From academic collaboration to campus news, alumni networking to research partnerships, VersitiesConnect brings Nigeria's entire university community together digitally, making campus life richer and post-campus opportunity more accessible.";
  p.problem   = ["Nigerian university students are disconnected from each other across institutions.","No platform exists for inter-university academic collaboration and research sharing.","Alumni networks are weak, disorganized, and disconnected from current students.","Campus news and student opportunities are hard to discover and poorly communicated.","Lecturers have no peer community platform for academic knowledge exchange.","Students from less prominent institutions have no national stage for their talents."];
  p.who       = ["University and polytechnic students across all Nigerian institutions","Recent graduates building careers and maintaining alumni connections","Lecturers and academic staff seeking peer collaboration and research networks","University administrations communicating with students and alumni","Employers targeting Nigerian university talent for internships and jobs"];
  p.does      = ["Connects students across all Nigerian institutions in one network","Enables inter-university research collaboration and academic sharing","Builds active alumni networks maintaining lifelong institutional connections","Provides a campus news and opportunity discovery platform for students","Connects employers directly to verified Nigerian university talent"];
  p.features  = ["University community pages with news, events, and student groups","Inter-university academic collaboration and research sharing tools","Alumni network with mentorship and career support features","Student opportunity board — internships, scholarships, and competitions","Employer talent search and campus recruitment tools"];
  p.how       = ["Student registers with verified institution email and builds academic profile","Joins their institution's community and discovers opportunities","Connects with students from other universities for collaboration","Accesses alumni network for mentorship and career guidance","Graduates maintain connection through the alumni platform post-graduation"];
  p.impact    = ["Nigerian university students nationally connected for the first time","Inter-university collaboration producing stronger research and academic output","Alumni networks actively supporting younger generations into careers","Every student with access to national opportunities regardless of institution","Employers finding and recruiting verified Nigerian university talent efficiently"];
  p.nigeria   = ["Nigeria has 200+ universities with students largely disconnected from each other","Inter-university collaboration is essential for Nigeria's research and innovation capacity","Strong alumni networks are the foundation of institutional quality and student success","Campus recruitment must be digitized for Nigerian employers to access university talent","A connected university community strengthens Nigeria's intellectual and social capital"];
  p.investors = ["University platform serving 2M+ students across Nigeria — enormous scale","Revenue from employer recruitment packages and job posting subscriptions","Premium alumni features and reunion management services","Academic publishing and research collaboration tools","Partnership with TETFUND and NUC for institutional programme delivery"];
  p.future    = ["National student union digital platform integrated with all universities","Open courseware library sharing best teaching content across institutions","Research grant discovery and application management platform","National university ranking and quality monitoring system","VersitiesConnect international — connecting Nigerian students abroad to home institutions"];
  p.subPlatforms = [
    {name:"CampusHub",       tagline:"Your university's digital community",       features:["Campus news feed","Student groups","Event listings","Notice board","Student government tools"]},
    {name:"AcademiConnect",  tagline:"Inter-university research and collaboration",features:["Research project listings","Collaboration matching","Academic paper sharing","Conference calendar","Supervisor directory"]},
    {name:"AlumniNet",       tagline:"Stay connected with your institution",      features:["Alumni profiles","Mentorship matching","Reunion planning tools","Career updates","Donation tools"]},
    {name:"OpportunityBoard",tagline:"Scholarships, internships, competitions",   features:["Opportunity listings","Application tracking","Deadline alerts","Eligibility filter","Success stories"]},
    {name:"CampusRecruit",   tagline:"Employers connecting to university talent", features:["Campus job listings","Talent search","Graduate profiles","Interview scheduling","Campus visit coordination"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LEADERSARENA
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="leadersarena";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LeadersArena is Nigeria's platform for building the leaders the nation needs — connecting emerging leaders, developing their skills, and creating the networks that translate personal ambition into national impact. From students with leadership potential to young professionals stepping into management, from community champions to future political leaders, LeadersArena is where Nigeria's next generation of leaders is being shaped, supported, and sent out to change the country.";
  p.problem   = ["Nigeria's leadership quality gap at every level — political, corporate, community — is a national crisis.","Young Nigerians with leadership potential have no structured development pathway.","Mentorship from experienced leaders is inaccessible to most aspiring Nigerian leaders.","Leadership training is expensive, concentrated in major cities, and disconnected from Nigeria's realities.","Female and minority leadership talent is consistently overlooked and unsupported.","Nigeria keeps producing the same quality of leaders because it trains no better ones."];
  p.who       = ["Young Nigerians with leadership ambition at any level","Student union leaders and campus organization leaders","Young professionals moving into management and team leadership","Community and religious leaders seeking to grow their impact","Women leaders and emerging political figures seeking development support"];
  p.does      = ["Delivers structured leadership development training for every level","Connects emerging leaders with experienced mentors and coaches","Builds inter-generational leadership networks across sectors","Provides tools for managing teams, projects, and community initiatives","Offers a platform for emerging leaders to build public profiles and reputations"];
  p.features  = ["Leadership skills development curriculum from entry to executive level","Mentor matching connecting emerging leaders to experienced professionals","Leadership challenges and simulations building real competencies","Public leader profile for visibility and accountability","Leadership community connecting Nigeria's present and future leaders"];
  p.how       = ["Emerging leader creates profile and selects their leadership level","Completes leadership assessment identifying strengths and gaps","Enrolls in targeted training and gets matched to an appropriate mentor","Participates in leadership challenges, projects, and community initiatives","Builds a public record of leadership development and achievement"];
  p.impact    = ["A pipeline of better-prepared leaders across every sector of Nigeria","Women and minority leaders with equal development support and opportunity","Mentorship culture embedded in Nigeria's leadership development ecosystem","Leaders who are competent, ethical, and accountable from the start","Nigeria's governance, business, and civil society quality improving generation by generation"];
  p.nigeria   = ["Nigeria's development failures are fundamentally leadership failures","Better leaders at LGA, state, and federal level would transform national outcomes","Community leaders trained in conflict resolution can prevent deadly crises","Women's leadership development is essential for Nigeria to reach its potential","Investing in leadership today is the highest-return national development investment possible"];
  p.investors = ["Leadership development is a globally proven, high-margin training sector","Training programme subscription and certification fees","Corporate leadership development contracts for private sector clients","Government and civil service leadership training programme contracts","International leadership foundation and NGO partnership funding"];
  p.future    = ["Annual National Leadership Summit bringing together Nigeria's best emerging leaders","LeadersArena fellows programme — Nigeria's most intensive leadership development experience","Political leadership school preparing ethical future public officials","Leadership alumni network connecting Nigeria's best leaders across generations","Pan-African leadership network connecting young leaders across the continent"];
  p.subPlatforms = [
    {name:"LeadLearn",       tagline:"Structured leadership training for all levels",features:["Leadership curriculum","Video training modules","Case studies","Skills assessments","Certificates of completion"]},
    {name:"MentorConnect",   tagline:"Match with experienced leaders",            features:["Mentor profiles","Matching algorithm","Session booking","Progress notes","Long-term relationship tools"]},
    {name:"LeaderChallenge", tagline:"Real leadership simulations and projects",  features:["Team challenges","Community projects","Crisis simulations","Performance scoring","Peer feedback"]},
    {name:"LeaderProfile",   tagline:"Build your public leadership reputation",   features:["Public profile","Achievement showcase","Endorsements","Media tools","Speaker profile builder"]},
    {name:"WomenLead",       tagline:"Dedicated tools for women in leadership",   features:["Women mentor network","Female leadership content","Safe discussion space","Role model profiles","Women leadership awards"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DIASPORALINK
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="diasporalink";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DiasporaLink is the platform that keeps Nigeria's most talented and accomplished citizens — wherever in the world they are — meaningfully connected to the country they come from and the future they can help build. From investing in Nigerian businesses to mentoring young professionals back home, from contributing expertise to government to sending resources to communities, DiasporaLink turns the Nigerian diaspora from a brain drain into a brain gain. The world is full of Nigerians who love Nigeria — DiasporaLink gives them the tools to show it.";
  p.problem   = ["Nigeria loses 8,000+ skilled professionals annually to emigration with very little return flow.","The diaspora sends $20B+ annually but its skills and networks are largely untapped.","Diaspora Nigerians who want to contribute to Nigeria lack a structured channel to do so.","Nigerian professionals abroad lose connections to home networks quickly.","Diaspora investment in Nigeria is hindered by trust, information, and coordination gaps.","Young Nigerians at home have almost no access to diaspora mentors and role models."];
  p.who       = ["Nigerian professionals and entrepreneurs living abroad","Recent emigrants wanting to stay connected and contribute to Nigeria","Young Nigerians at home seeking diaspora mentorship and career guidance","Nigerian businesses seeking diaspora investment and expertise","Government agencies and institutions seeking diaspora skills engagement"];
  p.does      = ["Connects diaspora Nigerians to investment, mentorship, and contribution opportunities in Nigeria","Provides a platform for diaspora professionals to offer skills remotely","Enables diaspora investment in Nigerian businesses with trust and transparency","Builds living diaspora-home networks for knowledge transfer and collaboration","Celebrates and amplifies diaspora Nigerian achievements and contributions"];
  p.features  = ["Diaspora professional profiles linked to Nigerian home networks","Investment opportunity board for diaspora Nigerians investing back home","Remote skills contribution platform connecting experts to Nigerian organizations","Mentorship matching connecting diaspora professionals to young Nigerians at home","Diaspora community hubs by country — UK, USA, Canada, Europe, and beyond"];
  p.how       = ["Diaspora Nigerian registers and builds a professional profile","Browses investment, mentorship, and contribution opportunities","Connects directly to Nigerian businesses, organizations, and young people","Contributes skills, capital, or mentorship through the platform","Builds and maintains a living connection to home that grows over time"];
  p.impact    = ["Diaspora expertise actively improving Nigerian businesses and institutions","Young Nigerians at home mentored by world-class Nigerian professionals abroad","Billions in diaspora investment channelled into trusted Nigerian opportunities","Brain drain partially reversed as diaspora maintains active Nigeria contribution","Nigeria's global talent network organized and mobilized for national development"];
  p.nigeria   = ["Diaspora Nigerians are among the best-educated and most successful people in their host countries","Nigeria cannot afford to lose this talent permanently — DiasporaLink keeps them engaged","Diaspora investment with proper channels could transform Nigerian infrastructure and business","Mentorship from diaspora professionals accelerates the careers of Nigerians at home","A connected diaspora is a national asset — DiasporaLink activates that asset"];
  p.investors = ["Diaspora financial services are a multi-billion dollar annual market","Investment facilitation fees from diaspora-to-Nigeria deals","Premium membership for diaspora professionals seeking curated opportunities","Remittance and financial product integration revenue","Government diaspora engagement programme platform contracts"];
  p.future    = ["Diaspora skills bank — matching Nigerian institutional needs to diaspora expertise","Diaspora venture fund coordination platform for collective Nigerian investment","Annual Global Nigerian Diaspora Summit powered by DiasporaLink","Government diaspora advisory council digital engagement platform","DiasporaLink chapters in every major Nigerian diaspora city globally"];
  p.subPlatforms = [
    {name:"DiasporaInvest",  tagline:"Invest in Nigeria from anywhere",           features:["Verified opportunity listings","Due diligence support","Investment tracking","Co-investment tools","Returns dashboard"]},
    {name:"SkillsBack",      tagline:"Contribute your expertise to Nigeria",      features:["Skills listing","Project matching","Remote consulting tools","Institution connect","Contribution record"]},
    {name:"DiasporaMentor",  tagline:"Mentor young Nigerians from anywhere",      features:["Mentee matching","Video sessions","Progress tracking","Career guidance tools","Group mentoring"]},
    {name:"HomeNetwork",     tagline:"Stay connected to Nigeria",                 features:["Nigerian news feed","Community events","Home state network","Nigeria opportunity alerts","Cultural content"]},
    {name:"DiasporaHub",     tagline:"Your diaspora community by country",        features:["UK Nigerian community","USA Nigerian network","Canada community","Europe network","Global Nigerian events"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HEALTHPRO
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="healthpro";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HealthPro is Nigeria's prevention-first health platform — empowering citizens to protect their health before illness strikes. Through personalized health education, preventive screening guidance, wellness tracking, and lifestyle coaching, HealthPro addresses the root causes of Nigeria's most common and preventable diseases. The best healthcare is the care you never need — HealthPro makes sure Nigerians stay well, not just get treated.";
  p.problem   = ["Most Nigerians engage with healthcare only when already seriously ill — far too late.","Preventive health education is almost entirely absent from the public health system.","Malaria, diabetes, hypertension, and stroke kill Nigerians who could have been protected.","Healthy lifestyle information is not accessible in culturally appropriate, local formats.","Mental health prevention receives almost no attention or resource in Nigeria.","Workplace and occupational health risks are widely ignored until they cause disability."];
  p.who       = ["All Nigerians wanting to maintain and improve their health proactively","Corporate employees and employers running workplace wellness programmes","Women managing family health and seeking maternal wellness guidance","Older Nigerians managing age-related health conditions preventively","Schools building health education into student development programmes"];
  p.does      = ["Delivers evidence-based preventive health education for Nigerian conditions","Provides personalized wellness tracking and lifestyle coaching tools","Guides users through recommended preventive screenings and health checks","Supports mental health and stress management through accessible resources","Enables workplace wellness programme delivery for organizations"];
  p.features  = ["Personalized health risk assessment and preventive guidance","Preventive screening calendar by age and condition with reminders","Nutrition and physical activity tracker adapted for Nigerian foods and culture","Mental health and stress management resources in plain Nigerian language","Workplace wellness programme tools for employers and HR teams"];
  p.how       = ["User completes health risk assessment and sets wellness goals","Receives personalized preventive health guidance and a screening schedule","Tracks nutrition, exercise, and lifestyle indicators through the app","Accesses mental health tools and educational content as needed","Employer activates workplace wellness programme for staff through the platform"];
  p.impact    = ["Preventable disease incidence reduced through widespread health education","Earlier screening detection saving lives from cancer, diabetes, and hypertension","Mental health destigmatized and addressed before it becomes crisis","Workplace absenteeism reduced through employee wellness programmes","Nigeria's public health burden reduced through a prevention-first culture"];
  p.nigeria   = ["Nigeria's healthcare system cannot cope with current disease burden — prevention is essential","Non-communicable diseases are rising rapidly in urban Nigeria and must be addressed early","Mental health is a crisis in Nigeria with almost no preventive infrastructure","Workplace wellness is absent from most Nigerian organizations causing enormous productivity loss","Prevention is 10x cheaper than treatment — HealthPro's ROI for Nigeria is transformational"];
  p.investors = ["Preventive health platforms attract health insurance and corporate wellness investment","Employer wellness programme subscription fees — high value, recurring revenue","Health insurance company partnership for premium reduction programme integration","Government public health programme digitization contracts","International health organization and USAID health system strengthening funding"];
  p.future    = ["AI health coach providing real-time personalized preventive guidance","Wearable device integration for continuous health monitoring","National preventive screening programme coordination platform","School health education curriculum integration","HealthPro clinics — physical wellness centres in high-density communities"];
  p.subPlatforms = [
    {name:"WellnessCheck",   tagline:"Your personalized health risk assessment",  features:["Health questionnaire","Risk score","Preventive guidance","Screening schedule","Goal setting"]},
    {name:"ScreeningGuide",  tagline:"Know which tests to do and when",           features:["Age-based screening calendar","Test explainers","Nearby lab directory","Result tracking","Doctor referral"]},
    {name:"NutriTrack",      tagline:"Eat well with Nigerian foods",              features:["Nigerian food database","Meal logging","Calorie tracking","Diet advice","Recipe suggestions"]},
    {name:"MindWell",        tagline:"Mental health and stress support",          features:["Stress assessment","Mindfulness guides","Counsellor directory","Daily check-in","Crisis resources"]},
    {name:"WorkWell",        tagline:"Workplace wellness for Nigerian organizations",features:["Staff wellness dashboard","Programme management","Health challenge tools","Absenteeism tracker","Wellness reports"]}
  ];
})();


// ============================================================
//  FULL CONTENT — PHARMABIOTECH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="pharmabiotech";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "PharmaBiotech is Nigeria's platform connecting science, industry, and health — where pharmaceutical professionals, biotech researchers, health regulators, and the public meet to advance Nigeria's pharmaceutical and biotechnology ecosystem. From drug information to regulatory compliance, from research collaboration to biotech innovation, PharmaBiotech builds the scientific infrastructure Nigeria needs to be a pharmaceutical leader on the African continent.";
  p.problem   = ["Nigeria imports 70%+ of its medicines despite having significant pharmaceutical manufacturing capacity.","Fake and substandard drugs kill thousands of Nigerians annually.","Pharmaceutical professionals have no organized digital community or information platform.","Biotech research in Nigeria is fragmented with almost no collaboration infrastructure.","NAFDAC regulatory compliance is complex and poorly communicated to industry.","Patients have no reliable platform for verified drug information in Nigeria."];
  p.who       = ["Pharmacists, pharmaceutical scientists, and biotech researchers","Drug manufacturers and pharmaceutical companies operating in Nigeria","NAFDAC and regulatory bodies managing pharmaceutical compliance","Patients and consumers seeking reliable drug information","Universities and research institutions building pharmaceutical science capacity"];
  p.does      = ["Provides verified drug information accessible to patients and professionals","Supports NAFDAC regulatory compliance with plain-language guidance","Connects pharmaceutical researchers and biotech professionals for collaboration","Reports and tracks counterfeit drug incidents across Nigeria","Builds Nigeria's pharmaceutical science professional community digitally"];
  p.features  = ["National drug information database with verified medicine details","Fake drug reporting and alert system integrated with NAFDAC","Pharmaceutical professional community with research collaboration tools","Regulatory compliance guide for drug manufacturers","Biotech research sharing and collaboration platform"];
  p.how       = ["Patient or professional searches for drug information and gets verified data","Suspect drug reported to NAFDAC through the platform's alert system","Pharmaceutical professionals connect, share research, and collaborate","Manufacturer accesses NAFDAC compliance guidance and submits documentation","Researchers share findings and connect with collaboration partners"];
  p.impact    = ["Fewer Nigerians harmed by fake or wrong medications through better information","NAFDAC enforcement strengthened by citizen-reported counterfeit drug intelligence","Nigeria's pharmaceutical professionals connected in a productive national community","Biotech research collaboration producing stronger Nigerian science output","Nigeria moving toward greater pharmaceutical self-sufficiency driven by organized industry"];
  p.nigeria   = ["Nigeria's dependence on imported medicines is a health security and economic vulnerability","Fake drugs are a national emergency — a citizen reporting system saves lives","Building Nigeria's pharmaceutical industry requires organized professional infrastructure","NAFDAC needs digital tools to keep pace with the scale of Nigeria's drug market","Nigerian biotech innovation could solve African-specific health challenges at scale"];
  p.investors = ["Nigeria's pharmaceutical market is worth $2B+ and growing rapidly","Regulatory compliance tool subscriptions for pharmaceutical companies","Professional community premium memberships and certification programmes","Research platform licensing to academic and commercial research institutions","Government NAFDAC digital infrastructure contracts and partnerships"];
  p.future    = ["AI-powered drug interaction checker for Nigerian prescribers and patients","National pharmaceutical supply chain transparency platform","Nigeria drug manufacturing investment promotion platform","Biotech startup incubator and innovation lab network","Integration with WHO and African medicines regulatory systems"];
  p.subPlatforms = [
    {name:"DrugInfo",        tagline:"Verified medicine information for all",     features:["Drug database","Dosage guides","Side effect information","Generic alternatives","Interaction checker"]},
    {name:"FakeDrugAlert",   tagline:"Report and track counterfeit medicines",    features:["Suspect drug report","NAFDAC routing","Alert broadcasts","Batch number check","Counterfeit map"]},
    {name:"PharmaNetwork",   tagline:"Nigeria's pharmaceutical professional community",features:["Professional profiles","Research sharing","Job board","Event calendar","Mentorship matching"]},
    {name:"RegulatoryGuide", tagline:"NAFDAC compliance made understandable",     features:["Registration guides","Compliance checklists","Update alerts","Application tracking","Expert Q&A"]},
    {name:"BiotechHub",      tagline:"Nigerian biotech research and innovation",  features:["Research project listings","Lab collaboration tools","Grant opportunity alerts","Publication sharing","Innovation showcase"]}
  ];
})();


// ============================================================
//  FULL CONTENT — RETIREEESHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="retireeshub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RetireesHub is Nigeria's platform for the men and women who have given decades of service — to government, to institutions, to the nation — and deserve the dignity, care, and community they have earned. From pension tracking to health support, from social connection to post-retirement income opportunities, RetireesHub is the companion that ensures Nigeria's retirees are honoured, supported, and never forgotten.";
  p.problem   = ["Millions of Nigerian retirees are not receiving their pensions correctly or on time.","Retirees lack a platform to report pension issues and get resolution.","Social isolation among retirees causes mental health deterioration.","Post-retirement income opportunities are not organized or accessible to retirees.","Health management tools for retirees are absent in Nigeria's digital landscape.","The wisdom and experience of retirees is not being captured or utilized nationally."];
  p.who       = ["Retired civil servants, military, and private sector workers","Families managing the welfare of elderly retirees","Pension fund administrators seeking better beneficiary communication","Healthcare providers serving the elderly population","Employers implementing retirement transition support programmes"];
  p.does      = ["Helps retirees track and report pension payment issues","Provides health management tools tailored for elderly Nigerians","Builds community and social connection preventing isolation","Connects retirees to post-retirement income and volunteering opportunities","Captures and shares retiree expertise for institutional memory and mentorship"];
  p.features  = ["Pension tracker and payment issue reporting tool","Elderly health management and medication reminder system","Retiree social community for connection and peer support","Post-retirement opportunity board for consulting, tutoring, and mentorship","Retiree wisdom archive sharing expertise and life experience"];
  p.how       = ["Retiree registers and inputs pension and health details","Tracks pension payments and reports discrepancies through the platform","Connects with a community of retirees for social engagement","Discovers post-retirement income and contribution opportunities","Shares expertise through the wisdom archive or mentorship matching"];
  p.impact    = ["Pension issues resolved faster through organized reporting channels","Retirees healthier and happier through social connection and health tools","Post-retirement income reducing financial pressure on retirees","Valuable expertise of retirees preserved and put to productive use","Nigeria honouring its retirees with the dignity and care they deserve"];
  p.nigeria   = ["Nigeria's pension crisis leaves millions of retirees without their rightful income","Elderly care infrastructure in Nigeria is almost entirely absent — digital tools fill a critical gap","Retirees' social isolation contributes to poor health outcomes and family strain","Experienced retirees mentoring youth is one of Nigeria's most underused resources","Dignifying retirees is both a moral obligation and a social stability investment"];
  p.investors = ["Elderly care technology is a globally fast-growing investment sector","Premium health management and pension tracking subscription services","Healthcare provider partnership for elderly care coordination","Pension fund administrator platform integration contracts","Government retirement services digitization contracts"];
  p.future    = ["AI health companion providing daily check-ins for elderly retirees","Retiree credit and financial protection platform","National retiree volunteer programme matching skills to national needs","Intergenerational mentorship platform connecting retirees to youth","Caregiver management platform for families supporting elderly relatives"];
  p.subPlatforms = [
    {name:"PensionWatch",    tagline:"Track and protect your pension",            features:["Payment tracker","Discrepancy reporting","PenCom routing","Arrears calculator","Resolution status"]},
    {name:"ElderHealth",     tagline:"Health management for retirees",            features:["Medication reminders","Doctor appointment tools","Health diary","Emergency contacts","Caregiver portal"]},
    {name:"RetireeSocial",   tagline:"Community and connection for retirees",     features:["Retiree groups","Event calendar","Discussion forums","Reunion planning","Peer support tools"]},
    {name:"SecondCareer",    tagline:"Post-retirement income opportunities",      features:["Consulting listings","Tutoring opportunities","Mentorship matching","Volunteer roles","Part-time job board"]},
    {name:"WisdomBank",      tagline:"Preserving retiree knowledge and stories",  features:["Story submissions","Expert interviews","Mentorship profiles","Professional legacy archive","Youth learning tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — SENDME
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="sendme";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SendMe is Nigeria's on-demand help platform — connecting people who need assistance with people who can provide it, instantly and reliably. Whether you need a trusted errand runner, an emergency helper, a task worker, or a skilled professional for a quick job, SendMe gets the right person to you fast. In a city like Lagos or Abuja where time is money and trust is scarce, SendMe is the platform that delivers help, not just promises.";
  p.problem   = ["Finding trusted, reliable help for errands, tasks, and emergencies is extremely difficult in Nigeria.","Informal task workers have no platform to offer services reliably and build reputation.","People in emergencies cannot quickly locate available, trusted help near them.","There is no system for rating, verifying, or building accountability for task workers.","Errand culture in Nigeria is entirely offline, cash-based, and trust-deficient."];
  p.who       = ["Busy urban Nigerians needing reliable errand and task help","Individuals facing emergencies needing immediate assistance","Artisans, errand runners, and task workers seeking steady verified work","Businesses needing on-demand support staff for irregular tasks","Families managing errands, deliveries, and domestic task needs"];
  p.does      = ["Connects people needing help to trusted, verified task workers nearby","Provides instant request and matching for errands and emergency assistance","Builds trust through verified profiles, ratings, and completion records","Enables task workers to build professional reputations and steady income","Tracks task completion with transparent communication between parties"];
  p.features  = ["Instant task request and nearby helper matching","Verified helper profiles with ratings, reviews, and completion history","Live tracking of helper location for safety and transparency","Secure digital payment with completion confirmation","Emergency help request with priority matching and fast response"];
  p.how       = ["User submits task request with description, location, and urgency","Platform matches nearest available, rated helper","Helper accepts and heads to the user with live tracking active","Task is completed and payment released upon user confirmation","Both parties rate each other improving trust scores on the platform"];
  p.impact    = ["Reliable, trusted help available to any Nigerian at the tap of a button","Task workers earning steady income through a professional digital platform","Emergency situations resolved faster through instant help coordination","Trust culture built around rated, verified task worker relationships","Nigeria's informal help economy formalized and made reliable"];
  p.nigeria   = ["Nigeria's informal economy has millions of task workers without platforms to earn professionally","Urban Nigerians waste enormous time on errands that a platform can solve efficiently","Emergency help coordination saves lives in a country with limited formal emergency infrastructure","Formalizing task work creates taxable, traceable income and economic dignity","SendMe is the platform that makes Nigeria's hustle culture work smarter"];
  p.investors = ["On-demand help platforms are high-growth globally with proven unit economics","Transaction fee revenue on every completed task","Premium membership for power users needing frequent reliable help","Business and corporate task management subscription services","Insurance and background check service integration revenue"];
  p.future    = ["AI-powered task matching using location, rating, and skill optimization","Business API allowing companies to request on-demand staff programmatically","SendMe Pro — premium verified professionals for high-value tasks","Integration with TeleMedic for medical errand and prescription delivery","Expansion to all Nigerian state capitals with local helper networks"];
  p.subPlatforms = [
    {name:"QuickTask",       tagline:"Get help with any errand fast",             features:["Task request form","Instant matching","Task description tools","Category selection","Completion confirmation"]},
    {name:"EmergencyHelp",   tagline:"Urgent assistance when you need it most",   features:["Priority request","Nearest helper alert","Live tracking","Emergency type classification","Rapid response tools"]},
    {name:"HelperProfile",   tagline:"Build your helper reputation",              features:["Skills listing","Ratings showcase","Completion history","Service area settings","Availability management"]},
    {name:"SafePay",         tagline:"Secure task payments with confidence",      features:["Escrow payment","Completion release","Digital receipt","Dispute tools","Cashless settlement"]},
    {name:"TaskBusiness",    tagline:"On-demand support for businesses",          features:["Business account","Multi-task management","Staff request tools","Invoice generation","Task analytics"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FARMCONET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="farmconet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FarmConet is the digital power tool for Nigerian farmers — providing the technology, connectivity, and information they need to farm smarter, produce more, and earn better. From precision farming tools to cooperative management, from input procurement to extension services, FarmConet puts a digital farm manager in every farmer's pocket, regardless of the size of their land or the scale of their operation.";
  p.problem   = ["Nigerian farmers farm with inadequate access to technology, data, and modern techniques.","Cooperative management is manual, prone to conflict, and lacking transparency.","Agricultural extension services reach less than 20% of Nigerian farmers.","Input quality is unreliable and counterfeit seeds and fertilizer cause massive crop losses.","Farm records are not kept, making planning, financing, and improvement almost impossible.","Weather and climate risks destroy harvests that better information could have protected."];
  p.who       = ["Smallholder and medium-scale farmers across all Nigerian agricultural zones","Farmer cooperatives needing digital management tools","Agricultural extension workers delivering advisories to farmer groups","Input dealers and agro-service providers reaching farmers","Agricultural development organizations and state ADPS"];
  p.does      = ["Provides digital farm management tools for planning and record-keeping","Enables cooperative management with transparent member and financial records","Delivers agricultural extension advisory content digitally to all farmers","Connects farmers to verified, quality-assured input suppliers","Issues weather alerts and agronomic guidance based on real-time conditions"];
  p.features  = ["Digital farm record book — planting, input, harvest, and income tracking","Cooperative management tools — member records, contributions, and meetings","Extension advisory content delivered by crop, zone, and season","Verified input supplier marketplace with quality assurance ratings","Weather alert integration with planting and harvest guidance"];
  p.how       = ["Farmer registers and creates a digital farm profile","Logs planting, input application, and farm activities digitally","Receives advisory content relevant to their crop and location","Accesses cooperative management tools for their farmer group","Gets real-time weather alerts and adjusts farming decisions accordingly"];
  p.impact    = ["Nigerian farmers making better decisions with data — higher yields and lower losses","Cooperatives running transparently with digital records reducing internal conflicts","Extension services reaching millions of farmers who never had access before","Input fraud reduced as farmers access verified suppliers","Farm records enabling credit access for farmers for the first time"];
  p.nigeria   = ["Better farm management is the single most impactful tool for Nigerian food security","Cooperative farming at scale requires digital infrastructure to grow efficiently","Agricultural extension underfunding can be addressed through digital delivery","Input fraud is costing Nigerian farmers billions annually — verification solves it","Farm data enables climate-smart agriculture adaptation Nigeria urgently needs"];
  p.investors = ["Agricultural technology has attracted billions in global investment — Nigeria is underserved","Input marketplace transaction fees and verified dealer subscriptions","Cooperative management premium subscriptions","Agricultural financial services facilitation fees","Government ADP and state agricultural extension programme platform contracts"];
  p.future    = ["Drone and satellite crop monitoring integrated into FarmConet","AI yield prediction and precision agriculture advisory","Farm insurance integration protecting crops against weather and pest losses","Carbon farming programme tracking and credit issuance","National farm registry — every farm in Nigeria mapped and recorded"];
  p.subPlatforms = [
    {name:"FarmBook",        tagline:"Digital farm record and management tool",   features:["Planting diary","Input log","Harvest record","Income tracker","Season planning"]},
    {name:"CoopManage",      tagline:"Digital management for farmer cooperatives",features:["Member registry","Contribution tracking","Meeting minutes","Financial records","Conflict resolution tools"]},
    {name:"ExtensionHub",    tagline:"Expert farming advice for every farmer",    features:["Crop-specific guides","Video advisories","Pest and disease alerts","Season calendars","Expert Q&A"]},
    {name:"InputVerify",     tagline:"Buy verified, quality farming inputs",      features:["Verified dealer directory","Product quality ratings","Counterfeit reporting","Price comparison","Delivery coordination"]},
    {name:"FarmWeather",     tagline:"Weather intelligence for farming decisions",features:["7-day forecasts","Planting condition alerts","Flood and drought warnings","Harvest timing guidance","Climate trend data"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FOODHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="foodhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FoodHub is Nigeria's food discovery, safety, and nutrition platform — connecting Nigerians to healthy food, safe food information, local food producers, and the rich culinary heritage that makes Nigerian cuisine one of the greatest in the world. From tracking food safety incidents to celebrating traditional recipes, from connecting consumers to local farmers to building food literacy, FoodHub nourishes Nigeria beyond just filling plates.";
  p.problem   = ["Food safety incidents in Nigeria are common, underreported, and rarely resolved.","Nigerians lack reliable nutritional information about traditional and local foods.","Small-scale food producers and local food businesses have no digital visibility.","The richness of Nigerian food culture is poorly documented and at risk of being lost.","Food insecurity affects millions who lack information about affordable, nutritious options."];
  p.who       = ["Consumers seeking food safety information and healthy eating guidance","Local food producers, caterers, and food businesses seeking digital visibility","Nutritionists, dietitians, and food educators","NAFDAC and food safety regulatory bodies","Schools and families building food literacy and healthy eating habits"];
  p.does      = ["Enables food safety incident reporting and tracks resolutions","Provides nutritional information for Nigerian foods in plain, accessible language","Connects consumers to verified local food producers and caterers","Archives Nigerian food culture, recipes, and culinary heritage","Delivers food literacy education for schools, families, and communities"];
  p.features  = ["Food safety incident reporting connected to NAFDAC and health agencies","Nigerian food nutrition database with calorie and nutrient information","Local food producer and caterer marketplace","Traditional recipe archive celebrating Nigerian culinary heritage","Food literacy education content for schools and families"];
  p.how       = ["User reports food safety incident with evidence and location","Platform routes to NAFDAC and publishes alert for public awareness","Consumer searches for nutritional info or healthy local food options","Connects to local producers and caterers for quality fresh food","Explores culinary content celebrating Nigeria's extraordinary food culture"];
  p.impact    = ["Food safety incidents reported and resolved faster across Nigeria","Nigerians making healthier food choices with better nutritional information","Local food producers gaining national visibility and more customers","Nigeria's culinary heritage preserved and celebrated for future generations","A more food-literate Nigeria making better individual and national nutrition choices"];
  p.nigeria   = ["Food safety kills Nigerians — a reporting and tracking system saves lives","Nigeria's food culture is extraordinary and deserves world-class digital preservation","Local food producers need digital infrastructure to compete with imported food brands","Nutrition information reducing preventable diet-related disease is a public health priority","Food security requires both production improvement and consumer food literacy"];
  p.investors = ["Food technology platforms attract major FMCG and agricultural investment","Food producer marketplace transaction fees","NAFDAC food safety reporting and compliance tool partnerships","Nutritional content licensing to health platforms and insurance companies","Government school food programme and nutrition education contracts"];
  p.future    = ["AI-powered personalized Nigerian nutrition and meal planning tool","National food safety surveillance system with real-time alerts","Food export marketplace taking Nigerian cuisine to the world","Farm-to-table transparency tracking food from producer to consumer plate","FoodHub restaurant and caterer quality certification programme"];
  p.subPlatforms = [
    {name:"SafeFood",        tagline:"Report and track food safety incidents",    features:["Incident report form","Evidence upload","NAFDAC alert routing","Public alert broadcast","Resolution tracking"]},
    {name:"NutriNaija",      tagline:"Nutritional info for Nigerian foods",       features:["Food nutrient database","Meal calorie calculator","Diet guidance","Healthy Nigerian recipes","Allergy information"]},
    {name:"LocalProducer",   tagline:"Connect to fresh local food near you",      features:["Producer marketplace","Farm-fresh listings","Caterer directory","Order tools","Quality ratings"]},
    {name:"RecipeArchive",   tagline:"Nigeria's culinary heritage preserved",     features:["Traditional recipe library","Regional food guides","Video cooking content","Chef community","Heritage food stories"]},
    {name:"FoodLiteracy",    tagline:"Teaching healthy eating across Nigeria",    features:["School food curriculum","Family nutrition guides","Healthy eating challenges","Community workshops","Food literacy certification"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ENVIRONMENTAL
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="environmental";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Environmental is Nigeria's citizen-powered platform for environmental protection — giving every Nigerian the tools to report pollution, track climate change impacts, monitor industrial activity, and hold polluters accountable. Nigeria's environment is under enormous stress from oil spills, illegal dumping, deforestation, and industrial discharge. Environmental turns citizens into the eyes and ears the nation needs to protect its land, water, and air for future generations.";
  p.problem   = ["Nigeria's environment is severely degraded by oil pollution, illegal dumping, and industrial discharge.","Environmental violations are rarely reported because no clear reporting channel exists.","Government environmental agencies are poorly resourced and lack citizen reporting infrastructure.","Climate change impacts on Nigerian communities are not being documented or tracked.","Environmental destruction drives conflict — especially in the Niger Delta and north.","Citizens who want to protect their environment have no organized platform to do so."];
  p.who       = ["Citizens witnessing environmental violations and pollution in their communities","Environmental activists and civil society organizations","Government environmental agencies needing citizen-reported data","Journalists investigating environmental crimes and corporate pollution","Researchers studying Nigeria's environmental conditions and climate impacts"];
  p.does      = ["Enables citizens to report environmental violations with photo and location evidence","Tracks pollution incidents and routes reports to relevant agencies","Monitors corporate and industrial environmental compliance","Documents climate change impacts on Nigerian communities","Builds an environmental data registry supporting advocacy and litigation"];
  p.features  = ["Environmental violation reporting tool with photo, video, and GPS evidence","Pollution incident map showing reported violations by type and location","Corporate environmental compliance tracker","Climate change impact documentation for Nigerian communities","Environmental data archive for advocacy, research, and legal use"];
  p.how       = ["Citizen observes environmental violation and reports through the platform","Report is logged with location, photos, and violation type","Relevant agency (NESREA, DPR, state EPA) is alerted automatically","Violation is tracked to resolution — or escalated if ignored","Data builds a national environmental health picture over time"];
  p.impact    = ["Environmental violations reported and addressed faster through organized citizen reporting","Corporate polluters held accountable through transparent public documentation","Climate change impacts documented providing evidence for national adaptation planning","Environmental activists equipped with data for advocacy and legal action","Nigeria's environmental governance strengthened by citizen-generated intelligence"];
  p.nigeria   = ["Nigeria's oil spills, illegal dumping, and deforestation are national emergencies requiring citizen vigilance","Environmental destruction is driving communal conflict and migration — data changes the conversation","Nigeria's Paris Agreement commitments require environmental monitoring infrastructure","Holding corporations accountable for environmental damage requires evidence — citizens generate that evidence","Environmental protection is both a national security and economic development imperative"];
  p.investors = ["Environmental technology is attracting massive global climate finance investment","Government environmental monitoring platform contracts","Corporate sustainability compliance service subscriptions","International climate and environmental organization partnership funding","Carbon tracking and environmental credit services"];
  p.future    = ["AI-powered pollution detection using satellite and drone imagery","National environmental quality index updated in real time","Integration with NESREA, DPR, and all state environmental protection agencies","Environmental litigation support platform for affected communities","Nigeria climate adaptation planning platform using environmental data"];
  p.subPlatforms = [
    {name:"PollutionReport",  tagline:"Report environmental violations instantly", features:["GPS-tagged reports","Photo and video evidence","Violation categorization","Agency routing","Report tracking"]},
    {name:"PollutionMap",     tagline:"Nigeria's live environmental health map",   features:["Incident heatmap","Pollution type filter","Trend visualization","Regional comparison","Historical data"]},
    {name:"CorpEnvWatch",     tagline:"Monitor corporate environmental compliance",features:["Company environmental profiles","Violation history","Compliance score","Complaint submission","Industry comparison"]},
    {name:"ClimateDoc",       tagline:"Document climate change impacts near you",  features:["Community impact reports","Before/after documentation","Weather event recording","Impact data archive","Advocacy resource tools"]},
    {name:"EnvAdvocacy",      tagline:"Organize environmental action campaigns",   features:["Campaign builder","Petition tools","Legal resource library","Media toolkit","Agency engagement tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — WATERCONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="waterconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "WaterConnect is Nigeria's platform for clean water access, safety, and accountability — connecting communities to water solutions, enabling water quality reporting, and holding water authorities accountable for delivering one of the most basic human rights. Clean water is not a luxury in Nigeria — it is an urgent, deadly necessity. WaterConnect makes every citizen a guardian of this essential resource.";
  p.problem   = ["Access to clean piped water covers less than 25% of Nigeria's population.","Waterborne diseases kill tens of thousands of Nigerians annually — preventably.","Water quality violations are rarely reported or addressed by authorities.","Rural communities depend on unsafe water sources with no alternatives or support.","Water infrastructure projects are frequently ghost projects that never deliver.","Citizens have no platform to report water contamination or hold agencies accountable."];
  p.who       = ["Communities without access to clean water seeking solutions","Citizens reporting water contamination and pollution incidents","Government water authorities and state water boards","NGOs and development organizations delivering water access programmes","Investors in Nigeria's water infrastructure sector"];
  p.does      = ["Enables citizens to report water quality problems and contamination","Maps water access across Nigeria identifying underserved communities","Connects communities to water solution providers and NGOs","Tracks water infrastructure projects from announcement to delivery","Provides water safety education and contamination prevention guidance"];
  p.features  = ["Water quality reporting tool with location and contamination type","National water access map showing coverage and quality by community","Water solution provider directory for communities seeking alternatives","Water infrastructure project tracker with delivery verification","Water safety education content for communities and schools"];
  p.how       = ["Community or citizen reports water problem with evidence and location","Report is mapped, categorized, and routed to relevant water authority","Water solution providers are alerted and can respond with assistance","Infrastructure projects are tracked and verified for actual delivery","Water safety content circulates to reduce illness from contaminated sources"];
  p.impact    = ["Waterborne disease deaths reduced through faster contamination response","Underserved communities connected to water solution providers for the first time","Water infrastructure projects publicly tracked reducing ghost project fraud","Citizens holding water authorities accountable for delivery commitments","Nigeria making measurable progress toward universal clean water access"];
  p.nigeria   = ["Water access failure kills more Nigerians than most reported public health crises","Nigeria's SDG 6 commitments require citizen monitoring infrastructure to achieve","Rural water poverty is a driver of poverty, disease, and out-migration","Water infrastructure investment returns are highest when accountability is built in","A Nigeria where clean water is universal is a healthier and more productive Nigeria"];
  p.investors = ["Water technology and infrastructure is a major global impact investment sector","Government water authority platform contracts for reporting and tracking","NGO programme management tools subscriptions","Water infrastructure investment facilitation services","International development bank funding for water access technology programmes"];
  p.future    = ["IoT water quality sensor network for real-time national water monitoring","Community water cooperative management digital tools","Rainwater harvesting and alternative water solution promotion platform","National water security strategy data platform","Integration with FMWR and state water board information systems"];
  p.subPlatforms = [
    {name:"WaterReport",     tagline:"Report water problems near you",            features:["Contamination report","Location tagging","Photo evidence","Agency routing","Resolution tracking"]},
    {name:"WaterMap",        tagline:"Nigeria's water access coverage map",       features:["Community coverage data","Quality ratings","Waterpoint locations","Access gap identification","Data download"]},
    {name:"WaterSolutions",  tagline:"Find water alternatives for your community",features:["Solution provider directory","Borehole installer listings","Water treatment options","NGO assistance requests","Community project tools"]},
    {name:"WaterTrack",      tagline:"Track water infrastructure delivery",       features:["Project registry","Milestone tracking","Completion verification","Ghost project flagging","Community monitoring"]},
    {name:"WaterSafe",       tagline:"Water safety education for communities",    features:["Contamination prevention guides","Treatment methods","Safe storage tips","School content","Community workshop tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DEENCONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="deenconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DeenConnect is Nigeria's digital platform for the Muslim community — connecting mosques, scholars, students of knowledge, and everyday Muslims in one trusted, enriching digital space. From Islamic education to community coordination, from Quran learning to Zakat management, DeenConnect serves the spiritual, intellectual, and social needs of Nigeria's 100 million-strong Muslim community with the respect, integrity, and depth their faith deserves.";
  p.problem   = ["Nigeria's Muslim community has no organized digital platform representing their needs.","Islamic education resources are scattered, unverified, and of inconsistent quality online.","Mosque management is entirely manual and poorly coordinated.","Zakat and sadaqah collection lacks transparency and accountability in many cases.","Muslim professionals and scholars have no dedicated networking platform.","Misinformation about Islam spreads rapidly with no organized counterweight."];
  p.who       = ["Nigeria's Muslim community across all 36 states","Mosque leadership and Islamic scholars","Students of Islamic knowledge at all levels","Muslim professionals seeking a faith-aligned community","Islamic charity organizations managing Zakat and sadaqah"];
  p.does      = ["Provides verified, high-quality Islamic education content for all levels","Connects mosque communities digitally for coordination and communication","Enables transparent Zakat collection and distribution management","Builds a Nigerian Muslim professional and scholarly network","Counters misinformation with verified, scholar-approved Islamic content"];
  p.features  = ["Verified Islamic knowledge library — Quran, Hadith, Fiqh, and Tafseer","Mosque management tools for announcements, programs, and community coordination","Transparent Zakat and sadaqah management platform","Muslim professional network for career and business connections","Prayer times, Qibla direction, and Islamic calendar tools"];
  p.how       = ["Muslim creates a profile linked to their mosque community","Accesses verified Islamic education and daily practice tools","Mosque leadership manages community communications through the platform","Zakat contributions are collected transparently and distributed to verified causes","Community members connect, learn, and support each other digitally"];
  p.impact    = ["Nigeria's Muslim community with a unified, trusted digital home","Mosque communities better organized and more effectively serving their members","Zakat collected and distributed transparently building community trust","Verified Islamic knowledge countering online misinformation","Muslim professionals connected nationally for career and community building"];
  p.nigeria   = ["Nigeria has one of the world's largest Muslim populations — they deserve world-class digital tools","Mosque coordination during emergencies requires digital infrastructure","Zakat transparency is a religious obligation and a community trust issue","Islamic education quality must be organized and verified at national scale","A strong, organized Muslim digital community contributes to national peace and cohesion"];
  p.investors = ["Nigeria's Muslim market of 100M+ is one of the most underserved digital communities globally","Premium features, Zakat platform fees, and Islamic finance integration revenue","Corporate advertising in a highly trusted, faith-aligned community context","Government partnership for Islamic education and community management tools","International Islamic development organization funding and partnership"];
  p.future    = ["Full Quran memorization programme with verified sheikh certification","Islamic finance and halal investment platform integration","National mosque connectivity network for emergency coordination","Hajj and Umrah preparation and coordination platform","Pan-African Islamic community platform connecting Muslims across the continent"];
  p.subPlatforms = [
    {name:"IlmHub",          tagline:"Verified Islamic knowledge for all levels", features:["Quran with Tafseer","Hadith library","Fiqh guides","Islamic history","Scholar-verified content"]},
    {name:"MasjidConnect",   tagline:"Digital tools for mosque communities",      features:["Announcement tools","Program calendar","Community directory","Friday lecture archive","Emergency coordination"]},
    {name:"ZakatPlatform",   tagline:"Transparent Zakat and charity management", features:["Zakat calculator","Contribution tracking","Verified beneficiary lists","Distribution reports","Annual accountability report"]},
    {name:"MuslimNet",       tagline:"Muslim professional and community network", features:["Professional profiles","Halal business directory","Scholar network","Community forums","Marriage facilitation tools"]},
    {name:"DailyDeen",       tagline:"Daily Islamic practice companion",         features:["Prayer times","Qibla compass","Islamic calendar","Daily dhikr guide","Ramadan tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — RAISENIG (RiseNigeria)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="risenigeria";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RiseNigeria is the platform for Nigerians who refuse to accept the status quo — who believe in this country, fight for it, and are willing to act to make it better. It is a national movement platform that mobilizes citizens around shared goals, organizes community action, and turns frustration into productive, positive, documented change. Nigeria deserves better — and RiseNigeria exists for every Nigerian who is ready to help deliver that.";
  p.problem   = ["Civic frustration in Nigeria is widespread but rarely channels into organized productive action.","Citizens who want to contribute to national improvement have no coordination platform.","Community issues fester because there is no organized mechanism for collective action.","Positive Nigerian stories and changemakers are invisible while negative news dominates.","Young Nigerians increasingly disengage from civic life feeling powerless to change anything."];
  p.who       = ["Civic-minded Nigerians wanting to make a positive difference","Community leaders organizing local improvement projects","Youth ready to take action on issues that matter to them","NGOs and civil society organizations coordinating civic campaigns","Journalists and storytellers celebrating Nigerian achievements and changemakers"];
  p.does      = ["Organizes citizen action around national and community improvement goals","Connects community projects to volunteers, funding, and support","Celebrates and amplifies positive Nigerian stories and changemakers","Provides tools for coordinating civic campaigns and community movements","Builds a culture of productive civic engagement across Nigeria"];
  p.features  = ["Community project coordination tools for organizing volunteers and resources","National improvement campaign board for organized civic action","Positive Nigeria story archive celebrating achievements and changemakers","Volunteer matching connecting willing hands to community needs","Civic skills development content building better active citizens"];
  p.how       = ["Citizen identifies a community need or national issue to address","Creates or joins a campaign or community project on the platform","Volunteers, donors, and supporters coordinate through the tools","Project progresses and outcomes are documented publicly","Success stories inspire others to take action in their own communities"];
  p.impact    = ["Thousands of community improvement projects organized and completed","A culture of positive civic action replacing passive complaint","Positive Nigerian stories reaching millions changing the national narrative","Young Nigerians feeling powerful and effective as civic actors","Nigeria rising through the organized, collective effort of its citizens"];
  p.nigeria   = ["Nigeria's challenges are real but so is the will of millions to address them","Civic disengagement is a national crisis — organized action reverses it","Community self-help is embedded in Nigerian culture — RiseNigeria gives it digital infrastructure","Positive stories change how Nigerians see themselves and their country","A rising Nigeria needs citizens who believe in it and are organized to build it"];
  p.investors = ["Civic tech and social impact platforms attract major foundation and development funding","Corporate CSR partnership for community project co-funding","Government civic engagement programme platform contracts","International democracy and governance funding organizations","Media and content partnership for positive Nigeria storytelling"];
  p.future    = ["Annual RiseNigeria National Civic Awards celebrating the country's best change makers","National volunteer corps management platform in partnership with government","RiseNigeria schools programme building civic values in young Nigerians","Digital town hall infrastructure for national citizen dialogue with leaders","Pan-African civic platform connecting Africa's active citizens across borders"];
  p.subPlatforms = [
    {name:"CivicAction",     tagline:"Organize community improvement campaigns",  features:["Campaign builder","Volunteer coordination","Resource tracking","Progress documentation","Outcome reporting"]},
    {name:"GoodNaija",       tagline:"Celebrate Nigeria's positive stories",      features:["Story submissions","Changemaker profiles","Community achievement archive","Media toolkit","Story sharing tools"]},
    {name:"VolunteerMatch",  tagline:"Connect volunteers to community needs",     features:["Volunteer registration","Skills matching","Project listings","Hours tracking","Recognition badges"]},
    {name:"CivicLearn",      tagline:"Build your civic knowledge and skills",     features:["Civic education content","Community organizing guides","Campaign strategy tools","Leadership development","Advocacy training"]},
    {name:"CommunityFund",   tagline:"Pool resources for community projects",     features:["Community crowdfunding","Project budgeting","Donor transparency","Fund management tools","Expenditure reporting"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CREATIVEX
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="creativex";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "CreativeX is Nigeria's platform where creativity becomes industry — connecting artists, designers, musicians, filmmakers, photographers, and every creative professional to the tools, community, markets, and opportunities they need to turn their gifts into sustainable careers. Nigeria's creative talent is world-class. CreativeX ensures the world knows it, and that Nigerian creatives earn the income and recognition they deserve.";
  p.problem   = ["Nigerian creative professionals earn far below their global peers for equivalent work.","The creative industry is disorganized with no central platform for professionals to connect.","Creative work is regularly stolen, plagiarized, and unpaid — rights protection is minimal.","Young creatives have no mentorship pathway or community to develop their professional skills.","International clients cannot easily find and hire verified Nigerian creative talent.","Nigeria's creative economy is enormous but most value is captured by foreign platforms."];
  p.who       = ["Artists, designers, photographers, musicians, and filmmakers","Copywriters, content creators, and digital media professionals","Creative agencies and studios seeking talent and collaboration","Brands and businesses seeking Nigerian creative services","Young creatives entering the professional creative market"];
  p.does      = ["Builds a verified marketplace connecting creative talent to clients","Provides intellectual property protection tools for creative work","Enables creative professionals to showcase portfolios and build reputation","Connects young creatives to mentors and professional development resources","Facilitates fair payment for creative work with escrow and contract tools"];
  p.features  = ["Verified creative professional profiles with portfolio showcase","Creative marketplace connecting talent to brands and clients","Copyright registration and IP protection guidance tools","Mentorship network connecting established and emerging creatives","Secure project management, contract, and payment tools"];
  p.how       = ["Creative professional builds verified profile with portfolio","Lists services with pricing and availability","Client discovers talent through search and portfolio review","Project is contracted and managed through secure tools","Payment released on completion with IP ownership documentation"];
  p.impact    = ["Nigerian creatives earning internationally competitive rates for their work","Creative IP protected reducing theft and unpaid usage","A thriving, organized Nigerian creative industry with global visibility","Young creatives entering the profession through structured mentorship pathways","Nigeria's creative economy growing as a major GDP contributor and export earner"];
  p.nigeria   = ["Nigeria's creative industry already generates billions — it needs infrastructure to grow further","Nollywood, Afrobeats, and Nigerian design are globally recognized — platforms must match that status","Creative IP theft is crippling Nigerian creatives' ability to build careers","The creative economy can absorb millions of young Nigerians into productive employment","A well-organized creative sector multiplies Nigeria's soft power globally"];
  p.investors = ["Creative economy platforms are high-growth globally with strong network effects","Transaction fees from every creative marketplace deal","Premium professional membership subscriptions","Brand and agency advertising within the creative professional community","IP protection and contract service subscription revenue"];
  p.future    = ["CreativeX distribution platform taking Nigerian creative work global","Nigerian Creative Industry Index — tracking the sector's national contribution","AI-powered creative brief matching connecting clients to perfect talent","CreativeX Awards — annual celebration of Nigeria's best creative work","Pan-African creative marketplace connecting all African creative talent globally"];
  p.subPlatforms = [
    {name:"CreativePortfolio",tagline:"Showcase your creative work professionally", features:["Portfolio builder","Work gallery","Client testimonials","Specialization tags","Discovery optimization"]},
    {name:"CreativeMarket",  tagline:"Find and hire Nigerian creative talent",     features:["Service listings","Talent search","Brief submission","Proposal tools","Review system"]},
    {name:"IPProtect",       tagline:"Protect your creative intellectual property",features:["Copyright guidance","Work registration","Watermarking tools","Infringement reporting","Legal resource links"]},
    {name:"CreativeMentor",  tagline:"Build your creative career with guidance",   features:["Mentor matching","Career pathway tools","Skill development resources","Industry insights","Peer community"]},
    {name:"CreativePay",     tagline:"Get paid fairly for your creative work",     features:["Escrow payment","Contract builder","Milestone billing","Invoice generation","Dispute tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — SPORTSECO
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="sportseco";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SportsEco is Nigeria's comprehensive digital sports ecosystem — connecting athletes, coaches, clubs, fans, and sports businesses in one powerful platform. From grassroots talent discovery to professional league management, from sports news to athlete career development, SportsEco is building the digital infrastructure that will power Nigerian sports to the global stage. Nigeria's sports talent is unmatched — SportsEco ensures the world sees it, and that Nigerian athletes build the careers they deserve.";
  p.problem   = ["Nigerian sports talent is discovered late, poorly developed, and often lost entirely.","Grassroots sports infrastructure is severely underfunded and disconnected from professional leagues.","Athletes have no platform to manage their careers, profiles, and market opportunities.","Sports businesses — academies, clubs, kit manufacturers — have no organized digital marketplace.","Fan engagement with Nigerian sports is fragmented across unofficial channels.","Sports data — statistics, results, rankings — is poorly captured and rarely published."];
  p.who       = ["Athletes at every level from grassroots to professional","Coaches and sports academies developing Nigerian talent","Sports clubs and league administrators managing competitions","Fans following Nigerian sports across all disciplines","Brands and sponsors seeking to connect with Nigeria's massive sports audience"];
  p.does      = ["Creates verified athlete profiles enabling talent discovery and career management","Connects grassroots clubs to academies, scouts, and development pathways","Provides sports news, results, and statistics for all Nigerian sports","Enables sports businesses to reach athletes, clubs, and fans","Builds fan engagement with Nigerian sports at every level"];
  p.features  = ["Verified athlete profile with performance data and career history","Grassroots talent discovery and scouting platform","Sports league management and results tracking tools","Sports business marketplace for academies, equipment, and services","Fan engagement tools — news, results, predictions, and community"];
  p.how       = ["Athlete creates verified profile with stats, achievements, and video highlights","Scout or academy discovers talent through searchable profile database","League or club publishes fixtures, results, and standings on the platform","Sports business lists services and connects to athletes and clubs","Fans follow teams, players, and leagues through rich, organized content"];
  p.impact    = ["Nigerian sports talent discovered earlier and developed more systematically","Pathways between grassroots and professional sport formalized and accessible","Nigeria's sports statistics captured and published for the first time comprehensively","Sports businesses thriving with organized digital marketplace access","Fan culture around Nigerian sports growing through better content and engagement"];
  p.nigeria   = ["Nigeria's sports talent is extraordinary but its sports system is poorly organized","Talent lost for lack of discovery infrastructure is a national waste","Sports economics are an underutilized contributor to Nigeria's GDP and soft power","Better sports data makes Nigeria more competitive for international events and investment","Fan engagement with homegrown sports creates a sustainable sports industry economy"];
  p.investors = ["Sports technology is a globally high-growth investment sector","Athlete profile and scouting platform subscription revenue","League management and administration tool subscriptions","Sports business marketplace transaction and listing fees","Fan platform advertising and sponsorship revenue"];
  p.future    = ["AI talent scouting analysing video performance across all sports","National athlete health and injury tracking system","Sports scholarship and pathway management platform","Virtual stadium experience for Nigerian league matches","Continental African sports platform connecting athletes, clubs, and fans across Africa"];
  p.subPlatforms = [
    {name:"AthleteProfile",  tagline:"Your professional sports identity online",  features:["Performance stats","Video highlights","Career history","Scouting visibility","Endorsement tools"]},
    {name:"ScoutBoard",      tagline:"Discover grassroots Nigerian talent",       features:["Talent search filters","Video review tools","Scout network","Talent tracking","Academy connect"]},
    {name:"LeagueManager",   tagline:"Run your sports league digitally",          features:["Fixture management","Results publishing","Standings tables","Referee tools","Club communication"]},
    {name:"SportsBiz",       tagline:"Market for Nigerian sports businesses",     features:["Academy listings","Equipment marketplace","Coaching services","Sponsorship tools","Event management"]},
    {name:"FanZone",         tagline:"Follow Nigerian sports like never before",  features:["Live scores","Match previews","Team news","Fan forums","Prediction games"]}
  ];
})();


// ============================================================
//  FULL CONTENT — GAMEARENA
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="gamearena";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "GameArena is Nigeria's premier sports prediction and fantasy gaming platform — where fans turn their passion and knowledge into real competition, real bragging rights, and real rewards. From football predictions to fantasy leagues, from trivia competitions to sports gaming, GameArena transforms Nigerian sports fandom into an organized, exciting, community-powered digital experience. Play. Predict. Win. This is GameArena.";
  p.problem   = ["Nigerian sports fans have no organized, trusted platform for predictions and fantasy leagues.","Sports fandom in Nigeria is highly passionate but poorly engaged digitally.","Informal sports betting is widespread but unregulated and often exploitative.","There is no platform celebrating Nigerian sports knowledge and fan culture.","Sports fantasy games are dominated by foreign platforms that don't reflect Nigerian leagues."];
  p.who       = ["Nigerian football and sports fans of all ages","Fantasy sports enthusiasts wanting Nigeria-specific leagues","Sports trivia lovers and quiz competitors","Sports media and content companies engaging fan communities","Brands seeking to reach Nigeria's enormous sports-passionate audience"];
  p.does      = ["Hosts Nigeria-focused sports prediction leagues and competitions","Provides fantasy sports with Nigerian league players and fixtures","Runs sports trivia and knowledge competitions","Builds an organized, rewarding Nigerian sports fan community","Connects sports sponsors and brands to passionate, verified fan audiences"];
  p.features  = ["Nigerian football and sports prediction leagues with leaderboards","Fantasy sports with NPFL, Super Eagles, and continental players","Sports trivia competitions with real prizes and recognition","Fan community tools — discussion, polls, and matchday experiences","Sponsorship and brand activation tools for the sports audience"];
  p.how       = ["Fan registers and joins prediction leagues or fantasy competitions","Makes picks, builds fantasy teams, and competes in trivia","Leaderboards track performance across all competitions","Top performers win prizes, recognition, and community status","Sports brands activate campaigns within the fan community"];
  p.impact    = ["Nigeria's sports fans with a trusted, organized digital home","Sports knowledge celebrated and rewarded in an organized community","Nigerian football and sports — especially the NPFL — gaining broader fan engagement","A sports fan economy generating real value for the Nigerian sports ecosystem","Brands reaching Nigeria's passionate sports audience effectively and authentically"];
  p.nigeria   = ["Nigeria has some of the world's most passionate football fans — they deserve a world-class platform","NPFL and Nigerian sports need fan engagement platforms to grow commercially","Fan economy is an underutilized revenue source for Nigerian sports development","Sports platforms build patriotism and national identity around shared sporting passion","A thriving sports fan economy supports athlete development and league investment"];
  p.investors = ["Sports gaming and fantasy platforms have proven, high-margin global business models","Premium competition entry fees and subscription leagues","Brand sponsorship and activation revenue from engaged sports audiences","Data and analytics services for Nigerian sports organizations and media","Partnership with Nigerian football federation and sports bodies"];
  p.future    = ["Live in-match prediction features during Nigerian league games","Virtual reality matchday experience for Nigerian football fans","International Super Eagles fan engagement platform","Esports tournament integration for gaming-sports crossover audience","Pan-African sports gaming platform connecting fans across the continent"];
  p.subPlatforms = [
    {name:"PredictWin",      tagline:"Predict results, win every week",           features:["Match prediction forms","Leaderboard tracking","Weekly prize pools","Season competition","Expert prediction comparison"]},
    {name:"FantasyNaija",    tagline:"Build your Nigerian fantasy football team", features:["NPFL fantasy league","Super Eagles fantasy","Player performance scoring","Transfer tools","Private leagues"]},
    {name:"SportsBrain",     tagline:"Test your Nigerian sports knowledge",       features:["Sports trivia competitions","Daily quiz challenges","Knowledge leaderboard","Category specialization","Prize tournaments"]},
    {name:"FanCommunity",    tagline:"Nigerian sports fan social platform",       features:["Match discussion","Team fan groups","Poll and voting tools","Matchday live chat","Content sharing"]},
    {name:"SponsorConnect",  tagline:"Brands reaching sports fans",              features:["Fan audience targeting","Campaign activation tools","Engagement metrics","Branded competitions","Partnership management"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TRAVLEX
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="traveleX";});
  if(!p) p = platforms.find(function(x){return x.key==="traveleX";});
  if(!p) p = platforms.find(function(x){ return x.name && x.name.toLowerCase().includes("travele"); });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "TraveleX is Nigeria's travel and exploration platform — connecting Nigerians to the incredible diversity of experiences their own country offers, while making international travel planning smarter and more accessible. From Yankari Wildlife Reserve to Obudu Mountain Resort, from Lagos beach weekends to Kano ancient city heritage tours, TraveleX makes every Nigerian a confident explorer at home and abroad. Nigeria is beautiful. TraveleX helps Nigerians see it.";
  p.problem   = ["Most Nigerians have never explored their own country beyond their home region.","Nigeria's tourism sector is one of the most underdeveloped relative to the country's attractions.","Travel planning for domestic trips is difficult due to lack of organized information.","Nigerian tourism businesses have almost no digital visibility or booking infrastructure.","Travel safety concerns go unaddressed because reliable information is not available.","International travel by Nigerians is poorly supported with no trusted Nigerian travel platform."];
  p.who       = ["Nigerian travellers exploring their country for the first time","Families planning domestic holiday and short break experiences","Adventure and eco-tourism seekers discovering Nigeria's natural wonders","Tourism businesses — hotels, tour operators, and experience providers","Nigerians planning international travel seeking trusted guidance and deals"];
  p.does      = ["Showcases Nigeria's tourism destinations with rich, accurate content","Enables booking of accommodation, tours, and experiences across Nigeria","Provides travel safety and practical information for domestic travellers","Connects tourism businesses to travellers seeking their services","Supports international travel planning with visa guides, tips, and deals"];
  p.features  = ["Nigeria destination guide — comprehensive content on every state's attractions","Accommodation and tour booking for domestic travel","Travel safety information and community travel reviews","Tourism business directory and booking platform","International travel guide with visa information and trip planning tools"];
  p.how       = ["Traveller searches for destination, experience, or accommodation type","Browses rich content including reviews, photos, and practical information","Books accommodation, tours, or experiences directly through the platform","Travels with confidence using safety and practical guides","Shares reviews and experiences contributing to the community knowledge base"];
  p.impact    = ["Domestic tourism in Nigeria growing as Nigerians discover their own country","Nigerian tourism businesses gaining digital visibility and direct bookings","More Nigerians feeling safe and informed travelling domestically","Nigeria's extraordinary tourism potential generating significant economic activity","A culture of Nigerian exploration and pride in the nation's natural and cultural wealth"];
  p.nigeria   = ["Nigeria has extraordinary tourism assets — Yankari, Obudu, Idanre Hills, Lekki — largely unknown","Domestic tourism is Nigeria's most underutilized economic sector","Tourism development creates jobs in every state without requiring extractive industries","Nigerians exploring Nigeria builds national cohesion and cultural appreciation","A thriving Nigerian tourism sector reduces forex outflow on foreign holidays"];
  p.investors = ["Tourism platforms have proven global revenue models with transaction and subscription income","Booking commission revenue on every accommodation and tour reservation","Tourism business premium listing and visibility fees","Travel content and advertising revenue","Government tourism board partnership contracts for destination promotion"];
  p.future    = ["AI travel planner creating personalized Nigerian adventure itineraries","Nigeria National Parks digital experience platform","Virtual reality previews of Nigeria's most spectacular destinations","Tourism investment map connecting investors to underdeveloped tourism assets","West Africa travel platform connecting the region's extraordinary tourism destinations"];
  p.subPlatforms = [
    {name:"ExploreNaija",    tagline:"Discover every corner of Nigeria",          features:["State destination guides","Attraction listings","Hidden gem highlights","Photo galleries","Travel tips by region"]},
    {name:"BookTrip",        tagline:"Book Nigerian travel experiences easily",   features:["Hotel bookings","Tour reservations","Experience booking","Package deals","Booking confirmation tools"]},
    {name:"TravelSafe",      tagline:"Travel Nigeria with confidence",            features:["Safety ratings by state","Community travel reports","Emergency contacts","Health advisories","Travel insurance links"]},
    {name:"TourismBiz",      tagline:"For hotels, tours, and travel businesses", features:["Business listing","Booking management","Review response tools","Package builder","Analytics dashboard"]},
    {name:"GlobalNaija",     tagline:"International travel made simpler",         features:["Visa information","International flight deals","Country guides","Packing tools","Travel insurance comparison"]}
  ];
})();


// ============================================================
//  FULL CONTENT — EVENTSHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="eventshub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EventsHub is Nigeria's definitive events discovery and management platform — connecting event organisers to audiences and giving Nigerians one place to find, book, and experience everything happening around them. From concerts and conferences to weddings and community programs, EventsHub makes every Nigerian event visible, organized, and accessible. Because life in Nigeria is vibrant, exciting, and full of things worth experiencing — and EventsHub makes sure you never miss them.";
  p.problem   = ["Great events in Nigeria are poorly promoted and often attended by a fraction of their potential audience.","Event organisers have no unified platform for ticketing, promotion, and management.","Attendees have no reliable way to discover what is happening near them.","Ticket fraud at Nigerian events is widespread and costly for organisers and attendees.","Corporate and professional events lack the digital management tools needed for smooth delivery."];
  p.who       = ["Event organisers across all event categories — music, corporate, social, and cultural","Nigerians seeking to discover events near them","Ticketing and venue management professionals","Corporates hosting professional events, conferences, and exhibitions","Artists, speakers, and performers managing event appearances"];
  p.does      = ["Lists and promotes every Nigerian event with rich, accurate content","Enables secure online ticketing with anti-fraud verification","Provides event management tools for organisers from planning to execution","Connects audiences to events matching their interests and location","Delivers post-event analytics helping organisers improve future events"];
  p.features  = ["Comprehensive Nigeria events directory searchable by city, category, and date","Secure online ticketing with QR code entry verification","Event management tools — guest lists, scheduling, vendor management","Organiser analytics — ticket sales, attendance, demographics, and revenue","Audience discovery — personalized event recommendations by interest and location"];
  p.how       = ["Organiser creates event listing with all details, tickets, and pricing","Event is promoted across the platform to relevant audiences","Attendees discover, purchase tickets, and receive secure QR codes","Event day check-in uses QR verification eliminating ticket fraud","Organiser receives detailed analytics report after the event"];
  p.impact    = ["Nigerian events reaching their full potential audience for the first time","Event fraud eliminated through secure digital ticketing","Event organisers making better decisions with real attendance and revenue data","Nigerians discovering and experiencing more of the culture around them","Nigeria's events industry growing as a significant economic sector"];
  p.nigeria   = ["Nigeria's entertainment and events industry is among Africa's largest and most dynamic","Event fraud costs organisers and attendees billions annually — digital ticketing solves this","Cultural events are the heartbeat of Nigerian social life — they deserve better infrastructure","A thriving events industry employs thousands of Nigerians across every creative discipline","EventsHub supports Nigeria's soft power by making its vibrant culture more visible globally"];
  p.investors = ["Ticketing platforms have proven, high-margin global business models","Ticket sales commission on every transaction processed","Premium event listing and featured placement revenue","Corporate event management subscription tools","Advertising revenue from brands reaching event-going Nigerian audiences"];
  p.future    = ["Live event streaming platform for Nigerians unable to attend in person","AI event recommendation engine learning user preferences over time","Virtual event hosting for conferences and professional events","Africa-wide events discovery connecting Nigerian events to continental audiences","EventsHub Creator — artist and performer career management tools"];
  p.subPlatforms = [
    {name:"EventDiscover",   tagline:"Find exciting events near you",             features:["Location-based search","Category filters","Personalized recommendations","Calendar view","Save and share"]},
    {name:"TicketSecure",    tagline:"Buy and sell event tickets safely",         features:["Secure purchase","QR code generation","Fraud verification","Transfer tools","Refund policy management"]},
    {name:"EventManage",     tagline:"Run your event from planning to wrap-up",   features:["Event builder","Guest list management","Vendor coordination","Schedule tools","Day-of checklist"]},
    {name:"EventAnalytics",  tagline:"Data to improve every future event",        features:["Sales dashboard","Attendance tracking","Demographic reports","Revenue summary","Feedback collection"]},
    {name:"CorporateEvents", tagline:"Professional event management for business",features:["Conference tools","Exhibition management","Speaker portal","Delegate registration","Post-event reporting"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAMYAREA  (NaMyArea)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="namyarea";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NaMyArea is Nigeria's hyperlocal community platform — connecting neighbours, local businesses, and community leaders in the same area so that every Nigerian neighbourhood has a digital backbone for communication, safety, commerce, and collective action. From reporting a local problem to discovering a great nearby business, from organizing a community clean-up to finding a trusted local service provider, NaMyArea makes every Nigerian community more connected, more informed, and more powerful.";
  p.problem   = ["Nigerian neighbourhoods are physically dense but digitally disconnected.","Local problems — broken streetlights, security threats, environmental issues — have no reporting channel.","Neighbours cannot easily communicate, coordinate, or help each other.","Local businesses are invisible to the people living right next to them.","Community associations are poorly organized and rarely effectively engaged.","Hyperlocal safety information is not shared in any organized way."];
  p.who       = ["Residents in Nigerian urban, peri-urban, and rural communities","Local business owners wanting to reach nearby customers","Community association and estate management leaders","Local government officials communicating with constituents","Citizens reporting local problems and wanting community coordination tools"];
  p.does      = ["Connects neighbours and community members in one local digital space","Enables reporting of local problems to relevant authorities","Promotes local businesses to the community around them","Provides community safety alerts and local incident information","Supports community association management and communication"];
  p.features  = ["Neighbourhood community feed with local news, discussions, and alerts","Local problem reporting with routing to estate management or local government","Local business discovery map showing businesses within walking distance","Community safety alerts and incident sharing tools","Estate or community association management tools"];
  p.how       = ["Resident joins their neighbourhood community using location verification","Sees the local community feed with news, alerts, and neighbour discussions","Reports local problems or shares safety information with the community","Discovers and engages local businesses nearby","Community leaders communicate and organize through management tools"];
  p.impact    = ["Nigerian neighbourhoods better informed, connected, and organized","Local problems reported and resolved faster through coordinated community action","Local businesses thriving with hyperlocal discovery and customer engagement","Community safety improved through shared, organized safety information","A stronger sense of community and collective responsibility in Nigerian neighbourhoods"];
  p.nigeria   = ["Nigeria's rapid urbanization creates dense neighbourhoods that need digital community infrastructure","Neighbourhood safety in Nigeria depends on organized community vigilance — NaMyArea enables it","Local economic activity grows when community members can discover and support each other","Community self-organization reduces dependence on poorly-functioning local government","Connected communities are more resilient, safer, and more civically engaged"];
  p.investors = ["Hyperlocal platforms have proven global value with advertising and local commerce revenue","Local business advertising to highly targeted neighbourhood audiences","Premium estate management tools subscription revenue","Local government communication platform contract opportunities","Data insights for urban planning, real estate, and service delivery companies"];
  p.future    = ["Neighbourhood AI assistant answering local questions and routing reports","Smart estate management integration with IoT security and utility monitoring","NaMyArea marketplace — hyperlocal buying, selling, and services","Integration with LGA and local government digital communication systems","NaMyArea community safety network connecting all neighbourhoods nationally"];
  p.subPlatforms = [
    {name:"NeighbourFeed",   tagline:"Your community's local news and discussions",features:["Community posting","Local news sharing","Discussion threads","Event announcements","Neighbour introductions"]},
    {name:"LocalAlert",      tagline:"Safety and incident alerts for your area",  features:["Incident reporting","Safety broadcasts","Emergency alerts","Anonymous reports","Response coordination"]},
    {name:"AreaBusiness",    tagline:"Discover businesses within walking distance",features:["Hyperlocal business map","Category search","Reviews and ratings","Special offers","Contact tools"]},
    {name:"CommunityIssues", tagline:"Report and track local problems",           features:["Issue submission","Agency routing","Resolution tracking","Community upvote","Photo evidence upload"]},
    {name:"EstateManager",   tagline:"Digital tools for estate and community management",features:["Resident directory","Dues management","Meeting coordination","Notice board","Complaint management"]}
  ];
})();


// ============================================================
//  FULL CONTENT — INNOVATELAB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="innovatelab";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "InnovateLab is Nigeria's national innovation and startup platform — where great ideas meet the tools, mentorship, funding, and community needed to become real solutions. From university student with a concept to serial entrepreneur seeking series A, InnovateLab supports every stage of the Nigerian innovation journey. Nigeria's problems are enormous — and they are also Nigeria's greatest innovation opportunity. InnovateLab is where ideas become solutions.";
  p.problem   = ["Nigerian startups fail at high rates due to lack of support infrastructure and mentorship.","Innovators with great ideas have no organized pathway from concept to funded venture.","Investor capital is concentrated in Lagos with little reach to innovations across other states.","University research rarely connects to commercial innovation and entrepreneurship pathways.","Nigeria's innovation ecosystem is fragmented — accelerators, hubs, and investors are not connected.","Government procurement rarely considers local startups as viable technology suppliers."];
  p.who       = ["Early-stage startup founders at ideation and MVP stage","University students and researchers with commercializable ideas","Tech entrepreneurs seeking investment and growth support","Innovation hubs and accelerators managing startup cohorts","Investors seeking curated, vetted Nigerian startup opportunities"];
  p.does      = ["Provides structured startup development pathway from idea to investment readiness","Connects founders to mentors, investors, and support resources","Lists and promotes Nigerian startup opportunities to vetted investors","Enables innovation hub and accelerator programme management","Facilitates government procurement connections for Nigerian tech startups"];
  p.features  = ["Startup profile and idea submission with development stage tracking","Mentor and investor matching for early and growth-stage founders","Innovation hub and accelerator directory and programme management tools","Investor deal flow platform with vetted startup profiles","Government procurement opportunity board for local tech companies"];
  p.how       = ["Founder creates startup profile and maps development stage and needs","Receives matching to relevant mentors, programmes, and investors","Progresses through structured milestones with community support","Pitches to investors through the platform's secure investment tools","Connects to government procurement opportunities as venture matures"];
  p.impact    = ["Nigerian startup survival rate improving through better early support","Innovation capital reaching founders outside Lagos for the first time","University research commercialising and creating new Nigerian companies","Nigeria's innovation ecosystem organized and connected for the first time","Government technology procurement increasingly going to Nigerian innovators"];
  p.nigeria   = ["Nigeria's problems are innovation opportunities — agriculture, health, education, and infrastructure all need local tech solutions","Nigerian talent is building globally competitive products — InnovateLab ensures they do it in Nigeria","Lagos-only innovation concentration leaves enormous talent and ideas untapped across other states","Government procurement of local tech solutions is an immediate high-value startup opportunity","Nigeria building a self-sustaining innovation ecosystem is essential for long-term economic independence"];
  p.investors = ["Innovation platform connecting capital to curated, vetted deal flow — strong investor value","Platform subscription revenue from hubs, accelerators, and enterprise members","Government and international development organization partnership contracts","Event and summit revenue from Nigeria's innovation calendar","Data and intelligence services for investors studying the Nigerian startup ecosystem"];
  p.future    = ["InnovateLab National Innovation Fund — co-investment vehicle for Nigerian startups","University technology transfer office integration programme","Government innovation procurement fast-track for InnovateLab certified startups","Pan-African innovation platform connecting Nigeria to continent-wide deal flow","InnovateLab physical innovation centres in all six geopolitical zones"];
  p.subPlatforms = [
    {name:"IdeaLab",         tagline:"From idea to validated concept",            features:["Idea submission","Feedback tools","Validation framework","Pivot guidance","Cohort matching"]},
    {name:"StartupProfile",  tagline:"Your complete startup profile for investors",features:["Company description","Team profiles","Traction metrics","Pitch deck upload","Investment readiness score"]},
    {name:"InvestorConnect",  tagline:"Match Nigerian startups to investors",      features:["Investor directory","Deal flow management","Pitch scheduling","Due diligence tools","Term sheet guidance"]},
    {name:"HubManager",      tagline:"Tools for innovation hubs and accelerators",features:["Cohort management","Programme calendar","Mentor coordination","Demo day tools","Alumni tracking"]},
    {name:"GovProcure",      tagline:"Government contracts for Nigerian tech",    features:["Procurement listings","Tender alerts","Bid preparation tools","Compliance guidance","Award tracking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DIGITALNATION
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="digitalnation";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DigitalNation is Nigeria's national digital transformation platform — the unified digital network connecting every citizen, every government service, every community, and every institution in one coherent national digital ecosystem. It is the platform that makes the dream of a fully digital Nigeria real — where government services are online, citizens are digitally included, and every Nigerian participates in the digital economy regardless of location, age, or income.";
  p.problem   = ["Nigeria's digital divide is widening — millions of citizens are excluded from the digital economy.","Government services remain largely offline, slow, and inaccessible to most citizens.","No unified digital identity system exists connecting Nigerians across all platforms and services.","Digital literacy gaps prevent millions from benefiting from existing technology.","Rural communities have almost no digital infrastructure or access to digital public services.","Nigeria lacks a coherent national digital strategy with execution infrastructure."];
  p.who       = ["All Nigerian citizens seeking access to digital public services","Rural communities being brought into Nigeria's digital economy","Government agencies digitizing services for citizen access","Digital literacy programs and educators reaching offline Nigerians","International organizations supporting Nigeria's digital transformation agenda"];
  p.does      = ["Creates the infrastructure for unified digital access to government services","Delivers digital literacy programs reaching underserved communities","Supports a national digital identity framework connecting citizens to services","Provides the technical and organizational backbone for Nigeria's digital strategy","Ensures no Nigerian is left behind in the transition to a digital economy"];
  p.features  = ["Government service portal aggregating all digital public services","Digital literacy curriculum for citizens at every level","Digital inclusion programme management tools","National digital ID framework integration","Digital Nigeria progress tracker and dashboard"];
  p.how       = ["Citizen accesses digital government services through one unified portal","Digital literacy programme reaches offline citizens through community delivery","Government agencies onboard services and reach citizens digitally","National digital inclusion metrics tracked and published transparently","Digital economy participation expands as more citizens gain access and skills"];
  p.impact    = ["Millions of previously excluded Nigerians participating in the digital economy","Government services accessible online for the first time to all Nigerians","Digital literacy enabling citizens to access opportunities in the digital world","A measurably more inclusive Nigerian digital economy","Nigeria's digital transformation agenda with the infrastructure to execute it"];
  p.nigeria   = ["Digital inclusion is both a development priority and an economic opportunity for Nigeria","Government service digitization reduces corruption, delays, and inefficiency enormously","Every Nigerian who goes online adds to the national economic and social capital","Digital literacy empowers citizens to access better health, education, and economic outcomes","A digitally unified Nigeria is stronger, more efficient, and more globally competitive"];
  p.investors = ["Digital transformation infrastructure attracts World Bank, AfDB, and bilateral development funding","Government contract revenue for digital service delivery platform infrastructure","Digital literacy programme delivery contracts from government and NGOs","Private sector partnerships for digital inclusion technology deployment","Long-term infrastructure contract with strategic national importance"];
  p.future    = ["Universal Digital Nigeria ID integration across all Naijy platforms","Offline-first digital services for low-connectivity communities","AI-powered citizen services delivering government help without human intermediaries","Full government-to-citizen digital communication replacing paper processes","National broadband infrastructure coordination platform"];
  p.subPlatforms = [
    {name:"GovPortal",       tagline:"One door to all government services",       features:["Service directory","Online application tools","Status tracking","Document submission","Agency directory"]},
    {name:"DigiLearn",       tagline:"Digital literacy for every Nigerian",       features:["Beginner internet skills","Smartphone guides","Online safety training","Digital tools for work","Community facilitator tools"]},
    {name:"DigitalID",       tagline:"Unified digital identity framework",        features:["ID verification tools","Service linkage","Biometric integration guidance","Privacy controls","Identity recovery tools"]},
    {name:"InclusionTrack",  tagline:"Measuring Nigeria's digital inclusion progress",features:["Access metrics by state","Literacy programme tracking","Connectivity data","Gender gap analysis","Progress reporting"]},
    {name:"DigitalPolicy",   tagline:"Nigeria's digital transformation strategy",  features:["Policy documentation","Implementation tracker","Stakeholder consultation tools","International benchmark comparison","Progress dashboard"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NGOHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="ngohub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NGOHub is Nigeria's dedicated digital platform for non-governmental organizations, civil society groups, and social impact organizations — giving them the tools, visibility, network, and funding connections they need to maximize their impact across Nigeria. Nigeria has thousands of passionate NGOs doing vital work with inadequate resources and infrastructure. NGOHub changes that, making civil society more organized, more connected, and more effective.";
  p.problem   = ["Nigerian NGOs are fragmented, often duplicating work and missing collaboration opportunities.","Donor and grant funding is difficult to discover and apply for without the right connections.","NGO programme impact is poorly documented, reducing credibility and future funding.","Civil society organizations lack the digital tools for modern programme management.","Citizens cannot easily find or engage with NGOs working on issues they care about.","Government-civil society coordination is poor, limiting the effectiveness of both."];
  p.who       = ["NGO founders and executive directors managing social impact organizations","Programme officers seeking collaboration, grants, and management tools","International and local donors seeking credible NGOs to fund","Volunteers wanting to contribute to civil society in Nigeria","Government agencies seeking civil society implementation partners"];
  p.does      = ["Lists and verifies all Nigerian NGOs in a searchable, credible directory","Connects NGOs to grant and funding opportunities nationally and internationally","Provides programme management tools for effective NGO operations","Enables impact documentation making NGOs more credible to donors","Facilitates NGO-to-NGO collaboration reducing duplication and increasing scale"];
  p.features  = ["Verified Nigerian NGO directory with sector and state filters","Grant and funding opportunity board with application support tools","Programme management tools — planning, tracking, and reporting","Impact measurement and documentation framework","NGO collaboration matching connecting organizations with complementary mandates"];
  p.how       = ["NGO registers and creates a verified organizational profile","Browses and applies for relevant grant and funding opportunities","Manages programmes using digital planning, tracking, and reporting tools","Documents and publishes impact reports building organizational credibility","Discovers and connects with NGOs doing related work for collaboration"];
  p.impact    = ["Nigerian civil society better organized and more collectively effective","NGOs accessing more funding through improved visibility and application tools","Programme impact documented and published building sector credibility","Reduced duplication as NGOs collaborate rather than compete","Government and NGO coordination improved through organized civil society infrastructure"];
  p.nigeria   = ["Nigeria's 10,000+ NGOs need digital infrastructure to reach their full potential","Civil society is essential to Nigeria's democracy, accountability, and development","Donor confidence in Nigerian NGOs increases with credibility and impact documentation","NGO collaboration multiplies impact with the same resources","A strong civil society sector is non-negotiable for Nigeria's development trajectory"];
  p.investors = ["NGOHub attracts international foundation and development organization partnership funding","Donor platform transaction fees for grant facilitation","Premium NGO membership for advanced tools and visibility","Government implementing partner coordination contracts","Corporate CSR programme management tools subscription"];
  p.future    = ["National NGO impact database tracking Nigeria's civil society contribution to development","Government-NGO implementation partnership marketplace","International donor direct-to-Nigerian-NGO funding platform","Civil society coalition coordination tools for joint advocacy","Pan-African NGO network connecting civil society across the continent"];
  p.subPlatforms = [
    {name:"NGODirectory",    tagline:"Find verified Nigerian NGOs",               features:["Searchable directory","Sector filters","State filters","Verification badge","Contact tools"]},
    {name:"GrantFinder",     tagline:"Discover and apply for funding",            features:["Grant opportunity board","Application guidance","Deadline alerts","Eligibility checker","Application tracking"]},
    {name:"ProgrammeTrack",  tagline:"Manage NGO programmes digitally",           features:["Activity planner","Beneficiary tracking","Budget management","Milestone monitoring","Donor reporting"]},
    {name:"ImpactDoc",       tagline:"Document and publish your NGO's impact",    features:["Impact framework tools","Story documentation","Data visualization","Annual report builder","Public impact page"]},
    {name:"CivilConnect",    tagline:"NGO collaboration and networking",           features:["Partner matching","Collaboration proposals","Joint campaign tools","Sector forums","Coalition builder"]}
  ];
})();


// ============================================================
//  FULL CONTENT — SMARTCITIES
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="smartcities";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SmartCities is Nigeria's urban intelligence and planning platform — equipping city managers, urban planners, and citizens with the data, tools, and coordination infrastructure needed to make Nigeria's rapidly growing cities more liveable, efficient, and sustainable. From Lagos traffic to Abuja utilities, from Port Harcourt infrastructure to Kano urban growth, SmartCities gives Nigeria's urban centres the digital backbone of tomorrow's great cities.";
  p.problem   = ["Nigeria's cities are growing faster than their infrastructure — chaos is the result.","Urban managers make decisions with outdated, incomplete, and unreliable city data.","Traffic, utilities, waste management, and security are managed in silos.","Citizens have no platform to engage with city management or report urban problems.","Urban planning is reactive rather than proactive due to lack of real-time intelligence.","Nigerian cities are losing competitiveness because they lack smart infrastructure."];
  p.who       = ["State governors and city managers overseeing urban areas","Urban planners and infrastructure engineers designing city systems","Citizens living in Nigerian cities wanting better urban services","Investors in Nigerian urban infrastructure and real estate","International organizations supporting Nigeria's urban development agenda"];
  p.does      = ["Provides real-time urban data dashboards for city management decision-making","Enables citizen reporting of urban problems for faster response","Integrates city service monitoring — traffic, utilities, waste, and safety","Supports evidence-based urban planning with spatial and social data","Facilitates public-private partnerships for urban infrastructure investment"];
  p.features  = ["City management dashboard with real-time urban indicators","Citizen urban problem reporting with agency routing","Traffic and mobility monitoring tools for major cities","Utility and infrastructure status monitoring","Urban planning data and spatial analysis tools"];
  p.how       = ["City manager accesses real-time dashboard showing all urban indicators","Citizen reports problem — pothole, broken streetlight, flooding — through the platform","Urban services agency receives alert and tracks response to resolution","Planners use spatial data to design evidence-based urban interventions","Investors access urban opportunity and infrastructure data for decision-making"];
  p.impact    = ["Nigeria's cities managed more efficiently with real-time data","Urban problems reported and resolved faster through organized citizen input","Traffic, utilities, and infrastructure better coordinated reducing urban chaos","Evidence-based urban planning producing better outcomes for city residents","Nigeria's major cities becoming more competitive, liveable, and investable"];
  p.nigeria   = ["Lagos is Africa's largest city and desperately needs smart city infrastructure","Nigeria's urbanization is among the fastest globally — cities must manage this intelligently","Urban chaos is costing Nigeria's economy billions in lost productivity daily","Smart city investment is one of the highest-return urban development strategies available","A liveable Lagos, Abuja, and Port Harcourt attracts investment and retains talent"];
  p.investors = ["Smart city technology is among the highest-growth global urban investment sectors","Government city management platform contracts — high value, long-term","Urban data and analytics licensing to real estate, transport, and service companies","Smart infrastructure partnership with telecoms and utility companies","World Bank and AfDB urban development programme partnership funding"];
  p.future    = ["IoT sensor network connecting all city infrastructure to real-time monitoring","AI-powered traffic prediction and optimization for Nigerian cities","Smart waste management routing reducing collection cost and environmental impact","Digital twin city models for evidence-based planning simulation","Fully integrated smart city operating system for Nigeria's top 10 cities"];
  p.subPlatforms = [
    {name:"CityDash",        tagline:"Real-time city management intelligence",    features:["Urban KPI dashboard","Service status overview","Problem heat map","Performance trends","Executive briefing tools"]},
    {name:"UrbanReport",     tagline:"Citizens reporting city problems",          features:["Problem submission","Photo evidence","Location tagging","Agency routing","Resolution tracking"]},
    {name:"TrafficIQ",       tagline:"Traffic and mobility intelligence",         features:["Live traffic monitoring","Congestion alerts","Route optimization data","Public transport tracking","Mobility trend analysis"]},
    {name:"UtilityWatch",    tagline:"Monitor city utilities in real time",       features:["Power status by area","Water supply monitoring","Waste collection tracking","Outage alerts","Performance reports"]},
    {name:"UrbanPlan",       tagline:"Data-driven urban planning tools",          features:["Spatial data layers","Population density mapping","Infrastructure gap analysis","Growth projection tools","Planning scenario builder"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CIVSERVICE (CivService)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="civservice";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "CivService is Nigeria's platform for a modern, effective, and accountable civil service — giving civil servants the digital tools, training, and management infrastructure they need to serve Nigerians better. A great civil service is the backbone of a great nation. CivService is the platform that transforms Nigeria's civil service from a bureaucratic bottleneck into a lean, effective, and citizen-focused engine of national delivery.";
  p.problem   = ["Nigeria's civil service is widely regarded as inefficient, slow, and prone to corruption.","Civil servants lack modern digital tools and training for their roles.","Performance management is non-existent or non-functional in most MDAs.","Inter-agency coordination is poor, creating delays and duplication of effort.","Citizens have no way to assess or hold civil service performance accountable.","Procurement and budget processes in the civil service are opaque and fraud-prone."];
  p.who       = ["Civil servants across all federal and state MDAs","Civil service leadership and HR departments","Government ministers and permanent secretaries overseeing MDAs","Anti-corruption agencies monitoring civil service performance","Citizens and CSOs holding civil service accountable for delivery"];
  p.does      = ["Provides digital work management and productivity tools for civil servants","Delivers training and capacity development content for public servants","Enables transparent performance tracking of individuals and departments","Facilitates inter-agency coordination and information sharing","Publishes MDA performance data enabling public accountability"];
  p.features  = ["Civil servant digital work management and task tracking tools","Civil service training and CPD content library","MDA performance scorecard publicly updated quarterly","Inter-agency coordination and document sharing platform","Procurement transparency tracker for MDA spending"];
  p.how       = ["Civil servant uses digital tools for task management and work tracking","Completes CPD modules relevant to their role and career stage","MDA performance data is captured and published quarterly","Inter-agency coordination happens through secure digital channels","Procurement activities are logged transparently on the platform"];
  p.impact    = ["Civil service productivity increasing through digital tools and accountability","Civil servants better trained and more professionally capable","MDA performance visible and improving under public scrutiny","Inter-agency coordination faster and more effective","Procurement fraud harder to execute under transparent tracking"];
  p.nigeria   = ["Civil service reform is one of Nigeria's most critical governance challenges","A functional civil service delivers the public services Nigerians deserve","Civil service corruption is systemic but transparency tools reduce it significantly","Nigeria's development agenda requires an effective state implementation capacity","Investing in civil service quality is investing in every sector's performance"];
  p.investors = ["Government technology platform with long-term federal and state contracts","Training and CPD platform licensing to all federal and state civil services","Performance management tool subscription for MDAs","Anti-corruption agency partnership for procurement transparency integration","International development funding for public sector reform programmes"];
  p.future    = ["AI-powered civil service performance prediction and management tools","Biometric attendance and productivity monitoring integration","National civil service knowledge management system","Federal-state civil service digital coordination infrastructure","Civil service reform programme monitoring and evaluation platform"];
  p.subPlatforms = [
    {name:"CivWork",         tagline:"Digital productivity tools for civil servants",features:["Task management","Document collaboration","Approval workflows","Meeting management","Work diary"]},
    {name:"CivLearn",        tagline:"Training and development for public servants",features:["CPD course library","Role-specific training","Certificate tracking","Mandatory training alerts","Career development tools"]},
    {name:"MDAScore",        tagline:"Performance scorecards for government agencies",features:["KPI tracking","Quarterly reports","Peer comparison","Public transparency page","Trend analysis"]},
    {name:"AgencyLink",      tagline:"Secure inter-agency coordination",           features:["Document sharing","Joint project tools","Secure messaging","Policy circulation","Meeting scheduling"]},
    {name:"ProcureWatch",    tagline:"Civil service procurement transparency",     features:["Contract registry","Value disclosure","Vendor verification","Award tracking","Red flag flagging"]}
  ];
})();


// ============================================================
//  FULL CONTENT — PROPERTYHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="propertyhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "PropertyHub is Nigeria's professional real estate investment and development platform — connecting property developers, estate surveyors, investors, and institutional buyers in one organized, data-rich marketplace. Where HomeConnect serves the individual renter and buyer, PropertyHub is built for the serious property professional and investor. In a market where billions are at stake and trust is scarce, PropertyHub brings the data, verification, and connections that serious real estate demands.";
  p.problem   = ["Nigeria's real estate market lacks a professional-grade investment marketplace.","Property investment decisions are made without reliable market data or price intelligence.","Developers cannot efficiently reach institutional and high-net-worth investors.","Land title disputes and fraud cost investors billions annually.","Off-plan property fraud is rampant with no accountability mechanism.","Real estate professionals have no organized professional community or digital tools."];
  p.who       = ["Property developers and real estate companies","Real estate investors — individual high-net-worth and institutional","Estate surveyors, valuers, and property professionals","Mortgage banks and real estate finance institutions","Land regulators and title verification agencies"];
  p.does      = ["Connects developers to verified investors for property financing and sales","Provides real estate market data and price intelligence by area","Offers professional property listing with full documentation requirements","Enables title verification and due diligence support tools","Builds Nigeria's real estate professional community digitally"];
  p.features  = ["Professional property investment listing with full documentation","Real estate price intelligence dashboard by location and property type","Developer profiles with project history and completion track record","Title verification and due diligence support tools","Real estate professional directory and community platform"];
  p.how       = ["Developer lists project with full legal documentation and track record","Investors browse verified projects with due diligence data available","Investment interest is expressed and parties connect through the platform","Title and legal checks are supported through integrated tools","Transaction closes with full documentation trail on the platform"];
  p.impact    = ["More investment capital flowing into verified Nigerian property development","Property fraud reduced through documentation requirements and track record visibility","Developers funding projects faster through organized investor access","Real estate professionals with a trusted digital community and tools","Nigeria's property market more transparent and investable for domestic and foreign capital"];
  p.nigeria   = ["Nigeria's housing deficit of 17M units requires massive property investment","Real estate is Nigeria's most preferred investment class — it needs better infrastructure","Land fraud is one of Nigeria's biggest economic crimes — documentation systems reduce it","Mortgage market growth requires trusted, verified property data at scale","A transparent property market attracts foreign real estate investment at scale"];
  p.investors = ["Real estate platform serving a multi-trillion naira market","Listing fees, investment facilitation commissions, and professional subscriptions","Mortgage and property finance referral revenue","Title and due diligence service fees","Data licensing to banks, mortgage institutions, and real estate analytics firms"];
  p.future    = ["Blockchain-based land title registry pilot with state land registries","Real estate investment trust (REIT) coordination platform for Nigerian markets","Off-plan project escrow management ensuring buyer fund protection","International property investment platform attracting diaspora capital","AI property valuation engine providing instant, data-backed valuations"];
  p.subPlatforms = [
    {name:"DevList",         tagline:"Developer project listings for investors",  features:["Project showcase","Legal document upload","Track record display","Investor inquiry tools","Development progress updates"]},
    {name:"PropIntel",       tagline:"Real estate market data and pricing",       features:["Price per sqm by area","Transaction history","Rental yield data","Supply/demand signals","Investment return calculator"]},
    {name:"TitleCheck",      tagline:"Property due diligence support",            features:["Title search guidance","Encumbrance checker","Document verification tools","Legal expert connect","Red flag alerts"]},
    {name:"PropProfessional",tagline:"Nigeria's real estate professional network",features:["NIESV member directory","Valuer profiles","Estate agent listings","CPD content","Professional events calendar"]},
    {name:"PropFinance",     tagline:"Mortgage and property finance marketplace", features:["Mortgage comparison","Lender directory","Affordability calculator","Application support","Rate alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — URBANDATAGRID
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="urbandatagrid";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "UrbanDataGrid is Nigeria's urban data intelligence platform — the authoritative source for spatial, demographic, and infrastructure data on Nigerian cities. Built for planners, researchers, investors, and government agencies, UrbanDataGrid transforms raw urban data into actionable intelligence that drives better decisions about where to invest, what to build, and how to serve Nigeria's rapidly growing urban populations.";
  p.problem   = ["Urban planning decisions in Nigeria are made without reliable spatial and demographic data.","City data is fragmented across agencies and rarely updated or accessible.","Infrastructure investment decisions lack the data needed for optimal allocation.","Researchers studying Nigerian cities have no central, reliable data repository.","Private sector investors cannot assess urban markets without organized data.","Urban growth is outpacing planning capacity due to poor data infrastructure."];
  p.who       = ["Urban planners and government agencies managing city growth","Real estate developers assessing urban investment opportunities","Researchers and academics studying Nigerian urban development","International investors and development banks funding urban projects","Technology companies building location-based products for Nigerian markets"];
  p.does      = ["Aggregates urban data from across agencies into one accessible platform","Provides spatial mapping tools for Nigerian cities and communities","Delivers demographic, economic, and infrastructure data by urban zone","Supports evidence-based urban planning with rich analytical tools","Enables private and public sector data-driven urban investment decisions"];
  p.features  = ["National urban spatial data platform with interactive maps","Demographic data by LGA, ward, and community level","Infrastructure coverage data — roads, utilities, health, education","Urban growth projection and scenario planning tools","Data download and API access for developers and researchers"];
  p.how       = ["User selects city, area, or data category of interest","Platform displays rich spatial and statistical data for the area","Analysis tools allow comparison, projection, and scenario modelling","Data is downloaded or accessed via API for external use","Government agencies update data through secure contribution portals"];
  p.impact    = ["Better urban planning decisions saving billions in misallocated investment","Private sector investment guided to highest-opportunity urban locations","Research on Nigerian cities dramatically improved with reliable data access","Government urban services better targeted to highest-need communities","Nigeria's cities growing smarter because data infrastructure supports better decisions"];
  p.nigeria   = ["Nigeria's urbanization is among the fastest globally — data must keep pace","Poor urban data has cost Nigeria trillions in misplaced infrastructure investment","Every urban planning decision made with good data is a better decision for Nigerians","Private sector confidence in Nigerian urban markets grows with reliable data access","SDG 11 — sustainable cities — cannot be achieved without urban data infrastructure"];
  p.investors = ["Urban data platforms attract major development bank and technology investment","Data subscription services for government, real estate, and research sectors","API access fees for technology companies building on urban data","Government urban planning technology contract revenue","International development organization partnership for urban data programmes"];
  p.future    = ["Real-time urban data integration from IoT sensors and satellite imagery","AI-powered urban growth prediction modelling for all Nigerian cities","National address system development and standardization platform","Integration with NBS, NPC, and all federal spatial data agencies","Pan-African urban data platform connecting all major African cities"];
  p.subPlatforms = [
    {name:"CityMapper",      tagline:"Interactive spatial maps of Nigerian cities",features:["Zone-level mapping","Infrastructure layers","Demographic overlays","Satellite imagery","Custom map builder"]},
    {name:"DemoData",        tagline:"Population and demographic intelligence",   features:["Population by LGA","Age distribution","Income levels","Migration data","Growth projections"]},
    {name:"InfraData",       tagline:"Infrastructure coverage by area",          features:["Road network data","Utility coverage","School and health facility density","Internet connectivity","Infrastructure gap maps"]},
    {name:"UrbanAnalytics",  tagline:"Analysis tools for urban decision-makers", features:["Comparative analysis","Scenario modelling","Investment return mapping","Risk assessment","Report generation"]},
    {name:"DataAPI",         tagline:"Urban data access for developers",          features:["REST API access","Bulk data download","Dataset catalogue","Update alerts","Developer documentation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MOVECITY
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="movecity";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MoveCity is Nigeria's urban mobility platform — making movement through Nigerian cities smarter, faster, and less frustrating. From real-time traffic intelligence to public transport routing, from ride-sharing coordination to cycling and walking route mapping, MoveCity gives every Nigerian commuter the tools to navigate their city with confidence. Because time lost in traffic is time stolen from life — and MoveCity gives it back.";
  p.problem   = ["Lagos and Nigerian cities have some of the worst traffic congestion in the world.","Public transport information is nonexistent — commuters navigate by guesswork.","Traffic incident information is not shared in any organized real-time way.","Commuters waste hours daily due to avoidable route choices made without data.","Urban air quality is severely degraded by traffic — alternative mobility is not promoted.","Transport planning is done without real commuter data or movement pattern intelligence."];
  p.who       = ["Daily commuters in Lagos, Abuja, Port Harcourt, and other major cities","Transport authorities managing urban mobility systems","Ride-sharing and transport service operators","Urban planners designing transport infrastructure","Corporate employers managing staff commute and fleet logistics"];
  p.does      = ["Provides real-time traffic intelligence and route optimization for urban commuters","Maps public transport routes — BRT, danfo, keke, okada — with live status","Enables citizen-reported traffic incidents improving collective navigation","Supports alternative mobility — cycling and walking routes in appropriate areas","Delivers transport authority tools for evidence-based urban mobility planning"];
  p.features  = ["Real-time traffic map with congestion levels for major Nigerian cities","Public transport route finder with multiple option comparison","Citizen traffic incident reporting — accident, flooding, road closure","Alternative route suggestions based on real-time conditions","Transport authority analytics dashboard for mobility planning"];
  p.how       = ["Commuter checks real-time traffic map before or during their journey","Selects best route based on current conditions and time estimate","Reports incidents they observe contributing to the shared intelligence","Public transport users find routes, stops, and approximate wait times","Transport planners use analytics to identify bottlenecks and plan improvements"];
  p.impact    = ["Hours saved daily by millions of Nigerian commuters through smarter routing","Public transport more usable with organized route and timing information","Traffic incident response faster through organized citizen reporting","Transport planning more evidence-based reducing infrastructure investment waste","Urban air quality improving as more Nigerians choose smarter commute options"];
  p.nigeria   = ["Lagos traffic congestion costs Nigeria an estimated $1B+ annually in lost productivity","Urban mobility is a quality of life crisis for millions of Nigerians in major cities","Public transport investment needs demand data that MoveCity provides","Better mobility reduces stress, improves health, and raises productivity","Smart mobility infrastructure attracts urban investment and talent retention"];
  p.investors = ["Urban mobility platforms attract major transportation and mapping technology investment","Traffic data licensing to logistics companies, insurers, and city planners","Premium navigation subscription for frequent commuters","Transport authority platform contract revenue","Advertising revenue from businesses reaching commuters during their journeys"];
  p.future    = ["AI-powered predictive commute planning — know tomorrow's traffic today","Integration with BRT Lagos, Abuja Metro, and all formal public transport systems","Electric vehicle charging station mapping for Nigeria's EV transition","Carpooling coordination reducing single-occupancy vehicle traffic","National urban mobility observatory tracking all Nigerian cities simultaneously"];
  p.subPlatforms = [
    {name:"TrafficLive",     tagline:"Real-time traffic for Nigerian cities",     features:["Live congestion map","Journey time estimates","Incident markers","Route comparison","Historical patterns"]},
    {name:"TransitFind",     tagline:"Navigate public transport confidently",     features:["BRT route finder","Bus stop locator","Estimated wait times","Fare information","Multi-mode journey planner"]},
    {name:"RoadReport",      tagline:"Report and track traffic incidents",        features:["Accident reports","Flood alerts","Road closure notices","Pothole reporting","Clearance confirmation"]},
    {name:"CommuteAnalytics",tagline:"Mobility intelligence for city planners",   features:["Movement pattern data","Peak hour analysis","Bottleneck identification","Mode share data","Infrastructure priority scoring"]},
    {name:"GreenMove",       tagline:"Alternative mobility promotion",           features:["Cycling route maps","Walking paths","Air quality index","EV charging locator","Carpooling tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TRANSETHNIC
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="transethnic";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "TransEthnic is Nigeria's platform for cross-cultural family connection and inter-ethnic community building — celebrating the love stories, family bonds, and human connections that cross the ethnic divides that too often define Nigerian social life. From inter-ethnic couples to multi-cultural families, from cross-cultural friendships to shared community experiences, TransEthnic proves that what unites Nigerians is far more powerful than what divides them.";
  p.problem   = ["Inter-ethnic tensions in Nigeria are fuelled by ignorance, prejudice, and distance.","Inter-ethnic families face social pressure and lack community support platforms.","Nigerian social networks tend to reinforce ethnic silos rather than bridge them.","Youth grow up in ethnic echo chambers with little exposure to other cultures.","National unity is undermined when social life is organized entirely along ethnic lines.","The beauty and richness of Nigeria's diversity is not actively celebrated anywhere."];
  p.who       = ["Inter-ethnic couples and families navigating cross-cultural family life","Nigerians with friendships and connections across ethnic communities","Youth wanting to understand and engage with cultures beyond their own","Community and religious leaders building inter-ethnic bridges","Schools and organizations promoting Nigerian unity and inter-cultural understanding"];
  p.does      = ["Provides a community platform for inter-ethnic families and relationships","Facilitates cross-cultural learning and exchange between Nigerian communities","Celebrates inter-ethnic love stories and cross-cultural family journeys","Provides practical guidance for navigating inter-ethnic family life in Nigeria","Builds inter-ethnic friendship networks reducing prejudice through connection"];
  p.features  = ["Inter-ethnic family community with shared stories and advice tools","Cross-cultural learning content about all Nigerian ethnic groups","Inter-ethnic couple and family story showcase celebrating diversity","Practical guides for inter-ethnic relationship challenges — family, culture, children","Community events and dialogues connecting Nigerians across ethnic backgrounds"];
  p.how       = ["Member joins and shares their cross-cultural connection or background","Accesses community content, stories, and cultural learning resources","Participates in cross-cultural discussions and virtual community events","Finds practical guidance for inter-ethnic family challenges","Celebrates Nigerian diversity by sharing their own story and connecting with others"];
  p.impact    = ["Inter-ethnic families with a supportive, normalizing community platform","Young Nigerians more curious about and respectful of other cultures","National unity strengthened through lived cross-cultural connections","Ethnic prejudice reduced as human stories replace stereotypes","Nigeria's diversity celebrated as a strength rather than managed as a threat"];
  p.nigeria   = ["Nigeria's unity requires more than constitutional declarations — it requires lived cross-cultural connection","Inter-ethnic violence is reduced when people see each other as human beings with shared stories","A generation of cross-cultural Nigerians is Nigeria's most powerful unity asset","Nigeria's diversity is extraordinary — platforms celebrating it build national pride","Social cohesion is as important to national development as any economic programme"];
  p.investors = ["Cultural unity platforms attract international peace-building and development funding","Community premium membership and events revenue","Government inter-ethnic dialogue programme digital platform contracts","Educational content licensing for schools and national values programmes","Corporate diversity and inclusion programme partnership revenue"];
  p.future    = ["Annual TransEthnic National Unity Festival — online and physical","School inter-ethnic exchange programme coordination platform","Cross-cultural language learning tools — learn Hausa, Yoruba, Igbo, and more","Integration with conflict resolution agencies for community peace-building","Pan-African cross-cultural community platform connecting all African ethnicities"];
  p.subPlatforms = [
    {name:"OurStory",        tagline:"Share your inter-ethnic love story",        features:["Couple story submissions","Family photo sharing","Journey documentation","Community reactions","Featured story showcase"]},
    {name:"CultureLearn",    tagline:"Discover every Nigerian ethnic culture",    features:["Ethnic culture guides","Language phrases","Food and tradition content","Cultural do's and don'ts","Cultural calendar"]},
    {name:"FamilyGuide",     tagline:"Practical help for inter-ethnic families",  features:["Marriage tradition guides","Children's cultural identity tools","In-law navigation advice","Community Q&A","Expert guidance articles"]},
    {name:"UnityCircles",    tagline:"Cross-cultural friendship and dialogue",    features:["Inter-ethnic community groups","Virtual dialogue events","Friendship matching","Peace-building tools","Schools programme content"]},
    {name:"DiversityFest",   tagline:"Celebrate Nigeria's cultural richness",     features:["Cultural event listings","Festival guides","Food discovery","Music and arts showcase","Heritage tourism links"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NIGERIANCREED
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="nigeriancreed";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NigerianCreed is the platform for Nigerian national identity — the digital home of what it means to be Nigerian, built around shared values, shared history, shared achievements, and a shared vision for the country's future. In a nation often defined by its divisions, NigerianCreed insists on the greater story — the one where 220 million people share one incredible, complicated, powerful identity. One Nation. One Identity.";
  p.problem   = ["Nigerian national identity is weak — most Nigerians identify more with ethnicity or religion than nationhood.","Nigeria's history, achievements, and shared values are poorly taught and celebrated.","There is no platform channelling Nigerian national pride productively.","Young Nigerians increasingly disengage from national identity, especially amid hardship.","Divisive narratives dominate while unifying Nigerian stories go untold.","Nigeria lacks a digital platform celebrating and building its national identity."];
  p.who       = ["Nigerians who believe in and want to celebrate their country","Young Nigerians seeking positive national identity and pride","Schools building national values and civic identity in students","Government institutions responsible for national values and identity","Diaspora Nigerians maintaining pride in their heritage abroad"];
  p.does      = ["Celebrates Nigeria's achievements, heroes, and national identity","Documents Nigerian history in an accessible, engaging, digital format","Promotes shared Nigerian values across ethnic and religious differences","Builds civic pride through stories of Nigerian excellence worldwide","Creates a digital home for patriotic Nigerians to connect and celebrate"];
  p.features  = ["Nigeria achievements archive — science, arts, sports, politics, and culture","Nigerian heroes gallery celebrating historical and contemporary greatness","Shared values content building a positive national identity narrative","National pride challenges and campaigns engaging citizens","Nigerian history education content for schools and self-learners"];
  p.how       = ["User joins and explores Nigeria's story — achievements, heroes, and history","Contributes their own patriotic content, stories, and celebrations","Participates in national pride campaigns and challenges","Shares Nigerian achievements with the world through social tools","Schools use history and values content in civic education programmes"];
  p.impact    = ["Stronger Nigerian national identity built on shared pride and history","Young Nigerians with a positive, substantive national identity to embrace","Nigeria's extraordinary history and achievements visible and celebrated globally","National cohesion improved through shared identity narrative tools","Diaspora Nigerians confidently representing their country's greatness worldwide"];
  p.nigeria   = ["National identity weakness is a root cause of Nigeria's governance and social cohesion problems","Nigerians who are proud of their country work harder to make it better","Shared values across ethnic and religious lines are the foundation of lasting unity","Nigeria has an extraordinary story — it needs a platform to tell it","Building national identity is essential infrastructure for every other development goal"];
  p.investors = ["National identity and civic platforms attract government and international foundation funding","Content licensing to schools, media companies, and government programmes","Premium membership for diaspora community access and events","Corporate nation-building CSR programme partnerships","Tourism and cultural promotion partnership revenue"];
  p.future    = ["Annual Digital National Day celebration — Nigeria's biggest online patriotic event","AI-powered Nigeria history tutor for schools and self-learners","National heroes monument project — physical and digital commemoration","Nigeria achievements global tour — showcasing Nigerian excellence to the world","Integration with Federal Ministry of Education national values curriculum"];
  p.subPlatforms = [
    {name:"AchievementArk",  tagline:"Nigeria's hall of achievements",            features:["Achievement categories","Contributor submissions","Expert curation","Shareable cards","School resource packs"]},
    {name:"HeroesGallery",   tagline:"Celebrating Nigerian greatness",            features:["Historical heroes","Contemporary achievers","Nomination system","Biographical content","Inspiration stories"]},
    {name:"ValuesBuild",     tagline:"Shared Nigerian values content",            features:["Values framework","Story-based values content","School programme tools","Community discussion","Values pledge tools"]},
    {name:"HistoryNaija",    tagline:"Nigeria's history made accessible",         features:["Timeline explorer","Era-by-era content","Key events archive","Historical figures","Primary source library"]},
    {name:"PrideConnect",    tagline:"Patriotic Nigerians connected globally",    features:["Community feed","Pride challenges","Achievement sharing","Diaspora connect","National celebration tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CHURCHTESTIMONIES
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="churchtestimonies";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "ChurchTestimonies is Nigeria's Christian community platform — a safe, faith-filled digital space where believers share testimonies, access Christian content, connect with church communities, and build their faith together. In a nation where Christianity is a cornerstone of millions of lives, ChurchTestimonies honours that faith with a platform worthy of it — one that uplifts, connects, and strengthens the Body of Christ across Nigeria.";
  p.problem   = ["Nigeria's Christian community has no dedicated, trusted digital platform.","Powerful testimonies of faith are shared in church halls but rarely reach wider audiences.","Christian content online is dominated by foreign voices with little Nigerian context.","Church communities are poorly connected digitally between services and activities.","Young Christians are drifting from faith partly due to absence of engaging digital faith communities.","Prayer requests, support needs, and fellowship happen informally with no organized channel."];
  p.who       = ["Nigerian Christians across all denominations and church backgrounds","Church leaders and pastors seeking digital tools for their communities","Young Christians wanting an engaging, faith-based digital community","Prayer groups and Bible study communities seeking digital coordination tools","Christian organizations and ministries reaching a wider audience"];
  p.does      = ["Provides a platform for sharing and discovering powerful testimonies of faith","Connects church communities digitally for communication and fellowship","Delivers quality Nigerian Christian content — teaching, worship, devotional","Organizes prayer networks and intercession communities","Supports church and ministry digital management and communication tools"];
  p.features  = ["Testimony sharing and discovery platform with moderation for quality","Church community pages with announcements, events, and member connection","Nigerian Christian content library — sermons, devotionals, and worship","Prayer request and intercession network","Church management tools — events, communications, giving management"];
  p.how       = ["Believer creates profile and joins their church community page","Shares or discovers testimonies of faith and answered prayer","Accesses daily devotional and Christian teaching content","Posts prayer requests and joins intercession networks","Church leader uses management tools for communication and community coordination"];
  p.impact    = ["Millions of Nigerian Christians with a trusted, quality digital faith community","Faith strengthened through shared testimonies of God's work in Nigerian lives","Church communities better connected and more spiritually active between Sundays","Young Christians engaged through relevant, quality digital faith content","Prayer networks organized at national scale with real, documented intercession"];
  p.nigeria   = ["Nigeria has the largest Christian population in Africa — they deserve a world-class digital platform","Testimonies are a cornerstone of Nigerian Christian culture — a platform amplifies their power","Church community digital infrastructure supports pastoral care at scale","Young Nigerians finding faith community online reduces spiritual drift","A united, organized Christian community contributes to Nigeria's social stability and moral fabric"];
  p.investors = ["Nigeria's Christian market of 90M+ is deeply underserved digitally","Premium church management subscription services","Christian content production and licensing revenue","Church giving platform transaction fees","Corporate Christian business advertising in a trusted community context"];
  p.future    = ["National prayer chain — organized intercession for Nigeria at every moment","Live church service streaming and archive platform","Christian marketplace connecting faith-aligned businesses","Bible reading and memorization challenge platform","Pan-African Christian community connecting believers across the continent"];
  p.subPlatforms = [
    {name:"TestimonyShare",  tagline:"Share and discover faith testimonies",      features:["Testimony submission","Category browsing","Reaction tools","Featured testimonies","Audio testimony option"]},
    {name:"ChurchConnect",   tagline:"Your church community online",              features:["Church page tools","Member directory","Event calendar","Announcement board","Small group management"]},
    {name:"FaithContent",    tagline:"Quality Nigerian Christian content",        features:["Sermon library","Daily devotionals","Worship music","Bible study tools","Pastor blogs"]},
    {name:"PrayerNet",       tagline:"Organized prayer and intercession",         features:["Prayer request posting","Intercession matching","Prayer chain tools","National prayer calendar","Answered prayer archive"]},
    {name:"ChurchAdmin",     tagline:"Digital management for churches",           features:["Attendance tracking","Giving management","Event coordination","Member communication","Ministry teams tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FILMHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="filmhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FilmHub is Nigeria's platform for Nollywood and the Nigerian film industry — connecting filmmakers, producers, actors, crew, distributors, and audiences in one powerful digital ecosystem. Nollywood is the world's second-largest film industry by volume and one of Nigeria's most powerful cultural exports. FilmHub is the infrastructure Nollywood needs to reach the global audience it deserves — and to develop the world-class industry it is becoming.";
  p.problem   = ["Nollywood films reach only a fraction of their potential global audience.","Nigerian filmmakers have no central platform for industry networking and deals.","Distribution is dominated by a few gatekeepers limiting filmmaker revenue and reach.","Film financing in Nigeria is unorganized and inaccessible to most independent filmmakers.","Actors, crew, and talent have no organized casting and opportunity marketplace.","Nollywood's immense cultural value is not matched by professional digital infrastructure."];
  p.who       = ["Filmmakers, directors, and producers at all levels of Nollywood","Actors, crew members, and film talent seeking opportunities","Film distributors and streaming platforms acquiring Nigerian content","Film financiers and investors in the Nigerian film industry","Audiences discovering, watching, and celebrating Nigerian films"];
  p.does      = ["Connects filmmakers to finance, talent, distribution, and audiences","Provides a casting and talent marketplace for Nigerian film productions","Facilitates film financing connections between producers and investors","Supports film distribution to streaming platforms and markets","Builds the Nollywood professional community with organized digital infrastructure"];
  p.features  = ["Film project marketplace — from financing to distribution","Casting directory connecting producers to verified Nigerian acting talent","Film financing and co-production opportunity board","Industry networking tools for Nollywood professionals","Film audience platform for discovering and supporting Nigerian cinema"];
  p.how       = ["Filmmaker creates production profile and lists project for funding or talent","Casts actors and hires crew through the verified talent marketplace","Secures financing through connections to film investors on the platform","Completes production and lists film for distribution to platforms and markets","Audience discovers, watches, and supports Nigerian films through FilmHub"];
  p.impact    = ["Nollywood reaching global audiences at the scale it deserves","Independent filmmakers accessing financing and distribution without gatekeepers","Nigerian film talent discovered and employed through an organized marketplace","Nollywood's economic contribution to Nigeria growing significantly","Nigerian film culture exported globally through professional distribution infrastructure"];
  p.nigeria   = ["Nollywood is Nigeria's second-largest employer and a major cultural export","Global streaming demand for African content is growing rapidly — Nollywood must seize it","Film industry formalization creates taxable income and professional career pathways","Nollywood's soft power contribution to Nigeria's global image is enormous","Every great Nollywood film is an ambassador for Nigeria — FilmHub multiplies them"];
  p.investors = ["Film industry platforms serve a globally growing content market worth hundreds of billions","Production financing facilitation fees and distribution commission revenue","Casting platform subscription for production companies","Audience subscription platform for Nigerian film streaming","International streaming platform partnership for content acquisition"];
  p.future    = ["FilmHub streaming platform — the Netflix of Nollywood","Global Nollywood distribution to 50+ countries through platform partnerships","Film school and training programme for the next generation of Nollywood talent","Annual FilmHub Awards celebrating Nigerian cinema's best","Pan-African film platform connecting all African cinema in one marketplace"];
  p.subPlatforms = [
    {name:"ProjectBoard",    tagline:"Film projects seeking finance and talent",  features:["Project listings","Budget disclosure","Crew requirements","Investment opportunity","Co-production tools"]},
    {name:"CastingCall",     tagline:"Connect talent to productions",             features:["Actor profiles","Crew listings","Audition postings","Role matching","Booking management"]},
    {name:"FilmFinance",     tagline:"Funding for Nigerian film projects",        features:["Investor directory","Financing pitch tools","Grant opportunity alerts","Co-production matching","Completion bond guidance"]},
    {name:"DistributeNow",   tagline:"Get your film to global audiences",         features:["Streaming platform connections","Distribution deal tools","Rights management","Royalty tracking","International market guide"]},
    {name:"NollywoodFan",    tagline:"Discover and celebrate Nigerian cinema",    features:["Film discovery","Reviews and ratings","Behind-the-scenes content","Filmmaker interviews","Fan community"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ENTERTAINMENTX
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="entertainmentx";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EntertainmentX is Nigeria's premier entertainment industry platform — connecting musicians, comedians, content creators, entertainment executives, talent managers, and fans in one dynamic ecosystem. Nigeria's entertainment industry — Afrobeats, Afrocomedy, Nollywood, digital content — is a global force. EntertainmentX is the professional infrastructure that helps every part of that force work together, grow together, and reach the world together.";
  p.problem   = ["Nigeria's entertainment industry is enormously successful but poorly organized.","Talent is discovered haphazardly with no organized discovery and development pathway.","Entertainment contracts are frequently exploitative with artists having little legal protection.","Entertainment professionals have no organized networking and industry platform.","Revenue leakage from piracy and untracked distribution costs artists billions.","Emerging talent cannot access the right managers, labels, and opportunities without connections."];
  p.who       = ["Musicians, comedians, and content creators at every career stage","Talent managers, booking agents, and entertainment executives","Record labels and content production companies","Brands seeking entertainment partnership and endorsement deals","Fans discovering, supporting, and engaging with Nigerian entertainment talent"];
  p.does      = ["Connects emerging and established talent to industry opportunities","Provides transparent contract tools protecting artist rights","Builds the Nigerian entertainment professional community digitally","Facilitates brand-artist collaboration and endorsement deals","Enables fans to support and directly engage with Nigerian entertainment talent"];
  p.features  = ["Entertainment professional directory — artists, managers, labels, and agents","Talent showcase for emerging Nigerian entertainment talent","Brand-artist collaboration and endorsement marketplace","Contract guidance and fair deal resources for artists","Fan engagement and artist support tools"];
  p.how       = ["Artist or entertainment professional creates verified industry profile","Showcases work and talent through rich media profile tools","Connects to managers, labels, brands, and opportunities through the platform","Negotiates and manages deals using transparent contract tools","Fans discover, support, and directly engage with talent through the platform"];
  p.impact    = ["Nigerian entertainment talent with organized pathways to industry opportunity","Artists protected by better contract knowledge and transparent deal tools","Entertainment industry working as an organized, connected ecosystem","Brand investment in Nigerian entertainment talent increasing through organized marketplace","Nigeria's entertainment global dominance supported by world-class industry infrastructure"];
  p.nigeria   = ["Afrobeats is the world's fastest-growing music genre — it needs a professional home","Nigeria's entertainment industry generates billions but artists often earn very little of it","Contract exploitation of artists is an industry-wide problem that transparency tools address","Organized entertainment industry infrastructure creates more taxable income and formal jobs","Nigeria's entertainment soft power is its greatest global asset — EntertainmentX maximises it"];
  p.investors = ["Entertainment platform serving one of Africa's most dynamic and globally known industries","Endorsement deal facilitation commission revenue","Artist services subscription — profile, analytics, and distribution tools","Brand campaign management platform fees","Fan platform subscription and direct artist support revenue"];
  p.future    = ["EntertainmentX Records — talent development and distribution label","Global entertainment booking agency for Nigerian talent","Entertainment rights management and royalty tracking platform","Virtual concert and fan experience platform","Pan-African entertainment ecosystem connecting all African talent globally"];
  p.subPlatforms = [
    {name:"TalentShowcase",  tagline:"Discover and present entertainment talent", features:["Artist profiles","Music and video showcase","Comedy clips","Content creator gallery","Talent ranking"]},
    {name:"IndustryConnect", tagline:"Entertainment professional networking",     features:["Manager directory","Label profiles","Agent listings","Deal room tools","Industry events calendar"]},
    {name:"BrandMatch",      tagline:"Brand and artist collaboration marketplace",features:["Endorsement listings","Brand brief tools","Artist pitch tools","Deal negotiation","Campaign tracking"]},
    {name:"ArtistProtect",   tagline:"Fair deals and rights education for artists",features:["Contract explainers","Red flag checklist","Legal resource links","Fair rate guides","Artist support community"]},
    {name:"FanConnect",      tagline:"Fans directly supporting Nigerian artists", features:["Artist fan pages","Direct support tools","Exclusive content access","Fan community","Merchandise links"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CELBHUB (CelebHub)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="celebhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "CelebHub is Nigeria's platform for leveraging celebrity influence for genuine national impact — connecting Nigeria's most visible public figures to causes, initiatives, and campaigns that use their platforms for good. Nigerian celebrities — in music, film, sports, and social media — command the attention of tens of millions. CelebHub ensures that attention is directed not just toward entertainment but toward the national good. Fame, amplified for impact.";
  p.problem   = ["Celebrity influence in Nigeria is enormous but rarely channelled toward meaningful causes.","No organized platform exists connecting celebrities to social impact opportunities.","Brands struggle to identify celebrities whose values align with their campaigns.","Celebrities face requests for endorsements and advocacy with no organized management system.","Social impact campaigns without celebrity amplification reach only a fraction of their potential.","Celebrity philanthropy in Nigeria is uncoordinated and often low-impact."];
  p.who       = ["Nigerian celebrities across music, film, sports, comedy, and digital media","NGOs and social impact campaigns seeking celebrity amplification","Brands building purpose-driven marketing through authentic celebrity partnerships","Government agencies seeking high-reach communication for public campaigns","Fans who want their favourite celebrities contributing to Nigeria's development"];
  p.does      = ["Connects celebrities to verified, impactful social causes and campaigns","Facilitates authentic brand-celebrity partnerships based on values alignment","Provides celebrities with tools to manage and track their social impact activities","Amplifies social impact campaigns through organized celebrity network","Documents celebrity contributions to national development building accountability"];
  p.features  = ["Celebrity social impact profile with cause affiliations and track record","Cause and campaign marketplace for celebrities to choose aligned initiatives","Brand-celebrity partnership marketplace with values-matching tools","Impact tracking dashboard measuring reach and outcomes of celebrity campaigns","Fan engagement tools allowing fans to participate in celebrity-led campaigns"];
  p.how       = ["Celebrity creates verified profile with values, causes, and impact history","Browses causes and campaigns aligned with their authentic interests","Commits to a campaign and activates it through their channels","Platform tracks reach, engagement, and measured outcomes","Impact is documented publicly building celebrity social capital and accountability"];
  p.impact    = ["Social impact campaigns reaching millions through organized celebrity amplification","Celebrity influence redirected from pure entertainment toward national development","Brand investments in celebrity partnerships generating genuine social outcomes","Fans motivated to take action by celebrities they admire and trust","Nigeria's public discourse elevated by celebrity voices on national issues"];
  p.nigeria   = ["Nigeria's celebrities are among Africa's most followed people globally","Celebrity influence can change behaviours at scale — health, education, civic participation","Organized celebrity philanthropy could channel billions into impactful causes","Fame without responsibility is waste — CelebHub ensures fame creates value","A culture of celebrity accountability and civic contribution benefits all of Nigeria"];
  p.investors = ["Influencer and celebrity platform is a high-growth global marketing technology sector","Brand partnership facilitation commission revenue","Celebrity profile management premium subscription","NGO campaign amplification service fees","Data and analytics services for brands measuring celebrity campaign ROI"];
  p.future    = ["Annual CelebHub Impact Awards honouring celebrities making the biggest difference","Celebrity-led national education and health campaigns at government scale","CelebHub Foundation coordinating celebrity philanthropy for maximum collective impact","Youth mentorship programme connecting celebrities to young Nigerians","Pan-African celebrity impact network connecting Africa's most influential voices"];
  p.subPlatforms = [
    {name:"CelebProfile",    tagline:"Celebrity impact profiles and cause portfolios",features:["Verified celebrity page","Cause affiliations","Campaign history","Impact metrics","Fan engagement tools"]},
    {name:"CauseMatch",      tagline:"Connect celebrities to the right causes",   features:["Cause listings","Values matching","Campaign briefs","Commitment tools","Impact tracking"]},
    {name:"BrandPurpose",    tagline:"Purpose-driven brand-celebrity partnerships",features:["Brand campaign listings","Celebrity search","Values alignment filter","Deal tools","Campaign measurement"]},
    {name:"ImpactTrack",     tagline:"Measure and publish celebrity impact",      features:["Reach metrics","Engagement analytics","Outcome documentation","Public impact page","Annual impact report"]},
    {name:"FanCampaign",     tagline:"Fans joining celebrity-led initiatives",    features:["Campaign participation tools","Pledge systems","Community action coordination","Progress tracking","Celebration milestones"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HOTELS360
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="hotels360";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Hotels360 is Nigeria's comprehensive hotel discovery and booking platform — giving every Nigerian traveller and business visitor access to the full range of accommodation options across the country, from luxury city hotels to budget guesthouses, with verified reviews, transparent pricing, and simple booking. Nigeria has thousands of hospitality properties that deserve to be discovered. Hotels360 puts them all in one place.";
  p.problem   = ["Nigeria's hotel market is fragmented — no single platform covers all accommodation options.","Travellers book based on word-of-mouth with little reliable information about quality.","Hotels outside Lagos and Abuja have almost no digital visibility.","Booking confirmation processes are often informal, leading to fraud and confusion.","Hotel quality ratings in Nigeria are inconsistent and unreliable.","Business travellers have no efficient corporate accommodation management tools."];
  p.who       = ["Individual Nigerian travellers seeking accommodation for business or leisure","Business travellers and corporate travel managers","Hotel owners and hospitality property managers","Event organisers needing group accommodation","International visitors seeking verified Nigerian accommodation"];
  p.does      = ["Lists every verified Nigerian hotel with photos, pricing, and honest reviews","Enables simple, secure online booking with instant confirmation","Provides a corporate booking tool for business travel management","Verifies hotel quality through on-site checks and traveller reviews","Connects hotels across all states to a national traveller audience"];
  p.features  = ["Comprehensive Nigeria hotel directory with photos, amenities, and verified reviews","Instant online booking with secure payment and confirmation","Corporate travel management tools for business accommodation","Hotel quality verification with star rating transparency","Special deals and loyalty programme tools for frequent travellers"];
  p.how       = ["Traveller searches by destination, date, and budget on Hotels360","Browses verified property listings with photos, reviews, and pricing","Selects and books with secure payment and instant confirmation","Receives confirmation and check-in details digitally","Leaves review after stay contributing to the community knowledge base"];
  p.impact    = ["Every Nigerian hotel discoverable and bookable by every Nigerian traveller","Accommodation booking fraud reduced through secure digital confirmation","Hotels outside Lagos and Abuja gaining national visibility and bookings","Business travel managed efficiently reducing corporate accommodation costs","Nigeria's hospitality sector growing through better market infrastructure"];
  p.nigeria   = ["Nigeria's domestic travel is growing — it needs a trusted accommodation platform","Hotels outside the major cities are completely invisible digitally — Hotels360 fixes that","Business travel is a multi-billion naira annual market requiring professional tools","Quality transparency in accommodation drives quality improvement across the sector","Tourism growth requires reliable accommodation discovery as a prerequisite"];
  p.investors = ["Hotel booking platforms have proven global business models with strong margins","Commission revenue on every confirmed booking","Premium hotel listing packages for enhanced visibility","Corporate travel management subscription tools","Loyalty programme partnership revenue with hotel chains"];
  p.future    = ["Hotels360 quality certification — independent verification programme","Virtual room tours for all premium listed properties","Loyalty currency usable across all Hotels360 partner properties","Integration with TraveleX for complete Nigeria trip planning","International visibility for Nigerian hotels on global OTA platforms"];
  p.subPlatforms = [
    {name:"HotelFind",       tagline:"Find the perfect Nigerian accommodation",   features:["Search and filter","Map view","Photo galleries","Verified reviews","Price comparison"]},
    {name:"BookNow",         tagline:"Secure instant hotel booking",              features:["Real-time availability","Secure payment","Instant confirmation","Booking management","Cancellation tools"]},
    {name:"CorpStay",        tagline:"Corporate hotel booking management",        features:["Company account","Multi-booking tools","Expense reporting","Policy management","Invoice generation"]},
    {name:"HotelVerify",     tagline:"Verified quality ratings for Nigerian hotels",features:["On-site inspection programme","Star rating system","Amenities verification","Safety check","Quality improvement tools"]},
    {name:"HotelPartner",    tagline:"Tools for hotels joining Hotels360",        features:["Property listing builder","Booking management","Review response tools","Analytics dashboard","Promotions manager"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TOURISM360
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="tourism360";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Tourism360 is Nigeria's national tourism development and promotion platform — the comprehensive digital infrastructure that showcases Nigeria's extraordinary natural, cultural, and historical tourism assets to domestic and international visitors. Nigeria has Yankari Game Reserve, Obudu Mountain Resort, Cross River rainforest, Zuma Rock, ancient Benin Kingdom heritage, and hundreds of other world-class attractions. Tourism360 ensures the world knows, and the world comes.";
  p.problem   = ["Nigeria's tourism potential is among Africa's highest but actual visitor numbers are very low.","Tourism assets across most states have almost no digital visibility internationally.","There is no authoritative national platform organizing Nigeria's tourism offering.","Tour operators and guides have no organized digital marketplace.","Nigeria's destination image is dominated by negative narratives that tourism content can counter.","Domestic Nigerians do not know the incredible attractions their own country holds."];
  p.who       = ["International tourists considering Nigeria as a destination","Domestic Nigerians exploring their country's tourism assets","Tour operators and guides offering Nigerian tourism experiences","State tourism boards promoting their destinations nationally and globally","Hospitality and tourism businesses seeking more visitors"];
  p.does      = ["Showcases Nigeria's full range of tourism attractions with rich, authoritative content","Provides comprehensive travel guides for both domestic and international visitors","Connects visitors to verified tour operators, guides, and experiences","Supports state tourism boards with digital promotion tools","Counters negative Nigeria narratives with compelling, authentic tourism storytelling"];
  p.features  = ["Authoritative Nigeria tourism destination guide by state and attraction type","International visitor information including visas, safety, and practical tips","Verified tour operator and guide marketplace","State tourism board promotion tools and analytics","Tourism content creation tools for authentic Nigeria destination storytelling"];
  p.how       = ["Visitor searches for Nigeria destination, experience, or attraction","Accesses rich, authoritative content — photos, videos, guides, and practical tips","Connects to verified tour operators and books experiences","State tourism board publishes and promotes destination content","Visitor shares authentic experience content contributing to Nigeria's positive image"];
  p.impact    = ["Nigeria's tourism receiving significantly more domestic and international visitors","Tourism revenue growing across all states — especially those with hidden gems","Nigeria's international image improved through authentic, compelling tourism storytelling","Tour operators and guides growing their businesses through organized digital discovery","A sustainable tourism economy contributing billions to Nigeria's non-oil GDP"];
  p.nigeria   = ["Tourism is one of Nigeria's biggest untapped economic opportunities","Every naira earned from tourism is a naira earned without extracting or depleting resources","Domestic tourism builds national unity as Nigerians discover their own country","International tourism counters the negative Nigeria narrative better than any PR campaign","State tourism development creates jobs and economic activity in every region of Nigeria"];
  p.investors = ["Tourism platforms attract significant destination marketing and hospitality investment","Tour experience booking commission revenue","State tourism board digital promotion service contracts","Tourism business premium listing revenue","International tourism marketing partnership with NTDC and state boards"];
  p.future    = ["Virtual reality Nigeria destination previews for international visitors","Nigeria tourism investment map for hospitality infrastructure development","Integrated Nigeria tourism passport rewarding domestic traveller exploration","International media and travel influencer programme for destination promotion","Tourism recovery and resilience programme management platform"];
  p.subPlatforms = [
    {name:"DestinationNG",   tagline:"Authoritative guide to Nigeria's attractions",features:["State-by-state guides","Attraction profiles","Photo and video content","Practical travel information","Itinerary suggestions"]},
    {name:"TourOperator",    tagline:"Verified tour operators and guides",         features:["Operator profiles","Experience listings","Customer reviews","Booking tools","Licence verification"]},
    {name:"VisitNaija",      tagline:"International visitor information hub",     features:["Visa guidance","Safety information","Transport guides","Cultural tips","Emergency contacts"]},
    {name:"StateTourism",    tagline:"Tools for state tourism boards",            features:["Destination promotion tools","Content management","Visitor analytics","Campaign builder","Partnership coordination"]},
    {name:"TourismStory",    tagline:"Authentic Nigeria tourism storytelling",     features:["Content creation tools","Visitor story submissions","Media gallery","Ambassador programme","Social sharing tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — STEELHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="steelhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "SteelHub is Nigeria's engineering and manufacturing knowledge platform — making engineering, materials science, and manufacturing accessible, exciting, and career-defining for a new generation of Nigerian engineers, technicians, and industrialists. From steel processing to fabrication, from welding to construction engineering, SteelHub connects Nigeria's engineering professionals and students with the knowledge, community, and opportunities that build an industrial nation.";
  p.problem   = ["Nigeria's manufacturing and engineering sector is severely underdeveloped relative to the country's size.","Engineering knowledge resources are sparse and rarely Nigeria-specific.","Engineering professionals have no organized digital community or career platform.","Manufacturing companies cannot easily find qualified Nigerian engineering talent.","Young Nigerians are not choosing engineering careers in sufficient numbers.","Industrial knowledge transfer from experienced engineers to the next generation is poor."];
  p.who       = ["Professional engineers, technicians, and manufacturing workers","Engineering students and recent graduates entering the job market","Manufacturing companies seeking verified Nigerian engineering talent","Engineering training institutions and polytechnics","Investors in Nigeria's industrial and manufacturing sector"];
  p.does      = ["Provides Nigerian-context engineering knowledge and learning resources","Connects engineering professionals in an organized industry community","Facilitates engineering talent discovery and recruitment for manufacturers","Delivers career development tools for Nigeria's engineering professionals","Makes engineering exciting and accessible to attract more Nigerian youth to the field"];
  p.features  = ["Engineering knowledge library with Nigeria-specific industrial content","Engineering professional directory and career marketplace","Manufacturing company talent search and recruitment tools","Engineering learning pathway from student to professional","Industry event and CPD calendar for Nigerian engineers"];
  p.how       = ["Engineering student or professional creates a verified technical profile","Accesses knowledge library and learning content relevant to their discipline","Connects with other professionals and discovers career opportunities","Manufacturer searches and recruits from the verified talent directory","Young people discover engineering careers through engaging, accessible content"];
  p.impact    = ["More Nigerians choosing and succeeding in engineering careers","Manufacturing companies accessing better-qualified Nigerian engineering talent","Engineering knowledge shared across generations reducing loss of expertise","Nigeria's industrial sector more competitive through better-equipped professionals","A growing Nigerian engineering community driving national industrialization"];
  p.nigeria   = ["Nigeria cannot industrialize without a strong engineering workforce","Every engineer Nigeria produces reduces dependence on expensive expatriate expertise","Manufacturing job creation is the highest-multiplier employment pathway available","Engineering capacity is essential for Nigeria's infrastructure development goals","Building an industrial nation requires building an engineering culture first"];
  p.investors = ["Engineering and industrial workforce platform attracts manufacturing sector investment","Professional subscription revenue from engineering firms and practitioners","Recruitment services for manufacturing companies","Training content licensing to polytechnics and engineering institutions","Government industrial development programme platform contracts"];
  p.future    = ["Virtual engineering laboratory for remote practical learning","National engineering certification and competency framework platform","Nigeria manufacturing supplier directory connecting local engineers to contracts","Engineering innovation and patents platform","Integration with Council for the Regulation of Engineering in Nigeria (COREN)"];
  p.subPlatforms = [
    {name:"EngineerLearn",   tagline:"Engineering knowledge for Nigerian professionals",features:["Technical content library","Discipline-specific modules","Nigeria industrial case studies","Certification prep","Video tutorials"]},
    {name:"EngineerConnect", tagline:"Nigeria's engineering professional network", features:["Professional profiles","Discipline communities","Mentorship matching","Project collaboration","Events calendar"]},
    {name:"ManufactureHire", tagline:"Engineering talent for Nigerian manufacturers",features:["Talent database","Skills filtering","Job postings","Application management","Competency verification"]},
    {name:"IndustrialBiz",   tagline:"Manufacturing and engineering business directory",features:["Company profiles","Supplier directory","Service listings","B2B connect","Tender opportunities"]},
    {name:"SteelLearn",      tagline:"Making engineering exciting for young Nigerians",features:["Career exploration","Student profiles","Engineering stories","University guidance","Scholarship alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — TRANSPORT360
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="transport360";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Transport360 is Nigeria's national transportation intelligence and coordination platform — connecting passengers, freight operators, transport companies, and regulators in one organized digital ecosystem. From interstate bus booking to cargo tracking, from vehicle licensing to transport safety reporting, Transport360 brings Nigeria's chaotic, fragmented transportation sector into the digital age. Moving Nigeria forward requires moving people and goods efficiently — Transport360 makes it happen.";
  p.problem   = ["Nigeria's transportation sector is fragmented, unsafe, and almost entirely undigitized.","Passengers have no reliable platform for intercity transport booking or information.","Road safety is among the worst in the world with poor incident reporting infrastructure.","Cargo and freight tracking is virtually nonexistent causing massive logistics losses.","Transport licensing and regulation compliance is opaque and enforcement is poor.","Transport companies cannot efficiently manage fleets, routes, and operations digitally."];
  p.who       = ["Passengers booking intercity and interstate travel","Freight operators and cargo owners tracking shipments","Transport companies managing fleets and operations","FRSC and transport regulatory agencies managing safety and compliance","Logistics companies managing Nigeria's supply chain movement"];
  p.does      = ["Enables intercity transport booking across all modes and operators","Provides cargo and freight tracking across Nigerian routes","Enables transport safety incident reporting connecting to FRSC","Supports transport company fleet and operations management","Delivers transport sector data for regulation and policy planning"];
  p.features  = ["Intercity bus and transport booking platform","Cargo tracking and freight management tools","Road safety incident reporting with FRSC integration","Fleet management tools for transport companies","Transport sector analytics dashboard for regulators and planners"];
  p.how       = ["Passenger searches for route, selects operator, and books seat digitally","Cargo owner tracks shipment in real time from dispatch to delivery","Road user reports safety incident through the platform with evidence","Transport company manages fleet, routes, and crew through digital tools","Regulators access transport data for enforcement and policy planning"];
  p.impact    = ["Intercity travel more predictable and safe through organized booking","Cargo losses reduced through real-time tracking and digital documentation","Road safety incidents reported faster improving emergency response","Transport companies more efficient with digital fleet management","Transport sector data enabling evidence-based regulation and safety policy"];
  p.nigeria   = ["Transport is the backbone of Nigeria's economy — it needs digital infrastructure","Road fatalities in Nigeria are among Africa's highest — reporting and tracking saves lives","Cargo tracking reduces theft and loss that cost importers billions annually","Intercity transport digitization improves predictability for millions of Nigerians","A modern transport sector is essential for Nigeria's economic competitiveness"];
  p.investors = ["Transport platform serving a multi-billion naira annual passenger and freight market","Booking commission revenue on intercity passenger travel","Freight tracking subscription services for logistics companies","Fleet management tool subscription for transport operators","Government transport sector data platform contracts"];
  p.future    = ["Real-time national transport monitoring integrated with FRSC and NPA","AI route optimization for freight and cargo operations","Ride-sharing and carpooling integration for intercity travel","Electric vehicle fleet tracking and management tools","Integration with Nigeria's railway and aviation systems for multimodal booking"];
  p.subPlatforms = [
    {name:"BusBook",         tagline:"Book intercity transport easily",           features:["Route search","Operator comparison","Seat selection","Digital ticket","Booking confirmation"]},
    {name:"CargoTrack",      tagline:"Real-time freight and cargo tracking",      features:["Shipment tracking","Milestone alerts","Proof of delivery","Cargo documentation","Dispute tools"]},
    {name:"RoadSafe",        tagline:"Transport safety reporting and data",       features:["Accident reporting","FRSC routing","Blackspot mapping","Safety score by route","Incident history"]},
    {name:"FleetManager",    tagline:"Digital fleet management for transport cos",features:["Vehicle registry","Driver management","Route tracking","Maintenance scheduling","Fuel monitoring"]},
    {name:"TransportData",   tagline:"Transport sector intelligence for planners",features:["Passenger flow data","Route performance","Safety statistics","Operator compliance","Policy planning tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — INVESTUP
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="investup";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "InvestUp is Nigeria's capital-to-opportunity platform — connecting investors, local and foreign, with the verified Nigerian businesses, projects, and sectors offering the best investment returns. From SME equity to infrastructure bonds, from agriculture to tech, InvestUp curates investment opportunities across Nigeria's entire economy and gives every investor the data, due diligence support, and connection tools they need to invest with confidence. Where capital meets opportunity — InvestUp.";
  p.problem   = ["Foreign direct investment into Nigeria is far below its potential due to trust and information gaps.","Domestic investors cannot easily discover verified, vetted local investment opportunities.","SMEs that could absorb investment capital cannot reach investors effectively.","Investment due diligence in Nigeria is expensive, slow, and rarely standardized.","Sector-specific investment intelligence is not organized or accessible to most investors.","Nigerian investment opportunities are poorly marketed to diaspora and international investors."];
  p.who       = ["Domestic high-net-worth individuals seeking local investment opportunities","Foreign investors evaluating Nigerian sectors and projects","Diaspora Nigerians investing capital back home","SMEs and businesses seeking equity and growth investment","Sector-specific investment funds and development finance institutions"];
  p.does      = ["Lists verified, curated investment opportunities across all sectors","Provides investment intelligence — market data, sector analysis, and risk assessment","Connects investors to businesses and projects through a structured process","Supports due diligence with standardized documentation and third-party verification","Facilitates diaspora investment with transparency, trust, and clear returns tracking"];
  p.features  = ["Verified investment opportunity board across all sectors","Sector investment intelligence reports and market analysis","Investor-business matching with structured introduction process","Due diligence documentation and verification support tools","Investment tracking and portfolio management for active investors"];
  p.how       = ["Investor creates profile with sector preferences and investment criteria","Browses curated, verified opportunities matching their profile","Receives introduction to business or project team through the platform","Conducts due diligence with platform-supported documentation","Invests and tracks portfolio performance through the dashboard"];
  p.impact    = ["Billions in new investment flowing into Nigerian businesses and sectors","SMEs gaining the capital they need to grow, hire, and contribute to GDP","Due diligence quality improving through standardized processes","Diaspora investment in Nigeria growing through trust and organized process","Nigeria's investment climate improving as the investment experience improves"];
  p.nigeria   = ["Nigeria attracts far less investment than its economic potential justifies","Every dollar of investment creates Nigerian jobs, taxes, and economic multipliers","SME capital access is the single biggest barrier to Nigeria's private sector growth","Diaspora investment organized through InvestUp could transform local economies","A better investment experience is one of Nigeria's most powerful economic levers"];
  p.investors = ["Investment platform attracting commission on successful placements","Due diligence service fees from businesses seeking investment readiness","Premium investor membership for curated, priority access to opportunities","Sector intelligence report subscriptions","Partnership with development finance institutions and impact investors"];
  p.future    = ["InvestUp venture fund co-investing alongside platform investors","Government-to-investor concession and infrastructure opportunity platform","AI investment matching using investor profile and opportunity characteristics","Secondary market for Nigerian private investment stakes","Pan-African investment platform connecting capital to opportunities across the continent"];
  p.subPlatforms = [
    {name:"DealBoard",       tagline:"Verified Nigerian investment opportunities",features:["Curated listings","Sector filters","Return projections","Business profiles","Investment minimums"]},
    {name:"SectorIntel",     tagline:"Investment intelligence by sector",         features:["Sector analysis reports","Market size data","Growth projections","Risk assessment","Peer comparisons"]},
    {name:"DueDiligence",    tagline:"Standardized investment due diligence",     features:["Document checklist","Third-party verification","Financial health scoring","Legal compliance check","Risk flagging"]},
    {name:"PortfolioView",   tagline:"Track your Nigerian investment portfolio",  features:["Investment dashboard","Return tracking","Milestone alerts","Portfolio summary","Exit option tools"]},
    {name:"DiasporaInvest",  tagline:"Diaspora investment into Nigeria simplified",features:["Diaspora-specific opportunities","Currency tools","Remote due diligence","Trust verification","Transfer integration"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FLOWSTREAM  (Say Something)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="flowstream";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FlowStream is the place where Nigerian thoughts flow freely and visibly — a real-time stream of ideas, reactions, opinions, and observations from Nigerians across the country. No algorithms hiding posts. No filtered feeds. Just a live, honest river of what Nigerians are thinking right now. See the nation's mind in motion.";
  p.problem   = ["Nigerians have rich, diverse opinions but few platforms amplify unfiltered voices equally.","Algorithm-driven platforms suppress new users and amplify only established accounts.","Real-time national thought and mood is not visible or organized anywhere.","Genuine grassroots voices are drowned out by media personalities and trolls.","There is no simple, low-barrier platform for Nigerians to share a quick honest thought."];
  p.who       = ["Everyday Nigerians wanting to share quick thoughts and reactions","Researchers and journalists tracking national mood and trending opinion","Civic organizations monitoring what ordinary Nigerians care about","Young Nigerians who want to express themselves without social media pressure","Anyone who wants to know what Nigeria is thinking right now"];
  p.does      = ["Provides an unfiltered, chronological stream of Nigerian thoughts and opinions","Gives every Nigerian equal visibility regardless of follower count","Shows real-time national mood on events, news, and daily life","Enables anonymous contributions reducing social pressure on expression","Collects honest national sentiment data for research and planning"];
  p.features  = ["Chronological unfiltered thought stream — no algorithm","100-word maximum per entry — quick, clear, and honest","Anonymous posting option protecting free expression","Trending topic tracker showing what Nigeria is thinking about","Mood and sentiment tracker by state and topic"];
  p.how       = ["User types a quick thought and submits — it appears in the live stream immediately","Stream flows chronologically — newest thoughts at the top","User browses freely, responds to others, or just reads the national mood","Anonymous option chosen at time of posting — no identity required","Trending tools show which topics are generating the most thoughts nationally"];
  p.impact    = ["Every Nigerian voice visible and equally valued in the stream","National mood and concerns made visible to government, media, and civil society","Free expression promoted through anonymous option reducing fear of social judgment","Researchers and journalists with real-time access to grassroots Nigerian opinion","A living, honest picture of what Nigeria is thinking — updated by the second"];
  p.nigeria   = ["Nigeria needs spaces where ordinary voices are heard equally alongside celebrity and elite voices","Unfiltered national sentiment is valuable data for understanding the country's real pulse","Freedom of expression requires platforms that protect honest speech without fear","Digital democracy starts with every Nigerian having an equal voice — FlowStream delivers that","Understanding what Nigerians actually think is essential for responsive governance"];
  p.investors = ["Real-time sentiment data is commercially valuable to brands, government, and researchers","Data analytics and mood intelligence subscription services","Research institution data licensing","Advertising to highly engaged, authentic Nigerian audience","Brand sentiment monitoring tools for Nigerian market insights"];
  p.future    = ["State-by-state mood tracker showing regional opinion differences in real time","Integration with GomentWatch for citizen feedback on governance issues","Academic research partnership for Nigeria national sentiment studies","FlowStream digest — daily summary of what Nigeria was thinking","Verified civic voice programme for community leaders and civil society"];
  p.subPlatforms = [
    {name:"LiveStream",      tagline:"Nigeria's thoughts in real time",           features:["Chronological feed","New post alerts","Topic filter","Trending tracker","Bookmarking"]},
    {name:"AnonVoice",       tagline:"Express yourself without fear",             features:["Anonymous posting","Identity protection","Safe expression guides","Content moderation","Report abuse tools"]},
    {name:"MoodMap",         tagline:"See Nigeria's mood by state and topic",     features:["Sentiment visualization","Regional comparison","Topic mood tracker","Mood trend charts","Historical mood data"]},
    {name:"QuickThought",    tagline:"Post your thought in under a minute",       features:["100-word limit","Quick post interface","One-tap submit","No account required option","Draft saving"]},
    {name:"ResearchPulse",   tagline:"National sentiment data for researchers",   features:["Anonymized data access","Sentiment API","Custom query tools","Trend exports","Academic partnership portal"]}
  ];
})();


// ============================================================
//  FULL CONTENT — PROJECTX  (Say Something)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="projectx";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "ProjectX is where Nigerian ideas find their team. A lean, powerful platform for anyone with an idea — a business concept, a community project, a social initiative, a creative venture — to post it publicly, find collaborators, and turn it into something real. Because the gap between a great idea and a built thing is almost always people. ProjectX closes that gap.";
  p.problem   = ["Millions of Nigerians have great ideas they never act on because they lack the right team.","Talented people with time and skills cannot find ideas worth contributing to.","No simple platform exists for idea-to-team matching in Nigeria.","Community and social projects stall at the idea stage for lack of organized support.","The distance between having an idea and starting a project is too large without tools."];
  p.who       = ["Nigerians with business ideas, project concepts, or social initiatives","Skilled professionals wanting to contribute to interesting projects","Students looking for real projects to apply and build their skills","Community leaders organizing improvement initiatives","Entrepreneurs looking for co-founders and early team members"];
  p.does      = ["Provides a public marketplace for Nigerian ideas seeking collaborators","Matches ideas to people with the skills and interest to help build them","Tracks project progress from idea to launch publicly","Enables direct team formation and collaboration through the platform","Celebrates ideas and projects that take shape and get built"];
  p.features  = ["Idea posting board — simple, public, and discoverable","Skill-based collaborator matching for posted ideas","Project tracker from idea submission to launched reality","Direct team communication and coordination tools","Idea and project celebration when milestones are reached"];
  p.how       = ["Person posts idea with description, what they need, and what they offer","Platform matches to people with relevant skills and interest","Team forms and begins collaborating through project tools","Progress is tracked and shared publicly building momentum","Launch is celebrated and the next idea begins"];
  p.impact    = ["Hundreds of Nigerian ideas per month moving from concept to built reality","Skilled Nigerians contributing to projects they care about and finding purpose","Community projects organized and launched through collective team-building","A culture of action replacing a culture of talking about ideas","Nigeria's innovation and community self-help capacity growing visibly"];
  p.nigeria   = ["Nigeria is full of people with great ideas and full of people with great skills — they just need to find each other","Community self-help and entrepreneurship are deeply embedded in Nigerian culture","Organized idea-to-team matching is one of the most leveraged investments in Nigerian creativity","Projects started and completed build skills, confidence, and national capacity","Every built thing started as an idea — ProjectX turns more Nigerian ideas into things"];
  p.investors = ["Idea and project platform attracts startup ecosystem and innovation funding","Premium project management tools subscription","Corporate innovation challenge management platform fees","University and institution project programme hosting fees","Data and analytics on Nigerian innovation trends for research and policy"];
  p.future    = ["ProjectX Labs — physical co-working spaces where ProjectX teams build together","ProjectX Fund — micro-grants for the most promising community projects","Annual Nigeria Project Showcase celebrating the year's best built ideas","Integration with InnovateLab for startup-track projects","ProjectX schools — teaching Nigerian students to build from idea to project"];
  p.subPlatforms = [
    {name:"IdeaPost",        tagline:"Share your idea with the world",            features:["Idea submission form","Skill requirements listing","Category tagging","Public visibility","Edit and update tools"]},
    {name:"TeamMatch",       tagline:"Find the right people for your project",    features:["Skill-based matching","Interest matching","Collaborator profiles","Request to join","Team invitation tools"]},
    {name:"BuildTracker",    tagline:"Track project progress publicly",           features:["Milestone setting","Progress updates","Public project page","Completion celebration","Project history archive"]},
    {name:"CollabSpace",     tagline:"Where project teams work together",         features:["Team messaging","Task management","Document sharing","Meeting scheduling","Decision log"]},
    {name:"LaunchBoard",     tagline:"Celebrating ideas that became real",        features:["Launch announcements","Project showcase gallery","Community voting","Media coverage tools","Impact documentation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MEDIALNE (MediaLane) — Special Platform
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="medialane";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MediaLane is the platform for Nigeria's media professionals and organizations — their digital home for visibility, credibility, and public record. In an era where media trust is eroding globally, MediaLane builds it back in Nigeria through verified journalist profiles, transparent media outlet records, and a professional community where the standards of journalism are upheld, celebrated, and continuously improved. Expanding the Fourth Estate, one verified voice at a time.";
  p.problem   = ["Media credibility in Nigeria is under serious threat from misinformation and poor standards.","Journalists have no organized professional platform for verified identity and work records.","Media outlets have no central directory with transparency on ownership and editorial standards.","Press freedom violations are poorly documented and rarely escalated effectively.","Journalism talent is hard to discover and recruit without organized professional records.","Public figures and organisations have no reliable way to verify media credentials."];
  p.who       = ["Journalists and media professionals at all career levels","Media organizations — broadcast, print, digital, and online","Communications professionals seeking verified media contacts","Government and PR professionals engaging with verified journalists","Media and journalism training institutions"];
  p.does      = ["Creates verified digital profiles for every Nigerian journalist","Builds a transparent media outlet directory with editorial and ownership disclosure","Documents press freedom violations with evidence trails","Provides professional development tools for journalists","Facilitates journalism career development and media recruitment"];
  p.features  = ["Verified journalist profiles with published work portfolio","Media outlet directory with ownership and editorial transparency","Press freedom incident tracker and advocacy tools","Journalism CPD content and career development resources","Media recruitment and assignment marketplace"];
  p.how       = ["Journalist registers with NUJ verification or editorial credentials","Builds public profile with work portfolio and beat specializations","Media outlet creates verified organizational profile","Press freedom incidents are reported and documented on the platform","Communications teams find and verify journalists through the professional directory"];
  p.impact    = ["Nigeria's media more credible through verified professional identity","Press freedom better protected through organized documentation and advocacy","Journalism standards improving through professional community and CPD tools","Verified media contacts accessible to all government and civil society communicators","A stronger, more trusted, more professionally organized Nigerian press"];
  p.nigeria   = ["Nigeria's democracy requires a credible, independent, professional press","Media misinformation is a national governance and security threat — standards platforms counter it","Press freedom protection requires evidence and organization — MediaLane provides both","Nigeria's journalism talent pipeline needs visible, organized career infrastructure","A credible Nigerian press is a prerequisite for everything else working better"];
  p.investors = ["Media technology platform with government, NGO, and commercial funding potential","Journalism training and CPD content subscription revenue","Media outlet verification and certification service fees","Media recruitment platform commission revenue","International press freedom organization funding partnerships"];
  p.future    = ["AI-powered fake journalist and outlet detection system","National media credibility index published annually","International journalist exchange programme coordination platform","MediaLane journalism awards — annual recognition of excellence","Integration with NUJ, Nigerian Press Council, and NBC regulatory bodies"];
  p.subPlatforms = [
    {name:"JournalistID",    tagline:"Verified professional identity for journalists",features:["Credential verification","Work portfolio","Beat specialization","Contact tools","Career timeline"]},
    {name:"MediaDirectory",  tagline:"Transparent Nigerian media outlet listings",features:["Outlet profiles","Ownership disclosure","Editorial contacts","Coverage areas","Verification badge"]},
    {name:"PressDefend",     tagline:"Document and protect press freedom",        features:["Incident reporting","Evidence archive","Agency escalation","Journalist safety resources","Advocacy campaign tools"]},
    {name:"JournoCPD",       tagline:"Professional development for journalists",  features:["Journalism training content","Ethics guides","Digital journalism skills","Investigative techniques","CPD certificates"]},
    {name:"MediaRecruit",    tagline:"Journalism talent and assignment marketplace",features:["Job board","Freelance assignment listings","Talent search","Portfolio review tools","Contract management"]}
  ];
})();


// ============================================================
//  FULL CONTENT — PROFSLANE (ProfsLane) — Special Platform
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="profslane";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "ProfsLane is Nigeria's platform for academic and professional excellence — the digital home where Nigeria's professors, researchers, scholars, and expert professionals build their public records, share their knowledge, and connect their expertise to Nigeria's development challenges. From classrooms to global impact, ProfsLane ensures that Nigeria's knowledge elite has the platform they need to make their expertise count where it matters most.";
  p.problem   = ["Nigeria's academic and professional expertise is largely invisible beyond their institutions.","Research produced by Nigerian professors rarely reaches policymakers or the public.","Academic professionals have no organized platform for national visibility and knowledge sharing.","Government and industry rarely engage with available academic expertise systematically.","Nigeria's knowledge workers are globally competitive but locally underutilized.","Junior academics and emerging researchers have no organized mentorship and development platform."];
  p.who       = ["Professors, researchers, and academic staff at Nigerian universities","Expert professionals in law, medicine, engineering, and other disciplines","Government policy units seeking subject-matter expertise","Research funding bodies and grant-making institutions","PhD students and junior academics building their academic careers"];
  p.does      = ["Creates verified public profiles for Nigerian academic and professional experts","Connects expert knowledge to government, industry, and civil society challenges","Provides academic research sharing and public engagement tools","Builds an expert advisory network accessible to decision-makers","Supports junior researcher mentorship and academic career development"];
  p.features  = ["Verified expert profile with publications, specializations, and institutional affiliation","Research and opinion sharing tools for public engagement","Expert-to-policymaker connection for evidence-based governance","Peer collaboration and joint research coordination tools","Junior researcher mentorship and academic career development platform"];
  p.how       = ["Academic or professional creates verified expert profile","Publishes research, opinions, and expert commentary for public audience","Government or industry queries expert advisory network for guidance","Researchers connect for collaboration and joint publication","Junior academics find mentors and access career development resources"];
  p.impact    = ["Nigeria's expertise visible and accessible to those who need it most","Government policy better informed by available academic and professional expertise","Research produced in Nigerian universities reaching broader audiences","Academic collaboration increasing the quality and output of Nigerian research","Junior academics with career support infrastructure reducing brain drain"];
  p.nigeria   = ["Nigeria's universities produce extraordinary expertise that is systematically underused","Evidence-based policymaking requires connecting government to available academic knowledge","Brain drain is reduced when Nigerian academics have recognition and impact at home","Public academic engagement builds the scientific credibility Nigeria's institutions need","A nation that uses its experts well is a nation that develops faster"];
  p.investors = ["Academic expertise platform attracts research funding and university partnership investment","Expert advisory service subscription for government and corporate clients","Research publication and dissemination platform licensing","Academic recruitment and talent search subscription revenue","International research collaboration facilitation fees"];
  p.future    = ["National academic advisory council platform for evidence-based governance","ProfsLane Prize — annual recognition of Nigeria's highest-impact academic work","Open access Nigerian research repository for global discovery","Academic public engagement certification programme","Integration with TETFund, NUC, and all Nigerian research funding bodies"];
  p.subPlatforms = [
    {name:"ExpertProfile",   tagline:"Your verified academic and professional identity",features:["Publications list","Specialization tags","Institutional verification","Citation tracking","Media enquiry tools"]},
    {name:"KnowledgeShare",  tagline:"Share your expertise with Nigeria",         features:["Article publishing","Research summaries","Policy briefs","Video explainers","Public Q&A tools"]},
    {name:"PolicyExpert",    tagline:"Connecting academics to government decisions",features:["Policy brief submission","Expert advisory requests","Government consultation tools","Evidence tracking","Impact documentation"]},
    {name:"ResearchCollab",  tagline:"Academic collaboration and joint research",  features:["Research project listings","Co-author matching","Data sharing tools","Conference coordination","Grant collaboration"]},
    {name:"AcademiMentor",   tagline:"Junior researcher career development",      features:["Mentor matching","PhD guidance","Publication support","Career pathway tools","Fellowship opportunity alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — INFLUENCEX — Special Platform
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="influencex";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "InfluenceX is Nigeria's organized influencer and creator network — the platform where Nigerian digital creators, social media influencers, and content builders are verified, connected, and elevated. Nigeria's creator economy is exploding — InfluenceX ensures it does so with organization, professionalism, and fair value for every creator. Influence, united and amplified.";
  p.problem   = ["Nigeria's influencer economy is disorganized with no standards, verification, or fair value norms.","Brands cannot easily identify, verify, and engage authentic Nigerian influencers at scale.","Creators are frequently underpaid, ghosted, or exploited by brands without recourse.","Fake followers and engagement fraud undermine trust in Nigerian influencer marketing.","Micro-creators with genuine audiences have no platform for professional recognition.","There is no organized community for Nigerian creators to share knowledge and support."];
  p.who       = ["Nigerian digital creators and social media influencers across all platforms","Brands and agencies seeking verified Nigerian influencer partnerships","Content creators at every level from nano to mega influencer","Marketing managers building influencer campaigns for Nigerian audiences","Creators seeking professional development and community support"];
  p.does      = ["Verifies Nigerian influencers with audience authenticity and engagement analysis","Connects brands to the right creators based on audience, values, and category","Provides fair campaign management tools protecting creator rights and payments","Builds Nigeria's creator community with knowledge sharing and professional development","Measures and reports campaign outcomes transparently for brands and creators"];
  p.features  = ["Verified creator profiles with authenticated audience and engagement data","Brand-creator marketplace with category and audience matching","Campaign management tools — brief, contract, delivery, and payment","Creator community for knowledge sharing and professional development","Campaign analytics proving reach, engagement, and conversion to brands"];
  p.how       = ["Creator registers and undergoes audience verification process","Builds verified profile with content samples and audience demographics","Brand creates campaign brief and discovers matching creators","Campaign is contracted, created, published, and tracked through the platform","Both creator and brand see transparent performance data upon completion"];
  p.impact    = ["Nigerian creators earning fair, consistent value for their work","Brands making influencer investments with confidence in authenticity and ROI","Fake influence eliminated from the Nigerian digital marketing ecosystem","A professional, organized Nigerian creator community with shared standards","Nigeria's creator economy growing as the most organized on the continent"];
  p.nigeria   = ["Nigeria's creator economy is generating billions but creators often earn very little of it","Afrobeats, comedy, and lifestyle content from Nigeria is globally consumed — creators must benefit","Fake influence is costing Nigerian brands billions annually — verification fixes this","Organized creator economy creates sustainable income for millions of young Nigerians","Nigeria's digital soft power grows with every well-supported Nigerian creator reaching the world"];
  p.investors = ["Influencer marketing is a $20B+ global industry with rapid emerging market growth","Campaign facilitation commission revenue on every brand-creator deal","Premium creator subscription for verified badge and advanced tools","Brand platform subscription for campaign management and creator database access","Data and analytics services for brands and agencies measuring creator ROI"];
  p.future    = ["InfluenceX Academy — professional creator training and certification","Creator co-operative model for collective bargaining and standard-setting","Brand safety certification for Nigerian influencer campaigns","InfluenceX Awards — annual celebration of Nigeria's best digital creators","Pan-African creator network connecting creators across all African markets"];
  p.subPlatforms = [
    {name:"CreatorVerify",   tagline:"Verified authentic Nigerian creators",      features:["Audience authenticity check","Engagement rate analysis","Follower quality scoring","Verified badge","Fraud detection"]},
    {name:"BrandMatch",      tagline:"Connect brands to the right creators",      features:["Category search","Audience demographic filters","Values matching","Portfolio review","Direct outreach tools"]},
    {name:"CampaignDesk",    tagline:"Manage influencer campaigns end-to-end",    features:["Brief builder","Contract management","Content approval","Payment release","Performance dashboard"]},
    {name:"CreatorCommunity",tagline:"Nigerian creators supporting each other",   features:["Creator forums","Knowledge sharing","Rate benchmarking","Collaboration tools","Brand review system"]},
    {name:"CampaignMetrics", tagline:"Prove influencer campaign ROI",             features:["Reach tracking","Engagement analysis","Conversion attribution","Audience overlap","Campaign comparison"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LEADERTICS — Special Platform
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="leadertics";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LeaderTics is Nigeria's political visibility and leadership legacy platform — the digital public record for every Nigerian political leader, elected official, and aspirant. Where politicians once managed their narrative through controlled press releases and partisan media, LeaderTics creates a comprehensive, fact-based, publicly accessible record of what every Nigerian political leader has done, promised, and delivered. Politics, records, and public trust — in one transparent platform.";
  p.problem   = ["Nigerian politicians make promises with no accountability mechanism tracking delivery.","Citizens have no organized source for comprehensive political leader records.","Campaign promises evaporate without documentation that can hold politicians to account.","Political legacy is managed through spin rather than documented by facts.","Aspirants cannot build credible political profiles without a trusted platform.","Voter decision-making is poorly informed for lack of organized politician performance data."];
  p.who       = ["Elected officials and political leaders wanting to document their work publicly","Political aspirants building credible, verified political profiles","Voters seeking comprehensive information about candidates and incumbents","Political journalists and researchers studying Nigerian political performance","Civil society organizations tracking political promises and delivery"];
  p.does      = ["Creates comprehensive public profiles for every Nigerian political leader","Documents promises, policies, projects, and verified delivery records","Enables citizens to hold politicians accountable through public tracking","Provides voters with organized, fact-based political leader information","Builds political legacy through honest, documented public records of service"];
  p.features  = ["Political leader public profile with full background and record","Promise tracker — every public commitment tracked to delivery or failure","Policy and project delivery records with verified evidence","Citizen rating and feedback tools for incumbent leaders","Voter information guide for electoral candidates"];
  p.how       = ["Political leader or team creates and maintains a verified public profile","Public promises and commitments are logged as they are made","Platform tracks delivery status of each commitment with public updates","Citizens rate performance and contribute feedback to the public record","Voters access comprehensive profiles before elections to make informed choices"];
  p.impact    = ["Nigerian politicians held accountable through permanent, public commitment records","Voters making better decisions with organized, verified political information","Political leaders building genuine legacy through documented delivery rather than spin","A culture of political accountability developing from permanent digital records","Nigeria's democracy strengthened through an informed electorate and accountable leadership"];
  p.nigeria   = ["Political accountability is Nigeria's governance challenge — transparent records address it directly","Voters who know what politicians have done make better democratic choices","Promise-tracking reduces the political impunity that allows corruption and failure to go unpunished","A credible political record platform builds the trust democracy needs to function","Documented political legacies create incentives to actually deliver — Nigeria desperately needs those incentives"];
  p.investors = ["Political technology platform with government, civil society, and media investment potential","Premium political profile management services for parties and candidates","Voter information data services for electoral management bodies","Research and analytics licensing for political science and governance research","International democracy promotion organization funding and partnerships"];
  p.future    = ["National political promise dashboard — every politician's commitments in one view","AI-powered political record analysis identifying delivery patterns and anomalies","Voter guide mobile app for election day informed voting","Integration with INEC for candidate verification and electoral record","Pan-African political accountability platform connecting all African democracies"];
  p.subPlatforms = [
    {name:"LeaderRecord",    tagline:"Every politician's complete public record",  features:["Background profile","Election history","Position held","Party affiliations","Public statement archive"]},
    {name:"PromiseTrack",    tagline:"Track every political promise made",         features:["Promise logging","Delivery status","Evidence links","Timeline tracking","Broken promise alerts"]},
    {name:"DeliveryDoc",     tagline:"Document projects and policy delivery",      features:["Project registry","Verified completion evidence","Cost disclosure","Beneficiary data","Comparison to commitments"]},
    {name:"CitizenRate",     tagline:"Citizens rating their leaders",              features:["Performance rating","Category scores","Feedback submission","Rating trends","Community discussion"]},
    {name:"VoterGuide",      tagline:"Informed voting for every Nigerian",         features:["Candidate comparison","Incumbent record summary","Position filter","Local candidate search","Shareable voter cards"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAIJYPOLICY — Strategic Platform
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="naijypolicy";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NaijyPolicy is Nigeria's open governance and public decision platform — the digital infrastructure connecting government policy, public consultation, and citizen participation in Nigeria's most important national decisions. From proposed legislation to budget priorities, from regulatory changes to national strategy, NaijyPolicy ensures that governance in Nigeria is never again done in the dark. Governance in the open — for a Nigeria that belongs to everyone.";
  p.problem   = ["Nigerian governance decisions are made with almost no organized public participation.","Policy documents and proposed legislation are largely inaccessible to ordinary citizens.","Public consultations are performative — rarely reaching or reflecting ordinary Nigerians.","Policy impact on citizens is not tracked or measured after decisions are made.","Citizens feel disconnected from national decisions that affect them profoundly.","There is no platform where Nigeria's policy landscape is visible and understandable."];
  p.who       = ["Nigerian citizens wanting to participate in governance decisions","Government agencies conducting public consultations on policy and legislation","Civil society organizations tracking and engaging with Nigeria's policy landscape","Researchers studying public policy, governance, and citizen participation","International organizations monitoring Nigeria's governance quality and openness"];
  p.does      = ["Makes government policy proposals accessible in plain language to every Nigerian","Organizes genuine public consultations with recorded, published citizen input","Tracks legislation from proposal through passage to implementation","Measures policy impact on citizens with before-and-after data","Builds a comprehensive archive of Nigeria's governance decisions and their outcomes"];
  p.features  = ["Plain-language policy library covering all active and proposed policies","Public consultation platform with verified citizen participation and published results","Legislative tracker from bill introduction to assent and implementation","Policy impact tracking comparing stated objectives to measured outcomes","Governance decision archive for accountability and institutional memory"];
  p.how       = ["Policy is published in plain language when proposed or enacted","Citizens participate in consultations through the organized platform","Input is aggregated, published, and sent to relevant decision-makers","Policy implementation is tracked and citizens are updated on progress","Outcomes are measured and compared to original policy objectives publicly"];
  p.impact    = ["Nigerian citizens genuinely participating in governance decisions for the first time","Government consultations producing real citizen input that shapes policy","Policy implementation tracked and held accountable through public oversight","Nigeria's governance quality improving through systematic openness and participation","A culture of open governance replacing Nigeria's tradition of opaque decision-making"];
  p.nigeria   = ["Nigeria's governance failures are partly failures of citizen exclusion from decisions","Open governance reduces corruption by making decisions visible and participatory","Citizens who participate in governance decisions are more likely to support and comply with them","Nigeria's democracy must mature from elections-only participation to ongoing civic engagement","Evidence-based policy requires citizen feedback — NaijyPolicy organizes and delivers it"];
  p.investors = ["Open governance platform with World Bank, DFID, USAID, and MacArthur Foundation funding potential","Government consultation management service contracts","Research and policy analytics data licensing","Civil society platform subscription for advanced policy monitoring tools","International governance and democracy promotion funding partnerships"];
  p.future    = ["National e-referendum platform for citizen input on major decisions","AI policy plain-language translation available for all proposed legislation","Integration with National Assembly for real-time legislative tracking","State-level governance participation platform rollout across all 36 states","Pan-African open governance platform connecting all African citizens to their governments"];
  p.subPlatforms = [
    {name:"PolicyPlain",     tagline:"Government policy in plain Nigerian language",features:["Policy plain summaries","Active policy tracker","Regulatory updates","Sector-by-sector guide","Impact explainers"]},
    {name:"ConsultNaija",    tagline:"Real public consultations that count",       features:["Active consultation listings","Verified participation","Input aggregation","Published results","Outcome tracking"]},
    {name:"LegisTrack",      tagline:"Follow legislation from bill to law",        features:["Bill introduction alerts","Reading stage tracking","Vote records","Assent confirmation","Implementation monitoring"]},
    {name:"PolicyImpact",    tagline:"Measure what policies actually achieve",     features:["Baseline data capture","Implementation milestones","Citizen outcome surveys","Before/after comparison","Policy scorecard"]},
    {name:"GovernArchive",   tagline:"Nigeria's complete governance decision record",features:["Policy archive","Decision history","Amendment tracking","Stakeholder records","Research access tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LEGALSURE (fix/rewrite)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="legalsure";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LegalSure is Nigeria's most accessible legal education platform — designed to ensure every citizen, student, and small business owner knows their rights and can confidently navigate everyday legal situations. Where the law once felt distant and intimidating, LegalSure makes it personal, practical, and powerful. Because when you know the law, you cannot easily be exploited by it.";
  p.problem   = ["The majority of Nigerians do not understand the laws that govern their lives.","Legal information is hard to access outside of expensive lawyers.","People are regularly exploited because they don't know their rights.","No simple, structured legal education system exists for ordinary people.","Fear of legal processes prevents people from seeking help they deserve.","Low legal awareness creates vulnerability at every level of society."];
  p.who       = ["The general public — every Nigerian deserves legal knowledge","Students at secondary and tertiary levels","Small business owners and market traders","Workers needing to understand their employment rights","Community members and local leaders"];
  p.does      = ["Simplifies legal knowledge into language everyone understands","Provides structured legal education for everyday situations","Offers practical guidance for common legal challenges","Helps people avoid costly legal mistakes before they happen","Improves overall legal awareness and confidence across Nigeria"];
  p.features  = ["Simple legal articles written in plain Nigerian English","Guided step-by-step explanations of legal situations","Interactive learning with quizzes and real-life examples","Searchable legal topic database covering all common issues","Clean, easy-to-use interface optimized for mobile devices"];
  p.how       = ["User selects a legal topic relevant to their situation","System explains the law in simple, clear terms with examples","Real-life scenarios are provided to anchor understanding","User learns, understands, and can apply the knowledge","Optional connection to a legal expert for further guidance"];
  p.impact    = ["Better decision-making because people understand their legal options","Drastically reduced exploitation of the legally ignorant","Increased confidence in dealing with officials and institutions","Improved awareness that strengthens entire communities","Safer society through informed and empowered citizens"];
  p.nigeria   = ["Bridges the enormous legal knowledge gap between elites and ordinary Nigerians","Empowers every citizen to stand up for themselves legally","Supports the justice system by creating legally literate users","Reduces ignorance-based conflicts and exploitation nationwide","Builds an informed, confident, rights-aware Nigerian society"];
  p.investors = ["EdTech and LegalTech combination with dual-sector growth potential","High potential user base — virtually every Nigerian is a target user","Multiple content monetization pathways: ads, premium, subscription","Partnership opportunities with schools, NGOs, and law firms","Scalable platform with low content marginal cost"];
  p.future    = ["Mobile learning app with offline capability for rural users","AI legal tutor providing personalized learning journeys","Voice-based learning for low-literacy users","Local language support: Hausa, Yoruba, Igbo, Pidgin","Legal literacy certification recognized by employers and institutions"];
  p.subPlatforms = [
    {name:"Legal Basics",     tagline:"Core legal concepts simplified",      features:["Simple law guides","Practical examples","Frequently asked questions","Quick legal tips","Downloadable content"]},
    {name:"Workplace Rights", tagline:"Know your employment rights",         features:["Employee rights guide","Contract understanding","Dispute handling tools","Salary and benefits law","Wrongful termination help"]},
    {name:"Business Law",     tagline:"Legal help for entrepreneurs",        features:["Business registration guides","Compliance tips","Tax law basics","Contract guidance","Intellectual property basics"]},
    {name:"Family Law",       tagline:"Understand family legal matters",     features:["Marriage and divorce law","Custody guidance","Inheritance rights","Land and property disputes","Children's rights"]},
    {name:"Consumer Rights",  tagline:"Protect yourself as a buyer",         features:["Refund and returns guide","Fraud awareness","Complaint filing system","Consumer protection guides","Scam identification alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HAUSAWEALTH (fix key mismatch)
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="hausawealth"; });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HausaWealth is the dedicated digital prosperity platform for Nigeria's Hausa-Fulani communities — connecting farmers, traders, artisans, and entrepreneurs across the north to markets, finance, skills, and opportunity. Built in the languages and context of the north, HausaWealth ensures that northern Nigeria's enormous economic potential is unlocked for the people who live and work there.";
  p.problem   = ["Northern Nigeria has the highest poverty rates despite vast agricultural and mineral wealth.","Hausa-speaking entrepreneurs lack digital tools built for their language and context.","Access to formal finance is extremely limited across northern states.","Northern farmers sell at low prices with no market connectivity.","Youth unemployment is critically high across the north with few digital pathways.","Trade networks exist but are entirely offline and limited in reach."];
  p.who       = ["Hausa and Fulani farmers, traders, and artisans","Northern entrepreneurs building businesses in any sector","Youth seeking employment, skills, and opportunity in northern Nigeria","Women's cooperatives and savings groups in northern communities","Investors seeking to engage northern Nigeria's emerging market"];
  p.does      = ["Connects northern businesses to national and international markets","Provides financial tools and microfinance access tailored for the north","Delivers business training and skills content in Hausa","Supports agricultural trade connecting northern farmers to buyers","Builds a digital economic community for northern Nigerian prosperity"];
  p.features  = ["Hausa-language business platform with trade and market tools","Northern agricultural marketplace for crops and livestock","Microfinance and savings cooperative management tools","Business skills content in Hausa and Pidgin","Northern entrepreneur directory and networking tools"];
  p.how       = ["User registers in Hausa and builds a business or farmer profile","Lists products, services, or skills for buyers to discover","Connects to buyers, partners, and financial services through the platform","Accesses training content and mentorship in their own language","Grows business with data, connections, and financial tools"];
  p.impact    = ["Northern entrepreneurs digitally connected to national and global markets","Reduced poverty through better market access and financial inclusion","Northern agricultural produce earning fair prices for the first time","A thriving northern digital economy lifting millions out of poverty","Hausa language and culture celebrated as a platform for prosperity"];
  p.nigeria   = ["Northern Nigeria's development gap is a national security and economic crisis","Agricultural wealth in the north is being lost to poor markets and infrastructure","Youth unemployment in the north fuels insecurity — economic opportunity is the solution","Every zone of Nigeria must participate in the digital economy for the nation to grow","Northern integration into Nigeria's digital economy is essential for unity"];
  p.investors = ["Northern Nigeria is an underserved market of 80M+ people — enormous opportunity","Agricultural and trade transaction fees generating recurring revenue","Microfinance facilitation fees from lender partners","Government northern development programme platform contracts","International development organization funding for northern Nigeria investment"];
  p.future    = ["Full Hausa-language AI business assistant","Northern Nigeria commodity exchange and price discovery platform","Cattle and livestock digital marketplace","Integration with NEMA and federal northern development agencies","Cross-border trade tools connecting northern Nigeria to Niger, Chad, and Cameroon"];
  p.subPlatforms = [
    {name:"NorthMarket",   tagline:"Buy and sell across northern Nigeria",   features:["Product listings","Crop marketplace","Livestock trading","Price discovery","Logistics coordination"]},
    {name:"HausaLearn",    tagline:"Business skills content in Hausa",       features:["Hausa-language courses","Video lessons","Business basics","Trade skills","Financial literacy"]},
    {name:"NorthFinance",  tagline:"Microfinance and savings for the north", features:["Cooperative management","Loan applications","Savings groups","Islamic finance options","Grant alerts"]},
    {name:"NorthConnect",  tagline:"Networking for northern entrepreneurs",  features:["Business directory","Community forums","Event listings","Mentorship matching","Trade associations"]},
    {name:"NorthFarm",     tagline:"Digital tools for northern farmers",     features:["Crop listings","Buyer matching","Weather alerts","Agronomic advice","Input marketplace"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NIGERBENUWEALTH / NIGERBENUEWEALTH
// ============================================================
(function() {
  var p = platforms.find(function(x){
    return x.key==="nigerbenuwealth" || x.key==="nigerbenuewealth" ||
           (x.name && x.name.toLowerCase().replace(/\s+/g,"").includes("nigerbenue"));
  });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NigerBenueWealth is the dedicated digital prosperity platform for Nigeria's Middle Belt — uniting the diverse communities of Benue, Kogi, Kwara, Nasarawa, Niger, Plateau, and the FCT in a shared digital economic mission. The Middle Belt is Nigeria's breadbasket, cultural crossroads, and strategic heartland. NigerBenueWealth ensures its farmers, traders, artisans, and entrepreneurs have the digital tools to build the prosperity this vital region deserves.";
  p.problem   = ["The Middle Belt is Nigeria's agricultural heartland but its farmers earn very little.","Communal and ethnic conflict in the region is driven partly by economic frustration.","Middle Belt businesses are almost entirely absent from the national digital economy.","Youth lack digital pathways to economic opportunity in their home states.","The region's cultural and tourism potential is entirely undiscovered and undeveloped.","No platform exists amplifying the Middle Belt's economic voice and potential."];
  p.who       = ["Farmers, food producers, and agro-processors across the Middle Belt","Traders and artisans in Benue, Plateau, Kogi, and surrounding states","Youth seeking economic alternatives to conflict and out-migration","Investors in Middle Belt agriculture, mining, and tourism","Community leaders driving economic peace and development in the region"];
  p.does      = ["Connects Middle Belt farmers and businesses to national buyers and markets","Supports agro-processing and food value chain development in the region","Provides digital economic tools reducing conflict-driving economic frustration","Builds the region's tourism and cultural economy through digital visibility","Delivers business and finance tools for Middle Belt SMEs and cooperatives"];
  p.features  = ["Middle Belt agricultural marketplace and food value chain tools","Regional business directory and trade platform","Tourism and cultural discovery for the Middle Belt","Youth economic opportunity board for the region","Business training and microfinance access tools"];
  p.how       = ["Farmer or business registers and creates a regional profile","Lists agricultural produce, products, or services for discovery","Connects to buyers, tourists, partners, and investors","Accesses training, finance, and market intelligence tools","Builds a sustainable regional digital business presence"];
  p.impact    = ["Middle Belt farmers earning fair prices reducing poverty-driven conflict","Youth with real economic pathways choosing peace over militancy","Agricultural food value chains developed creating thousands of new jobs","Middle Belt tourism growing as the region's natural beauty is discovered","A more prosperous Middle Belt contributing to national food security and peace"];
  p.nigeria   = ["Middle Belt peace is essential to Nigeria's food security and national stability","Farmer-herder conflict is partly economic — digital prosperity reduces the pressure","Middle Belt food production capacity is critical to Nigeria's nutrition and export goals","Economic inclusion for every region is the foundation of true national unity","A developed Middle Belt closes Nigeria's development gap between north and south"];
  p.investors = ["Middle Belt agriculture is high-potential with very low current digital penetration","Food value chain development attracts agricultural investment and development finance","Tourism in Plateau, Kwara, and Niger states has significant growth potential","Government Middle Belt development programme contracts","International development organization funding for conflict-economic development"];
  p.future    = ["Plateau State tourism showcase reaching international visitors","Middle Belt food processing investment marketplace","Farmer-herder dialogue and economic cooperation digital tools","Integration with NEMA conflict-affected community programmes","Federal agricultural development programme platform for the Middle Belt"];
  p.subPlatforms = [
    {name:"BeltFarm",    tagline:"Agricultural market for the Middle Belt",    features:["Crop listings","Food produce marketplace","Buyer matching","Agro-processing connections","Price discovery"]},
    {name:"BeltTrade",   tagline:"Middle Belt business and commerce",          features:["Business directory","Product marketplace","Trade networking","B2B tools","Logistics links"]},
    {name:"PlateauTours",tagline:"Discover Middle Belt tourism assets",        features:["Tourism listings","Natural attraction guides","Community stays","Cultural events","Adventure tourism"]},
    {name:"BeltYouth",   tagline:"Economic opportunities for Middle Belt youth",features:["Job board","Skills training","Entrepreneurship tools","Mentorship matching","Grant alerts"]},
    {name:"BeltFinance", tagline:"Finance and microfinance for the region",    features:["Cooperative management","Loan applications","Savings tools","Grant directory","Islamic finance options"]}
  ];
})();


// ============================================================
//  FULL CONTENT — IBOPRENTICE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="iboprentice";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Iboprentice is Nigeria's dedicated skills and apprenticeship platform — bridging the gap between raw potential and market-ready competence for millions of young Nigerians. From learning a trade to mastering a profession, Iboprentice provides structured training programs, verified apprenticeships with master craftsmen and businesses, and a clear pathway from learning to earning. Because skill is the most portable form of wealth, and Iboprentice ensures every Nigerian can acquire it.";
  p.problem   = ["Nigeria's skills gap is one of the biggest barriers to youth employment and national productivity.","Traditional apprenticeship systems are unstructured, unverified, and often exploitative.","Vocational training institutions are underfunded and disconnected from real market demands.","There is no formal certification system that employers can trust for vocational skills.","Young people in rural areas have almost no access to structured skills training.","Skilled artisans cannot find and vet apprentices efficiently through traditional channels."];
  p.who       = ["Young Nigerians seeking practical, vocational, or trade-based skills","School leavers choosing vocational pathways over university education","Skilled master craftsmen and artisans seeking to train apprentices formally","Businesses needing qualified tradespeople and skilled workers","TVET institutions seeking a digital delivery and certification platform"];
  p.does      = ["Lists and verifies vocational training programmes across Nigeria","Connects apprentices to certified master trainers in their trade and location","Issues verifiable digital skill certificates recognized by employers","Provides online training modules supplementing hands-on apprenticeship","Tracks apprenticeship progress and completion for all parties"];
  p.features  = ["Verified master trainer directory across all trades and states","Apprenticeship matching connecting to the right trainer for your skill goal","Digital certificate issuance upon verified programme completion","Blended learning — online theory modules plus physical hands-on practice","Progress tracking dashboard for apprentice, trainer, and institution"];
  p.how       = ["Apprentice selects skill area and browses verified trainers nearby","Application is sent and trainer reviews and accepts the apprentice","Training programme begins with milestones tracked on the platform","Online modules supplement practical sessions in a blended format","Programme completion triggers digital certificate issuance and skill badge"];
  p.impact    = ["Millions of young Nigerians gaining verified, market-ready vocational skills","Employers confidently hiring certified tradespeople for the first time","Reduction in exploitative apprenticeship conditions through platform oversight","Traditional skills and crafts preserved and professionalized","Nigeria's vocational education sector modernized and scaled"];
  p.nigeria   = ["Nigeria's skills gap is a direct driver of unemployment and poverty","Vocational skills provide employment pathways for those not suited to university","Artisan and trade skills are the backbone of Nigeria's informal economy","Formalizing apprenticeship builds national productivity and tax base","Iboprentice supports the FG's technical education reform agenda"];
  p.investors = ["Skills and vocational training is a proven global investment sector","Revenue from training institution listings, apprenticeship matching fees, and certifications","Government TVET programme contracts and implementation partnerships","Corporate CSR training programme partnerships with large companies","International development funding focused on youth skills and employment"];
  p.future    = ["National skills passport recognized by all employers across Nigeria","Virtual reality practical training modules for complex trades","Iboprentice centres — physical training hubs in underserved communities","Recognition of prior learning system for experienced self-taught artisans","West Africa expansion connecting skilled workers to opportunities across the region"];
  p.subPlatforms = [
    {name:"TradeMatch",    tagline:"Find the right apprenticeship fast",          features:["Trade category search","Location filter","Trainer profiles","Application system","Rating and reviews"]},
    {name:"SkillCertify",  tagline:"Verified certificates for every skill",       features:["Digital certificate generation","Employer-shareable format","QR code verification","Certificate archive","Badge integration"]},
    {name:"LearnOnline",   tagline:"Theory modules for every trade",              features:["Trade-specific content","Video lessons","Quizzes and assessments","Offline mode","Progress tracker"]},
    {name:"MasterTrainer", tagline:"Tools for certified training providers",      features:["Trainer profile builder","Apprentice management","Payment tracking","Timetable tools","Certificate issuance"]},
    {name:"TVETConnect",   tagline:"Platform for vocational institutions",        features:["Institution listing","Course catalogue","Student enrollment management","Government reporting","Alumni tracking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAIJY SCIENCETECH
// ============================================================
(function() {
  var p = platforms.find(function(x){
    return x.key==="naijysciencetech" || x.key==="naijysciencetech" ||
           (x.name && x.name.toLowerCase().replace(/\s+/g,"").includes("sciencetech"));
  });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Naijy ScienceTech is Nigeria's hands-on science and technology learning platform — where young Nigerians don't just read about science, they experiment, build, and create. From chemistry experiments to coding projects, from electronics to environmental science, Naijy ScienceTech turns theoretical learning into real doing, making science exciting, relevant, and deeply Nigerian. Learn. Experiment. Build the future.";
  p.problem   = ["Nigerian science education is largely theoretical — students learn about science but rarely do it.","Laboratory infrastructure is absent in most Nigerian secondary schools.","Science subjects have low enrolment because they feel irrelevant to everyday life.","Technology skills like coding and electronics are almost entirely absent from school curricula.","Young Nigerians see science as foreign and elite rather than practical and accessible.","Nigeria's innovation capacity is constrained by a generation with no hands-on science experience."];
  p.who       = ["Secondary school students across Nigeria at JSS and SSS levels","Science teachers seeking practical, curriculum-linked resources and experiments","Parents supporting children's science learning at home","Science clubs and after-school STEM programs","Schools building science culture through practical learning infrastructure"];
  p.does      = ["Delivers practical, hands-on science experiments aligned to Nigerian curriculum","Provides coding, electronics, and technology project guides for all levels","Makes science fun and relevant through Nigerian contexts and examples","Supports teachers with practical lesson content and experiment guides","Builds science clubs and communities connecting young Nigerian scientists"];
  p.features  = ["Practical science experiment library aligned to WAEC and NECO curriculum","Coding and electronics project guides from beginner to advanced","Video experiment demonstrations with step-by-step instructions","Teacher practical lesson toolkit with materials list and safety guides","Science club management tools for schools and community groups"];
  p.how       = ["Student selects a subject area or experiment type","Follows step-by-step practical guide with video support","Completes the experiment or project and documents results","Shares findings with the science community earning recognition","Teacher assigns experiments as classwork or homework with tracking"];
  p.impact    = ["A generation of Nigerian students who have actually done science — not just read it","Science enrolment increasing as the subject becomes exciting and relevant","Teachers equipped with practical tools transforming their science lessons","Science clubs thriving in schools that previously had none","Nigeria's innovation pipeline strengthened by hands-on scientific experience"];
  p.nigeria   = ["Nigeria needs scientists and engineers — they must be inspired and trained from secondary school","Practical science builds critical thinking skills Nigeria's economy desperately needs","Making science Nigerian and relevant reduces the perception that it belongs to others","Hands-on technology skills create the next generation of Nigerian innovators","Science literacy at population scale is essential for national development in the 21st century"];
  p.investors = ["STEM education platform attracting international foundation and corporate sponsorship","School subscription revenue with curriculum alignment driving institutional adoption","Government science education programme implementation contracts","Corporate STEM sponsorship from banks, telecoms, and oil companies","Teacher training and CPD programme revenue"];
  p.future    = ["Physical ScienceTech labs in every geopolitical zone of Nigeria","National Science Olympiad powered by Naijy ScienceTech","AI science tutor providing personalized experiment guidance","Maker kits shipped to schools and homes across Nigeria","Integration with NERDC curriculum development for official adoption"];
  p.subPlatforms = [
    {name:"ExperimentLab",  tagline:"Hands-on science experiments for students",  features:["Curriculum-aligned experiments","Materials list","Step-by-step guide","Video demonstration","Safety instructions"]},
    {name:"CodeNaija",      tagline:"Coding projects for young Nigerian builders", features:["Beginner coding","Web projects","App building","Scratch and Python","Project showcase"]},
    {name:"TechBuild",      tagline:"Electronics and technology project guides",   features:["Circuit building","Arduino projects","Robotics basics","Materials guide","Teacher notes"]},
    {name:"ScienceClub",    tagline:"Manage and grow your school science club",   features:["Club registration","Member management","Project calendar","Achievement tracking","Inter-school competitions"]},
    {name:"TeacherPractical",tagline:"Practical science tools for teachers",      features:["Lesson-linked experiments","Assessment guides","Safety protocols","Materials sourcing","Curriculum mapping"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FULACONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="fulaconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FulaConnect is Nigeria's dedicated digital platform for the Fulani people — connecting Fulani herders, farmers, families, and communities across Nigeria and the Sahel region in one trusted digital space. From livestock market access to cultural preservation, from community coordination to conflict resolution tools, FulaConnect serves the Fulani community with deep cultural respect and practical digital power. Herding, Culture, Social Network and Digital Market — all in one place.";
  p.problem   = ["Fulani herders have almost no digital infrastructure supporting their way of life and trade.","Livestock markets are inaccessible and pricing is exploitative due to information asymmetry.","Farmer-herder conflicts destroy lives and livelihoods on both sides due to poor communication.","Fulani culture, language, and traditions are poorly documented and at risk of being lost.","Fulani communities are geographically dispersed with no platform connecting them.","Herders lack access to veterinary services, weather information, and grazing route data."];
  p.who       = ["Fulani herders and pastoralists across Nigeria and the Sahel","Fulani farming and settled communities","Community leaders managing inter-community relations","Agricultural development organizations working with pastoralists","Investors in Nigeria's livestock and pastoral economy"];
  p.does      = ["Connects Fulani herders to livestock buyers and fair market prices","Provides grazing route information and weather alerts for pastoral communities","Facilitates farmer-herder communication reducing conflict incidents","Preserves and celebrates Fulani culture, language, and traditions digitally","Connects Fulani communities across Nigeria in one trusted digital space"];
  p.features  = ["Livestock marketplace with live pricing and buyer matching","Grazing route maps with seasonal and weather updates","Farmer-herder dialogue tools for conflict prevention and resolution","Fulani cultural archive — language, traditions, songs, and oral history","Veterinary service directory and animal health advisory content"];
  p.how       = ["Herder registers and creates a community profile with herd details","Lists livestock for sale and connects to buyers with fair pricing","Accesses grazing route data and weather alerts for movement planning","Communicates with farmer communities through organized dialogue tools","Explores and contributes to Fulani cultural archive"];
  p.impact    = ["Fulani herders earning fair prices for livestock through market access","Farmer-herder conflict incidents reduced through organized communication tools","Grazing route optimization reducing environmental degradation","Fulani culture preserved in a permanent digital archive","Fulani communities connected nationally with shared digital infrastructure"];
  p.nigeria   = ["Farmer-herder conflict is one of Nigeria's deadliest recurring crises — FulaConnect addresses a root cause","Fulani herders are excluded from Nigeria's digital economy entirely — this must change","Nigeria's livestock sector is worth billions but herders earn very little of it","Cultural preservation for the Fulani is both a human right and a national heritage obligation","A connected, economically empowered Fulani community chooses peace over conflict"];
  p.investors = ["Nigeria's livestock sector is a multi-billion naira market with very low digital penetration","Livestock marketplace transaction fees generating recurring revenue","Veterinary and animal health service facilitation revenue","Government pastoral development programme platform contracts","International peace-building and conflict prevention funding for the farmer-herder dialogue tools"];
  p.future    = ["Fulfulde language digital tools — first comprehensive digital Fulfulde platform","Cross-border pastoral platform connecting Nigerian Fulani to Sahel communities","Livestock insurance products integrated for herd protection","Climate-smart grazing route optimization using satellite data","Integration with government RUGA and pastoral policy management systems"];
  p.subPlatforms = [
    {name:"LivestockMarket", tagline:"Fair prices for Fulani livestock",          features:["Cattle listings","Sheep and goat market","Live price tracker","Buyer matching","Transportation links"]},
    {name:"GrazingRoute",    tagline:"Safe routes and weather for herders",       features:["Route mapping","Seasonal updates","Weather alerts","Water point locations","Conflict zone warnings"]},
    {name:"PeaceDialogue",   tagline:"Farmer-herder communication tools",         features:["Community messaging","Conflict reporting","Mediation request","Community leader tools","Peace agreement archive"]},
    {name:"FulaniCulture",   tagline:"Preserving Fulani heritage digitally",      features:["Language archive","Oral history recordings","Cultural calendar","Traditional knowledge","Youth culture guides"]},
    {name:"VetConnect",      tagline:"Animal health services for herders",        features:["Vet directory","Disease alerts","Vaccination guides","Herd health diary","Emergency vet contact"]}
  ];
})();


// ============================================================
//  FULL CONTENT — PETRO360
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="petro360";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "Petro360 is Nigeria's comprehensive petroleum and energy intelligence platform — making Nigeria's most important industry transparent, understandable, and accessible to citizens, professionals, investors, and policymakers. Oil built modern Nigeria. Petro360 ensures every Nigerian understands how, what it means for their daily life, and what comes next as the energy transition unfolds. Energy knowledge for all.";
  p.problem   = ["Nigeria's oil and gas sector — which funds 70% of government revenue — is opaque to most citizens.","Oil industry data is fragmented across agencies and rarely accessible in understandable formats.","Citizens have no platform to understand how oil money flows from ground to government.","Energy transition decisions affecting Nigeria are made without meaningful public awareness.","Oil sector professionals lack a central platform for industry information and networking.","Investors in Nigeria's energy sector lack a single reliable data and intelligence source."];
  p.who       = ["Nigerian citizens wanting to understand the oil industry that funds their government","Oil and gas professionals at all levels of the industry","Energy investors and financial analysts covering Nigerian oil and gas","Government and regulatory officials managing the petroleum sector","Journalists and researchers covering energy, economy, and policy"];
  p.does      = ["Makes Nigeria's petroleum sector data accessible in plain, understandable language","Tracks crude oil production, exports, revenue, and NNPC performance","Monitors fuel prices and downstream petroleum market activity","Provides energy sector professional community and intelligence tools","Covers Nigeria's energy transition and renewable energy development"];
  p.features  = ["Nigeria crude oil production and export tracker","NNPC revenue and financial performance dashboard","Fuel price tracker across all states in real time","Energy sector professional directory and networking tools","Energy transition and renewables news and analysis platform"];
  p.how       = ["User accesses oil production, export, and revenue data in visual formats","Fuel prices in their state are tracked and compared nationally","Professional creates profile and connects with energy sector peers","Investor accesses sector intelligence and project opportunity data","Policy developments and energy transition news are tracked in real time"];
  p.impact    = ["Millions of Nigerians understanding the oil sector that shapes their lives","Greater accountability in NNPC and petroleum sector management","Citizens empowered to question oil revenue and its uses intelligently","Energy professionals connected in an organized digital community","Nigeria's energy transition better understood and engaged by all stakeholders"];
  p.nigeria   = ["Oil is Nigeria's economic foundation — citizens must understand it to hold it accountable","NNPC opacity has cost Nigeria trillions — transparency platforms begin to change this","Fuel subsidy debates require an informed public — Petro360 creates that","Energy transition will fundamentally reshape Nigeria's economy — citizens must be prepared","Nigeria's energy professionals deserve world-class industry infrastructure"];
  p.investors = ["Energy intelligence platforms attract major oil industry and investor subscription revenue","Premium data and analytics services for investors and financial institutions","Professional community and recruitment platform subscription revenue","Government energy agency data platform contract opportunities","International energy organization research partnership funding"];
  p.future    = ["Real-time NNPC transparency dashboard linked to official reporting systems","Nigeria energy security index updated monthly","Oil field performance tracker by block and operator","Energy investment opportunity platform for domestic and foreign investors","West Africa energy intelligence platform covering all regional producers"];
  p.subPlatforms = [
    {name:"OilTracker",     tagline:"Nigeria crude production and export data",   features:["Production volumes","Export destinations","Revenue tracking","OPEC quota monitoring","Historical comparison"]},
    {name:"FuelWatch",      tagline:"Real-time fuel prices across Nigeria",       features:["State-by-state prices","Pump price alerts","Scarcity reporting","Price trend charts","Subsidy tracker"]},
    {name:"NNPCWatch",      tagline:"NNPC performance and transparency",          features:["Revenue reports","Financial performance","Subsidiary tracking","Audit findings","Policy compliance"]},
    {name:"EnergyPros",     tagline:"Nigeria energy sector professional network", features:["Professional profiles","Industry job board","Sector events","Knowledge sharing","Mentorship tools"]},
    {name:"EnergyTransit",  tagline:"Nigeria's energy transition tracker",        features:["Renewables news","Policy updates","Investment tracker","Climate commitment monitoring","Transition opportunity alerts"]}
  ];
})();


// ============================================================
//  FULL CONTENT — OILKNOWLEDGE HUB
// ============================================================
(function() {
  var p = platforms.find(function(x){
    return x.key==="oilknowledgehub" || x.key==="oilknowledgehub" ||
           (x.name && x.name.toLowerCase().replace(/\s+/g,"").includes("oilknowledge"));
  });
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "OilKnowledge Hub is the education and literacy platform for Nigeria's petroleum sector — making the complex world of oil and gas understandable for every Nigerian, from students and journalists to community members living near oil infrastructure. Nigeria's wealth comes from oil, yet most Nigerians understand very little about how it works. OilKnowledge Hub changes that — energy knowledge for citizens.";
  p.problem   = ["Most Nigerians cannot explain how Nigeria's oil industry actually works despite living off its revenue.","Oil industry terminology and processes are inaccessible to non-professionals.","Communities near oil infrastructure have no platform for understanding their rights and risks.","Students interested in oil and gas careers lack accessible foundational education content.","Nigeria's energy debates are conducted without an informed citizenry able to participate meaningfully."];
  p.who       = ["Secondary and university students interested in oil and gas careers","Citizens living in oil-producing communities needing to understand their environment","Journalists covering the energy sector without industry backgrounds","Policy analysts and civil society organizations working on extractives","General public wanting to understand Nigeria's most important industry"];
  p.does      = ["Explains Nigeria's oil and gas industry in plain, accessible language","Delivers foundational petroleum education content for all levels","Informs oil-producing communities about their rights and environmental protections","Supports energy journalism with reliable, accessible technical content","Builds energy literacy at national scale as a public good"];
  p.features  = ["Plain-language oil and gas education library","Oil industry career guide for students and job seekers","Community rights guide for people living near oil infrastructure","Energy glossary with definitions of all key petroleum terms","Nigeria oil sector history and context content"];
  p.how       = ["User selects a topic — from how oil is formed to how NNPC works","Content explains in plain language with Nigerian examples and context","Community member learns their rights regarding oil infrastructure near them","Student accesses career guide for entry into the oil and gas sector","Journalist uses the platform as a reliable technical reference"];
  p.impact    = ["An energy-literate Nigerian public able to engage meaningfully with oil debates","Oil-producing communities knowing and exercising their rights","More Nigerians pursuing informed oil sector careers","Better energy journalism improving public understanding","Nigeria's oil accountability improved through informed citizen engagement"];
  p.nigeria   = ["70% of government revenue comes from oil — every Nigerian should understand it","Oil-producing communities suffer most from the industry yet understand it least","Energy literacy is a prerequisite for meaningful participation in Nigeria's biggest policy debates","An informed citizenry demands better management of Nigeria's petroleum wealth","Preparing the next generation of Nigerian petroleum professionals requires accessible education"];
  p.investors = ["Education platform with government, NGO, and energy company sponsorship potential","School and university curriculum licensing revenue","Energy company CSR programme content partnership","Journalist and civil society organization training programme revenue","International extractives transparency organization funding"];
  p.future    = ["Oil sector virtual career fair connecting students to industry employers","Community rights legal toolkit for oil-affected communities","Nigerian petroleum history documentary series","School curriculum integration for energy literacy at secondary level","West Africa extractives education platform expansion"];
  p.subPlatforms = [
    {name:"OilBasics",      tagline:"How Nigeria's oil industry works",           features:["Industry explainers","Process guides","Plain language content","Interactive diagrams","Quiz tools"]},
    {name:"CareerOil",      tagline:"Oil and gas career guide for Nigerians",     features:["Career pathways","Required qualifications","Company profiles","Entry points","Scholarship alerts"]},
    {name:"CommunityRights",tagline:"Know your rights near oil infrastructure",   features:["Rights explainers","Environmental protection guides","Compensation information","Legal resource links","Reporting tools"]},
    {name:"EnergyGlossary", tagline:"Plain-language petroleum terminology",       features:["Full glossary","Search tool","Contextual examples","Audio pronunciation","Downloadable guide"]},
    {name:"OilHistory",     tagline:"Nigeria's petroleum story from 1956",        features:["Historical timeline","Key events","Industry evolution","Policy milestones","Community impact stories"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NIGERIANCREED
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="nigeriancreed";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "NigerianCreed is the platform for Nigerian national identity — the digital home of what it means to be Nigerian, built around shared values, shared history, shared achievements, and a shared vision for the country's future. In a nation often defined by its divisions, NigerianCreed insists on the greater story — the one where 220 million people share one incredible, complicated, powerful identity. One Nation. One Identity.";
  p.problem   = ["Nigerian national identity is weak — most Nigerians identify more with ethnicity or religion than nationhood.","Nigeria's history, achievements, and shared values are poorly taught and celebrated.","There is no platform channelling Nigerian national pride productively.","Young Nigerians increasingly disengage from national identity, especially amid hardship.","Divisive narratives dominate while unifying Nigerian stories go untold."];
  p.who       = ["Nigerians who believe in and want to celebrate their country","Young Nigerians seeking positive national identity and pride","Schools building national values and civic identity in students","Government institutions responsible for national values and identity","Diaspora Nigerians maintaining pride in their heritage abroad"];
  p.does      = ["Celebrates Nigeria's achievements, heroes, and national identity","Documents Nigerian history in an accessible, engaging digital format","Promotes shared Nigerian values across ethnic and religious differences","Builds civic pride through stories of Nigerian excellence worldwide","Creates a digital home for patriotic Nigerians to connect and celebrate"];
  p.features  = ["Nigeria achievements archive — science, arts, sports, politics, and culture","Nigerian heroes gallery celebrating historical and contemporary greatness","Shared values content building a positive national identity narrative","National pride challenges and campaigns engaging citizens","Nigerian history education content for schools and self-learners"];
  p.how       = ["User joins and explores Nigeria's story — achievements, heroes, and history","Contributes their own patriotic content, stories, and celebrations","Participates in national pride campaigns and challenges","Shares Nigerian achievements with the world through social tools","Schools use history and values content in civic education programmes"];
  p.impact    = ["Stronger Nigerian national identity built on shared pride and history","Young Nigerians with a positive, substantive national identity to embrace","Nigeria's extraordinary history and achievements visible and celebrated globally","National cohesion improved through shared identity narrative tools","Diaspora Nigerians confidently representing their country's greatness worldwide"];
  p.nigeria   = ["National identity weakness is a root cause of Nigeria's governance and social cohesion problems","Nigerians who are proud of their country work harder to make it better","Shared values across ethnic and religious lines are the foundation of lasting unity","Nigeria has an extraordinary story — it needs a platform to tell it","Building national identity is essential infrastructure for every other development goal"];
  p.investors = ["National identity and civic platforms attract government and international foundation funding","Content licensing to schools, media companies, and government programmes","Premium membership for diaspora community access and events","Corporate nation-building CSR programme partnerships","Tourism and cultural promotion partnership revenue"];
  p.future    = ["Annual Digital National Day celebration — Nigeria's biggest online patriotic event","AI-powered Nigeria history tutor for schools and self-learners","National heroes monument project — physical and digital commemoration","Nigeria achievements global tour — showcasing Nigerian excellence to the world","Integration with Federal Ministry of Education national values curriculum"];
  p.subPlatforms = [
    {name:"AchievementArk", tagline:"Nigeria's hall of achievements",            features:["Achievement categories","Contributor submissions","Expert curation","Shareable cards","School resource packs"]},
    {name:"HeroesGallery",  tagline:"Celebrating Nigerian greatness",            features:["Historical heroes","Contemporary achievers","Nomination system","Biographical content","Inspiration stories"]},
    {name:"ValuesBuild",    tagline:"Shared Nigerian values content",            features:["Values framework","Story-based values content","School programme tools","Community discussion","Values pledge tools"]},
    {name:"HistoryNaija",   tagline:"Nigeria's history made accessible",         features:["Timeline explorer","Era-by-era content","Key events archive","Historical figures","Primary source library"]},
    {name:"PrideConnect",   tagline:"Patriotic Nigerians connected globally",    features:["Community feed","Pride challenges","Achievement sharing","Diaspora connect","National celebration tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DEENCONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="deenconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DeenConnect is Nigeria's digital platform for the Muslim community — connecting mosques, scholars, students of knowledge, and everyday Muslims in one trusted, enriching digital space. From Islamic education to community coordination, from Quran learning to Zakat management, DeenConnect serves the spiritual, intellectual, and social needs of Nigeria's 100 million-strong Muslim community with the respect, integrity, and depth their faith deserves.";
  p.problem   = ["Nigeria's Muslim community has no organized digital platform representing their needs.","Islamic education resources are scattered, unverified, and of inconsistent quality online.","Mosque management is entirely manual and poorly coordinated.","Zakat and sadaqah collection lacks transparency and accountability in many cases.","Muslim professionals and scholars have no dedicated networking platform.","Misinformation about Islam spreads rapidly with no organized counterweight."];
  p.who       = ["Nigeria's Muslim community across all 36 states","Mosque leadership and Islamic scholars","Students of Islamic knowledge at all levels","Muslim professionals seeking a faith-aligned community","Islamic charity organizations managing Zakat and sadaqah"];
  p.does      = ["Provides verified, high-quality Islamic education content for all levels","Connects mosque communities digitally for coordination and communication","Enables transparent Zakat collection and distribution management","Builds a Nigerian Muslim professional and scholarly network","Counters misinformation with verified, scholar-approved Islamic content"];
  p.features  = ["Verified Islamic knowledge library — Quran, Hadith, Fiqh, and Tafseer","Mosque management tools for announcements, programs, and community coordination","Transparent Zakat and sadaqah management platform","Muslim professional network for career and business connections","Prayer times, Qibla direction, and Islamic calendar tools"];
  p.how       = ["Muslim creates a profile linked to their mosque community","Accesses verified Islamic education and daily practice tools","Mosque leadership manages community communications through the platform","Zakat contributions are collected transparently and distributed to verified causes","Community members connect, learn, and support each other digitally"];
  p.impact    = ["Nigeria's Muslim community with a unified, trusted digital home","Mosque communities better organized and more effectively serving their members","Zakat collected and distributed transparently building community trust","Verified Islamic knowledge countering online misinformation","Muslim professionals connected nationally for career and community building"];
  p.nigeria   = ["Nigeria has one of the world's largest Muslim populations — they deserve world-class digital tools","Mosque coordination during emergencies requires digital infrastructure","Zakat transparency is a religious obligation and a community trust issue","Islamic education quality must be organized and verified at national scale","A strong, organized Muslim digital community contributes to national peace and cohesion"];
  p.investors = ["Nigeria's Muslim market of 100M+ is one of the most underserved digital communities globally","Premium features, Zakat platform fees, and Islamic finance integration revenue","Corporate advertising in a highly trusted, faith-aligned community context","Government partnership for Islamic education and community management tools","International Islamic development organization funding and partnership"];
  p.future    = ["Full Quran memorization programme with verified sheikh certification","Islamic finance and halal investment platform integration","National mosque connectivity network for emergency coordination","Hajj and Umrah preparation and coordination platform","Pan-African Islamic community platform connecting Muslims across the continent"];
  p.subPlatforms = [
    {name:"IlmHub",        tagline:"Verified Islamic knowledge for all levels",  features:["Quran with Tafseer","Hadith library","Fiqh guides","Islamic history","Scholar-verified content"]},
    {name:"MasjidConnect", tagline:"Digital tools for mosque communities",       features:["Announcement tools","Program calendar","Community directory","Friday lecture archive","Emergency coordination"]},
    {name:"ZakatPlatform", tagline:"Transparent Zakat and charity management",  features:["Zakat calculator","Contribution tracking","Verified beneficiary lists","Distribution reports","Annual accountability report"]},
    {name:"MuslimNet",     tagline:"Muslim professional and community network",  features:["Professional profiles","Halal business directory","Scholar network","Community forums","Marriage facilitation tools"]},
    {name:"DailyDeen",     tagline:"Daily Islamic practice companion",          features:["Prayer times","Qibla compass","Islamic calendar","Daily dhikr guide","Ramadan tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — WIFEYMET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="wifeymet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "WifeyMet is the platform where Nigerian women share their love stories — how they met their husbands, the journey of courtship, the wedding, and the marriage that followed. It is a joyful, honest, inspiring community of Nigerian women celebrating love, sharing wisdom, and supporting each other through the realities of Nigerian marriage and family life. How I Met My Husband — and I finally did.";
  p.problem   = ["Nigerian women have no dedicated platform to share and celebrate their love and marriage stories.","Younger women navigating love and relationships have few honest, relatable role models online.","Marriage preparation and wisdom is rarely passed down in organized, accessible ways.","The joy and complexity of Nigerian marriage deserves its own space for celebration and honesty.","Social media pressures create unrealistic images of relationships — honest stories are needed."];
  p.who       = ["Nigerian women who are married and want to share their love story","Younger women seeking honest, relatable guidance on love and relationships","Engaged women preparing for marriage and seeking community wisdom","Mothers sharing relationship wisdom with daughters","Men curious about the female perspective on Nigerian love and marriage"];
  p.does      = ["Provides a safe, joyful platform for Nigerian women to share love and marriage stories","Celebrates the diversity of Nigerian love — across tribes, religions, and backgrounds","Offers honest community wisdom on navigating Nigerian marriage and family life","Connects women with shared experiences for mutual support and celebration","Preserves beautiful Nigerian love stories for future generations"];
  p.features  = ["Story submission platform for Nigerian women's love and marriage journeys","Community discussion and support tools for married and engaged women","Love story archive celebrating diverse Nigerian marriages","Relationship wisdom and marriage preparation content","Private community spaces for sensitive discussion and support"];
  p.how       = ["Woman submits her story — how they met, the courtship, and the journey","Story is published and celebrated by the community","Readers comment, relate, and draw wisdom from others' experiences","Community discussions and advice threads grow around shared themes","The archive becomes a beautiful living record of Nigerian love"];
  p.impact    = ["Thousands of Nigerian love stories preserved and celebrated","Younger women with relatable, honest guidance on love and marriage","A supportive community reducing the isolation that many Nigerian wives feel","Marriage wisdom passed on in an organized, accessible way","Nigerian love celebrated as diverse, beautiful, and deeply human"];
  p.nigeria   = ["Nigerian marriage is a rich, complex, celebrated institution that deserves its own platform","Honest stories about love and marriage counter harmful social media unrealism","Women supporting women through marriage is a deeply Nigerian cultural value","Celebrating love across ethnic and religious lines strengthens national unity","Nigerian women's voices and stories deserve a platform of their own"];
  p.investors = ["Community storytelling platforms build loyal, deeply engaged audiences","Advertising revenue from wedding, fashion, home, and family brands","Premium membership for exclusive community spaces and features","Book and media publishing partnership for compiled love story collections","Event revenue from WifeyMet live storytelling and community events"];
  p.future    = ["WifeyMet Live — storytelling events across Nigerian cities","WifeyMet Book — annual compiled anthology of Nigeria's most beautiful love stories","Marriage counsellor and expert community for relationship support","Cross-platform story sharing reaching diaspora Nigerian women globally","WifeyMet podcast — audio storytelling for Nigerian love and marriage"];
  p.subPlatforms = [
    {name:"HerStory",      tagline:"Share how you met your husband",             features:["Story submission","Photo sharing","Timeline builder","Publication tools","Community reactions"]},
    {name:"LoveArchive",   tagline:"Beautiful Nigerian love stories collected",  features:["Story browsing","Category filter","Tribe and religion diversity filter","Favourite stories","Share tools"]},
    {name:"WifeyWisdom",   tagline:"Marriage wisdom from Nigerian women",        features:["Advice threads","Community Q&A","Expert contributions","Topic categories","Anonymous option"]},
    {name:"BrideCircle",   tagline:"Support for engaged and newly-wed women",    features:["Engagement stories","Wedding planning community","New wife support group","Expert guidance","Private forums"]},
    {name:"LoveForever",   tagline:"Long marriage anniversary celebrations",     features:["Anniversary story features","Silver and gold celebration archive","Legacy love stories","Community tributes","Inspiration gallery"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HUSBYMET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="husbymet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HusbyMet is the platform where Nigerian men share their love stories — how they met their wives, the courage it took to pursue, the proposal, and the life they have built together. It is an honest, warm, and often hilarious community of Nigerian men celebrating love, sharing the realities of marriage from the male perspective, and supporting each other as husbands and fathers. How I Met My Wife — and Life Till Now.";
  p.problem   = ["Nigerian men have almost no platform to openly and honestly discuss love, relationships, and marriage.","The male perspective on Nigerian love and marriage is rarely shared publicly or celebrated.","Young Nigerian men have few honest male role models talking about love and commitment.","Married men often navigate the challenges of Nigerian marriage in isolation.","The joy and difficulty of being a Nigerian husband and father deserves its own honest space."];
  p.who       = ["Nigerian men who are married and want to share their love story","Young men navigating love and seeking honest male perspective","Engaged men preparing for marriage and seeking community wisdom","Fathers sharing relationship and family wisdom with younger men","Women curious about the male perspective on Nigerian love and marriage"];
  p.does      = ["Provides a platform where Nigerian men honestly share their love and marriage stories","Celebrates male emotional honesty and vulnerability around love","Offers community wisdom on being a good Nigerian husband and father","Connects men with shared experiences in a supportive community","Preserves Nigerian men's love stories with warmth and honesty"];
  p.features  = ["Story submission platform for Nigerian men's love and marriage journeys","Community discussion tools for husbands and engaged men","Honest content on navigating Nigerian marriage from the male perspective","Fatherhood and family wisdom community","Private community spaces for sensitive male discussion and support"];
  p.how       = ["Man submits his story — how he noticed her, built the courage, and popped the question","Story is published and celebrated by the male community","Readers laugh, relate, and learn from each other's experiences","Community discussions around shared marriage themes grow organically","The archive becomes a rich, honest record of Nigerian male love"];
  p.impact    = ["Nigerian men with a space to be emotionally honest about love and marriage","Young men with relatable male role models on love and commitment","A supportive community reducing the isolation married Nigerian men often feel","Marriage wisdom from men passed on to the next generation","Nigerian male love celebrated and normalized in a healthy, honest way"];
  p.nigeria   = ["Nigerian men need safe spaces to discuss love and marriage honestly — HusbyMet provides that","Emotional honesty in men strengthens marriages and reduces domestic conflict","Male perspectives on marriage are valuable and underrepresented in Nigerian media","Men who talk openly about love model healthy relationship culture for their children","A platform celebrating Nigerian men as loving husbands and fathers is long overdue"];
  p.investors = ["Complementary platform to WifeyMet with shared and distinct audience","Advertising from men's fashion, grooming, car, and finance brands","Premium membership for exclusive male community spaces","Event revenue from HusbyMet live storytelling events","Podcast and media partnership for Nigerian male relationship content"];
  p.future    = ["HusbyMet Live — storytelling events with Nigerian men sharing love stories on stage","HusbyMet Book — compiled anthology of Nigeria's most powerful male love stories","Fatherhood programme connecting experienced Nigerian fathers to new fathers","Marriage strengthening tools for couples inspired by HusbyMet community","HusbyMet podcast — the Nigerian man's honest voice on love, marriage, and life"];
  p.subPlatforms = [
    {name:"HisStory",      tagline:"How he met her — in his own words",          features:["Story submission","Photo sharing","Timeline of love","Community reactions","Publication tools"]},
    {name:"ManArchive",    tagline:"Nigerian men's love stories collected",       features:["Story browsing","Diversity filter","Funny and serious categories","Favourite stories","Share tools"]},
    {name:"HusbyWisdom",   tagline:"Marriage wisdom from Nigerian husbands",     features:["Advice threads","Male Q&A","Expert contributions","Topic categories","Anonymous option"]},
    {name:"GroomCircle",   tagline:"Support for engaged and newly-wed men",      features:["Proposal stories","Wedding prep community","New husband support","Practical advice","Private forums"]},
    {name:"DadLife",       tagline:"Fatherhood stories and wisdom",              features:["Fatherhood stories","Parenting advice","Father-child stories","Generational wisdom","Community support"]}
  ];
})();


// ============================================================
//  FULL CONTENT — JJCSTORY
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="jjcstory";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "JJCstory is the platform for Nigeria's newcomers — the Johnny Just Come — sharing the honest, often hilarious, sometimes painful story of arriving somewhere new and figuring it out. Whether you just moved from the village to Lagos, from Nigeria to London, or from one neighbourhood to an entirely different world, JJCstory is your community. Journey, Mistakes, and Fun — because every newcomer has a story worth telling.";
  p.problem   = ["New arrivals in cities and countries are isolated, confused, and often exploited.","The JJC experience is universal in Nigeria but there is no platform celebrating and supporting it.","Practical knowledge about navigating new environments is not organized or shared.","The humour and humanity of the JJC journey is a rich cultural resource going uncaptured.","Newcomers to Lagos, Abuja, and abroad face the same mistakes with no community to help."];
  p.who       = ["Nigerians who have recently moved to a new city or country","Diaspora Nigerians reflecting on their arrival and journey","Internal migrants moving from rural areas to Nigerian cities","Students arriving at university far from home for the first time","Anyone who has ever been the new person somewhere unfamiliar"];
  p.does      = ["Provides a community platform for newcomers to share their arrival stories","Celebrates the JJC experience with humour, honesty, and warmth","Provides practical survival guides for navigating Nigerian cities and abroad","Connects current JJCs to experienced community members who have made it","Preserves the newcomer stories that capture Nigerian migration honestly"];
  p.features  = ["JJC story submission — your first week, your biggest mistake, your breakthrough moment","Practical city survival guides for Lagos, Abuja, Port Harcourt, and abroad","JJC community connecting newcomers to experienced guides in their new location","Funny JJC moments archive celebrating the universal newcomer experience","Practical tips library — what to know before you go, what nobody tells you"];
  p.how       = ["Newcomer shares their arrival story — the good, bad, and hilarious","Community reads, reacts, and shares advice from their own experience","Practical survival guide content helps current JJCs navigate their new environment","Experienced members mentor newcomers through the platform","The archive grows into Nigeria's most honest migration story collection"];
  p.impact    = ["Newcomers less isolated and more prepared through community knowledge","The JJC experience celebrated and validated rather than hidden in embarrassment","Practical knowledge reducing the costly mistakes every JJC makes","A community of solidarity across Nigerian newcomers everywhere","Nigeria's internal and international migration experience honestly documented"];
  p.nigeria   = ["Nigeria is a nation of movers — from villages to cities, from Nigeria to the world","The JJC experience is shared by tens of millions of Nigerians — they deserve their own platform","Migration knowledge saved in a community reduces exploitation of newcomers","Nigerian humour and storytelling culture thrives in the JJC format","A platform that celebrates and supports newcomers is a platform that celebrates Nigeria's dynamism"];
  p.investors = ["Storytelling community platforms build deep engagement and loyalty","Advertising from travel, logistics, housing, and finance brands targeting migrants","Premium membership for curated city guides and expert newcomer support","Book and media publishing for compiled JJC story collections","Partnership with diaspora organizations for international newcomer community"];
  p.future    = ["JJCstory city guides app — everything you need on arrival in a new Nigerian city","JJCstory abroad — dedicated guides for Nigerians arriving in UK, USA, Canada, and Europe","Annual JJC Awards — celebrating the best newcomer stories of the year","JJCstory podcast — audio storytelling of Nigeria's funniest and most moving arrival stories","Partnership with airlines, bus companies, and student unions to reach newcomers at arrival"];
  p.subPlatforms = [
    {name:"ArrivalStory",  tagline:"Share your newcomer story honestly",         features:["Story submission","First week archive","Photo sharing","Community reactions","Anonymous option"]},
    {name:"CityGuide",     tagline:"Survive your new Nigerian city",             features:["Lagos survival guide","Abuja guide","PH guide","Abroad city guides","Community-updated tips"]},
    {name:"JJCCommunity",  tagline:"Connect newcomers to experienced guides",    features:["Newcomer matching","Local guide profiles","Welcome messaging","City-specific groups","Mentor matching"]},
    {name:"FunnyJJC",      tagline:"Nigeria's funniest newcomer moments",        features:["Funny story archive","Video clips","Community voting","Hall of fame","Share tools"]},
    {name:"SurvivalTips",  tagline:"What nobody tells you before you arrive",    features:["Category tip library","Community-sourced advice","Warning alerts","Scam awareness","Practical checklists"]}
  ];
})();


// ============================================================
//  FULL CONTENT — NAMYAREA (fix if key issue)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="namyarea";});
  if(!p) return;
  if(p.problem && p.problem.length) return; // already written
  p.status    = "Active / Growing";
  p.intro     = "NaMyArea is Nigeria's hyperlocal community platform — connecting neighbours, local businesses, and community leaders in the same area so that every Nigerian neighbourhood has a digital backbone for communication, safety, commerce, and collective action.";
  p.problem   = ["Nigerian neighbourhoods are physically dense but digitally disconnected.","Local problems have no reporting channel.","Neighbours cannot easily communicate or coordinate.","Local businesses are invisible to people living next to them.","Community associations are poorly organized."];
  p.who       = ["Residents in Nigerian urban and rural communities","Local business owners","Community association leaders","Local government officials","Citizens reporting local problems"];
  p.does      = ["Connects neighbours in one local digital space","Enables reporting of local problems","Promotes local businesses to surrounding community","Provides community safety alerts","Supports community association management"];
  p.features  = ["Neighbourhood community feed","Local problem reporting","Local business discovery map","Community safety alerts","Estate management tools"];
  p.how       = ["Resident joins neighbourhood using location verification","Sees local community feed","Reports local problems or shares safety information","Discovers local businesses","Community leaders organize through management tools"];
  p.impact    = ["Nigerian neighbourhoods better informed and connected","Local problems resolved faster","Local businesses gaining customers","Community safety improved","Stronger sense of collective responsibility"];
  p.nigeria   = ["Nigeria's rapid urbanization needs digital community infrastructure","Neighbourhood safety depends on organized community vigilance","Local economic activity grows when members discover each other","Community self-organization reduces dependence on poor local government","Connected communities are more resilient and civically engaged"];
  p.investors = ["Hyperlocal platforms with local advertising and commerce revenue","Premium estate management subscription","Local government communication contracts","Data for urban planning and service delivery firms","Anchor for other Naijy local services"];
  p.future    = ["Neighbourhood AI assistant","Smart estate management with IoT integration","NaMyArea marketplace — hyperlocal buying and selling","LGA and local government system integration","National neighbourhood safety network"];
  p.subPlatforms = [
    {name:"NeighbourFeed",  tagline:"Your community's local news",               features:["Community posting","Local news sharing","Discussion threads","Event announcements","Neighbour introductions"]},
    {name:"LocalAlert",     tagline:"Safety alerts for your area",               features:["Incident reporting","Safety broadcasts","Emergency alerts","Anonymous reports","Response coordination"]},
    {name:"AreaBusiness",   tagline:"Businesses within walking distance",        features:["Hyperlocal business map","Category search","Reviews","Special offers","Contact tools"]},
    {name:"CommunityIssues",tagline:"Report and track local problems",           features:["Issue submission","Agency routing","Resolution tracking","Community upvote","Photo evidence"]},
    {name:"EstateManager",  tagline:"Digital estate and community management",   features:["Resident directory","Dues management","Meeting coordination","Notice board","Complaint management"]}
  ];
})();


// ============================================================
//  FULL CONTENT — BLOCKCHAINNET
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="blockchainnet";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "BlockchainNet is Nigeria's blockchain education, development, and adoption platform — connecting Nigerian developers, businesses, and citizens to the power of decentralized technology. From cryptocurrency literacy to smart contract development, from DeFi to digital identity, BlockchainNet builds the knowledge and community Nigeria needs to lead Africa's blockchain revolution. Powering the Digital Economy.";
  p.problem   = ["Blockchain technology is widely misunderstood in Nigeria — reduced to crypto speculation in public discourse.","Nigerian blockchain developers have no organized community or development infrastructure.","Businesses cannot access blockchain solutions tailored to Nigerian industry needs.","Citizens lose billions to cryptocurrency fraud due to low financial digital literacy.","Nigeria risks missing the blockchain revolution through poor education and infrastructure.","Government and financial institutions are skeptical due to lack of reliable information."];
  p.who       = ["Software developers learning and building blockchain applications","Businesses exploring blockchain for supply chain, payments, and identity solutions","Investors and crypto enthusiasts seeking reliable Nigerian market information","Government and regulatory bodies understanding blockchain policy implications","Entrepreneurs building blockchain-powered startups in Nigeria"];
  p.does      = ["Educates Nigerians on blockchain technology, cryptocurrency, and decentralized finance","Builds Nigeria's blockchain developer community with tools and resources","Connects blockchain businesses to implementation partners and investors","Provides reliable crypto market information reducing fraud vulnerability","Supports government understanding of blockchain policy and regulation"];
  p.features  = ["Blockchain and cryptocurrency education library for all levels","Nigerian blockchain developer community with project collaboration tools","Crypto market data and fraud alert system","Blockchain business use case database for Nigerian industries","Policy and regulatory update tracker for Nigerian digital assets"];
  p.how       = ["User accesses plain-language blockchain education content","Developer joins community and collaborates on blockchain projects","Business explores use cases and connects to implementation partners","Investor accesses reliable market data and fraud alert system","Government official accesses policy briefings and regulatory comparisons"];
  p.impact    = ["More Nigerians with genuine blockchain literacy and fewer fraud victims","A thriving Nigerian blockchain developer community building real solutions","Businesses adopting blockchain technology improving efficiency and trust","Crypto fraud in Nigeria reduced through better public education","Nigeria positioned as a blockchain leader on the African continent"];
  p.nigeria   = ["Nigeria is already one of the world's largest cryptocurrency markets — it needs proper infrastructure","Blockchain can solve Nigeria's trust and verification challenges in land, trade, and identity","eNaira and CBDC developments require an informed technical community to build on","Nigerian developers can lead African blockchain innovation with the right support","Regulatory clarity requires an informed conversation — BlockchainNet enables it"];
  p.investors = ["Blockchain platform serving one of the world's most active crypto markets","Developer tools and community subscription revenue","Business blockchain implementation consulting and partnership revenue","Crypto market data and intelligence subscription services","Government and regulatory training programme contracts"];
  p.future    = ["Nigeria blockchain hackathon — annual innovation competition","Decentralized identity platform for Nigerian citizens","Land registry blockchain pilot in partnership with state governments","Nigerian blockchain startup accelerator programme","West Africa blockchain hub connecting all regional developers"];
  p.subPlatforms = [
    {name:"ChainLearn",    tagline:"Blockchain education for all Nigerians",     features:["Beginner to expert content","Crypto basics","DeFi guides","Smart contract intro","Video tutorials"]},
    {name:"DevChain",      tagline:"Nigeria's blockchain developer community",   features:["Project collaboration","Code sharing","Hackathon tools","Job board","Mentorship matching"]},
    {name:"CryptoSafe",    tagline:"Reliable crypto data and fraud protection",  features:["Market price data","Fraud alert system","Scam database","Exchange reviews","Investment risk guides"]},
    {name:"BizChain",      tagline:"Blockchain solutions for Nigerian business", features:["Use case library","Implementation partners","ROI calculator","Case studies","Vendor directory"]},
    {name:"PolicyChain",   tagline:"Blockchain policy and regulation tracker",   features:["CBN updates","SEC guidelines","International comparison","Policy brief archive","Regulatory news"]}
  ];
})();


// ============================================================
//  FULL CONTENT — BREAKTRUAFRICA
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="breaktruafrica";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "BreaktruAfrica is Nigeria's platform for African success stories — amplifying the achievements, innovations, and breakthroughs of Africans across the continent and the diaspora. From Nigerian tech founders to Kenyan climate scientists, from Ghanaian artists to South African athletes, BreaktruAfrica ensures Africa's success is seen, celebrated, and shared with the world. Africa's Success, Amplified.";
  p.problem   = ["African achievements receive a fraction of the global media attention they deserve.","Young Africans lack visible role models who look like them succeeding globally.","Africa's narrative is dominated by negative stories — poverty, conflict, and disease.","African innovators have no organized platform for continental visibility and collaboration.","Nigeria's success stories are poorly connected to wider African success movements."];
  p.who       = ["African entrepreneurs, innovators, and achievers seeking continental visibility","Young Africans seeking inspiring role models from their own continent","Nigerian businesses seeking pan-African partnerships and market access","African diaspora professionals maintaining continental connection and contribution","Media organizations seeking authentic African success content"];
  p.does      = ["Showcases African achievements across every field — science, business, arts, sports, and social impact","Connects African innovators and entrepreneurs across the continent","Amplifies African success stories to global audiences","Provides a community for pan-African collaboration and celebration","Builds continental pride and confidence through documented African excellence"];
  p.features  = ["African achievement showcase across all sectors and countries","Pan-African entrepreneur and innovator directory","Success story editorial platform with rich content","Continental collaboration and networking tools","African success media distribution reaching global audiences"];
  p.how       = ["Achiever or community nominates an African success story","Content is produced and published with rich detail and context","Community celebrates, shares, and amplifies the story globally","Innovators connect with others for collaboration and partnership","Young Africans discover role models and inspiration for their own journeys"];
  p.impact    = ["Africa's narrative shifting from victim to victor in global media","Young Africans with role models building confidence and ambition","Pan-African collaborations formed through continental networking","African achievements reaching global audiences at scale","Continental pride and self-belief growing as success is documented and shared"];
  p.nigeria   = ["Nigeria leads Africa in many sectors — its success must be part of the continental story","Pan-African solidarity benefits Nigeria's global influence and trade relationships","Nigerian innovators collaborating with continental peers multiply their impact","Africa's success is Nigeria's success — and vice versa","A continent that believes in itself builds stronger nations within it"];
  p.investors = ["Pan-African content platform with massive scale potential","Content advertising and sponsorship from continental and global brands","Premium membership for entrepreneurs seeking pan-African network access","Media licensing of African success content to international publishers","Corporate Africa brand partnership revenue"];
  p.future    = ["Annual BreaktruAfrica Awards — celebrating the continent's greatest achievements","BreaktruAfrica documentary series on African innovators and achievers","Pan-African startup collaboration platform","African success curriculum for schools across the continent","Global distribution of African achievement content to 50+ countries"];
  p.subPlatforms = [
    {name:"SuccessStories", tagline:"Africa's greatest achievements celebrated",  features:["Story archive","Country filter","Sector filter","Submission tools","Share tools"]},
    {name:"InnovatorsMap",  tagline:"African innovators connected continentally",  features:["Innovator profiles","Country directory","Collaboration tools","Project listings","Mentorship network"]},
    {name:"YoungAfrica",    tagline:"Role models for Africa's next generation",   features:["Young achiever profiles","Inspiration content","Career pathway guides","School programme tools","Youth community"]},
    {name:"AfricaMedia",    tagline:"African success content for global audiences",features:["Content distribution","Media partnership tools","Press release tools","Story pitching","International reach analytics"]},
    {name:"PanAfricaNet",   tagline:"Continental business and partnership network",features:["Business directory","Partnership matching","Trade opportunity board","Continental events","Investment connect"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ROBOTAI
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="robotai";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RobotAI is Nigeria's platform for artificial intelligence and robotics — connecting researchers, developers, businesses, and students to Nigeria's AI and robotics ecosystem. From machine learning to automation, from computer vision to intelligent systems, RobotAI builds the knowledge, community, and infrastructure Nigeria needs to lead Africa's AI revolution. Nigeria's AI and Robotics Future starts here.";
  p.problem   = ["Nigeria has almost no organized AI and robotics development community or infrastructure.","AI talent is being trained in Nigeria but leaving for better opportunities abroad.","Businesses want to adopt AI but cannot find Nigerian expertise or solutions.","AI literacy among the general population and policymakers is extremely low.","Nigeria risks becoming a consumer rather than producer of AI technology.","No platform connects Nigeria's AI researchers, developers, and practitioners."];
  p.who       = ["AI and machine learning researchers and developers in Nigeria","Computer science students and graduates entering AI careers","Businesses seeking AI solutions for Nigerian industry problems","Government agencies exploring AI for public service delivery","Robotics engineers and automation specialists"];
  p.does      = ["Builds Nigeria's AI and robotics developer and researcher community","Provides AI education and learning resources for all levels","Connects businesses to Nigerian AI solutions and developers","Supports AI policy development with technical knowledge and community input","Showcases Nigerian AI innovations to the world"];
  p.features  = ["AI and robotics developer community platform","AI education library from basics to advanced machine learning","Nigerian AI startup and solution showcase","Business AI adoption guide and solution matching","AI policy and regulation tracker for Nigeria"];
  p.how       = ["Developer joins community and connects with AI peers across Nigeria","Student accesses learning resources and builds practical AI skills","Business explores AI solutions and connects to Nigerian AI developers","Researcher publishes work and finds collaboration partners","Policymaker accesses AI literacy content and community input on regulation"];
  p.impact    = ["Nigeria's AI developer community organized and accelerating","Businesses adopting AI solutions built in Nigeria","AI brain drain reduced as talent finds community and opportunity at home","Policymakers making informed AI regulation decisions","Nigeria recognized as a serious AI development nation in Africa"];
  p.nigeria   = ["AI will reshape every sector of Nigeria's economy — Nigeria must build, not just consume","Nigerian AI developers are building globally competitive solutions — they need a home platform","Government AI adoption can transform public service delivery at scale","AI literacy at population level prepares Nigeria for the automation future","Africa's AI leader will be whichever nation organizes its talent first — Nigeria must seize that role"];
  p.investors = ["AI platform serving one of Africa's largest technology talent pools","Developer tools and community subscription revenue","Business AI solution matching and implementation fees","Government AI advisory and training programme contracts","International tech company partnership for Nigerian AI talent access"];
  p.future    = ["Nigerian AI research institute coordination platform","Annual Nigeria AI Summit powered by RobotAI","AI for Agriculture, Health, and Education challenge competitions","Government AI procurement fast-track for Nigerian solutions","Pan-African AI research collaboration platform"];
  p.subPlatforms = [
    {name:"AILearn",       tagline:"AI and machine learning education for Nigeria",features:["Beginner to advanced content","Python and ML guides","Project tutorials","Certification prep","Video courses"]},
    {name:"DevAI",         tagline:"Nigeria's AI developer community",            features:["Developer profiles","Project collaboration","Code sharing","Job board","Research sharing"]},
    {name:"AIShowcase",    tagline:"Nigerian AI innovations for the world",        features:["Product demos","Startup profiles","Solution catalogue","Award nominations","Media tools"]},
    {name:"BizAI",         tagline:"AI adoption guide for Nigerian businesses",   features:["Use case explorer","Solution matching","ROI assessment","Implementation partners","Case studies"]},
    {name:"AIPolicy",      tagline:"AI regulation and policy for Nigeria",        features:["Policy tracker","Regulation comparison","Community input tools","Technical briefings","Stakeholder consultation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ROBOTECH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="robotech";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "RoboTech is Nigeria's platform for robotics education, competition, and innovation — where young Nigerians learn to design, build, and program robots that solve real problems. From school robotics clubs to university engineering teams, from hobbyists to professional robotics engineers, RoboTech provides the tools, community, and competitions that make robotics exciting, accessible, and career-defining in Nigeria. Building the Future.";
  p.problem   = ["Robotics is almost entirely absent from Nigerian school and university curricula.","Young Nigerians with interest in building and engineering have no robotics pathway.","Robotics components and resources are expensive and hard to source in Nigeria.","No organized national robotics competition or community exists for young builders.","Nigeria is consuming robotics technology without producing any of it."];
  p.who       = ["Secondary school and university students interested in building and engineering","Science and technology teachers seeking robotics curriculum tools","Robotics clubs and after-school engineering programmes","Engineering graduates entering robotics and automation careers","Businesses seeking Nigerian robotics solutions and talent"];
  p.does      = ["Provides robotics education content from beginner to advanced levels","Hosts national robotics competitions celebrating Nigerian builders","Connects students to robotics components, tools, and resources","Builds robotics clubs in schools with management and content tools","Showcases Nigerian robotics innovations to industry and investors"];
  p.features  = ["Robotics education library — mechanics, electronics, programming, and design","National robotics competition platform with team registration and judging","Robotics component and resource directory for Nigerian builders","School robotics club management and curriculum tools","Nigerian robotics showcase connecting builders to industry"];
  p.how       = ["Student accesses robotics learning content at their level","Joins or starts a school robotics club with platform support","Enters national robotics competition with their team and project","Showcases completed robot to the national community","Connects with industry for internship and career opportunities"];
  p.impact    = ["Thousands of young Nigerians learning to build robots and automated systems","National robotics competition celebrating Nigerian engineering talent","School robotics clubs transforming engineering culture in Nigerian schools","Nigeria producing robotics engineers who build solutions locally","Industry finding and hiring Nigerian robotics talent through organized pathway"];
  p.nigeria   = ["Automation and robotics will reshape Nigerian manufacturing and services — Nigeria must prepare","Young Nigerians who build robots develop problem-solving skills Nigeria urgently needs","National robotics competitions build engineering culture and national pride","Local robotics capability reduces dependence on expensive foreign automation solutions","Nigeria's manufacturing ambition requires a pipeline of robotics engineers"];
  p.investors = ["Robotics education platform attracting manufacturing sector and government investment","School subscription revenue and club management tools","Competition sponsorship from engineering and technology companies","Component marketplace transaction revenue","Government technical education programme implementation contracts"];
  p.future    = ["Annual National Robotics Championship — Nigeria's biggest engineering competition","RoboTech labs in all six geopolitical zones","Robotics apprenticeship matching young engineers to industry","Nigerian robotics innovation prize fund","Pan-African robotics competition connecting African student engineers"];
  p.subPlatforms = [
    {name:"BuildLearn",    tagline:"Robotics education step by step",            features:["Beginner builds","Electronics basics","Programming guides","Mechanical design","Video tutorials"]},
    {name:"RoboComp",      tagline:"National robotics competition platform",     features:["Team registration","Project submission","Judging system","Leaderboard","Prize management"]},
    {name:"PartsFinder",   tagline:"Robotics components for Nigerian builders",  features:["Component directory","Supplier listings","Price comparison","Import guides","Community sourcing tips"]},
    {name:"ClubBuilder",   tagline:"Start and manage your robotics club",        features:["Club registration","Member management","Project calendar","Curriculum tools","Competition entry"]},
    {name:"RoboShowcase",  tagline:"Nigerian robotics talent for industry",      features:["Project gallery","Builder profiles","Industry connect","Internship listings","Innovation awards"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LABSPACE
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="labspace";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LabSpace is Nigeria's open innovation and research platform — a digital laboratory where ideas are tested, projects are built, and knowledge is shared freely. From university research to independent maker projects, from scientific experiments to social innovation, LabSpace gives every Nigerian innovator a space to create, collaborate, and contribute to the knowledge that builds a better nation. Where Ideas Become Reality.";
  p.problem   = ["Nigerian research and innovation is fragmented with almost no cross-institutional collaboration.","University research rarely leaves the campus to become useful solutions.","Independent makers and innovators have no platform for sharing and developing their work.","Research tools, data, and resources are not shared across Nigerian institutions.","Nigeria's innovation output is low relative to the talent available because the ecosystem is poorly connected."];
  p.who       = ["University researchers and academics across all Nigerian institutions","Independent makers, hackers, and innovation enthusiasts","Science and engineering students working on research projects","Social innovators developing solutions to Nigerian problems","Businesses seeking research partnerships and innovation collaboration"];
  p.does      = ["Provides an open platform for Nigerian research and innovation projects","Enables cross-institutional research collaboration and knowledge sharing","Connects makers and innovators with resources, tools, and peers","Facilitates research-to-application pathways for university output","Showcases Nigerian innovation to the world and to potential investors"];
  p.features  = ["Open innovation project platform — share, collaborate, and build","Research paper and knowledge sharing repository","Maker tools and resource directory for Nigerian innovators","Cross-institutional collaboration matching platform","Innovation showcase connecting projects to investors and industry"];
  p.how       = ["Innovator creates project page and shares their work openly","Collaborators discover and join the project with relevant skills","Resources and tools are shared through the open platform","Research is published and connected to potential applications","Completed innovations are showcased to industry, government, and investors"];
  p.impact    = ["Nigerian research and innovation output increasing through collaboration","University knowledge reaching real-world application more frequently","Independent innovators with resources, community, and visibility","Cross-institutional collaboration solving bigger problems together","Nigeria recognized internationally as an innovation-producing nation"];
  p.nigeria   = ["Nigeria's talent is extraordinary — its innovation ecosystem just needs connecting","University research to real application is the missing link in Nigeria's development chain","Maker culture and independent innovation can solve Nigeria-specific problems uniquely","Open knowledge sharing accelerates every aspect of Nigeria's development","A connected innovation ecosystem attracts investment and retains talent"];
  p.investors = ["Open innovation platform attracting research funding and corporate R&D partnership","Research platform licensing to universities and research institutions","Corporate innovation partnership and sponsored challenge revenue","Government research programme implementation contracts","International science and innovation funding organization partnership"];
  p.future    = ["Physical LabSpace innovation centres in all Nigerian university cities","National open data platform for Nigerian research and science","LabSpace grant fund for the most promising Nigerian innovation projects","International research collaboration platform connecting Nigeria to global science","Nigeria open innovation challenge — annual competition for the nation's best ideas"];
  p.subPlatforms = [
    {name:"OpenProjects",  tagline:"Share and build innovation openly",          features:["Project creation","Collaboration tools","Progress tracking","Open publishing","Community feedback"]},
    {name:"ResearchShare", tagline:"Nigerian research knowledge repository",     features:["Paper submissions","Knowledge library","Citation tools","Download access","Subject categories"]},
    {name:"MakerTools",    tagline:"Resources for Nigerian makers and builders", features:["Tool directory","Equipment sharing","Supplier listings","Tutorial library","Maker community"]},
    {name:"ColabMatch",    tagline:"Connect researchers and innovators",          features:["Skill matching","Institution connect","Project collaboration","Joint publication tools","Resource sharing"]},
    {name:"InnovaShowcase",tagline:"Nigerian innovation for the world",          features:["Project gallery","Investor connect","Media tools","Award nominations","Impact documentation"]}
  ];
})();


// ============================================================
//  FULL CONTENT — DEFENTECH
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="defentech";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "DefenTech is Nigeria's platform for defense technology knowledge, industry development, and civic engagement with national security matters. It serves as the educational and industry-connecting infrastructure for Nigeria's defense sector — making defense technology accessible to students, researchers, and industry professionals while supporting the development of a domestic Nigerian defense industry. Nigeria's Defense Industry and Military Technology Platform.";
  p.problem   = ["Nigeria imports nearly all its defense equipment at enormous cost to the nation.","There is no organized platform for Nigeria's defense technology education and industry.","Defense sector knowledge is inaccessible to students and researchers in Nigeria.","Nigeria's domestic defense industry potential is severely underdeveloped.","Public understanding of Nigeria's national security technology needs is almost nonexistent."];
  p.who       = ["Defense technology researchers and engineers","Military science and engineering students","Defense industry businesses and manufacturers","Government defense procurement and policy officials","Security analysts and national defense researchers"];
  p.does      = ["Provides defense technology education content accessible to researchers and students","Connects Nigeria's defense industry ecosystem — manufacturers, researchers, and procurement","Supports the development of domestic Nigerian defense solutions","Delivers national defense industry news and analysis","Facilitates defense technology research collaboration across Nigerian institutions"];
  p.features  = ["Defense technology education library for students and researchers","Nigerian defense industry directory and marketplace","Research collaboration tools for defense engineers and scientists","Defense procurement news and policy tracker","National security technology innovation showcase"];
  p.how       = ["Student or researcher accesses defense technology education content","Defense business lists capabilities and connects to procurement opportunities","Research collaboration is facilitated through secure platform tools","Industry news and procurement updates are delivered in real time","Domestic defense innovations are showcased to government and industry"];
  p.impact    = ["More Nigerians trained in defense technology and engineering","Domestic defense industry developing reducing dependence on imports","Defense research collaboration producing solutions to Nigeria's security challenges","Government procurement increasingly considering Nigerian-made defense solutions","Nigeria's national security strengthened through domestic defense capability"];
  p.nigeria   = ["Nigeria spends billions annually on imported defense equipment — domestic production is essential","Defense technology education creates high-value careers for Nigerian engineers","Domestic defense capability is a strategic national security imperative","Nigeria's defense industry can generate export revenue and regional influence","Building defense technology capacity is essential for Nigeria's strategic autonomy"];
  p.investors = ["Defense industry platforms attract government and strategic investment","Defense procurement intelligence subscription services","Industry directory and capability listing subscription revenue","Research partnership and collaboration facilitation fees","Government defense technology programme advisory contracts"];
  p.future    = ["Nigerian Defense Technology Institute coordination platform","Domestic defense procurement fast-track for Nigerian manufacturers","Defense technology innovation prize for Nigerian engineers","Regional defense industry cooperation platform for West Africa","Integration with Ministry of Defense procurement systems"];
  p.subPlatforms = [
    {name:"DefenseLearn",  tagline:"Defense technology education for Nigeria",   features:["Technology library","Military science content","Engineering guides","Career pathways","Research resources"]},
    {name:"IndustryConnect",tagline:"Nigeria's defense industry ecosystem",      features:["Manufacturer directory","Capability listings","Procurement news","Industry events","Partnership tools"]},
    {name:"DefenseResearch",tagline:"Defense technology research collaboration", features:["Research project listing","Institution connect","Secure collaboration tools","Publication sharing","Innovation showcase"]},
    {name:"ProcureTrack",  tagline:"Defense procurement and policy tracker",     features:["Procurement news","Policy updates","Budget analysis","International comparison","Contract awards"]},
    {name:"NaijaDefense",  tagline:"Showcasing Nigerian defense innovations",    features:["Innovation gallery","Domestic solution profiles","Government connect","Export potential assessment","Awards recognition"]}
  ];
})();


// ============================================================
//  FULL CONTENT — POLICYDECODED
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="policydecoded";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "PolicyDecoded is the platform that translates Nigeria's government policies, budgets, and official documents into language every Nigerian can read, understand, and act on. Government documents are written by officials, for officials — PolicyDecoded rewrites them for the 220 million Nigerians they actually affect. Government Made Simple.";
  p.problem   = ["Government policy documents are written in language inaccessible to most Nigerians.","Budgets are published but never explained to the citizens whose money they represent.","Policy changes affect millions without those millions understanding what changed.","Civil society and media lack a central resource for policy plain-language analysis.","Citizens cannot hold government accountable for policies they cannot understand."];
  p.who       = ["Citizens wanting to understand government policies affecting them","Civil society organizations tracking policy implementation","Journalists covering government and policy","Business owners needing to understand regulatory changes","Students studying government, politics, and public administration"];
  p.does      = ["Translates government policies into plain, accessible language","Explains federal and state budgets in terms every Nigerian understands","Tracks policy changes and explains their implications","Provides civil society and media with reliable plain-language policy analysis","Builds policy literacy across Nigerian society"];
  p.features  = ["Policy plain-language library covering all major active policies","Federal and state budget explainer with visual breakdowns","Policy change alert and impact analysis tool","Civil society and media reference database","Policy literacy education content for citizens and schools"];
  p.how       = ["Government releases a new policy or budget document","PolicyDecoded team produces a plain-language explanation within 48 hours","Explanation is published freely and shared widely","Citizens, civil society, and media access and use the content","Policy impact is tracked and updated as implementation progresses"];
  p.impact    = ["Millions of Nigerians understanding policies that affect their lives","Budget debates informed by citizens who actually understand the numbers","Policy accountability improved through widespread citizen comprehension","Civil society and media better equipped to monitor government","A more informed Nigerian public engaging meaningfully with governance"];
  p.nigeria   = ["Government opacity is a deliberate and accidental product of inaccessible language — PolicyDecoded fixes both","Budget understanding is essential for citizen oversight of public funds","Policy literacy is the foundation of genuine democratic participation","Nigeria's development requires citizens who can engage with the policies shaping it","Government accountability starts with citizens who understand what government is doing"];
  p.investors = ["Policy platform attracting civil society, media, and government transparency funding","Research institution data subscription revenue","Media organization content licensing","Government communication programme partnership opportunities","International democracy and transparency organization funding"];
  p.future    = ["AI-powered real-time policy translation as documents are released","State-level policy explainer covering all 36 states and FCT","School curriculum integration for civic and government literacy","PolicyDecoded app with push notifications for new policy explanations","Integration with NaijyPolicy for citizen participation tools"];
  p.subPlatforms = [
    {name:"PolicyPlain",   tagline:"Government policy in plain language",         features:["Policy summaries","Plain explanations","Impact analysis","Category browsing","Search tools"]},
    {name:"BudgetDecoded", tagline:"Understanding Nigeria's budgets",             features:["Federal budget explainer","State budget summaries","Visual breakdowns","Per-citizen analysis","Year-on-year comparison"]},
    {name:"PolicyAlert",   tagline:"Track policy changes and their impact",       features:["Change notifications","Impact assessment","Sector-specific alerts","Timeline tracking","Comparison tools"]},
    {name:"MediaRef",      tagline:"Reliable policy reference for journalists",   features:["Policy database","Background briefings","Historical context","Expert quotes","Fact-check tools"]},
    {name:"PolicyLearn",   tagline:"Policy literacy for Nigerian citizens",       features:["How government works","Policy process guides","Budget literacy tools","Civic education content","School curriculum tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — ELECTCONNECT
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="electconnect";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "ElectConnect is Nigeria's comprehensive electoral platform — connecting voters, candidates, observers, and electoral management bodies in one transparent digital ecosystem. From voter registration guides to result tracking, from candidate information to election observation coordination, ElectConnect makes Nigeria's electoral process more informed, more transparent, and more trusted. Connecting the Electoral System for a stronger Nigerian democracy.";
  p.problem   = ["Voter apathy in Nigeria is driven partly by ignorance of the electoral process and candidates.","Electoral information is fragmented and often unreliable during election periods.","Election result tracking is opaque, slow, and prone to manipulation claims.","Voter registration and verification processes are confusing and poorly communicated.","Election observation is uncoordinated with observers having no shared platform."];
  p.who       = ["Nigerian voters seeking reliable electoral information and candidate profiles","Political candidates and parties communicating with voters","Domestic and international election observers","INEC and state electoral commission officials","Civil society organizations monitoring electoral integrity"];
  p.does      = ["Provides comprehensive, verified candidate profiles for all elections","Guides voters through registration, verification, and voting processes","Tracks and publishes election results transparently as they arrive","Coordinates election observation across all polling units","Monitors and documents electoral irregularities for accountability"];
  p.features  = ["Candidate profile database with verified background and manifesto content","Voter guide — registration, PVC collection, polling unit locator, voting process","Real-time election result tracker by state, LGA, and ward","Observer coordination tools and incident reporting system","Electoral irregularity reporting with evidence upload"];
  p.how       = ["Voter searches for their candidates and reads verified profiles","Follows voter guide for registration through to election day preparation","Watches real-time result tracker as votes are counted and collated","Observer registers, is assigned to polling unit, and files reports through platform","Electoral incidents are reported with evidence and published transparently"];
  p.impact    = ["More informed Nigerian voters making better electoral decisions","Electoral transparency improved through real-time result tracking","Voter suppression and irregularities documented and escalated faster","Observation better coordinated across all Nigerian elections","Nigeria's electoral integrity and public trust in elections improving"];
  p.nigeria   = ["Electoral integrity is the foundation of Nigeria's democratic legitimacy","Informed voters are the most powerful check on electoral manipulation","Result transparency reduces the disputed election crises that have caused violence","Observation coordination strengthens the institutions that protect Nigerian democracy","ElectConnect is infrastructure for the democracy Nigeria deserves"];
  p.investors = ["Electoral platform with civil society, international observer, and government funding potential","Candidate profile and campaign tool subscription revenue","Observer coordination programme contracts","NGO and international election monitoring organization partnership","Government electoral communication platform contracts"];
  p.future    = ["Biometric voter verification integration with INEC systems","AI-powered result anomaly detection flagging suspicious patterns","Post-election analysis and accountability platform","Constituency-level representative performance tracker after election","Pan-African electoral transparency platform"];
  p.subPlatforms = [
    {name:"CandidateFile",  tagline:"Verified profiles for every candidate",     features:["Candidate backgrounds","Manifesto content","Track record","Education verification","Contact tools"]},
    {name:"VoterReady",     tagline:"Everything a Nigerian voter needs",         features:["Registration guide","PVC verification","Polling unit locator","Voting process guide","Election date alerts"]},
    {name:"ResultWatch",    tagline:"Real-time election result tracking",        features:["Live result feed","State-by-state breakdown","Historical comparison","Collation tracking","Official vs reported comparison"]},
    {name:"ObserverNet",    tagline:"Coordinate election observation",           features:["Observer registration","Polling unit assignment","Report submission","Incident logging","Coordination dashboard"]},
    {name:"ElectReport",    tagline:"Report and track electoral irregularities", features:["Incident reporting","Evidence upload","Location tagging","Agency routing","Public incident map"]}
  ];
})();


// ============================================================
//  FULL CONTENT — CIVICPOLITICS
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="civicpolitics";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "CivicPolitics is the platform where Nigerian citizens and political power meet — enabling active civic participation in political discourse, policy advocacy, and community political action. Beyond voting, CivicPolitics creates the everyday engagement that sustains democracy between election cycles. Where Citizens Meet Power — and hold it accountable.";
  p.problem   = ["Nigerian civic participation is limited almost entirely to elections — then disengagement follows.","Political discourse is dominated by elite voices with ordinary Nigerian voices largely absent.","Citizens cannot easily organize around political issues affecting their communities.","Political knowledge and civic education are not organized or accessible to most Nigerians.","The gap between citizens and political power is vast — CivicPolitics bridges it."];
  p.who       = ["Citizens who want to engage actively with politics beyond voting","Community leaders organizing civic advocacy campaigns","Youth entering political engagement for the first time","Political researchers and civic educators","Civil society organizations coordinating political advocacy"];
  p.does      = ["Provides a platform for organized civic political engagement","Enables petition campaigns, advocacy drives, and political messaging to officials","Delivers civic and political education in accessible formats","Connects citizens to their representatives with organized accountability tools","Builds civic political capacity across Nigerian communities"];
  p.features  = ["Civic advocacy campaign builder with petition and messaging tools","Political representative contact and accountability directory","Civic and political education content library","Community political discussion and deliberation tools","Political issue tracking from community level to national policy"];
  p.how       = ["Citizen identifies a political issue affecting their community","Creates or joins a campaign with petition, advocacy letters, and media tools","Sends organized, documented messages to relevant representatives","Tracks representative response and holds them accountable publicly","Issue moves from community campaign to policy change through organized pressure"];
  p.impact    = ["Nigerian civic participation extending beyond elections into everyday engagement","Political representatives aware that citizens are watching and organizing","Community political advocacy producing real policy and service changes","A generation of civically active Nigerians comfortable engaging political power","Nigeria's democracy deepening through sustained citizen engagement with governance"];
  p.nigeria   = ["Democracy requires active citizens — CivicPolitics builds them","Political change in Nigeria will come from organized citizen pressure — CivicPolitics organizes it","Youth civic engagement is essential for Nigeria's democratic future","Community political action is more powerful than individual complaint","A civically active citizenry is Nigeria's most powerful anti-corruption tool"];
  p.investors = ["Civic platform attracting international democracy organization funding","Civil society programme management tool subscription revenue","Government civic education programme contracts","Corporate civic engagement CSR programme partnerships","Research institution civic data licensing"];
  p.future    = ["Virtual town hall infrastructure connecting citizens to representatives","AI political assistant helping citizens draft effective advocacy messages","National civic action index measuring Nigerian civic participation levels","Integration with government petition and public consultation systems","Pan-African civic engagement platform"];
  p.subPlatforms = [
    {name:"CivicCampaign",  tagline:"Organize political advocacy campaigns",     features:["Campaign builder","Petition tools","Advocacy letter generator","Supporter tracking","Social sharing"]},
    {name:"RepDirectory",   tagline:"Contact and track your representatives",    features:["Rep profiles","Contact tools","Voting records","Attendance data","Response tracking"]},
    {name:"PoliticLearn",   tagline:"Civic and political education for all",     features:["How government works","Rights and responsibilities","Political process guides","Youth content","School curriculum tools"]},
    {name:"IssueForum",     tagline:"Community political discussion platform",   features:["Issue discussion boards","Moderated debates","Expert contributions","Position polling","Evidence sharing"]},
    {name:"ChangeTracker",  tagline:"Track civic campaigns to policy change",    features:["Campaign milestone tracking","Government response logging","Victory documentation","Impact reporting","Inspire others tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LEGACYHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="legacyhub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LegacyHub is Nigeria's platform for preserving personal, family, and institutional legacies — ensuring that the stories, achievements, histories, and memories that matter most are captured, protected, and passed to future generations. From family histories to professional achievements, from community oral histories to institutional records, LegacyHub secures what must not be lost. Your Legacy, Secured Forever.";
  p.problem   = ["Nigerian family histories and oral traditions are disappearing as elders pass without documentation.","Personal and professional achievements are poorly recorded and rarely passed to future generations.","Community and institutional histories are lost due to poor archiving and documentation culture.","Digital memories are fragile — photos, videos, and documents stored only on phones disappear easily.","Nigeria's extraordinary living history is not being captured at the rate it is being lost."];
  p.who       = ["Families wanting to document and preserve their history and stories","Individuals creating a professional and personal legacy record","Community organizations archiving local history and achievements","Institutions preserving organizational history and milestones","Elders whose knowledge and stories must be captured before they are lost"];
  p.does      = ["Provides secure digital legacy vaults for family and personal histories","Enables structured capture of oral histories, life stories, and achievements","Preserves photos, videos, and documents in organized, permanent digital archives","Creates living family trees with multimedia story integration","Connects families and communities to professional legacy documentation support"];
  p.features  = ["Personal and family digital legacy vault with multimedia support","Structured life story capture — guided by questions and prompts","Oral history recording and transcription tools","Family tree builder with story, photo, and video integration","Institutional history archive builder for organizations and communities"];
  p.how       = ["User creates a legacy vault for themselves or their family","Adds photos, videos, documents, and written stories with context","Uses guided prompts to capture structured life history","Family members contribute to a shared family legacy","Archive is secured, organized, and shareable with future generations"];
  p.impact    = ["Nigerian family and community histories preserved for future generations","Personal legacies documented and honored rather than forgotten","Oral histories of elders captured before that knowledge is lost permanently","Communities with organized archives of their identity and achievements","A permanent, growing Nigerian living heritage captured in digital form"];
  p.nigeria   = ["Nigeria's oral tradition is one of its greatest cultural treasures — it must be digitized","Elders are dying with irreplaceable knowledge that no one is capturing systematically","Family histories connect Nigerians to their identity, roots, and sense of self","Institutional legacies teach future leaders from the wisdom of the past","A nation that preserves its history understands its present and plans its future better"];
  p.investors = ["Digital legacy platforms attract family history, genealogy, and cultural heritage funding","Premium vault subscription for advanced storage and features","Professional legacy documentation service fees","Institutional archive programme subscription revenue","Partnership with National Archives, NAN, and cultural institutions"];
  p.future    = ["AI-powered life story interviewer creating structured legacy documents automatically","Video call legacy recording tool connecting remote family members","Nigeria National Living Heritage Archive powered by LegacyHub","Integration with vital records and NPC population data","Pan-African living heritage platform connecting African families to their roots"];
  p.subPlatforms = [
    {name:"FamilyVault",    tagline:"Secure your family's history forever",       features:["Photo archive","Story vault","Document storage","Family tree","Shared access controls"]},
    {name:"LifeStory",      tagline:"Capture your complete life story",           features:["Guided story prompts","Timeline builder","Achievement record","Memory journal","Voice recording"]},
    {name:"OralHistory",    tagline:"Record elder wisdom before it's lost",       features:["Interview recording","Transcription tools","Cultural context capture","Sharing tools","Archive organization"]},
    {name:"FamilyTree",     tagline:"Build your family tree with stories",        features:["Relationship mapping","Generation tracking","Story integration","Photo linking","DNA insight connection"]},
    {name:"InstitutionArk", tagline:"Preserve your organization's history",      features:["Milestone archive","Leadership history","Achievement documentation","Document library","Anniversary tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LOCAGOV
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="locagov";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LocaGov is Nigeria's local government accountability and engagement platform — bringing government services, information, and citizen engagement to the grassroots level where 774 LGAs operate. Local government is the tier closest to Nigerians — yet it is the least transparent, the most poorly managed, and the most removed from digital infrastructure. LocaGov changes that. Governance at Your Doorstep.";
  p.problem   = ["Nigeria's 774 LGAs operate with almost no digital infrastructure or citizen engagement.","Local government allocation and spending is almost entirely opaque to citizens.","Basic service delivery failures at LGA level go unreported and unresolved.","Citizens cannot access information about their local council's activities and budget.","LGA officials have no digital tools for efficient service delivery and citizen communication.","Local elections are poorly organized, poorly covered, and widely distrusted."];
  p.who       = ["Citizens of all 774 LGAs seeking local government accountability","LGA chairmen and councillors wanting to communicate with constituents","State governments monitoring LGA performance and service delivery","Civil society organizations tracking local government accountability","Community leaders engaging their local government on service delivery issues"];
  p.does      = ["Creates digital profiles for all 774 Nigerian LGAs with verified information","Tracks LGA budget allocation, spending, and service delivery performance","Enables citizens to report local government failures and demand accountability","Provides LGA officials with digital communication and service delivery tools","Publishes local election information and candidate profiles"];
  p.features  = ["774 LGA digital directory with officials, contacts, and service information","LGA budget and allocation tracker with spending transparency","Citizen service failure reporting tool with LGA routing","LGA official communication and announcement tools","Local government performance scorecard updated quarterly"];
  p.how       = ["Citizen accesses their LGA's digital profile with officials and service information","Reports a local service failure through the platform with evidence","LGA receives the report and is tracked for response and resolution","Budget allocation and spending is published and compared to service outcomes","Citizens rate their LGA's performance contributing to the public scorecard"];
  p.impact    = ["Nigeria's 774 LGAs with digital accountability infrastructure for the first time","Local government allocation spending publicly tracked reducing leakage","Citizens able to report and demand resolution of local service failures","LGA officials communicating more effectively with constituents","Local governance quality improving under sustained public visibility"];
  p.nigeria   = ["LGA dysfunction is felt by more Nigerians more directly than any other tier of government","Local government allocation of N1.9T annually requires citizen oversight","Grassroots accountability is the foundation of genuine national development","Digital LGA infrastructure is essential for Nigeria's smart governance goals","A functional LGA system reduces the burden on state and federal government"];
  p.investors = ["LGA platform with 774 institutional clients and massive citizen user base","LGA communication and service management subscription revenue","State government monitoring platform contract opportunities","Civil society programme management tool licensing","International local governance and development organization funding"];
  p.future    = ["Real-time LGA service delivery tracking with citizen verification","LGA procurement transparency register for all contracts","Local revenue generation intelligence helping LGAs raise their own IGR","Integration with OAGF and state accountant-general financial systems","Physical LocaGov citizen service centres in all 774 LGAs"];
  p.subPlatforms = [
    {name:"LGAProfile",    tagline:"Your local government's complete digital profile",features:["Council officials","Contact information","Service directory","Meeting minutes","Announcement board"]},
    {name:"LGABudget",     tagline:"Track your LGA's allocation and spending",   features:["Allocation data","Spending tracker","Project registry","Variance analysis","Citizen guide to LGA finance"]},
    {name:"ServiceReport", tagline:"Report local government service failures",   features:["Service failure report","Agency routing","Evidence upload","Resolution tracking","Community upvote"]},
    {name:"LGAScore",      tagline:"Performance scorecards for all 774 LGAs",   features:["Delivery rating","Peer comparison","Trend tracking","Citizen ratings","Improvement indicators"]},
    {name:"LocalElect",    tagline:"Local election information and candidates",  features:["Candidate profiles","Election dates","Polling unit finder","Result tracking","Observer tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — EASYGOV
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="easygov";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "EasyGov is the platform that makes dealing with Nigerian government actually easy — a single digital portal where citizens can access government services, complete applications, track requests, and get help navigating bureaucracy without the queues, the confusion, and the corruption that currently defines the experience. Government, Simplified.";
  p.problem   = ["Accessing Nigerian government services requires physical visits, long queues, and opaque processes.","Multiple agencies handle different services with no coordination or single access point.","Citizens are vulnerable to extortion because processes are unclear and non-digital.","Government forms and applications are confusing, paper-based, and poorly documented.","There is no single platform guiding Nigerians through all government service processes."];
  p.who       = ["All Nigerian citizens requiring government services of any kind","Businesses navigating regulatory registration and compliance processes","Diaspora Nigerians accessing Nigerian government services from abroad","Government agencies improving their service delivery to citizens","Civil servants seeking to serve citizens more efficiently with digital tools"];
  p.does      = ["Aggregates all government services into one searchable digital portal","Guides citizens step by step through every government service process","Enables online application, submission, and tracking for available services","Reduces opportunities for corruption through clear, documented processes","Supports diaspora access to Nigerian government services from anywhere in the world"];
  p.features  = ["Comprehensive government service directory — all agencies, all services","Step-by-step service guides for every common government interaction","Online application tools for available digital government services","Application status tracker from submission through to completion","Corruption prevention tools — know what is required, what it costs, and who to contact"];
  p.how       = ["Citizen searches for the government service they need","Platform provides a complete step-by-step guide to accessing it","Where available, online application is submitted through the platform","Status is tracked and citizen is notified at each stage","Corruption attempts are reported through the platform's integrity reporting tool"];
  p.impact    = ["Millions of Nigerians accessing government services faster and with less stress","Corruption in government service delivery reduced through transparent, documented processes","Diaspora Nigerians able to access Nigerian services without flying home","Government agencies improving service delivery under organized citizen feedback","A more functional citizen-government relationship built on clarity and efficiency"];
  p.nigeria   = ["Nigeria's bureaucratic inefficiency costs citizens billions in time, money, and lost opportunity","Government service corruption thrives on opacity — EasyGov makes processes visible and documented","Diaspora Nigerians spending thousands to fly home for services that should be online","Digital government services are a constitutional right Nigerians are not yet receiving","Every hour saved in government queues is an hour returned to Nigeria's productivity"];
  p.investors = ["Digital government services platform with government contract and citizen adoption potential","Premium service facilitation fees for complex government applications","Government agency service digitization implementation contracts","Corporate compliance and regulatory navigation subscription tools","International development bank funding for government digital service reform"];
  p.future    = ["Full e-government integration — apply for every Nigerian service online","EasyGov app with offline mode for low-connectivity users","AI government service assistant guiding citizens 24/7","Integration with all federal and state agency digital portals","Biometric verification for secure online government service access"];
  p.subPlatforms = [
    {name:"ServiceFinder",  tagline:"Find any government service instantly",      features:["Search by need","Agency directory","Service categories","Location filter","Contact details"]},
    {name:"ServiceGuide",   tagline:"Step-by-step government service guides",     features:["Process explainers","Required documents","Cost information","Time estimates","Next steps"]},
    {name:"ApplyOnline",    tagline:"Submit government applications digitally",   features:["Online forms","Document upload","Application tracking","Confirmation receipts","Status notifications"]},
    {name:"TrackRequest",   tagline:"Monitor your government application status", features:["Status dashboard","Stage updates","Delay alerts","Contact tools","Escalation option"]},
    {name:"IntegrityReport",tagline:"Report corruption in government services",   features:["Extortion report","Agency routing","Anonymous option","Evidence upload","Pattern tracking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MAKERSHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="makershub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MakersHub is Nigeria's manufacturing and production platform — connecting manufacturers, fabricators, artisans, and industrial producers in one organized digital marketplace. From the Aba shoe maker to the Kano leather worker, from the Lagos furniture manufacturer to the Jos ceramics producer, MakersHub gives Nigeria's makers the platform to reach buyers, grow markets, and build the manufacturing future the nation needs. Building What Builds the Nation.";
  p.problem   = ["Nigerian manufacturers and producers have almost no organized digital marketplace.","Made-in-Nigeria products struggle to reach buyers beyond local markets.","Manufacturing businesses cannot easily find verified suppliers and raw material sources.","Nigeria's production capacity is enormous but poorly connected to markets and buyers.","Manufacturing skills and knowledge are not organized or shared across the sector."];
  p.who       = ["Manufacturers and producers across all sectors and scales","Fabricators, artisans, and small-scale industrial producers","Raw material suppliers and industrial input providers","Buyers and retailers seeking Nigerian-made products","Investors in Nigerian manufacturing and industrial production"];
  p.does      = ["Connects Nigerian manufacturers to buyers, distributors, and export markets","Lists manufacturing capabilities and production services for B2B buyers","Facilitates raw material sourcing and supplier connection","Showcases Made-in-Nigeria products to national and international buyers","Builds the Nigerian manufacturing community with knowledge sharing and industry tools"];
  p.features  = ["Manufacturing business directory with capabilities and capacity listing","Made-in-Nigeria product marketplace for direct buyer connection","Raw material and input supplier directory","Manufacturing knowledge library — production, quality, compliance","Export guide for Nigerian manufacturers reaching international markets"];
  p.how       = ["Manufacturer creates profile listing products, capabilities, and capacity","Buyers search for products or manufacturing capabilities and connect","Raw material needs are matched to verified local suppliers","Manufacturing knowledge content supports quality improvement","Export pathway guides connect manufacturers to international market opportunities"];
  p.impact    = ["Nigerian manufacturers connected to buyers beyond their immediate geography","Made-in-Nigeria products reaching national and international markets","Raw material sourcing more efficient reducing production costs","Manufacturing knowledge shared improving quality across the sector","Nigeria's manufacturing contribution to GDP growing through better market infrastructure"];
  p.nigeria   = ["Nigeria's import dependence can only be addressed by a thriving manufacturing sector","Made-in-Nigeria must be supported with the infrastructure to actually reach consumers","Manufacturing job creation is essential for Nigeria's economic transformation","Local production reduces forex outflow and builds economic resilience","A strong manufacturing sector is the foundation of genuine national development"];
  p.investors = ["Manufacturing platform serving a market with enormous import substitution opportunity","Product marketplace transaction and listing fees","Manufacturing capability subscription for B2B discovery","Export facilitation partnership revenue","Government manufacturing development programme contracts"];
  p.future    = ["Made-in-Nigeria global export platform reaching international buyers directly","Manufacturing quality certification programme building consumer trust","Raw material exchange platform for industrial inputs","Manufacturing investment showcase connecting local factories to capital","Integration with SON, NAFDAC, and standards bodies for product certification"];
  p.subPlatforms = [
    {name:"MadeInNaija",    tagline:"Nigerian products for buyers everywhere",    features:["Product catalogue","Category browsing","Bulk buying tools","Quality ratings","Export tools"]},
    {name:"CapabilityList", tagline:"Manufacturing services for B2B buyers",     features:["Capability directory","Capacity listings","MOQ information","Custom order tools","Factory profiles"]},
    {name:"InputSourcing",  tagline:"Find Nigerian raw materials and inputs",     features:["Material directory","Supplier listings","Price comparison","Quality verification","Bulk buying tools"]},
    {name:"MakeKnow",       tagline:"Manufacturing knowledge for producers",     features:["Production guides","Quality standards","Compliance content","Technology adoption","Export readiness"]},
    {name:"MakerExport",    tagline:"Taking Nigerian products global",            features:["Export pathway guide","International buyer connect","Documentation support","Compliance tools","Market research"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MARINEHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="marinehub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MarineHub is Nigeria's digital platform for the maritime and blue economy — connecting shipping companies, port operators, fisheries, coastal communities, and maritime professionals in one organized ecosystem. Nigeria has a coastline of over 850km and some of Africa's busiest ports. MarineHub ensures that this enormous maritime advantage is fully utilized — powering the blue economy that Nigeria has barely begun to exploit. Powering the Blue Economy.";
  p.problem   = ["Nigeria's maritime sector is poorly digitized and lacks organized industry infrastructure.","Port efficiency is severely hampered by manual, disconnected processes.","Nigeria's blue economy potential — fisheries, shipping, marine tourism — is largely untapped.","Maritime professionals have no organized platform for industry information and networking.","Coastal communities dependent on marine resources are disconnected from maritime markets.","Marine safety incidents are poorly reported and tracked."];
  p.who       = ["Shipping companies, freight forwarders, and port operators","Maritime professionals — officers, engineers, and marine lawyers","Fisheries companies and artisanal fishermen","Coastal community leaders and marine resource users","Investors in Nigeria's maritime and blue economy sectors"];
  p.does      = ["Connects maritime businesses in an organized digital industry marketplace","Provides port operations information and logistics coordination tools","Supports fisheries trade and coastal community market access","Delivers maritime safety information and incident reporting","Builds Nigeria's maritime professional community digitally"];
  p.features  = ["Maritime business directory and industry networking platform","Port operations tracker and freight logistics coordination tools","Fisheries marketplace connecting fishermen to buyers","Marine safety advisory and incident reporting system","Maritime professional career and certification platform"];
  p.how       = ["Maritime business creates verified industry profile","Connects to buyers, partners, port operators, and logistics providers","Fisherman lists catch and connects to buyers through coastal marketplace","Marine safety information is accessed and incidents reported","Maritime professional builds career profile and connects to opportunities"];
  p.impact    = ["Nigeria's maritime sector more connected and efficiently organized","Port operations improved through better information and coordination","Coastal fishing communities accessing better market prices","Marine safety incidents better reported and responded to","Nigeria's blue economy developing as a major non-oil GDP contributor"];
  p.nigeria   = ["Nigeria's ports handle billions in trade annually — they need digital infrastructure","Blue economy is Nigeria's largest underdeveloped economic sector","Coastal communities are among Nigeria's most marginalized — maritime markets change that","Marine safety improvement is a national responsibility with real lives at stake","Developing the blue economy reduces Nigeria's dangerous over-dependence on oil"];
  p.investors = ["Maritime platform serving a sector worth billions annually","Freight logistics and port services subscription revenue","Fisheries marketplace transaction fees","Maritime professional certification programme revenue","Government blue economy development programme contracts"];
  p.future    = ["Real-time port congestion and vessel tracking platform","Digital Nigeria shipping line connecting ports to inland markets","Marine tourism platform showcasing Nigeria's coastal attractions","Offshore oil and gas support services marketplace","Integration with NPA, NIMASA, and all Nigerian port authorities"];
  p.subPlatforms = [
    {name:"ShipConnect",   tagline:"Nigeria's maritime business network",         features:["Shipping company profiles","Freight tools","Port directory","Charter marketplace","Logistics coordination"]},
    {name:"PortTrack",     tagline:"Port operations and cargo information",       features:["Vessel arrival/departure","Cargo status","Port performance data","Clearance timeline","Agent directory"]},
    {name:"FishMarket",    tagline:"Coastal fisheries marketplace",               features:["Fresh catch listings","Buyer matching","Price discovery","Cold chain coordination","Export tools"]},
    {name:"MarineSafe",    tagline:"Maritime safety and incident reporting",      features:["Safety advisories","Incident reports","Weather alerts","Emergency contacts","Safety regulation guides"]},
    {name:"MarineCareers", tagline:"Maritime professional platform",              features:["Seafarer profiles","Job board","Certification tracking","Training directory","Industry networking"]}
  ];
})();


// ============================================================
//  FULL CONTENT — MINESHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="mineshub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "MinesHub is Nigeria's solid minerals and mining intelligence platform — connecting miners, investors, regulators, and communities in the transparent digital ecosystem Nigeria's mining sector urgently needs. Nigeria sits on $700B+ in solid mineral wealth — gold, lithium, coal, iron ore, tin, and more — yet mines less than 1% of its potential. MinesHub is the platform that begins to change that. Unlocking Natural Wealth.";
  p.problem   = ["Nigeria's $700B+ solid mineral wealth is almost entirely unexploited.","Mining investment is deterred by poor data, opacity, and regulatory confusion.","Artisanal miners operate with no safety standards, market access, or formal support.","Mining communities suffer environmental harm without proper monitoring or compensation.","Nigeria's mining sector data is fragmented and inaccessible to investors.","Regulatory compliance in mining is poorly understood and unevenly enforced."];
  p.who       = ["Artisanal and small-scale miners across Nigeria","Mining investors and exploration companies","Ministry of Mines and Steel Development officials","Mining communities affected by mineral extraction","Researchers and geologists studying Nigeria's mineral resources"];
  p.does      = ["Maps Nigeria's mineral resources and active mining zones","Connects mining investors to licences, opportunities, and regulatory guidance","Supports artisanal miners with market access, safety, and formalization tools","Monitors environmental impact of mining on affected communities","Provides mining sector intelligence for investors and policymakers"];
  p.features  = ["Nigeria mineral resource and active mining zone map","Mining licence database and regulatory compliance guide","Artisanal miner market access and formalization tools","Mining environmental impact monitoring and community report tools","Mining investment opportunity board with due diligence support"];
  p.how       = ["Investor accesses mineral resource map and licence opportunity database","Artisanal miner registers for formalization support and market access","Regulatory compliance guide helps miners meet legal requirements","Community reports environmental mining impact through the platform","Investment opportunities are listed with geological and regulatory due diligence data"];
  p.impact    = ["Mining investment increasing as data and transparency improve","Artisanal miners formalized, safer, and earning better prices","Nigeria's solid mineral GDP contribution growing from current 0.3%","Mining communities better protected from environmental harm","Nigeria's $700B mineral potential beginning to generate national wealth"];
  p.nigeria   = ["Nigeria's solid minerals are a generational economic opportunity being wasted","Mining diversification reduces Nigeria's catastrophic oil revenue dependence","Artisanal mining employs millions in dangerous conditions — formalization saves lives","Environmental protection of mining communities is a national obligation","Every mineral dollar extracted in Nigeria should benefit Nigeria — MinesHub helps ensure it does"];
  p.investors = ["Mining intelligence platform serving a $700B+ untapped market","Investment opportunity listing and facilitation fees","Regulatory compliance tool subscription for mining companies","Government mining sector digitization programme contracts","International mining investment organization partnership funding"];
  p.future    = ["Real-time mineral price tracker for all Nigerian solid minerals","National artisanal mining registry and formalization programme platform","Environmental monitoring sensor network for active mining zones","Nigerian mineral export marketplace reaching global buyers","Integration with Mines Inspectorate Department and all regulatory bodies"];
  p.subPlatforms = [
    {name:"MineralMap",    tagline:"Nigeria's mineral resources mapped",          features:["Resource type mapping","Active zone identification","Exploration area data","Licence boundaries","Geological data"]},
    {name:"MineInvest",    tagline:"Mining investment opportunities in Nigeria",  features:["Licence database","Opportunity listings","Due diligence tools","Regulatory guide","Investor matching"]},
    {name:"ArtisanalMine", tagline:"Support for artisanal and small-scale miners",features:["Formalization guide","Market access tools","Safety resources","Buyer matching","Finance access"]},
    {name:"MineEnviro",    tagline:"Mining environmental monitoring and reporting",features:["Community impact reports","Environmental alerts","Compliance tracking","Company performance","Regulatory complaints"]},
    {name:"MineMarket",    tagline:"Solid mineral trading and price intelligence",features:["Mineral price tracker","Buyer and seller matching","Export tools","Quality standards","Market trend analysis"]}
  ];
})();


// ============================================================
//  FULL CONTENT — LOGISTICSCHAIN
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="logisticschain";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "LogisticsChain is Nigeria's end-to-end supply chain and logistics coordination platform — connecting suppliers, manufacturers, distributors, logistics operators, and retailers in one seamless digital supply chain. In a country where logistics inefficiency costs the economy billions annually, LogisticsChain brings the visibility, coordination, and intelligence that transforms Nigeria's supply chain from a constraint into a competitive advantage. Moving Supply Seamlessly.";
  p.problem   = ["Nigeria's supply chains are fragmented, opaque, and inefficient costing the economy billions.","Cargo tracking is virtually nonexistent across most Nigerian logistics operations.","Logistics operators cannot efficiently manage routes, assets, and customers digitally.","Supply chain disruptions are not detected or communicated early enough.","Importers and exporters lack visibility into their cargo movements.","Last-mile delivery in Nigeria is costly, unreliable, and poorly coordinated."];
  p.who       = ["Manufacturers managing raw material supply and finished goods distribution","Importers and exporters tracking cargo across Nigerian ports and borders","Logistics companies managing fleets, routes, and customers","Retailers managing inventory replenishment and supplier relationships","Supply chain managers seeking end-to-end visibility across their operations"];
  p.does      = ["Provides end-to-end supply chain visibility from supplier to end customer","Enables cargo tracking across all modes — road, sea, and air","Connects logistics operators for route optimization and load matching","Delivers supply chain intelligence and disruption early warning","Supports last-mile delivery coordination with real-time tracking"];
  p.features  = ["End-to-end supply chain visibility dashboard","Cargo tracking across road, port, and air freight","Logistics operator marketplace for load matching and route optimization","Supply chain disruption alert system","Last-mile delivery coordination and tracking tools"];
  p.how       = ["Shipper creates a shipment and tracks it from origin to destination","Logistics operator receives load, confirms, and provides real-time updates","Supply chain manager monitors all shipments from one dashboard","Disruption alerts trigger automatically when delays or exceptions occur","Last-mile delivery is coordinated with proof of delivery captured digitally"];
  p.impact    = ["Supply chain visibility reducing losses from theft, diversion, and damage","Logistics efficiency improving through route optimization and load matching","Disruptions detected and communicated early reducing downstream impact","Importers and exporters with confidence in their cargo movements","Nigeria's logistics sector more competitive supporting economic growth"];
  p.nigeria   = ["Logistics inefficiency adds 30%+ to the cost of goods in Nigeria — improvement benefits all","Supply chain visibility is essential for Nigeria's manufacturing and trade ambitions","Port congestion and logistics chaos cost Nigeria billions — digital coordination reduces it","E-commerce growth in Nigeria requires reliable last-mile logistics infrastructure","A competitive logistics sector is a prerequisite for industrial development"];
  p.investors = ["Logistics platform serving a sector worth trillions in annual cargo value","Shipment tracking and management subscription revenue","Load matching marketplace transaction fees","Supply chain intelligence subscription for large shippers","Government logistics and port coordination platform contracts"];
  p.future    = ["AI-powered route optimization reducing delivery costs and times","Predictive supply chain disruption modelling","Integration with NPA, FAAN, and NRC for multimodal shipment tracking","Cold chain logistics coordination for perishables","Pan-African supply chain platform connecting Nigeria to continental trade routes"];
  p.subPlatforms = [
    {name:"CargoView",     tagline:"End-to-end cargo visibility",                 features:["Shipment tracking","Milestone alerts","Exception notifications","Proof of delivery","Document management"]},
    {name:"LoadMatch",     tagline:"Connect shippers to available logistics capacity",features:["Load listings","Capacity matching","Rate comparison","Booking tools","Carrier ratings"]},
    {name:"RouteIQ",       tagline:"Route optimization for logistics operators",  features:["Route planning","Traffic integration","Fuel optimization","Multi-stop coordination","Fleet management"]},
    {name:"SupplyAlert",   tagline:"Supply chain disruption early warning",       features:["Disruption alerts","Port delay notifications","Weather impact warning","Alternative routing","Stakeholder communication"]},
    {name:"LastMile",      tagline:"Last-mile delivery coordination",             features:["Delivery scheduling","Rider tracking","Customer notifications","Proof of delivery","Failed delivery management"]}
  ];
})();


// ============================================================
//  FULL CONTENT — AIRSPACEHUB
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="airspacehub";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "AirspaceHub is Nigeria's aviation and aerospace platform — connecting aviation professionals, passengers, airports, airlines, and regulators in one organized digital ecosystem. Nigeria's aviation sector is one of Africa's busiest yet one of its most poorly digitized. AirspaceHub brings the transparency, intelligence, and connectivity the sector needs to serve Nigeria's 220 million people safely, efficiently, and with world-class standards. Naijy Aviation and Aerospace Future.";
  p.problem   = ["Nigeria's aviation sector is poorly digitized with minimal passenger information tools.","Flight information is inaccurate, late, and hard to access for Nigerian passengers.","Aviation safety incident reporting has no organized citizen or professional platform.","Nigerian aviation professionals have no organized industry community or career platform.","Aerospace development and drone technology in Nigeria lacks organized infrastructure."];
  p.who       = ["Nigerian air passengers seeking reliable flight and airport information","Aviation professionals — pilots, engineers, air traffic controllers, and cabin crew","Airlines and airport operators improving passenger communication","NCAA and aviation regulatory officials monitoring safety and compliance","Aerospace researchers and drone technology developers in Nigeria"];
  p.does      = ["Provides real-time flight information and airport status for Nigerian passengers","Enables aviation safety incident reporting with NCAA routing","Builds Nigeria's aviation professional community platform","Delivers aviation industry news, regulation updates, and career tools","Supports Nigeria's drone and aerospace technology development ecosystem"];
  p.features  = ["Real-time Nigerian flight tracker and airport status information","Aviation safety incident reporting linked to NCAA","Aviation professional directory and career platform","Drone regulation guide and operator community tools","Aviation industry news and regulatory update tracker"];
  p.how       = ["Passenger checks real-time flight status before heading to airport","Aviation professional creates industry profile and connects with peers","Safety incident is reported through the platform with routing to NCAA","Drone operator accesses regulation guide and operator community","Industry news and regulatory changes are tracked and delivered in real time"];
  p.impact    = ["Nigerian passengers better informed reducing stress of air travel uncertainty","Aviation safety improved through organized incident reporting and tracking","Nigeria's aviation professionals connected in a productive community","Drone and aerospace sector developing with organized support infrastructure","Aviation regulatory compliance improving through better information access"];
  p.nigeria   = ["Nigeria handles millions of passengers annually across its airports — they deserve better information","Aviation safety in Nigeria must improve — organized reporting and accountability help","Nigerian aviation professionals deserve world-class career infrastructure","Drone technology can transform Nigerian agriculture, security, and logistics","A modern, connected aviation sector supports Nigeria's economic ambition and global connectivity"];
  p.investors = ["Aviation platform serving one of Africa's busiest aviation markets","Airline and airport advertising and data partnership revenue","Aviation professional subscription and certification platform fees","Drone operator registration and compliance tool revenue","Government aviation safety reporting infrastructure contract opportunities"];
  p.future    = ["Full integration with NCAA, FAAN, and all Nigerian airline operational systems","Predictive flight delay warning system for Nigerian routes","Nigerian aerospace industry development platform","Drone delivery coordination platform for Nigerian logistics","West Africa aviation intelligence platform covering all regional airports"];
  p.subPlatforms = [
    {name:"FlightWatch",   tagline:"Real-time Nigerian flight information",       features:["Live flight tracker","Departure/arrival status","Delay alerts","Airport status","Weather impact data"]},
    {name:"AviationSafe",  tagline:"Aviation safety incident reporting",          features:["Incident report form","NCAA routing","Safety trend data","Whistleblower protection","Industry safety alerts"]},
    {name:"AviationPros",  tagline:"Nigeria's aviation professional community",   features:["Professional profiles","Job board","License tracking","CPD content","Industry events"]},
    {name:"DroneConnect",  tagline:"Nigeria's drone operator platform",           features:["Regulation guides","Operator registration","Airspace information","Community forum","Incident reporting"]},
    {name:"AeroNews",      tagline:"Nigerian aviation news and regulation updates",features:["Industry news","Regulatory updates","NCAA bulletins","Airline news","Airspace notices"]}
  ];
})();


// ============================================================
//  FULL CONTENT — INDUSLEAD
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="induslead";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "IndusLead is Nigeria's industrial leadership and policy platform — connecting Nigeria's industrial sector leaders, policymakers, and development partners to drive the national industrial transformation Nigeria needs. From manufacturing policy to industrial zone development, from industrial finance to sector-wide coordination, IndusLead is where Nigeria's industrial future is planned, debated, and built. Powering National Industry.";
  p.problem   = ["Nigeria's industrial sector lacks organized leadership and policy coordination infrastructure.","Industrial policy is developed without meaningful engagement from sector leaders.","Nigeria's industrial zones are underutilized due to poor coordination and marketing.","Industrial financing is disconnected from sector-specific needs and opportunities.","No platform connects Nigeria's diverse industrial sectors for collective advocacy and planning."];
  p.who       = ["Industry associations and manufacturing sector leaders","Government industrial policy officials and ministry staff","Industrial zone developers and managers","Development finance institutions funding Nigerian industry","Researchers and analysts studying Nigeria's industrial development"];
  p.does      = ["Provides a platform for Nigeria's industrial sector leadership coordination","Connects industry associations to government policy processes","Delivers industrial zone information and investment opportunity marketing","Facilitates industrial finance matching for sector-specific needs","Publishes industrial sector intelligence for planning and investment decisions"];
  p.features  = ["Industrial sector leadership directory and coordination platform","Government-industry policy engagement tools","Nigerian industrial zone database with investment opportunities","Industrial finance and investment opportunity board","Industrial sector performance data and intelligence dashboard"];
  p.how       = ["Industry association creates profile and coordinates sector advocacy","Government official engages with industry input through organized consultation tools","Investor browses industrial zone opportunities and connects to zone management","Industrial finance need is matched to appropriate development finance institutions","Sector data is accessed for planning, investment, and policy development decisions"];
  p.impact    = ["Nigeria's industrial policy better informed by organized sector input","Industrial zone occupancy and productivity improving through better marketing","Industrial finance more efficiently matched to sector-specific needs","Industry associations coordinating more effectively for collective advocacy","Nigeria's industrial transformation accelerated through organized sector leadership"];
  p.nigeria   = ["Nigeria's industrialization is essential for sustainable job creation and economic diversification","Industrial policy without industry input produces poor outcomes — IndusLead organizes that input","Nigeria's industrial zones are underperforming assets that need digital marketing and coordination","Industrial finance gaps limit manufacturing growth — organized matching helps close them","A coordinated industrial sector can advocate effectively for the policies Nigeria's economy needs"];
  p.investors = ["Industrial leadership platform with government and development bank partnership potential","Industry association subscription and coordination tool revenue","Industrial zone marketing and investment facilitation fees","Development finance institution data and matching service revenue","Government industrial policy advisory platform contracts"];
  p.future    = ["National Industrial Master Plan coordination platform","Industrial zone smart management and monitoring infrastructure","Nigeria manufacturing competitiveness index published annually","Industrial sector skills and workforce planning platform","African industrial leadership network connecting all continental manufacturing associations"];
  p.subPlatforms = [
    {name:"SectorLead",    tagline:"Industrial sector leadership coordination",   features:["Association profiles","Sector advocacy tools","Policy input coordination","Joint campaign management","Industry data sharing"]},
    {name:"IndustrialZone",tagline:"Nigeria's industrial zones for investors",    features:["Zone directory","Investment opportunities","Infrastructure details","Incentive information","Zone contact tools"]},
    {name:"PolicyEngage",  tagline:"Industry input into government policy",       features:["Consultation alerts","Policy response tools","Position paper submission","Meeting coordination","Response tracking"]},
    {name:"IndusFinance",  tagline:"Finance for Nigeria's industrial sector",     features:["Finance need listings","DFI directory","Grant opportunity board","Loan matching","Investment facilitation"]},
    {name:"SectorData",    tagline:"Industrial sector intelligence and analytics",features:["Sector performance dashboard","Comparative analysis","Growth trend data","Policy impact assessment","Investor briefing tools"]}
  ];
})();


// ============================================================
//  FULL CONTENT — FLASHBOARD  (Say Something)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="flashboard";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "FlashBoard is the platform for ideas that burn bright and disappear fast — a 60-second digital board where Nigerians post quick ideas, hot takes, and flash thoughts that are visible for 24 hours and then gone forever. No archive. No permanence. Just the energy of now. Quick ideas, gone fast.";
  p.problem   = ["The permanence of social media creates anxiety about what you post and how it will be judged.","Many great ideas and honest thoughts go unshared because people fear permanent record.","Real-time national idea exchange has no platform built specifically for it.","Creative, spontaneous thinking is suppressed by the pressure of social media metrics.","Nigeria needs a space for honest, fleeting expression without permanent consequence."];
  p.who       = ["Nigerians wanting to share ideas without permanent record","Creative thinkers with spontaneous ideas that feel too small for a full post","Young Nigerians tired of the performance pressure of regular social media","Researchers capturing real-time Nigerian public thinking","Anyone who has ever had a thought worth saying but not worth saving"];
  p.does      = ["Provides a 24-hour expiring content board for quick Nigerian ideas and thoughts","Removes the anxiety of permanent record from spontaneous expression","Enables real-time idea exchange without algorithmic suppression","Captures the energy of now rather than the performance of permanence","Creates a daily fresh board of Nigerian creative and intellectual energy"];
  p.features  = ["60-second post limit — say it quick and say it well","24-hour visibility — all posts disappear after one day","No archive — what's gone is gone forever","Real-time flash board showing the last 100 posts","Reaction tools — fire, agree, nope — but no permanent comments"];
  p.how       = ["User types a quick thought or idea — maximum 60 seconds of reading","Post goes live on the flash board immediately","Visible for 24 hours and then permanently deleted","Other users react with fire, agree, or nope in real time","Board refreshes constantly as new flashes arrive and old ones expire"];
  p.impact    = ["More honest, spontaneous Nigerian expression freed from permanence anxiety","Real-time idea exchange creating a living picture of Nigerian creative thinking","Young Nigerians with a low-pressure platform for genuine expression","Researchers and brands with access to real-time unfiltered Nigerian ideas","A cultural space celebrating the energy of the moment over the anxiety of the archive"];
  p.nigeria   = ["Nigerians are creative, spontaneous, and funny — they need a platform that matches that energy","Social media performance anxiety is real and suppresses genuine Nigerian voices","Fleeting expression is deeply human and deeply Nigerian — it deserves its own platform","A fresh board every day captures the real mood of Nigeria at any moment","FlashBoard is the opposite of the archive — it is the living, breathing present"];
  p.investors = ["Real-time content platform with high engagement and daily active user potential","Brand moment marketing — brands appearing on the flash board for 24 hours","Real-time Nigerian sentiment data subscription for brands and researchers","Event and moment marketing tied to live events and news","Premium flash features for brands wanting high-visibility 24-hour presence"];
  p.future    = ["FlashBoard events — flash boards tied to live national events like elections and AFCON","Brand flash sponsorship — the day's most-reacted flash featured by a brand","FlashBoard digest — editorial summary of the day's most interesting flashes","Integration with FlowStream for thoughts that deserve more than 24 hours","Audio flash board — 30-second voice notes that disappear after 24 hours"];
  p.subPlatforms = [
    {name:"LiveFlash",     tagline:"The real-time 24-hour flash board",           features:["60-second posts","24-hour expiry","Real-time board","Reaction tools","Anonymous option"]},
    {name:"TrendFlash",    tagline:"What's flashing most in Nigeria right now",   features:["Trending flash topics","Most-reacted flashes","Category filter","Real-time trend data","Moment capture"]},
    {name:"BrandFlash",    tagline:"Brand presence on the flash board",           features:["24-hour brand flash","Sponsored board placement","Reaction analytics","Moment marketing tools","Brand flash history"]},
    {name:"FlashData",     tagline:"Real-time Nigerian idea and sentiment data",  features:["Anonymized data access","Real-time sentiment","Topic volume tracking","Demographic insights","API access"]},
    {name:"EventFlash",    tagline:"Flash boards for live national events",       features:["Event-specific boards","Real-time event reaction","Moment capture","Event timeline","Post-event flash archive"]}
  ];
})();


// ============================================================
//  FULL CONTENT — HIDEIT  (Say Something)
// ============================================================
(function() {
  var p = platforms.find(function(x){return x.key==="hideit";});
  if(!p) return;
  p.status    = "Active / Growing";
  p.intro     = "HideIt is the platform where Nigerians can say what they truly think, confess what they are afraid to admit, and share what they want to express before they do it — completely anonymously and safely. Nigeria has a culture of things left unsaid — things people know but cannot say, want but cannot admit, feel but are afraid to express. HideIt is where they finally get said. Hide, Say Before You Do.";
  p.problem   = ["Many important thoughts and experiences go unshared in Nigeria due to fear of judgment.","Anonymous expression is a legitimate and healthy human need with no organized platform.","Social stigma around certain truths suppresses honest discourse on important issues.","People making important decisions benefit from expressing thoughts anonymously first.","There is no safe, moderated anonymous expression platform for Nigerian voices."];
  p.who       = ["Nigerians who want to express genuine thoughts without identity risk","Young people processing difficult feelings or decisions anonymously","Whistleblowers wanting to share information without exposure","People exploring ideas, confessions, or experiences safely","Researchers seeking unfiltered Nigerian expression on sensitive topics"];
  p.does      = ["Provides a completely anonymous platform for genuine Nigerian expression","Enables confession, truth-telling, and pre-decision expression safely","Maintains strict moderation preventing harm while preserving honest expression","Creates a community of shared anonymous experience building empathy and understanding","Captures unfiltered Nigerian sentiment on sensitive topics"];
  p.features  = ["Complete anonymity — no registration required","Moderated community preventing harmful content while preserving honesty","Category channels — confessions, decisions, secrets, opinions, truths","Empathy reactions — understood, felt that, not alone","Time-delayed posting — write now, post later when ready"];
  p.how       = ["User navigates to HideIt — no login or registration required","Chooses a category and types their thought, confession, or expression","Posts anonymously and receives empathy reactions from the community","Reads others' anonymous expressions feeling less alone in their experience","Moderation team ensures harmful content is removed while honest expression is preserved"];
  p.impact    = ["Nigerians able to express genuine thoughts without social consequences","Mental health supported through safe anonymous expression and community empathy","Honest discourse on sensitive topics — relationships, faith, politics, identity","People feeling less alone in their experiences through anonymous community connection","Unfiltered Nigerian voices accessible for researchers and social understanding"];
  p.nigeria   = ["Nigeria has enormous social pressure to conform — HideIt releases that pressure safely","Anonymous expression is mentally healthy and socially valuable","Many Nigerian truths need to be said before they can be addressed — HideIt says them","Understanding what Nigerians truly think requires a space where they speak freely","Safe expression is a right — HideIt provides the infrastructure for it"];
  p.investors = ["Anonymous expression platform with high engagement and sensitive audience value","Research and brand insight data subscription for anonymized sentiment access","Mental health organization partnership for safe expression as wellbeing tool","Whistleblowing infrastructure subscription for organizations and governments","Moderation technology licensing to other platforms needing anonymous community tools"];
  p.future    = ["HideIt therapy connection — anonymous expression leading to professional support","Workplace HideIt — anonymous employee expression platform for organizations","HideIt research — academic partnership for anonymous social research","Audio HideIt — anonymous voice note expression","Integration with mental health resources for expressions indicating distress"];
  p.subPlatforms = [
    {name:"AnonymousBoard", tagline:"Say it without saying who you are",          features:["No registration","Category selection","Anonymous posting","Empathy reactions","Moderated community"]},
    {name:"ConfessionRoom", tagline:"The confessions Nigerians need to make",     features:["Confession submissions","Community empathy","Themed confession weeks","Most-felt confessions","Anonymous replies"]},
    {name:"BeforeIDo",      tagline:"Express it before you do it",                features:["Pre-decision expression","Community perspective","Anonymous advice","Decision reflection tools","Community responses"]},
    {name:"TruthChannel",   tagline:"Truths that need to be said",                features:["Anonymous truth posting","Topic categories","Community validation","Trending truths","Research access tools"]},
    {name:"SafeSpace",      tagline:"Mental health through anonymous expression",  features:["Wellbeing-focused channel","Distress detection","Professional support links","Community empathy","Moderated safety tools"]}
  ];
})();


// ============================================================
//  CORRECTED PLATFORM CONTENT
//  Paste these into data.js replacing existing blocks
// ============================================================


// ============================================================
//  CORRECTED — HAUSAWEALTH (Hausa only, no Fulani references)
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="hausawealth"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Empowering Hausa Prosperity";
  p.intro   = "HausaWealth is the digital home of Hausa economic power — a platform built specifically for Hausa communities across Nigeria and beyond, connecting Hausa traders, farmers, artisans, and entrepreneurs to markets, finance, knowledge, and each other. Built in Hausa, designed for Hausa realities, and dedicated entirely to Hausa prosperity. Hausa business has always been strong. HausaWealth makes it unstoppable.";
  p.problem = [
    "Hausa entrepreneurs lack digital tools built specifically for their language and commercial culture.",
    "Hausa traders operate powerful networks entirely offline with no digital infrastructure.",
    "Northern agricultural wealth is not being captured by the farmers who produce it.",
    "Hausa youth lack visible digital pathways to economic opportunity in their home communities.",
    "Hausa cultural and commercial identity has no organized digital home.",
    "Hausa business networks exist but are limited in reach without a unifying digital platform."
  ];
  p.who = [
    "Hausa traders and merchants operating in northern markets",
    "Hausa farmers and agro-producers across the north",
    "Hausa artisans, craftspeople, and small business owners",
    "Hausa youth seeking economic opportunity and digital tools",
    "Hausa diaspora maintaining business and cultural ties with home communities"
  ];
  p.does = [
    "Connects Hausa businesses to national and international buyers in a Hausa-first environment",
    "Provides a Hausa-language digital marketplace for goods, services, and agricultural produce",
    "Delivers business training and financial literacy content in Hausa",
    "Builds a Hausa entrepreneur network for knowledge sharing, deals, and mentorship",
    "Preserves and celebrates Hausa commercial culture and trade heritage digitally"
  ];
  p.features = [
    "Hausa-language business platform — navigation, content, and tools in Hausa",
    "Northern agricultural and goods marketplace with direct buyer connections",
    "Hausa entrepreneur directory and business networking community",
    "Business skills and financial literacy content in Hausa language",
    "Hausa cultural and trade heritage archive celebrating commercial excellence"
  ];
  p.how = [
    "User registers and navigates the platform entirely in Hausa",
    "Lists their products, farm produce, or business services for discovery",
    "Connects to buyers, business partners, and mentors through the platform",
    "Accesses training content and business tools in their own language",
    "Grows their business within a trusted, culturally aligned Hausa community"
  ];
  p.impact = [
    "Hausa traders and entrepreneurs with world-class digital business infrastructure",
    "Northern agricultural produce earning fair prices through direct buyer connections",
    "Hausa youth with real digital economic pathways in their home communities",
    "Hausa commercial culture celebrated and preserved in a permanent digital home",
    "A thriving Hausa digital economy lifting communities across the north"
  ];
  p.nigeria = [
    "Hausa is Nigeria's most widely spoken language — it deserves a world-class digital platform",
    "Northern Nigeria's economic development requires infrastructure built for northern realities",
    "Hausa commercial networks are among Nigeria's oldest and strongest — digitizing them multiplies their power",
    "Economic empowerment in Hausa communities reduces poverty and strengthens national stability",
    "A prosperous Hausa digital economy is a prosperous Nigeria"
  ];
  p.investors = [
    "Hausa-speaking market of 70M+ people is one of Nigeria's most underserved digital communities",
    "Agricultural and trade marketplace transaction fees generating recurring revenue",
    "Hausa-language content platform with brand advertising opportunities",
    "Government northern development programme platform contracts",
    "International development organization funding for northern Nigeria economic inclusion"
  ];
  p.future = [
    "Full AI business assistant operating entirely in Hausa language",
    "Northern Nigeria commodity exchange with Hausa-language price discovery",
    "Cross-border Hausa trade platform connecting Nigeria to Niger, Chad, and beyond",
    "Hausa cultural archive — language, proverbs, trade history, and oral tradition",
    "HausaWealth annual trade fair — digital and physical celebration of Hausa commerce"
  ];
  p.subPlatforms = [
    {name:"KanoMarket",    tagline:"Hausa trade marketplace",                    features:["Product listings in Hausa","Crop and goods marketplace","Buyer matching","Price discovery","Bulk trade tools"]},
    {name:"HausaLearn",    tagline:"Business skills content in Hausa",           features:["Hausa-language courses","Trade skills","Financial literacy","Business basics","Video lessons"]},
    {name:"ArziNetwork",   tagline:"Hausa entrepreneur connections",             features:["Business directory","Community forums","Deal networking","Mentorship matching","Trade associations"]},
    {name:"GonaMart",      tagline:"Northern farm produce marketplace",          features:["Crop listings","Livestock market","Buyer connections","Weather alerts","Input sourcing"]},
    {name:"Al'adaHub",     tagline:"Hausa culture and trade heritage",           features:["Cultural archive","Trade history","Language tools","Proverbs library","Community celebrations"]}
  ];
})();


// ============================================================
//  CORRECTED — IBOPRENTICE
//  Core purpose: Two-way matching between masters and apprentices
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="iboprentice"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Preserving Skills, Building the Future";
  p.intro   = "Iboprentice is the bridge between masters who have a skill and apprentices who want it. Built on the deep Igbo apprenticeship tradition — one of the most powerful informal economic systems ever created — Iboprentice digitizes, formalizes, and expands that tradition so that no skill dies with its master and no willing apprentice goes untrained. A master posts their craft. An apprentice finds their calling. The transfer begins.";
  p.problem = [
    "Skilled Igbo masters cannot easily find serious, committed apprentices beyond their immediate community.",
    "Young people who want to learn a trade cannot find the right master in their area or field.",
    "The Igbo apprenticeship system is powerful but entirely offline, unverified, and often exploitative.",
    "Masters retire or die taking irreplaceable craft knowledge with them.",
    "Apprentices complete training with no formal certification employers or customers can verify.",
    "The two sides of this relationship — master and apprentice — have no organized way to find each other."
  ];
  p.who = [
    "Skilled masters in any trade — tailoring, carpentry, auto repair, electronics, cooking, fabrication — seeking serious apprentices",
    "Young Nigerians who want to learn a specific trade under a verified, experienced master",
    "Parents seeking verified, structured apprenticeship placements for their children",
    "Trade associations managing apprenticeship programmes across Igbo communities",
    "Employers who want to hire workers with verified apprenticeship credentials"
  ];
  p.does = [
    "Connects masters who have a skill to apprentices who want to learn it — directly and efficiently",
    "Allows masters to post their trade, location, capacity, and apprenticeship terms publicly",
    "Allows apprentices to search by trade, location, and master rating and apply directly",
    "Issues verified digital certificates when an apprenticeship is completed",
    "Tracks apprenticeship progress so both master and apprentice are accountable"
  ];
  p.features = [
    "Master profile — trade specialty, years of experience, location, terms, and apprentice capacity",
    "Apprentice profile — skill interest, location, availability, and background",
    "Two-way matching — masters browse apprentice applications, apprentices browse master listings",
    "Apprenticeship agreement tool — terms, duration, and expectations documented digitally",
    "Verified completion certificate issued when master confirms apprenticeship is done"
  ];
  p.how = [
    "Master registers and creates a profile listing their trade, location, and apprenticeship terms",
    "Apprentice searches for masters in their desired trade and sends an application",
    "Master reviews applications and selects the right apprentice",
    "Apprenticeship begins — milestones are tracked on the platform by both parties",
    "On completion the master confirms and the apprentice receives a verified digital certificate"
  ];
  p.impact = [
    "Masters finding serious, committed apprentices efficiently and reliably",
    "Apprentices finding the right master for their trade — not just whoever is nearby",
    "Igbo craft knowledge preserved through structured, documented transfer to the next generation",
    "Apprentices entering the job market with verified, trusted credentials",
    "The Igbo apprenticeship tradition — one of Africa's greatest economic systems — formalized and scaled"
  ];
  p.nigeria = [
    "The Igbo apprenticeship system has created more millionaires per capita than almost any other model in Nigeria",
    "Formalizing it through Iboprentice scales its power from community to national level",
    "Craft skills represent billions in economic value — preserving them protects that wealth",
    "Verified apprenticeship credentials give young Nigerians formal economic entry without university",
    "A digitized apprenticeship system is a jobs creation engine Nigeria can deploy immediately"
  ];
  p.investors = [
    "Apprenticeship marketplace serving millions of potential masters and apprentices across Nigeria",
    "Matching fee revenue on every successful master-apprentice connection",
    "Certificate issuance and verification subscription fees",
    "Trade association partnership subscription for managing group apprenticeship programmes",
    "Government skills and youth employment programme implementation contracts"
  ];
  p.future = [
    "Iboprentice Seal — a nationally recognized certification standard for completed apprenticeships",
    "Cross-trade expansion beyond Igbo tradition to all Nigerian apprenticeship cultures",
    "Employer hiring portal — companies recruit directly from verified Iboprentice graduates",
    "Master rating system — apprentices rate masters building a quality accountability culture",
    "Pan-African apprenticeship platform connecting African craft traditions to the next generation"
  ];
  p.subPlatforms = [
    {name:"MasterPost",    tagline:"Masters listing their trade and terms",       features:["Trade specialty listing","Location and capacity","Terms and duration","Apprentice capacity","Rating and reviews"]},
    {name:"ApprenticeFind",tagline:"Find the right master for your trade",        features:["Trade search","Location filter","Master profiles","Application tools","Shortlist and compare"]},
    {name:"MatchDesk",     tagline:"Two-way matching between masters and apprentices",features:["Application management","Master selection tools","Apprentice acceptance","Match confirmation","Agreement documentation"]},
    {name:"TrackProgress", tagline:"Monitor apprenticeship milestones",           features:["Milestone setting","Progress updates","Master confirmation","Apprentice log","Issue reporting"]},
    {name:"CertVerify",    tagline:"Verified certificates for completed apprenticeships",features:["Digital certificate generation","QR code verification","Employer-shareable format","Certificate archive","Completion confirmation"]}
  ];
})();


// ============================================================
//  CORRECTED — LEGALSURE
//  Core purpose: Legal insurance — prepaid legal protection for Nigerians
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="legalsure"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Trusted Friend. Dependable Ally.";
  p.intro   = "LegalSure is Nigeria's legal insurance platform — where individuals, families, and businesses subscribe monthly to have a team of lawyers on standby, ready to defend them, represent them, and fight their legal battles whenever they need it. Just as health insurance gives you a doctor when you are sick, LegalSure gives you a lawyer when you are in trouble. Legal protection for every Nigerian — not just those who can afford it when crisis strikes.";
  p.problem = [
    "Most Nigerians have no lawyer and no legal protection — they face crises alone and uninformed.",
    "Hiring a lawyer in Nigeria is expensive, confusing, and only happens after disaster strikes.",
    "People are arrested, cheated, and exploited daily because they have no legal representation on standby.",
    "Thousands of qualified Nigerian lawyers have no steady income stream or client base.",
    "Legal disputes — land, business, family, employment — destroy lives that could have been protected.",
    "Legal protection in Nigeria is a privilege of the wealthy — LegalSure makes it universal."
  ];
  p.who = [
    "Individuals and families wanting a lawyer on standby for any situation",
    "Business owners needing ongoing legal protection for their operations",
    "Tenants, car owners, and property holders needing legal cover",
    "Schools, churches, NGOs, and organizations needing corporate legal membership",
    "Lawyers seeking a steady income stream through a subscriber-based client pool"
  ];
  p.does = [
    "Connects subscribers to assigned lawyers who are ready to act on their behalf immediately",
    "Represents subscribers at police stations, magistrate courts, and detention centres",
    "Handles land disputes, business agreements, MOUs, contracts, and registrations",
    "Provides mediation, litigation, and legal consultation as part of subscription",
    "Deploys lawyers to every street, community, and institution through a structured network"
  ];
  p.features = [
    "Monthly legal insurance subscription — individual, family, and corporate tiers",
    "Assigned personal lawyer — one dedicated lawyer per subscriber on standby",
    "Emergency legal response — lawyer dispatched to police station or court within hours",
    "Full legal services — court representation, document drafting, mediation, consultation",
    "Lawyer network management — verified lawyers connected to all courts and stations in Nigeria"
  ];
  p.how = [
    "Individual or organization subscribes to a LegalSure membership tier",
    "Subscription is processed and a lawyer is assigned to the member",
    "When legal trouble arises — arrest, dispute, contract issue — member calls LegalSure",
    "Assigned lawyer responds, appears, and handles the matter on the member's behalf",
    "Lawyer reports back, matter is documented, and member's record is updated"
  ];
  p.impact = [
    "Millions of Nigerians with a lawyer on standby for the first time in their lives",
    "Legal exploitation dramatically reduced as ordinary citizens have professional representation",
    "Thousands of lawyers employed with steady income through subscriber pools",
    "Police stations, courts, and detention centres become less intimidating for ordinary Nigerians",
    "Legal protection normalized as a monthly subscription — like health insurance but for justice"
  ];
  p.nigeria = [
    "Nigeria has millions of people arrested, cheated, or exploited daily with no legal recourse",
    "LegalSure is the first model to make legal protection a monthly subscription Nigerians can afford",
    "Employing 10,000+ lawyers creates a massive formal legal employment ecosystem",
    "Chiefs, community leaders, and organizations as foundation members anchor local trust",
    "Revolutionizing legal practice in Nigeria — and exporting the model across Africa"
  ];
  p.investors = [
    "Legal insurance is an entirely untapped market in Nigeria — first mover advantage is enormous",
    "Recurring monthly subscription revenue from individuals, families, and corporate members",
    "Lawyer network subscription fees from legal professionals joining the platform",
    "Corporate membership packages for schools, churches, NGOs, and companies",
    "Franchise model potential — LegalSure chapters across all 36 states and eventually Africa"
  ];
  p.future = [
    "10,000 lawyers employed across Nigeria through LegalSure subscriber pools",
    "LegalSure presence at every police station and magistrate court in Nigeria",
    "Corporate membership covering all staff of major Nigerian employers",
    "Export the Nigerian Legal Insurance (LENCE) model to Ghana, Kenya, and South Africa",
    "LegalSure Foundation — providing free legal cover to Nigeria's most vulnerable citizens"
  ];
  p.subPlatforms = [
    {name:"SubscribeNow",  tagline:"Get your lawyer on standby today",           features:["Individual membership","Family membership","Corporate membership","Payment processing","Instant lawyer assignment"]},
    {name:"LawyerNetwork", tagline:"Verified lawyers connected to every court",  features:["Lawyer registration","Court and station coverage","Assignment management","Performance tracking","Income dashboard"]},
    {name:"LegalResponse", tagline:"Emergency legal help when you need it",      features:["Emergency call system","Police station dispatch","Court appearance coordination","Detention centre coverage","Response tracking"]},
    {name:"DocuSure",      tagline:"Legal documents and agreements handled",     features:["Contract drafting","MOU preparation","Land agreement tools","Business registration","Document archive"]},
    {name:"LegalLearn",    tagline:"Know your rights as a LegalSure member",    features:["Rights education","Member legal guides","Know-your-rights content","Court process explainers","Legal FAQ library"]}
  ];
})();


// ============================================================
//  STEELHUB — Youth training + steel marketplace
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="steelhub"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Training Hands. Building Nigeria.";
  p.intro   = "SteelHub is Nigeria's iron and steel platform for youth — where young Nigerians learn to weld, fabricate, and engineer in modern metalwork, and where steel producers connect directly with SMEs, builders, and construction businesses. Nigeria imports billions in steel products annually while thousands of young Nigerians are unemployed. SteelHub closes both gaps at once — training hands and building markets.";
  p.problem = [
    "Nigeria imports most of its steel and fabricated metal products despite having raw materials and idle youth.",
    "Young Nigerians interested in metalwork have no structured, modern training pathway.",
    "Steel producers and SME buyers cannot find each other efficiently — the market is fragmented.",
    "Fabrication and welding skills are dying as youth migrate to cities without trade training.",
    "Construction businesses overpay for imported steel products that could be sourced locally.",
    "There is no organized platform connecting Nigeria's steel production to its construction demand."
  ];
  p.who = [
    "Young Nigerians seeking careers in welding, fabrication, and metal engineering",
    "Steel producers and rolling mills seeking direct market access to buyers",
    "SMEs and construction companies sourcing steel, rods, and fabricated metal products",
    "Vocational training institutions delivering metalwork and engineering programmes",
    "Investors in Nigeria's iron, steel, and fabrication sector"
  ];
  p.does = [
    "Trains young Nigerians in modern welding, fabrication, and metal engineering through structured programmes",
    "Connects steel producers directly to SMEs, builders, and construction companies",
    "Lists fabrication services so buyers can find verified local fabricators for custom metalwork",
    "Provides a rental marketplace for tools, equipment, chairs, generators, and machinery",
    "Builds the Nigerian steel industry professional community with knowledge and industry tools"
  ];
  p.features = [
    "SteelSkills training directory — verified welding, fabrication, and engineering programmes near you",
    "BuildNaija SteelMart — online marketplace linking steel producers with SMEs and builders",
    "Fabricator directory — find verified local fabricators for any custom metal project",
    "RentalHub NG — rent tools, chairs, generators, and industrial equipment by the day or week",
    "Steel industry news, pricing intelligence, and market data for buyers and producers"
  ];
  p.how = [
    "Young person finds a verified training programme near them and enrols through the platform",
    "Steel producer lists products with prices, specifications, and minimum order quantities",
    "Builder or SME searches for steel products, compares prices, and contacts suppliers directly",
    "Fabrication job is posted and matched to verified local fabricators",
    "Equipment needed for a short job is rented through RentalHub without buying outright"
  ];
  p.impact = [
    "Thousands of young Nigerians trained in modern metalwork and fabrication careers",
    "Steel import substitution growing as local producers reach more buyers",
    "Construction costs reduced through efficient local steel sourcing",
    "Equipment rental reducing capital barrier for small contractors and tradespeople",
    "Nigeria's iron and steel sector organized, connected, and growing"
  ];
  p.nigeria = [
    "Nigeria has the raw materials and the youth — SteelHub connects the two into an industry",
    "Import substitution in steel can save Nigeria billions in annual forex expenditure",
    "Every trained welder or fabricator is a job created without government intervention",
    "Local steel supply chains reduce construction costs making housing more affordable",
    "A strong domestic steel sector is essential for Nigeria's industrialization ambition"
  ];
  p.investors = [
    "Steel marketplace serving a multi-billion naira annual construction materials market",
    "Transaction fees on steel product marketplace sales",
    "Training programme listing and certification subscription fees",
    "Equipment rental platform commission revenue",
    "Government industrial youth training programme implementation contracts"
  ];
  p.future = [
    "AutoFab NG — youth-driven innovation in automotive parts and local vehicle fabrication",
    "National welding and fabrication certification standard recognized by all employers",
    "Steel price index published daily for all Nigerian steel products",
    "Integration with COREN and SON for professional certification of trained fabricators",
    "West Africa steel marketplace connecting Nigerian producers to regional buyers"
  ];
  p.subPlatforms = [
    {name:"SteelSkills",   tagline:"Train in modern welding and fabrication",    features:["Training directory","Programme enrolment","Location filter","Certification tracking","Master trainer profiles"]},
    {name:"SteelMart",     tagline:"Steel products marketplace for builders",    features:["Product listings","Producer profiles","Price comparison","Bulk order tools","Delivery coordination"]},
    {name:"FabFinder",     tagline:"Find verified local fabricators",            features:["Fabricator directory","Skill category filter","Job posting","Quote request","Rating and reviews"]},
    {name:"RentalHub",     tagline:"Rent tools and equipment by the day",        features:["Equipment listings","Daily rental rates","Availability calendar","Delivery option","Damage protection"]},
    {name:"SteelIntel",    tagline:"Steel market prices and industry news",      features:["Daily price tracker","Product category prices","Import vs local comparison","Industry news","Market alerts"]}
  ];
})();


// ============================================================
//  PETRO360 — Citizen oil auditing + community revenue tracking
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="petro360"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Every Nigerian's Eye on the Oil Industry";
  p.intro   = "Petro360 is the platform where Nigerian citizens audit, track, and hold accountable the oil and energy sector that funds their government. Through MeterWatch, citizens report gas flaring, metering fraud, and fuel irregularities. Through PetroNaija, communities track oil revenues, refining output, and subsidy flows. Oil belongs to Nigeria — Petro360 ensures Nigerians can see what is being done with it.";
  p.problem = [
    "Gas flaring destroys Nigerian communities and the environment with almost no citizen reporting mechanism.",
    "Meter fraud by energy companies costs Nigerians billions annually with no platform to report it.",
    "Oil revenues flow into government accounts with almost no community-level tracking or transparency.",
    "Citizens in oil-producing communities suffer most but understand least about the industry affecting them.",
    "Subsidy payments are opaque — billions are paid with no citizen verification of whether they reach their purpose.",
    "Refining capacity and petroleum product availability data is not accessible to ordinary Nigerians."
  ];
  p.who = [
    "Citizens in oil-producing communities monitoring flaring, spills, and environmental impact",
    "Consumers reporting meter fraud and energy billing irregularities",
    "Civil society organizations tracking oil revenue flows and subsidy expenditure",
    "Journalists investigating the petroleum sector and energy company practices",
    "Community leaders holding oil companies accountable for environmental and community obligations"
  ];
  p.does = [
    "Enables citizens to report gas flaring incidents with location, photo, and company evidence",
    "Tracks and maps meter fraud reports across Nigeria routing to NERC and DPR",
    "Monitors and publishes oil revenue data — production, export, NNPC remittances — in plain language",
    "Tracks refinery output and petroleum product availability by region",
    "Documents subsidy payment flows from government announcement to pump-level reality"
  ];
  p.features = [
    "MeterWatch NG — citizens report and track meter fraud and energy billing irregularities",
    "Gas Flare Map — report and map active gas flaring incidents by company and location",
    "PetroNaija Revenue Tracker — community tracking of oil revenues, FAAC allocations, and subsidies",
    "Refinery Watch — tracking Nigerian refinery output and product availability",
    "Fuel Price Monitor — real-time pump prices across all states with scarcity alerts"
  ];
  p.how = [
    "Citizen reports a gas flaring incident or meter irregularity with photo and GPS location",
    "Report is published on the live map and routed to DPR, NERC, or relevant agency",
    "Oil revenue data is sourced from NNPC, FIRS, and official portals and published monthly",
    "Community tracks whether their state's oil allocation matches what government announced",
    "Fuel price reporters in every state update pump prices creating a real-time national price map"
  ];
  p.impact = [
    "Gas flaring incidents documented and escalated reducing environmental destruction",
    "Meter fraud reported and resolved faster through organized citizen intelligence",
    "Oil revenue transparency improving as community tracking creates public accountability",
    "Nigerians understanding how oil money flows — and where it stops flowing",
    "Subsidy fraud harder to sustain under public citizen monitoring and documentation"
  ];
  p.nigeria = [
    "Oil funds 70% of Nigeria's government revenue — every citizen has a right to audit it",
    "Gas flaring has devastated Niger Delta communities for decades — citizen reporting begins accountability",
    "Meter fraud costs Nigerian energy consumers billions annually — a reporting platform is overdue",
    "Subsidy transparency is one of Nigeria's most contested governance issues — data resolves the debate",
    "An oil-literate, oil-watching citizenry is Nigeria's most powerful check on petroleum sector corruption"
  ];
  p.investors = [
    "Civic technology platform attracting international energy transparency and environmental funding",
    "Data subscription services for journalists, researchers, and civil society organizations",
    "Government energy monitoring and reporting infrastructure contract opportunities",
    "Environmental organization partnership for gas flaring documentation and advocacy",
    "International oil transparency initiative funding — EITI, Publish What You Pay, etc."
  ];
  p.future = [
    "Satellite gas flare detection integrated with citizen ground reports for real-time flare map",
    "NNPC monthly revenue automatic data ingestion and plain-language publication",
    "Oil spill reporting and remediation tracking platform for Niger Delta communities",
    "Community benefit tracking — what oil companies owe communities vs what they deliver",
    "Integration with NEITI and all official Nigerian petroleum transparency frameworks"
  ];
  p.subPlatforms = [
    {name:"MeterWatch",    tagline:"Report meter fraud and billing irregularities", features:["Fraud report form","NERC routing","Evidence upload","Report tracking","National fraud map"]},
    {name:"Flaremap",      tagline:"Map and report active gas flaring",            features:["Flare incident report","GPS location","Company identification","Agency routing","Cumulative flare data"]},
    {name:"PetroNaija",    tagline:"Community tracking of oil revenues",           features:["Revenue dashboard","FAAC tracker","Subsidy monitor","State allocation comparison","Plain-language explainers"]},
    {name:"RefineryWatch", tagline:"Nigerian refinery output and product tracking", features:["Refinery status","Product availability","Import vs local data","Depot tracker","Regional supply map"]},
    {name:"FuelPrice",     tagline:"Real-time fuel prices across Nigeria",         features:["State-by-state prices","Scarcity alerts","Price trend charts","Reporter network","Pump locator"]}
  ];
})();


// ============================================================
//  AGRICONET — Farm-to-market + investment + cold chain + food redistribution
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="agriconet"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "From Farm to Pot — No Middleman";
  p.intro   = "AgricoNet is Nigeria's complete agricultural ecosystem — a digital platform where farmers sell directly to urban buyers at fair prices, investors fund farm plots and share profits at harvest, cold chain logistics cut post-harvest losses, surplus food is redistributed rather than wasted, and street vendors and food sellers are connected to supply. Every link in Nigeria's food chain — digitized, organized, and fair.";
  p.problem = [
    "Nigerian farmers sell at exploitatively low prices because powerful middlemen control access to buyers.",
    "Post-harvest losses exceed 40% because cold storage, logistics, and distribution are unavailable to smallholders.",
    "Farm investment is inaccessible to ordinary Nigerians who want to invest in agriculture and share in harvests.",
    "Surplus food is wasted daily in markets while hungry communities nearby go without.",
    "Urban buyers pay inflated prices because they cannot buy directly from producers.",
    "Street food vendors and small food sellers cannot reliably source affordable fresh produce."
  ];
  p.who = [
    "Smallholder farmers needing direct access to urban buyers at fair prices",
    "Urban consumers and retailers wanting to buy fresh produce directly from farms",
    "Investors wanting to fund farm plots and receive a share of harvest profits",
    "Food logistics operators providing cold storage and distribution services to farmers",
    "Street food vendors and market traders sourcing affordable fresh produce",
    "Food surplus holders — markets, restaurants, farms — with leftover food to redistribute"
  ];
  p.does = [
    "Connects farmers directly to urban buyers, retailers, and food processors — no middleman",
    "Enables micro-investment in farm plots — investors fund farmers and share profits at harvest",
    "Coordinates community cold chain — shared cold storage, logistics, and distribution reducing waste",
    "Redistributes food surplus from farms and markets to communities that need it through Surplus2Table",
    "Connects street vendors and food sellers to reliable, affordable fresh produce sources",
    "Enables bulk buying groups — FoodBasket Share — for community cooperative purchasing"
  ];
  p.features = [
    "AgriConnect Market — direct farm-to-buyer sales with price discovery and delivery coordination",
    "AgriConnect Finance — crowdfunded farm investment with profit-sharing at harvest",
    "AgriConnect ColdChain — community cold storage, logistics, and distribution coordination",
    "Surplus2Table — food surplus redistribution connecting excess to need",
    "Farm2Pot — farm-to-table direct sales for households and restaurants",
    "FoodBasket Share — bulk buying groups for community cooperative food purchasing",
    "StreetVendor Connect — street food seller map and supply sourcing platform",
    "PocketFarms — micro-invest in individual farm plots from as little as ₦1,000"
  ];
  p.how = [
    "Farmer lists produce with quantity, quality, and price — buyer finds them directly",
    "Investor selects a farm plot, funds it, and receives their harvest share at season end",
    "Cold chain operator lists available storage and logistics capacity — farmers book it",
    "Market or farm with surplus posts on Surplus2Table — community members claim what they need",
    "Street vendor finds nearby fresh produce suppliers through StreetVendor Connect map",
    "Community group forms a FoodBasket Share buying group — bulk purchase at farm prices"
  ];
  p.impact = [
    "Farmers earning 40-60% more by selling directly without exploitative middlemen",
    "Post-harvest losses cut dramatically through organized cold chain and logistics",
    "Ordinary Nigerians investing in agriculture and sharing in farming profits",
    "Food waste reduced and food insecurity addressed through surplus redistribution",
    "Street vendors with reliable, affordable supply reducing urban food costs",
    "Community bulk buying reducing household food expenditure"
  ];
  p.nigeria = [
    "Nigeria wastes 40% of its food annually while millions go hungry — AgricoNet addresses both ends",
    "Farm investment democratization can create millions of new agricultural investors",
    "Direct farm-to-buyer connection is the single most powerful price stabilization tool available",
    "Cold chain development is essential for Nigeria to reach its agricultural export potential",
    "Food security is national security — AgricoNet builds it from the ground up"
  ];
  p.investors = [
    "Agricultural platform serving Nigeria's largest economic sector by employment",
    "Marketplace transaction fees on every farm-to-buyer sale",
    "Farm investment facilitation fees from investor-farmer matching",
    "Cold chain coordination and logistics platform subscription revenue",
    "Government agricultural development and food security programme contracts"
  ];
  p.future = [
    "Drone-based crop monitoring integrated with farm investment tracking",
    "AI yield prediction enabling accurate investor profit projections before planting",
    "National food surplus redistribution network covering all 36 states",
    "AgricoNet cooperative — farmer-owned digital marketplace with shared profit",
    "Export gateway connecting Nigerian farm produce to international commodity buyers"
  ];
  p.subPlatforms = [
    {name:"AgriMarket",    tagline:"Direct farm-to-buyer sales",                 features:["Produce listings","Buyer matching","Price discovery","Quality grading","Delivery coordination"]},
    {name:"PocketFarms",   tagline:"Micro-invest in Nigerian farm plots",        features:["Farm plot listings","Investment amount selection","Progress updates","Harvest share calculator","Payout tracking"]},
    {name:"ColdChain",     tagline:"Community cold storage and logistics",       features:["Storage facility listings","Logistics coordination","Booking system","Availability calendar","Farmer cooperative tools"]},
    {name:"Surplus2Table", tagline:"Redistribute food surplus to those who need it",features:["Surplus listing","Community claim system","Location matching","Pickup coordination","Waste reduction tracking"]},
    {name:"StreetVendor",  tagline:"Map and supply Nigeria's street food sellers",features:["Vendor map","Supply sourcing","Bulk purchase tools","Vendor community","Market price alerts"]}
  ];
})();


// ============================================================
//  MAKERSHUB — Nigerian manufacturers directory + auto fabrication
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="makershub"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Built in Nigeria. For Nigeria. And the World.";
  p.intro   = "MakersHub is the definitive showcase and marketplace for Nigerian manufacturers — a platform where every factory, workshop, and production facility in Nigeria is visible, discoverable, and connected to buyers. From MadeInNaija Hub celebrating what Nigeria produces to AutoFab NG where youth innovate in automotive fabrication, MakersHub is the infrastructure that makes Buy Nigerian not just a slogan but a daily, easy reality.";
  p.problem = [
    "Nigerian manufacturers produce quality goods that most buyers never discover because they have no digital presence.",
    "Import culture is sustained partly by ignorance — buyers don't know Nigerian alternatives exist.",
    "No organized directory or showcase exists for Nigerian manufacturers across all sectors.",
    "Youth with automotive fabrication talent have no platform for recognition, market access, or funding.",
    "Made-in-Nigeria products cannot compete with imports partly because they cannot be found online.",
    "Buyers wanting to source locally have no reliable, searchable directory of Nigerian producers."
  ];
  p.who = [
    "Nigerian manufacturers of any product seeking national and international market visibility",
    "Buyers — individuals, retailers, and businesses — wanting to source Nigerian-made products",
    "Young automotive fabricators and auto-parts innovators seeking recognition and market access",
    "Investors seeking Nigerian manufacturing businesses to partner with or invest in",
    "Government agencies promoting Made-in-Nigeria and import substitution policies"
  ];
  p.does = [
    "Lists and showcases every Nigerian manufacturer in a searchable, verified national directory",
    "Connects buyers directly to Nigerian producers eliminating import default",
    "Celebrates Made-in-Nigeria products through curated showcases and quality certification",
    "Provides a dedicated platform for youth automotive fabricators to showcase innovations",
    "Connects Nigerian manufacturers to investors, export markets, and government contracts"
  ];
  p.features = [
    "MadeInNaija Hub — directory and showcase of Nigerian manufacturers across all sectors",
    "AutoFab NG — youth-driven innovation showcase in automotive parts and vehicle fabrication",
    "Buyer sourcing tool — search for any product category and find Nigerian producers",
    "Manufacturer verification and quality rating system building buyer confidence",
    "Export readiness tool — helping Nigerian manufacturers reach international buyers"
  ];
  p.how = [
    "Manufacturer registers and creates a verified profile with products, capacity, and certifications",
    "Buyer searches for a product category and discovers Nigerian producers with full profiles",
    "Young auto fabricator showcases their innovation — engine parts, chassis, accessories — to the market",
    "Investor discovers manufacturing investment opportunities through the platform",
    "Export buyer finds Nigerian manufacturers meeting their quality and volume requirements"
  ];
  p.impact = [
    "Every Nigerian manufacturer discoverable by every Nigerian buyer for the first time",
    "Import substitution accelerating as buyers discover and choose Nigerian alternatives",
    "Young automotive fabricators gaining market recognition and commercial opportunity",
    "Nigerian manufacturing sector growing through better market infrastructure",
    "Buy Nigerian becoming a daily habit powered by easy digital discovery"
  ];
  p.nigeria = [
    "Nigeria imports most of what it consumes despite having manufacturers who can produce it",
    "Every naira spent on Nigerian products creates Nigerian jobs and keeps wealth in Nigeria",
    "Automotive fabrication by Nigerian youth can reduce vehicle repair import costs significantly",
    "A visible, organized manufacturing sector attracts investment and government support",
    "Made-in-Nigeria needs a world-class platform to fulfill its enormous potential"
  ];
  p.investors = [
    "Manufacturing marketplace serving Nigeria's massive import substitution opportunity",
    "Manufacturer listing subscription and premium visibility fees",
    "Transaction fees on buyer-manufacturer connections and export deals",
    "Quality certification programme subscription revenue",
    "Government Made-in-Nigeria promotion programme contracts"
  ];
  p.future = [
    "National quality mark — MakersHub certified Nigerian product standard",
    "International trade fair presence for MakersHub manufacturers",
    "Auto fabrication investment fund for the most innovative Nigerian automotive youth",
    "Integration with SON, NAFDAC, and standards bodies for automatic certification",
    "Pan-African Made-in-Africa marketplace connecting all continental manufacturers"
  ];
  p.subPlatforms = [
    {name:"MadeInNaija",   tagline:"Discover what Nigeria makes",                features:["Manufacturer directory","Product showcase","Sector filter","Quality ratings","Buyer connect"]},
    {name:"AutoFabNG",     tagline:"Youth automotive fabrication showcase",       features:["Innovation showcase","Fabricator profiles","Investor connect","Market listings","Competition platform"]},
    {name:"BuyNaija",      tagline:"Source any product from Nigerian producers",  features:["Product search","Category browse","Producer comparison","Bulk order tools","Import alternative finder"]},
    {name:"ExportReady",   tagline:"Nigerian manufacturers going global",         features:["Export readiness assessment","International buyer connect","Documentation support","Compliance tools","Market research"]},
    {name:"ManufactureInvest",tagline:"Invest in Nigerian manufacturing",        features:["Investment opportunities","Factory profiles","Due diligence data","Partnership tools","Investor matching"]}
  ];
})();


// ============================================================
//  MINESHUB — Artisanal gold registry + youth solid minerals training
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="mineshub"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Unlocking Nigeria's Underground Wealth";
  p.intro   = "MinesHub is Nigeria's solid minerals platform — where artisanal and small-scale miners are registered, trained, and connected to fair markets, and where young Nigerians discover and build careers in gold, lithium, coal, and the dozens of other minerals beneath Nigerian soil. Nigeria sits on $700B+ in solid mineral wealth. MinesHub is the platform that begins turning that wealth into national prosperity — safely, fairly, and with youth at the centre.";
  p.problem = [
    "Nigeria's artisanal miners operate entirely informally — unregistered, unprotected, and exploited by middlemen.",
    "Young Nigerians in mining communities have no training pathway into the formal minerals sector.",
    "GoldChain and mineral trading is controlled by illegal buyers paying far below market value to miners.",
    "Nigeria's $700B+ solid mineral wealth generates almost no national revenue because the sector is unorganized.",
    "Mining communities suffer environmental destruction with no monitoring, reporting, or compensation system.",
    "Lithium, coal, and other strategic minerals are exported informally with no value addition in Nigeria."
  ];
  p.who = [
    "Artisanal and small-scale gold miners needing registration, protection, and fair market access",
    "Young Nigerians in mining communities seeking training in solid minerals and mining careers",
    "Mining investors seeking verified licences, opportunities, and geological data",
    "Mining communities needing environmental monitoring and compensation tracking tools",
    "Government agencies seeking to formalize and grow Nigeria's solid minerals sector"
  ];
  p.does = [
    "Registers artisanal miners creating a verified national digital registry — GoldChain NG",
    "Connects registered miners directly to certified buyers at fair, transparent market prices",
    "Trains youth in lithium, coal, gold, and other solid mineral sectors through SolidMiner Hub",
    "Maps active mining zones and mineral deposits providing investors with verified data",
    "Monitors environmental impact of mining and tracks community compensation obligations"
  ];
  p.features = [
    "GoldChain NG — digital registry and trading hub for Nigeria's artisanal and small-scale gold miners",
    "SolidMiner Hub — training and marketplace for youth in lithium, coal, tin, and solid minerals",
    "Mining licence database and regulatory compliance guide for formal sector operators",
    "Mineral deposit and active zone map with geological and investment data",
    "Environmental monitoring and community compensation tracker for mining areas"
  ];
  p.how = [
    "Artisanal miner registers on GoldChain NG — gets a verified digital mining identity",
    "Lists gold or mineral production and connects to certified buyers at published fair prices",
    "Young person in mining community enrols in SolidMiner Hub training for their mineral sector",
    "Investor accesses mineral deposit map and licence database for due diligence",
    "Community reports environmental mining impact through the monitoring platform"
  ];
  p.impact = [
    "Artisanal miners earning fair prices through certified buyer connections eliminating exploitation",
    "Young Nigerians entering the formal solid minerals sector with verified training",
    "Nigeria's artisanal mining sector formalized — taxable, traceable, and protected",
    "Mining investment increasing as verified data and transparent processes build confidence",
    "Nigeria's $700B mineral wealth beginning to generate real national revenue and jobs"
  ];
  p.nigeria = [
    "Nigeria's solid minerals are a generational wealth opportunity currently being wasted and stolen",
    "Formalizing artisanal mining through GoldChain NG is the fastest route to mineral sector revenue",
    "Youth training in solid minerals creates careers in communities that currently have none",
    "Environmental accountability in mining is a national obligation and a community right",
    "Every mineral kilogram that is formally traded is a kilogram that benefits Nigeria"
  ];
  p.investors = [
    "Mining platform serving a $700B+ untapped market with enormous first-mover opportunity",
    "Miner registration and certification subscription fees",
    "Marketplace transaction fees on certified mineral trading",
    "Training programme enrolment and certification revenue",
    "Government solid minerals formalization programme implementation contracts"
  ];
  p.future = [
    "Blockchain-based mineral provenance tracking from mine to market",
    "Lithium value chain platform as Nigeria emerges as a battery mineral producer",
    "National artisanal mining cooperative — miners owning their market collectively",
    "Real-time mineral price tracker for all Nigerian solid minerals",
    "Integration with Ministry of Mines, Solid Minerals Development Fund, and all regulatory bodies"
  ];
  p.subPlatforms = [
    {name:"GoldChainNG",   tagline:"Registry and market for artisanal miners",   features:["Miner registration","Digital identity","Fair price marketplace","Certified buyer connect","Production tracking"]},
    {name:"SolidMinerHub", tagline:"Youth training in solid minerals",            features:["Training directory","Mineral-specific courses","Certification programme","Job placement","Employer connect"]},
    {name:"MineralMap",    tagline:"Nigeria's mineral deposits mapped",           features:["Deposit type mapping","Active zone data","Licence boundaries","Geological reports","Investment data"]},
    {name:"MineInvest",    tagline:"Verified mining investment opportunities",    features:["Licence database","Opportunity listings","Due diligence tools","Regulatory guide","Investor matching"]},
    {name:"MineEnviro",    tagline:"Environmental monitoring for mining communities",features:["Impact reporting","Company compliance tracking","Compensation tracker","Community alerts","Agency routing"]}
  ];
})();


// ============================================================
//  MARINEHUB — Port efficiency + aquaculture + inland waterways
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="marinehub"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Powering the Blue Economy";
  p.intro   = "MarineHub is Nigeria's maritime and blue economy platform — where citizens and industry track port efficiency, shipping, and logistics through Port360 NG, and where AquaWealth NG builds community-driven aquaculture and inland waterways innovation. Nigeria has 850km of coastline, major ports, vast inland waterways, and enormous fisheries potential. MarineHub is the digital infrastructure that finally puts all of it to work.";
  p.problem = [
    "Nigeria's ports are among the least efficient in Africa — delays, corruption, and opacity cost importers billions.",
    "Citizens and businesses have no platform to monitor or report port performance and logistics failures.",
    "Nigeria's aquaculture and inland waterways potential is almost entirely undeveloped.",
    "Coastal and riverine fishing communities have no market access infrastructure.",
    "Marine biotechnology and aquaculture innovations have no organized Nigerian platform for development.",
    "Port logistics data is fragmented across agencies — no single view exists for shippers or the public."
  ];
  p.who = [
    "Importers and exporters monitoring port efficiency and cargo movement",
    "Citizens reporting port delays, corruption, and logistics failures",
    "Aquaculture farmers and inland waterways fishers seeking market access",
    "Marine biotechnology researchers and aquaculture innovators",
    "Investors in Nigeria's fisheries, aquaculture, and blue economy sectors"
  ];
  p.does = [
    "Tracks and publishes port performance data — clearance times, congestion, and shipping efficiency",
    "Enables citizen and industry reporting of port delays and logistics failures",
    "Connects aquaculture producers and inland waterways fishers to buyers and markets",
    "Supports marine biotechnology innovation — vaccines, blue biotech, advanced fisheries",
    "Builds AquaWealth NG — a community-driven aquaculture and inland waterways innovation hub"
  ];
  p.features = [
    "Port360 NG — citizen and industry dashboard tracking port efficiency, shipping, and logistics",
    "AquaWealth NG — community aquaculture and inland waterways innovation and market hub",
    "Marine Biotechnology Hub — advanced fisheries, blue biotech, and aquaculture research platform",
    "Shipping and cargo tracking from port arrival to final delivery",
    "Marine safety advisory and incident reporting linked to NIMASA"
  ];
  p.how = [
    "Importer tracks cargo through Port360 NG from vessel arrival to gate-out in real time",
    "Citizen reports port delay or corruption incident with evidence through the platform",
    "Aquaculture farmer lists produce on AquaWealth NG and connects to urban fish buyers",
    "Marine biotech researcher publishes work and connects with innovation partners",
    "Inland waterways operator lists transport capacity and connects to cargo owners"
  ];
  p.impact = [
    "Port transparency improving as performance data is publicly visible and reported",
    "Aquaculture producers reaching urban markets at fair prices",
    "Nigeria's inland waterways utilized as a genuine logistics and commerce corridor",
    "Marine biotechnology innovations developed and scaled through an organized community",
    "Nigeria's blue economy growing as a real contributor to non-oil GDP"
  ];
  p.nigeria = [
    "Nigeria's ports handle billions in trade — their inefficiency is a tax on the entire economy",
    "Aquaculture can feed Nigeria's fish demand while creating hundreds of thousands of jobs",
    "Inland waterways are Nigeria's most underutilized transport infrastructure",
    "Blue economy development is Nigeria's largest untapped economic sector",
    "Port transparency is essential for attracting manufacturing investment that needs reliable logistics"
  ];
  p.investors = [
    "Maritime platform serving one of Africa's busiest port systems",
    "Port data and logistics intelligence subscription for shippers and freight forwarders",
    "Aquaculture marketplace transaction fees",
    "Marine biotechnology research partnership and innovation fund revenue",
    "Government blue economy and port efficiency programme contracts"
  ];
  p.future = [
    "Real-time vessel tracking integrated with NPA port management systems",
    "Nigeria inland waterways cargo booking and logistics platform",
    "Aquaculture investment fund connecting investors to Nigeria's fish farming sector",
    "Marine biotechnology innovation prize for Nigerian blue economy researchers",
    "West Africa blue economy platform connecting all coastal nations"
  ];
  p.subPlatforms = [
    {name:"Port360",       tagline:"Track Nigeria's port performance",            features:["Cargo tracking","Clearance time data","Congestion alerts","Port report submission","Shipping intelligence"]},
    {name:"AquaWealth",    tagline:"Aquaculture and inland waterways market",     features:["Fish produce listings","Buyer matching","Inland waterways map","Aquaculture training","Investment tools"]},
    {name:"MarineBiotech", tagline:"Advanced fisheries and blue biotechnology",   features:["Research sharing","Innovation showcase","Lab collaboration","Grant alerts","Industry connect"]},
    {name:"WaterLogistics",tagline:"Inland waterways cargo and transport",        features:["Cargo listings","Vessel capacity","Route planning","Booking tools","Waterway safety alerts"]},
    {name:"MarineSafe",    tagline:"Maritime safety and NIMASA reporting",        features:["Incident reporting","Safety advisories","Weather alerts","Emergency contacts","NIMASA routing"]}
  ];
})();


// ============================================================
//  PHARMABIOTECH — Local pharma producers + youth biotech labs
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="pharmabiotech"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Building Nigeria's Health Industry from Within";
  p.intro   = "PharmaBiotech is the platform that connects Nigeria's local pharmaceutical producers directly to hospitals and pharmacies, while building the next generation of Nigerian biotechnology innovators through BioLab NG. Nigeria imports 70% of its medicines while local manufacturers struggle to reach buyers and youth with biotech talent have no organized platform. PharmaBiotech fixes both — connecting what Nigeria already makes and building what it will make next.";
  p.problem = [
    "Nigerian pharmaceutical manufacturers cannot easily reach hospitals and pharmacies that could buy their products.",
    "Hospitals and pharmacies default to imported medicines without knowing Nigerian alternatives exist.",
    "Youth with biotechnology talent — vaccines, herbal medicine, diagnostics — have no innovation platform.",
    "Nigeria's enormous herbal medicine and traditional health knowledge is undocumented and undercommercialised.",
    "Fake and substandard drugs proliferate because verified local alternatives are hard to find.",
    "Pharmaceutical research by Nigerian universities never reaches the market or the public."
  ];
  p.who = [
    "Nigerian pharmaceutical manufacturers seeking direct connections to hospitals and pharmacy buyers",
    "Hospitals and pharmacies seeking verified, quality-assured local pharmaceutical suppliers",
    "Youth biotechnology innovators working on vaccines, diagnostics, herbal medicine, and health research",
    "Nigerian universities and research institutions doing pharmaceutical and biotech research",
    "Investors in Nigeria's local pharmaceutical manufacturing and biotechnology sector"
  ];
  p.does = [
    "Connects Nigerian pharmaceutical manufacturers directly to hospitals and pharmacies — PharmaNaija",
    "Lists verified local pharmaceutical products with quality certification and supply capacity",
    "Provides BioLab NG — a youth biotech innovation platform for vaccines, herbal medicine, and research",
    "Documents and archives Nigeria's traditional herbal medicine knowledge for commercialization",
    "Connects pharmaceutical researchers at universities to industry and investment partners"
  ];
  p.features = [
    "PharmaNaija — digital hub linking local pharmaceutical producers with hospitals and pharmacies",
    "BioLab NG — youth-driven biotech innovation labs for vaccines, herbal medicine, and research",
    "Local pharmaceutical product directory with NAFDAC certification verification",
    "Traditional medicine and herbal knowledge archive and commercialization platform",
    "Pharmaceutical research sharing platform connecting university labs to industry"
  ];
  p.how = [
    "Local manufacturer lists products with NAFDAC number, specifications, and supply capacity",
    "Hospital procurement officer searches for a drug category and finds verified local suppliers",
    "Youth biotech innovator creates a BioLab NG profile and showcases their research or product",
    "Herbal medicine practitioner documents formulations for the traditional knowledge archive",
    "University researcher publishes pharmaceutical research connecting to commercialization partners"
  ];
  p.impact = [
    "Local pharmaceutical manufacturers reaching hospital and pharmacy buyers for the first time at scale",
    "Import dependency on medicines reducing as local alternatives become discoverable",
    "Youth biotech innovations reaching the market through organized platform support",
    "Nigeria's traditional medicine knowledge preserved and commercialised legitimately",
    "Local pharmaceutical industry growing — creating jobs and reducing forex expenditure"
  ];
  p.nigeria = [
    "Nigeria imports 70% of medicines while local manufacturers cannot find buyers — PharmaNaija ends that paradox",
    "Local pharmaceutical supply reduces forex outflow and builds health security",
    "Youth biotech talent is building real innovations in Nigerian labs — they need a platform",
    "Traditional herbal medicine is a multi-billion naira sector deserving formal organization",
    "A self-sufficient Nigerian pharmaceutical industry is both a health and economic security imperative"
  ];
  p.investors = [
    "Pharmaceutical marketplace connecting a $2B+ local market that is currently fragmented",
    "Manufacturer listing and buyer connection subscription fees",
    "BioLab NG innovation programme sponsorship from pharmaceutical companies",
    "Traditional medicine commercialization platform revenue",
    "Government pharmaceutical sector development and import substitution programme contracts"
  ];
  p.future = [
    "Nigerian pharmaceutical quality mark — verified local product standard trusted by hospitals",
    "BioLab NG incubator — physical biotech innovation spaces in Nigerian university cities",
    "Vaccine manufacturing platform supporting Nigeria's local vaccine production ambition",
    "Traditional medicine clinical trials coordination platform",
    "Pan-African pharmaceutical marketplace connecting all African local manufacturers"
  ];
  p.subPlatforms = [
    {name:"PharmaNaija",   tagline:"Local pharma producers meeting hospitals",   features:["Manufacturer directory","Product listings","NAFDAC verification","Hospital procurement tools","Supply capacity data"]},
    {name:"BioLabNG",      tagline:"Youth biotech innovation platform",          features:["Innovator profiles","Research showcase","Lab collaboration","Investor connect","Innovation awards"]},
    {name:"LocalRx",       tagline:"Find verified Nigerian pharmaceutical products",features:["Drug search","Local alternative finder","Certification verification","Price comparison","Supplier contact"]},
    {name:"HerbalKnow",    tagline:"Traditional medicine archive and commercialization",features:["Formulation documentation","Knowledge archive","Practitioner profiles","Commercialization tools","Research connect"]},
    {name:"PharmaResearch", tagline:"University pharma research to market",      features:["Research publication","Industry connect","Commercialization pathway","Grant alerts","Collaboration matching"]}
  ];
})();


// ============================================================
//  TOURISM360 — Full tourism and cultural experience platform
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="tourism360"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Discover Nigeria. Experience Everything.";
  p.intro   = "Tourism360 NG is Nigeria's complete tourism and cultural experience platform — where every attraction, experience, festival, tour operator, and cultural treasure in Nigeria's 36 states is discoverable, bookable, and celebrated. From Yankari's elephants to Osun-Osogbo's sacred grove, from Calabar Carnival to Lagos beach weekends, from Kano ancient city to Idanre Hills, Tourism360 NG ensures that Nigeria's extraordinary tourism wealth reaches every visitor who is ready to experience it. Nigeria is ready. Tourism360 shows them where to go.";
  p.problem = [
    "Nigeria's extraordinary tourism assets — natural, cultural, and historical — are almost invisible to domestic and international visitors.",
    "Tourism businesses — hotels, tour operators, guides — have no organized digital marketplace.",
    "Domestic Nigerians travel abroad for experiences they could find at home if they knew where to look.",
    "Nigeria's negative international image is not countered by compelling, authentic tourism storytelling.",
    "State tourism boards have no shared digital platform for promoting their destinations nationally.",
    "Cultural festivals, heritage sites, and local experiences are not connected to visitors who would love them."
  ];
  p.who = [
    "Domestic Nigerians exploring their country for the first time",
    "International tourists seeking authentic Nigerian cultural, natural, and historical experiences",
    "Tour operators, guides, and hospitality businesses seeking more visitors",
    "State tourism boards promoting their destinations nationally and internationally",
    "Cultural event organisers connecting their festivals to audiences beyond their local community"
  ];
  p.does = [
    "Showcases every Nigerian tourism destination — natural, cultural, and historical — with rich authoritative content",
    "Enables booking of tours, guides, experiences, and accommodation across all 36 states",
    "Gives every state tourism board a digital promotion platform reaching national and global audiences",
    "Connects cultural festivals and events to visitors through an organized events calendar",
    "Counters Nigeria's negative international image with compelling, authentic tourism stories"
  ];
  p.features = [
    "Nigeria destination guide — comprehensive content on every state's tourism assets",
    "Tour and experience booking platform with verified operators and guides",
    "Cultural festival and event calendar covering all 36 states throughout the year",
    "State tourism board promotion tools and destination marketing analytics",
    "International visitor information — visa, safety, transport, cultural guidance"
  ];
  p.how = [
    "Visitor searches by state, experience type, or attraction and discovers rich content",
    "Books a tour, guide, or accommodation directly through verified operators on the platform",
    "State tourism board publishes and promotes destination content to national and global audiences",
    "Cultural festival lists on the events calendar reaching visitors planning ahead",
    "International visitor accesses practical guides for visa, safety, and cultural tips"
  ];
  p.impact = [
    "Nigeria's tourism sector receiving significantly more domestic and international visitors",
    "Tourism revenue growing in every state as attractions become discoverable and bookable",
    "Nigeria's international image shifting through authentic, compelling cultural tourism storytelling",
    "Tour operators and guides growing businesses through organized digital discovery",
    "Cultural festivals and events reaching far larger audiences than before"
  ];
  p.nigeria = [
    "Nigeria has Yankari, Obudu, Cross River rainforest, Benin Kingdom heritage, Osun-Osogbo — all largely unknown to the world",
    "Tourism is Nigeria's largest untapped non-oil economic opportunity",
    "Every naira earned from tourism is earned without extracting or depleting a resource",
    "Domestic tourism builds national unity as Nigerians discover their shared heritage",
    "International tourism counters negative Nigeria narratives better than any PR campaign"
  ];
  p.investors = [
    "Tourism platform serving one of Africa's most diverse and underdeveloped tourism markets",
    "Tour and experience booking commission revenue",
    "State tourism board digital marketing subscription fees",
    "Hotel and accommodation listing and booking revenue",
    "International tourism marketing partnership with NTDC and state boards"
  ];
  p.future = [
    "Virtual reality previews of Nigeria's most spectacular destinations for international visitors",
    "Tourism investment map connecting investors to underdeveloped destination infrastructure",
    "Nigeria tourism passport — rewarding domestic travellers who explore multiple states",
    "International travel influencer programme bringing global creators to Nigerian destinations",
    "West Africa tourism platform connecting the region's extraordinary destinations"
  ];
  p.subPlatforms = [
    {name:"DestinationNG",  tagline:"Every Nigerian attraction discovered",      features:["State destination guides","Attraction profiles","Photo and video content","Visitor tips","Itinerary builder"]},
    {name:"BookExperience", tagline:"Book tours guides and experiences",          features:["Tour operator directory","Experience booking","Guide profiles","Reviews","Payment tools"]},
    {name:"CultureCalendar",tagline:"Nigeria's festivals and cultural events",   features:["Festival listings","Event calendar","Cultural guides","RSVP tools","Tourism information"]},
    {name:"StateTourism",   tagline:"Tools for state tourism promotion",         features:["Destination publishing","Visitor analytics","Campaign builder","National reach","Partnership tools"]},
    {name:"VisitNaija",     tagline:"International visitor welcome platform",    features:["Visa guidance","Safety information","Cultural tips","Transport guides","Emergency contacts"]}
  ];
})();


// ============================================================
//  MOVECITY — Carpooling, traffic, okada safety, school runs
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="movecity"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Move Smarter. Lagos Was Not Built for This Traffic.";
  p.intro   = "MoveCity is Nigeria's urban mobility platform — where commuters share rides, report traffic in real time, find verified okada riders, split taxi fares, coordinate school runs, and alert each other to bus and danfo availability. Every tool Nigerian commuters actually need to survive the city — in one platform. Move smarter. Get there faster. Spend less.";
  p.problem = [
    "Nigerian urban commuters waste hours daily in preventable traffic with no organized information sharing.",
    "Carpooling happens informally — there is no platform to match urban workers going the same direction.",
    "Okada riders are unverified — commuters take safety risks with unknown riders daily.",
    "School runs cost parents enormous time and money with no coordination tools.",
    "Taxi and ride fares are not split efficiently — passengers pay full fare when sharing is possible.",
    "Bus and danfo availability information is nonexistent — commuters wait without knowing when the next one comes."
  ];
  p.who = [
    "Daily urban commuters in Lagos, Abuja, Port Harcourt, and other major Nigerian cities",
    "Parents coordinating school drop-offs and pickups for their children",
    "Workers wanting to carpool and share commute costs with colleagues going the same direction",
    "Commuters seeking verified, safe okada and keke riders",
    "Anyone who needs to split a taxi or ride fare with another passenger"
  ];
  p.does = [
    "Matches urban workers going the same direction for daily carpooling — CommuteShare",
    "Provides real-time community-driven traffic updates — TrafficPulse",
    "Verifies okada riders so commuters choose safe, rated riders — OkadaSafe",
    "Coordinates school runs — parents pool school drop-offs and pickups — SchoolRun Share",
    "Matches passengers splitting taxi fares going the same direction — TaxiSplit",
    "Alerts commuters to bus and danfo availability and crowding — BusAlert"
  ];
  p.features = [
    "CommuteShare — peer-to-peer carpooling for urban workers by route",
    "TrafficPulse — real-time community-driven traffic updates by area and route",
    "OkadaSafe — verified okada riders with ratings, route history, and safety record",
    "SchoolRun Share — parents in the same area pooling school pick-up and drop-off",
    "TaxiSplit — split ride fares with verified passengers going the same direction",
    "BusAlert — crowd alerts for danfo and bus availability and occupancy"
  ];
  p.how = [
    "Worker posts their route and departure time — matched to others going the same direction",
    "Commuter reports traffic on their route — community sees and avoids in real time",
    "Parent posts school run details — other parents in the area join and share the cost",
    "Commuter searches for verified okada near them — sees rating, route, and safety record",
    "Passenger posts taxi destination — another passenger going the same way splits the fare",
    "Commuter alerts others that their bus is full — next one available in 10 minutes"
  ];
  p.impact = [
    "Urban commuters saving hours weekly through informed route choices and ride sharing",
    "Commute costs reduced for workers through organized carpooling and fare splitting",
    "School run coordination saving parents money and time every school day",
    "Okada safety improving as unverified riders lose business to verified, rated alternatives",
    "Community traffic intelligence making Nigerian cities more navigable for everyone"
  ];
  p.nigeria = [
    "Lagos traffic congestion costs Nigeria over $1B annually in lost productivity",
    "Carpooling culture exists informally in Nigeria — MoveCity organizes and scales it",
    "Okada safety is a daily urban crisis — verification saves lives",
    "School run coordination is a daily pain for millions of Nigerian parents",
    "Urban mobility intelligence is the missing infrastructure for Nigeria's city growth"
  ];
  p.investors = [
    "Urban mobility platform serving tens of millions of daily commuters across Nigerian cities",
    "Ride matching and fare splitting transaction fees",
    "Verified rider certification subscription revenue from okada operators",
    "School run coordination premium subscription for parents",
    "Traffic data licensing to logistics companies, insurers, and city planners"
  ];
  p.future = [
    "Electric okada and keke verification programme for green urban mobility",
    "BRT and formal public transport integration with live capacity data",
    "Corporate commute management for large employers managing staff transport",
    "Integration with Lagos, Abuja, and Port Harcourt traffic management systems",
    "Pan-Nigerian expansion to all cities with 100,000+ daily commuters"
  ];
  p.subPlatforms = [
    {name:"CommuteShare",  tagline:"Carpool with workers going your way",        features:["Route matching","Departure time sync","Cost splitting","Regular route saving","Rating system"]},
    {name:"TrafficPulse",  tagline:"Real-time community traffic updates",        features:["Route reports","Incident alerts","Congestion map","Alternative routes","Clear road confirmation"]},
    {name:"OkadaSafe",     tagline:"Verified okada and keke riders near you",    features:["Rider verification","Safety ratings","Route history","Booking tools","Emergency alert"]},
    {name:"SchoolRunShare",tagline:"Parents pooling school pick-ups",            features:["School route groups","Parent matching","Schedule coordination","Cost splitting","Child safety verification"]},
    {name:"TaxiSplit",     tagline:"Split taxi fares with safe passengers",      features:["Destination matching","Passenger verification","Fare calculator","Split confirmation","Rating tools"]}
  ];
})();


// ============================================================
//  TRANSPORT360 — Peer delivery, freight matching, rail, fuel alerts
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="transport360"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Moving Nigeria's Goods. Simply and Safely.";
  p.intro   = "Transport360 is Nigeria's freight, logistics, and intercity transport coordination platform — where truck drivers are matched with businesses needing cargo moved, rail booking becomes possible, fuel station queues are tracked in real time, road conditions are reported by drivers, peer delivery connects senders to riders, and parking is found through a community map. Every tool Nigeria's transport sector actually needs — in one place.";
  p.problem = [
    "Truck drivers return empty from deliveries because no platform connects them with loads going back.",
    "Fuel station queues cost drivers and logistics operators enormous time with no advance information.",
    "Road condition information does not exist — drivers hit bad roads, flooding, and closures without warning.",
    "Rail cargo and passenger booking is inaccessible and poorly communicated.",
    "Peer delivery for small parcels is unorganized — senders cannot find riders going their direction.",
    "Parking in Nigerian cities is chaotic — compound spaces go unused while drivers circle for hours."
  ];
  p.who = [
    "Truck drivers and haulage operators seeking loads to fill empty return journeys",
    "Businesses needing freight transport at competitive prices — CargoMatch NG",
    "Commuters and cargo owners wanting to book rail journeys — RailLink Naija",
    "Drivers reporting and checking road conditions before departure",
    "Individuals sending small parcels needing peer delivery riders going their direction",
    "Drivers seeking compound parking in urban areas — ParkLocator"
  ];
  p.does = [
    "Matches truck drivers with businesses needing freight moved — CargoMatch NG",
    "Tracks fuel station queue times and prices across Nigerian cities — FuelAlert NG",
    "Enables community road condition reporting — potholes, flooding, closures — RouteCheck",
    "Provides rail cargo and passenger booking and advocacy — RailLink Naija",
    "Connects parcel senders to delivery riders going in the right direction — DeliveryBuddy",
    "Maps compound and legal parking spaces in urban areas — ParkLocator"
  ];
  p.features = [
    "CargoMatch NG — linking truck drivers with businesses needing freight transport",
    "FuelAlert NG — real-time fuel station queue times and prices by location",
    "RouteCheck — community-reported road conditions, potholes, flooding, and closures",
    "RailLink Naija — rail cargo and passenger booking and advocacy hub",
    "DeliveryBuddy — peer delivery connecting parcel senders to riders going the same direction",
    "ParkLocator — find nearest available legal and compound parking spaces"
  ];
  p.how = [
    "Truck driver posts available space and destination — business with cargo going that way books it",
    "Driver checks FuelAlert before heading to fill up — sees which stations have fuel and short queues",
    "Driver reports pothole or flooded road — other drivers see it and plan alternative routes",
    "Shipper books rail cargo space through RailLink — receives confirmation and tracking",
    "Parcel sender posts destination on DeliveryBuddy — rider going that way picks it up for a fee",
    "Driver searches ParkLocator — finds a verified compound space near their destination"
  ];
  p.impact = [
    "Freight costs reduced as truck empty journeys are eliminated through cargo matching",
    "Driver time saved through fuel queue intelligence reducing logistics operating costs",
    "Road safety improved through community road condition reporting",
    "Rail cargo utilization increasing as booking becomes digital and accessible",
    "Peer delivery reducing last-mile delivery costs across Nigerian cities",
    "Urban congestion reduced as parking is found efficiently rather than circled for"
  ];
  p.nigeria = [
    "Empty return journeys cost Nigeria's logistics sector billions annually — cargo matching ends that",
    "Fuel queue management is a daily operational crisis for Nigerian transport businesses",
    "Road condition reporting saves lives and vehicles on Nigeria's poorly maintained road network",
    "Rail development requires demand data that digital booking provides",
    "Peer delivery infrastructure is the missing link in Nigeria's e-commerce growth story"
  ];
  p.investors = [
    "Logistics platform serving a sector worth trillions in annual cargo value",
    "Cargo matching transaction fees on every successful freight booking",
    "Premium subscription for fleet operators managing multiple trucks",
    "Rail booking partnership commission revenue",
    "Fuel and route intelligence data licensing to logistics companies and insurers"
  ];
  p.future = [
    "AI-powered route and load optimization for Nigeria's entire freight sector",
    "Integration with NRC Nigerian Railway Corporation for official rail booking",
    "Electric vehicle charging station location integration for Nigeria's EV logistics future",
    "Cross-border freight matching connecting Nigeria to Benin, Niger, and Cameroon",
    "National freight exchange — standardized pricing and booking for all Nigerian cargo"
  ];
  p.subPlatforms = [
    {name:"CargoMatch",    tagline:"Match truck drivers with freight loads",      features:["Load listings","Driver capacity","Route matching","Booking confirmation","Payment tools"]},
    {name:"FuelAlertNG",   tagline:"Real-time fuel queue and price tracker",      features:["Station queue times","Price by station","Best station near you","Shortage alerts","Community updates"]},
    {name:"RouteCheck",    tagline:"Community road condition reporting",          features:["Pothole reports","Flood alerts","Road closure notices","Route ratings","Alternative suggestions"]},
    {name:"RailLink",      tagline:"Rail cargo and passenger booking",            features:["Cargo booking","Passenger tickets","Route schedules","Tracking","Rail advocacy tools"]},
    {name:"DeliveryBuddy", tagline:"Peer delivery for parcels and packages",     features:["Parcel posting","Rider matching","Direction filter","Price negotiation","Delivery confirmation"]}
  ];
})();


// ============================================================
//  360ENERGY — Crowdfunded solar + citizen power monitoring
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="360energy"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Power the Nation. Track the Grid. Fund the Future.";
  p.intro   = "360Energy is Nigeria's citizen energy platform — where communities crowdfund solar projects that power their streets and schools through SolarNaija, and where citizens monitor and report power supply in real time through PowerTrack NG. Nigeria's electricity crisis is too big for government alone to solve. 360Energy turns every Nigerian into a participant in the solution — funding, monitoring, reporting, and holding the grid accountable.";
  p.problem = [
    "Communities that want solar power cannot access the collective financing to fund it alone.",
    "Citizens have no platform to officially report and track power outages — they suffer in silence.",
    "DisCo performance is invisible to the public — there is no accountability mechanism.",
    "Off-grid communities have no organized pathway to renewable energy solutions.",
    "Individual solar investment is expensive but community pooling makes it affordable.",
    "Energy data — how long each area gets power — is not tracked, published, or available publicly."
  ];
  p.who = [
    "Communities wanting to crowdfund solar projects for their streets, schools, and markets",
    "Citizens monitoring and reporting power supply in their area in real time",
    "DisCo and NERC watchers tracking distribution company performance publicly",
    "Renewable energy providers seeking community customers for solar installations",
    "Investors in community solar and off-grid energy solutions"
  ];
  p.does = [
    "Enables communities to crowdfund solar projects powering shared infrastructure — SolarNaija",
    "Enables citizens to monitor and report power supply in real time — PowerTrack NG",
    "Maps power availability nationally showing which areas have power at any given time",
    "Publishes DisCo performance scorecards built from citizen-reported outage data",
    "Connects off-grid communities to solar providers and financing for installation"
  ];
  p.features = [
    "SolarNaija — crowdfunded solar projects powering communities, schools, and markets",
    "PowerTrack NG — citizens monitor and report power supply in real time by location",
    "National power availability map — live picture of electricity across Nigeria",
    "DisCo scorecard — distribution company performance built from citizen data",
    "Solar provider marketplace — compare and connect to verified solar installation companies"
  ];
  p.how = [
    "Community leader posts a solar project on SolarNaija — community members contribute funding",
    "When target is reached solar provider is engaged and installation is tracked publicly",
    "Citizen reports power supply status — on or off — and duration for their area",
    "Reports aggregate into a live national power availability map",
    "DisCo performance is scored from citizen data and published publicly every month"
  ];
  p.impact = [
    "Communities with reliable solar power funded collectively by their own members",
    "National power availability picture created for the first time through citizen reporting",
    "DisCos held publicly accountable for outage performance through transparent data",
    "Off-grid communities connected to solar solutions at community scale",
    "Renewable energy transition accelerated through organized community investment"
  ];
  p.nigeria = [
    "Nigeria's electricity crisis costs the economy 2-3% of GDP annually — citizen energy action helps",
    "Community solar crowdfunding is the fastest route to reliable power for underserved areas",
    "DisCo accountability through citizen data is the most powerful regulatory tool available",
    "Nigeria's 180GW solar potential can only be unlocked through organized community investment",
    "Every community that achieves solar independence reduces pressure on the failing national grid"
  ];
  p.investors = [
    "Community energy platform serving 220 million Nigerians suffering from power failure",
    "Solar project crowdfunding platform fee on every funded installation",
    "Solar provider marketplace listing and lead generation subscription",
    "Power data licensing to energy companies, regulators, and investors",
    "Government off-grid electrification programme implementation contracts"
  ];
  p.future = [
    "Community energy cooperative model — communities own their solar infrastructure collectively",
    "Carbon credit issuance for verified community solar installations",
    "National energy storage coordination — community battery systems working together",
    "Integration with NERC and REA for official recognition of community power projects",
    "Pan-African community energy platform connecting off-grid communities across the continent"
  ];
  p.subPlatforms = [
    {name:"SolarNaija",    tagline:"Crowdfund solar power for your community",   features:["Project creation","Community contribution","Target tracking","Provider connect","Installation monitoring"]},
    {name:"PowerTrackNG",  tagline:"Report power supply in real time",           features:["On/off reporting","Duration tracking","Area aggregation","DisCo routing","National power map"]},
    {name:"DisCo Watch",   tagline:"DisCo performance from citizen data",        features:["Monthly scorecards","Outage frequency","Zone comparison","Citizen complaint tools","NERC reporting"]},
    {name:"SolarMarket",   tagline:"Find and compare solar providers",           features:["Provider directory","System size calculator","Price comparison","Installation reviews","Finance options"]},
    {name:"CommEnergy",    tagline:"Off-grid community energy coordination",     features:["Community project tools","Investment pooling","Provider matching","Progress tracking","Energy independence tracker"]}
  ];
})();


// ============================================================
//  BLOCKCHAINNET — Digital rights education + open data
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="blockchainnet"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Your Data. Your Rights. Your Power.";
  p.intro   = "BlockchainNet is Nigeria's digital rights and open data platform — where citizens learn their rights in the digital space through DataShield NG, and where open datasets are shared, accessed, and reused for civic, research, and innovation purposes through OpenData Naija. In a world where data is power, BlockchainNet ensures Nigerians know their rights, protect their privacy, and use open data to hold institutions accountable and build better solutions.";
  p.problem = [
    "Most Nigerians do not know their digital rights — they unknowingly surrender data and privacy daily.",
    "Digital surveillance, data harvesting, and online fraud are widespread with no citizen education platform.",
    "Government and institutional open datasets exist but are inaccessible, poorly formatted, or hidden.",
    "Researchers, journalists, and civic innovators cannot find or use Nigerian open data efficiently.",
    "There is no organized platform for Nigerian digital rights education and advocacy.",
    "Cryptocurrency and blockchain fraud thrives because citizens lack basic digital financial literacy."
  ];
  p.who = [
    "Nigerian citizens wanting to understand and protect their digital rights and privacy",
    "Researchers, journalists, and civic innovators needing access to Nigerian open datasets",
    "Civil society organizations doing digital rights advocacy and education",
    "Government agencies publishing open data for public access and reuse",
    "Developers building civic applications using Nigerian open data"
  ];
  p.does = [
    "Educates Nigerian citizens on their digital rights — privacy, consent, data protection — DataShield NG",
    "Provides a civic hub for sharing and reusing Nigerian open datasets — OpenData Naija",
    "Delivers digital security education — protect yourself online, spot fraud, avoid scams",
    "Connects open data to researchers, journalists, and civic innovators who can use it",
    "Advocates for stronger Nigerian digital rights legislation and enforcement"
  ];
  p.features = [
    "DataShield NG — citizen digital rights education on privacy, consent, and data protection",
    "OpenData Naija — civic hub for sharing and reusing Nigerian open government datasets",
    "Digital security guides — fraud prevention, scam identification, account protection",
    "Data request tools — help citizens exercise their NDPR rights with institutions",
    "Open data API — developers access Nigerian civic datasets for app building"
  ];
  p.how = [
    "Citizen accesses DataShield NG and learns what their digital rights are under NDPR",
    "Learns how to identify data harvesting, phishing, and digital fraud targeting Nigerians",
    "Researcher finds and downloads a Nigerian government dataset from OpenData Naija",
    "Journalist uses open data to investigate an institutional claim or policy outcome",
    "Developer accesses the open data API and builds a civic application using Nigerian data"
  ];
  p.impact = [
    "Nigerians knowing and exercising their digital rights reducing exploitation and fraud",
    "Open data accessible to researchers and journalists improving accountability and evidence",
    "Digital security literacy reducing the billions Nigerians lose to online fraud annually",
    "Civic applications built on Nigerian open data solving real national problems",
    "Digital rights culture embedded in Nigerian society — aware, protected, and empowered"
  ];
  p.nigeria = [
    "Nigerians lose billions to online fraud annually — digital security literacy is an urgent national need",
    "NDPR exists but most Nigerians do not know their rights under it — DataShield closes that gap",
    "Open data is essential for evidence-based journalism and civic accountability in Nigeria",
    "Developers building on Nigerian open data create solutions that government cannot build fast enough",
    "Digital rights protection is as important as physical rights protection in 21st century Nigeria"
  ];
  p.investors = [
    "Digital rights platform attracting international data protection and civil liberties funding",
    "Open data platform subscription for government agencies publishing datasets",
    "Digital security training programme contracts for corporations and government",
    "Research institution data access subscription fees",
    "International digital rights organization partnership funding"
  ];
  p.future = [
    "AI-powered scam and fraud detection tool for Nigerian digital users",
    "NDPR compliance tool for Nigerian businesses managing personal data",
    "National open data standard for all Nigerian government data publication",
    "Digital rights legal clinic — help citizens take action against data violations",
    "Pan-African digital rights platform connecting all African data protection movements"
  ];
  p.subPlatforms = [
    {name:"DataShieldNG",  tagline:"Know and protect your digital rights",       features:["Rights education","NDPR guide","Privacy settings help","Data request tools","Violation reporting"]},
    {name:"OpenDataNaija", tagline:"Nigerian open datasets for civic use",       features:["Dataset catalogue","Download tools","API access","Submission portal","Usage stories"]},
    {name:"SecureOnline",  tagline:"Digital security for every Nigerian",        features:["Scam identification","Fraud prevention guides","Account protection","Phishing alerts","Scam database"]},
    {name:"DataAdvocacy",  tagline:"Campaigning for Nigerian digital rights",    features:["Advocacy campaigns","Policy tracking","Petition tools","Coalition builder","Legislative monitoring"]},
    {name:"CivicData",     tagline:"Open data for developers and researchers",   features:["Developer API","Research datasets","Data documentation","Usage guidelines","Contributor tools"]}
  ];
})();


// ============================================================
//  AIRSPACEHUB — Airline/airport spotlight + youth aerospace
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="airspacehub"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Nigeria's Aviation and Aerospace Future";
  p.intro   = "AirspaceHub is Nigeria's aviation and aerospace platform — where FlyNaija Hub spotlights Nigerian airlines, airports, and aviation services connecting passengers to reliable flight information, and where AeroYouth NG trains and mentors Nigerian youth in aerospace engineering, drone operation, and piloting. Nigeria's skies are an economic and career opportunity. AirspaceHub opens them up.";
  p.problem = [
    "Nigerian air passengers have no reliable platform for accurate airline and airport service information.",
    "Nigerian airlines and aviation services are poorly promoted and hard to compare.",
    "Youth interested in aerospace engineering, drone operation, and piloting have no organized development pathway.",
    "Aviation safety incident information is not organized or accessible to the public.",
    "Drone regulation and airspace rules are poorly communicated to the growing Nigerian drone community.",
    "Nigeria's aviation sector lacks the organized community infrastructure of comparable global markets."
  ];
  p.who = [
    "Nigerian air passengers seeking reliable airline and airport information",
    "Nigerian airlines and aviation service companies seeking visibility and passenger connection",
    "Youth interested in aerospace engineering, drone technology, and piloting careers",
    "AeroYouth NG trainees seeking mentorship, certification, and career pathways",
    "Aviation regulators, NCAA, and FAAN communicating with industry and the public"
  ];
  p.does = [
    "Spotlights Nigerian airlines, airports, and aviation services — FlyNaija Hub",
    "Provides real-time flight and airport status information for Nigerian routes",
    "Trains and mentors Nigerian youth in aerospace engineering, drones, and piloting — AeroYouth NG",
    "Delivers drone regulation guidance and connects the Nigerian drone community",
    "Tracks and reports aviation safety incidents linked to NCAA for accountability"
  ];
  p.features = [
    "FlyNaija Hub — platform spotlighting Nigerian airlines, airports, and aviation services",
    "AeroYouth NG — training and mentorship hub for youth in aerospace engineering, drones, and piloting",
    "Real-time flight status and airport information for all Nigerian routes",
    "Drone regulation guide and operator community platform",
    "Aviation safety incident reporting with NCAA routing"
  ];
  p.how = [
    "Passenger searches their airline and route — finds accurate flight status and service information",
    "Nigerian airline lists services, routes, and updates reaching passengers through the platform",
    "Youth registers for AeroYouth NG — accesses training content, mentors, and certification pathways",
    "Drone operator accesses regulation guides and connects with the community for safe operations",
    "Aviation safety incident is reported through the platform with routing to NCAA"
  ];
  p.impact = [
    "Nigerian passengers better informed about airlines and airports they use",
    "Nigerian aviation sector better visible and promoted to domestic and international passengers",
    "Youth with organized pathways into aerospace engineering, drone, and piloting careers",
    "Drone community operating safely with clear regulation guidance",
    "Aviation accountability improving through organized incident reporting"
  ];
  p.nigeria = [
    "Nigeria handles millions of aviation movements annually — passengers deserve better information",
    "Nigerian airlines need promotion infrastructure to compete with foreign carriers for domestic passengers",
    "Aerospace youth development is essential for Nigeria's long-term aviation independence",
    "Drone technology can transform Nigerian agriculture, security, and logistics — youth must lead it",
    "A modern, organized aviation sector supports Nigeria's economic and connectivity ambitions"
  ];
  p.investors = [
    "Aviation platform serving one of Africa's busiest aviation markets",
    "Airline and airport promotion subscription revenue",
    "AeroYouth NG training programme certification fees",
    "Drone operator certification and community subscription revenue",
    "Government aviation communication and safety reporting platform contracts"
  ];
  p.future = [
    "Nigerian aviation quality certification — passenger-rated airline and airport standards",
    "AeroYouth scholarship fund for youth pursuing aerospace engineering degrees",
    "Nigeria drone delivery pilot programme coordination platform",
    "Integration with NCAA, FAAN, and all Nigerian airline operational systems",
    "West Africa aviation intelligence platform covering all regional airports"
  ];
  p.subPlatforms = [
    {name:"FlyNaijaHub",   tagline:"Spotlight on Nigerian airlines and airports", features:["Airline profiles","Airport guides","Route information","Service reviews","Flight status"]},
    {name:"AeroYouthNG",   tagline:"Youth aerospace training and mentorship",     features:["Training pathways","Mentor matching","Drone certification","Piloting career guide","Aerospace engineering content"]},
    {name:"FlightWatch",   tagline:"Real-time flight and airport status",         features:["Live flight tracker","Delay alerts","Airport status","Departure/arrival info","Weather impact"]},
    {name:"DroneConnect",  tagline:"Nigeria's drone operator community",          features:["Regulation guides","Operator registration","Airspace info","Community forum","Safety reporting"]},
    {name:"AviationSafe",  tagline:"Aviation safety incident reporting",          features:["Incident report","NCAA routing","Safety trend data","Whistleblower protection","Industry alerts"]}
  ];
})();


// ============================================================
//  DEFENTECH — Local defense innovation showcase + youth peacekeeping
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="defentech"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Building Nigeria's Defense From Within";
  p.intro   = "DefenTech is Nigeria's civic defense platform — where DefTech NG showcases local defense innovations and technologies being developed by Nigerian engineers and companies, and where PeaceWorks NG engages youth and civilians in peacekeeping, security technology, and defense policy participation. Nigeria's security must be built by Nigerians. DefenTech is the platform where that building begins.";
  p.problem = [
    "Nigeria spends billions importing defense equipment that Nigerian engineers and manufacturers could produce.",
    "Local defense innovations by Nigerian engineers have no platform for showcase or government attention.",
    "Youth have no pathway to engage meaningfully with defense policy and peacekeeping as a career.",
    "Civilian understanding of and engagement with Nigeria's national defense is almost nonexistent.",
    "Defense technology research at Nigerian universities never reaches procurement decision-makers.",
    "Nigeria's peacekeeping capabilities — one of Africa's largest — are not connected to youth development."
  ];
  p.who = [
    "Nigerian engineers and manufacturers developing defense technology and equipment innovations",
    "Youth interested in peacekeeping, security technology, and defense policy careers",
    "Defense policy researchers and civilian security analysts",
    "Government defense procurement officials seeking local technology solutions",
    "Nigerian military and police technology units assessing domestic procurement options"
  ];
  p.does = [
    "Showcases local defense innovations — equipment, technology, and solutions — for government attention",
    "Engages Nigerian youth in peacekeeping, security tech, and defense policy through PeaceWorks NG",
    "Connects Nigerian defense researchers to procurement decision-makers",
    "Delivers defense policy education for civilian understanding and engagement",
    "Builds the Nigerian defense industry professional community"
  ];
  p.features = [
    "DefTech NG — showcase platform for Nigerian local defense innovations and technologies",
    "PeaceWorks NG — youth and civilian engagement in peacekeeping, security tech, and defense policy",
    "Defense procurement intelligence for government officials seeking local solutions",
    "Defense policy education content for civilian understanding",
    "Nigerian defense industry directory connecting manufacturers to government"
  ];
  p.how = [
    "Nigerian engineer showcases defense innovation on DefTech NG — reaches procurement officials",
    "Youth registers for PeaceWorks NG — accesses peacekeeping training, mentorship, and career pathways",
    "Defense procurement official searches DefTech NG for local alternatives to imports",
    "Civilian accesses defense policy education to understand Nigeria's security landscape",
    "Defense researcher connects with industry and government through the platform"
  ];
  p.impact = [
    "Local defense innovations reaching government attention and procurement consideration",
    "Nigerian youth with organized pathways into peacekeeping and defense careers",
    "Defense import substitution beginning as local solutions become visible and trusted",
    "Civilian defense engagement improving Nigeria's democratic oversight of security institutions",
    "Nigeria's defense industry developing a genuine commercial and innovation ecosystem"
  ];
  p.nigeria = [
    "Nigeria spends billions on imported defense equipment annually — local production is a strategic imperative",
    "Nigerian engineers can build defense solutions that meet local operational needs better than imports",
    "Nigeria's peacekeeping tradition is one of Africa's proudest — youth must inherit and advance it",
    "Civilian engagement in defense policy is essential for democratic accountability",
    "Building domestic defense capability is the foundation of true Nigerian strategic autonomy"
  ];
  p.investors = [
    "Defense platform with government strategic investment and procurement contract potential",
    "Local defense innovation showcase driving import substitution savings",
    "PeaceWorks NG training programme contracts with government and international peacekeeping bodies",
    "Defense policy research subscription services",
    "International defense cooperation organization partnership funding"
  ];
  p.future = [
    "National defense innovation prize fund for Nigerian engineers",
    "Nigerian Defense Technology Institute coordination platform",
    "Domestic defense procurement fast-track for DefTech NG verified manufacturers",
    "PeaceWorks NG UN peacekeeping preparation programme",
    "West Africa defense industry cooperation platform"
  ];
  p.subPlatforms = [
    {name:"DefTechNG",     tagline:"Showcase Nigerian defense innovations",      features:["Innovation listing","Engineer profiles","Government connect","Procurement visibility","Technology categories"]},
    {name:"PeaceWorksNG",  tagline:"Youth in peacekeeping and defense policy",   features:["Training content","Career pathways","Mentor matching","Policy education","UN peacekeeping guide"]},
    {name:"LocalDefense",  tagline:"Nigerian-made defense solutions directory",  features:["Product catalogue","Manufacturer profiles","Capability listing","Certification data","Procurement connect"]},
    {name:"DefensePolicy", tagline:"Civilian defense policy education",          features:["Policy explainers","Security analysis","Budget transparency","Parliamentary tracking","Civilian advocacy tools"]},
    {name:"DefenseResearch",tagline:"Defense research connecting to industry",   features:["Research publication","Industry connect","Government routing","Innovation prize","Collaboration tools"]}
  ];
})();


// ============================================================
//  ROBOTAI — Youth robotics playground + AI community hub
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="robotai"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Build Robots. Power AI. Lead Africa.";
  p.intro   = "RobotAI is Nigeria's platform for robotics and artificial intelligence — where RoboNaija gives Nigerian youth a playground to build, showcase, and test robots made from local and available materials, and where AI4Naija powers an AI community hub for Nigerian startups and AI enthusiasts solving Nigerian problems with machine intelligence. Build it. Test it. Show Nigeria what you made.";
  p.problem = [
    "Nigerian youth interested in robotics have nowhere to learn, build, or showcase what they create.",
    "AI knowledge in Nigeria is concentrated in a few elite institutions with most youth left out.",
    "Nigerian AI startups have no organized community, shared resources, or investor visibility.",
    "Robotics components are expensive and imported — local material-based building has no platform.",
    "Nigeria risks becoming a pure consumer of AI and robotics technology without building its own.",
    "No national competition or showcase exists for Nigerian youth robotics innovations."
  ];
  p.who = [
    "Nigerian youth building robots from local and available materials — RoboNaija",
    "AI enthusiasts, developers, and startups solving Nigerian problems with machine intelligence",
    "University engineering and computer science students entering AI and robotics",
    "AI4Naija community members sharing knowledge, tools, and collaboration",
    "Investors and corporations seeking Nigerian AI talent and robotics innovation"
  ];
  p.does = [
    "Provides RoboNaija — a playground where Nigerian youth build, test, and showcase robots",
    "Runs national robotics competitions celebrating Nigerian youth engineering talent",
    "Builds AI4Naija — an AI-powered community hub for Nigerian startups and AI enthusiasts",
    "Connects Nigerian AI developers to collaboration, tools, and investor visibility",
    "Showcases Nigerian robotics and AI innovations to the world"
  ];
  p.features = [
    "RoboNaija — build, test, and showcase platform for Nigerian youth robot builders",
    "AI4Naija — AI community hub for Nigerian startups, developers, and enthusiasts",
    "National robotics competition with real prizes and national recognition",
    "AI learning library — machine learning, data science, and AI tools for Nigerian developers",
    "Investor and corporate connect for the most promising Nigerian AI and robotics innovations"
  ];
  p.how = [
    "Young builder registers on RoboNaija — showcases their robot with video, photos, and description",
    "Community rates, comments, and challenges each other's builds",
    "National robotics competition runs quarterly — judges select and prize the best innovations",
    "AI developer joins AI4Naija — shares projects, finds collaborators, and accesses tools",
    "Investor discovers AI startup or robotics innovation through the platform showcase"
  ];
  p.impact = [
    "Nigerian youth building robots from local materials — engineering culture normalized",
    "National robotics competition creating annual celebration of Nigerian engineering talent",
    "Nigerian AI startups with organized community, shared resources, and investor visibility",
    "AI literacy spreading across Nigerian developer community through AI4Naija",
    "Nigeria recognized as an AI and robotics innovation nation on the African continent"
  ];
  p.nigeria = [
    "Nigeria's youth-heavy population can lead Africa's robotics and AI revolution with the right platform",
    "RoboNaija uses local materials — making robotics accessible without expensive imports",
    "Nigerian AI developers are building real solutions — they need community infrastructure",
    "National robotics competitions build engineering ambition across a generation",
    "Africa's AI leader will be the nation that organizes its talent first — Nigeria must act now"
  ];
  p.investors = [
    "AI and robotics platform serving one of Africa's largest youth technology talent pools",
    "Competition sponsorship from technology and manufacturing corporations",
    "AI community premium membership and tools subscription revenue",
    "Talent sourcing subscription for companies seeking Nigerian AI developers",
    "Government STEM and innovation programme implementation contracts"
  ];
  p.future = [
    "RoboNaija annual national championship — Nigeria's biggest engineering youth event",
    "AI4Naija incubator — supporting the most promising Nigerian AI startups",
    "Local robotics component marketplace — source materials for builds from Nigerian suppliers",
    "Nigeria AI research publication platform — connecting academic and industry AI work",
    "Pan-African AI and robotics platform connecting youth builders across the continent"
  ];
  p.subPlatforms = [
    {name:"RoboNaija",     tagline:"Build showcase and compete with robots",     features:["Robot showcase","Build documentation","Community ratings","Competition entry","Video demos"]},
    {name:"AI4Naija",      tagline:"AI community hub for Nigerian developers",   features:["Project sharing","Collaboration tools","AI tools library","Startup profiles","Investor connect"]},
    {name:"RoboComp",      tagline:"National robotics competition platform",     features:["Competition registration","Judging system","Prize board","Leaderboard","Build submission"]},
    {name:"AILearnNG",     tagline:"Machine learning and AI for Nigerian developers",features:["ML tutorials","Data science guides","AI tools access","Project templates","Certification prep"]},
    {name:"TechShowcase",  tagline:"Nigerian AI and robotics for investors",     features:["Innovation gallery","Startup profiles","Investor matching","Demo tools","Impact documentation"]}
  ];
})();


// ============================================================
//  NAIJYPULSE — National real-time situational awareness
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="naijypulse"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Seeing the Nation in Real Time";
  p.intro   = "NaijyPulse is Nigeria's national intelligence and monitoring platform — the digital eyes watching the nation in real time. It aggregates signals from citizens, media, environmental sensors, and all Naijy platforms to provide government agencies and authorized users with a live situational awareness picture of what is happening across Nigeria's 36 states and 774 LGAs. Not reaction. Awareness. Always on. Always watching.";
  p.problem = [
    "Nigeria has no unified national situational awareness system — crises escalate because early signals are missed.",
    "Government agencies operate in information silos — no shared picture of what is happening nationally.",
    "Environmental, social, security, and economic signals are generated but never aggregated into actionable intelligence.",
    "Early warning for floods, conflicts, disease outbreaks, and food crises requires a platform that does not exist.",
    "Decision-makers make reactive decisions rather than proactive ones because they cannot see emerging trends.",
    "National planning relies on outdated survey data when real-time signal intelligence is available but uncaptured."
  ];
  p.who = [
    "Federal and state government decision-makers needing a live national picture",
    "Emergency management agencies requiring real-time situational awareness",
    "Security agencies monitoring threat signals across all regions",
    "Public health authorities tracking disease outbreak early warning signals",
    "Urban management and infrastructure agencies monitoring critical systems"
  ];
  p.does = [
    "Aggregates signals from citizens, media, and environmental sensors into a live national picture",
    "Monitors trends across social, security, economic, health, and environmental dimensions",
    "Provides early warning alerts when signals indicate emerging crises",
    "Gives authorized government users a national situational awareness dashboard",
    "Feeds intelligence outputs to NaijyShield for response coordination"
  ];
  p.features = [
    "National real-time signal aggregation from all Naijy platforms and external sources",
    "Situational awareness dashboard for government and authorized agency users",
    "Early warning alert system for emerging security, health, and environmental threats",
    "Trend detection identifying patterns before they become crises",
    "Regional breakdown showing conditions across all 36 states and 774 LGAs"
  ];
  p.how = [
    "Signals flow continuously from citizen reports, media, sensors, and all Naijy platforms",
    "Algorithms detect patterns and anomalies signalling emerging issues",
    "Authorized government user sees a live national dashboard with alerts and trend data",
    "Early warning alert is issued to relevant agencies before situation becomes crisis",
    "Intelligence is passed to NaijyShield for response and resilience coordination"
  ];
  p.impact = [
    "Government with a live, accurate picture of national conditions for the first time",
    "Early warning reducing the scale and cost of crises through faster response",
    "Security agencies detecting threat signals before incidents occur",
    "Disease outbreaks caught earlier reducing spread and death toll",
    "Nigeria's governance quality improving through real-time situational intelligence"
  ];
  p.nigeria = [
    "Nigeria governs 220 million people largely without real-time national intelligence — NaijyPulse changes that",
    "Boko Haram, floods, disease outbreaks, and food crises all have early signals that go undetected",
    "Real-time national awareness is the foundation of proactive governance",
    "Every crisis that is prevented saves lives and national resources that prevention costs far less than response",
    "Nigeria positioning itself as a data-driven governance leader requires this infrastructure"
  ];
  p.investors = [
    "National intelligence platform with long-term government contract value",
    "Government situational awareness subscription — federal and state level",
    "International development bank investment in governance technology infrastructure",
    "Security agency intelligence tool licensing",
    "Research institution data access subscription fees"
  ];
  p.future = [
    "Satellite imagery integration for environmental and infrastructure signal monitoring",
    "IoT sensor network feeding real-time environmental and infrastructure data",
    "AI-powered crisis prediction modelling for national scenario planning",
    "Integration with NEMA, DSS, NIA, and all Nigerian intelligence and emergency agencies",
    "Pan-African situational awareness platform connecting national monitoring systems"
  ];
  p.subPlatforms = [
    {name:"NationDash",    tagline:"Live national situational awareness",        features:["Signal aggregation","Alert dashboard","Trend visualization","Regional breakdown","Agency routing"]},
    {name:"EarlyWarning",  tagline:"Detect crises before they happen",           features:["Anomaly detection","Pattern recognition","Alert issuance","Threshold setting","Historical baseline"]},
    {name:"SignalMap",     tagline:"Geographic signal visualization",            features:["State-level mapping","Signal density","Incident clustering","Trend heatmap","Time-lapse view"]},
    {name:"AgencyBrief",   tagline:"Intelligence briefings for government",      features:["Daily situation summary","Agency-specific views","Exportable briefings","Secure access","Priority alerts"]},
    {name:"ShieldLink",    tagline:"Feed intelligence to NaijyShield",          features:["Response trigger tools","Agency coordination","Intelligence handoff","Escalation protocols","Joint dashboard"]}
  ];
})();


// ============================================================
//  NAIJYSHIELD — National protection and resilience coordination
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="naijyshield"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Nigeria Protected. Resilient. Ready.";
  p.intro   = "NaijyShield is Nigeria's national protection and resilience coordination system — the platform that receives intelligence from NaijyPulse and SecureSight and transforms it into organized, multi-agency response and resilience action. Where NaijyPulse observes and SecureSight collects, NaijyShield acts — coordinating emergency response, managing civil defense, and building the national resilience systems that protect 220 million Nigerians from threats seen and unseen.";
  p.problem = [
    "Nigeria's security and emergency agencies respond to crises in silos — coordination failures cost lives.",
    "There is no national platform for implementing protection and resilience measures based on intelligence data.",
    "Emergency response is reactive and slow because there is no coordination infrastructure.",
    "Civil defense and national resilience planning has no organized digital management system.",
    "Intelligence gathered by NaijyPulse and SecureSight has no platform to be translated into action.",
    "Multi-agency response during floods, security incidents, and health emergencies is chaotic and duplicated."
  ];
  p.who = [
    "National security and emergency agency leadership coordinating multi-agency response",
    "NEMA and state emergency management agencies managing disaster response",
    "Military and police command structures coordinating security operations",
    "Civil defense organizations managing civilian protection and resilience",
    "Federal and state government executives overseeing national protection"
  ];
  p.does = [
    "Receives intelligence from NaijyPulse and SecureSight and triggers organized response actions",
    "Coordinates multi-agency emergency response — security, health, NEMA, and civil agencies",
    "Manages civil defense planning and civilian protection during crises",
    "Tracks response progress ensuring accountability and avoiding duplication",
    "Builds national resilience systems that work before, during, and after crises"
  ];
  p.features = [
    "Multi-agency response coordination platform for security and emergency incidents",
    "Intelligence intake from NaijyPulse and SecureSight with response trigger tools",
    "Civil defense planning and civilian protection management tools",
    "Response tracking — who is doing what, where, and with what resources",
    "National resilience planning tools for before-crisis preparedness"
  ];
  p.how = [
    "NaijyPulse or SecureSight flags an emerging threat — NaijyShield receives the alert",
    "Relevant agencies are notified and coordination tools activated for joint response",
    "Each agency logs their response actions — tracked centrally for accountability",
    "Civil defense protocols are activated for civilian protection in affected areas",
    "Post-incident analysis feeds into resilience planning for better future preparedness"
  ];
  p.impact = [
    "Multi-agency response faster and better coordinated — fewer lives lost in crises",
    "Duplication and contradiction between agencies eliminated through central coordination",
    "Civil defense and civilian protection systematically managed during emergencies",
    "National resilience improving through organized preparedness planning",
    "Nigeria's emergency management quality matching the scale of its challenges"
  ];
  p.nigeria = [
    "Nigeria faces floods, insurgency, banditry, and health emergencies simultaneously — coordination is survival",
    "Agency coordination failures during Borno, Lagos floods, and pandemics have cost lives — NaijyShield prevents that",
    "Civil defense in Nigeria is underdeveloped — organized protection systems save lives",
    "Resilience building is cheaper than crisis response — NaijyShield invests in both",
    "A coordinated Nigerian emergency system is a prerequisite for national security and development"
  ];
  p.investors = [
    "National protection platform with strategic government contract value",
    "Federal emergency management infrastructure contract opportunities",
    "International humanitarian and disaster risk reduction funding",
    "Military and police command system integration licensing",
    "World Bank and UNDP disaster risk reduction programme partnership funding"
  ];
  p.future = [
    "Full integration with NEMA, DSS, NIA, Nigerian Army, Police, and all security agencies",
    "AI-powered response recommendation engine for complex multi-agency incidents",
    "National disaster risk reduction strategy implementation platform",
    "Cross-border security coordination platform for West African emergency management",
    "Civilian early warning and protection app connected to NaijyShield response system"
  ];
  p.subPlatforms = [
    {name:"ResponseCoord",  tagline:"Multi-agency emergency response coordination",features:["Agency notification","Response task assignment","Progress tracking","Resource allocation","Command dashboard"]},
    {name:"IntelIntake",    tagline:"Receive and act on NaijyPulse intelligence", features:["Alert intake","Threat classification","Response trigger","Agency routing","Escalation management"]},
    {name:"CivilDefense",   tagline:"Civilian protection during emergencies",     features:["Protection protocols","Evacuation coordination","Shelter management","Community alert tools","Civilian safety tracking"]},
    {name:"ResiliencePlan", tagline:"Building national resilience before crises", features:["Risk assessment tools","Preparedness planning","Resource pre-positioning","Drill coordination","Vulnerability mapping"]},
    {name:"ShieldAnalytics",tagline:"Post-incident analysis and improvement",    features:["Response timeline review","Gap identification","Agency performance","Lessons documented","Planning updates"]}
  ];
})();


// ============================================================
//  INNOVATELAB — Hackathons for Nigerian problems + rural tech
// ============================================================
(function() {
  var p = platforms.find(function(x){ return x.key==="innovatelab"; });
  if(!p) return;
  p.status  = "Active / Growing";
  p.tagline = "Hack Nigeria's Problems. Build the Solutions.";
  p.intro   = "InnovateLab is Nigeria's technology innovation and hackathon platform — where Code4Naija runs hackathons solving Nigeria's specific challenges with technology, and RuralTech NG connects innovators designing affordable, practical technology solutions for rural Nigerian communities. Nigeria's problems are Nigeria's greatest innovation opportunity. InnovateLab is where the best minds in Nigeria hack them into solutions.";
  p.problem = [
    "Nigerian technology innovators have no organized national hackathon infrastructure for tackling local problems.",
    "Technology solutions built for Nigeria are often built by people who don't understand Nigerian realities.",
    "Rural communities in Nigeria are excluded from technological solutions because innovators don't design for them.",
    "Nigeria-specific challenges — power, water, agriculture, security, health — need Nigeria-specific tech solutions.",
    "Tech talent in Nigeria is abundant but lacks organized problem-solving and innovation infrastructure.",
    "Innovations built at Nigerian hackathons are rarely taken from prototype to deployed solution."
  ];
  p.who = [
    "Nigerian software developers, designers, and technologists wanting to solve local problems",
    "Innovators designing low-cost, practical technology solutions for rural Nigerian communities",
    "University students and tech graduates seeking meaningful innovation challenges",
    "Organizations with Nigerian-specific problems needing technology solutions",
    "Investors and NGOs seeking to fund and scale the best Nigerian technology innovations"
  ];
  p.does = [
    "Runs Code4Naija — hackathons focused on solving Nigeria's specific challenges with technology",
    "Builds RuralTech NG — platform connecting innovators designing low-cost rural technology solutions",
    "Provides the infrastructure for problem submission, team formation, and solution development",
    "Takes innovations from hackathon prototype to funded, deployed solution",
    "Connects Nigerian technology innovations to investors, government, and NGO implementation partners"
  ];
  p.features = [
    "Code4Naija — national hackathon platform for Nigerian-specific technology challenges",
    "RuralTech NG — innovators designing and sharing low-cost technology for rural communities",
    "Problem submission — organizations post real Nigerian problems needing technology solutions",
    "Team formation tools — solo innovators find co-builders with complementary skills",
    "Solution to scale pathway — from hackathon winner to funded, deployed product"
  ];
  p.how = [
    "Organization or government agency submits a real Nigerian problem on Code4Naija",
    "Teams register, form, and hack solutions over a defined period",
    "Solutions are submitted, judged, and the best ones are publicly showcased",
    "RuralTech NG innovator posts a low-cost technology solution designed for rural use",
    "Rural community accesses, adopts, or co-develops the solution for their specific context"
  ];
  p.impact = [
    "Nigerian technology solving Nigerian problems — not imported solutions missing local context",
    "Hackathon culture embedded in Nigeria's technology community solving real challenges",
    "Rural communities accessing affordable technology solutions designed specifically for them",
    "Nigeria's best technology innovations reaching deployment rather than staying as prototypes",
    "Tech talent directed at the problems that matter most for Nigerian development"
  ];
  p.nigeria = [
    "Nigeria's problems — power, water, health, agriculture — need technology solutions built by Nigerians who live them",
    "Hackathon culture transforms idle tech talent into active problem-solvers",
    "Rural technology design requires innovators who understand rural Nigerian realities — RuralTech builds that community",
    "Every Nigerian problem solved by a Nigerian innovator keeps value and talent in Nigeria",
    "A national hackathon infrastructure is essential for Nigeria's technology-driven development ambition"
  ];
  p.investors = [
    "Innovation platform attracting corporate, government, and international development hackathon sponsorship",
    "Hackathon entry and team registration fees",
    "Innovation-to-scale programme facilitation fees",
    "RuralTech solution licensing and deployment partnership revenue",
    "Government innovation challenge implementation contracts"
  ];
  p.future = [
    "Annual National Innovation Hackathon — Nigeria's biggest technology problem-solving event",
    "InnovateLab fund — grants for the most promising hackathon solutions reaching deployment",
    "Rural technology kits — affordable hardware designed around RuralTech innovations",
    "Government fast-track procurement for InnovateLab certified innovations",
    "Pan-African hackathon network — solving African problems with African solutions"
  ];
  p.subPlatforms = [
    {name:"Code4Naija",    tagline:"Hackathons solving Nigerian problems",        features:["Problem submission","Team registration","Hackathon management","Submission portal","Judging system"]},
    {name:"RuralTechNG",   tagline:"Low-cost technology for rural Nigeria",      features:["Solution showcase","Rural problem library","Innovator profiles","Community adoption tools","Deployment tracking"]},
    {name:"TeamForm",      tagline:"Build your hackathon team",                  features:["Skill listing","Team matching","Role posting","Co-founder connect","Team dashboard"]},
    {name:"ScalePath",     tagline:"From prototype to deployed solution",        features:["Pitch tools","Investor connect","NGO partner matching","Government procurement","Scale milestone tracker"]},
    {name:"HackShowcase",  tagline:"Nigeria's best hackathon innovations",       features:["Innovation gallery","Public voting","Media tools","Award nominations","Implementation stories"]}
  ];
})();