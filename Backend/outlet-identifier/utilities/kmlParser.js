const parseKML = require('parse-kml');

module.exports= function ()
{
    return parseKML
  .toJson('./assets/DeliveryAreas.kml')
  .then(function(data){
    return data
  });
  
}
