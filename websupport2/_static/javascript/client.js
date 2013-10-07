comm = require('./lib/comm')
events = require('./lib/events')

events.initEvents();
comm.initOptions();
comm.initMetaData();
comm.getComments()

