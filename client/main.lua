
Citizen.CreateThread(function()


end)

function HandleOpenInventoryPressed() 


    SetNuiFocus(true, true)
end

AddEventHandler("xx-keybinds:openInventoryPressed", HandleOpenInventoryPressed)

RegisterNuiCallback("MoveItem", function(data, cb)
    local fromInventoryIdentifier = data.fromInventoryIdentifier
    local toInventoryIdentifier = data.toInventoryIdentifier
    local fromSlot = data.fromSlot
    local toSlot = data.toSlot
    local itemName = data.itemName
    local itemIdentifier = data.itemIdentifier
    local amount = data.amount

    --SOme server event
end)