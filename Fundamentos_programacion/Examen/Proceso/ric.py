def multiply_numbers (number1, number2, number3) :
    result = number1 * number2 * number3

    print ("The result is: ", result)

print ("Please enter three numbers")

init = True
while init:
    try:
        n1 = float (input ("First number: "))
        
        n2 = float (input ("Second number: "))
        
        n3 = float (input ("Third number: "))

        multiply_numbers(n1, n2, n3)
        init = False
    except ValueError:
        print("solo numeros")