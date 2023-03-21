(async () => {
    var e = document.createElement("iframe");
    document.body.append(e);
    window.confirm = e.contentWindow.confirm.bind(window);
    window.console.log = e.contentWindow.console.log.bind(window);
    e.style.display = "none";
    (await Object.values(webpackJsonp.push([[], { "": (e, t, o) => { t.cache = o.c } }, [[""]]]).cache).find(e => e.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(e => parseInt("0" + e.data.questions.find(e => "../cheats/doom/maxStats.js" == e.question)?.answers?.[0])) < 1678659463607 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/JasonZhang-code/Blooket-hacks"));
    e = document.createElement("iframe");
    e = (document.body.append(e),
    window.alert = e.contentWindow.alert.bind(window),
    e.remove(),
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner)["stateNode"];
    "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
        myCard: { ...e.state.myCard, strength: 20, charisma: 20, wisdom: 20 }
    })
})();