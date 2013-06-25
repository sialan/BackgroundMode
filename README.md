BackgroundMode
==============

Protecting PhoneGap applications on iOS from getting suspended

Add the following to config.xml
<plugin name="BackgroundMode" value="BackgroundMode" onload="true" />

Add BackgroundMode.h and BackgroundMode.m into the plugin directory for your project
Include BackgroundMode.js in any html file you want to use it in

To run call Window.BackgroundMode.start() and Window.BackgroundMode.stop();
