var autoExpand = -1;

COMMAND_REGISTRY.init(window.WLROOM, {});

COMMAND_REGISTRY.add("admin", ["!admin: gives you admin if you're entitled to it"], (player) => {
    let a = auth.get(player.id);
    if (!(admins.has(a) || hidden.has(a))) {
        announce("sorry you can't do that 😅😅", player)
        return true;
    } 
    window.WLROOM.setPlayerAdmin(player.id, true);
    return false;
}, false);

COMMAND_REGISTRY.add("autoexp", ["!autoexp #number#: set auto expand with #number# as threshold"], (player, threshold) => {
    if (typeof threshold=="undefined" || threshold=="" || isNaN(threshold)) {
        autoExpand = -1;
        notifyAdmins("cleared autoexpand threshold");
        return false;
    }
    autoExpand = parseInt(threshold);
    notifyAdmins("autoexpand threshold set to `"+threshold+"`");
    return false;
}, true);