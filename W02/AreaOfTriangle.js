
function AreaOfTriangle( v0, v1, v2 )
{
    a1 = v0.x - v1.x;
    a2 = v0.y - v1.y;
    a3 = v0.z - v1.z;
    b1 = v0.x - v2.x;
    b2 = v0.y - v2.y;
    b3 = v0.z - v2.z;

    var x1 = a2 * b3 - a3 * b2;
    var y1 = a3 * b1 - a1 * b3;
    var z1 = a1 * b2 - a2 * b1;
                        
    S = 1/2 * Math.sqrt(x1*x1 + y1*y1 + z1*z1);
    return S;

}

