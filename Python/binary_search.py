# binary search implementation in python
def binary_search(arr, item):
    # get index of the middle element in list
    middle = len(arr) // 2
    # a list for storing a newly generated list
    temp = []
    # run if list length is 1 and element is not found yet
    if len(arr) == 1 and arr[0] != item:
        return "not found"
    # run if element has been found in the list    
    if arr[middle] == item:
        return "found"
    # assign to ``temp``` from middle to end of the input list if
    # the element in the middle of the list is lesser than the value we are searching for 
    elif arr[middle] < item:
        temp = arr[middle : len(arr)];
    # assign to ``temp` from start to middle of the input list if
    # the element in the middle of the list is greater than the value we are searching for 
    elif arr[middle] > item:
        temp = arr[0 : middle]
    # recursively call it self till value is ``found`` or not ``found``
    return binary_search(temp, item)

# tests
arr = []
i = 0
while(len(arr) < 567898):
    i= i + 1
    arr.append(i);
print(binary_search(arr,5867))