(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 300);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        camera.position.z = 70;
        camera.position.y = 10;    
    
        let loader = new THREE.TextureLoader();

       loader.load('public/bermuda.png', function(texture){
            let planeGeometry = new THREE.PlaneGeometry(200,150,50,50);
            planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
            let groundMaterial = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide
                });
            let plane = new THREE.Mesh(planeGeometry, groundMaterial);
            plane.receiveShadow  = true;
            plane.castShadow = true;
            plane.position.y = -5.1
            scene.add(plane);
            });

//triangulo
       var geometry = new THREE.CylinderGeometry( .2, 6, 15, 30 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
       var cylinder = new THREE.Mesh( geometry, material );
       cylinder.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        cylinder.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
//tronco
       var geometry = new THREE.BoxGeometry( 2, 10,2, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
       var tronco = new THREE.Mesh( geometry, material );
       tronco.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
//nubes     
       var geometry = new THREE.SphereGeometry( 3, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube = new THREE.Mesh( geometry, material );
       nube.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube);

       var geometry = new THREE.SphereGeometry( 5, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube1 = new THREE.Mesh( geometry, material );
       nube1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube1);

       var geometry = new THREE.SphereGeometry( 4, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube2 = new THREE.Mesh( geometry, material );
       nube2.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube2.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube2);

       var geometry = new THREE.SphereGeometry( 6, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube3 = new THREE.Mesh( geometry, material );
       nube3.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube3.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube3);

       var geometry = new THREE.SphereGeometry( 8, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube4 = new THREE.Mesh( geometry, material );
       nube4.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube4.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube4);

       var geometry = new THREE.SphereGeometry( 10, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
       var nube5 = new THREE.Mesh( geometry, material );
       nube5.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube5.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube5);
// Agua
// Luces
       let pointLight = new THREE.PointLight(0x959595);//luz puntual

        cylinder.position.set(0,10,0);
        tronco.position.set(0,0,0);

        pointLight.castShadow = true;

        scene.background = new THREE.Color(0x7177ed);
        scene.add(new THREE.AmbientLight(0x828282));//luz

        scene.add(cylinder);
        scene.add(tronco);
        
        scene.add(pointLight);

        
            
        let controls = new THREE.OrbitControls(camera, renderer.domElement);
        

        var geometry = new THREE.SphereGeometry( 6, 10, 10, 60 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
        var sol = new THREE.Mesh( geometry, material );
        sol.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        sol.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(sol);

        function loop(){
            requestAnimationFrame(loop);
            let timer = Date.now() * 0.002;
            nube1.position.set(
                Math.cos( timer * 0.1 ) * 60,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 10,
                Math.sin( timer * 0.1 ) * 60
            );
            nube2.position.set(
                Math.cos( timer * 0.1 ) * 60,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 5,
                Math.sin( timer * 0.1 ) * 60 + 4
            );
            nube.position.set(
                Math.cos( timer * 0.1 ) * 60 + 4,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 5,
                Math.sin( timer * 0.1 ) * 60
            );
            ///////
            nube3.position.set(
                Math.cos( timer * 0.05 ) * 30,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 30,
                Math.sin( timer * 0.05 ) * 30 - 13
            );
           
            nube4.position.set(
                Math.cos( timer * 0.05 ) * 30,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 35,
                Math.sin( timer * 0.05 ) * 30 + 7
            );
            nube5.position.set(
                Math.cos( timer * 0.05 ) * 30 + 4,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 25,
                Math.sin( timer * 0.05 ) * 30
            );
            sol.position.set(
                Math.cos( timer * 0.3 ) * 90,
                Math.abs( Math.cos( timer * 0.3 ) ) * 50 + 5,
                Math.sin( timer * 0.3 ) * 65
            );
            pointLight.position.set(
                Math.cos( timer * 0.3 ) * 90,
                Math.abs( Math.cos( timer * 0.3 ) ) * 50 + 5,
                Math.sin( timer * 0.3 ) * 65
            );
            
            /*
            camera.position.set(
                Math.cos( timer * 0.02 ) * 40,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 50,
                Math.sin( timer * 0.02 ) * 60 + 70
            );*/
            
            //cylinder.position.y += Math.sin(time)*5;
           // directionalLight.position.x += Math.random() - 0.4;
           // directionalLight.position.y += Math.random() - 0.4;
            //cylinder.rotation.y+=.01;
           // tronco.rotation.y+=.01;

            renderer.render(scene, camera);
        }
    
        loop();
    
    })();