
const PHOTO_FILES = {"bola-ahmed-tinubu":"photos/bola-ahmed-tinubu.txt","babajimi-adegoke-benson":"photos/babajimi-adegoke-benson.txt","kadri-obafemi-hamzat":"photos/kadri-obafemi-hamzat.txt","damilola-sonayon-james":"photos/damilola-sonayon-james.txt","moruf-i-alli-balogun":"photos/moruf-i-alli-balogun.txt","mudashiru-ajayi-obasa":"photos/mudashiru-ajayi-obasa.txt","dele-osinowo":"photos/dele-osinowo.txt","kolade-david-alabi":"photos/kolade-david-alabi.txt","adebayo-balogun":"photos/adebayo-balogun.txt","toyin-gafar":"photos/toyin-gafar.txt","okanilawon-sanni":"photos/okanilawon-sanni.txt","muritala-seriki":"photos/muritala-seriki.txt","abiodun-tobun":"photos/abiodun-tobun.txt","sylvester-ogunkelu":"photos/sylvester-ogunkelu.txt","o-abiola-olowu":"photos/o-abiola-olowu.txt","oladele-ajayi":"photos/oladele-ajayi.txt","kashim-shettima":"photos/kashim-shettima.txt","mukhail-adetokunbo-abiru":"photos/mukhail-adetokunbo-abiru.txt","idiat-oluranti-adebule":"photos/idiat-oluranti-adebule.txt","mojisola-lasbat-meranda":"photos/mojisola-lasbat-meranda.txt","adedamola-kasumu":"photos/adedamola-kasumu.txt","temitope-adedeji-adewale":"photos/temitope-adedeji-adewale.txt","saad-lukmon-olumoh":"photos/saad-lukmon-olumoh.txt","sabur-akanbi-oluwa":"photos/sabur-akanbi-oluwa.txt","olatunji-lukmon-jimoh-orelope":"photos/olatunji-lukmon-jimoh-orelope.txt","joseph-o-kehinde":"photos/joseph-o-kehinde.txt","rauf-o-age-sulaimon":"photos/rauf-o-age-sulaimon.txt","musibau-lawal":"photos/musibau-lawal.txt","gbolahan-yishawu":"photos/gbolahan-yishawu.txt","adeseyi-lawal":"photos/adeseyi-lawal.txt","moshood-a-aro":"photos/moshood-a-aro.txt","ibrahim-ajani":"photos/ibrahim-ajani.txt","rasheed-shabi":"photos/rasheed-shabi.txt","nureni-akinsanya":"photos/nureni-akinsanya.txt","kazeem-olayinka":"photos/kazeem-olayinka.txt","oluwaseun-adebisi-ege":"photos/oluwaseun-adebisi-ege.txt","orekoya-abiodun":"photos/orekoya-abiodun.txt","lara-olumegbon-lawal":"photos/lara-olumegbon-lawal.txt","suraju-tijani":"photos/suraju-tijani.txt","oladipo-olayinka-ajomale":"photos/oladipo-olayinka-ajomale.txt","oluwagbemiga-abiola-abiola":"photos/oluwagbemiga-abiola-abiola.txt","segun-adeniran-onilude":"photos/segun-adeniran-onilude.txt","benjamin-adeyemi-olabinjo":"photos/benjamin-adeyemi-olabinjo.txt","taiwo-aiyedun":"photos/taiwo-aiyedun.txt","bello-monsuru-oloyede":"photos/bello-monsuru-oloyede.txt","lanre-okunnola":"photos/lanre-okunnola.txt","fuad-kayode-laguda":"photos/fuad-kayode-laguda.txt","muftau-egberongbe":"photos/muftau-egberongbe.txt","dolapo-badru":"photos/dolapo-badru.txt","paul-abioye-kalejaiye":"photos/paul-abioye-kalejaiye.txt","moses-olanrewaju":"photos/moses-olanrewaju.txt","olabisi-adebanjo":"photos/olabisi-adebanjo.txt","james-abiodun-faleke":"photos/james-abiodun-faleke.txt","adeyemi-alli":"photos/adeyemi-alli.txt","moses-oluwatosin-fayinka":"photos/moses-oluwatosin-fayinka.txt","bolaji-kayode-robert":"photos/bolaji-kayode-robert.txt","shakiru-akindele-sule":"photos/shakiru-akindele-sule.txt","folorunsho-ola":"photos/folorunsho-ola.txt","joseph-gbenu":"photos/joseph-gbenu.txt","oladunjoye-bankole-olatunde":"photos/oladunjoye-bankole-olatunde.txt","rasheed-lanre-makinde":"photos/rasheed-lanre-makinde.txt","mayowa-alakija":"photos/mayowa-alakija.txt","fuad-atanda-lawal":"photos/fuad-atanda-lawal.txt","kayode-moshood-akiolu":"photos/kayode-moshood-akiolu.txt","adekunle-omolaja":"photos/adekunle-omolaja.txt","saheed-bankole":"photos/saheed-bankole.txt","yusuf-nurudeen-abiodun":"photos/yusuf-nurudeen-abiodun.txt","barakat-bakare-odunuga":"photos/barakat-bakare-odunuga.txt","damilola-ayinde-marshal":"photos/damilola-ayinde-marshal.txt","wale-raji":"photos/wale-raji.txt","wasiu-sanni-eshinlokun":"photos/wasiu-sanni-eshinlokun.txt"};
let PHOTOS = {};
async function loadAllPhotos() {
  const entries = Object.entries(PHOTO_FILES);
  await Promise.all(entries.map(async ([slug, path]) => {
    try {
      const res = await fetch(path);
      if (!res.ok) return;
      const b64 = await res.text();
      PHOTOS[slug] = 'data:image/jpeg;base64,' + b64.trim();
    } catch (e) { /* photo unavailable, fallback initials will render */ }
  }));
}
const {createClient}=supabase;
document.addEventListener('DOMContentLoaded',()=>{const lp=document.getElementById('leaderPhotoImg');if(lp&&PHOTOS['bola-ahmed-tinubu'])lp.src=PHOTOS['bola-ahmed-tinubu'];});
const sb=createClient('https://wfceszismvdghxhfuiaz.supabase.co','sb_publishable_nDhJM7vh9DbOfwsZ2kI3-w_6_wld7hl');
const ini=n=>(n||'?').replace(/^(Dr\.|Sen\.|Rt\. Hon\.|Hon\.|Princess|Senator)\s+/,'').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();

