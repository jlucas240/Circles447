#!C:/Users/Jon/AppData/Local/Programs/Python/Python37-32/python.exe
import json
import requests

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
c = requests.get(API_base_url + geocoding + Address + ",+"+ City + ",+" + State + API_key)
#state[1] Address
#state[2] City
#state[3] State
#state[4] Zip?
c = c.json()
latitude = c["results"]["geometry"]["location"]["lat"]
longitude = c["results"]["geometry"]["location"]["lng"]
# collect and comine results for each true boolean in state[5] through state[15]
# 5 Supermarket 
x = x.json()#this is how I make a json right?
if (state[5]):
    s = requests.get(API_base_url + textsearch + "supermarket" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
    s = s.json()
    for i in s["results"]:
        if(i == "geometry"):
            x += ["location"]
        if(i == "name"):
            x += i

# 6 School 
"school"
# 7 Churches 
"church"
# 8 Community 
"community"
# 9 Libraries
"library"
# 10 Cafe
"cafe"
# 11 Dance
"dance school"
# 12 Gyms 
"gym"
# 13 Swimming
"pool"
# 14 Playground
"playground"
# 15 Parks
"park"
r = requests.get(API_base_url + textsearch + "Schools" + "&location=" + str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist) + API_key)
r = r.json()

#Send and Get Request

print("content-type: text/html\n\n" )
for i in r["results"]:
    print("<br><B>"+i["name"]+"</B>")

#Return json