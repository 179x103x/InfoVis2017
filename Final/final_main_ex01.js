function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    var width =window.innerWidth*0.8;
    var height = window.innerHeight;
    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
		targetDom: document.getElementById('display'),
        enableAutoResize: false
    });
	var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
	screen.scene.add( renderer );
	
    setup();
    screen.loop();
    function setup()
    {
    document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
    
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );
    var smin = volume.min_value;
    var smax = volume.max_value;
    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue,light.position,screen.camera.position,true );
    screen.scene.add( surfaces );
    
    document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );

    document.getElementById('isovalue')
            .addEventListener('mousemove', function() {
                var value = +document.getElementById('isovalue').value;
		
                var isovalue = KVS.Mix( smin, smax, value );
		
                document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
            });

	document.getElementById('change-isovalue-button')
            .addEventListener('click', function() {
                screen.scene.remove( surfaces );
                var value = +document.getElementById('isovalue').value;
                //var shade = +document.getElementById('gouraud').value;
                var shade = document.getElementById('gouraud').checked;
                var isovalue = KVS.Mix( smin, smax, value );
		        surfaces = Isosurfaces( volume, Math.round(isovalue),light.position,screen.camera.position,shade);
                screen.scene.add( surfaces );
            });

            
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.draw();
    }
}
