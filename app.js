function loadNewVideo(){
  player.loadVideoById("me91AGSVsyo");
}

var vm = new Vue({
	el: '#app',

	data: function () {
		return {
			search: null,
			video_id: "zKmsZzJQJV0",
			playerVars: {
				autoplay: 1,
				controls: 0,
			}
		};
	},

	computed: {
		player() {
			return this.$refs.youtube.player
		}
	},

	methods: {
		searchVideos: function() {
			var self = this;

			var search = encodeURI(this.search);
			let result2 = document.getElementById("ytresult2");
			//standaardvideo
		/*	search = "me91AGSVsyo";*/
			axios.get('https://vuetv.acmoore.co.uk/search/'+search).then(function (response) {
				var first_result = response.data[0]; //Hier aanpassen voor meerder suggesties
				var second_result = response.data[1];
				self.loadVideo(first_result.video_id);
				let resultFrame = document.getElementById("result")[0];
					/*	function displayResults(){
					result2.loadVideo = self.loadVideo(second_result.video_id);
				}
				displayResults();*/
			});
		},

		loadVideo: function (video_id) {
			this.player.loadVideoById(video_id);
		},

		playVideo: function () {
			this.player.playVideo();
		},

		pauseVideo: function () {
			this.player.pauseVideo();
		},

		stopVideo: function () {
			this.player.stopVideo();
		},

		setVolume: function () {
			let volumeValue = document.getElementById("volume");
			this.player.setVolume(volumeValue.value);
		},

	/*	requestTitle: function () {
			this.player.getVideoData()["title"];
			let titleArea = document.getElementById("title");
			titleArea.innerHTML = currentTitle;
			currentTitle.setVideoData()["title"];
		},*/

		/*cueVideo: function (video_id) {
			this.player.cueVideoById(video_id, 0);
		},*/



	/*	getVideoTitle: function () {
			let videoTitle = document.getElementById("videoTitle");
			let title = snippet.title;
			videoTitle.innerHTML= title.innerHTML;
		}, */
	}
});

/*function currentTitle(){
	let self = this;
	let player;
	let currentTitle = document.getElementById("title").innerHTML = this.player.getVideoData()["title"];
	console.log(currentTitle);
}

currentTitle();*/

/*function createPlayList(){
	{
  "snippet": {
    "title": "New playlist",
    "description": "New playlist description"
  },
  "status": {
    "privacyStatus": "private"
  }
}
}*/

/*
// Import existing playlist
var player;
			  function onYouTubePlayerAPIReady() {
			    player = new YT.Player('ytplayer', {
			      height: 'auto',
			      width: '100%',

			      playerVars:{
			      	enablejsapi: 1,
              listType:'playlist',
			      	list: 'PLDr_4M2flXJlRLzruodOncrsz33omi3zp', //put playlist ID HERE <-----------------
			      	autoplay: 1,
			        controls: 0,
			        loop: 1,
			        cc_load_policy: 1,	//this fails to work . . .
			        cc_lang_pref: 'en',
			        iv_load_policy: 3,
			      }

			    });
			  }
/*

/* Auto complete */
$("#youtube").autocomplete({
    source: function(request, response){
        // API KEY
        var apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
        // Search term
        var query = request.term;
        /* YouTube search request */
        $.ajax({
            url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
            dataType: 'jsonp',
            success: function(data, textStatus, request) {
               response( $.map( data[1], function(item) {
                    return {
                        label: item[0],
                        value: item[0]
                    }
                }));
            }
        });
    },
    select: function( event, ui ) {
        $.youtubeAPI(ui.item.label);
    }
});

// Button
$('button#submit').click(function(){
    var value = $('input#youtube').val();
        $.youtubeAPI(value);
});


/* YouTube search request*/
$.youtubeAPI = function(kelime){
    $.ajax({
        type: 'GET',
        url: 'https://gdata.youtube.com/feeds/api/videos?q=' + kelime + '&max-results=15&v=2&alt=jsonc',
        dataType: 'jsonp',
        success: function( veri ){
            if( veri.data.items ){
                result.empty();
                $.each( veri.data.items, function(i, data) {
                    result.append('<div class="youtube">\
                        <img src="' + data.thumbnail.sqDefault + '" alt="" />\
                        <h3><a href="javascript:void(0)" onclick="$.youtubePlay(\'' + data.id + '\', \'' + data.content[5] + '\')">' + data.title + '</a></h3>\
                        <p>' + data.description + '</p>\
                    </div>\
                    <div class="youtubeOynat" id="' + data.id + '"></div>');
                });
            }
            else {
                result.html('<div class="hata"><strong>' + kelime + '</strong> ile ilgili hiç video bulunamadı!</div>');
            }
        }
    });
}

/*function resultsLoop(data) {
        $.each(data.items, function (i, item) {
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
						console.log(title);
        });
				resultsLoop(data);
    }*/
