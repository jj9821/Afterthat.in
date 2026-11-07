import os
import json
from PIL import Image

BASE_DIR = "public/portfolio/milli-flame"
TMP_DIR = "/tmp/milli_300dpi"

# Ensure all subdirectories exist
subdirs = [
    "hero", "logo", "identity", "colour-and-typography",
    "food-photography", "packaging", "brand-patterns",
    "storefront", "uniforms", "stationery", "digital",
    "collages-original", "thumbnails"
]
for sd in subdirs:
    os.makedirs(os.path.join(BASE_DIR, sd), exist_ok=True)

manifest = []

def save_asset(page_num, box, category, filename, title, caption, featured=False):
    src_path = f"{TMP_DIR}/page_{page_num:02d}.png"
    im = Image.open(src_path)
    
    # Crop
    crop_im = im.crop(box)
    
    # Save optimized webp
    rel_path = f"{category}/{filename}.webp"
    full_path = os.path.join(BASE_DIR, rel_path)
    
    # Determine quality
    quality = 90 if "food" in category or "hero" in category else 88
    crop_im.save(full_path, "WEBP", quality=quality, method=6)
    
    # Create thumbnail
    thumb_filename = f"{filename}-thumb.webp"
    thumb_rel_path = f"thumbnails/{thumb_filename}"
    thumb_full_path = os.path.join(BASE_DIR, thumb_rel_path)
    
    # Thumbnail width 600px
    thumb_w = 600
    thumb_h = int(crop_im.height * (thumb_w / crop_im.width))
    thumb_im = crop_im.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    thumb_im.save(thumb_full_path, "WEBP", quality=82)
    
    asset_id = filename
    item = {
        "id": asset_id,
        "filename": f"{filename}.webp",
        "title": title,
        "caption": caption,
        "category": category,
        "src": f"/portfolio/milli-flame/{rel_path}",
        "thumbnail": f"/portfolio/milli-flame/{thumb_rel_path}",
        "dimensions": f"{crop_im.width}x{crop_im.height}",
        "width": crop_im.width,
        "height": crop_im.height,
        "aspectRatio": round(crop_im.width / crop_im.height, 3),
        "sourcePdfPage": page_num,
        "cropBox": list(box),
        "featured": featured,
        "galleryOrder": len(manifest) + 1
    }
    manifest.append(item)
    print(f"[{len(manifest):02d}] {rel_path:45s} ({crop_im.width}x{crop_im.height})")
    return item

print("=== 1. HERO SECTION ===")
save_asset(1, (0, 0, 2481, 2045), "hero", "restaurant-interior-booth",
           "Parisian Dining Atmosphere",
           "Understated luxury in modern Parisian dining: turquoise leather booths, fluted architectural glass, and the circular flame seal.",
           featured=True)

save_asset(2, (0, 6266, 2481, 7680), "hero", "bistro-window-barista",
           "On-Duty Bistro Barista",
           "Milli Flame barista in cyan apron and cap positioned at the Parisian bistro street window with etched glass insignia.",
           featured=True)

print("=== 2. LOGO & IDENTITY ===")
save_asset(4, (0, 0, 2481, 1945), "logo", "primary-logo-tropical-cyan",
           "Primary Logo on Tropical Cyan",
           "White primary logo lockup and circular flame emblem grounded on vibrant Tropical Cyan (#05AAC2).",
           featured=True)

save_asset(4, (20, 1945, 1230, 3458), "logo", "primary-logo-riviera-teal",
           "Primary Logo on Riviera Teal",
           "Primary brandmark reversed to white on Riviera Teal (#32AFA4).")

save_asset(4, (1250, 1945, 2461, 3458), "logo", "primary-logo-true-gold",
           "Primary Logo on True Gold",
           "Primary brandmark reversed to white on radiant True Gold (#F2D050).")

save_asset(4, (0, 3458, 2481, 4890), "logo", "secondary-logo-quetzal-green",
           "Secondary Logo in Quetzal Green",
           "Secondary horizontal brandmark rendered in Quetzal Green (#2C6667) for editorial and packaging disclosures.")

save_asset(3, (0, 2340, 2481, 3470), "logo", "circular-emblem-color-variations",
           "Circular Emblem Color Suite",
           "The circular flame seal executed across Black, Deep Blue, True Gold, and Quetzal Green.")

