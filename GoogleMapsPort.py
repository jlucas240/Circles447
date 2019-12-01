#!C:/Users/Jon/AppData/Local/Programs/Python/Python37-32/python.exe
import json
import requests
import sys

state = sys.argv[1]

API_key = "&key=AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4"
latitude = 39.254750
longitude = -76.710840
radial_dist = 25
API_base_url = "https://maps.googleapis.com/maps/api/"
textsearch = "place/textsearch/json?query="
geocoding = "geocode/json?address="
#search_term = input("Enter Search Term: ")

#Takes in input json to modify
#latitude, longitude, radial_dist, and other variables
radial_dist = state[0]
#turn address and state into proper format(remove spaces with +)
#turn state to two letter format(California to CA, Maryland to MD, etc.)
#Hardcode MD?
#get longitude and attiude from address
#store address values on server to prevent re-geocoding?
Address = state[1]
for c in Address:
    if (c.isspace()) == True:
        c = "+"
City = state[2]
for c in City:
    if (c.isspace()) == True:
        c = "+"
State = state[3]
coords = requests.get(API_base_url + geocoding + Address + ",+"+ City + ",+" + State + API_key)
#state[1] Address
#state[2] City
#state[3] State
#state[4] Zip?
coordsData = json.loads(coords.text)
latitude = coordsData['results']['geometry']['location']['lat']
longitude = coordsData['results']['geometry']['location']['lng']
# collect and comine results for each true boolean in state[5] through state[15]

# 5 Supermarket 
data = {'results':[]}
if (state[5]):
    search = requests.get(API_base_url + textsearch + "supermarket" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 6 School 

if (state[5]):
    search = requests.get(API_base_url + textsearch + "school" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 7 Churches 

if (state[5]):
    search = requests.get(API_base_url + textsearch + "church" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 8 Community 

if (state[5]):
    search = requests.get(API_base_url + textsearch + "community" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 9 Libraries

if (state[5]):
    search = requests.get(API_base_url + textsearch + "library" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 10 Cafe

if (state[5]):
    search = requests.get(API_base_url + textsearch + "cafe" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 11 Dance

if (state[5]):
    search = requests.get(API_base_url + textsearch + "dance school"+ "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 12 Gyms 

if (state[5]):
    search = requests.get(API_base_url + textsearch + "gym" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 13 Swimming
if (state[5]):
    search = requests.get(API_base_url + textsearch + "pool" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 14 Playground

if (state[5]):
    search = requests.get(API_base_url + textsearch + "playground" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)

# 15 Parks

if (state[5]):
    search = requests.get(API_base_url + textsearch + "park" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    searchData = json.loads(search.text)
    #Navigate dictionary
    #for each result
    for i in searchData["results"]:
        searchLat = i["geometry"]["location"]["lat"]
        searchLng = i["geometry"]["location"]["lng"]
        searchPlace = i["place_id"]
        searchIcon = i["icon"]
        searchName = i["name"]
        # add all variables as dictionary entry
        d = {'latitude': searchLat, 'longitude': searchLng, 'place_id': searchPlace, 'icon': searchIcon, 'name': searchName}
        data['results'].append(d)


dataJson = json.dumps(data)

return dataJson

#example work
r = requests.get(API_base_url + textsearch + "Schools" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
r = r.json()

#Send and Get Request

print("content-type: text/html\n\n" )
for i in r["results"]:
    print("<br><B>"+i["name"]+"</B>")

#Return json