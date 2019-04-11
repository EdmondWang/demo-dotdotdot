document.addEventListener("DOMContentLoaded", () => {
    let wrapper = document.querySelector(".wrapper");
    let options = {
        ellipsis: '...',
        watch: true,
        height: null
    };
    new Dotdotdot(wrapper, options);
});