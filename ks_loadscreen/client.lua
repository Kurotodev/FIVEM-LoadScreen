RegisterNUICallback('remove', function(data, cb)
	
	--ShutdownLoadingScreenNui()
end)
 

RegisterNetEvent("cerrar:loadscreen", function()

	ShutdownLoadingScreen()
	ShutdownLoadingScreenNui()
	SendNUIMessage({
		action = "terminar"
	})
end)