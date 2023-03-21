(async () => {
    var e, o = document.createElement("iframe");
    document.body.append(o);
    window.confirm = o.contentWindow.confirm.bind(window);
    window.console.log = o.contentWindow.console.log.bind(window);
    o.style.display = "none";
    (await Object.values(webpackJsonp.push([[], { "": (e, o, t) => { o.cache = t.c } }, [[""]]]).cache).find(e => e.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(e => parseInt("0" + e.data.questions.find(e => "../cheats/dinos/setFossils.js" == e.question)?.answers?.[0])) < 1678659463291 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/JasonZhang-code/Blooket-hacks"));
    o = document.createElement("iframe");
    document.body.append(o);
    window.prompt = o.contentWindow.prompt.bind(window);
    o.remove();
    o = Number(parseInt(prompt("How many fossils would you like?")));
    e = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
    e.setState({
        fossils: o
    });
    e.props.liveGameController.setVal({
        path: "c/" + e.props.client.name,
        val: {
            b: e.props.client.blook,
            f: o,
            ic: e.state.isCheating
        }
    })
})();