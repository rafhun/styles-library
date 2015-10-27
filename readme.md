# Styles / Component Library by rafhun
Version: 2.1.0

## Goal
This library assembles configurable UI components organized in the Atomic Design approach described by [Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/). In the end we want to be able to share common UI components between projects while keeping them easily configurable and adaptable. This is why everything that is possible and makes sense will be architected as mixins that offer many configuration options. In this way this library does not force the use of a certain markup on you. Most things are styled with classes that can be freely configured. Of course stuff like navigations assume a basic list structure but also give you the freedom to choose your own classes. Most components that will depend on a CMS in the usual cases have been set up with the possibilities of a basic Wordpress install where one is limited on i. e. elements that classes can be applied to without custom walker functions. Also the default settings of these components reflect the Wordpress defaults.

## File Structure
As mentioned above the organization follows the Atomic Design approach to some extent which is also reflected in the folder structure. We differentiate mainly between molecules and organisms while of course the atoms set a base style to everything. However primarily molecules and organisms will be shared between projects for now which is also why the focus lies mostly on them. Though for this to work we need to have a well thought out dependency setup since many basic configuration variables used for molecules and organisms refer back to that.

To keep things neatly organized each molecule and organism gets its own subfolder which contains a configuration and a styles partial. The configuration should not compile to any CSS and thus only contain the logic for the UI component. The styles that are output stem from the styles file where the mixin defined in the configuration file is called and applied with the arguments chosen.

We have separate manifest files for molecules and organisms which keeps the main manifest `style.scss` nicely organized and keeps the import statments within the manifest files simple and offers us the opportunity to create an import snippet which makes the whole process even simpler. However thanks to the mixin approach you also have the opportunity to add everything in this repo to your project and only call the mixins you actually need.

## Styleguide and Documentation
This library creates a styleguide using the `grunt-kss` plugin. This nicely displays the styles and necessary markup with some additional description. The styleguide is built by adding correctly formatted comments and markup files.

Most of the created mixins and functions are documented nicely with `Sassdoc` and is placed in the documentation folder. There you can find detailed documentation on the Sass like a mixin's dependencies and a detailed outline of its parameters.
