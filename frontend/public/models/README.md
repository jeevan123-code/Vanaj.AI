# 3D Models — drop your Meshy.ai exports here

Each crop has its own folder, with one `.glb` file per growth stage.

```
public/models/
  paddy/
    seedling.glb
    tillering.glb
    heading.glb
    mature.glb
  wheat/   (later)
  cotton/  (later)
```

## How the app loads them
- The growth-stage section currently renders a **procedural placeholder plant**
  (`src/components/PlantModel.jsx`) so the scroll animation works before the real
  models exist.
- To switch to real Meshy.ai models, open `src/components/StageScene.jsx` and
  follow the clearly-marked `// TODO: REAL MODEL` block — uncomment the
  `useGLTF` loader and remove the placeholder. The file paths above already match
  `stage.model` in `src/data/paddy.js`.

## Export settings from Meshy.ai
- Format: **GLB** (binary glTF — single file, textures embedded)
- Keep each model centred near the origin and roughly 1–2 units tall so the
  shared camera framing works across stages.
