#!/usr/bin/env python3
"""
Extract, optimize, and catalog all creative assets for Dizzire Silk and Sarees.
Generates:
- 50+ WebP high-resolution assets organized in functional folders
- Matching thumbnails
- Complete asset manifest JSON (both in public/portfolio/dizzire/ and src/data/dizzire.json)
"""

import os
import json
from PIL import Image

BASE_DIR = "public/portfolio/dizzire"
GUIDELINES_DIR = "portfolio-source-assets/DIZZIRE_BRAND_GUIDLINES"
LOGO_OPTIONS_DIR = "portfolio-source-assets/DEZZIRE_FINAL_LOGO_copy"

# Ensure all subdirectories exist
categories = [
    "hero",
    "fashion-campaigns",
    "logo-explorations",
    "logo-applications",
    "colour-and-typography",
    "brand-patterns",
    "billboards",
    "storefront",
    "shopping-bags",
    "staff-branding",
    "social-media",
    "stationery",
    "original-compositions",
    "thumbnails"
]

for cat in categories:
    os.makedirs(os.path.join(BASE_DIR, cat), exist_ok=True)

manifest = []
gallery_index = 0

def save_image_asset(img, category, slug, title, description, source_doc, source_page, original_ref=None, crop_box=None, featured=False):
    global gallery_index
    gallery_index += 1
    
    out_dir = os.path.join(BASE_DIR, category)
    filename = f"{slug}.webp"
    file_path = os.path.join(out_dir, filename)
    
    # Resize if extremely large to prevent browser crash, but keep super high fidelity (max width 2800)
    w, h = img.size
    max_w = 2800
    if w > max_w:
        new_h = int(h * (max_w / w))
        img_to_save = img.resize((max_w, new_h), Image.Resampling.LANCZOS)
    else:
        img_to_save = img
        
    img_to_save.save(file_path, "WEBP", quality=90)
    
    # Thumbnail (width ~600)
    thumb_w = 600
    thumb_h = int(img_to_save.height * (thumb_w / img_to_save.width))
    thumb_img = img_to_save.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    thumb_filename = f"{slug}-thumb.webp"
    thumb_path = os.path.join(BASE_DIR, "thumbnails", thumb_filename)
    thumb_img.save(thumb_path, "WEBP", quality=82)
    
    entry = {
        "id": slug,
        "filename": filename,
        "title": title,
        "description": description,
        "category": category,
        "dimensions": {
            "width": img_to_save.width,
            "height": img_to_save.height,
            "aspectRatio": round(img_to_save.width / img_to_save.height, 3)
        },
        "sourcePdf": source_doc,
        "sourcePage": source_page,
        "originalImageRef": original_ref,
        "cropCoordinates": crop_box,
        "featured": featured,
        "galleryOrder": gallery_index,
        "src": f"/portfolio/dizzire/{category}/{filename}",
        "thumbnail": f"/portfolio/dizzire/thumbnails/{thumb_filename}"
    }
    manifest.append(entry)
    print(f"[{gallery_index:02d}] {category}/{filename:40} ({img_to_save.width}x{img_to_save.height})")
    return entry

print("=== 1. HERO SECTION ===")
# Saree model in red silk
im_hero1 = Image.open(f"{GUIDELINES_DIR}/page_07_img_04_205.jpeg")
save_image_asset(im_hero1, "hero", "dizzire-hero-campaign-saree",
                 "Elegance Woven Into Every Thread",
                 "Cinematic fashion campaign portrait showcasing Dizzire's royal crimson silk saree, intricate zari border, and refined Indian textile heritage.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_04_205.jpeg", featured=True)

im_hero2 = Image.open(f"{GUIDELINES_DIR}/page_07_img_05_202.jpeg")
save_image_asset(im_hero2, "hero", "dizzire-hero-elegance-editorial",
                 "Modern Silk Editorial",
                 "Contemporary editorial lifestyle portrait capturing the tactile drape and timeless craftsmanship of Dizzire bridal silk.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_05_202.jpeg", featured=True)

print("=== 2. FASHION CAMPAIGNS ===")
save_image_asset(im_hero1, "fashion-campaigns", "saree-campaign-crimson-red-editorial",
                 "Crimson Saree Campaign Portrait",
                 "Signature campaign photography featuring deep crimson silk with woven gold temple motifs.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_04_205.jpeg", featured=True)

