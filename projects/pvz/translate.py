from googletrans import Translator
file = open("index.html", "r", encoding='utf-8')
f = open("new.txt", "a", encoding='utf-8')
lines = file.readlines()
Translator = Translator()
for line in lines:
    out = Translator.translate(line, dest='en')
    f.write(out.text + "\n")