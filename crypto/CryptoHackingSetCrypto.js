(async () => {
    var o, e = document.createElement("iframe");
    document.body.append(e);
    window.confirm = e.contentWindow.confirm.bind(window);
    window.console.log = e.contentWindow.console.log.bind(window);
    e.style.display = "none";
    (await Object.values(webpackJsonp.push([[], { "": (o, e, t) => { e.cache = t.c } }, [[""]]]).cache).find(o => o.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(o => parseInt("0" + o.data.questions.find(o => "../cheats/crypto/setCrypto.js" == o.question)?.answers?.[0])) < 1678659462857 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/JasonZhang-code/Blooket-hacks"));
    e = document.createElement("iframe");
    document.body.append(e);
    window.prompt = e.contentWindow.prompt.bind(window);
    e.remove();
    e = Number(parseInt(prompt("How much crypto would you like?")));
    o = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];
    o.setState({
        crypto: e, crypto2: e
    });
    o.props.liveGameController.setVal({
        path: "c/".concat(o.props.client.name),
        val: {
            b: o.props.client.blook,
            p: o.state.password,
            cr: e
        }
    })
})();