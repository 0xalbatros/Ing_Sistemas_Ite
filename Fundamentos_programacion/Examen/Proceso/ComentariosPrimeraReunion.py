from functools import reduce

#Codigo simple para multiplicar tres numeros
#Declarando cada variable a multiplicar

# x = 1
# y = 2
# z = 3

# multiplicar = x * y * z
# print(multiplicar)

#tambien puedes hacer la multiplicacion en el print
# print(x * y * z)

#Declarar solo un array de numeros en vez de tres variables
# num = [1,2,3,4,5]
# multiplicar = num[0]*num[1]*num[2]
# print(multiplicar)
# multiplicando en el print
# print(num[0]*num[1]*num[2])

# Establecer condiconales para validar que las variables sean numeros

# if not (isinstance(x, (int, float)) and isinstance(y, (int, float)) 
#   and isinstance(z, (int, float))):
# print("Error: Todos los números deben ser enteros o flotantes")
# else:
# print(x*y*z)

# if not (isinstance(num[0], (int, float)) and isinstance(num[1], (int, float)) 
#         and isinstance(num[2], (int, float))):
#   print("Error: Todos los números deben ser enteros o flotantes")
# else:
#   print(num[0]*num[1]*num[2])

# Recorrer la lista para validar 

# if any(not isinstance(x, (float, int)) for num in num):
#     print("Error: Todos los números deben ser enteros o flotantes")
# else:
#   print(num[0]*num[1]*num[2])

# Validar que sean solo 3 numeros

# if len(num) != 3:
#   print("Error: Debe ingresar exactamente 3 números")

# Multiplicar todos los valores de una lista

#definir funcion con def

# def multiplicar(num):
#   resultado = 1
#   for num in num:
#     resultado *= num
#   return resultado

# print(multiplicar(num))

#definir funcion lambda

# multiplicar = lambda x, y: x * y
# sumar = lambda x, y: x + y

#Funcion lambda solo puede definirse en una sola linea.
#Para lograr multiplicar todos los numeros de una lista recorremos la lista usando reduce()

# print(reduce(sumar, num))

#Podemos incluir el reduce() dentro de la funcion lambda

#multiplicar = lambda *num: reduce(lambda x, y: x * y, *num)

#Ya tenemos las validaciones y funciones simplificadas.
#Ahora solo falta juntar todo y ejecutarlo

#En lineas

# if any(not isinstance(num, (float, int)) for num in num):
#     print("Error: Todos los números deben ser enteros o flotantes")
# if len(num) != 3:
#   print("Error: Debe ingresar exactamente 3 números")
# else:
#   print(reduce(multiplicar, num))

#En funcion def
#num es la lista que se va a multiplicar, n es la cantidad de numeros que se acepta multiplicar
#debemos validar que la num sea una lista
# def multiplicarNNumeros(num, n):
#   if not isinstance(num, (list, tuple, set)) or any(not isinstance(num, (float, int)) for num in num):
#     return "Error: Debe ser una lista de numeros"
#   elif len(num) != n:
#     return f"Error: Debe ingresar exactamente {n} números"
#   else:
#     return multiplicar(num)

# print(multiplicarNNumeros(num, 5))

#Si fueran variables en vez de lista
#*args representa un numero indefinido de argumentos

# def multiplicarTresNum(*args):
#   if not all(isinstance(num, (int, float)) for num in args):
#     return "Error: Deben ser numeros"
#   elif len(args) != 3:
#     return f"Error: Debe ingresar exactamente  3 números"
#   else:
#     return multiplicar(args)

# print(multiplicarTresNum(3,4,5))
# print(multiplicar(3,4,5))