save_asset(3, (0, 3470, 2481, 4410), "identity", "logo-construction-equation",
           "Symbolic Construction Equation",
           "Visual breakdown: Continuous-line Flame + Plate/Cutlery Frame + 'Petite Flamme. Grand Goût.' motto.")

save_asset(4, (0, 4890, 2481, 5750), "identity", "logo-safe-area-grid",
           "Safe Area & Clear-Space Specification",
           "Precision architectural isolation grid maintaining proportional clarity and legibility across all mediums.")

save_asset(4, (0, 5750, 2481, 6398), "identity", "logo-minimum-size-specs",
           "Minimum Size Usage Guidelines",
           "Prescribed physical and digital reproduction thresholds (60px emblem, 274px master lockup).")

save_asset(4, (0, 6398, 2481, 7098), "identity", "logo-incorrect-usage-matrix",
           "Prohibited Usage Rules",
           "Rigorous identity standards prohibiting distortion, outline treatments, non-palette colors, and drop shadows.")

print("=== 3. COLOUR & TYPOGRAPHY ===")
save_asset(5, (0, 0, 2481, 3630), "colour-and-typography", "color-palette-board",
           "Documented Color System Board",
           "The 5-tone palette architecture: Pure White, Tropical Cyan, Quetzal Green, Riviera Teal, and True Gold.",
           featured=True)

save_asset(5, (20, 40, 2461, 1200), "colour-and-typography", "cheeseburger-macro-colour-hero",
           "Culinary Palette Integration",
           "Macro cheeseburger photography introducing the sensory warmth and culinary richness behind the palette.")

save_asset(5, (0, 3630, 2481, 4725), "colour-and-typography", "typography-specimen-board",
           "Typography Introduction Board",
           "Artisan bakery packaging, iced beverage, and open book setting the tone for clean, approachable typography.")

save_asset(5, (20, 4725, 2461, 6245), "colour-and-typography", "font-specimen-nexa",
           "Primary Typeface — NEXA",
           "Nexa typeface specimen in Regular, Light, and Extra Bold on True Gold background.")

save_asset(5, (20, 6245, 2461, 7475), "colour-and-typography", "font-specimen-montserrat",
           "Secondary Typeface — Montserrat",
           "Montserrat typeface specimen in Light, Medium, and Extra Bold on Tropical Cyan background.")

print("=== 4. BRAND PATTERNS ===")
save_asset(6, (40, 1250, 1230, 3415), "brand-patterns", "concentric-ripples-flame-teal",
           "Concentric Ripple Ring Pattern",
           "Riviera Teal pattern panel featuring hypnotic expanding concentric rings surrounding the circular flame emblem.",
           featured=True)

save_asset(6, (1250, 1250, 2441, 3415), "brand-patterns", "circular-emblem-wallpaper-gold",
           "Emblem Wallpaper on True Gold",
           "Repeating diagonal grid of white circular flame emblems over True Gold field.")

save_asset(6, (40, 40, 2441, 1250), "brand-patterns", "swirled-butter-gold-motto",
           "Artisanal Butter Swirl & Slogan",
           "Tactile cream/butter swirl encircled by gold French motto 'Petite Flamme. Grand Goût.'")

save_asset(6, (40, 3415, 2441, 4410), "brand-patterns", "horizontal-flame-brandmark-line",
           "Horizontal Flame Line Device",
           "Continuous linear brandmark device spanning Tropical Cyan backdrop.")

save_asset(10, (0, 3815, 1255, 5655), "brand-patterns", "brand-outro-fin-gold",
           "FIN. Outro Brand Artboard",
           "True Gold panel with clean typography marking the closure of the Parisian dining brand book.")

print("=== 5. FOOD & CULINARY PHOTOGRAPHY ===")
save_asset(2, (0, 0, 1300, 1395), "food-photography", "pasta-dining-terrace",
           "Sunlit Café Dining & Pasta",
           "Guest enjoying artisan pasta and chilled white wine on sunlit Parisian terrace table.",
           featured=True)

save_asset(2, (1300, 0, 2481, 1395), "food-photography", "teal-seal-lifestyle-texture",
           "Teal Lifestyle Texture & Emblem",
           "Riviera Teal textured dining backdrop featuring the centered circular white flame seal.")

