const inject=(items, sections) => {
    sections.sort((s1, s2) => s2.index - s1.index)
        .forEach((section) => {
            items.splice(section.index, 0, section.content);
        });
    return items;
}
export { inject };
