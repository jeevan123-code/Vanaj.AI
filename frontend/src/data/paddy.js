// ============================================================================
//  PADDY  (Oryza sativa)
//  Growth stages + top 10 diseases.
//  Disease content written for B.Sc. Agriculture reference. Images are the
//  field photos supplied by the team (public/diseases/paddy/).
//  3D models will be dropped into public/models/paddy/ later (see /public/models).
// ============================================================================

export const paddy = {
  id: 'paddy',
  name: 'Paddy',
  scientificName: 'Oryza sativa',

  // --- Four growth stages (3D model slots) ---------------------------------
  stages: [
    {
      id: 'seedling',
      name: 'Seedling',
      window: '0–20 days',
      model: '/models/paddy/seedling.glb',
      note: 'From germination to the early few-leaf seedling raised in the nursery before transplanting.',
    },
    {
      id: 'tillering',
      name: 'Tillering',
      window: '20–50 days',
      model: '/models/paddy/tillering.glb',
      note: 'The plant produces side shoots (tillers) from the base, deciding the number of panicles.',
    },
    {
      id: 'heading',
      name: 'Heading',
      window: '55–85 days',
      model: '/models/paddy/heading.glb',
      note: 'The panicle emerges and flowers; pollination and grain set take place.',
    },
    {
      id: 'mature',
      name: 'Mature',
      window: '90–120 days',
      model: '/models/paddy/mature.glb',
      note: 'Grains fill, harden and turn golden; the crop bends under the weight of ripe panicles.',
    },
  ],

  // --- Top 10 diseases ------------------------------------------------------
  diseases: [
    {
      id: 'bacterial-leaf-blight',
      name: 'Bacterial Leaf Blight',
      shortName: 'BLB',
      pathogenType: 'Bacterium',
      pathogen: 'Xanthomonas oryzae pv. oryzae',
      images: [
        '/diseases/paddy/bacterial_leaf_blight_1.jpeg',
        '/diseases/paddy/bacterial_leaf_blight_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering', 'heading'],
      cause:
        'A bacterium, Xanthomonas oryzae pv. oryzae, that enters through leaf tips, wounds and water pores (hydathodes) and multiplies inside the leaf vein system.',
      transmission: {
        transmitted: true,
        routes: [
          'Irrigation and rain water carrying bacteria from plant to plant',
          'Infected seed and stubble left in the field',
          'Wind-driven rain splashing bacterial ooze onto healthy leaves',
          'Clipping of leaf tips during transplanting',
        ],
      },
      originSpread:
        'It begins when bacteria survive in seed, stubble or weed hosts. Warm temperatures (25–34 °C), high humidity and standing water let them enter through cut tips and natural pores. Bacterial ooze formed at night is washed by rain and irrigation to neighbouring plants. In the seedling stage a severe form called "kresek" wilts whole plants; later, classic blight produces yellow, wavy lesions along leaf margins that dry into straw-coloured streaks, cutting grain filling.',
      management: {
        organic: [
          'Use certified, disease-free seed and resistant varieties (e.g. IRBB lines / Improved Samba Mahsuri where adapted).',
          'Treat seed with hot water (52–54 °C) or a Pseudomonas fluorescens biocontrol soak.',
          'Avoid clipping leaf tips at transplanting; drain the field periodically instead of keeping it continuously flooded.',
          'Balance fertiliser — avoid excess nitrogen, which makes leaves soft and very susceptible.',
        ],
        chemical: [
          'Spray a copper-based bactericide such as copper oxychloride (Blitox) at 2.5 g/litre.',
          'Where permitted, use a combination of streptomycin sulphate + tetracycline (Streptocycline 100–300 ppm) tank-mixed with copper oxychloride.',
        ],
        application: [
          'Start at the first appearance of marginal yellowing; never wait for whole-leaf drying.',
          'Spray in the cool of early morning or evening, covering both leaf surfaces.',
          'Repeat at 10–12 day intervals if rains continue; drain excess water before spraying.',
          'Stop irrigation overflow between fields to prevent re-introduction after treatment.',
        ],
      },
    },

    {
      id: 'bacterial-leaf-streak',
      name: 'Bacterial Leaf Streak',
      shortName: 'BLS',
      pathogenType: 'Bacterium',
      pathogen: 'Xanthomonas oryzae pv. oryzicola',
      images: [
        '/diseases/paddy/bacterial_leaf_streak_1.jpeg',
        '/diseases/paddy/bacterial_leaf_streak_2.jpeg',
      ],
      affectedStages: ['tillering', 'heading'],
      cause:
        'A closely related bacterium, Xanthomonas oryzae pv. oryzicola, which multiplies in the leaf tissue between veins rather than in the main vein system.',
      transmission: {
        transmitted: true,
        routes: [
          'Rain splash and overhead/flood water moving bacteria between leaves',
          'Infected seed and crop residue',
          'Bacterial ooze (tiny yellow beads) spread by wind-driven rain',
        ],
      },
      originSpread:
        'The bacteria survive on seed and stubble, then enter through stomata and small wounds during warm, very humid, rainy weather. They form narrow, water-soaked streaks between the leaf veins that look translucent when held to light, later turning yellow-brown. Distinct from leaf blight, the streaks are numerous, thin and bounded by veins. Heavy populations ooze yellow droplets that dry on the surface and are splashed onward, so the disease spreads fastest in storms and dense, over-fertilised stands.',
      management: {
        organic: [
          'Sow clean, certified seed and grow tolerant varieties.',
          'Hot-water seed treatment and Pseudomonas fluorescens seed/foliar application.',
          'Plough in stubble and control weed grasses that harbour the bacterium.',
          'Reduce plant density and avoid over-application of nitrogen.',
        ],
        chemical: [
          'Foliar copper oxychloride at 2.5 g/litre.',
          'Streptocycline (streptomycin + tetracycline) 100–250 ppm with copper oxychloride where its use is locally approved.',
        ],
        application: [
          'Spray on first sighting of thin translucent streaks, before they coalesce.',
          'Apply in calm, dry windows so the spray dries on the leaf and is not immediately washed off.',
          'Re-spray after 10–12 days during a wet spell; cover the underside of leaves.',
        ],
      },
    },

    {
      id: 'bakanae',
      name: 'Bakanae (Foolish Seedling)',
      shortName: 'Bakanae',
      pathogenType: 'Fungus',
      pathogen: 'Fusarium fujikuroi (Gibberella fujikuroi)',
      images: [
        '/diseases/paddy/bakanae_1.jpeg',
        '/diseases/paddy/bakanae_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering'],
      cause:
        'The seed-borne fungus Fusarium fujikuroi, which releases the plant hormone gibberellin inside the seedling and forces abnormal elongation.',
      transmission: {
        transmitted: true,
        routes: [
          'Mainly seed-borne — carried on and inside infected grain',
          'Spores released into the nursery water and soil',
          'Air-borne spores from infected panicles back onto seed at harvest',
        ],
      },
      originSpread:
        'Infection starts on the seed. As the seedling grows, the fungus floods it with gibberellin, so affected plants become abnormally tall, thin and pale yellow, standing above healthy neighbours. Many die before transplanting; survivors are weak with poorly developed roots and often empty panicles. At flowering the fungus colonises new grain, completing the cycle. Warm nursery temperatures (around 30 °C) and infected seed lots make outbreaks worse.',
      management: {
        organic: [
          'Use seed from healthy fields; reject lots with a history of bakanae.',
          'Salt-water seed flotation (specific gravity ~1.13) to float out light, infected seed before sowing.',
          'Hot-water seed treatment and soak with Trichoderma viride or Pseudomonas fluorescens.',
          'Rogue out tall, abnormal seedlings in the nursery before they shed spores.',
        ],
        chemical: [
          'Seed treatment with carbendazim or a carbendazim + mancozeb mixture (about 2 g/kg of seed).',
          'Where available, treat seed with a triazole such as tebuconazole before sowing.',
        ],
        application: [
          'Soak seed in the fungicide/biocontrol suspension for the recommended period (often 12–24 h), then sow.',
          'For chemical seed dressing, coat dry seed evenly at 2 g/kg and sow within a day or two.',
          'Maintain moderate nursery temperatures and avoid dense, over-warm seedbeds.',
        ],
      },
    },

    {
      id: 'brown-spot',
      name: 'Brown Spot',
      shortName: 'Brown Spot',
      pathogenType: 'Fungus',
      pathogen: 'Bipolaris oryzae (Cochliobolus miyabeanus)',
      images: [
        '/diseases/paddy/brown_spot_1.jpeg',
        '/diseases/paddy/brown_spot_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering', 'heading', 'mature'],
      cause:
        'The fungus Bipolaris oryzae, strongly linked to poor, nutrient-starved soils — it is often called a "disease of hunger" because it explodes where the crop is stressed.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne — carried on discoloured grain',
          'Air-borne spores (conidia) landing on leaves and panicles',
          'Crop residue and soil debris from a previous infected crop',
        ],
      },
      originSpread:
        'Spores survive on seed and stubble and germinate on the leaf in warm, humid conditions with long leaf wetness. The disease is far worse on nutrient-deficient soils — low nitrogen, low potassium, and in particular silicon and manganese shortage. It produces small oval brown spots with a tan centre and yellow halo (like sesame seeds) on leaves; under stress these merge and scorch the leaf. On panicles it discolours and shrivels grain, lowering both yield and seed quality.',
      management: {
        organic: [
          'Correct soil fertility first — apply balanced NPK plus potassium, and silica/manganese where deficient.',
          'Use clean, certified seed and resistant varieties.',
          'Seed treatment with Trichoderma or hot water; incorporate organic matter to improve soil health.',
          'Avoid drought stress; keep the crop adequately and evenly watered.',
        ],
        chemical: [
          'Seed treatment with a captan- or thiram-type fungicide.',
          'Foliar mancozeb (2 g/litre) or a triazole such as propiconazole / tebuconazole at booting if spots are spreading.',
        ],
        application: [
          'Begin foliar sprays when spots first appear on the upper leaves, especially before booting.',
          'Spray to run-off covering both leaf surfaces; repeat after 12–15 days if weather stays humid.',
          'Combine spraying with the fertility correction — chemicals alone rarely control a hungry crop.',
        ],
      },
    },

    {
      id: 'false-smut',
      name: 'False Smut',
      shortName: 'False Smut',
      pathogenType: 'Fungus',
      pathogen: 'Ustilaginoidea virens',
      images: [
        '/diseases/paddy/false_smut_1.jpeg',
        '/diseases/paddy/false_smut_2.jpeg',
      ],
      affectedStages: ['heading', 'mature'],
      cause:
        'The fungus Ustilaginoidea virens, which replaces individual grains with velvety spore balls that grow from green-yellow to orange and finally greenish-black.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne spores landing on opening flowers',
          'Soil-borne sclerotia and chlamydospores surviving between seasons',
          'Contaminated seed carrying spores',
        ],
      },
      originSpread:
        'Resting bodies (sclerotia) in soil and spores on seed germinate around flowering. Infection happens at the booting-to-heading window when the flower is open, favoured by high humidity, rain at flowering and heavy nitrogen. The fungus converts grains into spore balls — first small and orange, later large and black — covered in powder that rubs off onto hands. Though only some grains per panicle are affected, the spores spread and the balls reduce grain quality and weight.',
      management: {
        organic: [
          'Avoid excess nitrogen and split it so the crop is not lush at flowering.',
          'Use clean seed and field sanitation — remove and destroy smut balls and stubble.',
          'Grow less susceptible varieties and avoid very late, very dense planting.',
        ],
        chemical: [
          'Preventive spray of propiconazole or a copper-based fungicide at the early booting stage.',
          'A second protective spray of a triazole around 50% panicle emergence in high-risk seasons.',
        ],
        application: [
          'Timing is everything — spray at boot leaf / early booting, BEFORE the panicle emerges; sprays after the balls form do not work.',
          'Cover the upper canopy thoroughly in the evening.',
          'Repeat once at heading if rains and high humidity continue.',
        ],
      },
    },

    {
      id: 'grain-discolouration',
      name: 'Grain Discolouration',
      shortName: 'Grain Discolouration',
      pathogenType: 'Fungal / bacterial complex',
      pathogen: 'Complex — Bipolaris, Curvularia, Fusarium, Alternaria & others',
      images: [
        '/diseases/paddy/grain_discolouration_1.jpeg',
        '/diseases/paddy/grain_discolouration_2.jpeg',
      ],
      affectedStages: ['heading', 'mature'],
      cause:
        'Not one organism but a complex of seed-infecting fungi (and sometimes bacteria) that colonise the grain during and after flowering, staining the husk brown, grey, pink or black.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne spores of many fungi settling on the panicle',
          'Seed-borne carry-over to the next crop',
          'Splash from infected debris and neighbouring diseased panicles',
        ],
      },
      originSpread:
        'During flowering and grain filling, several weak pathogens land on the panicle. Continuous rain, high humidity and dew at heading, plus insect (bug) feeding punctures, let them enter the developing grain. They discolour the husk and may shrink the kernel, lowering germination and milling quality. Late harvest and damp storage make the staining worse, and the infected seed then carries the problem forward.',
      management: {
        organic: [
          'Harvest on time and dry grain quickly to safe moisture (~12–14%).',
          'Manage panicle-feeding bugs that create entry wounds.',
          'Use clean seed, balanced nutrition and avoid very dense canopies that stay wet.',
          'Seed treatment with Trichoderma before the next sowing.',
        ],
        chemical: [
          'Protective spray of mancozeb or a propiconazole + a contact fungicide at heading/flowering in wet seasons.',
          'Seed treatment with carbendazim + thiram before storage/sowing.',
        ],
        application: [
          'Apply the foliar spray at flowering and again ~10 days later if it stays rainy.',
          'Direct spray at the panicles, not just the leaves.',
          'Pair sprays with timely harvest and rapid drying — chemicals cannot fix grain stained in damp storage.',
        ],
      },
    },

    {
      id: 'leaf-blast',
      name: 'Rice Blast (Leaf & Neck)',
      shortName: 'Blast',
      pathogenType: 'Fungus',
      pathogen: 'Magnaporthe oryzae (Pyricularia oryzae)',
      images: [
        '/diseases/paddy/leaf_blast_1.jpeg',
        '/diseases/paddy/leaf_blast_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering', 'heading'],
      cause:
        'The fungus Magnaporthe oryzae, the most damaging rice disease worldwide, attacking leaves, the node, the collar and — most destructively — the neck of the panicle.',
      transmission: {
        transmitted: true,
        routes: [
          'Air-borne spores (conidia) carried long distances by wind and dew',
          'Seed-borne and stubble-borne survival',
          'Splash from infected leaves and collateral grass hosts',
        ],
      },
      originSpread:
        'Spores survive on seed, stubble and weeds, then germinate on the leaf when there is a long film of dew or rain water and mild temperatures (around 25–28 °C). On leaves it makes spindle/eye-shaped lesions — grey centre, brown margin. The fungus loves heavy nitrogen, drought-stressed upland rice and cool misty nights. The deadly phase is "neck blast": the panicle base rots, turns black and breaks, leaving white, empty "chaffy" panicles and severe yield loss.',
      management: {
        organic: [
          'Grow resistant varieties and rotate them to avoid the fungus adapting.',
          'Split nitrogen and avoid lush, over-fed crops; keep silicon levels up.',
          'Clean seed, Trichoderma/Pseudomonas seed treatment and stubble destruction.',
          'Maintain a thin water layer rather than letting the field dry and stress the crop.',
        ],
        chemical: [
          'Seed treatment with tricyclazole or carbendazim.',
          'Foliar tricyclazole (0.6 g/litre) for leaf blast; a triazole/strobilurin (e.g. tebuconazole + trifloxystrobin) around heading for neck blast.',
        ],
        application: [
          'Spray leaf blast at the first eye-shaped lesions during tillering.',
          'For neck blast, apply protectively at boot-leaf and again at 50% heading — this is the critical spray.',
          'Spray in the evening, cover the whole canopy, and repeat after 10–12 days under misty, dewy weather.',
        ],
      },
    },

    {
      id: 'sheath-blight',
      name: 'Sheath Blight',
      shortName: 'Sheath Blight',
      pathogenType: 'Fungus',
      pathogen: 'Rhizoctonia solani',
      images: [
        '/diseases/paddy/sheath_blight_1.jpeg',
        '/diseases/paddy/sheath_blight_2.jpeg',
      ],
      affectedStages: ['tillering', 'heading', 'mature'],
      cause:
        'The soil fungus Rhizoctonia solani, which survives as hard resting bodies (sclerotia) in soil and floats up to infect the lower sheath at the water line.',
      transmission: {
        transmitted: true,
        routes: [
          'Sclerotia floating on irrigation water to the plant base',
          'Plant-to-plant contact as the canopy closes',
          'Crop residue and soil from previous infected crops',
        ],
      },
      originSpread:
        'Sclerotia in the soil float to the surface and lodge against the sheath near the water line. In a dense, heavily fertilised canopy with high humidity and warm temperatures (28–32 °C), the fungus produces greenish-grey, oval "snake-skin" lesions on the sheath that climb upward leaf by leaf. White-to-brown mustard-sized sclerotia form on the lesions and drop back to the soil. Severe attacks reach the flag leaf, causing lodging and unfilled grain.',
      management: {
        organic: [
          'Avoid very high seeding/transplant density and excess nitrogen — open the canopy.',
          'Apply potassium and silica to strengthen the sheath.',
          'Remove floating sclerotia and weeds; deep-plough residue.',
          'Apply Trichoderma viridae or Pseudomonas fluorescens to soil/seedling roots.',
        ],
        chemical: [
          'Foliar validamycin, hexaconazole or propiconazole directed at the base of the plant.',
          'A triazole + strobilurin mix where pressure is high.',
        ],
        application: [
          'Spray at maximum tillering to early booting when lesions appear on lower sheaths.',
          'Direct the nozzle low, at the plant base and water line, not just the upper leaves.',
          'Drain the field a little before spraying and repeat after 12–15 days if the canopy stays dense and wet.',
        ],
      },
    },

    {
      id: 'sheath-rot',
      name: 'Sheath Rot',
      shortName: 'Sheath Rot',
      pathogenType: 'Fungus',
      pathogen: 'Sarocladium oryzae',
      images: [
        '/diseases/paddy/sheath_rot_1.jpeg',
        '/diseases/paddy/sheath_rot_2.jpeg',
      ],
      affectedStages: ['heading'],
      cause:
        'The fungus Sarocladium oryzae, which rots the flag-leaf sheath that wraps the young panicle, so the panicle cannot emerge properly.',
      transmission: {
        transmitted: true,
        routes: [
          'Seed-borne carry-over',
          'Air-borne spores landing on the boot',
          'Wounds made by mites and stem-feeding insects opening the way in',
        ],
      },
      originSpread:
        'The fungus survives on seed and debris and infects the uppermost (flag-leaf) sheath around the booting stage, especially where mites or insects have wounded the boot. Warm, humid weather and a dense crop favour it. It makes oblong brown-edged lesions with a grey centre on the sheath; a powdery whitish fungal growth appears inside. Because the panicle is trapped, it emerges only partly, with grains that are unfilled, discoloured or rotted — directly cutting yield.',
      management: {
        organic: [
          'Use clean seed and resistant/tolerant varieties.',
          'Control mites and stem insects that wound the boot.',
          'Avoid excess nitrogen and very dense planting; balance with potassium.',
          'Seed treatment with Pseudomonas fluorescens / Trichoderma.',
        ],
        chemical: [
          'Foliar carbendazim, mancozeb or a propiconazole-type triazole.',
          'Combine with an acaricide/insecticide if mites or bugs are wounding the boot.',
        ],
        application: [
          'Spray at the boot-leaf stage, just before the panicle emerges — the protective window.',
          'Aim spray at the top sheath/boot; repeat once at early heading if humid.',
          'Treat seed before sowing to lower the carry-over from previous crops.',
        ],
      },
    },

    {
      id: 'tungro',
      name: 'Rice Tungro',
      shortName: 'Tungro',
      pathogenType: 'Virus (insect-transmitted)',
      pathogen: 'RTBV + RTSV — vectored by the green leafhopper (Nephotettix virescens)',
      images: [
        '/diseases/paddy/tungro_1.jpeg',
        '/diseases/paddy/tungro_2.jpeg',
      ],
      affectedStages: ['seedling', 'tillering'],
      cause:
        'A pair of viruses — Rice Tungro Bacilliform Virus (RTBV) and Rice Tungro Spherical Virus (RTSV) — that cannot move on their own and depend entirely on a leafhopper to carry them.',
      transmission: {
        transmitted: true,
        routes: [
          'Green leafhopper (Nephotettix virescens) is the main vector',
          'Spread in a semi-persistent way — the insect transmits soon after feeding but does not pass it to its eggs',
          'Carried from infected ratoons, volunteer rice and nearby infected fields',
        ],
      },
      originSpread:
        'The cycle is insect-driven. A green leafhopper feeds on a tungro-infected plant, picks up both viruses, then injects them while feeding on healthy plants — there is NO seed or soil spread. Infected plants show orange-to-yellow discolouration starting at the leaf tip and moving down the margin, with stunting and reduced tillering; early infection at the seedling/tillering stage is the most damaging. Outbreaks track leafhopper population peaks, staggered planting and a continuous supply of green host plants.',
      management: {
        organic: [
          'Manage the vector, not just the virus — grow leafhopper-resistant / tungro-tolerant varieties.',
          'Synchronise planting across the area and keep a rice-free fallow to break the insect cycle.',
          'Remove infected plants, ratoons and volunteer rice early; conserve natural enemies (spiders, mirid bugs).',
          'Avoid early-season insecticide overuse that kills the natural predators of the leafhopper.',
        ],
        chemical: [
          'Seedling-box / nursery treatment with a systemic insecticide (e.g. imidacloprid) to protect young plants.',
          'Need-based foliar insecticide against the green leafhopper when monitoring shows it crossing threshold.',
        ],
        application: [
          'There is no cure for the virus — all action targets the leafhopper, especially in the first 30–40 days.',
          'Protect the nursery and just-transplanted crop, the stage when infection hurts most.',
          'Spray only when leafhopper counts cross the local threshold; rotate insecticide groups to avoid resistance.',
        ],
      },
    },
  ],
}
