var suma = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                document.write(i+"<br>")
            } else {
                suma += i;
            }
        }
        document.write("La suma de los numeros es: " + suma);