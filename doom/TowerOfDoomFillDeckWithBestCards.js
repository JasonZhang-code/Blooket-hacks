(async () => {
    var e = document.createElement("iframe");
    if (document.body.append(e),
    window.confirm = e.contentWindow.confirm.bind(window),
    window.console.log = e.contentWindow.console.log.bind(window),
    e.style.display = "none",
    await Object.values(webpackJsonp.push([[], { "": (e, o, t) => { o.cache = t.c } }, [[""]]]).cache).find(e => e.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(e => parseInt("0" + e.data.questions.find(e => "../cheats/doom/fillDeck.js" == e.question)?.answers?.[0])) < 1678659463471 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/JasonZhang-code")) {
        e = document.createElement("iframe");
        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
            var { a: e, c: o } = webpackJsonp.push([[], { "": (e, o, t) => { o.cache = t.c } }, [[""]]]).cache.gvfT.exports;
            t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
            t.props.tower.artifacts = Object.keys(e);
            t.props.tower.cards = Object.entries(o).map(([e, o]) => ({ ...o, blook: e, strength: 20, charisma: 20, wisdom: 20 }));
            try {
                t.props.addTowerNode()
            } catch { }
            t.setState({
                showDeck: !1
            })
        } else
            alert("You need to be on the map to run this cheat!")
    }
})();