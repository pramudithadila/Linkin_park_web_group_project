
		const btn1 = document.querySelector('#switch-1');
		const btn2 = document.querySelector('#switch-2');
		const btn3 = document.querySelector('#switch-3');
		const btn4 = document.querySelector('#switch-4');
		const btn5 = document.querySelector('#switch-5');
		
		btn1.addEventListener('click',() => {
			document.documentElement.style.setProperty('--background_image','url("images/back1.jpg") no-repeat');
			document.documentElement.style.setProperty('--text_border','3px solid #6901DC');
			document.documentElement.style.setProperty('--text_1_border','3px solid #6901DC');
			document.documentElement.style.setProperty('--hover_color','#6901DC');
			
			})
		btn2.addEventListener('click',() => {
			document.documentElement.style.setProperty('--background_image','url("images/back2.jpg") no-repeat');
			document.documentElement.style.setProperty('--text_border','3px solid #0052C2');
			document.documentElement.style.setProperty('--text_1_border','3px solid #0052C2');
			document.documentElement.style.setProperty('--hover_color','#0052C2');
			})
		btn3.addEventListener('click',() => {
			document.documentElement.style.setProperty('--background_image','url("images/back3.jpg") no-repeat');
			document.documentElement.style.setProperty('--text_border','3px solid #24DD00');
			document.documentElement.style.setProperty('--text_1_border','3px solid #24DD00');
			document.documentElement.style.setProperty('--hover_color','#24DD00');
			})
		btn4.addEventListener('click',() => {
			document.documentElement.style.setProperty('--font_size','35px');
			})
		btn5.addEventListener('click',() => {
			document.documentElement.style.setProperty('--font_size','37px');
			})
		
		function changeimage(image){
			var bigimage =document.getElementById("imagebox");
			bigimage.src = image.src;
		}
		function changetext(){
			const p = document.querySelector('#text_chang');
			p.innerText = "Formed in 1996, Linkin Park rose to international fame with their debut studio album, Hybrid Theory (2000), which became certified Diamond by the Recording Industry Association of America (RIAA). Released during the peak of the nu metal scene, the album's singles' heavy airplay on MTV led the singles One Step Closer, Crawling and In the End all to chart highly on the US Mainstream Rock chart. The lattermost also crossed over to the nation's Billboard Hot 100. Their second album, Meteora (2003), continued the band's success. The band explored experimental sounds on their third album, Minutes to Midnight (2007).[3] By the end of the decade, Linkin Park was among the most successful and popular rock acts.";
		}