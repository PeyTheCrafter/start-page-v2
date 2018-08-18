reallySimpleWeather.weather({
    wunderkey: '', //add your key
    location: 'Zafra, Spain',
    woeid: '779012',
    unit: 'c',
    success: function (weather) {
        html = '<h2>' + weather.temp + '°' + weather.units.temp + '</h2>';
        html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
        html += '<li>' + weather.currently + '</li>';
        html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';
        document.getElementById('weather').innerHTML = weather.city + "<br>" + weather.temp + "º" + weather.units.temp + "<br>" + weather.currently;
    },
    error: function (error) {
        document.getElementById('weather').innerHTML = '<p>' + error + '</p>';
    }
});
