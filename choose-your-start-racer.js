
const time = 2000;

document.addEventListener("load", function() {

	setTimeout(function() {

		const container = document.getElementById("edit-choice-63");
		const children = Array.from(container.children);
		const data = children.map(div => ({
			input: div.getElementsByTagName("input")[0],
			name: div.getElementsByTagName("label")[0].textContent,
		}));
		const processName = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
		const targetName = "Claudio Nóbrega";
		const target = data.filter(({ name }) => processName(name).indexOf(processName(targetName)) >= 0)[0];

		const { input } = target;
		const submit = document.getElementById("edit-submit-advpoll-2895");
		const form = document.getElementById("advpoll-form-2895");

		input.click();
		submit.dispatchEvent(new Event("mousedown"));

		setTimeout(function() {

			﻿document.cookie = "_ga=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.ralivm.com; path=/;"
			document.cookie = "_gid=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.ralivm.com; path=/;"
			document.cookie = "_gat=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.ralivm.com; path=/;"
			document.cookie = "advpoll2895=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.ralivm.com; path=/;"
			document.cookie = "DRUPAL_UID=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.ralivm.com; path=/;"

			﻿location.reload();

		}, time);

	}, time);

});
