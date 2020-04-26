export const CircleButtons = {
    title: 'Circle Buttons',
    description: 'Use Font Awesome Icons (included with this theme package) along with' +
        'the circle buttons as shown in the examples below!',
    code: '.btn-circle',
    list: [{
        type: 'btn-primary',
        icon: 'fab fa-facebook-f'
    }, {
        type: 'btn-success',
        icon: 'fas fa-check'
    }, {
        type: 'btn-info',
        icon: 'fas fa-info-circle'
    }, {
        type: 'btn-warning',
        icon: 'fas fa-exclamation-triangle'
    }, {
        type: 'btn-danger',
        icon: 'fas fa-trash'
    }]
};

export const BrandButtons = {
    title: 'Brand Buttons',
    description: `Google and Facebook buttons are available featuring each
    company&rsquo;s respective brand color. They are used on the user login
         and registration pages.</p>
    <p>You can create more custom buttons by adding a new color
        variable in the <code>_variables.scss</code> file and
        then using the Bootstrap button variant mixin to create
         a new style, as demonstrated in the
         <code>_buttons.scss</code> file.`,
    list: [{
        type: 'btn-google',
        icon: 'fab fa-google fa-fw'
    }, {
        type: 'btn-facebook',
        icon: 'fab fa-facebook-f fa-fw'
    }]
};

export const SplitButtons = {
    title: 'Split Buttons with Icon',
    description: `Works with any button colors, just use the
    <code>.btn-icon-split</code> class and the markup
    in the examples below. The examples below also use
    the <code>.text-white-50</code> helper class on the
    icons for additional styling, but it is not required.`,
    list: [{
        type: 'btn-primary',
        icon: 'fas fa-flag',
        text: 'Split Button Primary'
    }, {
        type: 'btn-success',
        icon: 'fas fa-check',
        text: 'Split Button Success'
    }, {
        type: 'btn-info',
        icon: 'fas fa-info-circle',
        text: 'Split Button Info'
    }, {
        type: 'btn-warning',
        icon: 'fas fa-exclamation-triangle',
        text: 'Split Button Warning'
    }, {
        type: 'btn-danger',
        icon: 'fas fa-trash',
        text: 'Split Button Danger'
    }, {
        type: 'btn-secondary',
        icon: 'fas fa-arrow-right',
        text: 'Split Button Secondary'
    }, {
        type: 'btn-light',
        icon: 'fas fa-arrow-right',
        text: 'Split Button Primary',
        dividerText: 'Also works with small and large button classes!'
    }, {
        type: 'btn-primary btn-sm',
        icon: 'fas fa-flag',
        text: 'Split Button Small'
    }, {
        type: 'btn-primary lg',
        icon: 'fas fa-flag',
        text: 'Split Button Large'
    }]
}