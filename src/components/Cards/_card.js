export const CardBox = [{
    type: 'primary',
    heading: 'Earnings (Monthly)',
    title: '$40,000',
    icon: 'fa-calendar'
}, {
    type: 'success',
    heading: 'Earnings (Annual)',
    title: '$215,000',
    icon: 'fa-dollar-sign'
}, {
    type: 'info',
    heading: 'Tasks',
    title: '50%',
    icon: 'fa-clipboard-list',
    progress: 50
}, {
    type: 'primary',
    heading: 'Earnings (Monthly)',
    title: '$40,000',
    icon: 'fa-calendar'
}];

export const CardWithContent = [{
    heading: "Default Card Example",
    headerClass: '',
    parentClass: '',
    type: 'default',
    content: `This card uses Bootstrap's default styling
    with no utility classes added. Global styles are the
    only things modifying the look and feel of this
    default card example.`,
    toggle: false,
    dropdown: false
}, {
    heading: "Dropdown Card Example",
    headerClass: 'py-3 d-flex flex-row align-items-center justify-content-between',
    parentClass: 'shadow',
    type: 'primary',
    content: `Dropdown menus can be placed in the card header in order to
    extend the functionality of a basic card. In this dropdown
    card example, the Font Awesome vertical ellipsis icon in the
    card header can be clicked on in order to toggle a dropdown menu.`,
    toggle: false,
    dropdown: true
}, {
    heading: "Basic Card Example",
    headerClass: 'py-3',
    parentClass: 'shadow',
    type: 'primary',
    content: `The styling for this basic card example is
    created by using default Bootstrap utility classes.
    By using utility classes, the style of the card
    component can be easily modified with no need for any custom CSS!`,
    toggle: false,
    dropdown: false
}, {
    heading: "Collapsable Card Example",
    headerClass: 'd-block py-3',
    parentClass: 'shadow',
    type: 'primary',
    content: `This is a collapsable card example using
    Bootstrap's built in collapse functionality.
    <strong>Click on the card header</strong>
    to see the card body collapse and expand!`,
    toggle: true,
    dropdown: false
}]