/* ── CANDIDATE DATA ── */
const TIERS=[
  {key:'EXEC',label:'Executive Ticket'},
  {key:'SENATE',label:'Senate'},
  {key:'HOUSE_OF_REPS',label:'House of Representatives'},
  {key:'STATE_ASSEMBLY',label:'State Assembly'}
];
const C=[
  {rank:1,slug:'bola-ahmed-tinubu',candidateId:'10f073fe-e9e7-47cf-b26f-e52263223df9',name:'Bola Ahmed Tinubu',office:'PRESIDENT',tier:'EXEC',seat:'President of Nigeria',bio:'Incumbent President of the Federal Republic of Nigeria, first sworn in 2023. Previously served two terms as Governor of Lagos State (1999–2007), a tenure widely credited with laying the fiscal and administrative groundwork for Lagos\'s emergence as Nigeria\'s commercial capital. A founding National Leader of the All Progressives Congress, he now seeks a second presidential term. His direct presidential primary swept all 245 Lagos wards on 23 May 2026 — a clean sweep reflecting the depth of party organisation across the state.'},
  {rank:2,slug:'kashim-shettima',candidateId:'f40888c5-31b7-4c46-b96d-fd0547d74834',name:'Kashim Shettima',office:'VICE PRESIDENT',tier:'EXEC',seat:'Vice President',bio:'Incumbent Vice President of Nigeria since 2023. Previously served two terms as Governor of Borno State (2011–2019) during one of the most challenging security periods in the state\'s history, followed by a term representing Borno Central in the Senate. Running mate to President Tinubu again for the 2027 general election, bringing continuity of experience at the highest level of the federal executive.'},
  {rank:3,slug:'kadri-obafemi-hamzat',candidateId:'e4b48f8e-a036-42bf-8fe0-5da67ee695b9',name:'Dr. Kadri Obafemi Hamzat',office:'GOVERNOR',tier:'EXEC',seat:'Lagos State Governor',bio:'Currently serves as Deputy Governor of Lagos State under Governor Babajide Sanwo-Olu, and is now the party\'s standard-bearer for the top job as Sanwo-Olu\'s tenure reaches its constitutional limit. Won the APC governorship primary on 21 May 2026 by an overwhelming margin — 657,917 of 657,974 accredited votes across all 245 wards — one of the most emphatic primary results in the state\'s recent political history. The primary was declared by Gen. Jon Temlong (rtd.).'},
  {rank:4,slug:'damilola-sonayon-james',candidateId:'67d18144-285a-4368-b8a2-510126005e22',name:'Princess Damilola Sonayon-James',office:'DEPUTY GOVERNOR',tier:'EXEC',seat:'Deputy Governor, Lagos State',bio:'Unveiled in June 2026 by APC Lagos Chairman Cornelius Ojelabi alongside Governor Sanwo-Olu as the party\'s running-mate candidate for Deputy Governor. A governance and development professional with over 15 years of experience, she brings a track record built well outside the campaign trail to the ticket. Hails from Badagry in Lagos West Senatorial District, and currently serves the party as APC Deputy State Woman Leader — a role that has placed her at the center of women\'s mobilisation across all 20 LGAs.'},
  {rank:5,slug:'mukhail-adetokunbo-abiru',candidateId:'efbc1a37-bc18-4671-bae8-9c004aa2fd1b',name:'Senator Mukhail Adetokunbo Abiru',office:'SENATOR',tier:'SENATE',seat:'Lagos East Senatorial District',bio:'Incumbent Senator for Lagos East since December 2020, following a 32-year corporate career, 29 of them in banking. Led the turnaround of Skye Bank as Group Managing Director during the CBN-induced rescue of the bank, then became pioneer Managing Director/CEO of the successor institution, Polaris Bank, retiring in August 2020. Currently chairs the Senate Committee on Banking, Insurance and Other Financial Institutions, having previously chaired the Committee on Industries in the 9th Senate. Affirmed unopposed by consensus at Somolu collation centre, May 2026, with the same unanimous reaffirmation echoed at Ikorodu Town Hall.'},
  {rank:5,slug:'wasiu-sanni-eshinlokun',candidateId:'8df485e1-25e7-4b50-b124-5c8cadd286a9',name:'Senator Wasiu Sanni-Eshinlokun',office:'SENATOR',tier:'SENATE',seat:'Lagos Central Senatorial District',bio:'Incumbent Senator for Lagos Central since 2023, succeeding Senator Oluremi Tinubu. Began public service as a two-term Chairman of Lagos Island Local Government (2008–2014), later serving as Deputy Speaker of the Lagos State House of Assembly from 2015 to 2023 alongside Speaker Mudashiru Obasa. His 2023 election was twice challenged and twice upheld — first by the Election Petitions Tribunal, then unanimously affirmed by the Court of Appeal. Holds a BSc in Agricultural Economics and a Master\'s in International Law and Diplomacy, both from the University of Lagos, and now chairs the Senate Committee on Marine Transport. Affirmed unopposed by consensus at Lagos City Centre, Lagos Island, May 2026.'},
  {rank:5,slug:'idiat-oluranti-adebule',candidateId:'5bffa0cd-e272-4eab-a022-e89a176c9dfa',name:'Senator Idiat Oluranti Adebule',office:'SENATOR',tier:'SENATE',seat:'Lagos West Senatorial District',bio:'Incumbent Senator for Lagos West since 2023, and one of only four female lawmakers in the 10th Senate. Previously served as Deputy Governor of Lagos State from 2015 to 2019 under Governor Akinwunmi Ambode — the sixth woman to hold that office. Holds a doctorate in curriculum studies from Lagos State University, where she also completed her first degree. Her Election Petition Tribunal victory affirming her 2023 win was upheld on appeal, and she has since hosted large-scale constituency empowerment programmes across Lagos West\'s 28 LGAs and LCDAs. Affirmed unopposed at Awori College, Ojo, May 2026.'},
  {rank:6,slug:'mudashiru-ajayi-obasa',candidateId:'d0e34cbd-88e7-4f66-a725-4aa443c200c3',name:'Mudashiru Ajayi Obasa',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Agege Federal Constituency',bio:'One of the longest-serving members of the Lagos State House of Assembly, representing Agege Constituency I since 2007. Has served multiple terms as Speaker since 2015, most recently reinstated in March 2025 following a contentious impeachment saga in January of that year, after senior APC leaders intervened to resolve the leadership dispute. A lawyer by training (LL.B, Lagos State University), he now stands as APC\'s candidate for the Agege Federal House of Representatives seat, seeking to move from state to national legislature. Won the primary unopposed.'},
  {rank:6,slug:'paul-abioye-kalejaiye',candidateId:'dcd3ba7d-f6d8-400e-a550-83632386e218',name:'Paul Abioye Kalejaiye',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ajeromi-Ifelodun Federal Constituency',bio:'Popularly known as "KAP," a chartered accountant holding a PhD and an MSc in Public Administration, representing Ajeromi-Ifelodun since 2023 in the 10th House of Representatives. Sits on the Public Accounts, Ports and Harbours, Niger-Delta, and Finance Committees, and has advocated for transparent port-revenue management, flood-control projects along the Apapa corridor, and stricter tanker-safety regulations. Has sponsored three bills and moved six motions, alongside constituency solar streetlight installations, school construction, transformer rehabilitation, and large-scale empowerment programmes including the 2024 Mega Empowerment initiative.'},
  {rank:6,slug:'olabisi-adebanjo',candidateId:'fc2ea5b7-d7f3-488d-a6a5-c7759bf08463',name:'Olabisi Adebajo',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Alimosho Federal Constituency',bio:'Popularly known as "ABISCO," the sole female candidate among APC\'s 24 House of Representatives flagbearers for the 2027 election — a fact that drew national commentary given the party fielded just two women across all its senatorial primaries as well. Her campaign has centered on voter mobilisation, prioritising PVC registration and collection across Alimosho, alongside youth and women\'s empowerment and economic development for the constituency.'},
  {rank:6,slug:'moses-olanrewaju',candidateId:'2ef06fa8-ffe7-460d-bbbc-d64cb35dbb5b',name:'Moses Olanrewaju',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Amuwo-Odofin Federal Constituency',bio:'Won the APC primary for Amuwo-Odofin with 13,130 votes, having earlier been backed as the constituency APC leadership\'s consensus candidate at a stakeholders\' meeting convened by former Minister of State for Defence, Senator Musiliu Obanikoro. The seat is currently held by the Labour Party, making this a flip target for APC rather than an incumbency defence. In his acceptance remarks, Olanrewaju framed the win as "a movement powered by the people," pledging unity and grassroots-driven representation for Amuwo-Odofin.'},
  {rank:6,slug:'muftau-egberongbe',candidateId:'338a5e10-06e9-4210-b3d2-b6a86be9a011',name:'Muftau Egberongbe',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Apapa Federal Constituency',bio:'A former member of the 9th House of Representatives for Apapa (2019–2023) under APC, now seeking a return to the seat he previously held before being succeeded by Adesola Adedayo. During his earlier term, he was a vocal advocate for true federalism, arguing for a reduction of the federal exclusive legislative list rather than a shift to a parliamentary system of government.'},
  {rank:6,slug:'segun-adeniran-onilude',candidateId:'c18cbbe5-c2bf-45f1-bb4b-bb185d67ffc5',name:'Segun Adeniran Onilude',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Badagry Federal Constituency',bio:'A former Executive Chairman of Badagry Local Government, succeeded in that role by Babatunde Hunpe in July 2025, now seeking to move to the federal legislature. A vocal supporter of the Direct Primary system, which he has described as the purest form of party democracy, giving every member a direct say in choosing their representative.'},
  {rank:6,slug:'wale-raji',candidateId:'4b6c8afa-1c5a-4859-98c5-ad77dd563e37',name:'Wale Raji',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Epe Federal Constituency',bio:'Popularly known as "Omo Iya Ise," an engineer holding a Master\'s degree from Ahmadu Bello University who has represented Epe Federal Constituency since 2015. His 2023 re-election made him the first lawmaker in the constituency\'s history to secure a third consecutive term, and he now seeks an unprecedented fourth. Chairs the House Committee on Livestock Development, with a political base built on sustained grassroots presence and constituency project delivery across education, infrastructure, and social development.'},
  {rank:6,slug:'fuad-atanda-lawal',candidateId:'99f08850-cb75-4a30-a824-e7b800ffc785',name:'Fuad Atanda-Lawal',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Eti-Osa Federal Constituency',bio:'Former Executive Chairman of Ikoyi-Obalende Local Council Development Area, now the APC candidate for Eti-Osa Federal Constituency. Party leaders in Eti-Osa have pointed to his tenure at the LCDA as evidence of his capacity for effective representation, alongside a broader constituency push to secure the seat for the party in the 2027 general election.'},
  {rank:6,slug:'adebayo-balogun',candidateId:'a5a74400-31fe-4537-ae01-89a3818a429f',name:'Adebayo Balogun',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ibeju-Lekki Federal Constituency',bio:'A veteran grassroots politician serving his second term representing Ibeju-Lekki Federal Constituency, where he chairs the House Committee on Electoral Matters. Known within the constituency for consistent advocacy on infrastructural and economic development as Ibeju-Lekki continues its rapid transformation into one of Lagos\'s major industrial and free-trade zones.'},
  {rank:6,slug:'benjamin-adeyemi-olabinjo',candidateId:'2fa51830-1ad0-4765-9683-df07b3df2798',name:'Benjamin Adeyemi Olabinjo',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ifako-Ijaiye Federal Constituency',bio:'Popularly known as "BAO," the sitting member for Ifako-Ijaiye Federal Constituency since 2023, first securing the APC ticket in 2022. His constituency record includes the installation of 200 solar street lights across Ifako/Ijaiye, alongside a stated focus on lobbying for development dividends across sectors for his constituents.'},
  {rank:6,slug:'james-abiodun-faleke',candidateId:'5fc4de6c-6f99-4a3b-802a-0c9bff2e96e9',name:'James Abiodun Faleke',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ikeja Federal Constituency',bio:'Serving his fourth term representing Ikeja Federal Constituency since first winning the seat in 2011. Before national politics, he was the pioneer Executive Chairman of Ojodu LCDA from 2004 to 2011, and spent over a decade in the private sector in procurement, distribution and commercial management roles, including at ALUMCO PLC and Crown Agents. Currently chairs the House Committee on Finance, having previously chaired the Committee on Anti-Corruption. His constituency work includes the "Light Up Ikeja" streetlight initiative and road rehabilitation across the federal constituency, alongside vocational training and empowerment programmes reaching thousands of residents. In 2015, he ran as APC deputy governorship candidate in Kogi State alongside Abubakar Audu, a race that became nationally significant after Audu\'s death shortly after the primary.'},
  {rank:6,slug:'babajimi-adegoke-benson',candidateId:'aa296ca6-2f46-40b8-adbc-e45ff99a1167',name:'Babajimi Adegoke Benson',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ikorodu Federal Constituency',bio:'Three-term member of the House of Representatives for Ikorodu Federal Constituency since 2015, now seeking an unprecedented fourth term after winning the 2026 APC primary against a single challenger. Born in Ikorodu in 1972, he holds an LLB from Lagos State University, a law degree from the Nigerian Law School, and an LLM in Comparative International Business Law from London Guildhall University. Currently chairs the House Committee on Defence. Beyond legislative work, he founded the iCare Foundation in 2016, home to Nigeria\'s first food bank, which has distributed monthly food support to hundreds of families across Ikorodu for nearly a decade, alongside StartupIkorodu, an iCare Job Centre, and free healthcare outreach programmes. His constituency record also includes 65 roads built, an 80-bed Mother and Child Hospital in Imota, and solar power extended to over 8,000 homes.'},
  {rank:6,slug:'dele-osinowo',candidateId:'be5f42dd-3048-4b2a-a6a7-c31b94428b93',name:'Dele Osinowo',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Kosofe Federal Constituency',bio:'A former Chairman of Agboyi-Ketu Local Council Development Area, now the APC flagbearer for Kosofe Federal Constituency. Campaigned on his grassroots antecedents and administrative experience gained at the local government level, building support across the constituency\'s wards including Agboyi-Ketu ahead of the general election.'},
  {rank:6,slug:'dolapo-badru',candidateId:'d1573a77-edf8-4c48-a539-693f22fa9959',name:'Dolapo Badru',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Lagos Island I Federal Constituency',bio:'A PhD holder and Chairman of the Lagos Caucus in the Federal House of Representatives, first elected in 2015 and now serving a fourth term. Has sponsored several bills including amendments to the National Mathematical Centre Act, an Elderly and Vulnerable Persons Bill, and a Government Infrastructural Continuity Bill, alongside co-sponsoring a constitutional alteration bill and amendments to anti-trafficking legislation. Known within the constituency for empowerment and social intervention programmes.'},
  {rank:6,slug:'kayode-moshood-akiolu',candidateId:'4f66434b-8676-4f88-901f-aaadd273c586',name:'Kayode Moshood Akiolu',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Lagos Island II Federal Constituency',bio:'A son of the traditional ruler of Lagos, Oba Rilwan Akiolu, educated at King\'s College and the University of Lagos before a career that included a stint at JP Morgan. First elected in 2019 and re-elected in 2023, now emerging as the consensus candidate for a third term after his rivals stepped aside. Chairs the House Committee on Anti-Corruption and has run constituency programmes empowering over 1,000 market women alongside educational and SME-focused economic support initiatives.'},
  {rank:6,slug:'adekunle-omolaja',candidateId:'546a91c1-a521-42d8-910c-e51daf5c521d',name:'Adekunle Omolaja',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Lagos Mainland Federal Constituency',bio:'Popularly known as "KK Omolaja," the APC candidate for Lagos Mainland. Since emerging from the primary, he has focused on party unity, addressing members at Ward-level meetings across the constituency and calling on former rivals to set aside primary grievances in favour of collective victory, stressing that grassroots mobilisation across every ward will be central to the party\'s success in the general election.'},
  {rank:6,slug:'adeyemi-alli',candidateId:'53e83be5-3c15-4de2-83d0-12d6bd671d31',name:'Adeyemi Alli',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Mushin I Federal Constituency',bio:'Second-term member of the House of Representatives for Mushin I, first elected in 2019 and re-elected in 2023. Holds a Master\'s degree and is a Fellow of the Chartered Institute of Administration. Widely regarded as a disciplined, grassroots-oriented lawmaker, with a stated focus on legislative effectiveness, community development, and party cohesion in his representation of Mushin I.'},
  {rank:6,slug:'moses-oluwatosin-fayinka',candidateId:'eb75d4ff-d68c-45c4-afad-df0b40440297',name:'Moses Oluwatosin Fayinka',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Mushin II Federal Constituency',bio:'Sitting member for Mushin II since 2023, first elected with 29,502 votes to his closest rival\'s 12,355. Previously served as Special Adviser to the Lagos State Governor on Transportation before moving to the federal legislature. Has pushed legislation aimed at stopping fraudulent deductions by commercial banks from customer accounts.'},
  {rank:6,slug:'bolaji-kayode-robert',candidateId:'c5794298-1a7a-4de0-a5c7-73f92acea6ac',name:'Bolaji Kayode Robert',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Ojo Federal Constituency',bio:'Popularly known as "BIBIRE," built a reputation across Ojo Constituency for consistent community engagement, youth empowerment work, and accessibility to constituents. His candidacy drew a notable unity endorsement from a fellow party stakeholder, Comr. Omojuwa Olufemi (PhD), who stepped aside from his own ambitions in the seat specifically to back Robert and now serves as a strategist on the campaign, focused on grassroots mobilisation and resource coordination across the constituency\'s wards.'},
  {rank:6,slug:'taiwo-aiyedun',candidateId:'bee32194-1a60-48a0-aca2-c375038aa323',name:'Taiwo Aiyedun',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Oshodi-Isolo I Federal Constituency',bio:'Popularly known as "Shanana," emerged as APC\'s broadly-endorsed consensus candidate for Oshodi-Isolo I following extensive stakeholder consultations. Brings genuine legislative grounding to the role, having served eight years as Senior Legislative Aide to former House of Representatives member Moruf Akinderu-Fatai, as well as a stint as Senior Special Assistant during a previous Lagos State gubernatorial administration.'},
  {rank:6,slug:'bello-monsuru-oloyede',candidateId:'53e98cd8-7442-4344-92af-29e2c98c353c',name:'Bello Monsuru Oloyede',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Oshodi-Isolo II Federal Constituency',bio:'Elected Chairman of Ejigbo Local Council Development Area, now seeking to move from local government executive office to represent Oshodi-Isolo II in the federal legislature. His emergence as APC\'s candidate was publicly acknowledged by a fellow aspirant, who commended the process as a demonstration of party unity and commitment to reclaiming the constituency for the party.'},
  {rank:6,slug:'kolade-david-alabi',candidateId:'57cde6dc-1678-42a0-a5b2-b1415b3dd8a3',name:'Kolade David Alabi',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Shomolu Federal Constituency',bio:'Executive Chairman of Bariga Local Council Development Area and the longest-serving President in the history of the Association of Local Governments of Nigeria (ALGON), re-elected to a second term in March 2021. Represented West Africa as an Executive Member of United Cities and Local Governments of Africa, served as Vice Chairman of the Commonwealth Local Government Forum, and sat on the Steering Committee for Nigeria\'s National Development Plan. Credited with driving significant infrastructural growth in Bariga during his tenure, including recognition as one of Lagos\'s fastest-growing local economies.'},
  {rank:6,slug:'fuad-kayode-laguda',candidateId:'299bc518-618a-433f-8168-3e150861742e',name:'Fuad Kayode Laguda',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Surulere I Federal Constituency',bio:'Popularly known as "FKL," won a February 2024 by-election to succeed Femi Gbajabiamila — former Speaker of the House of Representatives, who vacated the seat to become President Tinubu\'s Chief of Staff. Previously Chairman of the APC in Surulere Local Government, and was part of the Independent Campaign Group that worked for Babajide Sanwo-Olu\'s election as Lagos State Governor. Educated at the University of Maiduguri, the University of Lagos, and Harvard Kennedy School\'s Executive Education programme, with a career spanning the Lagos Internal Revenue Service and the Federal Inland Revenue Service before politics. Now chairs the House Committee on Federal Polytechnics and Tertiary Education.'},
  {rank:6,slug:'lanre-okunnola',candidateId:'79808992-6b92-4f1f-a361-f272c1f1b7a7',name:'Lanre Okunnola',office:'HOUSE OF REPS',tier:'HOUSE_OF_REPS',seat:'Surulere II Federal Constituency',bio:'An architect by training (BSc and MSc from Ahmadu Bello University), incumbent since June 2023 after winning with 27,725 votes, an election subsequently upheld by the Election Tribunal against a PDP challenge. Serves as Deputy Chairman of the House Committee on Aids, Loans and Debt Management, and has sponsored more than a dozen bills alongside several motions during his tenure.'},
  {rank:7,slug:'mojisola-lasbat-meranda',candidateId:'366dd529-acc8-4ded-b910-06897ba2a351',name:'Mojisola Lasbat Meranda',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Apapa Constituency I',bio:'Currently Deputy Speaker of the Lagos State House of Assembly, having represented Apapa Constituency I since 2015. In January 2025, she made history as the first female Speaker in the Assembly\'s existence, before stepping down six weeks later and being re-elected Deputy Speaker. Holds a BSc in Public Administration from Lagos State University and an MPIA from the University of Lagos, and previously chaired the House Committee on Women Affairs and Poverty Alleviation. INEC-verified APC candidate (INEC/PLS/27/2025, 20 June 2026).'},
  {rank:7,slug:'musibau-lawal',candidateId:'e098ddd5-5dfa-4409-8483-0cae19d976f0',name:'Musibau Lawal',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Apapa Constituency II',bio:'First-term incumbent since 2023, chairing the House Committee on Health with oversight of the Lagos State Ministry of Health, the Lagos State Health Management Agency, and primary healthcare centres statewide. Has been directly involved in inspecting health facilities and monitoring government-sponsored medical interventions, including free surgery programmes.'},
  {rank:7,slug:'folorunsho-ola',candidateId:'368f14e2-7f23-4249-a5ad-24cbf8c4a0b6',name:'Folorunsho Ola',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Amuwo-Odofin Constituency I',bio:'Popularly known as "Olawestern," won the APC primary decisively, polling 3,161 of 3,303 votes cast against three other aspirants. Has stated his legislative priorities will centre on grassroots development and empowerment programmes aimed at improving welfare across Amuwo-Odofin.'},
  {rank:7,slug:'rauf-o-age-sulaimon',candidateId:'1c815b8e-63f1-47ad-8ca0-256abab31a99',name:'Rauf O. Age-Sulaimon',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Amuwo-Odofin Constituency II',bio:'Confirmed as Amuwo-Odofin II\'s rightful representative in December 2023, when the Court of Appeal upheld APC\'s claim to the seat and he took his oath of office before the Assembly. Has since served on legislative committees examining local government funding and administration, bringing a steady, detail-focused voice to the Assembly\'s work on grassroots governance.'},
  {rank:7,slug:'nureni-akinsanya',candidateId:'89957244-cf09-459f-bf91-3fcbec841c9b',name:'Nureni Akinsanya',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Mushin Constituency I',bio:'Popularly known as "Osmak," a real estate developer educated at Olabisi Onabanjo University and Ladoke Akintola University of Technology. Began his political career at the grassroots as an elected Councillor in Mushin, first for Ward B1 (1999–2002) and later Ward C (2004–2007), before winning the Assembly seat in 2019 and being re-elected in 2023.'},
  {rank:7,slug:'kazeem-olayinka',candidateId:'78f39d0b-2624-436c-84c6-37a8f9046469',name:'Kazeem Olayinka',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Mushin Constituency II',bio:'Also known as Olayinka Kazeem Esho, appointed Sole Administrator of Mushin Local Government by then-Governor Akinwunmi Ambode in 2016, before winning the Assembly seat in 2019 and being re-elected in 2023. Chairs the House Committee on Land Matters, overseeing land administration agencies including the New Towns Development Authority.'},
  {rank:7,slug:'barakat-bakare-odunuga',candidateId:'3e8cfea0-d4ea-4c07-a169-2bf8cd4e2915',name:'Barakat Bakare-Odunuga',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Surulere Constituency I',bio:'A lawyer and former Special Adviser on Housing to Governor Babajide Sanwo-Olu, bringing executive governance experience directly into her bid for the Surulere Constituency I Assembly seat. Her legal background and prior role in housing policy position her with substantive administrative grounding ahead of the 2027 election.'},
  {rank:7,slug:'damilola-ayinde-marshal',candidateId:'bd48cef7-17a1-4db8-9592-a5a60ea1dca1',name:'Damilola Ayinde-Marshal',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Surulere Constituency II',bio:'A barrister with over 12 years in legal practice, having built and run her own firm, Damilola Ayinde Marshal & Company, across property law, family law, criminal defence, and corporate governance. Holds an LLB from Houdegbe North American University in Cotonou and an LLM from the University of Lagos, and currently serves as Senior Special Assistant to Governor Babajide Sanwo-Olu on Tourism, Arts and Culture. Her campaign, themed "Youth Lokan," centres on youth inclusion, empowerment, technology, and vocational training.'},
  {rank:7,slug:'oluwagbemiga-abiola-abiola',candidateId:'d57ad1d6-df89-4a3f-8aa6-a0b004602ace',name:'Oluwagbemiga Abiola Abiola',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Agege Constituency I',bio:'Popularly known as "Agbelebu," the immediate past Vice Chairman of Agege Local Government, having also served as Sole Administrator and Secretary of the council. Serves as National Coordinator of Tinubu Media Force, and built his campaign on years of grassroots mobilisation and community engagement across Agege, pledging to prioritise youth empowerment, education, healthcare, and economic development if elected.'},
  {rank:7,slug:'shakiru-akindele-sule',candidateId:'a056637e-59f6-4055-b510-d3397261b500',name:'Shakiru Akindele Sule',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Agege Constituency II',bio:'A committed member of the All Progressives Congress with a genuine passion for grassroots service and the development of Agege Constituency II.'},
  {rank:7,slug:'saheed-bankole',candidateId:'6a96a2da-0c6b-41dd-9b03-cb1ae98b4841',name:'Saheed Bankole',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Eti-Osa Constituency I',bio:'Immediate past Executive Chairman of Eti-Osa Local Government, where his tenure included the construction of the local government secretariat alongside other infrastructure projects. Party leaders in the constituency have pointed to this record as evidence of his capacity for effective representation at the state level.'},
  {rank:7,slug:'gbolahan-yishawu',candidateId:'e774f660-81ef-4b3d-80a4-cb340224f461',name:'Gbolahan Yishawu',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Eti-Osa Constituency II',bio:'A trained engineer, holding a BEng from the University of Nigeria, Nsukka and an MSc from the University of Lagos, whose technical background has shaped a methodical, detail-oriented approach to lawmaking. One of the Assembly\'s most enduring voices, having represented Eti-Osa II continuously since 2011 — a mark of sustained trust from the constituency across more than a decade of service, and a foundation he now seeks to build further upon.'},
  {rank:7,slug:'oladipo-olayinka-ajomale',candidateId:'82714a15-15b0-4b35-bcc8-9dd0a21979c6',name:'Oladipo Olayinka Ajomale',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Oshodi-Isolo Constituency I',bio:'Also known as Ladi Ajomale, a lawyer holding an LLB from Lagos State University and a BL from the Nigerian Law School. Chairs the House Committee on Judiciary, Human Rights, Public Petitions, and LASIEC, overseeing judicial matters and public petitions brought before the Assembly. Previously practised at Proteus Law Firm and served in the Civil and Criminal Litigation departments of the Lagos State Ministry of Justice.'},
  {rank:7,slug:'mayowa-alakija',candidateId:'531d55a0-14d6-4586-8c24-002c41d492a6',name:'Mayowa Alakija',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Oshodi-Isolo Constituency II',bio:'Popularly known as "Bibire," a former Education Secretary bringing public administration experience to his Assembly bid. Secured strong support across Oshodi-Isolo\'s wards, which party stakeholders have attributed to years of grassroots engagement and community visibility within the constituency.'},
  {rank:7,slug:'toyin-gafar',candidateId:'bbc7d112-74f4-4703-9476-247ef339a884',name:'Toyin Gafar Bolowotan',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ikorodu Constituency I',bio:'Prince Shakirudeen Oluwatoyin Gafaar Bolowotan is the former Director-General of the Lagos State Sports Commission, running for Ikorodu Constituency I on a "Greater Ikorodu" platform built around grassroots mobilisation and youth development. Now the APC candidate after his third bid for this seat, having contested the primary twice before. His declaration drew acknowledgement from senior Ikorodu APC leadership, including former Deputy Governor Prince Abiodun Ogunleye, Senator Adeseye Ogunlewe, and Senator Tokunbo Abiru.'},
  {rank:7,slug:'moshood-a-aro',candidateId:'e9fe63de-f47a-4ecc-b165-68f02047474e',name:'Moshood A. Aro',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ikorodu Constituency II',bio:'Born in Ijede in 1983, "AMA" holds a BSc in Accounting from Lagos State University and built a private-sector career in the timber and hospitality trades, including national leadership roles in the Process Wood Producers and Marketers Association and the Sawmillers Association of Nigeria. Previously ran for this seat as a PDP candidate in 2019 before winning it as APC\'s candidate in 2023. As sitting member, he has sponsored or co-sponsored legislation including the Electricity Law, Local Government Administration Law, and Lagos Geographic Information Service Law. Won the 2026 APC primary by a landslide, polling 33,696 votes to his opponent\'s 114 across Igbogbo/Baiyeku, Ijede, and Imota.'},
  {rank:7,slug:'orekoya-abiodun',candidateId:'a7e91083-2682-44d5-8917-bdc6e98ce1f8',name:'Orekoya Abiodun',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Somolu Constituency I',bio:'First elected in 2023 with 14,256 votes, now seeking a second term. Chairs the House Committee on Youth and Social Development, and has contributed to legislation including the Lagos State Administration of Civil Justice Bill (2023), the Local Government Administration Bill (2024), and the Community Development Association Bill (2024). Has facilitated bursaries for 147 students in Somolu during his first term.'},
  {rank:7,slug:'moruf-i-alli-balogun',candidateId:'6a36da52-390e-4043-b5a3-667f37c7d0a9',name:'Moruf I. Alli-Balogun',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Somolu Constituency II',bio:'A committed member of the All Progressives Congress with a genuine passion for grassroots service and the development of Somolu Constituency II.'},
  {rank:7,slug:'temitope-adedeji-adewale',candidateId:'ba25744b-f4bb-4fa0-a966-24c6790a1b5d',name:'Temitope Adedeji Adewale',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ifako-Ijaiye Constituency I',bio:'Incumbent since March 2023, a Lagos State University graduate whose legislative voice has ranged across practical, everyday concerns for Ifako-Ijaiye — from championing the state\'s parking policy to advocating greater involvement in subsistence farming for food security, alongside a stated vision of positioning Ifako-Ijaiye as one of Lagos\'s most educated constituencies.'},
  {rank:7,slug:'rasheed-lanre-makinde',candidateId:'06a3eed5-3a09-4d30-a5f5-62126967c622',name:'Rasheed Lanre Makinde',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ifako-Ijaiye Constituency II',bio:'A former member of the 9th Lagos State House of Assembly, having represented Ifako-Ijaiye II from 2019 to 2023, now seeking to bring that legislative experience back to the constituency he has served before.'},
  {rank:7,slug:'oluwaseun-adebisi-ege',candidateId:'32b7a3a8-2bd2-433c-a811-e850ace1bec3',name:'Oluwaseun Adebisi Ege',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ojo Constituency I',bio:'Son of the late High Chief Richard Afolabi Ege, a respected political figure in the Badagry Division, carrying forward a family legacy of public service. As incumbent, chairs the House Committee on Housing, overseeing the allocation of Lagos State\'s Low-Cost Housing Estates and mediating disputes within state-owned housing schemes — a role of direct, practical benefit to residents across Ojo.'},
  {rank:7,slug:'suraju-tijani',candidateId:'93e2725c-713a-44d2-976a-65425ed86f66',name:'Suraju Tijani',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ojo Constituency II',bio:'First elected to represent Ojo Constituency II in 2019 and re-elected in 2023, bringing continuity and institutional memory to the seat. Holds a background in Public Administration from Olabisi Onabanjo University, and currently chairs the House Committee on House Services.'},
  {rank:7,slug:'adedamola-kasumu',candidateId:'bf01a591-1bdb-4e1b-9012-e344e28961d8',name:'Adedamola Kasumu',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ikeja Constituency I',bio:'Popularly known as "ARK," first elected in 2015 at just 32 — making him the youngest member of the 8th Assembly — and now serving his third term as Deputy Majority Leader. Sponsored two executive bills into law establishing the Lagos State Sports Commission and the Lagos State Sports Trust Fund, and facilitated LASU admission for over 200 students during his time in office. Studied law in the United Kingdom and holds a postgraduate diploma in Public Administration.'},
  {rank:7,slug:'adeseyi-lawal',candidateId:'9f9d7a1f-8f3b-42fe-b062-08da51d24b5b',name:'Adeseyi Lawal',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ikeja Constituency II',bio:'Also known as Prince Seyi Lawal, whose political roots trace back to 1998 as a youth member of the Alliance for Democracy, rising through party ranks before winning election to the Assembly in 2023. Holds a BA in Education from Tai Solarin University and chairs the House Committee on Science and Technology, overseeing the state\'s digital initiatives and technology policy.'},
  {rank:7,slug:'saad-lukmon-olumoh',candidateId:'57b33361-6c8a-4b20-8f98-ea172a7be77c',name:'Saad Lukmon Olumoh',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ajeromi-Ifelodun Constituency I',bio:'A tax consultant and administrator holding both a bachelor\'s and master\'s degree in Banking and Finance from Lagos State University. As incumbent, chairs the Ad Hoc Committee of the Lagos State House of Assembly, bringing financial expertise directly to bear on the Assembly\'s legislative and oversight functions.'},
  {rank:7,slug:'sabur-akanbi-oluwa',candidateId:'e1120a20-0b37-4e5d-882d-4af2b4b3481b',name:'Sabur Akanbi Oluwa',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ajeromi-Ifelodun Constituency II',bio:'A Lagos State University graduate who spent seven years as a legislative officer within the Lagos State House of Assembly (2012–2019) before winning election to the chamber himself in 2023 — bringing genuine institutional knowledge of how the Assembly works to his own representation of Ajeromi-Ifelodun II.'},
  {rank:7,slug:'lara-olumegbon-lawal',candidateId:'4ada35b9-2f91-4097-80af-140a68efec1b',name:'Lara Olumegbon-Lawal',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Lagos Island Constituency I',bio:'Princess Omolara Omotade Oyekan-Olumegbon, daughter of the late Oba Adeyinka Oyekan II, who reigned as Oba of Lagos from 1965 to 2003. Prior to elected office, she held roles including Compliance Officer at International and General Insurance and Special Assistant to the MD/CEO at the Bureau of Public Enterprises in Abuja. As incumbent, chairs the House Committee on Women Affairs, Poverty Alleviation, and Job Creation, championing urban farming for food security and vocational empowerment programmes for women.'},
  {rank:7,slug:'yusuf-nurudeen-abiodun',candidateId:'aef08374-b23e-4ec9-9489-3fe519d4535a',name:'Yusuf Nurudeen Abiodun',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Lagos Island Constituency II',bio:'A committed member of the All Progressives Congress with a genuine passion for grassroots service and the development of Lagos Island Constituency II.'},
  {rank:7,slug:'olatunji-lukmon-jimoh-orelope',candidateId:'b87f9481-9ae0-46f1-b328-3daf63993cf1',name:'Olatunji Lukmon Jimoh-Orelope',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Alimosho Constituency I',bio:'Son of the late Alhaji Jimoh Akanbi Laka Orelope ("Baba Orelope"), a foundational figure in Alimosho politics whose legacy is still recalled by party leaders including President Tinubu himself. Built his own record at the local government level as Chairman of the Transportation Committee (2004–2006) and Secretary to Alimosho Local Government (2011–2014) before winning election to the Assembly in 2023. Holds a Master\'s in Public Administration from the University of Lagos and chairs the House Committee on Civic Engagement.'},
  {rank:7,slug:'joseph-o-kehinde',candidateId:'16831df6-5df8-40ba-988c-6112f33dda4f',name:'Joseph O. Kehinde',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Alimosho Constituency II',bio:'As incumbent, chairs the House Committee on Public Accounts and facilitated the construction of the ultra-modern Abaranje Secondary School in Alimosho Constituency II — a project commissioned with the Speaker of the House in attendance and held up as a model of what focused constituency representation can deliver.'},
  {rank:7,slug:'o-abiola-olowu',candidateId:'c8f8ce84-e07d-4cb8-bc34-5ff4e3208ac2',name:'O. Abiola Olowu',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ibeju-Lekki Constituency I',bio:'Engr. Abiola Okanlawon Olowu, popularly known as "OKL," a long-standing APC chieftain within Ibeju-Lekki whose engineering background informs a stated focus on capacity development, economic empowerment, and skills training for the constituency\'s residents.'},
  {rank:7,slug:'oladele-ajayi',candidateId:'b8b9fc19-12db-4988-9946-dd868fe4f141',name:'Oladele Ajayi',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Ibeju-Lekki Constituency II',bio:'Full name Ajayi Oladele Oluwadamilare, a native of the Ibeju-Lekki area first elected to represent the constituency in 2023. Chairs the House Committee on Central Business Districts, a role of growing significance as Ibeju-Lekki continues its transformation into one of Lagos\'s major industrial and free-trade hubs.'},
  {rank:7,slug:'okanilawon-sanni',candidateId:'af567d09-a3a8-42f6-a17b-183ab82daa0b',name:'Okanilawon Sanni',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Kosofe Constituency I',bio:'Full name Sanni Ganiyu Babatunde Okanlawon, popularly known as "OKLA," a chartered accountant educated at Yaba College of Technology, the University of Calabar, and Lagos State University. Before winning election to the Assembly in 2019, he served as Special Adviser to the Governor on Food Security, playing a pivotal role in the LAKE Rice partnership between Lagos and Kebbi States. Re-elected in 2023, he chairs the House Committee on Local Government Administration, Chieftaincy Affairs, and Rural Development, and runs the OKLA Scholarship Scheme supporting education and youth development in Kosofe.'},
  {rank:7,slug:'muritala-seriki',candidateId:'9ca0f587-48b9-4887-b64f-2ad422caf12a',name:'Dr. Muritala Seriki',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Kosofe Constituency II',bio:'Former Lagos State APC Youth Leader, known as a bridge between the party and young people through years of youth engagement and political inclusion work. Author of "Chasing Your Dreams: Everything is Possible," with a foreword written by Senator Tokunbo Abiru, and founder of the SAIL Empowerment Foundation, focused on innovation and digital skills development for young Nigerians in line with the Renewed Hope Agenda.'},
  {rank:7,slug:'joseph-gbenu',candidateId:'a2216d68-3263-4120-90a5-f36e9dfbcf8a',name:'Joseph Gbenu',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Badagry Constituency I',bio:'Former Executive Chairman of Badagry-West Local Council Development Area, re-elected to that position in 2021 before now seeking to bring his local government executive experience to the state legislature. A recognised figure among Badagry\'s political leadership, having worked closely with fellow council chairmen and party leaders across the Badagry division.'},
  {rank:7,slug:'oladunjoye-bankole-olatunde',candidateId:'cfe47e47-ba55-4dd6-b46b-ed9a8ef1b060',name:'Oladunjoye Bankole Olatunde',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Badagry Constituency II',bio:'A committed member of the All Progressives Congress with a genuine passion for grassroots service and the development of Badagry Constituency II.'},
  {rank:7,slug:'abiodun-tobun',candidateId:'a5143775-3ffd-4d7a-a0cc-dc7b7b4b64ce',name:'Abiodun Tobun',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Epe Constituency I',bio:'Full name Abiodun Mustainu Tobun, first elected in 2011 and now a four-term member after re-election in 2015, 2019, and 2023. Before politics, he retired voluntarily in 2010 as Head of Department for Agriculture, Rural and Social Development following an active career as a civil service unionist, including serving as the first management staff to become NULGE Chairman in Lagos State. Holds an HND from Lagos State Polytechnic and an MBA and MLS from Lagos State University.'},
  {rank:7,slug:'sylvester-ogunkelu',candidateId:'e16826ca-08fe-4f3b-a9d3-f89d87416c70',name:'Sylvester Ogunkelu',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Epe Constituency II',bio:'Popularly known as "Sketel," an Epe-born tax administrator holding a BSc and MPA from Lagos State University, and a member of the Chartered Institute of Public Management of Nigeria. Built a career at the Lagos State Board of Internal Revenue Service before entering local government service as Health Supervisor for Eredo LCDA. First elected to the Assembly in 2019 and re-elected in 2023, he chairs the House Committee on Physical Planning and Urban Development, and is especially popular among younger constituents.'},
  {rank:7,slug:'ibrahim-ajani',candidateId:'7d6fff95-9fb9-4835-b8e9-ae6bc5d25e58',name:'Ibrahim Ajani',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Lagos Mainland Constituency I',bio:'Full name Ibrahim Ajani Owolabi, carrying forward his family\'s political legacy as the son of High Chief Monsuru Alao Owolabi, a former two-term Assembly member and federal House of Representatives member. Educated at the University of Hertfordshire and Middlesex University in the UK, he first won this seat in 2019 and was re-elected in 2023. Chairs the House Committee on Tertiary Education, with oversight of state-owned institutions including Lagos State University.'},
  {rank:7,slug:'rasheed-shabi',candidateId:'1982a232-6994-47dd-8868-db60efa23e6e',name:'Rasheed Shabi',office:'STATE ASSEMBLY',tier:'STATE_ASSEMBLY',seat:'Lagos Mainland Constituency II',bio:'A chemical engineer and environmentalist holding two Master\'s degrees from the University of Lagos and currently a PhD fellow in Environmental Management at the University of Ibadan. Served as General Manager/CEO of the Lagos State Environmental Protection Agency from 2008 to 2017, then as Special Adviser to the Governor on Environment, where he played a key role in the Cleaner Lagos Initiative. Elected to the Assembly in 2023, bringing genuine technical and environmental policy expertise to the chamber.'},
];

/* ── CAROUSEL ── */
const FEATURED=C.slice().sort((a,b)=>(a.rank-b.rank)||a.seat.localeCompare(b.seat)).slice(0,8);
let cur=0,timer;
function buildCarousel(){
  const frame=document.getElementById('carousel');
  const dots=document.getElementById('dots');
  FEATURED.forEach((c,i)=>{
    const s=document.createElement('div');
    s.className='carousel-slide'+(i===0?' active':'');
    const _ph=PHOTOS[c.slug];
    s.innerHTML=`<div class="slide-bg"></div>${_ph?`<img class="slide-img" src="${_ph}" alt="${c.name}" loading="lazy">`:`<div class="slide-fallback"><div class="avatar-big">${ini(c.name)}</div></div>`}<div class="slide-overlay"><div class="slide-office">${c.office}</div><div class="slide-name">${c.name}</div><div class="slide-const">${c.seat}</div><div class="slide-badge">✓ APC 2027</div></div>`;
    frame.appendChild(s);
    const d=document.createElement('div');
    d.className='dot'+(i===0?' on':'');
    d.onclick=()=>goSlide(i);
    dots.appendChild(d);
  });
  timer=setInterval(()=>goSlide((cur+1)%FEATURED.length),4000);
}
function goSlide(n){
  document.querySelectorAll('.carousel-slide').forEach((s,i)=>s.classList.toggle('active',i===n));
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('on',i===n));
  cur=n;
}
function nextSlide(){clearInterval(timer);goSlide((cur+1)%FEATURED.length);timer=setInterval(()=>goSlide((cur+1)%FEATURED.length),4000);}
function prevSlide(){clearInterval(timer);goSlide((cur-1+FEATURED.length)%FEATURED.length);timer=setInterval(()=>goSlide((cur+1)%FEATURED.length),4000);}
buildCarousel();

/* ── CANDIDATE GRID ── */
/* Lagos senatorial district → LGA mapping [source: aziza.com.ng, cited] */
const DISTRICT_LGAS={
  'West':['Agege','Ajeromi-Ifelodun','Alimosho','Amuwo-Odofin','Badagry','Ifako-Ijaiye','Ikeja','Mushin','Ojo','Oshodi-Isolo'],
  'Central':['Apapa','Eti-Osa','Lagos Island','Lagos Mainland','Surulere'],
  'East':['Epe','Ibeju-Lekki','Ikorodu','Kosofe','Somolu']
};
function candCard(c){
  return `<div class="cand-card" onclick="openModal('${c.slug}')">
    <div class="cand-photo">${PHOTOS[c.slug]?`<img src="${PHOTOS[c.slug]}" alt="${c.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top">`:`<div class="cand-photo-fallback">${ini(c.name)}</div>`}</div>
    <div class="cand-info">
      <div class="cand-office">${c.office}</div>
      <div class="cand-name">${c.name}</div>
      <div class="cand-seat">${c.seat}</div>
    </div>
  </div>`;
}
function apexCard(c){
  return `<div class="apex-card" onclick="openModal('${c.slug}')">
    <div class="apex-photo">
      <div class="apex-ribbon">${c.office}</div>
      ${PHOTOS[c.slug]?`<img src="${PHOTOS[c.slug]}" alt="${c.name}" loading="lazy">`:`<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Archivo',sans-serif;font-weight:900;font-size:48px;color:var(--gold)">${ini(c.name)}</div>`}
    </div>
    <div class="apex-info"><div class="apex-office">${c.office}</div><div class="apex-name">${c.name}</div></div>
  </div>`;
}
function lgaOf(seat){
  // Extract the LGA/constituency root name; normalize known spelling variants (Shomolu/Somolu)
  return seat.replace(/ Federal Constituency.*| Constituency.*| Senatorial District.*/i,'').trim().replace(/^Shomolu$/i,'Somolu');
}
function renderHierarchy(){
  const root=document.getElementById('hierarchyRoot');
  const president=C.find(c=>c.office==='PRESIDENT'), vp=C.find(c=>c.office==='VICE PRESIDENT');
  const gov=C.find(c=>c.office==='GOVERNOR'), dep=C.find(c=>c.office==='DEPUTY GOVERNOR');
  const senators=C.filter(c=>c.office==='SENATOR');
  const reps=C.filter(c=>c.office==='HOUSE OF REPS');
  const assembly=C.filter(c=>c.office==='STATE ASSEMBLY');

  let html=`
    <div class="tier-block">
      <div class="tier-heading"><span class="num">1</span><h3>Federal Executive</h3></div>
      <div class="apex-grid">${[president,vp].filter(Boolean).map(apexCard).join('')}</div>
    </div>
    <div class="tier-block">
      <div class="tier-heading"><span class="num">2</span><h3>State Executive — Lagos</h3></div>
      <div class="apex-grid">${[gov,dep].filter(Boolean).map(apexCard).join('')}</div>
    </div>
    <div class="tier-block">
      <div class="tier-heading"><span class="num">3</span><h3>Senatorial Districts</h3></div>`;

  ['West','Central','East'].forEach(dist=>{
    const senator=senators.find(s=>s.seat.includes(dist));
    const lgas=DISTRICT_LGAS[dist];
    const distReps=reps.filter(r=>lgas.some(l=>lgaOf(r.seat).toLowerCase().includes(l.toLowerCase())||l.toLowerCase().includes(lgaOf(r.seat).toLowerCase())));
    const distAssembly=assembly.filter(a=>lgas.some(l=>lgaOf(a.seat).toLowerCase().includes(l.toLowerCase())||l.toLowerCase().includes(lgaOf(a.seat).toLowerCase())));
    html+=`
      <div class="district-accordion" id="dist-${dist}">
        <div class="district-head" onclick="toggleDistrict('${dist}')">
          <div class="district-senator-photo">${senator&&PHOTOS[senator.slug]?`<img src="${PHOTOS[senator.slug]}" alt="${senator.name}" loading="lazy">`:`<div class="district-senator-photo-fb">${senator?ini(senator.name):'—'}</div>`}</div>
          <div class="district-senator">
            <div class="lab">Lagos ${dist} Senatorial District</div>
            <div class="nm">${senator?senator.name:'—'}</div>
          </div>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--dim)">${distReps.length} Reps · ${distAssembly.length} Assembly</span>
          <span class="chev">▾</span>
        </div>
        <div class="district-body"><div class="district-body-inner">
          <div class="subtier-label">Senator</div>
          <div class="apex-grid senator-grid">${senator?apexCard(senator):''}</div>
          <div class="subtier-label">House of Representatives</div>
          <div class="cand-grid">${distReps.sort((a,b)=>a.seat.localeCompare(b.seat)).map(candCard).join('')}</div>
          <div class="subtier-label">State Assembly</div>
          <div class="cand-grid">${distAssembly.sort((a,b)=>a.seat.localeCompare(b.seat)).map(candCard).join('')}</div>
        </div></div>
      </div>`;
  });
  html+=`</div>`;
  root.innerHTML=html;
}
function toggleDistrict(dist){
  const body=document.getElementById('dist-'+dist).querySelector('.district-body');
  const acc=document.getElementById('dist-'+dist);
  const opening=!acc.classList.contains('open');
  acc.classList.toggle('open');
  if(opening){
    body.style.maxHeight=body.scrollHeight+'px';
  } else {
    body.style.maxHeight=null;
  }
}
window.addEventListener('resize',()=>{
  document.querySelectorAll('.district-accordion.open .district-body').forEach(b=>{
    b.style.maxHeight=b.scrollHeight+'px';
  });
});
loadAllPhotos().then(renderHierarchy);


/* ── MODAL ── */
function openModal(slug){
  const c=C.find(x=>x.slug===slug);if(!c)return;
  document.getElementById('modalBox').innerHTML=`
    <div class="modal-head">
      <div class="modal-photo">${PHOTOS[c.slug]?`<img src="${PHOTOS[c.slug]}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;object-position:top">`:`<div class="modal-photo-fb">${ini(c.name)}</div>`}</div>
      <div style="flex:1">
        <div class="modal-office">${c.office}</div>
        <div class="modal-name">${c.name}</div>
        <div class="modal-seat">${c.seat}</div>
      </div>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body">
      <div class="modal-bio">${c.bio}</div>
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;padding:4px 11px;border-radius:7px;background:var(--gr);color:var(--gl);border:1px solid rgba(11,110,46,.35)">APC 2027</span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;padding:4px 11px;border-radius:7px;background:rgba(201,160,32,.1);color:var(--gold);border:1px solid rgba(201,160,32,.3)">VERIFIED</span>
      </div>
      <div class="reg-box">
        <h4>Register to Support ${c.name.split(' ').slice(-2).join(' ')}</h4>
        <p style="font-size:12px;color:var(--dim);margin-bottom:14px">Join as a supporter or canvasser in your local government area.</p>
        <div class="reg-toggle">
          <button id="rtSupporter" class="on" onclick="setRegRole('supporter')">Supporter</button>
          <button id="rtCanvasser" onclick="setRegRole('canvasser')">Canvasser</button>
        </div>
        <div id="regMsg"></div>
      ${c.candidateId ? `<div class="struct-section"><div class="struct-title">Campaign Structure</div><div id="structBody">Checking access…</div></div>
      <div class="struct-section"><div class="struct-title">Activity Log — Events, Meetings, Reports, Photos</div><div id="activityBody">Checking access…</div></div>` : ''}
        <form id="regForm" onsubmit="return submitRegistration(event,'${c.slug}')">
          <div class="field"><label>Full Name</label><input type="text" id="regName" required></div>
          <div class="field"><label>Phone Number</label><input type="tel" id="regPhone" required placeholder="080XXXXXXXX"></div>
          <div class="field"><label>Local Government Area</label>
            <select id="regLga" required onchange="loadWards()"><option value="">Select LGA…</option></select>
          </div>
          <div class="field"><label>Ward</label>
            <select id="regWard" required disabled onchange="loadPUs()"><option value="">Select LGA first…</option></select>
          </div>
          <div class="field"><label>Polling Unit (optional)</label>
            <select id="regPu" disabled><option value="">Select ward first…</option></select>
          </div>
          <div class="consent-row">
            <input type="checkbox" id="regConsent" required>
            <label for="regConsent">I consent to my name, phone number, and location being recorded for this campaign's coordination purposes.</label>
          </div>
          <button class="btn-g" type="submit" id="regBtn">Register</button>
        </form>
      </div>
    </div>`;
  document.getElementById('modal').style.display='flex';
  document.body.style.overflow='hidden';
  loadLgas();
  if(c.candidateId) { loadCampaignStructure(c.candidateId); loadActivityLog(c.candidateId); }
}

async function loadCampaignStructure(candidateId){
  const el=document.getElementById('structBody');
  if(!el) return;
  const {data:{session}}=await sb.auth.getSession();
  if(!session){ el.innerHTML='<div class="struct-empty">Sign in to view this campaign\'s structure.</div>'; return; }
  const {data:council}=await sb.from('campaign_councils').select('id').eq('candidate_id',candidateId).maybeSingle();
  const {data:rows,error}=await sb.from('directorates').select('id,name,parent_id,sort_order').eq('candidate_id',candidateId).order('sort_order');
  if(error || !rows || !rows.length){ el.innerHTML='<div class="struct-empty">Campaign structure not yet assigned.</div>'; return; }
  let membersByDirectorate={};
  if(council){
    const {data:members}=await sb.from('council_members').select('directorate_id,invited_email,status').eq('council_id',council.id).not('directorate_id','is',null);
    (members||[]).forEach(m=>{ membersByDirectorate[m.directorate_id]=m; });
  }
  const root=rows.find(r=>!r.parent_id);
  const children=rows.filter(r=>r.parent_id);
  el.innerHTML=`
    ${root?`<div class="struct-dg">${root.name}</div>`:''}
    <div class="struct-grid">
      ${children.map(r=>{
        const m=membersByDirectorate[r.id];
        const assigneeText=m ? `${m.invited_email}${m.status==='invited'?' (invited)':''}` : 'Not yet assigned';
        return `
        <div class="struct-role">
          <input value="${r.name}" data-dir-id="${r.id}" onblur="saveDirectorateName(this)">
          <div class="assignee">${assigneeText}</div>
        </div>
      `;}).join('')}
    </div>
  `;
}

async function saveDirectorateName(input){
  const id=input.dataset.dirId;
  const newName=input.value.trim();
  if(!newName) return;
  const {error}=await sb.from('directorates').update({name:newName}).eq('id',id);
  if(error){ input.style.outline='1px solid #D05050'; console.error(error); }
  else { input.style.outline='1px solid #3DB97A'; setTimeout(()=>input.style.outline='none',1000); }
}

async function loadActivityLog(candidateId){
  const el=document.getElementById('activityBody');
  if(!el) return;
  const {data:{session}}=await sb.auth.getSession();
  if(!session){ el.innerHTML='<div class="struct-empty">Sign in to view and submit activity.</div>'; return; }
  const {data:rows,error}=await sb.from('activity_logs').select('*').eq('candidate_id',candidateId).order('created_at',{ascending:false}).limit(20);
  const list = (error || !rows || !rows.length)
    ? '<div class="struct-empty">No activity logged yet.</div>'
    : rows.map(r=>`
        <div class="activity-item">
          <div class="activity-head"><span class="activity-type">${r.activity_type}</span><span class="activity-date">${new Date(r.created_at).toLocaleDateString()}</span></div>
          <div class="activity-title">${r.title}</div>
          ${r.description?`<div class="activity-desc">${r.description}</div>`:''}
          ${r.attendee_count?`<div class="activity-desc">Attendance: ${r.attendee_count}</div>`:''}
          ${(r.photo_urls||[]).length?`<div class="activity-photos">${r.photo_urls.map(u=>`<img src="${u}">`).join('')}</div>`:''}
          <div class="activity-by">${r.submitted_by_label}</div>
        </div>`).join('');
  el.innerHTML = `
    <div id="activityList">${list}</div>
    <form id="activityForm" onsubmit="return submitActivity(event,'${candidateId}')">
      <div class="field"><label>Type</label>
        <select id="actType" required><option value="event">Event</option><option value="meeting">Meeting</option><option value="attendance">Attendance record</option><option value="report">Report</option><option value="photo">Photo only</option></select>
      </div>
      <div class="field"><label>Title</label><input type="text" id="actTitle" required></div>
      <div class="field"><label>Description / Notes</label><textarea id="actDesc" rows="2"></textarea></div>
      <div class="field"><label>Attendance count (optional)</label><input type="number" id="actAttendees" min="0"></div>
      <div class="field"><label>Photos (optional)</label><input type="file" id="actPhotos" accept="image/*" multiple></div>
      <button class="btn-g" type="submit" id="actBtn">Log Activity</button>
      <div id="actMsg" style="font-size:12px;color:var(--dim);margin-top:6px"></div>
    </form>`;
}

async function submitActivity(ev, candidateId){
  ev.preventDefault();
  const btn=document.getElementById('actBtn'); const msg=document.getElementById('actMsg');
  btn.disabled=true; msg.textContent='Uploading…';
  try{
    const files = document.getElementById('actPhotos').files;
    const photoUrls = [];
    for (const file of files){
      const path = `${candidateId}/${Date.now()}-${file.name}`;
      const {error: upErr} = await sb.storage.from('activity-photos').upload(path, file);
      if (upErr) throw upErr;
      const {data: pub} = sb.storage.from('activity-photos').getPublicUrl(path);
      photoUrls.push(pub.publicUrl);
    }
    const {data:{session}} = await sb.auth.getSession();
    const {error: insErr} = await sb.from('activity_logs').insert({
      candidate_id: candidateId,
      activity_type: document.getElementById('actType').value,
      title: document.getElementById('actTitle').value.trim(),
      description: document.getElementById('actDesc').value.trim() || null,
      attendee_count: document.getElementById('actAttendees').value || null,
      photo_urls: photoUrls,
      submitted_by_label: session?.user?.email || 'Campaign team',
    });
    if (insErr) throw insErr;
    msg.textContent='Logged.';
    loadActivityLog(candidateId);
  }catch(err){
    msg.textContent='Error: '+(err.message||'could not save.');
  }finally{
    btn.disabled=false;
  }
  return false;
}
let regRole='supporter';
function setRegRole(r){
  regRole=r;
  document.getElementById('rtSupporter').classList.toggle('on',r==='supporter');
  document.getElementById('rtCanvasser').classList.toggle('on',r==='canvasser');
}
let lgaCache=null;
async function loadLgas(){
  if(!lgaCache){
    const {data}=await sb.from('lgas').select('id,name').order('name');
    lgaCache=data||[];
  }
  const sel=document.getElementById('regLga');
  if(!sel)return;
  sel.innerHTML='<option value="">Select LGA…</option>'+lgaCache.map(l=>`<option value="${l.id}">${l.name}</option>`).join('');
}
async function loadWards(){
  const lgaId=document.getElementById('regLga').value;
  const wardSel=document.getElementById('regWard');
  const puSel=document.getElementById('regPu');
  puSel.innerHTML='<option value="">Select ward first…</option>';puSel.disabled=true;
  if(!lgaId){wardSel.innerHTML='<option value="">Select LGA first…</option>';wardSel.disabled=true;return;}
  wardSel.disabled=false;wardSel.innerHTML='<option value="">Loading…</option>';
  const {data}=await sb.from('wards').select('id,name').eq('lga_id',lgaId).order('name');
  wardSel.innerHTML='<option value="">Select Ward…</option>'+(data||[]).map(w=>`<option value="${w.id}">${w.name}</option>`).join('');
}
async function loadPUs(){
  const wardId=document.getElementById('regWard').value;
  const puSel=document.getElementById('regPu');
  if(!wardId){puSel.innerHTML='<option value="">Select ward first…</option>';puSel.disabled=true;return;}
  puSel.disabled=false;puSel.innerHTML='<option value="">Loading…</option>';
  const {data}=await sb.from('polling_units').select('id,name,pu_code').eq('ward_id',wardId).eq('is_active',true).order('name');
  puSel.innerHTML='<option value="">Select PU (optional)…</option>'+(data||[]).map(p=>`<option value="${p.id}">${p.pu_code} — ${p.name}</option>`).join('');
}
async function submitRegistration(e,slug){
  e.preventDefault();
  const msg=document.getElementById('regMsg');
  const btn=document.getElementById('regBtn');
  const c=C.find(x=>x.slug===slug);
  btn.disabled=true;btn.textContent='Registering…';

  const {data:cand}=await sb.from('candidates').select('id').ilike('full_name',`%${c.name.split(' ').slice(-2).join(' ')}%`).limit(1).maybeSingle();
  if(!cand){
    btn.disabled=false;btn.textContent='Register';
    msg.innerHTML='<div class="lmsg err">Could not locate this candidate record. Please try again.</div>';
    return false;
  }

  const payload={
    candidate_id:cand.id,
    full_name:document.getElementById('regName').value.trim(),
    phone:document.getElementById('regPhone').value.trim(),
    lga_id:document.getElementById('regLga').value,
    ward_id:document.getElementById('regWard').value,
    polling_unit_id:document.getElementById('regPu').value||null,
    role:regRole,
    consent_given:document.getElementById('regConsent').checked,
    consent_timestamp:new Date().toISOString()
  };
  const {error}=await sb.from('supporters').insert(payload);
  btn.disabled=false;btn.textContent='Register';
  if(error){
    msg.innerHTML=`<div class="lmsg err">${error.message}</div>`;
    return false;
  }
  msg.innerHTML='<div class="lmsg ok">Thank you for registering! Your support has been recorded.</div>';
  document.getElementById('regForm').reset();
  return false;
}
function closeModal(){document.getElementById('modal').style.display='none';document.body.style.overflow='';}

/* ── AUTH ── */
function openKeyLogin(){document.getElementById('keySheet').classList.add('open');setTimeout(()=>document.getElementById('keyInput')?.focus(),150);}
function closeKeyLogin(){document.getElementById('keySheet').classList.remove('open');document.getElementById('keyMsg').innerHTML='';document.getElementById('keyInput').value='';}
function closeKeyResult(){document.getElementById('keyResultSheet').classList.remove('open');document.body.style.overflow='';}

async function submitAccessKey(){
  const raw=document.getElementById('keyInput').value.trim();
  const msg=document.getElementById('keyMsg');
  const btn=document.getElementById('keyBtn');
  if(!raw){msg.innerHTML='<div class="lmsg err">Enter your access key.</div>';return;}
  btn.disabled=true;btn.textContent='Checking…';
  try{
    const {data,error}=await sb.rpc('get_coverage_by_key',{p_key:raw});
    btn.disabled=false;btn.textContent='View Coverage →';
    if(error){msg.innerHTML=`<div class="lmsg err">${error.message}</div>`;return;}
    if(!data||!data.ok){msg.innerHTML=`<div class="lmsg err">${data?.error||'Key not recognized.'}</div>`;return;}
    closeKeyLogin();
    renderKeyResult(data);
  }catch(err){
    btn.disabled=false;btn.textContent='View Coverage →';
    msg.innerHTML=`<div class="lmsg err">Something went wrong. Please try again.</div>`;
  }
}

function renderKeyResult(data){
  document.getElementById('keyResultTitle').textContent=data.name;
  document.getElementById('keyResultSubtitle').textContent=data.type==='candidate'
    ? (data.seat||'')
    : 'LGA Coverage — aggregate across every candidate in this LGA';
  const breakdownLabel=data.type==='candidate' ? 'Coverage by Ward' : 'Coverage by Candidate';
  const rows=(data.breakdown||[]);
  document.getElementById('keyResultBody').innerHTML=`
    <div class="section-label" style="margin-bottom:10px">${data.type==='candidate'?'Candidate Coverage':'LGA Coverage'}</div>
    <div id="keyStatBoxes" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px">
      <div class="admin-stat"><div class="n">${(data.total_supporters||0)+(data.total_canvassers||0)}</div><div class="l">Total</div></div>
      <div class="admin-stat"><div class="n">${data.total_supporters||0}</div><div class="l">Supporters</div></div>
      <div class="admin-stat"><div class="n">${data.total_canvassers||0}</div><div class="l">Canvassers</div></div>
    </div>
    <div class="section-label" style="margin-bottom:8px">${breakdownLabel}</div>
    <div class="card">
      ${rows.length?rows.map(r=>`
        <div class="geo-row">
          <span>${r.label}</span>
          <span style="color:var(--gl);font-weight:600">${(r.supporters||0)+(r.canvassers||0)} <span style="color:var(--dim);font-weight:400;font-size:11px">(${r.supporters||0} supporters · ${r.canvassers||0} canvassers)</span></span>
        </div>`).join(''):'<p class="muted" style="padding:16px;font-size:13px">No registrations recorded yet.</p>'}
    </div>
  `;
  document.getElementById('keyResultSheet').classList.add('open');
  document.body.style.overflow='hidden';
}

function openLogin(){document.getElementById('loginSheet').classList.add('open');showLoginForm();}
function closeLogin(){document.getElementById('loginSheet').classList.remove('open');}
function showLoginForm(){
  document.getElementById('loginForm').style.display='block';
  document.getElementById('otpForm').style.display='none';
  document.getElementById('loginMsg').innerHTML='';
  document.getElementById('loginDesc').textContent='Sign in with your password, or request a 6-digit email code.';
  document.getElementById('loginBtn').disabled=false;
  document.getElementById('loginBtn').textContent='Sign In →';
}
function switchToOtp(){
  document.getElementById('loginMsg').innerHTML='';
  sendOtp();
}
async function signInPassword(){
  const email=document.getElementById('loginEmail').value.trim();
  const password=document.getElementById('loginPassword').value;
  const msg=document.getElementById('loginMsg');
  const btn=document.getElementById('loginBtn');
  if(!email||!password){msg.innerHTML='<div class="lmsg err">Enter both email and password.</div>';return;}
  btn.disabled=true;btn.textContent='Signing in…';
  const {error}=await sb.auth.signInWithPassword({email,password});
  btn.disabled=false;btn.textContent='Sign In →';
  if(error){
    msg.innerHTML=`<div class="lmsg err">${error.message.includes('Invalid')?'Incorrect email or password.':error.message}</div>`;
    return;
  }
  closeLogin();
  showDash();
}
async function sendOtp(){
  const email=document.getElementById('loginEmail').value.trim();
  const msg=document.getElementById('loginMsg');
  const btn=document.getElementById('loginBtn');
  if(!email){msg.innerHTML='<div class="lmsg err">Enter your email address.</div>';return;}
  btn.disabled=true;btn.textContent='Sending…';
  const {error}=await sb.auth.signInWithOtp({email,options:{shouldCreateUser:false}});
  if(error){
    btn.disabled=false;btn.textContent='Sign In →';
    msg.innerHTML=`<div class="lmsg err">${error.message.includes('rate')?'Too many code requests — please use your password instead, or wait before requesting another code.':error.message}</div>`;
    return;
  }
  localStorage.setItem('lcip_email',email);
  document.getElementById('loginForm').style.display='none';
  document.getElementById('otpForm').style.display='block';
  document.getElementById('loginDesc').textContent=`Check ${email} for your 6-digit code.`;
  msg.innerHTML='<div class="lmsg ok">Code sent! Check your inbox (and spam).</div>';
  setTimeout(()=>{document.getElementById('otpCode').focus();},200);
  document.getElementById('otpCode').addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'');if(e.target.value.length===6)verifyOtp();});
}
async function verifyOtp(){
  const email=localStorage.getItem('lcip_email')||'';
  const token=document.getElementById('otpCode').value.trim();
  const msg=document.getElementById('loginMsg');
  const btn=document.getElementById('otpBtn');
  if(token.length<6){msg.innerHTML='<div class="lmsg err">Enter the full 6-digit code.</div>';return;}
  btn.disabled=true;btn.textContent='Verifying…';
  const {error}=await sb.auth.verifyOtp({email,token,type:'email'});
  if(error){
    btn.disabled=false;btn.textContent='Sign In →';
    msg.innerHTML=`<div class="lmsg err">${error.message.includes('expired')||error.message.includes('invalid')?'Code invalid or expired — go back and request a new one.':error.message}</div>`;
    return;
  }
  localStorage.removeItem('lcip_email');
  closeLogin();
  showDash();
}
async function signOut(){await sb.auth.signOut();hideDash();hideCouncil();}
function hideDash(){document.getElementById('dashSheet').classList.remove('open');document.body.style.overflow='';}
function hideCouncil(){document.getElementById('councilSheet').classList.remove('open');}

/* ── DASHBOARD ── */
async function showDash(){
  const {data:{session}}=await sb.auth.getSession();
  if(!session){openLogin();return;}
  hideCouncil();
  document.getElementById('dashSheet').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('dashEmail').textContent=session.user.email;
  document.getElementById('dashCouncils').innerHTML='<p style="color:var(--dim)">Loading…</p>';
  let rows;
  try{
    const results=await Promise.all([
      Promise.resolve(sb.rpc('accept_council_invitations')).catch(()=>null),
      sb.from('council_members')
        .select('role,status,campaign_councils(id,name,candidates(id,full_name,position))')
        .eq('profile_id',session.user.id).eq('status','active')
    ]);
    rows=results[1].data;
  }catch(err){
    document.getElementById('dashCouncils').innerHTML=`<p style="color:var(--dim);padding:20px 0">Could not load your councils. ${err.message||'Please refresh and try again.'}</p>`;
    return;
  }
  const list=(rows||[]);
  document.getElementById('dashCouncils').innerHTML=list.length===0
    ?'<p style="color:var(--dim);padding:20px 0">No active councils found. Contact your campaign administrator.</p>'
    :list.map(m=>`
      <div class="council-row" onclick="openCouncil('${m.campaign_councils.id}','${m.campaign_councils.name}','${m.campaign_councils.candidates?.position||''}')">
        <div class="council-av">${ini(m.campaign_councils.candidates?.full_name||'?')}</div>
        <div style="flex:1">
          <div style="font-family:'Archivo',sans-serif;font-weight:700;font-size:15px">${m.campaign_councils.name}</div>
          <div style="font-size:12px;color:var(--dim);margin-top:2px">${m.campaign_councils.candidates?.position||''}</div>
        </div>
        <div class="council-role">${(m.role||'').replace(/_/g,' ').toUpperCase()}</div>
      </div>`).join('');
}

async function openCouncil(id,name,office){
  const {data:{session}}=await sb.auth.getSession();if(!session)return;
  document.getElementById('csTitle').textContent=name;
  document.getElementById('csOffice').textContent=office;
  document.getElementById('csBody').innerHTML='<p style="color:var(--dim)">Loading…</p>';
  document.getElementById('councilSheet').classList.add('open');
  let cc,mem;
  try{
    const results=await Promise.all([
      sb.from('campaign_councils').select('id,candidate_id,candidates(full_name,position,bio)').eq('id',id).maybeSingle(),
      sb.from('council_members').select('id,role,status,invited_email,profile_id').eq('council_id',id)
    ]);
    cc=results[0].data;
    mem=results[1].data;
  }catch(err){
    document.getElementById('csBody').innerHTML=`<p style="color:var(--dim)">Could not load this council. ${err.message||'Please try again.'}</p>`;
    return;
  }
  const me=(mem||[]).find(m=>m.profile_id===session.user.id);
  const canAdmin=me&&(me.role==='candidate'||me.role==='campaign_dg');
  const roster=(mem||[]).map(m=>`
    <div class="member-row">
      <div class="member-av">${(m.invited_email||'??').slice(0,2).toUpperCase()}</div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:14px">${m.invited_email||'Linked member'}</div>
        <div style="font-size:12px;color:var(--dim)">${m.status==='active'?'Active':m.status==='invited'?'Invitation pending':'Suspended'}</div>
      </div>
      <div class="council-role">${m.role.replace(/_/g,' ').toUpperCase()}</div>
    </div>`).join('') || '<p style="padding:20px;color:var(--dim)">No members yet.</p>';
  document.getElementById('csBody').innerHTML=`
    <div class="section-label" style="margin-bottom:8px">${cc?.candidates?.position||''}</div>
    <h2 style="font-family:'Archivo',sans-serif;font-weight:800;font-size:26px;margin-bottom:10px">${cc?.candidates?.full_name||name}</h2>
    <p style="color:var(--dim);font-size:14px;line-height:1.7;max-width:580px;margin-bottom:28px">${cc?.candidates?.bio||'Executive brief pending.'}</p>
    <div class="section-label">Council Roster</div>
    <div class="card" style="margin-top:10px;margin-bottom:24px">${roster}</div>
    ${canAdmin?`
      <div class="section-label">Canvasser &amp; Supporter Coverage</div>
      <div id="statBoxes" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px">
        <div class="admin-stat"><div class="n" id="statTotal">—</div><div class="l">Total</div></div>
        <div class="admin-stat"><div class="n" id="statSupporters">—</div><div class="l">Supporters</div></div>
        <div class="admin-stat"><div class="n" id="statCanvassers">—</div><div class="l">Canvassers</div></div>
      </div>
      <div class="card" style="margin-bottom:24px">
        <div id="geoBreakdown" style="padding:14px 18px"><p class="muted" style="font-size:13px">Loading coverage…</p></div>
      </div>

      <div class="section-label">Campaign Directorates</div>
      <p class="muted" style="font-size:12.5px;margin-bottom:12px">Standard campaign departments for Dr. Kadri Obafemi Hamzat's structure — add the ones you need.</p>
      <div class="card" style="margin-bottom:14px">
        <div id="directorateList" style="padding:8px 0"><p class="muted" style="padding:16px;font-size:13px">Loading…</p></div>
      </div>
      <div class="inv-box" style="margin-bottom:24px">
        <div id="dirMsg"></div>
        <div class="field"><label>Directorate</label>
          <select id="dirTemplate" onchange="toggleCustomDir()">
            <option value="Media & Publicity">Media &amp; Publicity</option>
            <option value="Youth Mobilization">Youth Mobilization</option>
            <option value="Women Affairs">Women Affairs</option>
            <option value="Logistics">Logistics</option>
            <option value="Security">Security</option>
            <option value="Finance & Fundraising">Finance &amp; Fundraising</option>
            <option value="Legal & Compliance">Legal &amp; Compliance</option>
            <option value="Strategy & Research">Strategy &amp; Research</option>
            <option value="Ward Mobilization">Ward Mobilization (assign to a specific ward)</option>
            <option value="__custom">Other (type your own)…</option>
          </select>
        </div>
        <div class="field" id="dirCustomField" style="display:none"><label>Directorate Name</label><input type="text" id="dirCustomName" placeholder="e.g. Diaspora Engagement"></div>
        <div class="field" id="dirWardField" style="display:none"><label>Ward</label>
          <select id="dirLga" onchange="loadDirWards()" style="margin-bottom:8px"><option value="">Select LGA…</option></select>
          <select id="dirWard" disabled><option value="">Select LGA first…</option></select>
        </div>
        <button class="btn-g" id="dirBtn" onclick="createDirectorate('${cc?.candidate_id}')">Add Directorate</button>
      </div>

      <div class="section-label">Coordinators</div>
      <p class="muted" style="font-size:12.5px;margin-bottom:12px">Assign people to a directorate above, or directly to a ward.</p>
      <div class="card" style="margin-bottom:24px">
        <div id="coordinatorList" style="padding:8px 0"><p class="muted" style="padding:16px;font-size:13px">Loading…</p></div>
      </div>

      <div class="section-label">Add a Coordinator</div>
      <div class="inv-box" style="margin-top:10px">
        <div id="invMsg"></div>
        <div class="field"><label>Email</label><input type="email" id="invEmail" placeholder="coordinator@example.com"></div>
        <div class="field"><label>Their Role</label>
          <select id="invRole">
            <option value="ward_coordinator">Ward Coordinator</option>
            <option value="pu_coordinator">Polling Unit Coordinator</option>
            <option value="director">Director</option>
            <option value="campaign_dg">Campaign DG</option>
            <option value="member">General Member</option>
          </select>
        </div>
        <div class="field"><label>Assign to Directorate (optional)</label>
          <select id="invDirectorate"><option value="">No directorate</option></select>
        </div>
        <div class="field"><label>Or, which Ward do they cover? (optional)</label>
          <select id="invLga" onchange="loadInviteWards()"><option value="">Select LGA…</option></select>
        </div>
        <div class="field"><label></label>
          <select id="invWard" disabled><option value="">Select LGA first…</option></select>
        </div>
        <button class="btn-g" id="invBtn" onclick="inviteMember('${id}')">Add Coordinator</button>
      </div>`:''}`;
  if(canAdmin){
    loadSupporterStats(cc?.candidate_id);
    loadDirectorateList(cc?.candidate_id);
    loadCoordinatorList(id);
    loadInviteLgas();
    loadDirLgas();
  }
}
function toggleCustomDir(){
  const isCustom=document.getElementById('dirTemplate').value==='__custom';
  const isWard=document.getElementById('dirTemplate').value==='Ward Mobilization';
  document.getElementById('dirCustomField').style.display=isCustom?'block':'none';
  document.getElementById('dirWardField').style.display=isWard?'block':'none';
}
async function loadDirLgas(){
  if(!lgaCache){
    const {data}=await sb.from('lgas').select('id,name').order('name');
    lgaCache=data||[];
  }
  const sel=document.getElementById('dirLga');
  if(sel) sel.innerHTML='<option value="">Select LGA…</option>'+lgaCache.map(l=>`<option value="${l.id}">${l.name}</option>`).join('');
}
async function loadDirWards(){
  const lgaId=document.getElementById('dirLga').value;
  const wardSel=document.getElementById('dirWard');
  if(!lgaId){wardSel.innerHTML='<option value="">Select LGA first…</option>';wardSel.disabled=true;return;}
  wardSel.disabled=false;wardSel.innerHTML='<option value="">Loading…</option>';
  const {data}=await sb.from('wards').select('id,name').eq('lga_id',lgaId).order('name');
  wardSel.innerHTML='<option value="">Select ward…</option>'+(data||[]).map(w=>`<option value="${w.id}">${w.name}</option>`).join('');
}
async function loadDirectorateList(candidateId){
  const box=document.getElementById('directorateList');
  if(!box||!candidateId)return;
  const {data,error}=await sb.from('directorates').select('id,name,ward_id,wards(name,lgas(name))').eq('candidate_id',candidateId).order('name');
  const invSel=document.getElementById('invDirectorate');
  if(error||!data||data.length===0){
    box.innerHTML='<p class="muted" style="padding:16px;font-size:13px">No directorates yet. Add the first one below.</p>';
    if(invSel) invSel.innerHTML='<option value="">No directorate</option>';
    return;
  }
  box.innerHTML=data.map(d=>`
    <div class="rowlink" style="cursor:default">
      <span class="avatar" style="width:32px;height:32px;font-size:11px">★</span>
      <span style="flex:1">
        <span class="nm">${d.name}</span>
        ${d.wards?.name?`<br><span class="sub">${d.wards.name}, ${d.wards.lgas?.name||''}</span>`:''}
      </span>
      <button onclick="deleteDirectorate('${d.id}','${candidateId}')" style="background:none;border:none;color:var(--faint);cursor:pointer;font-size:16px;padding:4px 8px">×</button>
    </div>`).join('');
  if(invSel) invSel.innerHTML='<option value="">No directorate</option>'+data.map(d=>`<option value="${d.id}">${d.name}</option>`).join('');
}
async function createDirectorate(candidateId){
  const template=document.getElementById('dirTemplate').value;
  const isCustom=template==='__custom';
  const isWard=template==='Ward Mobilization';
  const name=isCustom?document.getElementById('dirCustomName').value.trim():template;
  const wardId=isWard?(document.getElementById('dirWard').value||null):null;
  const msg=document.getElementById('dirMsg');
  const btn=document.getElementById('dirBtn');
  if(!name){msg.innerHTML='<div class="lmsg err">Enter a directorate name.</div>';return;}
  if(isWard&&!wardId){msg.innerHTML='<div class="lmsg err">Select a ward for Ward Mobilization.</div>';return;}
  btn.disabled=true;btn.textContent='Adding…';
  const finalName=isWard?`Ward Mobilization — ${document.getElementById('dirWard').selectedOptions[0].textContent}`:name;
  const {data:dgRow}=await sb.from('directorates').select('id').eq('candidate_id',candidateId).is('parent_id',null).maybeSingle();
  const {error}=await sb.from('directorates').insert({candidate_id:candidateId,name:finalName,ward_id:wardId,parent_id:dgRow?.id||null});
  btn.disabled=false;btn.textContent='Add Directorate';
  if(error){msg.innerHTML=`<div class="lmsg err">${error.message}</div>`;return;}
  msg.innerHTML='<div class="lmsg ok">Directorate added.</div>';
  loadDirectorateList(candidateId);
}
async function deleteDirectorate(id,candidateId){
  if(!confirm('Remove this directorate?'))return;
  await sb.from('directorates').delete().eq('id',id);
  loadDirectorateList(candidateId);
}
async function loadCoordinatorList(councilId){
  const box=document.getElementById('coordinatorList');
  if(!box)return;
  const {data,error}=await sb.from('council_members')
    .select('invited_email,role,status,wards(name,lgas(name)),directorates(name)')
    .eq('council_id',councilId).order('role');
  if(error||!data||data.length===0){
    box.innerHTML='<p class="muted" style="padding:16px;font-size:13px">No coordinators added yet.</p>';
    return;
  }
  box.innerHTML=data.map(m=>{
    const loc=[];
    if(m.directorates?.name) loc.push(m.directorates.name);
    if(m.wards?.name) loc.push(`${m.wards.name}, ${m.wards.lgas?.name||''}`);
    return `
    <div class="rowlink" style="cursor:default">
      <span class="avatar" style="width:32px;height:32px;font-size:11px">${(m.invited_email||'??').slice(0,2).toUpperCase()}</span>
      <span style="flex:1">
        <span class="nm">${m.invited_email||'Linked member'}</span>
        <br><span class="sub">${loc.length?loc.join(' · '):'Not yet assigned'}</span>
      </span>
      <span class="council-role">${m.role.replace(/_/g,' ').toUpperCase()}</span>
    </div>`;}).join('');
}
async function loadInviteLgas(){
  if(!lgaCache){
    const {data}=await sb.from('lgas').select('id,name').order('name');
    lgaCache=data||[];
  }
  const sel=document.getElementById('invLga');
  if(sel) sel.innerHTML='<option value="">Select LGA…</option>'+lgaCache.map(l=>`<option value="${l.id}">${l.name}</option>`).join('');
}
async function loadInviteWards(){
  const lgaId=document.getElementById('invLga').value;
  const wardSel=document.getElementById('invWard');
  if(!lgaId){wardSel.innerHTML='<option value="">Select LGA first…</option>';wardSel.disabled=true;return;}
  wardSel.disabled=false;wardSel.innerHTML='<option value="">Loading…</option>';
  const {data}=await sb.from('wards').select('id,name').eq('lga_id',lgaId).order('name');
  wardSel.innerHTML='<option value="">No specific ward</option>'+(data||[]).map(w=>`<option value="${w.id}">${w.name}</option>`).join('');
}
async function loadSupporterStats(candidateId){
  if(!candidateId)return;
  const {data,error}=await sb.from('v_supporter_rollup').select('*').eq('candidate_id',candidateId);
  const box=document.getElementById('geoBreakdown');
  if(error||!data||data.length===0){
    document.getElementById('statTotal').textContent='0';
    document.getElementById('statSupporters').textContent='0';
    document.getElementById('statCanvassers').textContent='0';
    box.innerHTML='<p class="muted" style="font-size:13px">No registrations yet for this candidate.</p>';
    return;
  }
  const totalSupporters=data.reduce((s,r)=>s+(r.supporters||0),0);
  const totalCanvassers=data.reduce((s,r)=>s+(r.canvassers||0),0);
  document.getElementById('statTotal').textContent=totalSupporters+totalCanvassers;
  document.getElementById('statSupporters').textContent=totalSupporters;
  document.getElementById('statCanvassers').textContent=totalCanvassers;
  box.innerHTML=data.sort((a,b)=>b.total-a.total).map(r=>`
    <div class="geo-row">
      <span>${r.ward_name}, ${r.lga_name}</span>
      <span style="color:var(--gl);font-weight:600">${r.total}</span>
    </div>`).join('');
}
async function inviteMember(cid){
  const email=document.getElementById('invEmail').value.trim();
  const role=document.getElementById('invRole').value;
  const wardId=document.getElementById('invWard')?.value||null;
  const directorateId=document.getElementById('invDirectorate')?.value||null;
  const msg=document.getElementById('invMsg');
  const btn=document.getElementById('invBtn');
  if(!email){msg.innerHTML='<div class="lmsg err">Enter an email address.</div>';return;}
  btn.disabled=true;btn.textContent='Sending…';
  const {error}=await sb.from('council_members').insert({council_id:cid,invited_email:email,role,status:'invited',ward_id:wardId,directorate_id:directorateId});
  btn.disabled=false;btn.textContent='Add Coordinator';
  msg.innerHTML=error
    ?`<div class="lmsg err">${error.message}</div>`
    :`<div class="lmsg ok">${email} added as ${role.replace(/_/g,' ')}.</div>`;
  if(!error){document.getElementById('invEmail').value='';loadCoordinatorList(cid);}
}

/* ── AUTH STATE ── */
sb.auth.onAuthStateChange((_e,session)=>{
  if(session&&document.getElementById('loginSheet').classList.contains('open')){closeLogin();showDash();}
});

/* ── keyboard ── */
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeLogin();}});

/* ── COUNT-UP ANIMATION (situation-room stats) ── */
function animateCount(el,target){
  const dur=1400,start=performance.now();
  function tick(now){
    const p=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-p,3);
    el.textContent=Math.round(eased*target).toLocaleString();
    if(p<1)requestAnimationFrame(tick);
    else el.textContent=target.toLocaleString();
  }
  requestAnimationFrame(tick);
}
const countObserver=new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el=en.target;
      animateCount(el,parseInt(el.dataset.count,10));
      countObserver.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.stat-box .big[data-count]').forEach(el=>countObserver.observe(el));

/* ── VISIBLE ERROR BANNER (temporary diagnostic, no dev tools needed) ── */
function showErrorBanner(msg){
  let b=document.getElementById('lcipErrBanner');
  if(!b){
    b=document.createElement('div');
    b.id='lcipErrBanner';
    b.style.cssText='position:fixed;top:0;left:0;right:0;background:#8B1E23;color:#fff;padding:12px 16px;z-index:99999;font-family:monospace;font-size:12px;max-height:40vh;overflow:auto;white-space:pre-wrap;box-shadow:0 4px 20px rgba(0,0,0,.5)';
    document.body.appendChild(b);
  }
  const line=document.createElement('div');
  line.style.cssText='border-top:1px solid rgba(255,255,255,.3);padding-top:6px;margin-top:6px';
  line.textContent=msg;
  b.appendChild(line);
}
window.addEventListener('error',e=>{
  showErrorBanner('JS ERROR: '+e.message+' (line '+e.lineno+')');
});
window.addEventListener('unhandledrejection',e=>{
  showErrorBanner('UNHANDLED PROMISE REJECTION: '+(e.reason?.message||e.reason));
});
