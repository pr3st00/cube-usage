    const MAX_X = 8;
    const MAX_Y = 2;

    function drawImages()
    {
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