local DATABASE = Database()

local Inventories = {}

local UseableItems = {}

local InventoryActionQueue = {
    actions = {}
}

Citizen.CreateThread(function()
    DATABASE.Init()

    while true do
        Wait(10)
        RunInventoryActions()
    end
end)

RegisterNetEvent("xx-inventory:server:moveItem", function(source, payload)

    local inventoryData = {
        fromInventoryIdentifier = payload.fromInventoryIdentifier,
        toInventoryIdentifier = payload.toInventoryIdentifier,
    }

    local itemData = {
        fromSlot = payload.fromSlot,
        toSlot = payload.toSlot,
        itemName = payload.itemName,
        itemIdentifier = payload.itemIdentifier,
        amount = payload.amount
    }

    local action = ActionQueueEntry(
        source, ActionType.MoveItem,
        inventoryData,
        itemData
    )

    AddInventoryAction(action)
end)

RegisterNetEvent("xx-inventory:server:useItem", function(source, payload)

    local inventoryData = {
        fromInventoryIdentifier = payload.fromInventoryIdentifier
    }

    local itemData = {
        fromSlot = payload.fromSlot,
        itemName = payload.itemName,
        itemIdentifier = payload.itemIdentifier,
    }

    local action = ActionQueueEntry(
        source, ActionType.UseItem,
        inventoryData,
        itemData
    )

    AddInventoryAction(action)
end)

function LoadInventories() 
    local fetchedInventories = DATABASE.FetchInventories()

    for k, inventory in pairs(fetchedInventories) do
        Inventories[inventory.identifier] = {
            type = inventory.type,
            items = json.decode(inventory.items)
        }
    end
end

function AddInventoryAction(action)


    table.insert(InventoryActionQueue.actions, action)
end

function RunInventoryActions()

    if (#InventoryActionQueue.actions <= 0) then 
        Wait(1000)
        return
    end
    
    for k, action in pairs(InventoryActionQueue.actions) do
        
        if (action.type == ActionType.MoveItem) then
            HandleMoveItemAction(action)
        elseif (action.type == ActionType.UseItem) then
            HandleUseItemAction(action)
        end

    end

end

function HandleMoveItemAction(action)
    
end

function HandleUseItemAction(action)
    
    local fromInventory = Inventories[action.fromInventoryIdentifier]
    if fromInventory == nil then
        return
    end

    local item = fromInventory.items[action.fromSlot]

    if item == nil then
        return
    end

    if item.name ~= action.itemName then
        return
    end

    if item.isUnique then
        if item.identifier ~= action.itemIdentifier then
            return
        end
    end

    if UseableItems[item.name] == nil then
        return
    end
    --Success
    local removeItemOnUse = UseableItems[item.name].removeItemOnUse
    local callback = UseableItems[item.name].callback

    
    if removeItemOnUse then
        --Remove item instant
    end

    if callback then
        callback(action.source, item)
    end
end


