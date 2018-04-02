
    function drawImages(config)
    {
      const MAX_X = config.max_x;
      const MAX_Y = config.max_y;

      var images = "<br/><br/><br/>";
      var imageClass;

      for (var y=1; y<=MAX_Y; y++)
      {
        for (var x=1; x<=MAX_X; x++)
        {
            if (x%2 != 0)
            { 
                imageClass = (y%2 !=0 ? "img" : "flipped3");
            }
            else
            {
                imageClass = (y%2 !=0 ? "flipped" : "flipped2");
            }
            
            images += "<img src='/images/cubicle.png' id='cube" 
             + x + y 
             + "' width='60' height='60' class='" + imageClass + "'/>"
        }
            
        images += "<br/><br/></br>"
      }

      return images;

    }

    function getAppConfig()
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/appconfig", false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        var response = xhttp.responseText;

        return JSON.parse(response);
    }

    function showCubeDetailsWindow(cubeName)
    {
       $.window({
        title: cubeName + " details",
        url: "/cubeDetails?cube="+cubeName,
        width: 500,
        height: 500,
        x: -1,
        y: -1,
        draggable: true,
        resizable: true,
        maximizable: false,
        minimizable: true,
        closable: true,
        showModal: true
      });
    }