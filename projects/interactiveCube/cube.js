window.onload = function() {

	var container = document.getElementById( 'container' ),
		containerWidth, containerHeight,
		renderer,
		scene,
		camera,
		spheres,
		geom,
		range = 50,
		mouseVector,
		axes,
		controls;

	containerWidth = container.clientWidth;
	containerHeight = container.clientHeight;

	// Set up renderer, scene and camera
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( containerWidth, containerHeight );
	container.appendChild( renderer.domElement );

	renderer.setClearColorHex( 0xeeeedd, 1.0 );
//	renderer.shadowMapEnabled = true;


// was trying to add up an atmosphere with images, but isn't working



//var urlPrefix = "images/";
//var urls = [ urlPrefix + "posx.jpg", urlPrefix + "negx.jpg",
//    urlPrefix + "posy.jpg", urlPrefix + "negy.jpg",
//    urlPrefix + "posz.jpg", urlPrefix + "negz.jpg" ];
//var textureCube = THREE.ImageUtils.loadTextureCube( urls );

//var shader = THREE.ShaderLib["cube"];
//var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
//uniforms['tCube'].texture= textureCube;   // textureCube has been init before
//var material = new THREE.MeshShaderMaterial({
//    fragmentShader    : shader.fragmentShader,
//    vertexShader  : shader.vertexShader,
//    uniforms  : uniforms
//});

// build the skybox Mesh
//skyboxMesh    = new THREE.Mesh( new THREE.CubeGeometry( 100000, 100000, 100000, 1, 1, 1, null, true ), material );
// add it to the scene
//scene.addObject( skyboxMesh );



	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 45, containerWidth / containerHeight, 1, 10000 );
	camera.position.set( 0, 0, range * 2 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

	// Add some cubes to the scene
	geom = new THREE.SphereGeometry( 10,15, -10 );

	spheres = new THREE.Object3D();
	scene.add( spheres );

	//object3d.castShadow = true;
//object3d.receiveShadow = false;

	//<!--geom2 =  new THREE.Mesh(new THREE.SphereGeometry(89, 15, -10),
	//new THREE.MeshNormalMaterial());
	//scene.add(geom2);

//geom2.position.y = 45;
//geom2.rotation.x += 0.01; // Rotate the sphere by a small amount about the x- and y-axes.
//  geom2.rotation.y += 0.01;
// Floor

//var floorTexture = new THREE.ImageUtils.loadTexture('floor.jpg');
//floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
//floorTexture.repeat.set(10,10);
//var floorMaterial = new THREE.MeshBasicMaterial({
//		map: floorTexture
		//sside: DoubleSide
//});
	//var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	//var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	//floor.position.y = -0.5;
	//floor.rotation.x = Math.PI / 2;
	//scene.add(floor);

	for(var i = 0; i < 100; i++ ) {
		var grayness = Math.random() * 0.5 + 0.25,
			mat = new THREE.MeshBasicMaterial(),
			sphere = new THREE.Mesh( geom, mat );
		mat.color.setRGB( grayness, grayness, grayness );
		sphere.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
		sphere.rotation.set( Math.random(), Math.random(), Math.random() ).multiplyScalar( 2 * Math.PI );
		sphere.grayness = grayness;
		spheres.add( sphere );
	}

	// Axes
	axes = buildAxes();
	scene.add( axes );

	// Picking stuff

	projector = new THREE.Projector();
	mouseVector = new THREE.Vector3();

	// User interaction
	window.addEventListener( 'mousemove', onMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false);

	controls = new THREE.TrackballControls( camera );
	controls.zoomSpeed = 0.05;

	// And start the animation
	animate();


	function onMouseMove( e ) {

		mouseVector.x = 2 * (e.clientX / containerWidth) - 1;
		mouseVector.y = 1 - 2 * ( e.clientY / containerHeight );

		var raycaster = projector.pickingRay( mouseVector.clone(), camera ),
			intersects = raycaster.intersectObjects( spheres.children );

			spheres.children.forEach(function( sphere ) {
				sphere.material.color.setRGB( sphere.grayness, sphere.grayness, sphere.grayness );
		});


		for( var i = 0; i < intersects.length; i++ ) {
			var intersection = intersects[ i ],
				obj = intersection.object;

			obj.material.color.setRGB( 1.0 - i / intersects.length, 0, 0 );
		}


	}

	function onWindowResize( e ) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize( containerWidth, containerHeight );
		camera.aspect = containerWidth / containerHeight;
		camera.updateProjectionMatrix();
	}

	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		// Cancelled the rotation because it made it super slow

		//spheres.rotation.x += .5;
    //spheres.rotation.y += 0;
		//render();
    //
		//requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}


	// http://soledadpenades.com/articles/three-js-tutorials/drawing-the-coordinate-axes/
	function buildAxes() {
		var axes = new THREE.Object3D();

		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 100, 0, 0 ), 0xFF0000, false ) ); // +X
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -100, 0, 0 ), 0x800000, true) ); // -X
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 100, 0 ), 0x00FF00, false ) ); // +Y
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -100, 0 ), 0x008000, true ) ); // -Y
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, 100 ), 0x0000FF, false ) ); // +Z
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -100 ), 0x000080, true ) ); // -Z

		return axes;

	}

	function buildAxis( src, dst, colorHex, dashed ) {
		var geom = new THREE.Geometry(),
			mat;

		if(dashed) {
			mat = new THREE.LineDashedMaterial({ linewidth: 1, color: colorHex, dashSize: 5, gapSize: 5 });
		} else {
			mat = new THREE.LineBasicMaterial({ linewidth: 1, color: colorHex });
		}

		geom.vertices.push( src.clone() );
		geom.vertices.push( dst.clone() );

		var axis = new THREE.Line( geom, mat );

		return axis;

	}

	renderer.render(camera,scene);

}
