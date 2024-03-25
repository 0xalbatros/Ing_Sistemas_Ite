def capturar_numeros():
    while True:
        num1 = input("Ingresa el primer número: ")
        num2 = input("Ingresa el segundo número: ")
        num3 = input("Ingresa el tercer número: ")

        try:
            val1 = float(num1)
            val2 = float(num2)
            val3 = float(num3)
            
            total = float (val1 * val2 * val3)
            
            print(f"El resultado es: {total}")
            break
        except ValueError:
            print("Alguno valores ingresados no son números. Inténtalo de nuevo.")

capturar_numeros()