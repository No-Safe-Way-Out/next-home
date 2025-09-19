export function openLink(link: string, inNewTab: boolean = true) {
    const a = document.createElement('a');
    a.href = link;
    if (inNewTab) {
        a.target = '_blank';
    }
    a.click();
}
