import json
import random

with open('d:\\flashcare22\\data\\nurses.json', 'r', encoding='utf-8') as f:
    nurses = json.load(f)

# Cities within 200 miles of Renton, WA with approximate distances
cities_50_miles = [
    ("Seattle, WA", random.uniform(10, 50)),
    ("Tacoma, WA", random.uniform(15, 45)),
    ("Bellevue, WA", random.uniform(5, 40)),
    ("Everett, WA", random.uniform(20, 50)),
    ("Kent, WA", random.uniform(5, 30)),
    ("Federal Way, WA", random.uniform(10, 35)),
    ("Redmond, WA", random.uniform(10, 40)),
    ("Kirkland, WA", random.uniform(10, 45)),
]

cities_100_miles = [
    ("Olympia, WA", random.uniform(50, 100)),
    ("Bellingham, WA", random.uniform(80, 100)),
    ("Bremerton, WA", random.uniform(50, 90)),
    ("Mount Vernon, WA", random.uniform(60, 95)),
    ("Longview, WA", random.uniform(70, 100)),
    ("Port Angeles, WA", random.uniform(75, 100)),
]

cities_200_miles = [
    ("Spokane, WA", random.uniform(150, 200)),
    ("Portland, OR", random.uniform(140, 180)),
    ("Vancouver, BC", random.uniform(120, 160)),
    ("Yakima, WA", random.uniform(110, 150)),
    ("Wenatchee, WA", random.uniform(100, 140)),
    ("Bend, OR", random.uniform(180, 200)),
]

# Combine all cities
all_cities = cities_50_miles + cities_100_miles + cities_200_miles

# Update each nurse with a random city and distance
for i, nurse in enumerate(nurses):
    city, distance = random.choice(all_cities)
    nurses[i]['location'] = city
    nurses[i]['distance_miles'] = round(distance, 1)

with open('d:\\flashcare22\\data\\nurses.json', 'w', encoding='utf-8') as f:
    json.dump(nurses, f, indent=2, ensure_ascii=False)

print(f"Updated {len(nurses)} nurses with locations within 200 miles of Renton, WA")
