function dataTextSet(targetQuery) {
    const targets = document.querySelectorAll(targetQuery);
    targets.forEach(element => {
        const text = element.innerText;
        element.dataset.text = text;
    });
}
dataTextSet("#gnb section ol li a");

function foldEventSet(btnQuery, targetQuery){
    const btn = document.querySelector(btnQuery);
    const target = document.querySelector(targetQuery);
    btn.addEventListener("click", (event)=>{
        target.classList.toggle("closed");
    })
}
foldEventSet("#gnb_btn", "#gnb");
