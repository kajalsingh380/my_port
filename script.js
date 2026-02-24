const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
	menuIcon.addEventListener('click', () => {
		navbar.classList.toggle('active');
	});

	document.querySelectorAll('.navbar a').forEach(link => {
		link.addEventListener('click', () => navbar.classList.remove('active'));
	});
}

// Optional: close navbar when clicking outside on small screens
document.addEventListener('click', (e) => {
	if (!navbar || !menuIcon) return;
	if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
		navbar.classList.remove('active');
	}
});
