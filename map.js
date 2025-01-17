var map_0c228f3feaa5777b55a562c74ec87071 = L.map(
    "map_0c228f3feaa5777b55a562c74ec87071",
    {
        center: [49.2606, -123.246],
        crs: L.CRS.EPSG3857,
        zoom: 15,
        zoomControl: true,
        preferCanvas: false,
    }
);

var tile_layer_7660e5f71cda4f005122b4a7861ef4a6 = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {"attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href=\"https://carto.com/attributions\"\u003eCARTO\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 20, "maxZoom": 20, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abcd", "tms": false}
);




tile_layer_7660e5f71cda4f005122b4a7861ef4a6.addTo(map_0c228f3feaa5777b55a562c74ec87071);


var marker_37abc5f856eb11b3fd06b4eee5e5910e = L.marker(
    [49.264469, -123.251339],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_37abc5f856eb11b3fd06b4eee5e5910e.bindTooltip(
    `<div>
         Biological Sciences Building
     </div>`,
    {"sticky": true}
);

marker_37abc5f856eb11b3fd06b4eee5e5910e.addEventListener('click', handlingClickEvent);


var marker_1466d7a5da927476b2b8e505f9890652 = L.marker(
    [49.26251, -123.25249],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_1466d7a5da927476b2b8e505f9890652.bindTooltip(
    `<div>
         Buchanan Building
     </div>`,
    {"sticky": true}
);

marker_1466d7a5da927476b2b8e505f9890652.addEventListener('click', handlingClickEvent);


var marker_2366ebfc76eacdb1ad1eceef40a72fcb = L.marker(
    [49.266129, -123.251663],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_2366ebfc76eacdb1ad1eceef40a72fcb.bindTooltip(
    `<div>
         Earth and Ocean Sciences
     </div>`,
    {"sticky": true}
);

marker_2366ebfc76eacdb1ad1eceef40a72fcb.addEventListener('click',handlingClickEvent);


var marker_a176bdd59efb5fdcab2f11d39fd6ad82 = L.marker(
    [49.261174, -123.248832],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_a176bdd59efb5fdcab2f11d39fd6ad82.bindTooltip(
    `<div>
         Hebb Building
     </div>`,
    {"sticky": true}
);

marker_a176bdd59efb5fdcab2f11d39fd6ad82.addEventListener('click', handlingClickEvent);


var marker_f570b19430e4c19489fb7c96ab289075 = L.marker(
    [49.261174, -123.248832],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_f570b19430e4c19489fb7c96ab289075.bindTooltip(
    `<div>
         Institute for Computing Information and Cognitive Systems / Computer Science
     </div>`,
    {"sticky": true}
);

marker_f570b19430e4c19489fb7c96ab289075.addEventListener('click', handlingClickEvent);


var marker_7f830af2d281825fdca83eb43b7c669e = L.marker(
    [49.267595, -123.252738],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_7f830af2d281825fdca83eb43b7c669e.bindTooltip(
    `<div>
         Irving K. Barber Learning Centre
     </div>`,
    {"sticky": true}
);

marker_7f830af2d281825fdca83eb43b7c669e.addEventListener('click', handlingClickEvent);


var marker_3f900663e35f80c1bb0b844f30a7fc76 = L.marker(
    [49.264822, -123.246848],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_3f900663e35f80c1bb0b844f30a7fc76.bindTooltip(
    `<div>
         P. A. Woodward Instructional Resources Centre
     </div>`,
    {"sticky": true}
);

marker_3f900663e35f80c1bb0b844f30a7fc76.addEventListener('click', handlingClickEvent);


var marker_34caffb44ad945e7edd66ae8d76484fd = L.marker(
    [49.267434, -123.250062],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_34caffb44ad945e7edd66ae8d76484fd.bindTooltip(
    `<div>
         UBC Life Building
     </div>`,
    {"sticky": true}
);

marker_34caffb44ad945e7edd66ae8d76484fd.addEventListener('click', handlingClickEvent);


var marker_e7c8d29b93a0db4739ccb0d0c8d9b747 = L.marker(
    [49.26657, -123.249807],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_e7c8d29b93a0db4739ccb0d0c8d9b747.bindTooltip(
    `<div>
         AMS Student Nest
     </div>`,
    {"sticky": true}
);

marker_e7c8d29b93a0db4739ccb0d0c8d9b747.addEventListener('click', handlingClickEvent);


var marker_911f4d9dc34ebdaab5f235b9d70e3ee6 = L.marker(
    [49.260461, -123.251332],
    {}
).addTo(map_0c228f3feaa5777b55a562c74ec87071);


marker_911f4d9dc34ebdaab5f235b9d70e3ee6.bindTooltip(
    `<div>
         Orchard Commons - Vantage College, Bartlett/Braeburn House
     </div>`,
    {"sticky": true}
);

marker_911f4d9dc34ebdaab5f235b9d70e3ee6.addEventListener('click', handlingClickEvent);

function handlingClickEvent() {
    window.location.href = 'review.html';
};