function Database() 
    local self = {}

    self.Init = function()
        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories_player (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,

                    character_data LONGTEXT NOT NULL,
                    data LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )

        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories_glovebox (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,

                    data LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )

        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories_trunk (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,

                    data LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )

        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories_stash (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,

                    data LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )

        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories_container (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,

                    data LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )
    end

    return self
end