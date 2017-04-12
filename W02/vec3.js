// Constructor
Vec3 = function( x, y, z )
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function( v )
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.dec = function( v )
{
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
}

Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    a = Math.min(this.x, this.y);
    b = Math.min(this.x, this.z);
    if( a == b ) 
        return a;
    else
        return Math.min(this.y, this.z);
}

Vec3.prototype.mid = function()
{
    if( this.x > this.y ){
        max = this.x;
        if( this.x > this.z ){
            max = this.x;
            if( this.y > this.z )
                mid = this.y;
            else if( this.y < this.z )
                mid = this.z;
        }
        else if( this.x < this.z ){
            max = this.z;
            if( this.z > this.y ){
                max = this.z;
                if( this.y > this.x )
                    mid = this.y;
                else if( this.y < this.x )
                    mid = this.x;
            }
        }
    }
    else if( this.x < this.y ){
        max = this.y;
        if( this.y > this.z ){
            max = this.y;
            if( this.x > this.z )
                mid = this.x;
            else if( this.x < this.z )
                mid = this.z;
        }
        else if( this.y < this.z ){
            max = this.z;
            if( this.z > this.x ){
                max = this.z;
                if( this.y > this.x )
                    mid = this.y;
                else if( this.y < this.x )
                    mid = this.x;
            }
        }
    }
    return mid;
}

Vec3.prototype.max = function()
{
    a = Math.max(this.x, this.y);
    b = Math.max(this.x, this.z);
    if( a == b ) 
        return a;
    else
        return Math.max(this.y, this.z);
}
