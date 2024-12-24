<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation de Sphère - Three.js</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
        #color {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    </style>
</head>
<body>
    <input type="color" id="color" value="#ff0000">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Déclaration des variables avec var pour compatibilité ES5
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(
            75, // Champ de vision
            window.innerWidth / window.innerHeight, // Ratio largeur/hauteur
            0.1, // Plan proche
            1000 // Plan éloigné
        );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        var geometry = new THREE.SphereGeometry(1, 32, 32);
        var material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        var sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        // Fonction d'animation
        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.01; // Rotation de la sphère
            renderer.render(scene, camera);
        }
        animate();

        // Gestion de la couleur via l'input
        document.getElementById('color').addEventListener('input', function (event) {
            var color = event.target.value;
            sphere.material.color.set(color);
        });

        // Ajustement de la scène lors du redimensionnement
        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
