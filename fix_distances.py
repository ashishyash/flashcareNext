import json
import random

with open('d:\\flashcare22\\data\\nurses.json', 'r', encoding='utf-8') as f:
    nurses = json.load(f)

# Cities strictly within 200 miles of Renton, WA with accurate distances
cities_within_200 = [
    ("Seattle, WA", (10, 15)),
    ("Tacoma, WA", (20, 25)),
    ("Bellevue, WA", (8, 12)),
    ("Everett, WA", (30, 35)),
    ("Kent, WA", (3, 7)),
    ("Federal Way, WA", (10, 15)),
    ("Redmond, WA", (12, 18)),
    ("Kirkland, WA", (15, 20)),
    ("Olympia, WA", (55, 65)),
    ("Bellingham, WA", (110, 120)),
    ("Bremerton, WA", (45, 55)),
    ("Mount Vernon, WA", (85, 95)),
    ("Longview, WA", (110, 120)),
    ("Port Angeles, WA", (85, 95)),
    ("Portland, OR", (145, 155)),
    ("Vancouver, BC", (120, 135)),
    ("Yakima, WA", (110, 125)),
    ("Wenatchee, WA", (120, 135)),
]

# Cities that are beyond 200 miles
cities_beyond_200 = ["Spokane, WA", "Bend, OR"]

# Update nurses with cities beyond 200 miles
for i, nurse in enumerate(nurses):
    if nurse['location'] in cities_beyond_200:
        # Replace with a random city within 200 miles
        new_city, (min_dist, max_dist) = random.choice(cities_within_200)
        nurses[i]['location'] = new_city
        nurses[i]['distance_miles'] = round(random.uniform(min_dist, max_dist), 1)

with open('d:\\flashcare22\\data\\nurses.json', 'w', encoding='utf-8') as f:
    json.dump(nurses, f, indent=2, ensure_ascii=False)

print(f"Updated all nurses to be within 200 miles of Renton, WA")
