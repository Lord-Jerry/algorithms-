#Implementation of selection sort in python

#recieves an array of unsorted integers
#and returns the index of the smallest integer
def find_smallest(arr):
    smallest = arr[0];
    postion = 0;
    # iterate through array and return index of the smallest integer
    for i in range(0,len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            postion = i

    return postion


def selection_sort(arr):
    #python makes use of reference counting so directly modifying
    #the array would give me issues so i create a copy of the input array
    new_array = arr[0:len(arr)]
    sorted_array = []

    for i in arr:
        index = find_smallest(new_array)
        #remove smallest integer from array and push to sorted array
        sorted_array.append(new_array.pop(index))

    return sorted_array

#Tests
temp = 10000
arr = []
while temp > 0:
    arr.append(temp)
    temp = temp - 1

print(selection_sort(arr))