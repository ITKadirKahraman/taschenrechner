# 🧮 Taschenrechner

Ein einfacher und moderner Taschenrechner, entwickelt mit **HTML**, **CSS** und **JavaScript**.  
Das Projekt unterstützt grundlegende mathematische Operationen und wurde mit Fokus auf sauberen Code und DOM-Manipulation umgesetzt.

---

## 🚀 Features

- ➕ Addition
- ➖ Subtraktion
- ✖️ Multiplikation
- ➗ Division
- 📊 Prozentrechnung
- ⌫ Letztes Zeichen löschen
- 🧹 Display vollständig zurücksetzen
- 🔄 Dynamische Berechnung über JavaScript
- 📱 Responsives Layout

---

## 🛠️ Verwendete Technologien

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Projektstruktur

```bash
📁 Taschenrechner
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 calculator.js
 ┗ 📁 img
```

---

## ⚙️ Funktionen im JavaScript

### `handleInput(value)`
Verarbeitet alle Eingaben der Buttons und entscheidet, welche Funktion ausgeführt wird.

### `addNumber(value)`
Fügt Zahlen zum aktuellen Display hinzu.

### `setOperator(value)`
Speichert den gewählten Operator und wechselt zur zweiten Zahl.

### `calculator()`
Berechnet das Ergebnis anhand des ausgewählten Operators.

### `resetCalculator()`
Setzt den kompletten Taschenrechner zurück.

### `deleteLastElement()`
Löscht das letzte eingegebene Zeichen.

---

## 🧠 Verwendete Konzepte

### DOM-Manipulation
Alle Eingaben und Ausgaben werden dynamisch über JavaScript gesteuert.

### EventListener
Jeder Button erhält einen eigenen `click`-EventListener.

```javascript
button.addEventListener("click", () => {
    let value = button.dataset.value;
    handleInput(value);
});
```

### Zustandsverwaltung
Der Taschenrechner speichert:
- erste Zahl
- zweite Zahl
- Operator
- aktuellen Zustand

```javascript
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;
```

### Switch-Case
Für die mathematischen Operationen wird `switch` verwendet.

```javascript
switch(operator)
{
    case "+":
        result = num1 + num2;
        break;
}
```

---

## 🎨 Design

Das UI wurde mit CSS gestaltet:
- modernes Farbschema
- große Buttons
- klare Benutzeroberfläche
- responsive Darstellung

Verwendete CSS-Techniken:
- Flexbox
- CSS Variablen (`:root`)
- Responsive Größen
- Hover- und Layout-Struktur

---

## 📸 Vorschau

<img width="600" alt="Taschenrechner Vorschau" src="https://via.placeholder.com/600x350.png?text=Taschenrechner+Preview">

---

## 📚 Lerninhalte aus diesem Projekt

Mit diesem Projekt wurden folgende Themen geübt:

- JavaScript Grundlagen
- Funktionen
- Arrays & Strings
- DOM-Manipulation
- Event Handling
- Zustandsverwaltung
- CSS Layouts
- Responsive Design

---

## 👨‍💻 Autor

**Kadir Kahraman**

Projekt im Rahmen des Lernprozesses bei der Developer Akademie erstellt.

---

## 🔗 GitHub

Hier kannst du das Projekt herunterladen oder ansehen:

```bash
git clone https://github.com/DEIN-GITHUB-USERNAME/taschenrechner.git
```

---
