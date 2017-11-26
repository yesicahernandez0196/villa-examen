(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 300);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        camera.position.z = 140;
        camera.position.y = 40;  
        camera.rotation.x = -0.4;  
    
        let loader = new THREE.TextureLoader();

       loader.load('public/pasto.jpg', function(texture){
            let planeGeometry = new THREE.PlaneGeometry(200,150,5,5);
            planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
            planeGeometry.vertices[0].y = Math.sin(-20 - 10) * 50;
            planeGeometry.vertices[1].y = Math.sin(-20 - 10) * 70;
            planeGeometry.vertices[2].y = Math.sin(-20 - 10) * 50;
            planeGeometry.vertices[3].y = 20;
            planeGeometry.vertices[4].y = 35;
            planeGeometry.vertices[7].y = Math.sin(-20 - 10) * 50;
            planeGeometry.vertices[8].y = 20;
            planeGeometry.vertices[11].y = Math.sin(-20 - 10) * 50;
            planeGeometry.vertices[17].y = Math.sin(-20 - 15) * 50;
            planeGeometry.vertices[16].y = 4
            planeGeometry.vertices[19].y = Math.sin(-20 - 8) * 50;
            planeGeometry.vertices[20].y = 4
            planeGeometry.vertices[23].y = Math.sin(-20 - 10) * 50;
            planeGeometry.vertices[25].y = Math.sin(-20 - 8) * 50;
            planeGeometry.vertices[26].y = 4
            planeGeometry.vertices[28].y = 4
            planeGeometry.vertices[29].y = Math.sin(-20 - 11) * 50;
            let groundMaterial = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide,
                wireframe:!true
                });
            let plane = new THREE.Mesh(planeGeometry, groundMaterial);
            plane.receiveShadow  = true;
            plane.castShadow = true;
            plane.position.y = -5.1
            scene.add(plane);
            });
//PINOS
//triangulo
       var geometry = new THREE.CylinderGeometry( .2, 6, 15, 10 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
       var cylinder = new THREE.Mesh( geometry, material );
       cylinder.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        cylinder.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(cylinder);
        
 //tronco
       var geometry = new THREE.BoxGeometry( 2, 10, 2, 2 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
       var tronco = new THREE.Mesh( geometry, material );
       tronco.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(tronco);
//triangulo
       var geometry = new THREE.CylinderGeometry( .2, 6, 15, 10 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
       var cylinder1 = new THREE.Mesh( geometry, material );
       cylinder1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       cylinder1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(cylinder1);
       cylinder1.position.set(20,10,0);
//tronco
       var geometry = new THREE.BoxGeometry( 2, 10,2, 2 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
       var tronco1 = new THREE.Mesh( geometry, material );
       tronco1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(tronco1);
       tronco1.position.set(20,0,0);
//nubes   
       var geometry = new THREE.SphereGeometry( 3, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube = new THREE.Mesh( geometry, material );
       nube.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube);

       var geometry = new THREE.SphereGeometry( 5, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube1 = new THREE.Mesh( geometry, material );
       nube1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube1);

       var geometry = new THREE.SphereGeometry( 4, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube2 = new THREE.Mesh( geometry, material );
       nube2.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube2.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube2);

       var geometry = new THREE.SphereGeometry( 6, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube3 = new THREE.Mesh( geometry, material );
       nube3.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube3.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube3);

       var geometry = new THREE.SphereGeometry( 8, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube4 = new THREE.Mesh( geometry, material );
       nube4.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube4.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube4);

       var geometry = new THREE.SphereGeometry( 10, 10, 10, 60 );
       var material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: !true, transparent:true, opacity:.8} );// Material brillante 
       var nube5 = new THREE.Mesh( geometry, material );
       nube5.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       nube5.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(nube5);
// Agua
        loader.load('public/water.jpg', function(texture){
            let planeGeometryw = new THREE.PlaneGeometry(60,70,5,5);
            planeGeometryw.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));  
            planeGeometryw.vertices[0].y = 4
            planeGeometryw.vertices[1].y = 4
            planeGeometryw.vertices[25].y = 4
            planeGeometryw.vertices[26].y = 3
            planeGeometryw.vertices[15].y = -2
            planeGeometryw.vertices[16].y = -2
            planeGeometryw.vertices[11].y = 2
            planeGeometryw.vertices[13].y = 4
            planeGeometryw.vertices[18].y = 2
            planeGeometryw.vertices[30].y = 4
            planeGeometryw.vertices[31].y = 4
            planeGeometryw.vertices[32].y = 4
            planeGeometryw.vertices[33].y = 4
            planeGeometryw.vertices[34].y = 4
            planeGeometryw.vertices[35].y = 5
            let groundMaterial = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide,
                wireframe: !true
                });
            let planew = new THREE.Mesh(planeGeometryw, groundMaterial);
            planew.receiveShadow  = true;
            planew.castShadow = true;
            planew.position.set(-65,-10,35)
            scene.add(planew);
        });

