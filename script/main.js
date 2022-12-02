let e = document.getElementsByName("check-flex")[0];
let nIntervId;

const getFlex = (event) => {
	changeFlex(event.target.value);
}

const changeFlex = () => {
	const flexStatus = document.getElementsByClassName("flex-container")[0];
	flexStatus.style.display = flexStatus.style.display === "flex" ? "block" : "flex";
}

const doIntervalTime = () => {
	nIntervId = setInterval(function() {
		console.log("hi");
		changeFlex();
	}, 1000);
}

const startInterval = () => {
	doIntervalTime();
}

const stopInterval = () => {
	clearInterval(nIntervId);
}


doIntervalTime();