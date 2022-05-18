(function(window, document){
    
    var Dashboard = function(opts, node) {


        //Thememode
        this.themeMode = node.dataset.themeMode
        
        //Hostname and URL
        var hostname = 'windy.app';
        this.url = '//' + hostname +'/widget/';
        
        //For Testing
        let print

        this.fields = node.dataset.fields;
        print = fields 

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


            var html = '<h1>' + 'testing' + print + '</h1>';

            node.innerHTML = html;

        };


        data = document.createElement('script');
        showLoader()
        data.onload = function(e) { 
            hideLoader();
            showHtmlTemplate(forecast.spotInfo, widgetData, node, opts, forecast.model, forecast.updated);
            
        };



        var nodes = document.querySelectorAll('div[data-windywidget="forecast"]');
        for(var i=0; i<nodes.length; i++) {
        if(nodes[i].dataset.appid == 's7') continue;
        Dashboard(nodes[i].dataset, nodes[i]);
    
        };
    };



})(window, document);
