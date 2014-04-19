$(function(){
    var options = {
        map: 'us_lcc_en',
        enableZoom: false,
        backgroundColor: '#ccc',
        // color: '#E3F93D',
        selectedColor: '#153756',
        hoverColor: '#153756',
        multiSelectRegion: true,
        selectedRegions: ['US-MN'],
        onRegionClick: function(element, code, region){
            console.log(code);
        }
    };
    window.vm = $('#map-div').vectorMap(options);
});
