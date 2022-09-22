var initDemo = function(){
				var header = document.getElementById("header");
				var skin = location.href.split('skin=')[1];
				
				if(!skin) {
					skin = 'Snapgram';
				} 

				if(skin.indexOf('#')!==-1){
				   skin = skin.split('#')[0];
				}

				var skins = {
					'Snapgram': {
						'avatars': true,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': true
					},

					'VemDeZAP': {
						'avatars': false,
						'list': true,
						'autoFullScreen': false,
                        'cubeEffect': false
					},

					'FaceSnap': {
						'avatars': true,
						'list': false,
						'autoFullScreen': true,
                        'cubeEffect': false
					},

					'Snapssenger': {
						'avatars': false,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': false
					}
				};
				
				var timeIndex = 0;
				var shifts = [35, 60, 60*3, 60*60*2, 60*60*25, 60*60*24*4, 60*60*24*10];
				var timestamp = function() {
				    var now = new Date();
				    var shift = shifts[timeIndex++] || 0;
				    var date = new Date( now - shift*1000);

				    return date.getTime() / 1000;
				};

				var stories = new Zuck('stories', {
					backNative: true,
                    previousTap: true,
					autoFullScreen: skins[skin]['autoFullScreen'],
					skin: skin,
					avatars: skins[skin]['avatars'],
					list: skins[skin]['list'],
                    cubeEffect: skins[skin]['cubeEffect'],
					localStorage: true,
					stories: [
						{
							id: "ladygaga",
							photo: "https://raw.githubusercontent.com/puskarevicmarko/puskarevicmarko.github.io/master/zuck/nolita2.png",
							name: "Kiki's",
							link: "",
							lastUpdated: timestamp(),
							items: [
								Zuck.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/puskarevicmarko/puskarevicmarko.github.io/master/nolita1.jpg", "https://raw.githubusercontent.com/puskarevicmarko/puskarevicmarko.github.io/master/nolita1.jpg", '', false, false, timestamp()),
								Zuck.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/puskarevicmarko/puskarevicmarko.github.io/master/zuck/nolita2.png", "https://raw.githubusercontent.com/puskarevicmarko/puskarevicmarko.github.io/master/zuck/nolita2.png", 'http://ladygaga.com', false, false, timestamp()),
										 
							]
						}
					]
				});

                var el = document.querySelectorAll('#skin option');
                var total = el.length;
                for (var i = 0; i < total; i++) {
					var what = (skin==el[i].value)?true:false;
                    
					if(what){
						el[i].setAttribute('selected', what);

						header.innerHTML = skin;
						header.className = skin;
					} else {
						el[i].removeAttribute('selected');
					}
                }

				document.body.style.display = 'block';
			};
			
			initDemo();