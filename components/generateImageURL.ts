function constructImageName(type: string, index: string, base?: string) {
    let tmp = `${type}_${index}.jpg`;
    if (base) {
        tmp = `${base}${tmp}`;
    }
    return tmp;
}
export function generateImageURL(
    path: string,
    url: string,
    numImages: number,
    prepend?: string
) {
    let images = [];
    for (let i = 1; i <= numImages; i++) {
        const imgName = constructImageName(
            url,
            `0${i}`,
            prepend ? prepend : undefined
        );
        images.push(`${path}/${imgName}`);
    }
    console.log(images);

    return images;
}

export default generateImageURL;
