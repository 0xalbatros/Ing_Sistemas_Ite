import functools
num=[]
o=int
try:
    o=int(input("Quieres iniciar una operación? Si=1, No=Presiona cualquier otra tecla. "))
except ValueError:
    print("Cerrar programa")
    quit()
if (o!=1):
    print("Cerrar programa.")
    quit()
while o==1:
    n=0
    while (n==0 and n!= type(int)) or  n>10:
        try:
            n=int(input("Cuantos numeros quieres multiplicar? Max 10 num."))
        except ValueError:
            print("Error: Debes ingresar un numero entero menor a 10.")
    while len(num) != n:
        try:
            num.append(float(input("Ingrese un numero: ")))
        except ValueError:
            print("Solo deben ser numeros")
    if len(num) == n:
        print(functools.reduce(lambda a,b:a*b,num, 1))
        print("Quieres realizar otra operacion?")   
        r=2
        while r!=1 and r!=0:
            try:
                r = int(input("si-1 No-0"))
            except ValueError:
                print("No ingresaste opciòn valida.")
            if r == 1 :
                num.clear()
            elif(r!=1 and r!=0):
                print("Intenta de nuevo")
            elif(r==0):
                print("Cerrar programa")
                quit()