// Luces
       let SpotLight = new THREE.SpotLight(0x959595);//luz puntual
       SpotLight.castShadow = true;
            //posiciom pinos
        cylinder.position.set(0,10,0);
        tronco.position.set(0,0,0);
        //
        scene.background = new THREE.Color(0x7177ed);
        scene.add(new THREE.AmbientLight(0x828282));//luz
        scene.add(SpotLight);
        let controls = new THREE.OrbitControls(camera, renderer.domElement);
// SOL        
        var geometry = new THREE.SphereGeometry( 6, 10, 10, 60 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: !true} );// Material brillante 
        var sol = new THREE.Mesh( geometry, material );
        sol.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        sol.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(sol);
// Cambiar Luz de dia y noche
        let changer = 0;
        document.body.onkeypress= function(){  // Dectecta si se presiona alguna tecla
         if(changer % 2 == 0){                 // Se inicializa una funcion que determina el residuo 
                                               //para alternar entre 2 valores y cargar, ya sea, una u otra textura
            SpotLight.color.setHex(0x0000ff);
            sol.material.color.setHex(0x494b7a);
            }
         else{
            SpotLight.color.setHex(0x959595);
            sol.material.color.setHex(0xffffff);
            }                                    // Se alterna entre los dos colores al oprimir cualquier tecla
            
            renderer.render(scene, camera);
                                                // Aumentamos el contador para que haya alternancia
            changer += 1;
         }


        function loop(){
            requestAnimationFrame(loop);
            let timer = Date.now() * 0.002;
            
            nube1.position.set(
                Math.cos( timer * 0.1 ) * 60,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 20,
                Math.sin( timer * 0.1 ) * 60
            );
            nube2.position.set(
                Math.cos( timer * 0.1 ) * 60,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 15,
                Math.sin( timer * 0.1 ) * 60 + 4
            );
            nube.position.set(
                Math.cos( timer * 0.1 ) * 60 + 4,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 15,
                Math.sin( timer * 0.1 ) * 60
            );
            ///////
            nube3.position.set(
                Math.cos( timer * 0.05 ) * 30,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 45,
                Math.sin( timer * 0.05 ) * 30 - 13
            );
           
            nube4.position.set(
                Math.cos( timer * 0.05 ) * 30,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 55,
                Math.sin( timer * 0.05 ) * 30 + 7
            );
            nube5.position.set(
                Math.cos( timer * 0.05 ) * 30 + 4,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 45,
                Math.sin( timer * 0.05 ) * 30
            );
            /////
            sol.position.set(
                Math.cos( timer * 0.1 ) * 90,
                Math.abs( Math.cos( timer * 0.1 ) ) * 90 + 0 ,
                Math.sin( timer * 0.1 ) * 90
            );
            SpotLight.position.set(
                Math.cos( timer * 0.1 ) * 90,
                Math.abs( Math.cos( timer * 0.1 ) ) * 90 + 0 ,
                Math.sin( timer * 0.1 ) * 90
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