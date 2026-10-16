"""
Generate professional LinkedIn-style illustrated portrait avatars using Pillow.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, os

OUT = r"C:\Hamd\hamd\public\images\staff"
os.makedirs(OUT, exist_ok=True)

W, H = 400, 400

def lerp(a, b, t):
    return int(a + (b - a) * t)

def lerp_color(c1, c2, t):
    return tuple(lerp(c1[i], c2[i], t) for i in range(3))

def draw_grad_bg(draw, w, h, top_col, bot_col):
    for y in range(h):
        t = y / h
        c = lerp_color(top_col, bot_col, t)
        draw.line([(0, y), (w, y)], fill=c)

def ellipse(draw, cx, cy, rx, ry, fill, outline=None, width=1):
    draw.ellipse([cx-rx, cy-ry, cx+rx, cy+ry], fill=fill, outline=outline, width=width)

def draw_person(img, draw, gender, skin, hair_col, suit_col, tie_col=None, hijab=False):
    # ── background gradient ──────────────────────────────────────────────
    draw_grad_bg(draw, W, H, (230, 238, 250), (200, 215, 235))

    cx = W // 2

    # ── suit / shoulders ─────────────────────────────────────────────────
    suit_top_y = 275
    shoulder_w = 170
    suit_pts = [
        (cx - shoulder_w, H),
        (cx - shoulder_w + 20, suit_top_y),
        (cx - 30, suit_top_y + 30),
        (cx + 30, suit_top_y + 30),
        (cx + shoulder_w - 20, suit_top_y),
        (cx + shoulder_w, H),
    ]
    draw.polygon(suit_pts, fill=suit_col)

    # lapels
    lapel_pts_l = [
        (cx - 28, suit_top_y + 30),
        (cx - 10, suit_top_y + 60),
        (cx, suit_top_y + 30),
    ]
    lapel_pts_r = [
        (cx + 28, suit_top_y + 30),
        (cx + 10, suit_top_y + 60),
        (cx, suit_top_y + 30),
    ]
    draw.polygon(lapel_pts_l, fill=(240, 240, 245))
    draw.polygon(lapel_pts_r, fill=(240, 240, 245))

    # tie / scarf
    if not hijab and tie_col:
        tie_pts = [
            (cx - 6, suit_top_y + 30),
            (cx + 6, suit_top_y + 30),
            (cx + 10, suit_top_y + 100),
            (cx, suit_top_y + 120),
            (cx - 10, suit_top_y + 100),
        ]
        draw.polygon(tie_pts, fill=tie_col)

    # ── neck ─────────────────────────────────────────────────────────────
    neck_w = 28
    neck_top = 240
    neck_bot = suit_top_y + 20
    draw.rectangle([cx - neck_w//2, neck_top, cx + neck_w//2, neck_bot], fill=skin)

    # ── head ─────────────────────────────────────────────────────────────
    head_cx = cx
    head_cy = 175
    head_rx = 72
    head_ry = 85

    # slight chin taper using multiple ellipses
    ellipse(draw, head_cx, head_cy + 10, head_rx, head_ry, skin)
    # chin softening
    ellipse(draw, head_cx, head_cy + head_ry - 18, 38, 22, skin)

    # ── ears ─────────────────────────────────────────────────────────────
    ear_y = head_cy + 5
    ellipse(draw, head_cx - head_rx + 8, ear_y, 14, 18, skin)
    ellipse(draw, head_cx + head_rx - 8, ear_y, 14, 18, skin)
    # inner ear
    ellipse(draw, head_cx - head_rx + 8, ear_y, 8, 12, lerp_color(skin, (180, 120, 100), 0.3))
    ellipse(draw, head_cx + head_rx - 8, ear_y, 8, 12, lerp_color(skin, (180, 120, 100), 0.3))

    # ── hair ─────────────────────────────────────────────────────────────
    if hijab:
        # hijab — wrap from top covering hair, frame face
        hijab_col = hair_col
        # outer hijab shape
        hijab_pts = [
            (head_cx - head_rx - 10, head_cy + 30),
            (head_cx - head_rx - 5, head_cy - head_ry + 10),
            (head_cx, head_cy - head_ry - 15),
            (head_cx + head_rx + 5, head_cy - head_ry + 10),
            (head_cx + head_rx + 10, head_cy + 30),
            (head_cx + 60, suit_top_y + 10),
            (head_cx - 60, suit_top_y + 10),
        ]
        draw.polygon(hijab_pts, fill=hijab_col)
        # re-draw face skin area inside hijab
        ellipse(draw, head_cx, head_cy + 10, head_rx - 10, head_ry - 8, skin)
        ellipse(draw, head_cx, head_cy + head_ry - 18, 32, 20, skin)
    elif gender == 'f':
        # long hair — draw behind and in front
        # back hair
        hair_pts_back = [
            (head_cx - head_rx - 5, head_cy - head_ry + 20),
            (head_cx - head_rx - 20, head_cy + head_ry + 30),
            (head_cx - 20, head_cy + head_ry + 50),
            (head_cx + 20, head_cy + head_ry + 50),
            (head_cx + head_rx + 20, head_cy + head_ry + 30),
            (head_cx + head_rx + 5, head_cy - head_ry + 20),
            (head_cx, head_cy - head_ry - 10),
        ]
        draw.polygon(hair_pts_back, fill=hair_col)
        # re-draw head skin (hair behind)
        ellipse(draw, head_cx, head_cy + 10, head_rx, head_ry, skin)
        ellipse(draw, head_cx, head_cy + head_ry - 18, 38, 22, skin)
        ellipse(draw, head_cx - head_rx + 8, ear_y, 14, 18, skin)
        ellipse(draw, head_cx + head_rx - 8, ear_y, 14, 18, skin)
        # top hair cap
        hair_top_pts = [
            (head_cx - head_rx + 5, head_cy),
            (head_cx - head_rx + 8, head_cy - head_ry + 10),
            (head_cx, head_cy - head_ry - 12),
            (head_cx + head_rx - 8, head_cy - head_ry + 10),
            (head_cx + head_rx - 5, head_cy),
        ]
        draw.polygon(hair_top_pts, fill=hair_col)
    else:
        # short male hair
        hair_pts = [
            (head_cx - head_rx + 5, head_cy - 10),
            (head_cx - head_rx + 10, head_cy - head_ry + 15),
            (head_cx - 15, head_cy - head_ry - 12),
            (head_cx + 15, head_cy - head_ry - 12),
            (head_cx + head_rx - 10, head_cy - head_ry + 15),
            (head_cx + head_rx - 5, head_cy - 10),
        ]
        draw.polygon(hair_pts, fill=hair_col)

    # ── eyebrows ──────────────────────────────────────────────────────────
    brow_y = head_cy - 20
    brow_col = lerp_color(hair_col if not hijab else (60,40,20), (0,0,0), 0.4)
    draw.arc([head_cx - 42, brow_y - 7, head_cx - 14, brow_y + 3], 200, 340, fill=brow_col, width=3)
    draw.arc([head_cx + 14, brow_y - 7, head_cx + 42, brow_y + 3], 200, 340, fill=brow_col, width=3)

    # ── eyes ──────────────────────────────────────────────────────────────
    eye_y = head_cy - 5
    eye_col = (50, 45, 40)
    # whites
    ellipse(draw, head_cx - 28, eye_y, 16, 10, (255, 255, 255))
    ellipse(draw, head_cx + 28, eye_y, 16, 10, (255, 255, 255))
    # irises
    ellipse(draw, head_cx - 28, eye_y, 9, 9, (80, 60, 40))
    ellipse(draw, head_cx + 28, eye_y, 9, 9, (80, 60, 40))
    # pupils
    ellipse(draw, head_cx - 28, eye_y, 4, 4, (20, 15, 10))
    ellipse(draw, head_cx + 28, eye_y, 4, 4, (20, 15, 10))
    # highlights
    ellipse(draw, head_cx - 25, eye_y - 3, 3, 3, (255, 255, 255))
    ellipse(draw, head_cx + 31, eye_y - 3, 3, 3, (255, 255, 255))
    # eyelid lines
    draw.arc([head_cx - 44, eye_y - 10, head_cx - 12, eye_y + 10], 190, 350, fill=eye_col, width=2)
    draw.arc([head_cx + 12, eye_y - 10, head_cx + 44, eye_y + 10], 190, 350, fill=eye_col, width=2)

    # ── nose ──────────────────────────────────────────────────────────────
    nose_y = head_cy + 15
    nose_col = lerp_color(skin, (160, 100, 80), 0.25)
    # bridge
    pts = [(head_cx - 4, eye_y + 12), (head_cx - 8, nose_y), (head_cx - 12, nose_y + 8)]
    draw.line(pts, fill=nose_col, width=2)
    pts = [(head_cx + 4, eye_y + 12), (head_cx + 8, nose_y), (head_cx + 12, nose_y + 8)]
    draw.line(pts, fill=nose_col, width=2)
    # nostrils
    ellipse(draw, head_cx - 11, nose_y + 8, 7, 5, nose_col)
    ellipse(draw, head_cx + 11, nose_y + 8, 7, 5, nose_col)

    # ── mouth ─────────────────────────────────────────────────────────────
    mouth_y = head_cy + 35
    # smile curve
    draw.arc([head_cx - 22, mouth_y - 8, head_cx + 22, mouth_y + 12], 10, 170, fill=(160, 80, 80), width=3)
    # lip line
    draw.arc([head_cx - 18, mouth_y - 12, head_cx + 18, mouth_y + 2], 5, 175, fill=(200, 130, 120), width=2)

    # ── subtle shadow under chin ──────────────────────────────────────────
    shadow_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow_img)
    sd.ellipse([head_cx - 60, head_cy + head_ry - 10, head_cx + 60, head_cy + head_ry + 25],
               fill=(0, 0, 0, 40))
    img.paste(Image.alpha_composite(img.convert('RGBA'), shadow_img).convert('RGB'), (0, 0))


# ── Staff definitions ──────────────────────────────────────────────────────────
staff = [
    dict(initials='AH', name='Ahmed Hassan', gender='m',
         skin=(220, 175, 130), hair_col=(55, 38, 20),
         suit_col=(26, 39, 68), tie_col=(180, 30, 30)),
    dict(initials='FZ', name='Fatima Zahra', gender='f',
         skin=(235, 195, 155), hair_col=(60, 42, 25),
         suit_col=(26, 39, 68), hijab=True, hijab_col=(50, 80, 120)),
    dict(initials='MA', name='Mohammed Ali', gender='m',
         skin=(195, 150, 110), hair_col=(35, 25, 15),
         suit_col=(26, 39, 68), tie_col=(20, 100, 60)),
    dict(initials='SI', name='Sara Ibrahim', gender='f',
         skin=(225, 185, 145), hair_col=(110, 65, 30),
         suit_col=(40, 60, 100)),
    dict(initials='OA', name='Omar Abdullahi', gender='m',
         skin=(145, 100, 75), hair_col=(25, 18, 12),
         suit_col=(26, 39, 68), tie_col=(180, 150, 20)),
]

for p in staff:
    img = Image.new('RGB', (W, H), (230, 238, 250))
    draw = ImageDraw.Draw(img)

    hijab = p.get('hijab', False)
    hijab_col = p.get('hijab_col', (80, 80, 80)) if hijab else None

    # override hair_col with hijab color if hijab
    effective_hair = hijab_col if hijab else p['hair_col']

    draw_person(img, draw, p['gender'], p['skin'], effective_hair,
                p['suit_col'], p.get('tie_col'), hijab=hijab)

    # gold ring border
    ring = ImageDraw.Draw(img)
    ring.ellipse([8, 8, W-9, H-9], outline=(201, 162, 39), width=4)

    # slight blur for smooth look
    img = img.filter(ImageFilter.GaussianBlur(radius=0.6))

    path = os.path.join(OUT, f"{p['initials']}.jpg")
    img.save(path, 'JPEG', quality=92)
    print(f"Saved {path}")

print("Done.")
