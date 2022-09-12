#name facts:
name = input("Enter your name, please: ")

print("Your name is " + str(len(name)) + " letters long and starts with a " + name[0].upper()
      + " and ends with a " + name[-1].upper())


#numberComparer:
num1 = input("Enter a number: ")

num2 = input("Enter another number: ")

if num1 == num2:
 print("Those are the same number")
else:
 print(max(num1, num2) + " is the greater number.")

#dogClass:
 
class Dog:
    def __init__(self, breed, age, name):
     self.breed = breed
     self.age = age
     self.name = name

    def desc(self):
     print(self.name + " is a " + str(self.age) + " year old " + self.breed)

Harry = Dog("Dauchsteese", 8, "Harry")
Harry.desc()
