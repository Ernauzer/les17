// Угол обзора камеры \\
const fov = 70;
// Соотношение сторон \\
const aspectRatio = window.innerWidth / window.innerHeight;
// Ближний Обьект \\
const near = 0.1;
// Дальний Обьект \\
const far = 1000;
const renderer = new THREE.WebGLRenderer( { antialias: true} );
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor('#eaeaea');

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.TorusKnotBufferGeometry(3, 1, 100, 30, 17, 18);
const material = new THREE.MeshPhongMaterial( { color: '#ff0055' } );
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(2, 2, 2);
cube.rotation.x = 3;
cube.rotation.z = 5;

controls.update();

scene.add(cube);

camera.position.z = 25;

const color = '#FFD700';
const intensity = 0.5;

const light = new THREE.DirectionalLight(color, intensity);

light.position.set(-1, 5, 4);
scene.add(light);
function animation() {
    requestAnimationFrame(animation);
    renderer.render(scene, camera);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    controls.update();

}
animation();

document.body.prepend(renderer.domElement);

