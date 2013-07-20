/**
 * Define plugin namespace
 * @namespace nodedit.plugin.example
 */
nodedit.plugin.example = {

    // Define template(s) to load
    // On plugin initialization this object is modified to include the proper path for loading 
    // the template. For example, if you want to load a modal, something like this would work:
    // nodedit.modal.open(500, 'My Title', this.templates.dialog, {...data...}, function(){ ...callback... });
    templates: {
        dialog: 'dialog.tpl'
    },
    
    // Define icon associated with plugin (http://fortawesome.github.io/Font-Awesome/icons/)
    icon: 'icon-asterisk',
    
    // Define any dependencies, .js or .css, that the plugin requires (relative to this file)
    dependencies: [
        'deps/example_dep.js',
        'deps/example_css.css'
    ],
    
    /**
     * Define initial (onload) actions
     * @method nodedit.plugin.example.init
     */
    init: function () {
        
        // Place initialiazation / startup code here, omit init completely if not needed
        
    },
    
    /**
     * Define handling of open from plugin menu
     * @method nodedit.plugin.example.onMenu
     */
    onMenu: function () {
        console.log('Example Plugin Opened From Menu');
    }
  
};