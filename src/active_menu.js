const sectionIds = ['#home', '#about', '#skills','#work', '#testimonial', '#contact'];
const sections = sectionIds.map(id=> document.querySelector(id));
const navItems = sectionIds.map(id=> document.querySelector(`[href="${id}"]`));

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
    entries.forEach(entry => {
        console.log(entry.target);
        console.log(entry.Intersecting);
        console.log(entry.intersectionRatio);
    })
}




























