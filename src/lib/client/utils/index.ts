export const createGradientAvatar = () => {
    const getRandomColor = () => {
        const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 100;
    canvas.height = 100;

    const gradient = ctx.createLinearGradient(0, 0, 100, 100);
    gradient.addColorStop(1, getRandomColor());
    gradient.addColorStop(0.5, getRandomColor());
    gradient.addColorStop(0, getRandomColor());

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 100, 100);
    return canvas.toDataURL();
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}