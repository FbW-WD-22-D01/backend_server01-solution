# Lösung Aufgabe 1 - Backend

***[zur Aufgabe](https://github.com/FbW-WD-22-D01/backend_server01_sums)***

### Die Aufgabe:
*Erstelle ein Programm, das eine auszuführende Operation ("sum" oder "avg") und eine Reihe von Zahlen als Argumente annimmt. Das Programm soll das Ergebnis der Berechnung auf dem Terminal ausgeben.*

### Lösungsansatz

- die übergebenen Argumente mittel process.argv auslesen
- den Array process.argv auslesen und die Werte in Variablen speichern (operand - string und numbers - Array)
- die zum Operand passende Operation durchführen


**Bonus**
- überprüfen ob in dem numbers Array ein NaN enthalten ist
