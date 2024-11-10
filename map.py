import folium

from folium.plugins import MarkerCluster

# Center map
m = folium.Map(location=(49.2606, -123.2460), zoom_start=15, tiles="cartodb positron")

# marker location, location data from ubc-geospatial-opendata
folium.Marker([49.264469, -123.251339], tooltip="Biological Sciences Building").add_to(m)
folium.Marker([49.26251, -123.25249], tooltip="Buchanan Building").add_to(m)
folium.Marker([49.266129, -123.251663], tooltip="Earth and Ocean Sciences").add_to(m)
folium.Marker([49.261174, -123.248832], tooltip="Hebb Building").add_to(m)
folium.Marker([49.261174, -123.248832], tooltip="Institute for Computing Information and Cognitive Systems / Computer Science").add_to(m)
folium.Marker([49.267595, -123.252738], tooltip="Irving K. Barber Learning Centre").add_to(m)
folium.Marker([49.264822, -123.246848], tooltip="P. A. Woodward Instructional Resources Centre").add_to(m)
folium.Marker([49.267434, -123.250062], tooltip="UBC Life Building").add_to(m)
folium.Marker([49.26657, -123.249807], tooltip="AMS Student Nest").add_to(m)
folium.Marker([49.260461, -123.251332], tooltip="Orchard Commons - Vantage College, Bartlett/Braeburn House").add_to(m)

# Save map to HTML file
m.save("footprint.html")
