


var camera, scene, renderer;
var geometry, material, mesh;

function setup() {

    var W = window.innerWidth, H = window.innerHeight;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(W, H);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, W / H, 1, 10000);
    camera.position.z = 500;

    scene = new THREE.Scene();


    geometry = new THREE.SphereGeometry(50, 100, 100);
    for (i = 0; i < 5000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = 1000 * Math.random() - 500;
        vertex.y = 1000 * Math.random() - 500;
        vertex.z = 1000 * Math.random() - 500;
        geometry.vertices.push(vertex);
    }
    material = new THREE.ParticleBasicMaterial({ size: 10, sizeAttenuation: false, transparent: true });
    material.color.setHex(00000);
    particles = new THREE.ParticleSystem(geometry, material);
    particles.sortParticles = true;
    scene.add(particles);



}

function draw() {

    requestAnimationFrame(draw);

    particles.rotation.y = Date.now() * 0.00005;

    renderer.render(scene, camera);

    var time = Date.now() * 0.0005;
    h = (360 * (1.0 + time) % 360) / 360;
    material.color.setHSL(h, 0.5, 0.5);

}

setup();
draw();

