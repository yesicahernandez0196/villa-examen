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
            //MANIPULACION DE LOS VERTICES PARA DAR RELIEVE SIMULANDO MONTANAS
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
       var geometry = new THREE.CylinderGeometry( .2, 8, 17, 10 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
       var cylinder = new THREE.Mesh( geometry, material );
       cylinder.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        cylinder.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(cylinder);
        cylinder.position.set(-35, 20,-30);
        
 //tronco
       var geometry = new THREE.BoxGeometry( 2, 10, 2, 2 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
       var tronco = new THREE.Mesh( geometry, material );
       tronco.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(tronco);
       tronco.position.set(-35,9,-30);
//triangulo
       var geometry = new THREE.CylinderGeometry( .2, 4, 15, 10 );
       var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
       var cylinder1 = new THREE.Mesh( geometry, material );
       cylinder1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       cylinder1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(cylinder1);
       cylinder1.position.set(-20,18,-30);
//tronco
       var geometry = new THREE.BoxGeometry( 2, 10,2, 2 );
       var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
       var tronco1 = new THREE.Mesh( geometry, material );
       tronco1.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
       tronco1.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
       scene.add(tronco1);
       tronco1.position.set(-20,8,-30);
//triangulo
        var geometry = new THREE.CylinderGeometry( .2, 6, 15, 10 );
        var material = new THREE.MeshPhongMaterial( {color: 0x2C672F, wireframe: !true} );//Material brillante
        var cylinder2 = new THREE.Mesh( geometry, material );
        cylinder2.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        cylinder2.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(cylinder2);
        cylinder2.position.set(-25,12,-20);
//tronco
        var geometry = new THREE.BoxGeometry( 2, 10,2, 2 );
        var material = new THREE.MeshPhongMaterial( {color: 0x5A3903, wireframe: !true} );// Material brillante 
        var tronco2 = new THREE.Mesh( geometry, material );
        tronco2.receiveShadow = true;//en verdadero si se supone que el objeto recibirá sombras.
        tronco2.castShadow = true; //en verdadero si el objeto tapa la luz, por lo que proyecta una sombra. 
        scene.add(tronco2);
        tronco2.position.set(-25,2,-20);
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
            planeGeometryw.vertices[0].y = 4    //manipulacion de los vertices para dar relieve al plano, como si fuera un lago
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
// Vacas
 //cubo negro
 var geometry1 = new THREE.BoxGeometry( 5, 5, 5,  );
 var material1 = new THREE.MeshPhongMaterial( { color: 0x000000} );
 var cubo1 = new THREE.Mesh( geometry1, material1 );
 cubo1.position.x = -16;
 cubo1.position.z = 0;
 cubo1.position.y = 7; 
 cubo1.receiveShadow = true;
 cubo1.castShadow = true;
 scene.add(cubo);

 //cubo gris
 var geometry = new THREE.BoxGeometry( 3, 3, 3,  );
 var material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
 var cubo = new THREE.Mesh( geometry, material );
 cubo.position.x = -15;
 cubo.position.z = 0;
 cubo.position.y = 4; 
 cubo.receiveShadow = true;
 cubo.castShadow = true;
 scene.add(cubo1);

 //cubo negro2
   var geometry2 = new THREE.BoxGeometry( 3, 3, 3,  );
   var material2 = new THREE.MeshPhongMaterial( { color: 0x000000} );
   var cubo2 = new THREE.Mesh( geometry2, material2 );
   cubo2.position.x = -12;
   cubo2.position.z = 0;
   cubo2.position.y = 4;
   cubo2.receiveShadow = true;
   cubo2.castShadow = true;
   scene.add(cubo2);
    //cubo gris3
 var geometry3 = new THREE.BoxGeometry( 3, 3, 3);
 var material3 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
 var cubo3 = new THREE.Mesh( geometry3, material3 );
 cubo3.position.x = -9;
 cubo3.position.z = 0;
 cubo3.position.y = 4;  
 cubo3.receiveShadow = true;
 cubo3.castShadow = true;
 scene.add(cubo3);
 //cubo negro4
 var geometry4 = new THREE.BoxGeometry( 3, 3, 3);
 var material4 = new THREE.MeshPhongMaterial( { color: 0x000000} );
 var cubo4 = new THREE.Mesh( geometry4, material4 );
 cubo4.position.x = -15;
 cubo4.position.z = 0;
 cubo4.position.y = 1;  
 cubo4.receiveShadow = true;
 cubo4.castShadow = true;
 scene.add(cubo4);
 //cubo gris5
 var geometry5 = new THREE.BoxGeometry( 3, 3, 3,  );
 var material5 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
 var cubo5 = new THREE.Mesh( geometry5, material5 );
 cubo5.position.x = -12;
 cubo5.position.z = 0;
 cubo5.position.y = 1; 
 cubo5.receiveShadow = true;
 cubo5.castShadow = true;
 scene.add(cubo5);
 //cubo negro6
 var geometry6 = new THREE.BoxGeometry( 3, 3, 3,  );
 var material6 = new THREE.MeshPhongMaterial( { color: 0x000000} );
 var cubo6 = new THREE.Mesh( geometry6, material6 );
 cubo6.position.x = -9;
 cubo6.position.z = 0;
 cubo6.position.y = 1; 
 cubo6.receiveShadow = true;
 cubo6.castShadow = true;
 scene.add(cubo6);
 //pata 7
 var geometry7 = new THREE.BoxGeometry( 3, 5, 3,  );
 var material7 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
 var cubo7 = new THREE.Mesh( geometry7, material7 );
 cubo7.position.x = -15;
 cubo7.position.z = 0;
 cubo7.position.y = -2; 
 cubo7.receiveShadow = true;
 cubo7.castShadow = true;
 scene.add(cubo7);
 //pata 8
 var geometry8 = new THREE.BoxGeometry( 3, 5, 3,  );
 var material8 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
 var cubo8 = new THREE.Mesh( geometry8, material8 );
 cubo8.position.x = -9;
 cubo8.position.z = 0;
 cubo8.position.y = -2; 
 cubo8.receiveShadow = true;
 cubo8.castShadow = true;
 scene.add(cubo8);
  //ojo 9
  var geometry9 = new THREE.BoxGeometry( 1.5, 1.5, 5,  );
  var material9 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
  var cubo9 = new THREE.Mesh( geometry9, material9 );
  cubo9.position.x = -17;
  cubo9.position.z = 0;
  cubo9.position.y = 8;
  cubo9.receiveShadow = true;
  cubo9.castShadow = true;
  scene.add(cubo9);
  //ojo 10
  var geometry10 = new THREE.BoxGeometry( .7, .7, 5,  );
  var material10 = new THREE.MeshPhongMaterial( { color: 0x000000} );
  var cubo10 = new THREE.Mesh( geometry10, material10 );
  cubo10.position.x = -17;
  cubo10.position.z = 0;
  cubo10.position.y = 8;
  cubo10.receiveShadow = true;
  cubo10.castShadow = true;
  scene.add(cubo10);
  //boca 11
  var geometry11 = new THREE.BoxGeometry( 3, .7, 5,  );
  var material11 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
  var cubo11 = new THREE.Mesh( geometry11, material11 );
  cubo11.position.x = -17;
  cubo11.position.z = 0;
  cubo11.position.y = 6;
  cubo11.receiveShadow = true;
  cubo11.castShadow = true;
  scene.add(cubo11);
  //oreja 12
  var geometry12 = new THREE.BoxGeometry( 2, 2, 5,  );
  var material12 = new THREE.MeshPhongMaterial( { color: 0xFFFFFF} );
  var cubo12 = new THREE.Mesh( geometry12, material12 );
  cubo12.position.x = -15;
  cubo12.position.z = 0;
  cubo12.position.y = 8;
  cubo12.receiveShadow = true;
  cubo12.castShadow = true;
  scene.add(cubo12);
  //colita 13
  var geometry13 = new THREE.BoxGeometry( 1, 3, 1,  );
  var material13 = new THREE.MeshPhongMaterial( { color: 0x000000} );
  var cubo13 = new THREE.Mesh( geometry13, material13 );
  cubo13.position.x = -7;
  cubo13.position.z = 0;
  cubo13.position.y = 7;
  cubo13.receiveShadow = true;
  cubo13.castShadow = true;
  scene.add(cubo13);

// Cambiar Luz de dia y noche
        let changer = 0;
        document.body.onkeypress= function(){  // Dectecta si se presiona alguna tecla
         if(changer % 2 == 0){                 // Se inicializa una funcion que determina el residuo 
                                               //para alternar entre 2 valores y cargar, ya sea, uno u otro color
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
            // se crean funciones para cambiar la posicion de nubes, el sol, y la luz puntual
            // como esta dentro de un loop se refresca, y parece que avanzan las nuves y el sol
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
            
            // se establecio una ruta en la camara para ver el escenario sin mover el raton
            camera.position.set(
                Math.cos( timer * 0.02 ) * 40,
                Math.abs( Math.cos( timer * 0 ) ) * 20 + 50,
                Math.sin( timer * 0.02 ) * 60 + 70
            );
            
            //cylinder.position.y += Math.sin(time)*5;
           // directionalLight.position.x += Math.random() - 0.4;
           // directionalLight.position.y += Math.random() - 0.4;
            //cylinder.rotation.y+=.01;
           // tronco.rotation.y+=.01;

            renderer.render(scene, camera);
        }
    
        loop();
    
    })();