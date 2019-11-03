#!C:/Users/Jon/AppData/Local/Programs/Python/Python37-32/python.exe
import json
import requests

API_key = "&key=AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4"
lat = 39.254750
long = -76.710840
radial_dist = 50
API_base_url = "https://maps.googleapis.com/maps/api/"
textsearch = "place/textsearch/json?query="
#search_term = input("Enter Search Term: ")
r = requests.get(API_base_url + textsearch + "Schools" + "&location=" +
                 str(lat) + "," + str(long) + "&radius=" + str(radial_dist)
                 + API_key)
r = r.json()
print("content-type: text/html\n\n" )
for i in r["results"]:
    print("<br><B>"+i["name"]+"</B>")
