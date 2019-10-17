<?php
#########################################
#                                       #
#    Configure Debugging Parameters     #
#                                       #
#########################################
/**
 * Enable Debugging to allow the Application to register with a pre-defined
 * User and API Key that is privided within your package.
 * Running the Module Framework from within a contagt Application,
 * this Data will be automatically provided by that application.
 */
define("__debugging", 1);
define("__debugging_instance", 0);
define("__print_performance", 0);


/** Are you using a Local = 0, or Remote (RPC) API = 1 on the contagt Server?
 *  The URL for Remote connections must be configured in "MODULES_CURL_URL",
 *  otherwise a local instance of the contagt Backend can be referenced in "MODULES_PATH".
*/
define("__rpc_api", 0);


#########################################
#                                       #
#       Configure L18N Settings         #
#                                       #
#########################################
/**
 * Define the available Languages in your Application. All defined l18n should be implemented in all
 * invoked modules. Thus, if not, there is a fallback to the default language.
 */
$available_l18n = array("de", "en");
define("__default_l18n", "de");

#########################################
#                                       #
# Configure the Environment-Parameters  #
#                                       #
#########################################
define("MODULES_USERAGENT", "contagt development RPC v1"); // Do not modify!

//Define either CORE_PATH or CURL_URL for RPC Source.
//Set __rpc_api to one, in order to use CURL, otherwise the framework will use includes.
if(__rpc_api) {
    define("MODULES_CURL_URL", "http://localhost/contagt/api/dev/rpc.php");
} else {
    define("MODULES_API_PATH", "/home/josue/contagt/contagt/inc/api/api.core.php");
}

define("MODULES_URL", "//localhost/contagt/modules/");
define("MODULES_PATH", "/home/josue/contagt/contagt/");
define("MODULES_TWIG_PATH", "/home/josue/contagt/contagt/libs/Twig-1.22.3/lib/Twig/");


#########################################
#                                       #
#  MySQL Configuration (only for rpc)   #
#  otherwise the contagt-Core-API will  #
#  define the MySQL Database Access     #
#                                       #
#########################################
if(__rpc_api) {
    define("MySQL_Host", "localhost");
    define("MySQL_User", "mysql_user");
    define("MySQL_Pass", "123456");
    define("MySQL_DB", "contagt_modules_db");
}

#########################################
#                                       #
# Internal Configuration, do not change #
# ##################################### #
#                                       #
# if you are not 100% sure what you are #
# doing.                                #
#                                       #
#########################################
define("__session_field_backStack", "backStack");   // Only modify on conflict with other Session Vars
define("__session_field_backcount", "backCount");   // Only modify on conflict with other Session Vars
define("__session_field_currentLocation", "currentNavigationLocation"); // Only modify on conflict with other Session Vars
define("__session_field_lastLocation", "lastNavigationLocation");   // Only modify on conflict with other Session Vars

define("__path_delimiter", "/");            // "/" if Unix-Based OS "\" on Microsoft Windows Servers


// DO ONLY MODIFY ON APPLICATION CONFLICTS!
define("__application_name", "modules");    // Do not modify!
// Define ClientVersion
define("__clientVersion", 3);                // Do not modify!

// Define the Path of the Essentials Folder.
define("__essentials_path", "essentials");   // Do not modify!
define("__modules", "modules");              // Do not modify!
define("__auto_start", "autostart");         // Do not modify!
define("resources", "resources");            // Do not modify!
define("resources_strings", "resources" . __path_delimiter . "strings" . __path_delimiter);  // Do not modify!
define("views", resources . __path_delimiter . "views");     // Do not modify!



define("CIPHER_KEY", "a452h53<wd835943");
define("CIPHER_MODE", "aes128");
// temp folder for twig templates, located unter PATH./modules/<twig_tmp_folder>
// Please make sure that the webserver's user (e.g. "www-data") has rwx Access on that Folder.
define("twig_tmp_folder", MODULES_PATH . __application_name . "/tmp");

// Allowed OS and their ALIAS Name.
define("android", "android");           // Do not modify!
define("ios", "ios");                   // Do not modify!
define("terminal4", "terminal4");       // Do not modify!
define("__default_os", "default");      // Do not modify!
define("terminal5", "terminal5");       // Do not modify!
$available_os = array(android, ios, terminal4, __default_os, terminal5);   // Do not modify!
?>
