jQuery(function() {
	function notice(event) {
		$('body').append('<div class="alert alert-success">' + event + '</div>');
	}

	window.btapp = new Btapp();
	btapp.connect();

	btapp.on('add:add', function(add) {
		//add.torrent('http://featuredcontent.utorrent.com/torrents/CountingCrows-BitTorrent.torrent')
		//add.torrent('magnet:?xt=urn:btih:2110C7B4FA045F62D33DD0E01DD6F5BC15902179&dn=CountingCrows-BitTorrent&tr=udp://tracker.openbittorrent.com:80/announce')
		notice('ready to add torrents');
	});

	btapp.on('add:settings', function(settings) {
		notice('ready to play with settings');
	});

	btapp.on('add:torrent', function(torrent_list) {
		notice('we have ' + torrent_list.length + ' torrents');
	});

	btapp.on('add:dht', function(dht) {
		notice('we have access to the dht');
	});

	btapp.live('torrent * file * properties name', function(name) {
		notice('we have a file in a torrent: ' + name);
	});
});
