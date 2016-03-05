import time
import os
import requests

hostname = "google.com"

start = time.time()
response = os.system("ping -c 1 " + hostname)
if response == 0:
	duration = time.time() - start
else:
	duration = -1
print "duration: ", duration

start = time.time()
response = requests.get("http://" + hostname)
duration = time.time() - start

print "duration2: ", duration

#iwconfig wlan0 | grep -i --color signal //signal strength on linux

#iwlist



