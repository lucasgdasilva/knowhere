const funFacts = {
    // Andorra
    "AD": "At 1,023 metres (3,356 feet) above sea level, Andorra la Vella is the highest capital city in Europe.",
    // United Arab Emirates
    "AE": "Only around 11% of its population is native to the country, with the vast majority being made up of expatriates and immigrants.",
    // Afghanistan
    "AF": "The Bamiyan caves contain the world's oldest known oil paintings, dating back to the mid-7th century AD.",
    // Antigua and Barbuda
    "AG": "Codrington Lagoon, located in Barbuda, shelters one of the world's largest colonies of magnificent frigatebirds.",
    // Anguilla
    "AI": "Held for decades, the Moonsplash is the Caribbean's oldest independent music festival and an annual celebration of reggae.",
    // Albania
    "AL": "In some parts of Albania, nodding can mean “no” and shaking the head can mean “yes”, the opposite of the gestures used in many other cultures.",
    // Armenia
    "AM": "A global chess powerhouse, Armenia has produced a disproportionately high number of chess grandmasters.",
    // Angola
    "AO": "Although separated from the rest of the country, the exclave province of Cabinda accounts for roughly 67% of Angola’s oil production.",
    // Argentina
    "AR": "Argentina has yielded fossils of some of the largest land animals ever discovered, including Argentinosaurus and Patagotitan.",
    // American Samoa
    "AS": "Because of its position near the International Date Line, American Samoa is one of the last inhabited places on Earth to welcome each new day.",
    // Austria
    "AT": "The Alps cover 62% of Austria’s land, while the Krimml Waterfalls rank among Europe's highest, with a total drop of about 380 metres.",
    // Australia
    "AU": "Over 80% of Australia's native mammal species are found nowhere else in the world, including unique egg-laying mammals such as the platypus and echidna.",
    // Aruba
    "AW": "Unlike the lush rainforests found in many tropical regions, Aruba has an arid landscape of cacti and rocky terrain, receiving only about 16 inches of rainfall annually.",
    // Aland Islands
    "AX": "Apple orchards are a defining feature of the small Åland archipelago, which produces nearly 70% of Finland’s apples.",
    // Azerbaijan
    "AZ": "Baku, Azerbaijan's capital, sits 28 metres below sea level, making it the lowest-lying national capital in the world.",
    // Bosnia and Herzegovina
    "BA": "Sarajevo is sometimes called the \"Jerusalem of Europe\" because mosques, churches, and synagogues stand in close proximity throughout the city.",
    // Barbados
    "BB": "The name Barbados comes from the Portuguese or Spanish word meaning “bearded”, a reference to the island's abundant bearded fig trees.",
    // Bangladesh
    "BD": "With more than 700 waterways, Bangladesh is often described as a land of rivers. It also contains the Ganges-Brahmaputra delta, the world's largest river delta.",
    // Belgium
    "BE": "Belgium is often credited with inventing French fries, although their exact origins remain disputed. The country is also famous for its waffles and chocolate.",
    // Burkina Faso
    "BF": "Meaning “Land of the Upright People”, the name Burkina Faso replaced “Upper Volta” in 1984.",
    // Bulgaria
    "BG": "Plovdiv, in Bulgaria, is one of Europe's oldest continuously inhabited cities, with a history of settlement dating back to around 6,000 BC.",
    // Bahrain
    "BH": "In Bahrain's desert stands the Tree of Life, a mesquite tree estimated to be more than 400 years old despite having no obvious nearby water source.",
    // Burundi
    "BI": "Burundi is among the world's most densely populated countries, yet 85% of its population lives in rural areas and relies on subsistence agriculture.",
    // Benin
    "BJ": "Built entirely on stilts over Lake Nokoué, Ganvié is a village of around 20,000 people often nicknamed the \"Venice of Africa.\"",
    // Saint Barthelemy
    "BL": "Between 1784 and 1878, Saint Barthélemy was a Swedish colony. Its capital, Gustavia, still bears the name of King Gustav III and retains Swedish street names and architectural influences.",
    // Brunei Darussalam
    "BN": "Brunei's Istana Nurul Iman is the world's largest residential palace, featuring 1,788 rooms and 257 bathrooms.",
    // Bolivia
    "BO": "Bolivia's landscapes include Salar de Uyuni, the world's largest salt flat, and Lake Titicaca, the highest navigable lake in the world at 3,812 metres (12,507 feet) above sea level.",
    // Bermuda
    "BM": "No other location in the world has more golf courses per capita than Bermuda.",
    // Bonaire, Sint Eustatius and Saba
    "BQ": "Bonaire's Goto Lake is a saltwater lagoon known for its biodiversity and large population of flamingos.",
    // Brazil
    "BR": "In Brazil, prisoners can reduce their sentence by 4 days for each book they read and write a summary on.",
    // Bahamas
    "BS": "The Bahamas consists of more than 700 islands and cays, although only around 30 of them are inhabited.",
    // Bhutan
    "BT": "Rather than focusing solely on economic growth, Bhutan measures its progress through Gross National Happiness, a development philosophy that also considers well-being.",
    // Bouvet Island
    "BV": "Located in the South Atlantic Ocean, Bouvet Island is among the world's most remote islands and is almost entirely covered by glaciers.",
    // Botswana
    "BW": "Spreading across the Kalahari Desert without reaching the sea, the Okavango Delta is one of the world's largest inland deltas.",
    // Belarus
    "BY": "Shared by Belarus and Poland, the Białowieża Forest is one of Europe's last remaining primeval forests and a habitat for European bison.",
    // Belize
    "BZ": "More than 300 metres wide, the Great Blue Hole is a giant marine sinkhole and one of the world's most recognizable underwater landmarks.",
    // Canada
    "CA": "Stretching along the Atlantic, Pacific, and Arctic oceans, Canada's coastline is the longest in the world.",
    // Cocos (Keeling) Islands
    "CC": "The Cocos (Keeling) Islands consist of 27 coral islands arranged around two atolls and a central lagoon.",
    // Democratic Republic of Congo
    "CD": "The Congo Basin, the world's second-largest tropical rainforest after the Amazon, occupies a vast part of the Democratic Republic of the Congo.",
    // Central African Republic
    "CF": "In the Dzanga-Sangha forest, a famous clearing attracts large groups of forest elephants that gather to feed and interact.",
    // Republic of Congo
    "CG": "A large part of the world-famous Congo Basin rainforest lies within the Republic of the Congo, forming part of one of the planet's most important ecosystems.",
    // Switzerland
    "CH": "Switzerland recognizes four national languages: German, French, Italian, and Romansh.",
    // Côte d'Ivoire
    "CI": "Côte d'Ivoire is the world's largest producer of cocoa beans, supplying a significant share of the cocoa used in chocolate production.",
    // Cook Islands
    "CK": "Aitutaki, one of the Cook Islands, is renowned for its enormous turquoise lagoon, dotted with small tropical islets.",
    // Chile
    "CL": "The Atacama Desert in Chile is one of the driest places on Earth; some weather stations there have recorded virtually no rainfall for years.",
    // Cameroon
    "CM": "Often nicknamed \"Africa in miniature\", Cameroon contains an extraordinary variety of landscapes, climates, and ecosystems.",
    // China
    "CN": "China operates the world's largest high-speed rail network, connecting major cities across the country.",
    // Colombia
    "CO": "Colombia is the only country in South America with coastlines on both the Caribbean Sea and the Pacific Ocean.",
    // Costa Rica
    "CR": "Despite its relatively small size, Costa Rica protects roughly a quarter of its territory through national parks and other protected areas.",
    // Cuba
    "CU": "Cuba is the natural habitat of the bee hummingbird, the world's smallest bird, measuring only around 5 to 6 centimetres in length.",
    // Cape Verde
    "CV": "The island of Fogo in Cape Verde is dominated by an active volcano, whose large crater contains a small settlement and vineyards.",
    // Curaçao
    "CW": "Willemstad, the capital of Curaçao, is renowned for its colorful Dutch colonial buildings along the waterfront, which form a UNESCO World Heritage Site.",
    // Christmas Island
    "CX": "Every year, millions of red crabs migrate from the forests of Christmas Island to the coast to reproduce.",
    // Cyprus
    "CY": "According to Greek mythology, the goddess Aphrodite was born from the sea near the coast of Cyprus.",
    // Czech Republic
    "CZ": "With more than two thousand historic sites, the Czech Republic has one of the highest densities of castles and chateaux in the world.",
    // Germany
    "DE": "Munich's Oktoberfest is the world's largest folk festival. It began in 1810 as a celebration of a royal wedding.",
    // Djibouti
    "DJ": "At about 155 metres below sea level, Lake Assal in Djibouti is the lowest point in Africa.",
    // Denmark
    "DK": "In Copenhagen, bicycles outnumber cars, reflecting the importance of cycling in everyday transportation.",
    // Dominica
    "DM": "Dominica's Boiling Lake is a flooded volcanic crater where geothermal activity heats the water to near-boiling temperatures.",
    // Dominican Republic
    "DO": "Rising to approximately 3,098 metres above sea level, Pico Duarte in the Dominican Republic is the highest mountain in the Caribbean.",
    // Algeria
    "DZ": "Algeria is Africa's largest country by land area, with much of its territory covered by the Sahara Desert.",
    // Ecuador
    "EC": "The extraordinary variety of unique species in Ecuador's Galápagos Islands helped inspire Charles Darwin's ideas about evolution.",
    // Egypt
    "EG": "For nearly 4,000 years, the Great Pyramid of Giza held the title of the tallest human-made structure in the world.",
    // Estonia
    "EE": "Estonia was among the first countries in the world to introduce nationwide online voting, allowing citizens to vote in parliamentary elections over the internet.",
    // Western Sahara
    "EH": "The territory contains part of the Moroccan Western Sahara Wall, a system stretching for more than 2,700 kilometres and considered the world's longest national wall system.",
    // Eritrea
    "ER": "Asmara, Eritrea's capital, is celebrated for its remarkable collection of modernist architecture from the Italian colonial period.",
    // Spain
    "ES": "Barcelona's Sagrada Família has been under construction since 1882, making it one of the world's most recognizable unfinished basilicas.",
    // Ethiopia
    "ET": "Ethiopia follows a calendar with 13 months and is several years behind the Gregorian calendar.",
    // Finland
    "FI": "Some estimates suggest Finland has more saunas than cars, reflecting the sauna's important place in everyday Finnish culture.",
    // Fiji
    "FJ": "Fiji is an archipelago of more than 300 islands, but only around one-third of them are inhabited.",
    // Falkland Islands
    "FK": "Several penguin species breed in the Falkland Islands, including large colonies of king penguins.",
    // Federated States of Micronesia
    "FM": "Built on artificial islands made of basalt and coral blocks, the ancient city of Nan Madol is often called the \"Venice of the Pacific.\"",
    // Faroe Islands
    "FO": "One of the Faroe Islands' road tunnels features an underwater roundabout, connecting different parts of the island network beneath the sea.",
    // France
    "FR": "Paris's Louvre is the world's most visited museum, housing thousands of works of art, including the Mona Lisa.",
    // Gabon
    "GA": "Forests cover around 88% of Gabon's territory, making it one of the most forested countries in the world.",
    // United Kingdom
    "GB": "Opened in 1863, the London Underground is the world's oldest underground railway.",
    // Georgia
    "GE": "Archaeological evidence suggests that winemaking in Georgia dates back around 8,000 years, making it one of the oldest wine-producing regions in the world.",
    // Grenada
    "GD": "Known as the \"Spice Island\", Grenada is one of the world's major producers of nutmeg and other spices.",
    // French Guiana
    "GF": "French Guiana hosts the Guiana Space Centre, one of the world's most important satellite launch facilities, used by the European Space Agency.",
    // Guernsey
    "GG": "Guernsey has its own traditional currency, the Guernsey pound, which circulates alongside the British pound.",
    // Ghana
    "GH": "Created by the construction of the Akosombo Dam, Ghana's Lake Volta is one of the largest artificial lakes in the world by surface area.",
    // Gibraltar
    "GI": "The famous Rock of Gibraltar shelters Europe's only population of wild monkeys: the Barbary macaques.",
    // Greenland
    "GL": "Roughly 80% of Greenland is covered by ice, including the world's second-largest ice sheet after Antarctica.",
    // Gambia
    "GM": "Almost entirely surrounded by Senegal, The Gambia follows the course of the Gambia River toward the Atlantic Ocean.",
        // Guinea
    "GN": "Several major West African rivers, including the Niger, Senegal, and Gambia, have their headwaters in Guinea.",
    // Glorioso Islands
    "GO": "The Glorioso Islands provide an important nesting site for seabirds and sea turtles in the western Indian Ocean.",
    // Guadeloupe
    "GP": "La Soufrière, an active volcano on Guadeloupe, forms the highest point of the Lesser Antilles.",
    // Equatorial Guinea
    "GQ": "Equatorial Guinea is the only sovereign country in Africa with Spanish as an official language.",
    // Greece
    "GR": "Greece has thousands of islands and islets, although only a small fraction of them are inhabited.",
    // South Georgia and South Sandwich Islands
    "GS": "Enormous colonies of king penguins gather on South Georgia, with some beaches hosting tens of thousands of birds.",
    // Guatemala
    "GT": "The ancient Maya city of Tikal in Guatemala features towering temples that rise above the rainforest, making it one of the region's most important archaeological sites.",
    // Guam
    "GU": "The Mariana Trench, the deepest known oceanic trench on Earth, lies near Guam in the western Pacific.",
    // Guinea-Bissau
    "GW": "The Bijagós Archipelago shelters a rare population of saltwater hippopotamuses, which can be seen swimming between its islands.",
    // Guyana
    "GY": "Guyana's Kaieteur Falls ranks among the world's tallest single-drop waterfalls, plunging approximately 226 metres into a rainforest gorge.",
    // Hong Kong
    "HK": "Despite its dense urban population, Hong Kong has an unusually large amount of protected natural land, with country parks and special areas covering around 40% of its territory.",
    // Heard Island and McDonald Islands
    "HM": "Heard Island is dominated by Big Ben, an active volcano whose summit, Mawson Peak, is the highest point in Australian territory outside Antarctica.",
    // Honduras
    "HN": "Along much of Honduras's Caribbean coast stretches the Mesoamerican Barrier Reef, the second-largest coral reef system in the world.",
    // Croatia
    "HR": "Croatia's Plitvice Lakes National Park is famous for its chain of turquoise lakes, connected by waterfalls and natural travertine barriers.",
    // Haiti
    "HT": "In 1804, Haiti became the first independent nation in Latin America and the Caribbean, following a successful revolution led by formerly enslaved people.",
    // Hungary
    "HU": "Lake Balaton, the largest lake in Central Europe, is a popular summer destination in Hungary despite being relatively shallow.",
    // Indonesia
    "ID": "With more than 17,000 islands spread across the Indian and Pacific oceans, Indonesia is the world's largest archipelago country.",
    // Ireland
    "IE": "Built around 5,200 years ago, Ireland's Newgrange is a prehistoric monument older than both Stonehenge and the Great Pyramids of Giza.",
    // Israel
    "IL": "Located between Israel and Jordan, the Dead Sea is one of the saltiest bodies of water in the world, making it extremely easy for people to float on its surface.",
    // Isle of Man
    "IM": "The Isle of Man's Tynwald claims to be the world's oldest continuous parliament, with origins dating back over a thousand years.",
    // India
    "IN": "India operates the world's largest postal network, with more than 150,000 post offices, including a floating post office on Dal Lake in Kashmir.",
    // British Indian Ocean Territory
    "IO": "Diego Garcia, the largest island in the Chagos Archipelago, is surrounded by one of the world's largest atolls.",
    // Iraq
    "IQ": "Ancient Mesopotamia, located largely within modern-day Iraq, is widely regarded as one of the birthplaces of writing and the earliest cities.",
    // Iran
    "IR": "Satellite measurements in Iran's Lut Desert have recorded some of the highest land-surface temperatures ever observed, making it one of the hottest places on Earth.",
    // Iceland
    "IS": "Iceland has no standing army and relies on its coast guard and NATO allies for its national defence.",
    // Italy
    "IT": "Italy leads the world in the number of UNESCO World Heritage Sites, ranging from ancient Roman monuments and historic cities to remarkable natural landscapes.",
    // Jersey
    "JE": "Jersey experiences one of the world's largest tidal ranges. At low tide, the sea retreats far enough to reveal extensive areas of seabed around the island.",
    // Jamaica
    "JM": "Reggae music originated in Jamaica and later became internationally famous through artists such as Bob Marley.",
    // Jordan
    "JO": "Carved directly into rose-colored sandstone cliffs, the ancient city of Petra is one of the New Seven Wonders of the World.",
    // Japan
    "JP": "Japan has more than 14,000 islands, following a 2023 official reassessment of its coastline and island count.",
    // Juan De Nova Island
    "JU": "Juan de Nova Island serves as an important nesting site for seabirds and green sea turtles in the Mozambique Channel.",
    // Kenya
    "KE": "Kenya's Lake Turkana is the world's largest permanent desert lake and is known for its striking turquoise-green color.",
    // Kyrgyzstan
    "KG": "More than 90% of Kyrgyzstan is mountainous, with the spectacular Tian Shan range and the enormous Issyk-Kul alpine lake among its most notable features.",
    // Cambodia
    "KH": "Angkor Wat in Cambodia is the world's largest religious monument. It was originally built as a Hindu temple before becoming a Buddhist site.",
    // Kiribati
    "KI": "Kiribati is the only country in the world whose territory extends into all four hemispheres: north, south, east, and west.",
    // Comoros
    "KM": "Mount Karthala, one of the world's largest active shield volcanoes, dominates the Comorian island of Grande Comore.",
    // Saint Kitts and Nevis
    "KN": "Saint Kitts and Nevis is the smallest sovereign country in the Western Hemisphere, both in area and population.",
    // North Korea
    "KP": "Pyongyang's Rungrado 1st of May Stadium is the world's largest stadium by seating capacity.",
    // South Korea
    "KR": "South Korea was among the first countries to launch commercial 5G mobile services, which began in 2019.",
    // Kosovo
    "XK": "The medieval Visoki Dečani Monastery in Kosovo is a UNESCO World Heritage Site, renowned for its remarkably preserved Byzantine-style frescoes.",
    // Kuwait
    "KW": "Among Kuwait's most recognizable landmarks are the Kuwait Towers, which combine water storage facilities with observation decks overlooking the Persian Gulf.",
    // Cayman Islands
    "KY": "Stingray City is one of the Cayman Islands' best-known attractions: a shallow sandbar where visitors can observe and swim near southern stingrays in their natural habitat.",
    // Kazakhstan
    "KZ": "Kazakhstan is the world's largest landlocked country, covering an area larger than all of Western Europe.",
    // Lao People's Democratic Republic
    "LA": "Laos is the only landlocked country in Southeast Asia, earning it the nickname \"the landlocked heart of Southeast Asia.\"",
    // Lebanon
    "LB": "The Cedars of God, an ancient forest of cedar trees in Lebanon, have become one of the country's most important national symbols.",
    // Saint Lucia
    "LC": "Rising directly from the Caribbean Sea, Saint Lucia's two dramatic volcanic peaks, the Pitons, form a UNESCO World Heritage Site.",
    // Liechtenstein
    "LI": "Liechtenstein is one of only two doubly landlocked countries in the world, meaning that all of its neighbouring countries are also landlocked.",
    // Sri Lanka
    "LK": "Sri Lanka is known for its large wild elephant population and is one of the few places where blue whales can be regularly spotted close to shore.",
    // Liberia
    "LR": "Founded in the 19th century as a settlement for formerly enslaved people from the United States, Liberia became Africa's first modern republic in 1847.",
    // Lesotho
    "LS": "Lesotho is the only independent country in the world whose entire territory lies above 1,000 metres in elevation.",
    // Lithuania
    "LT": "During the 15th century, Lithuania reached its greatest territorial extent and was once the largest country in Europe.",
    // Luxembourg
    "LU": "Luxembourg was the first country in the world to make all public transportation free nationwide, including buses, trains, and trams.",
    // Latvia
    "LV": "Ventas Rumba, near the Latvian town of Kuldīga, is one of Europe's widest waterfalls, stretching across the Venta River.",
    // Libya
    "LY": "The ancient Roman city of Leptis Magna in Libya is among the best-preserved Roman archaeological sites in the Mediterranean.",
    // Morocco
    "MA": "Founded in 859 AD in Fez, the University of al-Qarawiyyin is widely recognized as one of the oldest continuously operating educational institutions in the world.",
    // Monaco
    "MC": "After Vatican City, Monaco is the world's second-smallest country. Its territory is so densely built that much of it consists of urban development.",
    // Moldova
    "MD": "Mileștii Mici in Moldova is a wine cellar complex with more than 200 kilometres of underground tunnels, making it one of the largest wine cellars in the world.",
    // Madagascar
    "MG": "Around 90% of Madagascar's wildlife is endemic, meaning that these species are naturally found nowhere else on Earth.",
    // Montenegro
    "ME": "Montenegro's Tara River Canyon is one of the deepest river canyons in Europe, surrounded by dramatic mountain scenery.",
    // Saint Martin
    "MF": "The island of Saint Martin is divided between France and the Kingdom of the Netherlands, making it one of the smallest landmasses in the world shared by two sovereign states.",
    // Marshall Islands
    "MH": "Bikini Atoll in the Marshall Islands was the site of a series of nuclear tests conducted by the United States between 1946 and 1958.",
    // North Macedonia
    "MK": "Lake Ohrid, shared by North Macedonia and Albania, is one of Europe's oldest and deepest lakes, estimated to be several million years old.",
    // Mali
    "ML": "The Mali Empire once flourished in this region. Its ruler Mansa Musa became famous for his extraordinary wealth and lavish pilgrimage to Mecca in 1324.",
    // Macau
    "MO": "Macau is one of the most densely populated places in the world and is known for its distinctive blend of Portuguese and Chinese architecture and culture.",
    // Myanmar
    "MM": "The ancient city of Bagan in Myanmar features thousands of Buddhist temples and pagodas spread across a vast archaeological landscape.",
    // Mongolia
    "MN": "Mongolia has one of the lowest population densities in the world, with vast open grasslands and deserts separating its small towns and settlements.",
    // Northern Mariana Islands
    "MP": "Saipan, one of the Northern Mariana Islands, contains the Grotto, a limestone cavern filled with seawater and connected to the Pacific Ocean.",
    // Martinique
    "MQ": "Mount Pelée in Martinique is a volcano whose catastrophic eruption in 1902 destroyed the city of Saint-Pierre and killed tens of thousands of people.",
    // Mauritania
    "MR": "The Richat Structure in Mauritania is a gigantic circular geological formation in the Sahara Desert, so large that it can be seen from space.",
    // Montserrat
    "MS": "Montserrat's Soufrière Hills volcano erupted in 1995, burying much of the island's former capital, Plymouth, which remains abandoned.",
    // Malta
    "MT": "Malta contains some of the oldest free-standing stone structures in the world, including the Ġgantija temples, built more than 5,500 years ago.",
    // Mauritius
    "MU": "The now-extinct dodo once lived in Mauritius. The flightless bird disappeared in the late 17th century and became one of the world's most famous examples of human-caused extinction.",
    // Maldives
    "MV": "With an average ground elevation of only about 1.5 metres above sea level, the Maldives is the world's lowest-lying country.",
    // Malawi
    "MW": "Lake Malawi contains more species of fish than any other lake in the world, including hundreds of colorful cichlid species.",
    // Mexico
    "MX": "Chocolate has its origins in ancient Mesoamerica, where civilizations such as the Maya and Aztecs cultivated cacao and prepared it as a bitter drink.",
    // Malaysia
    "MY": "Some areas of Malaysia's tropical rainforests are estimated to be over 100 million years old, placing them among the world's oldest.",
    // Mozambique
    "MZ": "Mozambique's coastline stretches for more than 2,500 kilometres along the Indian Ocean, making it one of the longest in Africa.",
    // Namibia
    "NA": "Often considered the world's oldest desert, the Namib Desert in Namibia is believed to have existed for at least 55 million years in some areas.",
    // New Caledonia
    "NC": "New Caledonia is surrounded by one of the world's largest lagoon systems, protected by an extensive coral reef recognized as a UNESCO World Heritage Site.",
    // Niger
    "NE": "The ancient city of Agadez in Niger was once an important Saharan trading centre and is known for its distinctive mud-brick architecture and towering minaret.",
    // Norfolk Island
    "NF": "The Norfolk Island pine has become a symbol of Norfolk Island and is widely planted around the world as an ornamental tree.",
    // Nigeria
    "NG": "Known internationally as Nollywood, Nigeria's film industry is the world's second-largest by the number of films produced.",
    // Nicaragua
    "NI": "Nicaragua contains a freshwater lake where bull sharks have been known to travel between the Caribbean Sea and the lake through the San Juan River.",
    // Netherlands
    "NL": "Around a quarter of the Netherlands lies below sea level, prompting the development of an extensive system of dikes, dams, and flood barriers to protect its land.",
    // Norway
    "NO": "Stretching for 24.5 kilometres through the mountains, Norway's Lærdal Tunnel is the world's longest road tunnel.",
    // Nepal
    "NP": "Eight of the world's fourteen mountains rising above 8,000 metres are in Nepal, including Mount Everest, the highest point on Earth.",
    // Nauru
    "NR": "Nauru is the world's smallest island country and the only country in the world without an officially designated capital city.",
    // Niue
    "NU": "Niue is one of the world's largest raised coral atolls, featuring dramatic limestone cliffs, caves, and natural rock pools along its coastline.",
    // New Zealand
    "NZ": "In 1893, New Zealand became the first self-governing country in the world to grant women the right to vote in parliamentary elections.",
    // Oman
    "OM": "Once an important trading port on the Indian Ocean, the ancient city of Qalhat in Oman is now an archaeological site recognized by UNESCO.",
    // Panama
    "PA": "From certain locations in Panama, it is possible to watch the sun rise over the Pacific Ocean and set over the Atlantic Ocean.",
        // Peru
    "PE": "The Nazca Lines in Peru are enormous geoglyphs etched into the desert, depicting animals, plants, and geometric shapes, some of which are hundreds of metres long.",
    // French Polynesia
    "PF": "Bora Bora, in French Polynesia, is encircled by a lagoon and barrier reef, creating its distinctive turquoise waters and small coral islets known as motus.",
    // Papua New Guinea
    "PG": "Papua New Guinea is one of the most linguistically diverse countries in the world, with more than 800 living languages spoken across its territory.",
    // Philippines
    "PH": "The Puerto Princesa Subterranean River in the Philippines flows through a limestone cave system before reaching the sea.",
    // Pakistan
    "PK": "Pakistan's K2 is the world's second-highest mountain and is widely considered one of the most difficult mountains to climb.",
    // Poland
    "PL": "Malbork Castle in Poland is the world's largest castle by land area, a medieval fortress built by the Teutonic Knights.",
    // Saint Pierre and Miquelon
    "PM": "Saint Pierre and Miquelon is the only remaining French territory in North America, located just off the coast of Newfoundland, Canada.",
    // Pitcairn Islands
    "PN": "The Pitcairn Islands were settled in 1790 by the Bounty mutineers and their Tahitian companions, whose descendants still live on the island today.",
    // Puerto Rico
    "PR": "Mosquito Bay in Puerto Rico is famous for its bioluminescent waters, which glow blue-green at night due to microscopic organisms.",
    // Palestinian Territories
    "PS": "The Church of the Nativity in Bethlehem is traditionally regarded as the birthplace of Jesus Christ and is one of the oldest continuously operating Christian churches.",
    // Portugal
    "PT": "Lisbon's Livraria Bertrand opened in 1732 and is recognized as the oldest bookstore still in operation.",
    // Palau
    "PW": "Jellyfish Lake in Palau is famous for its large population of golden jellyfish, which migrate across the water following the sun.",
    // Paraguay
    "PY": "Paraguay is one of the few countries in the Americas where an Indigenous language, Guaraní, is widely spoken alongside the official language, Spanish.",
    // Qatar
    "QA": "Doha's Museum of Islamic Art was designed by architect I. M. Pei, with a building inspired by traditional Islamic architecture.",
    // Reunion
    "RE": "Piton de la Fournaise on Réunion is one of the world's most active volcanoes, erupting frequently and being closely monitored by scientists.",
    // Romania
    "RO": "Bucharest's Palace of the Parliament is one of the world’s largest administrative buildings and among its heaviest.",
    // Serbia
    "RS": "Serbia's Đavolja Varoš, or \"Devil's Town,\" is a natural formation consisting of more than 200 unusual earth pillars topped with stones.",
    // Russia
    "RU": "Russia spans eleven time zones, giving it the greatest number of time zones of any country in the world.",
    // Rwanda
    "RW": "Rwanda is one of the few places in the world where mountain gorillas can be observed in their natural habitat, particularly in Volcanoes National Park.",
    // Saudi Arabia
    "SA": "The Rub' al Khali, also known as the Empty Quarter, is the largest continuous sand desert in the world and stretches across Saudi Arabia and neighbouring countries.",
    // Solomon Islands
    "SB": "Marovo Lagoon in the Solomon Islands is one of the world's largest saltwater lagoons, surrounded by volcanic islands and coral reefs.",
    // Seychelles
    "SC": "The Seychelles is known for the Coco de Mer palm, which produces the largest seed in the plant kingdom.",
    // Sudan
    "SD": "Sudan has more ancient pyramids than Egypt, with more than 200 pyramids built by the ancient Kingdom of Kush.",
    // Sweden
    "SE": "Sweden recognizes a unique right of public access, known as Allemansrätten, which allows people to roam freely through much of the countryside while respecting nature and private property.",
    // Singapore
    "SG": "Opened in 1994, Singapore's Night Safari was the world's first night-time safari park.",
    // Saint Helena
    "SH": "Napoleon Bonaparte spent the final years of his life in exile on Saint Helena, following his defeat at the Battle of Waterloo.",
    // Slovenia
    "SI": "Visitors to Slovenia's Postojna Cave can travel on an underground railway through enormous chambers and formations in this vast cave system.",
    // Svalbard and Jan Mayen
    "SJ": "Svalbard hosts the Global Seed Vault, a secure underground facility designed to preserve backup copies of seeds from around the world.",
    // Slovakia
    "SK": "Slovakia has one of the highest concentrations of castles and chateaux in the world relative to its size, with hundreds of historic fortifications.",
    // Sierra Leone
    "SL": "The Tacugama Chimpanzee Sanctuary in Sierra Leone rescues and rehabilitates chimpanzees while helping protect wild populations.",
    // San Marino
    "SM": "San Marino is considered one of the world's oldest republics, traditionally tracing its foundation back to the year 301 AD.",
    // Senegal
    "SN": "Lake Retba, also known as Lac Rose, is known for its pinkish color, which can become especially vivid due to salt-loving microorganisms.",
    // Somalia
    "SO": "Somalia has the longest coastline of any country on mainland Africa, stretching along both the Gulf of Aden and the Indian Ocean.",
    // Suriname
    "SR": "More than 90% of Suriname is covered by tropical rainforest, making it one of the most forested countries in the world.",
    // South Sudan
    "SS": "The Sudd, formed by the White Nile and its surrounding floodplains, is one of the world's largest tropical wetlands.",
    // Sao Tome and Principe
    "ST": "Príncipe was designated a UNESCO Biosphere Reserve in 2012, protecting its tropical forests, beaches, and marine ecosystems.",
    // El Salvador
    "SV": "El Salvador is known as the \"Land of Volcanoes\" because of its many volcanoes, several of which are still active.",
    // Saint Martin
    "SX": "Maho Beach, on the Dutch side of Saint Martin, is famous for aircraft approaching the nearby airport at an unusually low altitude just above the beach.",
    // Syria
    "SY": "Damascus, the capital of Syria, is often considered one of the oldest continuously inhabited cities in the world.",
    // Eswatini
    "SZ": "Eswatini is one of the few remaining absolute monarchies in the world, with a king who serves as both head of state and a central figure in traditional governance.",
    // Turks and Caicos Islands
    "TC": "The Turks and Caicos Islands contain the third-largest coral reef system in the world, making them a major destination for diving and marine wildlife.",
    // Chad
    "TD": "The Ennedi Plateau in Chad is a vast sandstone landscape filled with natural arches, canyons, rock formations, and prehistoric cave paintings.",
    // French Southern and Antarctic Lands
    "TF": "The French Southern and Antarctic Lands include the Kerguelen Islands, often nicknamed the \"Desolation Islands\" because of their extreme isolation and harsh weather.",
    // Togo
    "TG": "Togo is one of the narrowest countries in Africa, stretching from the Gulf of Guinea northward through several different ecological regions.",
    // Thailand
    "TH": "Bangkok's Wat Traimit houses the world's largest solid gold Buddha statue, weighing approximately 5.5 tonnes.",
    // Tajikistan
    "TJ": "More than 90% of Tajikistan is mountainous, and the Pamir Mountains are often called the \"Roof of the World.\"",
    // Tokelau
    "TK": "In 2012, Tokelau became the first territory in the world to generate all of its electricity from solar power, replacing its previous diesel-based system.",
    // Timor-Leste
    "TL": "Timor-Leste is part of the Coral Triangle, a marine biodiversity region that contains around 76% of the world’s known coral species.",
    // Turkmenistan
    "TM": "The Darvaza gas crater in Turkmenistan, popularly known as the \"Door to Hell,\" is a burning natural gas crater in the Karakum Desert.",
    // Tunisia
    "TN": "Several scenes in the original Star Wars films were shot in Tunisia, whose desert landscapes were used to represent the planet Tatooine.",
    // Tonga
    "TO": "Tonga is the only Pacific island kingdom that was never formally colonized by a European power.",
    // Türkiye
    "TR": "Türkiye's Göbekli Tepe contains monumental stone structures built around 11,000 years ago, long before the invention of writing.",
    // Trinidad and Tobago
    "TT": "Trinidad is the birthplace of the steelpan, the only acoustic musical instrument invented in the 20th century.",
    // Tuvalu
    "TV": "Tuvalu is one of the world's smallest and least visited countries, consisting of nine low-lying coral islands and atolls in the Pacific Ocean.",
    // Taiwan
    "TW": "Taipei 101 in Taiwan held the title of the world's tallest building from 2004 until 2010.",
    // Tanzania
    "TZ": "Mount Kilimanjaro in Tanzania is the highest mountain in Africa and the world's tallest free-standing mountain.",
    // Ukraine
    "UA": "Kyiv's Arsenalna station is the world's deepest metro station, located approximately 105 metres underground.",
    // Uganda
    "UG": "The White Nile has its source at Jinja in Uganda, near Lake Victoria, one of the world's largest tropical lakes.",
    // Jarvis Island
    "UM-DQ": "Jarvis Island is an uninhabited coral island in the Pacific Ocean that serves as an important protected habitat for seabirds and marine life.",
    // Baker Island
    "UM-FQ": "Baker Island is an uninhabited coral island located just north of the equator, and it is part of the Pacific Remote Islands Marine National Monument.",
    // Howland Island
    "UM-HQ": "Howland Island is best known as the intended destination of Amelia Earhart's final flight in 1937, although she never reached it.",
    // Johnston Atoll
    "UM-JQ": "Johnston Atoll is a remote coral atoll in the Pacific Ocean that provides important nesting and resting habitat for seabirds.",
    // Midway Islands
    "UM-MQ": "Midway Atoll hosts one of the world's largest albatross colonies, with thousands of Laysan and black-footed albatrosses nesting there.",
    // Wake Island
    "UM-WQ": "Wake Island is a remote coral atoll in the Pacific Ocean, known for its distinctive V-shaped arrangement of three small islands surrounding a lagoon.",
    // United States
    "US": "Established in 1872, Yellowstone was the world's first national park. It is famous for its geysers and geothermal features.",
    // Uruguay
    "UY": "Uruguay was the first country in the world to provide nationwide access to a laptop for every primary school student through its Plan Ceibal initiative.",
    // Uzbekistan
    "UZ": "Uzbekistan is one of only two doubly landlocked countries in the world, meaning that all of its neighbouring countries are also landlocked.",
    // Vatican City
    "VA": "Vatican City is the smallest independent country in the world, covering less than half a square kilometre.",
    // Saint Vincent and the Grenadines
    "VC": "La Soufrière, an active volcano on Saint Vincent, erupted most recently in 2020–2021.",
    // Venezuela
    "VE": "Venezuela's Angel Falls is the world's highest uninterrupted waterfall, with a total height of approximately 979 metres.",
    // British Virgin Islands
    "VG": "The Baths on Virgin Gorda are among the British Virgin Islands' best-known attractions, where enormous granite boulders form natural pools, caves, and passageways along the beach.",
    // US Virgin Islands
    "VI": "The Virgin Islands National Park protects much of the island of Saint John, including tropical forests, coral reefs, and historic sugar plantation ruins.",
    // Vietnam
    "VN": "Son Doong Cave in Vietnam is the world's largest known natural cave passage by volume, large enough to contain an entire city block.",
    // Vanuatu
    "VU": "Mount Yasur in Vanuatu is one of the world's most accessible active volcanoes, where visitors can observe volcanic activity from designated viewing areas.",
    // Wallis and Futuna
    "WF": "Wallis and Futuna is one of the few French territories in the Pacific where traditional kingdoms still play an important role alongside the French administration.",
    // Samoa
    "WS": "Samoa was the first Pacific island nation to become independent in the 20th century, gaining independence in 1962.",
    // Yemen
    "YE": "The island of Socotra in Yemen is famous for its extraordinary endemic plants, including the dragon's blood tree with its distinctive umbrella-shaped canopy.",
    // Mayotte
    "YT": "Mayotte is surrounded by one of the world's largest enclosed lagoons, protected by a double barrier reef.",
    // South Africa
    "ZA": "South Africa is the only country in the world to have three capital cities: Pretoria, Cape Town, and Bloemfontein.",
    // Zambia
    "ZM": "Zambia shares Victoria Falls with Zimbabwe, one of the largest and most spectacular waterfalls in the world.",
    // Zimbabwe
    "ZW": "The ruins of Great Zimbabwe in Zimbabwe are the remains of a medieval stone city that once served as the capital of a powerful African kingdom.",
};