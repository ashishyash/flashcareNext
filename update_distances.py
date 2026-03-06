import json
import random

with open('d:\\flashcare22\\data\\nurses.json', 'r', encoding='utf-8') as f:
    nurses = json.load(f)

# Accurate approximate distances from Renton, WA (955 Powell Ave SW, Renton, WA 98057)
city_distances = {
    "Seattle, WA": (10, 15),
    "Tacoma, WA": (20, 25),
    "Bellevue, WA": (8, 12),
    "Everett, WA": (30, 35),
    "Kent, WA": (3, 7),
    "Federal Way, WA": (10, 15),
    "Redmond, WA": (12, 18),
    "Kirkland, WA": (15, 20),
    "Olympia, WA": (55, 65),
    "Bellingham, WA": (110, 120),
    "Bremerton, WA": (45, 55),
    "Mount Vernon, WA": (85, 95),
    "Longview, WA": (110, 120),
    "Port Angeles, WA": (85, 95),
    "Spokane, WA": (270, 290),  # Actually beyond 200 miles
    "Portland, OR": (145, 155),
    "Vancouver, BC": (120, 135),
    "Yakima, WA": (110, 125),
    "Wenatchee, WA": (120, 135),
    "Bend, OR": (240, 260),  # Actually beyond 200 miles
}

# Update each nurse's distance based on their location
for i, nurse in enumerate(nurses):
    location = nurse['location']
    
    if location in city_distances:
        min_dist, max_dist = city_distances[location]
        nurses[i]['distance_miles'] = round(random.uniform(min_dist, max_dist), 1)
    else:
        # Keep existing distance if city not in our mapping
        pass

with open('d:\\flashcare22\\data\\nurses.json', 'w', encoding='utf-8') as f:
    json.dump(nurses, f, indent=2, ensure_ascii=False)

print(f"Updated distances for {len(nurses)} nurses based on accurate distances from Renton, WA")
