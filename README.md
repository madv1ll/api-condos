# api-condos
Rutas disponibles:
- /api/owner = Listado de dueños de las casas
- /api/owner/<rut>//debt = Deuda actual
- /api/owner/<rut>/bill = historial de pagos del dueño
- /api/owner/<rut>/house = listado de casas que posee el dueño
- /api/owner/<rut>/<houseId> = cantidad de habitantes, m2 de la cassa

- /api/condo = Listado de conominios de la empresa
- /api/condo/<condoId> = Informacion de condominios
- /api/condo/<condoId>/<houseTypeId> = Informaciñn del tipo de casa perteneciente al condominio
- /api/condo/<condoId>/service = servicios disponibles por condominio

rut 
metodos: -> 1) deuda actual(fecha desde)
	    2) historial pagos (fecha venc + pago)
	    3) casas que posee, m2
	    4) habitantes de cada casa que posee