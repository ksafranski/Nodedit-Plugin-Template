# Nodedit Example/Template Plugin

This plugin eample sets up the basic structure and contents of a [Nodedit](http://www.nodedit.com) plugin.

The following describles the structure of plugins and how to create your own.

## Plugin Naming, Registration

All plugins should be placed in a directory inside of the `/plugins` directory within the root of Nodedit. 
The name of the folder should match the namespace of the plugin since assets, dependencies and calls are 
made against this registration.

The plugin can then be registered with the system by placing it inside the `/plugins/plugins.json` file:

```
{
    "Example Plugin": "example"
}
```

## Plugin Structure

The plugin core resides in the `/plugins/{plugin_dir}/plugin.js` file:

### Namespace:

The first part of the plugin is the namespace declaration:

```
nodedit.plugin.example = {
```

The above defines the `example` for access in the `nodedit.plugin` object.

### Core Configuration / Properties

The below shows the core configuration:

```
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
```

Note that all of these are optional. For example, an `icon` is only required if the plugin will have 
a menu entry (described later). The template definition is only used if DOM objects are created and the dependencies 
are only neccesary if your plugin requires additional scripts/libraries or CSS files.

### Initialization

If your plugin needs to start at the same time as the Nodedit application, for instance to load listeners or bind to 
other parts of the system then utilize the `init` method.

```
    init: function () {
        
        // Place initialiazation / startup code here, omit init completely if not needed
        
    },
```

Again, this is only required if your plugin needs to run on load.

### Menu Registration

If your plugin needs a menu entry (for example; to open a dialog) use the `onMenu` method:

```
    onMenu: function () {
        console.log('Example Plugin Opened From Menu');
    }
```

If you supply an `onMenu` method be sure that the plugin configuration includes and `icon` specification.

## Notes & Conclusion

All plugins are loaded into the application scope, so you have full access to any other methods and properties 
of the Nodedit API. If your plugin requires modification of the core API please following Nodedit contribution 
guidelines and properly submit an issue and pull request.