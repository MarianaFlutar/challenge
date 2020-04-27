const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('image-blur');
    });

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('image-blur');
    });
});

const copyright = () => {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('footer').innerHTML = '<small>&copy; Copyright ' + year + '</small>';
};

const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
}

const experienceData = {
    role: 'Role: Web Developer (Magento)',
    magento: 'Working with Magento 1 and Magento 2',
    building: 'Building extensions from scratch or installing extensions depending or the client needs',
    responsive: 'Building responsive online stores for different devices (mobile, tablet, desktop)',
    technologies: 'Working with technologies like:'
};

for (let key in experienceData) {
    const elem = document.createElement('p');
    elem.innerHTML = experienceData[key];
    document.getElementById('content').appendChild(elem);
}