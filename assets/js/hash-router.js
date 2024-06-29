const pageTitle = "FILA";
const routes = {
	404: {
		template: "/templates/404.html",
		title: "404 | " + pageTitle,
		description: "Page not found",
	},
	"/": {
		template: "/templates/index.html",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	store: {
		template: "/templates/store.html",
		title: "Store | " + pageTitle,
		description: "This is the about page",
	},
	contacto: {
		template: "/templates/contacto.html",
		title: "Contacto | " + pageTitle,
		description: "This is the contact page",
	},
};

const locationHandler = async () => {
	var location = window.location.hash.replace("#", "");
	if (location.length == 0) {
		location = "/";
	}
	const route = routes[location] || routes["404"];
	const html = await fetch(route.template).then((response) => response.text());
	document.getElementById("data-page").innerHTML = html;
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("data-page", route.description);
};
window.addEventListener("hashchange", locationHandler);
locationHandler();