save_asset(2, (0, 2738, 1240, 4134), "food-photography", "croissants-artisan-bakery",
           "Freshly Baked Artisanal Croissants",
           "Golden flaky croissants dusted with flour on craft bakery paper with branded circular seal sticker.",
           featured=True)

save_asset(2, (1240, 2738, 2481, 3450), "food-photography", "baguette-sliced-ceramic",
           "Sliced French Baguette",
           "Artisan crusty French baguette sliced on neutral ceramic plate with stitched linen.")

save_asset(2, (0, 4134, 1240, 6266), "food-photography", "savory-quiche-blue-table",
           "Artisan Savory Quiche",
           "Golden-baked savory quiche served on pale teal café table with Parisian bistro chairs.")

save_asset(2, (1240, 4134, 2481, 6266), "food-photography", "gourmet-burger-plate",
           "Milli Flame Gourmet Burger",
           "Brioche bun burger with melted cheddar, char-grilled beef patty, red onions, tomatoes, and golden fries.",
           featured=True)

save_asset(3, (1100, 0, 2481, 1640), "food-photography", "lattice-apple-pie",
           "Lattice Apple Pie & Wicker Setting",
           "Traditional golden lattice fruit pie on circular stone table beside classic Parisian wicker café chair.")

save_asset(3, (0, 1650, 2481, 2180), "food-photography", "roast-chicken-drumstick",
           "Flame-Roasted Chicken Drumsticks",
           "Glazed golden roast chicken drumsticks seared over open fire embodying flame-crafted flavor.")

save_asset(7, (0, 750, 1300, 2560), "food-photography", "strawberry-milkshakes-whipped-cream",
           "Handcrafted Strawberry Milkshakes",
           "Pair of strawberry milkshakes topped with whipped cream and sugar pearls held by guests.")

save_asset(8, (0, 0, 2481, 1650), "food-photography", "lemon-iced-beverage-coasters",
           "Chilled Iced Beverage & Coaster Set",
           "Chilled beverage with lemon slice resting atop branded concentric ripple absorbent drink coasters.")

save_asset(8, (1300, 7335, 2481, 8745), "food-photography", "breakfast-burger-egg-bacon",
           "Gourmet Breakfast Burger",
           "Brioche bun breakfast burger stacked with sunny-side fried egg, crispy bacon, hash brown, and melted cheese.")

save_asset(10, (1255, 3815, 2481, 5655), "food-photography", "tiramisu-dessert-ladyfingers",
           "Artisanal Cocoa Tiramisu",
           "Decadent cocoa-dusted tiramisu with fresh mint sprig, whole roasted coffee beans, and crisp ladyfingers.",
           featured=True)

save_asset(10, (0, 0, 2481, 2015), "food-photography", "brand-tone-burger-bite",
           "The Pure Indulgence of Taste",
           "Red-haired guest savoring gourmet burger framed by circular gold motto 'Petite Flamme. Grand Goût.'")

print("=== 6. PACKAGING & BRAND COLLATERALS ===")
save_asset(10, (0, 2080, 2481, 3815), "packaging", "takeaway-coffee-cups-cluster",
           "Concentric Ripple Takeaway Cups",
           "Cluster of cyan, teal, and sky blue paper takeaway coffee cups featuring ripple patterns and paper straws.",
           featured=True)

save_asset(8, (0, 7335, 1300, 8745), "packaging", "business-cards-wood-block",
           "Embossed Business Cards (Reverse)",
           "Cyan business cards stacked on architectural cedar grid block showing concentric ring pattern.")

save_asset(8, (0, 8750, 2481, 10420), "packaging", "business-card-front-mockup",
           "Corporate Business Card Front",
           "Minimalist white business card front mockup in Quetzal Green typography with subtle flame watermark.")

save_asset(5, (0, 3630, 1250, 4725), "packaging", "bakery-craft-bag-coffee",
           "Artisan Bakery Bag & Iced Latte",
           "Pastel cyan kraft bakery bag with white foil logo alongside iced beverage cup on wooden tabletop.")

print("=== 7. THE RESTAURANT EXPERIENCE & STOREFRONT ===")
save_asset(7, (0, 4105, 2481, 5500), "storefront", "storefront-facade-paris",
           "Parisian Exterior Storefront Facade",
           "Architectural exterior storefront in soft pink stone with large teal fascia board and window display.",
           featured=True)

