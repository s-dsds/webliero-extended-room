window.WLROOM.onPlayerChat = function (p, m) {
	console.log(p.name+" "+m);
}

window.WLROOM.onPlayerJoin = (player) => {
	if (admins.has(player.auth) ) {
		window.WLROOM.setPlayerAdmin(player.id, true);
	}
	auth.set(player.id, player.auth);

	announce(CONFIG.room_motd, player, 0x9AB8E5, "small");
	
   // announce("please join us on discord if you're not there yet! "+CONFIG.discord_invite, player, 0xB7DBE5, "small");
    announce("If you haven't set it up yet, you will need to follow the steps here before playing: https://www.vgm-quiz.com/dev/webliero/extended", player, 0xB7DBE5, "small")
	if (player.auth){		
		auth.set(player.id, player.auth);
	}
}
