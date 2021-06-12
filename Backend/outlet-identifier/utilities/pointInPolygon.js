var pointInPolygon = require('point-in-polygon');

module.exports= function (point, polygon)
{
    return(pointInPolygon(point, polygon));
}
