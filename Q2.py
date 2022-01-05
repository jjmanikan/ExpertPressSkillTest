import json

#Q2 Solution -  Write Python code to create a dictionary for the same information above and convert it to JSON
#opens json file then create dictionary object to store in: use ./personlocal/personJSON if using nodejs local storage from Q1 solution
with open('personJSON.json') as json_file:
    data = json.load(json_file)

print('Person: ', data)
print(type(data))
