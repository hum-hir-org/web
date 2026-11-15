/* Humanize Hiring Association — app.js
   Vanilla JS: EN/HU switcher (no reload, saved in localStorage), mobile menu,
   scroll reveal, scroll-spy, mailto-based early-interest form. */
(function () {
  'use strict';

  // >>> Replace with the association's real contact address before publishing. <<<
  var CONTACT_EMAIL = 'hello@humanizehiring.org';

  var STORAGE_KEY = 'hha-lang';
  var DEFAULT_LANG = 'en';

  var I18N = {
    en: {
      "meta.title": "Humanize Hiring Association — More human, fairer and more transparent hiring.",
      "meta.desc": "Humanize Hiring Association (under incorporation) is an independent, non-profit international initiative developing the People-First Hiring Certified standard for fair and transparent recruitment.",
      "meta.ogdesc": "The independent standard for fair and transparent recruitment. Non-profit initiative, under incorporation. Budapest, Hungary.",
      "a11y.skip": "Skip to content",
      "nav.aria": "Main navigation",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.aria": "Language",
      "nav.join": "Join the Community",
      "hero.badge": "Non-Profit Initiative • Under Incorporation",
      "hero.cta1": "Join the LinkedIn Community",
      "hero.cta2": "Explore the Standard",
      "status.pill": "Under incorporation",
      "std.tag": "In development",
      "int.title": "Help shape the standard",
      "int.text": "The framework is currently in development. If your organisation or expertise can contribute to pilot testing or peer review, reach out—expressing interest carries no commitment.",
      "int.subject": "Early interest: People-First Hiring Certified",
      "int.cta1": "Express interest by email",
      "int.cta2": "Follow for updates",
      "com.eyebrow": "Community & channels",
      "com.title": "Two channels, one mission",
      "com.lead": "Open, moderated dialogue happens in our LinkedIn Group; official publications and standard updates live on our Organization Page.",
      "com.g.title": "LinkedIn Group",
      "com.g.text": "A private, moderated forum bringing candidates, hiring managers, recruiters, and researchers together for constructive dialogue.",
      "com.g.cta": "Join the LinkedIn Group",
      "com.o.title": "LinkedIn Organization Page",
      "com.o.text": "Official announcements, research insights, and milestones for the People-First Hiring Certified standard.",
      "com.o.cta": "Follow the Organization Page",
      "footer.slogan": "Better hiring starts with understanding people.",
      "footer.org": "Humanize Hiring Association (under incorporation) • 2026 • Budapest, Hungary",
      "footer.links": "Connect",
      "footer.group": "LinkedIn Group",
      "footer.page": "LinkedIn Organization Page",
      "footer.contact": "Contact",
      "footer.status": "(under incorporation)",
      "hero.title": "More human, fairer and more transparent hiring.",
      "s1.eyebrow": "The big picture",
      "s1.title": "Why is hiring more than a simple HR question?",
      "s1.p1": "Hiring does more than shape careers. It affects how companies operate, the opportunities open to individuals, society and the economy as a whole.",
      "s1.p2": "How organisations look for and select people determines which skills and abilities they recognise and value, who gains access to professional opportunities, and how effectively human potential is put to use.",
      "s1.p3": "Yet hiring practices have not kept pace with the transformation of the world of work. Technological progress, AI-driven processes, economic uncertainty and rapidly changing skill demands are reshaping the labour market from the ground up. Meanwhile, recruitment and selection in many cases still rest on previous job titles, rigid requirements and opaque screening processes.",
      "s1.lead": "The consequences reach far beyond a poor candidate experience:",
      "s1.b1": "Valuable human skills and opportunities go unrecognised and unused.",
      "s1.b4": "The lack of transparency and accountability undermines trust in hiring.",
      "s1.b5": "Inadequate recruitment and selection practices can deepen inequalities of opportunity and impair the efficient functioning of the labour market.",
      "s1.p4": "Humanize Hiring believes that renewing hiring is not just an HR matter but a social and economic challenge that calls for shared attention and action.",
      "s2.title": "Our mission",
      "s2.text": "Renewing hiring through the joint effort of everyone who shapes and experiences how it works. We turn real experience and evidence-based knowledge into practical standards, better labour-market practices and lasting change.",
      "s3.title": "Our vision",
      "s3.text": "We want a labour market where people are recognised and valued for their real abilities and potential to grow; where fair and transparent hiring practices make professional opportunities more accessible to everyone; and where recruitment and selection create long-term value for individuals, organisations and society.",
      "s4.title": "Why now?",
      "s4.lead": "Four defining challenges make change increasingly urgent.",
      "s4.1.t": "Technological transformation",
      "s4.1.d": "Artificial intelligence and automation are changing how organisations find, screen and assess potential colleagues. These technologies make more efficient and better-founded hiring possible, but they also raise important questions about fairness, transparency, human oversight and accountability.",
      "s4.2.t": "Skills shortages and hidden talent",
      "s4.2.d": "While organisations increasingly report difficulty finding the right professionals, rigid job requirements and templated pre-screening methods often prevent relevant abilities and transferable skills from being recognised.",
      "s4.3.t": "Eroding trust in hiring",
      "s4.3.d": "Vague job ads, opaque assessment criteria, excessive or job-unrelated test assignments, incomplete communication and rejections without explanation breed frustration and undermine trust on both sides of the hiring process.",
      "s4.4.t": "Untapped human potential",
      "s4.4.d": "People’s real abilities, experience and potential to grow cannot always be recognised from job titles or linear career paths. Recognising these abilities better can open new opportunities for individuals and create significant value for organisations and the economy.",
      "s5.title": "Our four core pillars",
      "s5.lead": "Humanize Hiring’s work rests on four mutually reinforcing principles.",
      "s5.1.t": "Recognising skills and potential",
      "s5.1.a": "Recognising people’s real abilities, transferable skills and potential to grow, beyond previous job titles and conventional career paths.",
      "s5.1.b": "Encouraging skills-based approaches that help organisations identify relevant talent and widen access to professional opportunities.",
      "s5.2.t": "Meaningful transparency",
      "s5.2.a": "Making hiring processes understandable, predictable and transparent.",
      "s5.2.b": "Promoting clear job ads, realistic expectations, unambiguous assessment criteria, honest communication and meaningful feedback.",
      "s5.3.t": "Fairness, dignity and accountability",
      "s5.3.a": "Promoting that candidates are treated with dignity and respect throughout the entire hiring process.",
      "s5.3.b": "Supporting fair and consistent assessment, proportionate selection methods, timely information, and clear responsibility for decisions and the practices used.",
      "s5.4.t": "Responsible technology and AI",
      "s5.4.a": "Encouraging the responsible use of technology and artificial intelligence in recruitment and selection.",
      "s5.4.b": "Strengthening appropriate human oversight, transparency and accountability, and promoting safeguards against unfair or unjustified decisions.",
      "s5.4.c": "Technology should support better decisions, not replace human responsibility.",
      "s6.title": "The entire hiring process",
      "s6.p1": "Human-centred hiring cannot be achieved by improving a single sub-process.",
      "s6.p2": "Humanize Hiring’s framework looks at the whole process, from first impression to final decision.",
      "s6.1.t": "Job posting",
      "s6.1.1": "Accurate descriptions that reflect the real role and tasks.",
      "s6.1.2": "Clear responsibilities and expectations.",
      "s6.1.3": "Transparent pay and benefits information.",
      "s6.1.4": "Requirements aligned with the actual needs of the job.",
      "s6.2.t": "Sourcing and initial assessment",
      "s6.2.1": "Recognising relevant skills and transferable abilities.",
      "s6.2.2": "Extending assessment beyond keywords and previous job titles.",
      "s6.2.3": "Proportionate and responsible use of automated pre-screening and artificial intelligence.",
      "s6.2.4": "Human oversight and fair assessment practices.",
      "s6.3.t": "Selection and assessment",
      "s6.3.1": "Clear and consistent assessment criteria.",
      "s6.3.2": "Relevant and proportionate interview processes.",
      "s6.3.3": "Reasonable, job-related test assignments.",
      "s6.3.4": "Respect for candidates’ time and invested effort.",
      "s6.4.t": "Communication and decision-making",
      "s6.4.1": "Predictable timelines and meaningful updates.",
      "s6.4.2": "Clear communication of decisions and outcomes.",
      "s6.4.3": "Constructive feedback where justified and feasible.",
      "s6.4.4": "Taking responsibility throughout the process.",
      "s6.p3": "Our aim is not to impose a single, uniform hiring process on every organisation, but to define consistent principles and measurable expectations that can be applied across different industries, roles and labour markets.",
      "s7.title": "What do we do?",
      "s7.lead": "Humanize Hiring helps turn shared principles into practice through four complementary activities.",
      "s7.1.t": "Community and movement",
      "s7.1.a": "We are building an international community of candidates, employers, HR and recruitment professionals, business leaders, researchers and other stakeholders.",
      "s7.1.b": "We make room for open dialogue, sharing experience and constructive collaboration.",
      "s7.2.t": "Research and evidence",
      "s7.2.a": "We explore the real experiences of candidates and organisations.",
      "s7.2.b": "We identify systemic problems, examine hiring practices and develop evidence-based recommendations.",
      "s7.3.t": "Education and awareness",
      "s7.3.a": "We raise awareness of the problems, challenge outdated practices, and promote skills-based approaches, fairness, transparency and the responsible use of technology.",
      "s7.4.t": "Standards and certification",
      "s7.4.a": "We develop practical, measurable standards for human-centred hiring, and recognise organisations that demonstrate, through verifiable practices, that they uphold these principles.",
      "s8.title": "People-First Hiring Certified",
      "s8.sub": "An independent international standard for fair and transparent hiring",
      "s8.p1": "One of Humanize Hiring’s central long-term goals is to create an independent, internationally applicable employer certification system.",
      "s8.p2": "The People-First Hiring Certified certification recognises organisations that demonstrate their commitment to human-centred hiring through measurable practices and evidence subject to independent assessment.",
      "s8.p3": "The certification system translates the four core pillars into practical assessment criteria and verifiable organisational requirements.",
      "s8.offer": "What does the certification offer?",
      "s8.o1.t": "For candidates:",
      "s8.o1.d": "a credible reference point for judging employers’ hiring practices.",
      "s8.o2.t": "For employers:",
      "s8.o2.d": "a practical framework for assessing and improving their recruitment and selection processes.",
      "s8.o3.t": "For the labour market as a whole:",
      "s8.o3.d": "a reliable benchmark for fair, transparent and accountable hiring practices.",
      "s8.n1": "The certification cannot rest on a signed statement or public pledge alone.",
      "s8.n2": "Its credibility comes from transparent criteria, a documented assessment methodology, independent adjudication, regular review, and safeguards for managing conflicts of interest.",
      "s8.n3": "The certification framework is being developed gradually, building on research, stakeholder involvement and pilot programmes.",
      "s9.title": "Independence & Governance",
      "s9.p1": "Humanize Hiring Association is an independent, non-profit professional association currently under incorporation in Hungary, with an international mission and scope.",
      "s9.p2": "Credible standards require clear governance. To ensure that our research, benchmarks and future certification remain objective and trusted across the labour market, our work is guided by four core governance principles:",
      "s9.1.t": "Open, multi-stakeholder collaboration:",
      "s9.1.d": "We welcome founders, employers, HR practitioners, researchers, candidates and solution providers to contribute expertise, insight and pilot experience to advance human-centred hiring.",
      "s9.2.t": "Merit-based, transparent criteria:",
      "s9.2.d": "The People-First Hiring Certified standard is built on documented, publicly accessible criteria—evaluated consistently against verifiable evidence rather than status or affiliation.",
      "s9.3.t": "Separation of standard-setting and assessment:",
      "s9.3.d": "Certification evaluations are conducted independently of commercial partnerships, sponsorships or community participation, ensuring equal conditions for every applicant organisation.",
      "s9.4.t": "Transparent conflict-of-interest management:",
      "s9.4.d": "Any potential overlap between commercial activities, advisory roles and governance responsibilities is openly disclosed and managed through clear recusal rules.",
      "s10.title": "International aim, Hungarian foundation",
      "s10.p1": "Humanize Hiring is being established in Hungary, and its initial activities and pilot programmes focus on Hungary and the Central and Eastern European region.",
      "s10.p2": "Its identity and aim, however, have been international from the start.",
      "s10.p3": "The initiative aims to develop principles, research and professional standards that can be applied across different labour markets, taking into account differences in local employment practices, legal frameworks and cultural characteristics.",
      "s10.p4": "To this end, we build international partnerships and work with professional communities, employers, researchers and organisations committed to improving hiring practices.",
      "s11.title": "Our positioning",
      "s11.not": "Humanize Hiring is not:",
      "s11.n1": "A recruitment agency.",
      "s11.n2": "A job board or candidate marketplace.",
      "s11.n3": "An HR technology company.",
      "s11.n4": "A business consultancy selling recruitment services.",
      "s11.n5": "A campaign against employers or HR.",
      "s11.n6": "A candidate complaints book or a platform that pillories companies.",
      "s11.p3": "Our approach is constructive, independent and solution-oriented.",
      "s12.title": "Our central message",
      "s12.bold": "We are wasting human potential. It is time to rethink hiring.",
      "s12.p1": "Hiring must be built on real capability, fair access to opportunity, and transparent decisions—helping both people and organisations thrive.",
      "s12.p2": "Humanize Hiring brings people together to make this change a reality.",
      "nav.mission": "Mission",
      "nav.principles": "Principles",
      "nav.what": "What we do",
      "nav.standard": "The Standard",
      "nav.indep": "Independence",
      "nav.community": "Community",
      "ui.process": "Process",
      "ui.activities": "Activities",
      "ui.standard": "The Standard",
      "ui.indep": "Independence",
      "ui.intl": "International",
      "ui.position": "Positioning",
      "ui.why": "Why now",
      "ui.pillars": "Principles",
      "ui.mv": "Mission & vision",
      "hero.sub": "An independent international standard for fair and transparent hiring",
      "footer.copy": "© 2026 Humanize Hiring Association (under incorporation)",
      "e404.meta": "Page not found — Humanize Hiring Association",
      "e404.title": "This page does not exist",
      "e404.text": "The page you are looking for may have moved or never existed. You can return to the home page or join the conversation on LinkedIn.",
      "e404.home": "Back to the home page",
      "legal.meta": "Legal notice & privacy — Humanize Hiring Association",
      "legal.link": "Legal notice & privacy",
      "legal.back": "← Back to the website",
      "legal.eyebrow": "Legal",
      "legal.title": "Legal notice & privacy",
      "legal.h1": "Legal notice",
      "legal.l.op": "Operator",
      "legal.v.op": "Humanize Hiring Association (under incorporation)",
      "legal.l.form": "Legal status",
      "legal.v.form": "Independent, non-profit professional association, currently under incorporation in Hungary.",
      "legal.l.seat": "Seat",
      "legal.v.seat": "Budapest, Hungary. The registered seat and registration number will be published once incorporation is complete.",
      "legal.l.founder": "Founder and contact person",
      "legal.v.founder": "Péter Gyenese",
      "legal.l.email": "Email",
      "legal.l.host": "Hosting provider",
      "legal.v.host": "GitHub Pages (GitHub, Inc.)",
      "legal.l.mail": "Email service provider",
      "legal.v.mail": "Google Workspace (Google)",
      "legal.h2": "Privacy",
      "legal.p1": "This website does not use cookies, analytics, advertising or tracking tools, and it contains no forms. Its fonts are served from the site itself. Your language choice is stored only in your own browser and is never sent to us.",
      "legal.p2": "If you write to us by email, your message is handled through our email service, Google Workspace. We use your email address and the content of your message only to reply to you, and we do not pass them on. You can ask us at any time to delete them.",
      "legal.p3": "The site is hosted on GitHub Pages. As hosting provider, GitHub may process technical data such as IP addresses in its server logs, under its own privacy policy. The links to LinkedIn lead to external pages that are governed by LinkedIn’s own policies.",
      "legal.p4": "For any request about your data, please write to the email address above. This notice will be updated when incorporation is complete or when the website changes."
    },

    hu: {
      "meta.title": "Humanize Hiring Association — Emberibb, méltányosabb és átláthatóbb kiválasztás.",
      "meta.desc": "A Humanize Hiring Association (bejegyzés alatt) egy független, non-profit nemzetközi kezdeményezés, amely a méltányos és átlátható toborzás szakmai standardjét (People-First Hiring Certified) dolgozza ki.",
      "meta.ogdesc": "Független nemzetközi standard a méltányos és átlátható kiválasztásért. Non-profit kezdeményezés, bejegyzés alatt. Budapest.",
      "a11y.skip": "Ugrás a tartalomhoz",
      "nav.aria": "Főmenü",
      "nav.open": "Menü megnyitása",
      "nav.close": "Menü bezárása",
      "lang.aria": "Nyelv",
      "nav.join": "Csatlakozás",
      "hero.badge": "Non-profit kezdeményezés • Bejegyzés alatt",
      "hero.cta1": "Csatlakozás a LinkedIn-közösséghez",
      "hero.cta2": "A Standard megismerése",
      "status.pill": "Bejegyzés alatt",
      "std.tag": "Fejlesztés alatt",
      "int.title": "Alakítsuk együtt a standardot",
      "int.text": "A keretrendszer kidolgozása jelenleg zajlik. Ha szervezete vagy szakmai tapasztalata révén szívesen részt venne a tesztelésben vagy a szakmai egyeztetésben, jelezze nekünk — az érdeklődés semmilyen kötelezettséggel nem jár.",
      "int.subject": "Szakmai érdeklődés: People-First Hiring Certified",
      "int.cta1": "Érdeklődés jelzése e-mailben",
      "int.cta2": "Kövesse a híreket",
      "com.eyebrow": "Közösség és csatornák",
      "com.title": "Két csatorna, egy küldetés",
      "com.lead": "A szakmai párbeszéd a zárt LinkedIn-csoportban zajlik, a hivatalos publikációk és a standard mérföldkövei pedig a szervezeti oldalon jelennek meg.",
      "com.g.title": "LinkedIn-csoport",
      "com.g.text": "Zárt, moderált szakmai fórum, ahol jelöltek, cégvezetők, toborzók és kutatók osztják meg tapasztalataikat.",
      "com.g.cta": "Csatlakozás a LinkedIn-csoporthoz",
      "com.o.title": "LinkedIn szervezeti oldal",
      "com.o.text": "Hivatalos közlemények, kutatási összefoglalók és a People-First Hiring Certified standard hírei.",
      "com.o.cta": "Szervezeti oldal követése",
      "footer.slogan": "A jobb kiválasztás az emberek megértésével kezdődik.",
      "footer.org": "Emberközpontú Toborzásért Egyesület (Humanize Hiring Association) • bejegyzés alatt • 2026 • Budapest, Magyarország",
      "footer.links": "Csatornáink",
      "footer.group": "LinkedIn-csoport",
      "footer.page": "LinkedIn szervezeti oldal",
      "footer.contact": "Kapcsolat",
      "footer.status": "(bejegyzés alatt)",
      "hero.title": "Emberibb, méltányosabb és átláthatóbb kiválasztás.",
      "s1.eyebrow": "A nagy kép",
      "s1.title": "Miért több a kiválasztás egyszerű HR-kérdésnél?",
      "s1.p1": "A kiválasztás nem csupán karriereket formál. Hatással van a vállalatok működésére, az egyéni lehetőségekre, a társadalomra és a gazdaság egészére.",
      "s1.p2": "Az, ahogyan a szervezetek munkatársakat keresnek és választanak ki, meghatározza, milyen készségeket és képességeket ismernek fel és értékelnek, ki jut hozzá a szakmai lehetőségekhez, és mennyire hatékonyan hasznosul az emberi potenciál.",
      "s1.p3": "A kiválasztási gyakorlatok azonban nem tartottak lépést a munka világának átalakulásával. A technológiai fejlődés, a mesterséges intelligenciára épülő folyamatok, a gazdasági bizonytalanság és a gyorsan változó készségigények alapjaiban alakítják át a munkaerőpiacot. Eközben a toborzás és a kiválasztás sok esetben továbbra is korábbi munkaköri megnevezésekre, merev elvárásokra és átláthatatlan szűrési folyamatokra épül.",
      "s1.lead": "Ennek következményei messze túlmutatnak a kedvezőtlen jelölti élményen:",
      "s1.b1": "Értékes emberi képességek és lehetőségek maradnak felismeretlenül és kihasználatlanul.",
      "s1.b4": "Az átláthatóság és az elszámoltathatóság hiánya aláássa a kiválasztásba vetett bizalmat.",
      "s1.b5": "A nem megfelelő toborzási és kiválasztási gyakorlatok tovább mélyíthetik az esélyegyenlőtlenségeket, és ronthatják a munkaerőpiac hatékony működését.",
      "s1.p4": "A Humanize Hiring meggyőződése, hogy a kiválasztás megújítása nem csupán HR-kérdés, hanem olyan társadalmi és gazdasági kihívás, amely közös figyelmet és cselekvést igényel.",
      "s2.title": "Küldetésünk",
      "s2.text": "A kiválasztás megújítása mindazok összefogásával, akik alakítják és megtapasztalják annak működését. A valós tapasztalatokat és a bizonyítékokon alapuló ismereteket gyakorlati standardokká, jobb munkaerőpiaci gyakorlatokká és tartós változássá formáljuk.",
      "s3.title": "Jövőképünk",
      "s3.text": "Olyan munkaerőpiacot szeretnénk, ahol az embereket valódi képességeik és fejlődési lehetőségeik alapján ismerik fel és értékelik; ahol a méltányos és átlátható kiválasztási gyakorlatok mindenki számára hozzáférhetőbbé teszik a szakmai lehetőségeket; és ahol a toborzás és a kiválasztás hosszú távú értéket teremt az egyének, a szervezetek és a társadalom számára.",
      "s4.title": "Miért éppen most?",
      "s4.lead": "Négy meghatározó kihívás teszi egyre sürgetőbbé a változást.",
      "s4.1.t": "Technológiai átalakulás",
      "s4.1.d": "A mesterséges intelligencia és az automatizáció átalakítja, hogyan keresik meg, szűrik és értékelik a szervezetek a lehetséges munkatársakat. Ezek a technológiák lehetőséget teremtenek a hatékonyabb és megalapozottabb kiválasztásra, ugyanakkor fontos kérdéseket vetnek fel a méltányosság, az átláthatóság, az emberi felügyelet és az elszámoltathatóság terén.",
      "s4.2.t": "Készséghiány és rejtve maradó tehetségek",
      "s4.2.d": "Miközben a szervezetek egyre gyakrabban számolnak be arról, hogy nehezen találják meg a megfelelő szakembereket, a merev álláskövetelmények és a sablonos előszűrési módszerek sokszor megakadályozzák a releváns képességek és az átvihető készségek felismerését.",
      "s4.3.t": "Megingó bizalom a kiválasztásban",
      "s4.3.d": "A homályos álláshirdetések, az átláthatatlan értékelési szempontok, a túlzott vagy a munkakörhöz nem kapcsolódó próbafeladatok, a hiányos kommunikáció és az indoklás nélküli elutasítások frusztrációt keltenek, és a kiválasztási folyamat mindkét oldalán aláássák a bizalmat.",
      "s4.4.t": "Kihasználatlan emberi potenciál",
      "s4.4.d": "Az emberek valós képességei, tapasztalatai és fejlődési lehetőségei nem mindig ismerhetők fel munkaköri megnevezések vagy lineáris karrierutak alapján. E képességek jobb felismerése új lehetőségeket nyithat az egyének előtt, és jelentős értéket teremthet a szervezetek és a gazdaság számára.",
      "s5.title": "Négy alappillérünk",
      "s5.lead": "A Humanize Hiring munkája négy, egymást erősítő alapelvre épül.",
      "s5.1.t": "Készségek és potenciál felismerése",
      "s5.1.a": "Az emberek valódi képességeinek, átvihető készségeinek és fejlődési lehetőségeinek felismerése a korábbi munkaköri megnevezéseken és a megszokott karrierutakon túl.",
      "s5.1.b": "A készségalapú megközelítések ösztönzése, amelyek segítik a szervezeteket a releváns tehetségek felismerésében, és szélesítik a szakmai lehetőségekhez való hozzáférést.",
      "s5.2.t": "Érdemi átláthatóság",
      "s5.2.a": "A kiválasztási folyamatok érthetővé, kiszámíthatóvá és átláthatóvá tétele.",
      "s5.2.b": "Világos álláshirdetések, reális elvárások, egyértelmű értékelési szempontok, őszinte kommunikáció és érdemi visszajelzés előmozdítása.",
      "s5.3.t": "Méltányosság, méltóság és elszámoltathatóság",
      "s5.3.a": "Annak előmozdítása, hogy a jelöltekkel a kiválasztási folyamat teljes ideje alatt méltósággal és tisztelettel bánjanak.",
      "s5.3.b": "A méltányos és következetes értékelés, az arányos kiválasztási módszerek, az időben történő tájékoztatás, valamint a döntésekért és az alkalmazott gyakorlatokért vállalt egyértelmű felelősség támogatása.",
      "s5.4.t": "Felelős technológia és mesterséges intelligencia",
      "s5.4.a": "A technológia és a mesterséges intelligencia felelős alkalmazásának ösztönzése a toborzásban és a kiválasztásban.",
      "s5.4.b": "A megfelelő emberi felügyelet, az átláthatóság és az elszámoltathatóság erősítése, valamint garanciák előmozdítása a méltánytalan vagy indokolatlan döntések megelőzésére.",
      "s5.4.c": "A technológiának a jobb döntéseket kell támogatnia, nem pedig helyettesítenie az emberi felelősséget.",
      "s6.title": "A teljes kiválasztási folyamat",
      "s6.p1": "Az emberközpontú kiválasztás nem valósítható meg egyetlen részfolyamat javításával.",
      "s6.p2": "A Humanize Hiring keretrendszere a teljes folyamatot vizsgálja, az első benyomástól a végső döntésig.",
      "s6.1.t": "Álláshirdetés",
      "s6.1.1": "Pontos, a valós munkakört és feladatokat tükröző leírások.",
      "s6.1.2": "Világos felelősségi körök és elvárások.",
      "s6.1.3": "Átlátható bérezési és juttatási információk.",
      "s6.1.4": "A tényleges munkaköri igényekhez igazodó követelmények.",
      "s6.2.t": "Jelöltek keresése és előzetes értékelése",
      "s6.2.1": "A releváns készségek és átvihető képességek felismerése.",
      "s6.2.2": "Az értékelés kiterjesztése a kulcsszavakon és a korábbi munkaköri megnevezéseken túlra.",
      "s6.2.3": "Az automatizált előszűrés és a mesterséges intelligencia arányos és felelős alkalmazása.",
      "s6.2.4": "Emberi felügyelet és méltányos értékelési gyakorlatok.",
      "s6.3.t": "Kiválasztás és értékelés",
      "s6.3.1": "Világos és következetes értékelési szempontok.",
      "s6.3.2": "Releváns és arányos interjúfolyamatok.",
      "s6.3.3": "A munkakörhöz kapcsolódó, ésszerű próbafeladatok.",
      "s6.3.4": "A jelöltek idejének és befektetett munkájának tisztelete.",
      "s6.4.t": "Kommunikáció és döntéshozatal",
      "s6.4.1": "Kiszámítható határidők és érdemi tájékoztatás.",
      "s6.4.2": "A döntések és eredmények egyértelmű kommunikációja.",
      "s6.4.3": "Konstruktív visszajelzés, ahol ez indokolt és megvalósítható.",
      "s6.4.4": "Felelősségvállalás a teljes folyamat során.",
      "s6.p3": "Célunk nem az, hogy minden szervezetre egyetlen, egységes kiválasztási folyamatot kényszerítsünk, hanem hogy olyan következetes alapelveket és mérhető elvárásokat határozzunk meg, amelyek különböző iparágakban, munkakörökben és munkaerőpiacokon egyaránt alkalmazhatók.",
      "s7.title": "Mit teszünk?",
      "s7.lead": "A Humanize Hiring négy egymást kiegészítő tevékenységen keresztül segíti a közös alapelvek gyakorlati megvalósulását.",
      "s7.1.t": "Közösség és mozgalom",
      "s7.1.a": "Nemzetközi közösséget építünk jelöltek, munkáltatók, HR- és toborzási szakemberek, üzleti vezetők, kutatók és más érintettek részvételével.",
      "s7.1.b": "Teret adunk a nyílt párbeszédnek, a tapasztalatok megosztásának és a konstruktív együttműködésnek.",
      "s7.2.t": "Kutatás és bizonyítékok",
      "s7.2.a": "Feltárjuk a jelöltek és a szervezetek valós tapasztalatait.",
      "s7.2.b": "Azonosítjuk a rendszerszintű problémákat, vizsgáljuk a kiválasztási gyakorlatokat, és bizonyítékokon alapuló ajánlásokat dolgozunk ki.",
      "s7.3.t": "Oktatás és szemléletformálás",
      "s7.3.a": "Felhívjuk a figyelmet a problémákra, megkérdőjelezzük az elavult gyakorlatokat, és népszerűsítjük a készségalapú megközelítéseket, a méltányosságot, az átláthatóságot és a felelős technológiahasználatot.",
      "s7.4.t": "Standardok és minősítés",
      "s7.4.a": "Gyakorlati, mérhető standardokat dolgozunk ki az emberközpontú kiválasztásért, és elismerjük azokat a szervezeteket, amelyek ellenőrizhető gyakorlatokkal igazolják ezen elvek érvényesülését.",
      "s8.title": "People-First Hiring Certified",
      "s8.sub": "Független nemzetközi standard a méltányos és átlátható kiválasztásért",
      "s8.p1": "A Humanize Hiring egyik központi, hosszú távú célkitűzése egy független, nemzetközileg is alkalmazható munkáltatói minősítési rendszer létrehozása.",
      "s8.p2": "A People-First Hiring Certified minősítés azokat a szervezeteket ismeri el, amelyek mérhető gyakorlatokkal és független értékelésnek alávetett bizonyítékokkal igazolják elkötelezettségüket az emberközpontú kiválasztás mellett.",
      "s8.p3": "A minősítési rendszer a négy alappillért gyakorlati értékelési szempontokra és ellenőrizhető szervezeti követelményekre fordítja le.",
      "s8.offer": "Mit nyújt a minősítés?",
      "s8.o1.t": "A jelölteknek:",
      "s8.o1.d": "hiteles támpontot ad a munkáltatók kiválasztási gyakorlatának megítéléséhez.",
      "s8.o2.t": "A munkáltatóknak:",
      "s8.o2.d": "gyakorlati keretrendszert biztosít toborzási és kiválasztási folyamataik értékeléséhez és fejlesztéséhez.",
      "s8.o3.t": "A munkaerőpiac egészének:",
      "s8.o3.d": "megbízható viszonyítási alapot teremt a méltányos, átlátható és elszámoltatható kiválasztási gyakorlatokhoz.",
      "s8.n1": "A minősítés nem alapulhat pusztán egy aláírt nyilatkozaton vagy nyilvános vállaláson.",
      "s8.n2": "Hitelességét az átlátható kritériumok, a dokumentált értékelési módszertan, a független elbírálás, a rendszeres felülvizsgálat és az összeférhetetlenség kezelését biztosító garanciák adják.",
      "s8.n3": "A minősítési keretrendszer fokozatosan, kutatásokra, az érintettek bevonására és pilotprogramokra építve készül el.",
      "s9.title": "Függetlenség és irányítás",
      "s9.p1": "A Humanize Hiring Association Magyarországon alapítás alatt álló, független, nonprofit szakmai egyesület, nemzetközi küldetéssel és hatókörrel.",
      "s9.p2": "A hiteles szakmai standardok alapja az átlátható működés. Annak érdekében, hogy kutatásaink, irányelveink és a jövőbeli minősítésünk a munkaerőpiac minden szereplője számára objektív és megbízható maradjon, működésünket négy alapelv határozza meg:",
      "s9.1.t": "Nyitott, többoldalú szakmai együttműködés:",
      "s9.1.d": "Alapítókat, munkáltatókat, HR-szakembereket, kutatókat, jelölteket és technológiai fejlesztőket egyaránt várunk, hogy szakértelmükkel, tapasztalataikkal és pilotprogramokkal járuljanak hozzá az emberközpontú kiválasztás fejlődéséhez.",
      "s9.2.t": "Átlátható, tényeken alapuló kritériumok:",
      "s9.2.d": "A People-First Hiring Certified minősítés dokumentált, nyilvánosan elérhető szempontrendszerre épül — minden szervezetet azonos elvárások mentén, ellenőrizhető bizonyítékok alapján értékelünk.",
      "s9.3.t": "A standardalkotás és az értékelés elkülönítése:",
      "s9.3.d": "A minősítési döntések minden üzleti partnerségtől, támogatástól vagy közösségi szerepvállalástól függetlenül születnek, egyenlő feltételeket biztosítva minden jelentkező szervezet számára.",
      "s9.4.t": "Az összeférhetetlenség átlátható kezelése:",
      "s9.4.d": "Az üzleti tevékenységek, a szakmai tanácsadás és az egyesületi döntéshozatal közötti esetleges átfedéseket nyíltan kezeljük, világos kizárási szabályok mellett.",
      "s10.title": "Nemzetközi célkitűzés, magyarországi alapítás",
      "s10.p1": "A Humanize Hiring Magyarországon jön létre, kezdeti tevékenységei és pilotprogramjai pedig Magyarországra és a kelet-közép-európai régióra összpontosítanak.",
      "s10.p2": "Identitása és célkitűzése azonban már a kezdetektől nemzetközi.",
      "s10.p3": "A kezdeményezés célja olyan alapelvek, kutatások és szakmai standardok kidolgozása, amelyek különböző munkaerőpiacokon is alkalmazhatók, figyelembe véve a helyi foglalkoztatási gyakorlatok, jogi keretek és kulturális sajátosságok közötti különbségeket.",
      "s10.p4": "Ennek érdekében nemzetközi partnerségeket építünk, és együttműködünk azokkal a szakmai közösségekkel, munkáltatókkal, kutatókkal és szervezetekkel, amelyek elkötelezettek a kiválasztási gyakorlatok fejlesztése mellett.",
      "s11.title": "Pozicionálásunk",
      "s11.not": "A Humanize Hiring nem:",
      "s11.n1": "Munkaerő-közvetítő ügynökség.",
      "s11.n2": "Állásportál vagy jelöltpiactér.",
      "s11.n3": "HR-technológiai vállalat.",
      "s11.n4": "Toborzási szolgáltatásokat értékesítő üzleti tanácsadó cég.",
      "s11.n5": "Munkáltató- vagy HR-ellenes kampány.",
      "s11.n6": "Jelölti panaszkönyv vagy cégeket pellengérre állító platform.",
      "s11.p3": "Megközelítésünk konstruktív, független és megoldásorientált.",
      "s12.title": "Központi üzenetünk",
      "s12.bold": "Elpazaroljuk az emberi potenciált. Ideje újragondolni a kiválasztást.",
      "s12.p1": "A kiválasztásnak valódi képességekre, méltányos esélyekre és átlátható döntésekre kell épülnie — hogy az emberek és a szervezetek egyaránt kibontakozhassanak.",
      "s12.p2": "A Humanize Hiring azért hozza össze az embereket, hogy ez a változás valósággá váljon.",
      "nav.mission": "Küldetés",
      "nav.principles": "Alapelvek",
      "nav.what": "Tevékenység",
      "nav.standard": "Standard",
      "nav.indep": "Függetlenség",
      "nav.community": "Közösség",
      "ui.process": "Folyamat",
      "ui.activities": "Tevékenységeink",
      "ui.standard": "A Standard",
      "ui.indep": "Függetlenség",
      "ui.intl": "Nemzetközi",
      "ui.position": "Pozicionálás",
      "ui.why": "Miért most",
      "ui.pillars": "Alapelvek",
      "ui.mv": "Küldetés és jövőkép",
      "hero.sub": "Független nemzetközi standard a méltányos és átlátható kiválasztásért",
      "footer.copy": "© 2026 Emberközpontú Toborzásért Egyesület (bejegyzés alatt)",
      "e404.meta": "Az oldal nem található — Humanize Hiring Association",
      "e404.title": "Ez az oldal nem létezik",
      "e404.text": "A keresett oldal áthelyezésre került, vagy sosem létezett. Visszatérhetsz a főoldalra, vagy csatlakozhatsz a beszélgetéshez a LinkedIn-en.",
      "e404.home": "Vissza a főoldalra",
      "legal.meta": "Impresszum és adatkezelés — Humanize Hiring Association",
      "legal.link": "Impresszum és adatkezelés",
      "legal.back": "← Vissza a weboldalra",
      "legal.eyebrow": "Jogi tájékoztató",
      "legal.title": "Impresszum és adatkezelés",
      "legal.h1": "Impresszum",
      "legal.l.op": "Üzemeltető",
      "legal.v.op": "Emberközpontú Toborzásért Egyesület (Humanize Hiring Association), bejegyzés alatt",
      "legal.l.form": "Jogi státusz",
      "legal.v.form": "Független, nonprofit szakmai egyesület, Magyarországon bejegyzés alatt.",
      "legal.l.seat": "Székhely",
      "legal.v.seat": "Budapest, Magyarország. A bejegyzett székhelyet és a nyilvántartási számot a bejegyzés befejezése után tesszük közzé.",
      "legal.l.founder": "Alapító és kapcsolattartó",
      "legal.v.founder": "Gyenese Péter",
      "legal.l.email": "E-mail",
      "legal.l.host": "Tárhelyszolgáltató",
      "legal.v.host": "GitHub Pages (GitHub, Inc.)",
      "legal.l.mail": "E-mail-szolgáltató",
      "legal.v.mail": "Google Workspace (Google)",
      "legal.h2": "Adatkezelés",
      "legal.p1": "Ez a weboldal nem használ sütiket, látogatottságmérést, hirdetési vagy követő eszközöket, és nem tartalmaz űrlapokat. A betűtípusokat magáról az oldalról szolgáljuk ki. A nyelvválasztásodat csak a saját böngésződ tárolja, hozzánk nem jut el.",
      "legal.p2": "Ha e-mailben írsz nekünk, az üzeneted az e-mail-szolgáltatásunkon, a Google Workspace-en keresztül érkezik meg. Az e-mail-címedet és az üzeneted tartalmát kizárólag a válaszadáshoz használjuk, és nem adjuk tovább. Bármikor kérheted a törlésüket.",
      "legal.p3": "Az oldal a GitHub Pages szolgáltatáson fut. Tárhelyszolgáltatóként a GitHub a saját adatkezelési szabályai szerint kezelhet technikai adatokat, például IP-címeket a szerver naplóiban. A LinkedIn-hivatkozások külső oldalakra vezetnek, ott a LinkedIn saját szabályai érvényesek.",
      "legal.p4": "Az adataiddal kapcsolatos kéréseiddel fordulj a fenti e-mail-címhez. Ezt a tájékoztatót frissítjük, ha a bejegyzés lezárul vagy az oldal működése megváltozik."
    }
  };

  var OG_LOCALE = { en: 'en_US', hu: 'hu_HU' };
  var currentLang = DEFAULT_LANG;

  function t(key) {
    var d = I18N[currentLang] || I18N[DEFAULT_LANG];
    return d[key] !== undefined ? d[key] : (I18N[DEFAULT_LANG][key] || key);
  }

  function setMeta(selector, attr, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyLang(lang, persist) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    // data-i18n-attr="aria-label:key;placeholder:key"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    document.title = t(document.body.getAttribute('data-title-key') || 'meta.title');
    setMeta('meta[name="description"]', 'content', t('meta.desc'));
    setMeta('meta[property="og:title"]', 'content', t('meta.title'));
    setMeta('meta[property="og:description"]', 'content', t('meta.ogdesc'));
    setMeta('meta[property="og:locale"]', 'content', OG_LOCALE[lang]);
    setMeta('meta[property="og:locale:alternate"]', 'content', OG_LOCALE[lang === 'en' ? 'hu' : 'en']);
    setMeta('meta[name="twitter:title"]', 'content', t('meta.title'));
    setMeta('meta[name="twitter:description"]', 'content', t('meta.ogdesc'));

    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });

    // keep menu button label in sync with its state
    var toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', t(toggle.getAttribute('aria-expanded') === 'true' ? 'nav.close' : 'nav.open'));
    }

    updateInterestMail();

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be unavailable */ }
    }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl && I18N[fromUrl.toLowerCase()]) return fromUrl.toLowerCase();
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* ignore */ }
    return DEFAULT_LANG;
  }

  /* ---------- Language switch ---------- */
  document.querySelectorAll('.lang-switch button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'), true);
    });
  });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
    nav.classList.toggle('open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Header shadow ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Scroll-spy for nav ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav li a'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) {
            var active = a.getAttribute('href') === '#' + entry.target.getAttribute('data-nav');
            a.classList.toggle('active', active);
            if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('[data-nav]').forEach(function (el) { spy.observe(el); });
  }

  /* ---------- Early-interest mailto (no form) ---------- */
  function updateInterestMail() {
    var a = document.getElementById('interest-mail');
    if (a) a.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(t('int.subject'));
  }

  /* ---------- Contact link ---------- */
  var contact = document.getElementById('contact-link');
  if (contact) {
    contact.href = 'mailto:' + CONTACT_EMAIL;
    contact.textContent = CONTACT_EMAIL;
  }

  /* ---------- Init ---------- */
  applyLang(initialLang(), false);
})();