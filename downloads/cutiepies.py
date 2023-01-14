import re


def main(other):
 cutiePies = ("cockatoos", "dogs", "cats", "barn owls")

 animal = input("Name an" + other + " animal.")

 animal = animal.lower()

 plural = re.search("s$", animal)

 verbToBe = "is"
 start = "a "
 if plural:
  verbToBe = "are"
  start = ""

 hasAnimal = False

 for x in cutiePies:
  if x == animal  or x == animal + "s":
   hasAnimal = True

 
 if hasAnimal == True:
  print(start+ animal + " " + verbToBe + " cute.")
 else:
  print(start + animal + " " + verbToBe + " not cute.")

 main("other")


main("")
