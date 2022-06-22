(function(window, document){
    
    var Dashboard = function(opts, node) {
    


        //Thememode
        this.themeMode = node.dataset.themeMode
        
        //Hostname and URL
        var hostname = 'windy.app';
        this.url = '//' + hostname +'/widget/';
        
       

        this.fields = node.dataset.fields;
         

        this.allFields = [
        'wind-direction',
        'wind-speed',
        'wind-gust',
        'air-temp',
        'clouds',
        'precipitation',
        'waves-direction',
        'waves-height',
        'waves-period',
        'tides'];

        

        function showHtmlTemplate(spotInfo, data, node, opts, model, updated) {

            let print
            var html

            print = data[0].windDirection

            var html = '<h1>' + 'testing' + print + '</h1>';
            html += '<h1>test</h1>';

            node.innerHTML = html;

        };
        showHtmlTemplate

        data = document.createElement('script');
        showLoader()
        data.onload = function(e) { 
            hideLoader();
            showHtmlTemplate(forecast.spotInfo, widgetData, node, opts, forecast.model, forecast.updated);
            
        };


        data = document.createElement('script');
        showLoader();
        data.onload = function(e) { 
            hideLoader();
            forecast = window['wf' + opts.appid];
            const widgetData = JSON.parse(forecast.data);
            showHtmlTemplate(forecast.spotInfo, widgetData, node, opts, forecast.model, forecast.updated);
            
            var tides = forecast.tides.length ? JSON.parse(forecast.tides) : false;            
            
            showForecast(widgetData, tides, forecast.spotInfo.spotID, forecast.spotInfo);
            

            allFields.forEach(item => {
                if (!fields.includes(item) || ((item!='tides') && !widgetData[0][getBackendName(item)]) || ( (item==='tides') && !tides)) {   
                    
                    const elem = document.querySelectorAll(`.id-${item}`);
                    elem.forEach(item => {
                        item.style.display = 'none'
                    })
                }
            })


        
    
        }
        data.type = 'text/javascript';
        data.async = 1;
        data.src = '//windy.app/widget/data.php?id=wf' + opts.appid + '&' + (opts.spotid ? 'spotID=' + opts.spotid : 'lat=' + opts.lat + '&lon=' + opts.lng) + (opts.everyhour ? '&everyHourForecast=1' : '');
        document.body.appendChild(data);
   
   
    };

    document.getElementById("testBlock").innerHTML = html

    var nodes = document.querySelectorAll('div[data-windywidget="forecast"]');
    for(var i=0; i<nodes.length; i++) {
        if(nodes[i].dataset.appid == 's7') continue;
        WindyForecastAsync(nodes[i].dataset, nodes[i]);
    }

})(window, document);
