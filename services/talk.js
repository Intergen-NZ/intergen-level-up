export function getTalks(pages) {
    return pages.filter(page => page.path.indexOf('/talks/') === 0);
}