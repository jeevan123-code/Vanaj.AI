// ============================================================================
//  COTTON  (Gossypium hirsutum)
//  Growth stages + 10 diseases.
//  Disease content written for B.Sc. Agriculture reference. Images are the
//  field photos supplied by the team (public/diseases/cotton/).
//  3D models will be dropped into public/models/cotton/ later.
// ============================================================================

export const cotton = {
  id: 'cotton',
  name: 'Cotton',
  scientificName: 'Gossypium hirsutum',

  stages: [
    {
      id: 'seedling',
      name: 'Seedling',
      window: '0–20 days',
      model: '/models/cotton/seedling.glb',
      note: 'Germination and hypocotyl emergence; cotyledons unfold and first true leaves expand rapidly under warm conditions.',
    },
    {
      id: 'vegetative',
      name: 'Vegetative',
      window: '20–50 days',
      model: '/models/cotton/vegetative.glb',
      note: 'Rapid stem elongation and leaf production; the main stem branches and the plant frame that will carry bolls is established.',
    },
    {
      id: 'flowering',
      name: 'Flowering',
      window: '50–90 days',
      model: '/models/cotton/flowering.glb',
      note: 'Square formation followed by flower opening; petals turn pink after pollination and young bolls begin to set.',
    },
    {
      id: 'boll_maturation',
      name: 'Boll Maturation',
      window: '90–150 days',
      model: '/models/cotton/boll_maturation.glb',
      note: 'Bolls fill and fibres elongate inside the locules; at maturity the boll wall splits open exposing the white lint ready for harvest.',
    },
  ],

  diseases: [
    {
      id: 'alternaria-leaf-spot',
      name: 'Alternaria Leaf Spot',
      shortName: 'Alternaria Leaf Spot',
      pathogenType: 'Fungus',
      pathogen: 'Alternaria macrospora / Alternaria alternata',
      images: [
        '/diseases/cotton/alternaria_leaf_spot_1.jpeg',
        '/diseases/cotton/alternaria_leaf_spot_2.jpeg',
      ],
      affectedStages: ['vegetative', 'flowering', 'boll_maturation'],
      cause: 'Alternaria macrospora and Alternaria alternata produce circular to irregular brown to dark brown lesions on leaves with concentric rings giving a target-board appearance. A yellow chlorotic halo surrounds mature lesions. Heavy infection causes premature defoliation reducing boll retention and fibre quality.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne conidia produced on infected leaf surface dispersed by wind and rain splash',
          'Seed-borne mycelium and spores carried on infected seed coat',
          'Infected crop debris in the field serving as primary inoculum source',
        ],
      },
      originSpread: 'The fungus overwinters on infected crop debris and seed. Warm humid weather with temperatures of 25–30°C and frequent rain or heavy dew favour conidial germination and rapid infection. Lesions first appear on older lower leaves and progress upward. Target-board concentric zonation is the key diagnostic feature. Under severe disease pressure lesions coalesce and entire leaves yellow and drop, exposing bolls to sunscald and secondary infections. The disease is most damaging during the boll development stage when premature defoliation reduces photosynthate supply to filling bolls.',
      management: {
        organic: [
          'Use disease-free certified seed and resistant or tolerant varieties.',
          'Remove and destroy infected crop debris by deep ploughing after harvest.',
          'Maintain optimal plant spacing to improve air circulation and reduce leaf wetness duration.',
          'Avoid overhead irrigation that keeps the canopy wet for extended periods.',
        ],
        chemical: [
          'Spray mancozeb 75 WP at 2.5 g per litre at first lesion appearance.',
          'Iprodione 50 WP at 1 g per litre as an alternative contact fungicide.',
          'Propiconazole 25 EC at 0.1% for systemic curative action in severe outbreaks.',
        ],
        application: [
          'Begin spraying at first signs of target-board lesions on lower leaves.',
          'Cover both upper and lower leaf surfaces thoroughly.',
          'Repeat every 10–15 days during warm wet weather.',
          'Add a sticker to improve adherence of contact fungicides.',
        ],
      },
    },
    {
      id: 'anthracnose',
      name: 'Anthracnose',
      shortName: 'Anthracnose',
      pathogenType: 'Fungus',
      pathogen: 'Colletotrichum gossypii',
      images: [
        '/diseases/cotton/anthracnose_1.jpeg',
        '/diseases/cotton/anthracnose_2.jpeg',
      ],
      affectedStages: ['seedling', 'vegetative', 'flowering'],
      cause: 'Colletotrichum gossypii causes dark sunken cankers on seedling stems at the soil line, reddish-brown circular lesions on leaves, and dark sunken spots on bolls. It is the causal agent of seedling damping-off, boll rot and angular leaf spot working together with other pathogens.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne mycelium and spores inside and on the seed coat',
          'Rain-splashed conidia from infected plant parts and debris to healthy tissue',
          'Infected crop residue persisting in soil as primary inoculum',
        ],
      },
      originSpread: 'Conidia on seed germinate to infect emerging hypocotyls causing damping-off in cool wet seedbed conditions. On older plants rain-splash disperses conidia from infected debris to leaves and bolls. Warm temperatures of 22–28°C combined with high rainfall and humidity favour disease spread. On bolls the pathogen causes dark sunken spots that allow entry of secondary organisms causing boll rot. In severe outbreaks heavy boll infection results in stained lint and seed that fails germination in the next season.',
      management: {
        organic: [
          'Use treated certified seed from disease-free crops.',
          'Rogue and remove severely infected seedlings and bolls promptly.',
          'Ensure good field drainage to avoid waterlogged seedbed conditions.',
          'Rotate cotton with non-host crops to reduce soil-borne inoculum.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram at 2.5 g per kg before sowing.',
          'Foliar spray of mancozeb 75 WP at 2.5 g per litre at early symptom stage.',
          'Copper oxychloride 50 WP at 3 g per litre as protective boll spray.',
        ],
        application: [
          'Seed treatment is the first critical step before every sowing.',
          'Apply boll sprays at boll set when warm wet conditions favour infection.',
          'Direct spray at bolls and lower canopy where infection starts.',
          'Repeat at 10-day intervals during wet humid periods.',
        ],
      },
    },
    {
      id: 'bacterial-blight',
      name: 'Bacterial Blight (Angular Leaf Spot)',
      shortName: 'Bacterial Blight',
      pathogenType: 'Bacterium',
      pathogen: 'Xanthomonas axonopodis pv. malvacearum',
      images: [
        '/diseases/cotton/bacterial_blight_1.jpeg',
        '/diseases/cotton/bacterial_blight_2.jpeg',
      ],
      affectedStages: ['seedling', 'vegetative', 'flowering'],
      cause: 'Xanthomonas axonopodis pv. malvacearum causes angular water-soaked lesions on leaves bounded by leaf veins giving the characteristic angular shape. It also causes dark elongated stem cankers, black arm on branches and boll infection resulting in lint and seed contamination.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne bacteria carried on lint fibres and inside seed coat',
          'Rain-splash and wind dispersal of bacteria from infected leaves',
          'Contaminated field tools and irrigation water spreading the pathogen',
        ],
      },
      originSpread: 'The bacterium survives on infected seed and lint. When infected seed is sown the bacteria multiply on germinating seedlings. Warm humid weather with temperatures of 28–32°C and frequent rain favours rapid multiplication and spread. Angular water-soaked lesions confined between veins are the hallmark of the disease. Lesions turn dark brown and dry out. Stem infection causes black discolouration and girdles the branch causing black arm dieback. Boll infection stains lint and reduces seed germination. The disease is most severe during rainy weather from vegetative to boll maturation stages.',
      management: {
        organic: [
          'Use resistant varieties — this is the most economical management strategy.',
          'Use delinted acid-treated certified seed to eliminate seed-borne inoculum.',
          'Avoid overhead irrigation during humid weather to reduce leaf wetness.',
          'Remove and destroy infected plant material and debris after harvest.',
        ],
        chemical: [
          'Seed treatment with streptocycline 100 ppm or copper sulphate solution before sowing.',
          'Foliar spray of copper oxychloride 50 WP at 3 g per litre at first lesion appearance.',
          'Streptomycin sulphate + tetracycline at 200 ppm spray for bacterial control.',
        ],
        application: [
          'Begin spraying at first angular water-soaked lesions — bacteria spread fast in rain.',
          'Spray in the morning so leaves dry before evening.',
          'Repeat every 10 days during warm wet periods.',
          'Do not work in the field when plants are wet to avoid mechanical spread.',
        ],
      },
    },
    {
      id: 'boll-rot',
      name: 'Boll Rot',
      shortName: 'Boll Rot',
      pathogenType: 'Fungal complex',
      pathogen: 'Fusarium spp. / Diplodia gossypina / Aspergillus spp.',
      images: [
        '/diseases/cotton/boll_rot_1.jpeg',
        '/diseases/cotton/boll_rot_2.jpeg',
      ],
      affectedStages: ['flowering', 'boll_maturation'],
      cause: 'Boll rot is caused by a complex of secondary fungi including Fusarium, Diplodia, Aspergillus and Colletotrichum that enter bolls through wounds caused by insects, rain cracking or primary pathogens. The boll locks, lint stains, seeds decay and the boll surface is covered with fungal growth.',
      transmission: {
        transmitted: true,
        routes: [
          'Entry through insect feeding wounds especially pink bollworm and spotted bollworm holes',
          'Air-borne and rain-splashed spores of secondary fungi reaching wounded boll surface',
          'Primary infections by Colletotrichum or Xanthomonas opening the way for secondary rotters',
        ],
      },
      originSpread: 'Secondary rotting fungi are opportunistic pathogens that require a wound or primary infection for entry. Bollworm damage, mechanical injury and prolonged rain create entry points. Inside the humid warm boll cavity fungi spread rapidly through all locules rotting lint and seed. Externally the boll surface shows dark sunken spots, water-soaked areas and cottony or powdery fungal growth. Affected bolls either lock shut, open prematurely with stained lint or fail to open at all. Yield losses are directly proportional to boll infestation and wet weather duration at boll development.',
      management: {
        organic: [
          'Control bollworm insects promptly to prevent wound entry for secondary fungi.',
          'Avoid dense crop stands and excessive nitrogen that creates humid humid microclimate.',
          'Pick and destroy all rotted bolls to reduce spore load in the field.',
          'Grow varieties with storm-resistant bolls or open boll architecture.',
        ],
        chemical: [
          'Spray copper oxychloride 50 WP at 3 g per litre as protective boll treatment.',
          'Mancozeb 75 WP at 2.5 g per litre at boll set in high risk wet seasons.',
          'Integrate insecticide + fungicide sprays to control entry wounds and rot simultaneously.',
        ],
        application: [
          'Apply protective fungicide sprays just before wet humid spells during boll fill.',
          'Direct spray at developing bolls ensuring thorough coverage of boll surface.',
          'Repeat every 10 days during prolonged wet weather at boll maturation.',
          'Harvest promptly once bolls open to avoid post-maturity rotting.',
        ],
      },
    },
    {
      id: 'cercospora-leaf-spot',
      name: 'Cercospora Leaf Spot',
      shortName: 'Cercospora Leaf Spot',
      pathogenType: 'Fungus',
      pathogen: 'Cercospora gossypina',
      images: [
        '/diseases/cotton/cercospora_leaf_spot_1.jpeg',
        '/diseases/cotton/cercospora_leaf_spot_2.jpeg',
      ],
      affectedStages: ['vegetative', 'flowering', 'boll_maturation'],
      cause: 'Cercospora gossypina produces circular reddish-brown to dark brown spots with a lighter grey-tan centre and a distinct dark brown border. Under humid conditions a grey powdery sporulating mass of conidia forms in the lesion centre. Heavy infection causes premature leaf drop and boll shedding.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne and rain-splashed conidia produced abundantly on infected leaves',
          'Infected crop debris carrying the pathogen through the off-season',
          'Seed-borne inoculum on the seed coat starting early season infection',
        ],
      },
      originSpread: 'Conidia produced on sporulating lesions are dispersed by wind and rain splash to healthy leaves. Warm temperatures of 26–32°C with high relative humidity and frequent rain favour rapid disease development. Lesions first appear on older lower leaves and progressively move upward. The grey spore mass in the lesion centre distinguishes Cercospora from Alternaria. Severe early defoliation reduces the canopy area available for photosynthesis during boll fill leading to lighter boll weights and reduced lint yield.',
      management: {
        organic: [
          'Use disease-tolerant varieties and certified disease-free seed.',
          'Destroy crop debris thoroughly after harvest to reduce carry-over inoculum.',
          'Avoid excessive irrigation and dense planting that prolongs leaf wetness.',
          'Balanced potassium nutrition improves leaf resistance to Cercospora infection.',
        ],
        chemical: [
          'Mancozeb 75 WP at 2.5 g per litre as protective contact spray.',
          'Carbendazim 50 WP at 1 g per litre for systemic curative action.',
          'Copper oxychloride 50 WP at 3 g per litre as alternative protective treatment.',
        ],
        application: [
          'Start spray at first circular reddish-brown spots on lower leaves.',
          'Cover both leaf surfaces — conidia form on undersides and spread upward.',
          'Repeat every 12–15 days during warm humid weather.',
          'Avoid late evening spraying to ensure leaf surfaces dry before night.',
        ],
      },
    },
    {
      id: 'fusarium-wilt',
      name: 'Fusarium Wilt',
      shortName: 'Fusarium Wilt',
      pathogenType: 'Fungus',
      pathogen: 'Fusarium oxysporum f. sp. vasinfectum',
      images: [
        '/diseases/cotton/fusarium_wilt_1.jpeg',
        '/diseases/cotton/fusarium_wilt_2.jpeg',
      ],
      affectedStages: ['seedling', 'vegetative', 'flowering'],
      cause: 'Fusarium oxysporum f. sp. vasinfectum colonises the xylem vessels of cotton causing vascular browning, yellowing of foliage and irreversible wilting. It is a soil-borne vascular pathogen that persists in the soil for decades and is aggravated by root-knot nematode co-infection.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne chlamydospores persisting for 20+ years in infected fields',
          'Infected seed carrying the pathogen on the seed coat and internally',
          'Root-knot nematode wounds facilitating root entry of the fungus',
        ],
      },
      originSpread: 'Chlamydospores in soil germinate and infect roots. The fungus invades xylem vessels and produces toxins and tyloses that block water transport. Wilting begins on one side of the plant or in individual branches while others remain green — this asymmetric wilting is a key diagnostic. Internal stem cross-section shows brown vascular discolouration. Warm soil temperatures of 28°C favour rapid disease development. Nematode-infested fields show much more severe Fusarium wilt. Once a field is infested there is no practical way to eliminate the pathogen and rotation provides only partial relief.',
      management: {
        organic: [
          'Grow resistant or tolerant varieties — the only reliable long-term solution in infested fields.',
          'Manage root-knot nematodes with neem cake or Paecilomyces to reduce wilt severity.',
          'Apply Trichoderma viride or Pseudomonas fluorescens as seed treatment and soil application.',
          'Avoid waterlogging and ensure good drainage which reduces root stress and infection.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram at 2.5 g per kg of seed.',
          'Carbendazim soil drenching at 1 g per litre around wilting plants at early stage.',
          'Nematicide application (carbofuran 3G at 1 kg a.i. per hectare) to reduce nematode-wilt complex.',
        ],
        application: [
          'Treat seed before sowing as the first line of protection.',
          'Apply Trichoderma to furrows at sowing in fields with wilt history.',
          'Drench carbendazim at base of wilting plants only at early symptom stage.',
          'Remove and destroy severely wilted plants to reduce local inoculum spread.',
        ],
      },
    },
    {
      id: 'grey-mildew',
      name: 'Grey Mildew',
      shortName: 'Grey Mildew',
      pathogenType: 'Fungus',
      pathogen: 'Ramularia areola',
      images: [
        '/diseases/cotton/grey_mildew_1.jpeg',
        '/diseases/cotton/grey_mildew_2.jpeg',
      ],
      affectedStages: ['vegetative', 'flowering', 'boll_maturation'],
      cause: 'Ramularia areola causes angular grey-white powdery lesions on the lower leaf surface corresponding to pale green to yellow angular areas on the upper surface. It is one of the most widespread and destructive foliar diseases of cotton in peninsular India particularly in irrigated crops.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne conidia produced on the lower leaf surface dispersed by wind',
          'Infected leaf debris carrying the pathogen between seasons',
          'High humidity and moderate temperatures favouring rapid conidial germination',
        ],
      },
      originSpread: 'The pathogen produces conidia abundantly on the lower leaf surface under humid conditions. Cool to moderate temperatures of 22–28°C with high relative humidity especially at night favour sporulation and infection. Angular lesions bounded by veins on the lower surface produce a grey-white powdery appearance due to dense conidiophore growth. The upper surface shows corresponding pale green-yellow angular areas. Severe infection from boll development onward causes premature defoliation exposing bolls to sun and reducing photosynthetic supply to filling bolls. It is most severe in October–November in irrigated cotton of Maharashtra and Gujarat.',
      management: {
        organic: [
          'Grow less susceptible varieties and avoid excess nitrogen fertilisation.',
          'Maintain wide row spacing to improve canopy ventilation.',
          'Avoid late evening irrigation which raises overnight canopy humidity.',
          'Remove and destroy infected lower leaves at early disease stage.',
        ],
        chemical: [
          'Spray difenoconazole 25 EC at 0.05% (0.5 ml per litre) at first grey-white lesion appearance.',
          'Propiconazole 25 EC at 0.1% as an effective triazole alternative.',
          'Mancozeb 75 WP at 2.5 g per litre as a protective contact spray.',
        ],
        application: [
          'Begin spray when grey-white patches appear on the lower surface of lower leaves.',
          'Spray from below the canopy upward to reach lower leaf surfaces where sporulation occurs.',
          'Repeat every 12–15 days as long as humid conditions persist.',
          'Avoid use of sulphur-based fungicides as cotton is sensitive to sulphur phytotoxicity.',
        ],
      },
    },
    {
      id: 'pink-boll-rot',
      name: 'Pink Boll Rot',
      shortName: 'Pink Boll Rot',
      pathogenType: 'Fungus',
      pathogen: 'Nematospora coryli / Phytophthora parasitica var. brasiliensis',
      images: [
        '/diseases/cotton/pink_boll_rot_1.jpeg',
        '/diseases/cotton/pink_boll_rot_2.jpeg',
      ],
      affectedStages: ['flowering', 'boll_maturation'],
      cause: 'Pink boll rot is associated with Phytophthora parasitica var. brasiliensis and secondary yeast-like organisms causing water-soaked chocolate-brown to pink external boll symptoms and internal rotting of seeds and lint with a characteristic sour-fermented smell. Pink bollworm (Pectinophora gossypiella) damage creates entry points for the pathogens.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne Phytophthora oospores splashed onto bolls by rain',
          'Pink bollworm feeding tunnels providing entry for secondary organisms',
          'Infected plant debris in the soil serving as persistent inoculum',
        ],
      },
      originSpread: 'Oospores of Phytophthora in soil are splashed by heavy rain onto developing bolls. Cool wet weather during boll maturation phase favours infection and internal spread. Externally affected bolls show water-soaked dark brown areas. Inside, lint turns pink to brown and seeds show internal decay with a sour smell. Pink bollworm damage dramatically increases incidence by creating direct pathways into the boll. Affected bolls either fail to open or open with heavily stained unusable lint. The combination of insect damage and pathogen infection means integrated insect management is central to disease control.',
      management: {
        organic: [
          'Control pink bollworm with pheromone traps and timely insecticide sprays to reduce boll entry points.',
          'Avoid extended irrigation close to boll maturation which keeps the soil wet beneath the canopy.',
          'Early harvesting of first-opened bolls before wet season worsens reduces losses.',
          'Deep ploughing after harvest to destroy soil-borne oospores.',
        ],
        chemical: [
          'Metalaxyl + mancozeb (Ridomil Gold) at 2.5 g per litre as Phytophthora-specific spray.',
          'Copper oxychloride 50 WP at 3 g per litre as protective boll spray.',
          'Integrate bollworm insecticides with fungicide sprays during boll fill under wet conditions.',
        ],
        application: [
          'Apply metalaxyl-based spray after heavy rain events during boll maturation.',
          'Direct spray at bolls ensuring coverage of boll base where soil splash contacts bolls.',
          'Coordinate with insecticide spray for bollworm control to address both entry and infection.',
          'Repeat every 10 days during prolonged cool wet periods at boll fill.',
        ],
      },
    },
    {
      id: 'root-rot',
      name: 'Root Rot',
      shortName: 'Root Rot',
      pathogenType: 'Fungus',
      pathogen: 'Rhizoctonia solani / Phytophthora parasitica',
      images: [
        '/diseases/cotton/root_rot_1.jpeg',
        '/diseases/cotton/root_rot_2.jpeg',
      ],
      affectedStages: ['seedling', 'vegetative'],
      cause: 'Rhizoctonia solani and Phytophthora parasitica are soil-borne pathogens that infect the tap root, lateral roots and hypocotyl causing brown to black rotting of root tissue, seedling damping-off, and slow decline of older plants. Root rot is most severe in heavy waterlogged soils.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne sclerotia and mycelium of Rhizoctonia surviving for many years',
          'Soil-borne oospores of Phytophthora persisting in waterlogged conditions',
          'Waterlogged or poorly drained soils concentrating and spreading inoculum',
        ],
      },
      originSpread: 'Soil-borne fungi infect germinating seeds and seedling roots in cool wet conditions. Rhizoctonia causes pre-emergence and post-emergence damping-off with brown sunken lesions at the soil line. Phytophthora is more active in heavy rains and waterlogged conditions causing root and lower stem rot. Infected seedlings collapse or show stunted slow growth. On older plants roots turn brown and decay reducing water and nutrient uptake. Yellowing, wilting and premature shedding of leaves and bolls follow. The disease is most prevalent in poorly drained clay soils and fields with a history of continuous cotton cultivation.',
      management: {
        organic: [
          'Ensure good field drainage — waterlogging is the primary predisposing factor.',
          'Raise beds or ridges for planting in heavy soils prone to waterlogging.',
          'Apply Trichoderma viride at 2.5 kg per hectare as soil incorporation before sowing.',
          'Crop rotation with cereals or legumes to reduce soil-borne inoculum.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram or captan at 2.5 g per kg of seed.',
          'Metalaxyl + mancozeb soil drench at 2.5 g per litre around affected plants.',
          'Carbendazim + mancozeb combination soil drench for Rhizoctonia-affected patches.',
        ],
        application: [
          'Seed treatment before every sowing is non-negotiable in problem fields.',
          'Improve drainage immediately at first sign of waterlogging.',
          'Apply fungicide drench at plant base in affected patches at early symptom stage.',
          'Apply Trichoderma to furrows at sowing for biological suppression over time.',
        ],
      },
    },
    {
      id: 'verticillium-wilt',
      name: 'Verticillium Wilt',
      shortName: 'Verticillium Wilt',
      pathogenType: 'Fungus',
      pathogen: 'Verticillium dahliae',
      images: [
        '/diseases/cotton/verticillium_wilt_1.jpeg',
        '/diseases/cotton/verticillium_wilt_2.jpeg',
      ],
      affectedStages: ['vegetative', 'flowering', 'boll_maturation'],
      cause: 'Verticillium dahliae is a soil-borne vascular pathogen that colonises cotton xylem causing the distinctive acute and chronic wilt syndromes. The acute form causes sudden leaf roll, wilting and death; the chronic form causes interveinal chlorosis and necrosis giving a tiger-stripe or tortoiseshell mottling pattern.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne microsclerotia persisting for 10–15 years in infected fields',
          'Infected transplant soil, irrigation water and contaminated farm tools',
          'Root-to-root contact and mycelial spread through soil',
        ],
      },
      originSpread: 'Microsclerotia in soil germinate when roots grow near them and infect root cortex cells. The fungus moves into xylem vessels producing toxins and blocking water flow. Symptoms appear at or after flowering when plant demand for water is highest. The chronic form shows interveinal mosaic yellowing and necrosis between veins (tiger-stripe pattern) without complete wilting. The acute form causes rapid collapse of entire plants. Cross-section of infected stems shows distinctive brown ring of discoloured vascular tissue. Cool soil temperatures of 20–25°C favour disease development distinguishing Verticillium from Fusarium wilt which is more severe in warm soils. Once established in a field the microsclerotia are almost impossible to eradicate.',
      management: {
        organic: [
          'Grow resistant or tolerant varieties — essential strategy in Verticillium-sick fields.',
          'Avoid deep tillage that brings microsclerotia-laden subsoil to the surface.',
          'Solarisation of infested soil under polythene mulch for 6 weeks in summer reduces inoculum.',
          'Apply organic matter and maintain good soil biological activity to suppress Verticillium.',
        ],
        chemical: [
          'No curative chemical treatments are effective once the fungus is established in xylem.',
          'Seed treatment with carboxin + thiram reduces early seedling infection pressure.',
          'Soil fumigation with metam sodium in severe cases before replanting (high cost option).',
        ],
        application: [
          'Prevention is the only practical strategy — use resistant varieties in affected fields.',
          'Apply seed treatment before sowing as protection in fields at risk.',
          'Remove and destroy severely infected plants to reduce local microsclerotia production.',
          'Do not grow cotton continuously in infested fields — rotate with non-host crops for 2–3 years.',
        ],
      },
    },
  ],
}
