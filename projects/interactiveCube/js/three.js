
//$(function(){
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0*000000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//var axis = new THREE.AxisHelper();
//scene.add(axis);

// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 500;
camera.position.x = 5;
camera.position.y = 40;

// scene
var scene = new THREE.Scene();
/*



var grid = new THREE.GridHelper(50, 5);
var color = new THREE.Color("rgb(255,0,0)");
grid.setColors(color, 0*000000);

scene.add(grid);


var spotLight = new THREE.SpotLight(0*FFFFFF);
spotLight.castShadow = true;
spotLight.position.set (15, 30, 50);

scene.add(spotLight);

*/


// sphere
// the first argument of THREE.SphereGeometry is the radius, the second argument is
// the segmentsWidth, and the third argument is the segmentsHeight.  Increasing the
// segmentsWidth and segmentsHeight will yield a more perfect circle, but will degrade
// rendering performance



var cube = new THREE.Mesh( new THREE.BoxGeometry( 180, 80, 180),
new THREE.MeshNormalMaterial() );
var sphere = new THREE.Mesh(new THREE.SphereGeometry(60,180, 70),
new THREE.MeshNormalMaterial());
var sphere2 = new THREE.Mesh(new THREE.SphereGeometry(44, 180, 70),
new THREE.MeshNormalMaterial());
var sphere3 = new THREE.Mesh(new THREE.SphereGeometry(35, 180, 70),
new THREE.MeshNormalMaterial());

sphere.overdraw = true;
scene.add(sphere);
scene.add(sphere2);
scene.add(sphere3);
scene.add(cube);
sphere2.position.y = 85;
sphere3.position.y = 145;
cube.position.y = -98;

//cube.castShadow = true;


//camera.lookAt(scene.position);


//$("#webGL-Container").append(renderer.domElement)

renderer.render(scene, camera);

//});