save_image_asset(im_hero2, "fashion-campaigns", "saree-campaign-editorial-lifestyle",
                 "Contemporary Silk Drape & Form",
                 "High-fashion editorial highlighting the fluidity, graceful fall, and understated luxury of pure handwoven silk.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_05_202.jpeg", featured=True)

im_stair = Image.open(f"{GUIDELINES_DIR}/page_02_img_02_4.jpeg")
save_image_asset(im_stair, "fashion-campaigns", "saree-campaign-staircase-regal",
                 "Architectural Heritage & Silk",
                 "Regal fashion portrait set on a classic architectural staircase, embodying heritage grandeur and refined poise.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 2, "page_02_img_02_4.jpeg", featured=True)

im_gold = Image.open(f"{GUIDELINES_DIR}/page_06_img_03_73.jpeg")
save_image_asset(im_gold, "fashion-campaigns", "saree-campaign-golden-ivory-grace",
                 "Golden Ivory Silk Collection",
                 "Ethereal editorial visual celebrating warm ivory tones and subtle champagne silk sheen.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 6, "page_06_img_03_73.jpeg", featured=True)

im_purple = Image.open(f"{GUIDELINES_DIR}/page_06_img_05_74.jpeg")
save_image_asset(im_purple, "fashion-campaigns", "saree-campaign-purple-drape-elegance",
                 "Royal Purple & Magenta Silk Drape",
                 "Rich jewel-toned magenta silk saree capturing tactile folds and intricate metallic embroidery.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 6, "page_06_img_05_74.jpeg", featured=True)

im_royal = Image.open(f"{GUIDELINES_DIR}/page_08_img_01_98.jpeg")
save_image_asset(im_royal, "fashion-campaigns", "saree-campaign-royal-heritage-portrait",
                 "Heritage Bridal Silk Saree",
                 "Classic bridal textile campaign highlighting ceremonial richness, ornate pallu, and festive warmth.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 8, "page_08_img_01_98.jpeg", featured=True)

im_port = Image.open(f"{GUIDELINES_DIR}/page_01_img_01_227.jpeg")
save_image_asset(im_port, "fashion-campaigns", "saree-campaign-portrait-warmth",
                 "Warmth & Individuality in Silk",
                 "Intimate portrait celebrating individuality and personal grace through carefully curated Indian silk.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 1, "page_01_img_01_227.jpeg")

im_macro = Image.open(f"{GUIDELINES_DIR}/page_03_img_02_9.jpeg")
save_image_asset(im_macro, "fashion-campaigns", "saree-campaign-textile-texture-macro",
                 "Tactile Weave & Fabric Detail",
                 "Close-up macro study of fine silk threads, natural slub texture, and radiant yarn luster.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 3, "page_03_img_02_9.jpeg")

# Headline campaign visual from Page 2
p2_rendered = Image.open(f"{GUIDELINES_DIR}/page_02_rendered.png")
p2_crop = p2_rendered.crop((0, 0, 3840, 2400))
save_image_asset(p2_crop, "fashion-campaigns", "saree-campaign-elegance-headline",
                 "Campaign Headline: Elegance Woven Into Every Thread",
                 "Signature brand campaign typographic lockup and core statement establishing Dizzire's identity.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 2, crop_box=[0, 0, 3840, 2400])

print("=== 3. LOGO EXPLORATIONS (4 DIRECTIONS) ===")
# Crimson silk background texture
im_silk = Image.open(f"{LOGO_OPTIONS_DIR}/page_01_img_01_145.jpeg")
save_image_asset(im_silk, "logo-explorations", "silk-fabric-texture-rich-crimson",
                 "Pure Crimson Silk Fabric Texture",
                 "4K tactile rich crimson silk background showcasing undulating folds, highlights, and luxurious drape.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 1, "page_01_img_01_145.jpeg")

# OPTION 1
im_opt1_mark = Image.open(f"{LOGO_OPTIONS_DIR}/page_03_img_01_105.jpeg")
save_image_asset(im_opt1_mark, "logo-explorations", "logo-option-01-primary-silk",
                 "Option 01 — Primary Logo on Crimson Silk",
                 "Direction 1: Interlocking geometric DI monogram paired with elegant serif typography over lustrous crimson silk.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 3, "page_03_img_01_105.jpeg", featured=True)

lo_p04 = Image.open(f"{LOGO_OPTIONS_DIR}/page_04_rendered.png")
save_image_asset(lo_p04, "logo-explorations", "logo-option-01-variations",
                 "Option 01 — Color & Contrast Variations",
                 "Direction 1 executed across white reverse lockups, crimson on beige, and monochrome reproduction suites.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 4)

im_opt1_bb = Image.open(f"{LOGO_OPTIONS_DIR}/page_05_img_02_23.jpeg")
save_image_asset(im_opt1_bb, "logo-explorations", "logo-option-01-billboard",
                 "Option 01 — Outdoor Billboard Mockup",
                 "Large-format highway billboard visualization showcasing Direction 1 with prominent brandmark presence.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 5, "page_05_img_02_23.jpeg")

# OPTION 2
im_opt2_mark = Image.open(f"{LOGO_OPTIONS_DIR}/page_07_img_01_116.jpeg")
save_image_asset(im_opt2_mark, "logo-explorations", "logo-option-02-primary-silk",
                 "Option 02 — Primary Logo on Crimson Silk",
                 "Direction 2: Fluid calligraphic ligature reflecting the gentle drape of silk pallus and traditional temple motifs.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 7, "page_07_img_01_116.jpeg", featured=True)

lo_p08 = Image.open(f"{LOGO_OPTIONS_DIR}/page_08_rendered.png")
save_image_asset(lo_p08, "logo-explorations", "logo-option-02-variations",
                 "Option 02 — Color & Contrast Variations",
                 "Direction 2 variations tested on light champagne and deep maroon fields for versatile packaging and signage.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 8)

im_opt2_bb = Image.open(f"{LOGO_OPTIONS_DIR}/page_09_img_02_123.jpeg")
save_image_asset(im_opt2_bb, "logo-explorations", "logo-option-02-billboard",
                 "Option 02 — Urban Billboard Mockup",
                 "Urban street-level outdoor advertising visualization for Direction 2.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 9, "page_09_img_02_123.jpeg")

# OPTION 3
lo_p11 = Image.open(f"{LOGO_OPTIONS_DIR}/page_11_rendered.png")
save_image_asset(lo_p11, "logo-explorations", "logo-option-03-primary-white",
                 "Option 03 — Primary Logo on Light Beige",
                 "Direction 3: Stylized DI emblem paired with balanced classical typography on warm light beige stock.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 11)

im_opt3_mark = Image.open(f"{LOGO_OPTIONS_DIR}/page_12_img_02_116.jpeg")
save_image_asset(im_opt3_mark, "logo-explorations", "logo-option-03-primary-silk",
                 "Option 03 — Primary Logo on Crimson Silk",
                 "Direction 3 rendered on rich red silk background, showing premium contrast and tactile depth.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 12, "page_12_img_02_116.jpeg", featured=True)

lo_p13 = Image.open(f"{LOGO_OPTIONS_DIR}/page_13_rendered.png")
save_image_asset(lo_p13, "logo-explorations", "logo-option-03-variations",
                 "Option 03 — Color Variations",
                 "Direction 3 color matrix across primary red, champagne gold, and reversed white lockups.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 13)

im_opt3_bb1 = Image.open(f"{LOGO_OPTIONS_DIR}/page_14_img_01_68.jpeg")
save_image_asset(im_opt3_bb1, "logo-explorations", "logo-option-03-billboard-day",
                 "Option 03 — Daylight Urban Billboard",
                 "Architectural city billboard visualization of Direction 3 under bright natural daylight.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 14, "page_14_img_01_68.jpeg")

im_opt3_bb2 = Image.open(f"{LOGO_OPTIONS_DIR}/page_15_img_01_73.jpeg")
save_image_asset(im_opt3_bb2, "logo-explorations", "logo-option-03-billboard-highway",
                 "Option 03 — Twilight Highway Billboard",
                 "Atmospheric highway billboard mockup of Direction 3 at dusk with illuminated display.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 15, "page_15_img_01_73.jpeg")

# OPTION 4
im_opt4_mark = Image.open(f"{LOGO_OPTIONS_DIR}/page_17_img_01_116.jpeg")
save_image_asset(im_opt4_mark, "logo-explorations", "logo-option-04-primary-silk",
                 "Option 04 — Primary Logo on Crimson Silk",
                 "Direction 4: Architectural serif letterforms paired with contemporary floral desire star icon.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 17, "page_17_img_01_116.jpeg", featured=True)

lo_p18 = Image.open(f"{LOGO_OPTIONS_DIR}/page_18_rendered.png")
save_image_asset(lo_p18, "logo-explorations", "logo-option-04-variations",
                 "Option 04 — Color Variations",
                 "Direction 4 lockup options in high-contrast palettes for print, digital, and retail applications.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 18)

im_opt4_bb = Image.open(f"{LOGO_OPTIONS_DIR}/page_19_img_02_90.jpeg")
save_image_asset(im_opt4_bb, "logo-explorations", "logo-option-04-billboard",
                 "Option 04 — Illuminated Night Billboard",
                 "Vibrant night cityscape billboard mockup illustrating high visibility and premium prestige.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 19, "page_19_img_02_90.jpeg")

print("=== 4. LOGO APPLICATIONS & GUIDELINES ===")
# Guideline page 3: DI + Star = Logo mark concept breakdown
p3_rendered = Image.open(f"{GUIDELINES_DIR}/page_03_rendered.png")
crop_concept = p3_rendered.crop((0, 2400, 3840, 7316))
save_image_asset(crop_concept, "logo-applications", "master-logo-symbol-concept-equation",
                 "Logo Concept: Stylized 'di' + Desire Star",
                 "Conceptual breakdown: Stylized 'di' curves representing silk draping combined with the desire star ('Crafted from your wishes').",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 3, crop_box=[0, 2400, 3840, 7316], featured=True)

# Guideline page 4: Primary & Secondary Logo + Safe Space
p4_rendered = Image.open(f"{GUIDELINES_DIR}/page_04_rendered.png")
crop_suite = p4_rendered.crop((0, 2000, 3840, 7200))
save_image_asset(crop_suite, "logo-applications", "master-logo-primary-secondary-suite",
                 "Primary & Secondary Logo System",
                 "Full lockup specifications including horizontal, stacked, and secondary configurations with safe space grids.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 4, crop_box=[0, 2000, 3840, 7200], featured=True)

crop_safe = p4_rendered.crop((0, 7200, 3840, 12589))
save_image_asset(crop_safe, "logo-applications", "master-logo-trademark-registration-bw",
                 "Trademark, Registration & B&W Reproduction",
                 "Rules for high-contrast black & white reproduction, foiling, embossing, embroidery, and legal registration.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 4, crop_box=[0, 7200, 3840, 12589])

# Guideline page 5: Icon usage and Incorrect usage matrix
p5_rendered = Image.open(f"{GUIDELINES_DIR}/page_05_rendered.png")
crop_icon = p5_rendered.crop((0, 0, 3840, 1600))
save_image_asset(crop_icon, "logo-applications", "master-logo-icon-standalone-usage",
                 "Standalone Icon Usage",
                 "Approved standalone application of the circular desire star emblem for wax seals, charms, and social avatars.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 5, crop_box=[0, 0, 3840, 1600])

crop_incorrect = p5_rendered.crop((0, 1600, 3840, 4780))
save_image_asset(crop_incorrect, "logo-applications", "master-logo-incorrect-usage-matrix",
                 "Prohibited Identity Usage Rules",
                 "Rigorous brand standards prohibiting outline distortion, drop shadows, non-palette colors, tilting, or element breaking.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 5, crop_box=[0, 1600, 3840, 4780], featured=True)

print("=== 5. COLOUR & TYPOGRAPHY ===")
p6_rendered = Image.open(f"{GUIDELINES_DIR}/page_06_rendered.png")

crop_cormorant = p6_rendered.crop((0, 0, 3840, 3000))
save_image_asset(crop_cormorant, "colour-and-typography", "font-specimen-cormorant-primary",
                 "Primary Typeface — Cormorant",
                 "Cormorant brings refined, heritage elegance that complements Dizzire silk sarees, reflecting timeless craftsmanship.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 6, crop_box=[0, 0, 3840, 3000], featured=True)

crop_palette = p6_rendered.crop((0, 3000, 3840, 7400))
save_image_asset(crop_palette, "colour-and-typography", "color-palette-board",
                 "Official 6-Tone Brand Color System",
                 "CMYK documented color system: Primary Red (#C92028), Light Beige (#ECE9E3), Pure White (#FFFFFF), Warm Champagne (#F8E8CD), Deep Maroon (#6A1013), and Crimson (#A21E24).",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 6, crop_box=[0, 3000, 3840, 7400], featured=True)

crop_montserrat = p6_rendered.crop((0, 10000, 3840, 13636))
save_image_asset(crop_montserrat, "colour-and-typography", "font-specimen-montserrat-secondary",
                 "Secondary Typeface — Montserrat",
                 "Montserrat provides clean, modern geometric contrast for paragraph text, ensuring readability across all digital and print touchpoints.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 6, crop_box=[0, 10000, 3840, 13636], featured=True)

print("=== 6. BRAND PATTERNS ===")
im_pat1 = Image.open(f"{GUIDELINES_DIR}/page_07_img_01_85.jpeg")
save_image_asset(im_pat1, "brand-patterns", "pattern-geometric-repeating-crimson",
                 "Geometric Textile Lattice Pattern",
                 "Precision repeating diamond and star tessellation inspired by traditional Indian silk weaving frames.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_01_85.jpeg", featured=True)

im_pat2 = Image.open(f"{GUIDELINES_DIR}/page_07_img_02_86.jpeg")
save_image_asset(im_pat2, "brand-patterns", "pattern-traditional-saree-embroidery",
                 "Intricate Saree Floral Motif",
                 "Ornate floral jaal pattern drawing from Kerala silk borders and classical heritage embroidery.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_02_86.jpeg", featured=True)

im_pat3 = Image.open(f"{GUIDELINES_DIR}/page_07_img_03_87.jpeg")
save_image_asset(im_pat3, "brand-patterns", "pattern-gold-jacquard-weave",
                 "Gold Jacquard Weave Detail",
                 "Tactile macro study of gold zari threads interwoven with fine silk weft yarns.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 7, "page_07_img_03_87.jpeg")

print("=== 7. OUTDOOR ADVERTISING (BILLBOARDS) ===")
# All 6 billboard mockups
save_image_asset(im_opt1_bb, "billboards", "billboard-option-01-urban",
                 "Urban Billboard Mockup (Option 01)",
                 "City outdoor advertising visualization featuring Option 1 lockup over crimson silk.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 5, "page_05_img_02_23.jpeg", featured=True)

save_image_asset(im_opt2_bb, "billboards", "billboard-option-02-street",
                 "Street Billboard Mockup (Option 02)",
                 "Large format street-level billboard visualization featuring Option 2.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 9, "page_09_img_02_123.jpeg")

save_image_asset(im_opt3_bb1, "billboards", "billboard-option-03-cityscape-day",
                 "Daylight Cityscape Billboard (Option 03)",
                 "Urban roadside billboard presentation of Option 3 under natural ambient sunlight.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 14, "page_14_img_01_68.jpeg", featured=True)

save_image_asset(im_opt3_bb2, "billboards", "billboard-option-03-highway-dusk",
                 "Highway Twilight Billboard (Option 03)",
                 "Expressway illuminated billboard visualization against dramatic dusk skies.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 15, "page_15_img_01_73.jpeg")

save_image_asset(im_opt4_bb, "billboards", "billboard-option-04-illuminated-night",
                 "Night Cityscape Billboard (Option 04)",
                 "High-impact night illuminated billboard mockup showcasing Option 4.",
                 "DEZZIRE_FINAL LOGO copy.pdf", 19, "page_19_img_02_90.jpeg", featured=True)

im_bb_guide = Image.open(f"{GUIDELINES_DIR}/page_04_img_02_23.jpeg")
save_image_asset(im_bb_guide, "billboards", "billboard-master-brand-guideline",
                 "Brand Guideline Master Campaign Billboard",
                 "The primary brand identity billboard visualization documented in the master brand guidelines.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 4, "page_04_img_02_23.jpeg", featured=True)

print("=== 8. STOREFRONT & RETAIL EXPERIENCE ===")
im_sf_new = Image.open(f"{GUIDELINES_DIR}/page_08_img_02_99.jpeg")
save_image_asset(im_sf_new, "storefront", "storefront-new-concept-minimal-alterations",
                 "Storefront Concept: Minimal Alterations",
                 "Modernized exterior architectural concept with refined dark fascia, warm lighting, and illuminated brand signage.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 8, "page_08_img_02_99.jpeg", featured=True)

im_sf_exist = Image.open(f"{GUIDELINES_DIR}/page_08_img_03_206.jpeg")
save_image_asset(im_sf_exist, "storefront", "storefront-existing-exterior",
                 "Existing Storefront Architecture",
                 "Documentation of Dizzire's existing retail flagship building in Kothamangalam, Kerala prior to full brand transformation.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 8, "page_08_img_03_206.jpeg", featured=True)

p8_rendered = Image.open(f"{GUIDELINES_DIR}/page_08_rendered.png")
crop_sf_board = p8_rendered.crop((0, 2700, 3840, 7167))
save_image_asset(crop_sf_board, "storefront", "storefront-retail-facade-board",
                 "Retail Architecture Evolution Board",
                 "Side-by-side design study comparing existing retail presence with the modern architectural upgrade concept.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 8, crop_box=[0, 2700, 3840, 7167])

print("=== 9. PACKAGING & SHOPPING BAGS ===")
im_bag_red = Image.open(f"{GUIDELINES_DIR}/page_09_img_02_104.jpeg")
save_image_asset(im_bag_red, "shopping-bags", "shopping-bag-luxury-crimson-red",
                 "Crimson Luxury Shopping Carry Bag",
                 "Heavyweight luxury carry bag in rich crimson with gold rope handles and gold foil stamped emblem.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 9, "page_09_img_02_104.jpeg", featured=True)

im_bag_gold = Image.open(f"{GUIDELINES_DIR}/page_09_img_09_111.jpeg")
save_image_asset(im_bag_gold, "shopping-bags", "shopping-bag-champagne-gold-luxury",
                 "Champagne Gold Luxury Carry Bag",
                 "Secondary shopping bag concept in warm champagne ivory with crimson branding and woven handles.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 9, "page_09_img_09_111.jpeg", featured=True)

im_bag_side = Image.open(f"{GUIDELINES_DIR}/page_09_img_10_112.jpeg")
save_image_asset(im_bag_side, "shopping-bags", "shopping-bag-side-perspective-gusset",
                 "Carry Bag Gusset & Tactile Finish",
                 "Perspective detail showing side gusset repeat pattern, reinforced base, and premium matte laminate finish.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 9, "page_09_img_10_112.jpeg")

p9_rendered = Image.open(f"{GUIDELINES_DIR}/page_09_rendered.png")
crop_diecut = p9_rendered.crop((0, 5600, 3840, 11113))
save_image_asset(crop_diecut, "shopping-bags", "shopping-bag-flat-diecut-patterns",
                 "Packaging Die-Cut & Dimension Specs",
                 "Technical packaging layouts, folding guides, and foil stamping placements across small, medium, and large bag sizes.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 9, crop_box=[0, 5600, 3840, 11113])

print("=== 10. STAFF BRANDING ===")
im_staff_uni = Image.open(f"{GUIDELINES_DIR}/page_10_img_02_148.jpeg")
save_image_asset(im_staff_uni, "staff-branding", "staff-uniforms-manager-and-general",
                 "Hospitality Staff Attire: Manager & Sales",
                 "Tailored formal uniforms: crisp manager-level suiting and refined retail associates' uniforms with embroidered crests.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 10, "page_10_img_02_148.jpeg", featured=True)

im_staff_tag = Image.open(f"{GUIDELINES_DIR}/page_10_img_03_150.jpeg")
save_image_asset(im_staff_tag, "staff-branding", "staff-identification-badges",
                 "Staff Identification Badge Suite",
                 "Tiered identification badges for Senior Management, Senior Sales Representatives, and Retail Staff.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 10, "page_10_img_03_150.jpeg", featured=True)

print("=== 11. SOCIAL MEDIA & DIGITAL CREATIVES ===")
im_soc_4x5 = Image.open(f"{GUIDELINES_DIR}/page_10_img_04_152.jpeg")
save_image_asset(im_soc_4x5, "social-media", "social-creative-portrait-4x5",
                 "Social Media Campaign: 4:5 Feed Portrait",
                 "Social feed creative featuring signature campaign photography and 'Elegance Woven Into Every Thread' typography.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 10, "page_10_img_04_152.jpeg", featured=True)

im_soc_9x16 = Image.open(f"{GUIDELINES_DIR}/page_10_img_05_154.jpeg")
save_image_asset(im_soc_9x16, "social-media", "social-creative-story-9x16",
                 "Social Media Campaign: 9:16 Story/Reel",
                 "Vertical full-screen story layout with immersive silk drape visual and prominent call to action.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 10, "page_10_img_05_154.jpeg", featured=True)

im_soc_multi = Image.open(f"{GUIDELINES_DIR}/page_10_img_07_156.jpeg")
save_image_asset(im_soc_multi, "social-media", "social-creative-landscape-and-square",
                 "Social Media Campaign: 16:9 & 1:1 Suite",
                 "Coordinated campaign system spanning horizontal banner layouts and 1:1 square promotional tiles.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 10, "page_10_img_07_156.jpeg", featured=True)

print("=== 12. STATIONERY ===")
im_stat_suite = Image.open(f"{GUIDELINES_DIR}/page_11_img_03_162.jpeg")
save_image_asset(im_stat_suite, "stationery", "stationery-corporate-suite-complete",
                 "Executive Correspondence Stationery Suite",
                 "Comprehensive stationery system: custom square flap envelopes, watermark letterhead, and gold foiled visiting cards.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 11, "page_11_img_03_162.jpeg", featured=True)

im_stat_det = Image.open(f"{GUIDELINES_DIR}/page_11_img_04_163.jpeg")
save_image_asset(im_stat_det, "stationery", "stationery-letterhead-visiting-card-detail",
                 "Visiting Card & Cotton Paper Finish",
                 "Tactile macro study showing 600gsm textured cotton stock, blind debossing, and metallic edge gilding.",
                 "DIZZIRE_BRAND GUIDLINES.pdf", 11, "page_11_img_04_163.jpeg")

print("=== 13. MASTER ARCHIVE ARTBOARDS ===")
# 11 brand guidelines pages
for p in range(1, 12):
    im_p = Image.open(f"{GUIDELINES_DIR}/page_{p:02d}_rendered.png")
    # Resize width to 1600 for efficient high-res display
    w = 1600
    h = int(im_p.height * (w / im_p.width))
    im_resized = im_p.resize((w, h), Image.Resampling.LANCZOS)
    save_image_asset(im_resized, "original-compositions", f"guideline-page-{p:02d}-overview",
                     f"Master Brand Guideline — Page {p:02d}",
                     f"Full original artboard reproduction of Page {p:02d} from the official DIZZIRE Brand Guidelines.",
                     "DIZZIRE_BRAND GUIDLINES.pdf", p)

# 20 logo options pages
for p in range(1, 21):
    im_p = Image.open(f"{LOGO_OPTIONS_DIR}/page_{p:02d}_rendered.png")
    w = 1920
    h = int(im_p.height * (w / im_p.width))
    im_resized = im_p.resize((w, h), Image.Resampling.LANCZOS)
    save_image_asset(im_resized, "original-compositions", f"logo-options-page-{p:02d}-overview",
                     f"Logo Exploration Archive — Page {p:02d}",
                     f"Complete 4K widescreen artboard of Page {p:02d} from the DEZZIRE Logo Exploration document.",
                     "DEZZIRE_FINAL LOGO copy.pdf", p)

# Save master manifest
manifest_path = os.path.join(BASE_DIR, "manifest.json")
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)

# Also write to src/data/dizzire.json
src_data_path = "src/data/dizzire.json"
with open(src_data_path, "w") as f:
    json.dump(manifest, f, indent=2)

print(f"\nSuccessfully generated {len(manifest)} assets and manifest at {manifest_path} and {src_data_path}!")
