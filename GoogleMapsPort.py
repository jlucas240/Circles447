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
c = requests.get(API_base_url + geocoding + "1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + API_key)
#state[1] Address
#state[2] City
#state[3] State
#state[4] Zip?

# collect and comine results for each true boolean in state[5] through state[15]
# 5 Supermarket 
# 6 School 
# 7 Churches 
# 8 Community 
# 9 Libraries 
# 10 Cafe 
# 11 Dance 
# 12 Gyms 
# 13 Swimming 
# 14 Playground 
# 15 Parks
r = requests.get(API_base_url + textsearch + "Schools" + "&location=" +
                 str(latitude) + "," + str(longitude) + "&radius=" + str(radial_dist)
                 + API_key)
r = r.json()

#Send and Get Request

print("content-type: text/html\n\n" )
for i in r["results"]:
    print("<br><B>"+i["name"]+"</B>")

#Return json