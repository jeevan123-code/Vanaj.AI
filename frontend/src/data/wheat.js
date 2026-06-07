// ============================================================================
//  WHEAT  (Triticum aestivum)
//  Growth stages + 10 diseases.
//  Disease content written for B.Sc. Agriculture reference. Images are the
//  field photos supplied by the team (public/diseases/wheat/).
//  3D models will be dropped into public/models/wheat/ later.
// ============================================================================

export const wheat = {
  id: 'wheat',
  name: 'Wheat',
  scientificName: 'Triticum aestivum',

  stages: [
    {
      id: 'seedling',
      name: 'Seedling',
      window: '0–20 days',
      model: '/models/wheat/seedling.glb',
      note: 'Germination to early shoot emergence; coleoptile pushes through soil and first true leaves appear.',
    },
    {
      id: 'tillering',
      name: 'Tillering',
      window: '20–60 days',
      model: '/models/wheat/tillering.glb',
      note: 'Side shoots emerge from the crown; number of tillers determines the number of spikes and final yield.',
    },
    {
      id: 'heading',
      name: 'Heading',
      window: '70–90 days',
      model: '/models/wheat/heading.glb',
      note: 'The spike emerges from the boot leaf, anthers become visible and pollination takes place.',
    },
    {
      id: 'mature',
      name: 'Mature',
      window: '100–120 days',
      model: '/models/wheat/mature.glb',
      note: 'Grains fill and harden, plant turns golden yellow, spike droops under grain weight, ready for harvest.',
    },
  ],

  diseases: [
    {
      id: 'stripe-rust',
      name: 'Stripe Rust (Yellow Rust)',
      shortName: 'Stripe Rust',
      pathogenType: 'Fungus',
      pathogen: 'Puccinia striiformis f. sp. tritici',
      images: [
        '/diseases/wheat/stripe_rust_1.jpeg',
        '/diseases/wheat/stripe_rust_2.jpeg',
      ],
      affectedStages: ['tillering', 'heading'],
      cause: 'The fungus Puccinia striiformis f. sp. tritici produces yellow to orange-yellow powdery pustules arranged in distinct parallel stripes running along leaf veins. It thrives in cool temperatures of 10–15°C with high humidity and is the most destructive rust disease of wheat in India.',
      transmission: {
        transmitted: true,
        routes: [
          'Wind-borne urediniospores travelling long distances between fields and regions',
          'Infected volunteer wheat plants and self-sown seeds acting as green bridges',
          'Movement of spores from higher altitude cooler regions to plains during season',
        ],
      },
      originSpread: 'Spores overwinter on volunteer wheat or alternate hosts in cooler regions and hills. In early spring, wind carries urediniospores to wheat crops in plains. Cool temperatures (10–15°C) with dew or light rain trigger germination and infection. Yellow powdery pustules appear in neat rows along veins on leaves, sheaths and sometimes spikes. In severe epidemics the entire canopy turns yellow, photosynthesis collapses and grain filling is severely reduced causing yield losses up to 70%.',
      management: {
        organic: [
          'Grow resistant varieties such as HD 2967, GW 322 and other notified resistant cultivars.',
          'Early sowing to allow the crop to escape peak rust season.',
          'Destroy volunteer wheat plants and crop debris that act as green bridges between seasons.',
          'Monitor fields weekly from tillering onwards especially in cool humid weather.',
        ],
        chemical: [
          'Spray propiconazole 25 EC at 0.1% (1 ml per litre) at first appearance of pustules.',
          'Tebuconazole or hexaconazole at recommended doses as alternative triazole fungicides.',
          'Mancozeb 75 WP at 2.5 g per litre as a protective spray before disease onset in high risk areas.',
        ],
        application: [
          'Apply at first sighting of yellow pustules — do not wait for widespread infection.',
          'Spray in the morning covering both upper and lower leaf surfaces thoroughly.',
          'Repeat after 15 days if cool humid weather continues.',
          'Use high volume sprayer to ensure complete canopy coverage.',
        ],
      },
    },
    {
      id: 'leaf-rust',
      name: 'Leaf Rust (Brown Rust)',
      shortName: 'Leaf Rust',
      pathogenType: 'Fungus',
      pathogen: 'Puccinia triticina',
      images: [
        '/diseases/wheat/brown_rust_1.jpeg',
        '/diseases/wheat/brown_rust_2.jpeg',
      ],
      affectedStages: ['tillering', 'heading', 'mature'],
      cause: 'Puccinia triticina causes circular to oval orange-brown powdery pustules scattered randomly on the upper leaf surface. It is the most widely distributed rust disease of wheat globally and occurs every season across the Indian subcontinent.',
      transmission: {
        transmitted: true,
        routes: [
          'Wind-borne urediniospores spreading from plant to plant and field to field',
          'Infected crop residue and volunteer wheat plants',
          'Long distance dispersal by wind currents from one region to another',
        ],
      },
      originSpread: 'Urediniospores survive on volunteer wheat or crop debris and are carried by wind to new crops. Warm temperatures of 15–22°C with leaf wetness from dew or rain favour infection. Orange-brown powdery pustules appear randomly scattered on upper leaf surface without the stripe pattern seen in yellow rust. As the season progresses pustules turn dark black as teliospores form. Severe infection causes premature leaf death reducing photosynthetic area and grain weight significantly.',
      management: {
        organic: [
          'Use resistant varieties and rotate them to prevent race adaptation.',
          'Timely sowing and balanced fertilisation to avoid lush susceptible growth.',
          'Remove crop debris and volunteer plants after harvest.',
        ],
        chemical: [
          'Propiconazole 25 EC at 0.1% sprayed at first pustule appearance.',
          'Mancozeb 75 WP at 2.5 g per litre as protective application.',
          'Tebuconazole as an alternative where propiconazole resistance is suspected.',
        ],
        application: [
          'Spray at first appearance of brown pustules on lower leaves.',
          'Cover both leaf surfaces completely with the spray.',
          'Repeat after 12–15 days if warm humid weather continues.',
        ],
      },
    },
    {
      id: 'stem-rust',
      name: 'Stem Rust (Black Rust)',
      shortName: 'Stem Rust',
      pathogenType: 'Fungus',
      pathogen: 'Puccinia graminis f. sp. tritici',
      images: [
        '/diseases/wheat/stem_rust_1.jpeg',
        '/diseases/wheat/stem_rust_2.jpeg',
      ],
      affectedStages: ['heading', 'mature'],
      cause: 'Puccinia graminis f. sp. tritici produces large elongated brick-red to dark brown powdery pustules on stems, leaf sheaths and leaves with torn ragged epidermis. It is historically the most devastating wheat disease and the Ug99 race remains a global threat.',
      transmission: {
        transmitted: true,
        routes: [
          'Wind-borne urediniospores travelling very long distances',
          'Sexual reproduction on barberry (Berberis) alternate host producing new virulent races',
          'Infected crop residue surviving in mild winter regions',
        ],
      },
      originSpread: 'The fungus produces urediniospores on infected plants that are carried by wind over hundreds of kilometres. Warm temperatures of 18–25°C with high humidity and dew favour rapid infection and spread. Large elongated pustules erupt through the stem epidermis leaving ragged edges. As the disease matures pustules turn black with teliospores. Stem weakening causes lodging and the combination of reduced photosynthesis and grain filling leads to severe yield loss. The Ug99 race discovered in Uganda in 1999 can overcome most known resistance genes.',
      management: {
        organic: [
          'Grow resistant varieties — this is the primary and most effective control.',
          'Eradicate barberry plants near wheat fields to eliminate the alternate host.',
          'Early sowing to avoid peak disease period.',
          'Monitor fields closely from heading stage.',
        ],
        chemical: [
          'Propiconazole 25 EC at 0.1% at first symptom appearance.',
          'Mancozeb 75 WP at 2.5 g per litre as protective spray.',
          'Tebuconazole or trifloxystrobin combinations for systemic protection.',
        ],
        application: [
          'Spray protectively at heading stage in high risk seasons.',
          'Direct spray at stems and lower canopy where pustules first appear.',
          'Repeat after 14 days if warm humid weather persists.',
        ],
      },
    },
    {
      id: 'loose-smut',
      name: 'Loose Smut',
      shortName: 'Loose Smut',
      pathogenType: 'Fungus',
      pathogen: 'Ustilago tritici',
      images: [
        '/diseases/wheat/loose_smut_1.jpeg',
        '/diseases/wheat/loose_smut_2.jpeg',
      ],
      affectedStages: ['heading'],
      cause: 'Ustilago tritici replaces the entire wheat spike with a dark olive-brown to black powdery mass of teliospores enclosed in a thin membrane that ruptures at heading. It is a seed-borne disease that infects flowers during the previous season.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne — mycelium carried inside infected seed from previous crop',
          'Air-borne teliospores released at heading landing on healthy flowers',
          'Spores infect ovaries of healthy flowers during anthesis and remain dormant in seed',
        ],
      },
      originSpread: 'The fungus survives as dormant mycelium inside apparently healthy-looking seed. When infected seed is sown the mycelium grows systemically through the seedling into all tissues. At heading instead of a normal spike the fungus converts all floral parts into a mass of black teliospores covered by a thin grey membrane. This membrane ruptures at heading releasing clouds of black spores that infect flowers of neighbouring healthy plants. The infected seed produced looks normal but carries the pathogen inside making seed selection critical.',
      management: {
        organic: [
          'Use certified disease-free seed from a reliable source every season.',
          'Hot water seed treatment — soak seed at 52°C for 10 minutes then dry and sow.',
          'Rogue out smutted spikes immediately before the membrane ruptures to prevent spore release.',
          'Never save seed from a field that showed loose smut infection.',
        ],
        chemical: [
          'Seed treatment with carboxin 75 WP or carboxin + thiram at 2.5 g per kg of seed.',
          'Tebuconazole seed dressing at 1.5 g per kg of seed as a systemic alternative.',
          'Vitavax Power (carboxin + thiram) is the most recommended treatment for loose smut.',
        ],
        application: [
          'Treat every batch of seed before sowing — this is the only effective control point.',
          'Mix fungicide powder with seed thoroughly to ensure uniform coating.',
          'Sow treated seed within 24 hours of treatment.',
          'For hot water treatment dry seed completely in shade before sowing.',
        ],
      },
    },
    {
      id: 'common-bunt',
      name: 'Common Bunt (Stinking Bunt)',
      shortName: 'Common Bunt',
      pathogenType: 'Fungus',
      pathogen: 'Tilletia caries / Tilletia foetida',
      images: [
        '/diseases/wheat/common_bunt_1.jpeg',
        '/diseases/wheat/common_bunt_2.jpeg',
      ],
      affectedStages: ['heading', 'mature'],
      cause: 'Tilletia caries and Tilletia foetida replace wheat grains with round dark bunt balls filled with black powdery teliospores that emit a strong fishy smell due to trimethylamine. The spike retains its shape unlike loose smut making it detectable at harvest.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne teliospores clinging to seed surface from previous infected crop',
          'Soil-borne teliospores surviving for several years in the soil',
          'Contaminated harvesting equipment and storage facilities',
        ],
      },
      originSpread: 'Teliospores cling to seed surface or survive in soil. When seed is sown in cool moist soil the teliospores germinate and infect the seedling at or below soil surface before emergence. The fungus grows systemically and at heading replaces individual grains with bunt balls. The bunt balls remain enclosed by intact glumes giving the spike a normal shape but slightly bluish-green colour. At harvest bunt balls rupture releasing black spores and the strong fishy smell that contaminates the entire grain lot reducing its market value to zero.',
      management: {
        organic: [
          'Use certified clean seed and avoid seed from fields with bunt history.',
          'Deep ploughing to bury soil-borne spores below germination zone.',
          'Avoid early sowing in cold wet soils which favour infection.',
          'Salt water flotation to separate light bunt balls from healthy seed.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram (Vitavax Power) at 2.5 g per kg.',
          'Thiram 75 WS at 2.5 g per kg of seed as a contact fungicide treatment.',
          'Tebuconazole seed dressing at 1.5 g per kg as systemic alternative.',
        ],
        application: [
          'Treat seed before every sowing without exception.',
          'Ensure uniform fungicide coating by mixing seed and fungicide in a sealed bag.',
          'Do not use seed from a bunted crop even after fungicide treatment.',
          'Clean and disinfect all harvesting and threshing equipment to prevent carry-over.',
        ],
      },
    },
    {
      id: 'karnal-bunt',
      name: 'Karnal Bunt',
      shortName: 'Karnal Bunt',
      pathogenType: 'Fungus',
      pathogen: 'Tilletia indica',
      images: [
        '/diseases/wheat/karnal_bunt_1.jpeg',
        '/diseases/wheat/karnal_bunt_2.jpeg',
      ],
      affectedStages: ['heading', 'mature'],
      cause: 'Tilletia indica is a quarantine pathogen that partially replaces the grain endosperm with black powdery teliospores — unlike common bunt where whole grains are replaced, Karnal bunt only partially infects individual grains. It has significant international trade implications.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne teliospores and secondary zoospores infecting flowers at heading',
          'Soil-borne teliospores surviving for many years in infected fields',
          'Movement of infected seed and grain in trade causing international quarantine restrictions',
        ],
      },
      originSpread: 'Teliospores in soil germinate to produce zoospores or the spores are carried by air to infect flowers at heading and early grain fill. Cool temperatures of 18–20°C with high humidity and rain at flowering favour infection. Only some grains per spike are partially infected giving the characteristic appearance of healthy and partially black grains in the same spike. Even 1–2% infection makes the entire grain lot unacceptable for export. First reported from Karnal, Haryana in 1931 it remains a major barrier to Indian wheat exports.',
      management: {
        organic: [
          'Grow resistant or tolerant varieties notified by state agricultural universities.',
          'Avoid fields with history of Karnal bunt infection.',
          'Do not use seed from infected fields.',
          'Strict quarantine — do not move seed from infected areas to clean areas.',
        ],
        chemical: [
          'Propiconazole 25 EC at 0.1% sprayed at boot stage just before heading.',
          'Second spray of propiconazole at 50% heading for high risk seasons.',
          'Seed treatment with carboxin + thiram to reduce seed-borne carry-over.',
        ],
        application: [
          'Timing is critical — spray at boot leaf stage before spike emerges.',
          'Cover the entire upper canopy especially the flag leaf and emerging spike.',
          'Repeat at heading if cool humid weather with rain continues.',
          'Report any suspected new occurrence to the local plant protection office immediately.',
        ],
      },
    },
    {
      id: 'powdery-mildew',
      name: 'Powdery Mildew',
      shortName: 'Powdery Mildew',
      pathogenType: 'Fungus',
      pathogen: 'Blumeria graminis f. sp. tritici',
      images: [
        '/diseases/wheat/powdery_mildew_1.jpeg',
        '/diseases/wheat/powdery_mildew_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering', 'heading'],
      cause: 'Blumeria graminis f. sp. tritici produces a white to greyish powdery superficial mycelial growth on upper leaf surfaces. Unlike most fungal pathogens it does not require free water for infection and actually prefers moderate humidity with cool temperatures.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne conidia spreading rapidly from plant to plant in dry windy conditions',
          'Cleistothecia on infected debris releasing ascospores to start new infections',
          'Rapid spread within dense susceptible canopy through air movement',
        ],
      },
      originSpread: 'The fungus overwinters as cleistothecia on crop debris. In spring and early season ascospores and conidia infect young leaves. Unlike rust and blight it thrives in moderate humidity without free water, making dense heavily fertilised crops particularly susceptible. White powdery colonies first appear on lower leaves and spread upward through conidia dispersed by wind. As colonies age they turn grey and small black cleistothecia appear within the mycelium. Severe infection on flag leaf and spike reduces grain filling and yield.',
      management: {
        organic: [
          'Grow resistant varieties and avoid excessive nitrogen which promotes lush susceptible growth.',
          'Maintain optimal plant spacing to improve air circulation within the canopy.',
          'Remove and destroy infected crop debris after harvest.',
          'Avoid overhead irrigation which creates humid canopy conditions.',
        ],
        chemical: [
          'Propiconazole 25 EC at 0.1% at first powdery colony appearance.',
          'Sulphur 80 WP at 3 g per litre as a contact fungicide option.',
          'Hexaconazole or tebuconazole as triazole alternatives.',
        ],
        application: [
          'Spray at first white colony appearance on lower leaves.',
          'Ensure thorough coverage of all leaf surfaces including undersides.',
          'Repeat after 15 days if cool dry conditions favour continued spread.',
          'Avoid spraying sulphur in high temperatures above 35°C as it may cause phytotoxicity.',
        ],
      },
    },
    {
      id: 'flag-smut',
      name: 'Flag Smut',
      shortName: 'Flag Smut',
      pathogenType: 'Fungus',
      pathogen: 'Urocystis agropyri',
      images: [
        '/diseases/wheat/flag_smut_1.jpeg',
        '/diseases/wheat/flag_smut_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering'],
      cause: 'Urocystis agropyri is a soil and seed-borne fungus that infects seedlings causing long grey-black powdery streaks running parallel to leaf veins that shred the leaf into narrow strips as the disease progresses.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne teliospores surviving for several years in infected soil',
          'Seed-borne spores carried on seed surface from previous infected crop',
          'Infected plant debris incorporated into soil during tillage',
        ],
      },
      originSpread: 'Teliospores in soil or on seed germinate and infect the seedling at or just below the soil surface. The fungus grows systemically through all above-ground plant parts. Long dark grey to black powdery streaks appear parallel to veins on leaves and sheaths. As infection progresses the leaf tissue between veins shreds into long narrow ribbons exposing the black spore mass. Infected plants are stunted with poor tillering and rarely produce a spike. The soil-borne nature means infected fields continue to cause losses for several years even with clean seed.',
      management: {
        organic: [
          'Use certified clean seed free from surface-borne spores.',
          'Avoid planting in fields with a known history of flag smut.',
          'Deep summer ploughing to expose and kill soil-borne spores.',
          'Long crop rotation of 3–4 years with non-host crops to reduce soil inoculum.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram at 2.5 g per kg of seed.',
          'Tebuconazole seed dressing at 1.5 g per kg as a systemic alternative.',
          'Soil application of fungicides in severely infected fields before sowing.',
        ],
        application: [
          'Treat seed before every sowing in fields with smut history.',
          'Ensure complete and uniform seed coating with fungicide.',
          'Combine seed treatment with crop rotation for best results.',
          'Do not sow in waterlogged poorly drained soils which favour infection.',
        ],
      },
    },
    {
      id: 'spot-blotch',
      name: 'Spot Blotch',
      shortName: 'Spot Blotch',
      pathogenType: 'Fungus',
      pathogen: 'Bipolaris sorokiniana',
      images: [
        '/diseases/wheat/spot_blotch_1.jpeg',
        '/diseases/wheat/spot_blotch_2.jpeg',
      ],
      affectedStages: ['tillering', 'heading', 'mature'],
      cause: 'Bipolaris sorokiniana causes dark brown to black irregular blotches on wheat leaves with water-soaked margins and concentric zonation. It is the most important foliar disease of wheat in the warm humid plains of South Asia including eastern and central India.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne conidia carried on infected seed surface',
          'Air-borne conidia splashed and wind-carried from infected debris and plants',
          'Infected crop residue in soil releasing spores during the next season',
        ],
      },
      originSpread: 'The fungus survives on seed and infected crop debris. Warm temperatures of 25–30°C with high humidity and frequent rains favour rapid development making it particularly severe in eastern India. Conidia germinate on leaf surface with free water and penetrate through stomata or directly. Dark brown irregular blotches with water-soaked margins appear and enlarge with concentric zonation. Blotches coalesce causing large necrotic areas and premature leaf death from the bottom upward. Spike infection causes dark discolouration of glumes and grain reducing quality and germination.',
      management: {
        organic: [
          'Use clean certified seed and grow tolerant varieties suited to warm humid regions.',
          'Seed treatment with Trichoderma viride to reduce seed-borne inoculum.',
          'Timely sowing to match the crop heading with drier weather.',
          'Remove and destroy infected crop debris by deep ploughing.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram or mancozeb at 2.5 g per kg.',
          'Foliar spray of propiconazole 25 EC at 0.1% at first blotch appearance.',
          'Mancozeb 75 WP at 2.5 g per litre as a protective contact fungicide.',
        ],
        application: [
          'Apply seed treatment without fail as first line of defence.',
          'Begin foliar spray at tillering when first blotches appear on lower leaves.',
          'Repeat spraying after 12–15 days during warm humid weather.',
          'Cover lower leaves thoroughly as disease progresses upward from base.',
        ],
      },
    },
    {
      id: 'foot-rot',
      name: 'Foot Rot / Root Rot',
      shortName: 'Foot Rot',
      pathogenType: 'Fungal complex',
      pathogen: 'Fusarium culmorum / Gaeumannomyces graminis / Pythium spp.',
      images: [
        '/diseases/wheat/foot_rot_1.jpeg',
        '/diseases/wheat/foot_rot_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering'],
      cause: 'A complex of soil-borne fungi including Fusarium culmorum, Gaeumannomyces graminis (take-all) and Pythium species that rot the crown, stem base and roots causing seedling death and tiller death in older plants.',
      transmission: {
        transmitted: true,
        routes: [
          'Soil-borne inoculum surviving on infected crop debris for many years',
          'Seed-borne Fusarium spores carried on infected seed surface',
          'Waterlogged poorly drained soils concentrating and spreading inoculum',
        ],
      },
      originSpread: 'Soil-borne fungi infect roots and crown tissue of germinating seedlings and young plants. Cool wet soils at sowing favour Pythium and Fusarium while Gaeumannomyces (take-all) is more active in neutral to alkaline well-drained soils. Brown to dark brown rotting appears on roots and crown; stem base shows internal brown discolouration. Infected tillers die giving dead heart symptom. Affected plants are easily pulled from soil due to rotted roots. Patches of stunted yellowish dying plants appear in the field. Continuous wheat cultivation in the same field dramatically increases take-all severity over years.',
      management: {
        organic: [
          'Avoid waterlogging — ensure good field drainage before sowing.',
          'Crop rotation — avoid continuous wheat cultivation in the same field.',
          'Apply Trichoderma viride or Pseudomonas fluorescens as seed treatment or soil application.',
          'Use well decomposed organic matter to improve soil health and biological suppression.',
        ],
        chemical: [
          'Seed treatment with carboxin + thiram or thiram alone at 2.5 g per kg.',
          'Carbendazim seed treatment at 2 g per kg for Fusarium foot rot.',
          'Soil drenching with carbendazim in severely affected patches.',
        ],
        application: [
          'Seed treatment is the most practical control measure — apply before every sowing.',
          'Improve drainage before sowing to reduce soil wetness favouring infection.',
          'Apply Trichoderma to soil as furrow application at sowing for long term suppression.',
          'Rotate with legumes or other non-host crops for at least one season.',
        ],
      },
    },
  ],
}
