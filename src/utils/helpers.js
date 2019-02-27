// formats the reading time
export function formatReadingTime(minutes) {
    // const cups = Math.round(minutes / 5);
    return ` - - ${minutes} min read`;
}

/*
${new Array(cups || 1)
        .fill("☕️")
        .join("")} 
*/

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
    if (typeof Date.prototype.toLocaleDateString !== "function") {
        return date;
    }

    date = new Date(date);

    const args = [
        lang,
        { day: "numeric", month: "long", year: "numeric" },
    ].filter(Boolean);

    return date.toLocaleDateString(...args);
}

export function formatTags(tagsArr) {
    let tagString = "";
    if (tagsArr.length > 0) {
        for (let i = 0; i < tagsArr.length; i++) {
            tagString = tagString + tagsArr[i];
            if (i / 2 === 0) {
                tagString = tagString + ", ";
            }
        }
        return tagString;
    }
}
