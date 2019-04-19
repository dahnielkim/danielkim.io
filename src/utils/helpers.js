/**
 * Use this function to format the blog reading time
 * @param {String} minutes
 * @returns {String}
 */
export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);

  if (cups > 5) {
    return ` / ${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`;
  } else {
    return ` / ${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  }
}

/**
 * Use this function to format the blog post dates. The argument 'lang' is
 * optional and will default to the current user agent locale
 * @param {String} date
 * @param {String} lang
 * @returns {Date}
 */
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);

  const args = [lang, { day: 'numeric', month: 'long', year: 'numeric' }].filter(Boolean);

  return date.toLocaleDateString(...args);
}

/**
 * Use this function to format tags
 * @param {Array} tagsArr
 * @returns {String}
 */
export function formatTags(tagsArr) {
  let tagString = '';

  if (tagsArr.length > 0) {
    for (let i = 0; i < tagsArr.length; i++) {
      tagString += tagsArr[i];

      if (i / 2 === 0) {
        tagString = `${tagString}, `;
      }
    }

    return tagString;
  }
}
