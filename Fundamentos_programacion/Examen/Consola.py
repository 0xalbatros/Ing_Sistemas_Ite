
from functools import reduce

#Para usar desde la consola
#Recibe un argumento que define la cantidad maxima de numeros que se puede multiplicar.
#Transforma el input a float o int segun el caso, por lo que no es necesario condicionales para validar, solo el uso del try y except por si surge un error.
#Ciclo while para introducir todos los numeros a la lista que contiene todos los numeros que se van a multiplicar.
#Para la multiplicacion usamos el metodo reduce, asi podemos obtener el resultado sin importar la cantidad de valores que contenga la lista.
#join() para una representacion estetica en la consola y algunas condiciones adicionales en caso que se quiera hacer otra operación

def main(cantidadPermitida):
    num = []
    n = None
    while n is None:
        try:
            n = int(input(f"Cuantos numeros quieres multiplicar? (MAX {cantidadPermitida}) "))
            if n > cantidadPermitida or n <= 0:
                n = None
                print(f"No se permiten mas de {cantidadPermitida} numeros")
        except ValueError:
            print("Error: Debes ingresar un numero entero")
        while len(num) != n and n is not None:
            try:
                num.append(float(input("Ingrese un numero: ")))
            except ValueError:
                print("Solo deben ser numeros")
        if len(num) == n:
            print(f"{' x '.join(map(str, num))} =", reduce(lambda a,b:a*b,num, 1))
            print("Quieres realizar otra operacion?")
            print("1.- Si")
            print("<Cualquier otra tecla>- No")
            resp = input("Respuesta: ")
            if resp == "Si" or resp == "1":
                num.clear()
                n = None
            else:
                print("Cerrar programa")

main(3)
