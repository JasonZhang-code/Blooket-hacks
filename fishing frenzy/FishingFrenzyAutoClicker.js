setInterval(() => {
    // trigger confirm modal
    let btns = ['.arts__modal___VpEAD-camelCase', '.styles__pageButton___3uI22-camelCase', '.styles__answerContainer___3WS-k-camelCase', '.styles__feedbackContainer___2ahGM-camelCase div'];

    let btn = null;

    for (const b of btns) {
        btn = document.querySelector(b);
        if (btn) {
            btn.click();
            break;
        }
    }

    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Made by Clark</p>`;
    document.body.appendChild(element);

}, 500);