save_asset(7, (0, 2565, 2481, 4105), "storefront", "cantilever-projection-lightbox",
           "Illuminated Cantilever Lightbox Sign",
           "Square illuminated cantilever projection blade sign in vibrant cyan mounted to outdoor brick wall.",
           featured=True)

print("=== 8. UNIFORMS & APPAREL ===")
save_asset(8, (0, 1656, 2481, 3315), "uniforms", "staff-tshirt-white-front-back",
           "Crewneck Staff T-Shirt (Front & Back)",
           "Tailored white crewneck staff t-shirt with left-chest emblem, full back logo lockup, and hem stripe.")

save_asset(8, (0, 3315, 2481, 4980), "uniforms", "staff-cap-riviera-teal",
           "Staff Baseball Cap in Riviera Teal",
           "Structured Riviera Teal twill cap featuring embroidered circular flame badge.")

save_asset(8, (0, 4980, 2481, 7330), "uniforms", "staff-model-white-uniform",
           "Staff Uniform Lookbook Model",
           "Male hospitality staff model wearing white Milli Flame t-shirt and white embroidered cap.",
           featured=True)

save_asset(2, (300, 6266, 2181, 7680), "uniforms", "barista-cyan-apron",
           "Custom Embroidered Barista Apron",
           "Heavyweight cotton canvas barista apron in French cyan with central chest circular emblem embroidery.")

print("=== 9. STATIONERY ===")
save_asset(9, (0, 0, 2481, 1440), "stationery", "letterhead-trifold-wood",
           "Tri-Fold Official Letterhead",
           "Tri-fold corporate letterhead featuring subtle 10% opacity center watermark on blonde wood desktop.",
           featured=True)

save_asset(9, (0, 1440, 2481, 2862), "stationery", "envelope-espresso-saucer",
           "Riviera Teal Envelope & Espresso",
           "Premium correspondence envelope in Riviera Teal with centered circular seal and morning espresso cup.")

print("=== 10. DIGITAL TOUCHPOINTS ===")
save_asset(2, (1240, 3450, 2481, 4134), "digital", "mobile-ordering-splash-screen",
           "Mobile Ordering App Splash Screen",
           "Smartphone interface displaying Milli Flame digital ordering experience with concentric ripple animations.",
           featured=True)

print("=== 11. ORIGINAL FULL-PAGE COLLAGES ===")
for pno in range(1, 11):
    src_p = f"{TMP_DIR}/page_{pno:02d}.png"
    im = Image.open(src_p)
    out_p = os.path.join(BASE_DIR, "collages-original", f"page-{pno:02d}-overview.webp")
    # Save overview at 1600px width for fast loading
    w = 1600
    h = int(im.height * (w / im.width))
    overview_im = im.resize((w, h), Image.Resampling.LANCZOS)
    overview_im.save(out_p, "WEBP", quality=85)
    
    # Save thumbnail
    thumb_p = os.path.join(BASE_DIR, "thumbnails", f"page-{pno:02d}-overview-thumb.webp")
    thumb_im = overview_im.resize((600, int(h * (600 / w))), Image.Resampling.LANCZOS)
    thumb_im.save(thumb_p, "WEBP", quality=80)
    
    manifest.append({
        "id": f"page-{pno:02d}-overview",
        "filename": f"page-{pno:02d}-overview.webp",
        "title": f"Master Brand Guideline — Page {pno:02d}",
        "caption": f"Complete uncropped 300 DPI master editorial artboard: Page {pno:02d} of the official Milli Flame brand book.",
        "category": "collages-original",
        "src": f"/portfolio/milli-flame/collages-original/page-{pno:02d}-overview.webp",
        "thumbnail": f"/portfolio/milli-flame/thumbnails/page-{pno:02d}-overview-thumb.webp",
        "dimensions": f"{overview_im.width}x{overview_im.height}",
        "width": overview_im.width,
        "height": overview_im.height,
        "aspectRatio": round(overview_im.width / overview_im.height, 3),
        "sourcePdfPage": pno,
        "cropBox": [0, 0, im.width, im.height],
        "featured": False,
        "galleryOrder": len(manifest) + 1
    })

# Save manifest.json
manifest_path = os.path.join(BASE_DIR, "manifest.json")
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)

print(f"\nSuccessfully generated {len(manifest)} assets and manifest.json at {manifest_path}!")
