from functools import reduce

#Para utilizar en una aplicacion web
#Recibe una lista como argumento
#Se puede retirar la validacion de la longitud de la lista y asi multiplicar cualquier cantidad de numeros, o se puede agregar un argumento que establezca la cantidad que numeros que se quiere permitir multiplicar
#La funcion valida que todos los elementos de la lista sean int o float con not all() que devuelve true o false y un ciclo for para considerar todas las variables de la lista y no ser repetitivos con las condiciones
#Definimos una lista error para capturar las respuestas de error y devolverlo para su uso en el front.
#De esta manera si se presentan ambos errores los devuelve. Incluir estas validaciones es cuestionable debido a que se podrian validar por fuera de la funcion al momento de estar creando toda la estructura de una pagina web, pero para fines de la practica decidimos incluirlo aqui.
#Para la multiplicacion usamos el metodo reduce, asi podemos obtener el resultado sin importar la cantidad de valores que contenga la lista.

def multiplicarTresNum(numeros):
        error = []
        if not all(isinstance(num, (int, float)) for num in numeros):
            error.append("Error: Deben ser numeros")
        if len(numeros) != 3:
            error.append("Error: Debe ingresar exactamente 3 números")
        if len(error) == 0:
            return reduce(lambda acum, num: acum * num, numeros, 1)
        else:
            return error

print(multiplicarTresNum([1,2,"3"]))
print(multiplicarTresNum([3,5,3,2]))
print(multiplicarTresNum([3,"5",3,2]))
print(multiplicarTresNum([7,6,3]))