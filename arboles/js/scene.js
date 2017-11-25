(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        camera.position.z = 60;
        camera.position.y = 10;    
    
        let loader = new THREE.TextureLoader();

        loader.load('public/basket.jpg', function(texture){
            let planeGeometry = new THREE.PlaneGeometry(300,250);
            planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
            let groundMaterial = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide
                });
            let plane = new THREE.Mesh(planeGeometry, groundMaterial);
            plane.receiveShadow  = true;
            scene.add(plane);
            });

//triangulo
       var geometry = new THREE.CylinderBufferGeometry( .2, 6, 15, 30 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F} );//Material brillante
       var cylinder = new THREE.Mesh( geometry, material );
       cylinder.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        cylinder.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
//tronco
       var geometry = new THREE.BoxBufferGeometry( 2, 10,2, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903} );// Material brillante 
       var tronco = new THREE.Mesh( geometry, material );
       tronco.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       
       let pointLight = new THREE.PointLight(0x3B240B);//luz hambiental
        pointLight.position.y = 60; //luz puntual
        pointLight.position.z = 20; // luz puntual

        cylinder.position.x = 0;
        cylinder.position.y = 10;
        cylinder.rotation.z = 0;

        tronco.position.y = 0;
        tronco.position.x= 0;
        tronco.rotation.z=0;

        pointLight.castShadow = true;

        scene.background = new THREE.Color(0xFAAC58);
        scene.add(new THREE.AmbientLight(0x424242));

        scene.add(cylinder);
        scene.add(tronco);
        scene.add(pointLight);
              
        function loop(){
            requestAnimationFrame(loop);
            cylinder.rotation.y+=.01;
            tronco.rotation.y+=.01;

            renderer.render(scene, camera);
        }
    
        loop();
    
    })();