function Database() 
    local self = {}

    self.Init = function()
        exports.oxmysql:executeSync(
            [[
                CREATE TABLE IF NOT EXISTS inventories (
                    id INT AUTO_INCREMENT,
                    identifier VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,

                    items LONGTEXT NOT NULL,

                    PRIMARY KEY (`id`),
                    KEY `identifier` (`identifier`)
                    
                );
            ]]
        )
    end

    self.FetchInventories = function()
        local result = exports.oxmysql:executeSync("SELECT * FROM inventories")
       
        if result and next(result) then
            print("Fetched inventories from database")
            return result
        end

        return {}
    end

    return self
end