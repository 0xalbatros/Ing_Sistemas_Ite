# Funcion para calcular el area de un hexagono

def areaHexagono (lado, apotema):
    #Validar que las variables sean numeros y mayores a 0
    if not (isinstance(lado, (int, float)) and lado > 0 and isinstance(apotema, (int, float)) and apotema > 0):
        #Si la condicion no se cumple imprime el mensaje
        return print("Ingresa valores validos: `Debe ser numero y mayor a 0`")
    else:
        #Si la condicion se cumple, calcular el area
        perimetro = lado * 6
        area = perimetro * apotema / 2
        return print("El area de un hexagono con perimetro de",
                    perimetro, "y apotema de ", apotema,
                    " es de ", area)

areaHexagono(1, 0)
areaHexagono(5, "5")
areaHexagono(15, 8)