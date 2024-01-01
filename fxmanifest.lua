fx_version 'cerulean'
game 'gta5'

description 'Inventory System'
version '0.1'

shared_scripts {
    'shared/config.lua',
}

server_scripts {
	'server/database.lua',
	'server/main.lua',
}

client_scripts {
	'client/main.lua',
}

ui_page 'web/build/index.html'

files {
  'web/build/index.html',
  'web/build/**/*'
}



lua54 'yes'