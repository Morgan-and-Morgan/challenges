# WordPress Challenge

## Demonstrate knowledge of WordPress Actions, Filters, Plugins, Widgets and AJAX

The task here is to create a WordPress Plugin that:

1. Provides an Admin Page that allows an Administrator to define custom post types.
2. Provides a widget that only shows up on custom post types defined by the plugin.

The widget itself has a few requirements:

1. In the admin page (Appearance > Widgets), it should provide a description about what it does.
2. In addition to the above description, it should take contain a single field to be filled with a URL, to be used by step 3.
  * In addition, if any API keys will be required (see step 3), they should be enterable here.
3. The frontend of the widget should query any API of your choice for the current post's Title, using the URL filled in Step 2.
  * There is no need to cache results here -- this is purely to demonstrate WordPress.
4. The widget should display the top/first/whatever results from the API in a meaningful way to a user.

There are some listing services that list/document various APIs you can use here:

* [Any API](https://any-api.com)
* [API List](https://apilist.fun)
* [API Directory](https://www.programmableweb.com/apis/directory)

Personally I've had fast success with NASA's API's, Amazon Product Advertising, and BoardGameGeek's (while theirs is XML, there is someone offering a JSON wrapper service around their API).
