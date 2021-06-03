exports.install = function() {

	// FlowStream
	ROUTE('+API    /api/    -streams                          *Streams      --> query');
	ROUTE('+API    /api/    -streams_read/{id}                *Streams      --> read');
	ROUTE('+API    /api/    +streams_save                     *Streams      --> save');
	ROUTE('+API    /api/    -streams_remove/{id}              *Streams      --> remove');
	ROUTE('+API    /api/    -streams_stats                    *Streams      --> stats');

	// Variables
	ROUTE('+API    /api/    -variables                        *Variables    --> read');
	ROUTE('+API    /api/    +variables_save                   *Variables    --> save');

	// Clipboard
	ROUTE('+API    /api/    -clipboard_export/id              *Clipboard    --> export');
	ROUTE('+API    /api/    +clipboard_import                 *Clipboard    --> import');

	// Socket
	ROUTE('+SOCKET  /flows/{id}/', socket, 1024 * 5);

};

function socket(id) {
	var self = this;
	MODULE('flowstream').socket(id, self);
}